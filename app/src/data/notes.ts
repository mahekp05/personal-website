export type Note = {
  id: number
  title: string
  category: string
  date: string
}

export const notes: Note[] = [
  {
    id: 1,
    title: 'What building an AI course companion taught me about trust',
    category: 'Building',
    date: 'June 2026',
  },
  {
    id: 2,
    title: "Why every problem doesn't need an LLM",
    category: 'Learning',
    date: 'May 2026',
  },
]
