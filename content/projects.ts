export type Project = {
  slug: "zitytraining" | "china-history" | "historical-documents-reader";
  tech: string[];
  /** Screenshot shown by default. Drop real ones in public/projects/. */
  image: string;
  /** Short muted loop (MP4/H.264) played on hover. Omit if there is none yet. */
  video?: string;
  /** Vertical (phone) recording: the card media box uses the video's own ratio. */
  portrait?: boolean;
  /** Full recording (with audio) shown on the detail page. */
  fullVideo?: string;
  /** Large still shown before the full video starts. */
  poster?: string;
  /** Extra screenshots for the detail page (captions live in the dictionaries, same order). */
  gallery?: { src: string; width: number; height: number }[];
  demo?: string;
  /** Where the code lives; the visitor picks the repo from there. */
  repo?: string;
  status: "live" | "in-progress";
};

// TODO: fill in tech, demo and repo URLs. Buttons are hidden when a URL is missing.
export const projects: Project[] = [
  {
    slug: "zitytraining",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "NestJS",
      "MongoDB",
      "JWT",
      "Stripe",
      "DigitalOcean",
      "MongoDB Atlas",
    ],
    image: "/projects/zitytraining.jpg",
    video: "/projects/zitytraining.mp4",
    portrait: true,
    demo: "https://zitytraining-web-6tkjf.ondigitalocean.app/",
    repo: "https://github.com/dgalreina",
    fullVideo: "/projects/zitytraining-full.mp4",
    poster: "/projects/zitytraining-poster.jpg",
    status: "live",
  },
  {
    slug: "china-history",
    tech: ["LangGraph", "Claude", "OpenAI", "MongoDB Atlas", "RAG", "DigitalOcean Spaces"],
    image: "/projects/china-history.jpg",
    demo: "https://china-history-web-3es2e.ondigitalocean.app/",
    gallery: [
      { src: "/projects/china-history-1.jpg", width: 2000, height: 1052 },
      { src: "/projects/china-history-2.jpg", width: 2000, height: 1054 },
      { src: "/projects/china-history-3.png", width: 1420, height: 1560 },
    ],
    status: "live",
  },
  {
    slug: "historical-documents-reader",
    tech: ["Next.js", "NestJS", "MongoDB", "TypeScript"],
    image: "/projects/historical-documents-reader.svg",
    status: "in-progress",
  },
];
