import { notes } from "../data/notes";
import NoteCard from "../components/NoteCard";
import Header from "../components/Header";

export default function FieldNotes() {
  return (
    <main className="page">
      <h1>Field Notes</h1>

      <p>
        Observations, lessons learned, and things worth revisiting.
      </p>

      <div className="stack">
        {notes.map((note) => (
          <NoteCard key={note.number} note={note} />
        ))}
      </div>
    </main>
  );
}