import { experience } from "../data/experience";

function WorkCard({ item }: { item: (typeof experience)[number] }) {
  return (
    <div className="note-card">
      <h3>{item.title}</h3>
      <p className="work-date">{item.period}</p>

      <p>{item.description}</p>

      {item.technologies && (
        <p className="tech-stack">{item.technologies.join(" • ")}</p>
      )}

      <div className="links">
        {item.github && (
          <a href={item.github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        )}

        {item.demo && (
          <a href={item.demo} target="_blank" rel="noreferrer">
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <>

      <main className="page">
        <div className="stack">
          <h1>Experience</h1>
          <p>
            A collection of professional experiences and projects I've worked on.
          </p>
        </div>

        <section className="stack">
          <h2>Experience</h2>
          {experience.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </section>
      </main>
    </>
  );
}