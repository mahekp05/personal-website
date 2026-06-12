import type { WorkItem } from "./experience";

export const projects: WorkItem[] = [
  {
    id: 1,
    title: "Plans4You",
    description:
      "Insurance plan recommendation engine matching users against 1M+ plan records in real time.",
    github: "https://github.com/brandoncintron/plans4you",
    technologies: ["Flask", "Next.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Security Agent",
    description:
      "Diff-aware code review agent that analyzes only changed code in a PR, runs findings through an adversarial prosecutor/defender/judge loop, and posts a ranked security report — covering OWASP injection, misconfiguration, and error handling categories.",
    github: "https://github.com/mahekp05/security-agent",
    technologies: ["Python", "HuggingFace", "GitHub Actions"],
  },
  {
    id: 3,
    title: "Luna – Voice Assistant",
    description:
      "Voice-controlled assistant that automates everyday tasks — web search, live weather, news headlines, and YouTube playback — using speech recognition with 80%+ accuracy.",
    github: "https://github.com/mahekp05/Voice-Assistant-",
    technologies: ["Python", "SpeechRecognition", "Selenium", "BeautifulSoup"],
  },
  {
    id: 4,
    title: "Skinterest",
    description:
      "Multimodal ML model for skin condition classification, built during the Break Through Tech fellowship with inclusivity in mind across diverse skin tones.",
    github:
      "https://github.com/nbm016/multimodal_skin_condition_classification_skinterest_tech_2a",
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    id: 5,
    title: "AI Startup Trends",
    description:
      "Research analysis of 54,000+ AI startup launches on Product Hunt from 2022–2026, tracking ecosystem growth, engagement decline, and winner-take-all dynamics using network analysis and custom data pipelines.",
    github: "https://github.com/mahekp05/ai-startup-trends-product-hunt",
    technologies: ["Python", "Pandas", "GraphQL"],
  },
];