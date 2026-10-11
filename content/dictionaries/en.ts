import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Portfolio · Senior full-stack developer",
    description:
      "Portfolio of a senior full-stack JavaScript/TypeScript developer: projects, résumé and contact.",
  },
  nav: { projects: "Projects", cv: "Résumé", contact: "Contact", language: "Language" },
  hero: {
    role: "Senior full-stack developer",
    tagline:
      "I build web applications end to end with React, Node.js, NestJS and MongoDB.",
    seeProjects: "See projects",
    contactMe: "Get in touch",
  },
  projects: {
    title: "Projects",
    subtitle: "Three apps, each with its own backend. Hover to see them in action and click for the details.",
    demo: "Demo",
    repo: "GitHub",
    inProgress: "In progress",
    back: "Projects",
    features: "What it does",
    technologies: "Technologies",
    items: {
      "zitytraining": {"name": "Zitytraining", "description": "A project for a real client and, at the same time, a great example of frontend development. Calendar, client management, accounting, payments… come in and take a look.", "details": ["Zitytraining is a complete management platform for a real gym, built from scratch and already in daily use with real clients, trainers and payments.", "The most interesting part wasn't the code, but the product decisions: what data model to use for sessions shared between multiple clients, how to bill fairly when a plan pauses or ends mid-month, how to keep a shared calendar usable on a phone with one thumb."], "features": ["Scheduling — Drag-and-drop calendar with per-trainer colors, day/week views, and mobile gestures (swipe between days, drag a session to the screen's edge to jump to the next day mid-drag). Recurring classes stay correct across daylight-saving changes; holidays show up automatically.", "Client & trainer management — Profiles, a digitized health intake form, progress tracking with body-composition charts, and a per-client session history (given / cancelled / holiday).", "Training tools — A categorized exercise library and a workout builder (sets, reps, weight, supersets, rest-pause), assigned directly to a calendar session.", "Staff attendance — Trainers clock in/out; admin sees a weekly view across the whole team.", "Plans & payments — Admin-configurable plan catalog (personal/duo/trio, frequency, pricing) plus Stripe checkout for subscriptions or session bundles, with webhooks driving activation.", "Accounting — A monthly grid across every client: billed, paid, broken down day by day, handling plans that pause, change, or end mid-month.", "Fully responsive — With real mobile care: safe areas, iOS scroll quirks, native-feeling interactions."], "gallery": []},
      "china-history": {"name": "History of China", "description": "Interactive map of Chinese history: pick a place and a year and AI reconstructs the moment with text and an illustration grounded in real sources.", "details": ["China History is an interactive map for exploring Chinese history from the Xia to the Qing dynasty. You pick a point on the map and a year on a timeline by dynasty, and the app reconstructs that moment with a historical narrative and a generated illustration.", "Behind it is an AI pipeline that combines several models and a real knowledge base: Claude writes the narrative and the image prompt, OpenAI generates the illustration using real photos of archaeological pieces as reference, and a third model reviews every image and feeds back to the historian."], "features": ["Satellite map with each era's territorial divisions and a dynasty timeline from Xia to Qing.", "Map view and text view per milestone, with the narrative, the illustration and links to nearby events and to the next part of the story.", "Real historical geolocation (CHGIS) and detection of documented milestones stored in MongoDB.", "RAG over an indexed history book using vector search on MongoDB Atlas, plus architecture context by dynasty and region.", "600+ real figures for clothing, filtered by year, chapter and place, and up to 16 real photos as reference for each image.", "Automatic image review with a vision model (Claude Opus) and a suggestions panel where the user approves or discards each one; the approved ones are consolidated into a guide that improves future narratives."], "gallery": ["Home screen and satellite map with the dynasty timeline.", "Text view of a milestone: Nanyang, 25 AD, with the generated narrative and illustration.", "AI pipeline architecture: LangGraph orchestration, RAG, Claude, OpenAI and image review."]},
      "historical-documents-reader": {"name": "Historical Documents Reader", "description": "An app to read and explore historical documents. Currently under construction.", "details": ["TODO: detailed project description."], "features": [], "gallery": []},
    },
  },
  cv: {
    title: "Résumé",
    subtitle: "Experience, education and technologies.",
    download: "Download résumé (PDF)",
    summary: "Senior software engineer with 14+ years of experience building scalable web applications, specialized in 3D visualization and AI-powered solutions using large language models (LLMs). Strong background in full-stack development, system design and performance optimization.",
    experience: "Experience",
    education: "Education",
    skills: "Technologies",
    languages: "Languages",
    skillLabels: {"frontend": "Frontend", "backend": "Backend", "databases": "Databases", "ai": "AI / LLMs", "other": "Other"},
    experienceItems: [
      {"title": "Full-stack developer", "place": "Freelance · Madrid", "period": "May 2026 – present", "description": "", "tech": []},
      {"title": "Full-stack developer", "place": "Scriptum-AI · Madrid", "period": "Feb 2025 – May 2026", "description": "Production applications powered by LLMs. Leonardo: analysis of real court hearing video and audio, with automatic transcription, summarization and structured reports. Scriptum Contract: intelligent document comparison. LLM integration in production, prompt engineering and architecture.", "tech": ["React", "Node.js", "Angular", "Python", "LLMs (Claude)"]},
      {"title": "Full-stack developer", "place": "Nexplore (Dimática) · Madrid · clients Nexplore US and Hotchief Germany", "period": "Dec 2020 – Feb 2025", "description": "High-performance 3D platform for point clouds, 3D models and orthophotos. Measurement tools, volume calculation and element mapping; rendering optimization for large datasets in the browser, in international remote teams.", "tech": ["Angular", "Python", "React", "Three.js", "Node.js", "MongoDB", "WebGL"]},
      {"title": "Full-stack developer", "place": "Mapfre (Capgemini) · Madrid", "period": "Oct 2019 – Dec 2020", "description": "NSEc, vehicle management: internal application built from scratch, starting at analysis. Led the Angular frontend, integrated REST and SOAP services and contributed to the Java (Spring) backend, in a Scrum environment.", "tech": ["Angular", "Java", "Spring", "REST/SOAP", "JUnit"]},
      {"title": "DSD China team coordinator", "place": "DigitalSmileDesign · Madrid", "period": "Jul 2018 – Oct 2019", "description": "Daily coordination of the Shanghai design team, frequent trips for training and management, and tools to make their work easier, in a Chinese-speaking environment.", "tech": ["Visual Basic"]},
      {"title": "Full-stack developer", "place": "Vintegris · Madrid · client BBVA", "period": "Jul 2015 – Jul 2018", "description": "One of BBVA's core security systems: migration to microservices, new features for critical components, SQL and MongoDB databases and internal configuration tools with Vaadin, in high-security, high-availability environments.", "tech": ["Java", "Spring", "Kubernetes", "MongoDB", "SQL", "Angular"]},
      {"title": "Graphics developer", "place": "Continex · Madrid · client Nolve", "period": "Mar 2015 – Jul 2015", "description": "Custom graphics library with FreeType font support to replace SDL, improving rendering flexibility and performance.", "tech": ["C/C++", "SDL", "FreeType"]},
      {"title": "Web developer", "place": "Freelance · Madrid and London", "period": "Aug 2013 – Mar 2015", "description": "Websites and web applications for clients and personal projects, from development to deployment.", "tech": ["HTML", "CSS", "JavaScript"]},
      {"title": "Unity developer and technical artist", "place": "Topcells · Shanghai, China", "period": "Jul 2012 – Jun 2013", "description": "2D/3D interactive applications: gameplay systems in Unity3D and creation and integration of real-time assets.", "tech": ["Unity3D", "C#"]},
      {"title": "Computer engineer and graphic designer", "place": "Consulate General of Spain · Shanghai, China", "period": "Dec 2010 – Oct 2011", "description": "IT infrastructure, servers, networks and website, and technical support for conferences and events, in an international environment.", "tech": []},
    ],
    educationItems: [
      {"title": "B.S. Computer Engineering", "place": "University of Valladolid (UVA)", "period": "", "description": "Final thesis passed with honors.", "tech": []},
      {"title": "Master's in Videogame Development", "place": "Complutense University of Madrid (UCM)", "period": "", "description": "", "tech": []},
      {"title": "Master's in 3D Design", "place": "Trazos · Madrid", "period": "", "description": "", "tech": []},
    ],
    languageItems: [
      {"name": "Spanish", "level": "Native"},
      {"name": "English", "level": "C1"},
      {"name": "Chinese", "level": "Advanced · HSK 4 (B1), HSK 3 certified"},
    ],
  },
  contact: {
    title: "Contact",
    text: "Have a project or an opening? Drop me a line and I'll get back to you as soon as I can.",
    email: "Send an email",
  },
  footer: "Built with Next.js and Tailwind CSS",
};
