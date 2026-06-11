type NoteCardProps = {
  note: {
    number: string;
    title: string;
    category: string;
    date: string;
  };
};

function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="note-card">
      <div>
        <p className="note-number">Field Note #{note.number}</p>
        <h3>{note.title}</h3>
      </div>

      <div className="note-meta">
        <span>{note.category}</span>
        <span>{note.date}</span>
      </div>
    </article>
  );
}

export default NoteCard;