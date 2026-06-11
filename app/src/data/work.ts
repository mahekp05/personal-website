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
    title: "AI Course Companion",
    description:
      "Research Assistant at USF building AI-powered learning tools used across 30+ courses and 1,000+ students.",
    technologies: ["PHP", "PostgreSQL", "Gemini", "Azure OpenAI"],
  },
  {
    id: 2,
    title: "Embarc Collective",
    description:
      "Built automation workflows, data pipelines, and internal AI tools supporting startup operations.",
    technologies: ["Python", "Airtable", "Zapier", "OpenAI"],
  },
];

export const projects: WorkItem[] = [
  {
    id: 1,
    title: "Skinterest",
    description:
      "Multimodal machine learning project focused on inclusive dermatology classification.",
    github: "https://github.com/nbm016/multimodal_skin_condition_classification_skinterest_tech_2a",
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    id: 2,
    title: "Plans4You",
    description:
      "Personalized search platform built on large public datasets.",
    github: "https://github.com/brandoncintron/plans4you",
    technologies: ["Flask", "Next.js", "PostgreSQL"],
  },
];