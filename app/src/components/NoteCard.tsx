type Note = {
  number: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
};

type NoteCardProps = {
  note: Note;
};

function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="note-card">
      <div className="note-card-top">
        <p className="note-number">#{note.number}</p>
        <p className="note-category">{note.category}</p>
        <h2>{note.title}</h2>
      </div>

      <p className="note-excerpt">{note.excerpt}</p>

      <p className="note-meta">
        <span>{note.date}</span>
        <span aria-hidden="true">→</span>
      </p>
    </article>
  );
}

export default NoteCard;