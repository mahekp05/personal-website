export type WorkItem = {
  id: number;
  title: string;
  period?: string;
  description: string;
  github?: string;
  demo?: string;
  technologies?: string[];
};

export const experience: WorkItem[] = [
  {
    id: 1,
    title: "Technical Operations Intern @ Embarc Collective",
    period: "Jun 2025 – Aug 2025",
    description:
      "Built automation workflows, data pipelines, and AI-powered internal tools supporting operations across a network of 300+ startups. Designed and implemented onboarding systems, LLM-driven interview summarization services, and data integrations that improved workflow efficiency and restored reporting reliability.",
    technologies: ["Python", "Javascript", "Go", "Airtable", "Zapier", "OpenAI"],
  },
{
  id: 2,
  title: "Research Assistant (Applied AI Software Engineer) @ USF",
    period: "May 2025 – Present",
  description:
    "Built and deployed AI-powered applications serving 1,000+ students across 30+ courses, including a RAG-based knowledge assistant, AI Podcast Generator, automated FAQ pipelines, and LLM confidence-scoring systems. Developed backend services, data pipelines, prompt workflows, and user-facing features integrating Gemini and Google Cloud Storage.",
  demo: "https://www.usf.edu/ai-cybersecurity-computing/news/2026/bellini-college-expands-ai-course-companion-to-enhance-teaching-and-student-learning.aspx",
  technologies: ["PHP", "Google Cloud Storage", "Gemini", "HTML", "CSS", "Javascript"],
}
];