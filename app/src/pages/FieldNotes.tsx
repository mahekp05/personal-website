import { Link } from "react-router-dom";
import { notes } from "../data/notes";

export default function FieldNotes() {
  return (
    <main className="page">
      <div className="page-header">
        <p className="eyebrow">Field Notes</p>
        <h1>Thoughts, lessons, and things I’m learning.</h1>
        <p className="intro">
          A small collection of reflections from projects, work, school, and life.
        </p>
      </div>

      <section className="blog-list">
        {notes.map((note) => (
          <article className="blog-preview" key={note.slug}>
            <p className="note-meta">
              {note.number} · {note.date}
            </p>

            <h2>{note.title}</h2>
            <p>{note.excerpt}</p>

            <Link to={`/notes/${note.slug}`}>Read note →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}