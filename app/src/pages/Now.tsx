import { projects } from "../data/projects";

export default function Now() {
  return (
<main className="page">
  <div className="page-header">
    <p className="eyebrow">Projects</p>
    <h1>Build log.</h1>
    <p className="intro">
      A collection of tools, experiments, and systems I’ve built across AI,
      backend engineering, and product development.
    </p>
  </div>

  <div className="project-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.id}>
        <div className="project-card-top">
          <span className="project-status">Built</span>
        </div>

        <h2>{project.title}</h2>

        <p className="project-description">{project.description}</p>

        {project.technologies && (
          <div className="project-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        <div className="project-links">
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