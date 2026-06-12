export type Note = {
  number: string;
  title: string;
  category: string;
  date: string;
};

export const notes = [
  {
    slug: "building-in-public",
    number: "001",
    title: "Building in public feels weird",
    date: "June 2026",
    excerpt: "A small thought on sharing unfinished work.",
    content: `
Building in public feels weird because it makes unfinished things visible.

But I’m learning that unfinished does not mean unserious. Sometimes the process is the proof.
`,
  },
  {
    slug: "ai-course-companion",
    number: "002",
    title: "What building an AI course companion taught me",
    date: "June 2026",
    excerpt: "Notes on trust, usefulness, and student-facing AI tools.",
    content: `
Longer blog content goes here.

You can write multiple paragraphs.

This can become its own full page.
`,
  },
];