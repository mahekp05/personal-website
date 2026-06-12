export type WorkItem = {
  id: number;
  title: string;
  description: string;
  github?: string;
  demo?: string;
  technologies?: string[];
};

export const experience: WorkItem[] = [
  {
    id: 1,
    title: "Embarc Collective",
    description:
      "Built automation workflows, data pipelines, and internal AI tools supporting 300+ startups across operations, analytics, and internal tooling — including user interviews with 12+ coaches to surface workflow pain points.",
    technologies: ["Python", "Airtable", "Zapier", "OpenAI"],
  },
  {
    id: 2,
    title: "Research Assistant (AI Course Companion)",
    description:
      "Research Assistant at USF building AI-powered learning tools deployed across 30+ courses and 1,000+ students — reducing instructor FAQ review time from ~2 hours daily to under 15 minutes.",
    demo: "https://www.usf.edu/ai-cybersecurity-computing/news/2026/bellini-college-expands-ai-course-companion-to-enhance-teaching-and-student-learning.aspx",
    technologies: ["PHP", "PostgreSQL", "Gemini", "Azure OpenAI"],
  },
  {
    id: 3,
    title: "Skinterest Tech",
    description:
      "Machine Learning Fellow building inclusive dermatology classification tooling — cleaned and processed 770+ medical images, improved CNN baseline accuracy by 10%, and built modular preprocessing pipelines for reproducible model training.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Pandas"],
  },
];