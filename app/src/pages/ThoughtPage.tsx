import { useParams, Link } from "react-router-dom";
import { notes } from "../data/notes";

export default function NotePage() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    return (
      <main className="page">
        <p>Note not found.</p>
        <Link to="/notes">Back to Field Notes</Link>
      </main>
    );
  }

  return (
    <main className="page blog-page">
      <Link to="/notes">← Back to Field Notes</Link>

      <article className="prose">
        <p className="note-meta">
          {note.number} · {note.date}
        </p>

        <h1>{note.title}</h1>

        {note.content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}