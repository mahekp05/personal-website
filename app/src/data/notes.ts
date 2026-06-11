export type Note = {
  number: string;
  title: string;
  category: string;
  date: string;
};

export const notes: Note[] = [
  {
    id: "001",
    title: "Building AI Course Companion",
    category: "Engineering",
    date: "June 2026",
  },
  {
    id: "002",
    title: "CodePath Journey",
    category: "Interview Prep",
    date: "June 2026",
  },
];