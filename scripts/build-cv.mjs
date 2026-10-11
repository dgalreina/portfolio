// Generates public/cv/cv-{es,en,zh}.pdf from the same data the site renders
// (content/dictionaries + content/profile.ts), so the CV and the page never drift.
//
//   npm run build:cv
//
// Needs Node >= 22.18 (runs the .ts content files directly) and Edge or Chrome
// (set CHROME_PATH to use a specific binary).
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { en } from "../content/dictionaries/en.ts";
import { es } from "../content/dictionaries/es.ts";
import { zh } from "../content/dictionaries/zh.ts";
import { profile } from "../content/profile.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "cv");
const dictionaries = { es, en, zh };

const browser = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((p) => p && existsSync(p));

if (!browser) {
  console.error("No Edge/Chrome found. Set CHROME_PATH.");
  process.exit(1);
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const photo = `data:image/jpeg;base64,${readFileSync(join(root, "public", "profile.jpg")).toString("base64")}`;

const css = `
  @page { size: A4; margin: 14mm 16mm; }
  :root { --ink: #1d1816; --muted: #6b625c; --seal: #8e1b1b; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; color: var(--ink); font: 9.5pt/1.5 "Segoe UI", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif; }
  .serif { font-family: Georgia, "Noto Serif SC", "Songti SC", SimSun, serif; }
  header { display: flex; align-items: center; gap: 7mm; padding-bottom: 5mm; border-bottom: 2px solid var(--seal); }
  header img { width: 34mm; height: 34mm; border-radius: 50%; object-fit: cover; border: 1.2mm solid var(--seal); flex: none; }
  h1 { margin: 0; font-size: 25pt; line-height: 1.15; }
  .role { margin: 1.5mm 0 0; color: var(--seal); font-weight: 600; font-size: 11.5pt; }
  .contact { margin: 2mm 0 0; color: var(--muted); font-size: 9pt; }
  h2 { margin: 6mm 0 2.5mm; padding-left: 2.5mm; border-left: 1.2mm solid var(--seal); font-size: 12pt; line-height: 1.2; break-after: avoid; }
  p { margin: 0; }
  .summary { margin-top: 5mm; }
  dl.skills { display: grid; grid-template-columns: max-content 1fr; gap: 1mm 5mm; margin: 0; }
  dl.skills dt { color: var(--muted); font-weight: 600; }
  dl.skills dd { margin: 0; }
  .item { margin-bottom: 4mm; break-inside: avoid; }
  .item h3 { margin: 0; font-size: 10.5pt; }
  .meta { color: var(--muted); font-size: 9pt; }
  .desc { margin-top: 1mm; }
  .tech { margin-top: 1mm; color: var(--muted); font-size: 8.5pt; }
  .tech b { color: var(--seal); font-weight: 600; }
  .lang { margin: 0 0 1mm; }
  .lang span { color: var(--muted); }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 10mm; }
`;

const item = (i, techLabel) => `
  <div class="item">
    <h3>${esc(i.title)}</h3>
    <div class="meta">${esc([i.place, i.period].filter(Boolean).join(" · "))}</div>
    ${i.description ? `<p class="desc">${esc(i.description)}</p>` : ""}
    ${i.tech?.length ? `<p class="tech"><b>${esc(techLabel)}:</b> ${esc(i.tech.join(", "))}</p>` : ""}
  </div>`;

function html(lang, dict) {
  const { cv } = dict;
  const lh = lang === "zh" ? "zh-CN" : lang;
  return `<!doctype html>
<html lang="${lh}"><head><meta charset="utf-8"><title>${esc(profile.name)} — ${esc(cv.title)}</title><style>${css}</style></head>
<body>
  <header>
    <img src="${photo}" alt="">
    <div>
      <h1 class="serif">${esc(profile.name)}</h1>
      <p class="role">${esc(dict.hero.role)}</p>
      <p class="contact">${esc(profile.email)} · ${esc(profile.github.replace("https://", ""))}</p>
    </div>
  </header>

  <p class="summary">${esc(cv.summary)}</p>

  <h2 class="serif">${esc(cv.skills)}</h2>
  <dl class="skills">
    ${profile.skillGroups
      .map((g) => `<dt>${esc(cv.skillLabels[g.key])}</dt><dd>${esc(g.items.join(" · "))}</dd>`)
      .join("")}
  </dl>

  <h2 class="serif">${esc(cv.experience)}</h2>
  ${cv.experienceItems.map((i) => item(i, cv.skills)).join("")}

  <div class="cols">
    <div>
      <h2 class="serif">${esc(cv.education)}</h2>
      ${cv.educationItems.map((i) => item(i, cv.skills)).join("")}
    </div>
    <div>
      <h2 class="serif">${esc(cv.languages)}</h2>
      ${cv.languageItems.map((l) => `<p class="lang">${esc(l.name)} <span>· ${esc(l.level)}</span></p>`).join("")}
    </div>
  </div>
</body></html>`;
}

mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(join(tmpdir(), "cv-"));

for (const [lang, dict] of Object.entries(dictionaries)) {
  const page = join(work, `cv-${lang}.html`);
  const out = join(outDir, `cv-${lang}.pdf`);
  writeFileSync(page, html(lang, dict));
  const r = spawnSync(
    browser,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--user-data-dir=${join(work, `profile-${lang}`)}`,
      `--print-to-pdf=${out}`,
      pathToFileURL(page).href,
    ],
    { stdio: "pipe" },
  );
  if (r.status !== 0 || !existsSync(out)) {
    console.error(`Failed to build ${out}\n${r.stderr?.toString()}`);
    process.exit(1);
  }
  console.log(`✓ ${out}`);
}
