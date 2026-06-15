import { experience } from "../data/experience";

function WorkCard({ item }: { item: (typeof experience)[number] }) {
  return (
    <article className="project-card">
      <div className="project-card-top">

        {item.period && (
          <span className="project-status">
            {item.period}
          </span>
        )}
      </div>

      <h2>{item.title}</h2>

      <p className="project-description">
        {item.description}
      </p>

      {item.technologies && (
        <div className="project-tech">
          {item.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      )}

      <div className="project-links">
        {item.github && (
          <a href={item.github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        )}

        {item.demo && (
          <a href={item.demo} target="_blank" rel="noreferrer">
            Learn More →
          </a>
        )}
      </div>
    </article>
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