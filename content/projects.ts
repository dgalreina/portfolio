export type Project = {
  slug: "zitytraining" | "china-history" | "historical-documents-reader";
  tech: string[];
  /** Screenshot shown by default. Omit it (project not built yet) to show an empty box. */
  image?: string;
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
  /** Public test account shown next to the demo button. */
  demoAccount?: { email: string; password: string };
  /** Where the code lives; the visitor picks the repo from there. */
  repo?: string;
  status: "live" | "in-progress";
  /** Another project this one is connected to (shown as a link on the detail page). */
  related?: Project["slug"];
};

// TODO: fill in tech, demo and repo URLs. Buttons are hidden when a URL is missing.
export const projects: Project[] = [
  {
    slug: "historical-documents-reader",
    image: "/projects/historical-documents-reader.jpg",
    gallery: [{ src: "/projects/historical-documents-reader-1.jpg", width: 2000, height: 1054 }],
    tech: [
      "Python",
      "AWS Lambda",
      "Step Functions",
      "DynamoDB",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "AWS CDK",
      "S3",
      "CloudFront",
      "Cognito",
      "MongoDB Atlas",
      "OpenAI",
    ],
    status: "live",
    related: "china-history",
  },
  {
    slug: "china-history",
    tech: [
      "NestJS",
      "LangGraph",
      "LangChain",
      "MongoDB Atlas",
      "Anthropic",
      "OpenAI",
      "Next.js",
      "DigitalOcean Spaces",
    ],
    image: "/projects/china-history.jpg",
    demo: "https://china-history-web-3es2e.ondigitalocean.app/",
    gallery: [
      { src: "/projects/china-history-1.jpg", width: 2000, height: 1052 },
      { src: "/projects/china-history-2.jpg", width: 2000, height: 1054 },
      { src: "/projects/china-history-3.png", width: 1420, height: 1560 },
    ],
    status: "live",
    related: "historical-documents-reader",
  },
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
      "Jest",
      "Playwright",
    ],
    image: "/projects/zitytraining.jpg",
    video: "/projects/zitytraining.mp4",
    portrait: true,
    demo: "https://zitytraining-web-6tkjf.ondigitalocean.app/",
    demoAccount: { email: "testuser@zitytraining.com", password: "12345" },
    repo: "https://github.com/dgalreina",
    fullVideo: "/projects/zitytraining-full.mp4",
    poster: "/projects/zitytraining-poster.jpg",
    status: "live",
  },
];
