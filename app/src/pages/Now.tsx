import { projects } from "../data/projects";

export default function Now() {
  return (
    <main className="page">
      <div className="page-header">
        <p className="eyebrow">Projects</p>
        <h1>Things I&apos;m building.</h1>
        <p className="intro">
          A current view of the projects I&apos;m working on, exploring, and
          improving.
        </p>
      </div>

      <div className="notes-list">
        {projects.map((project) => (
          <article className="note-card" key={project.id}>
            <div className="note-card-top">
              <p className="note-number">#{String(project.id).padStart(3, "0")}</p>
              <h2>{project.title}</h2>
            </div>

            <p className="note-excerpt">{project.description}</p>

            {project.technologies && (
              <p className="tech-stack">{project.technologies.join(" • ")}</p>
            )}

            <div className="links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}