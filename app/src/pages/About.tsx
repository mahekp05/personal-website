import { about } from "../data/about";

export default function About() {
  return (
    <>
      <main className="page">
        <div className="page-header">
          <p className="eyebrow">About</p>
          <h1>{about.title}</h1>
        </div>

        <section className="prose">
          <p>{about.intro}</p>

          {about.sections.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

<section className="tech-section">
  <h2>Tools I Use</h2>

  <div className="tech-cloud">
    <span>Python</span>
    <span>TypeScript</span>
    <span>React</span>
    <span>PostgreSQL</span>
    <span>PHP</span>
    <span>Google Cloud</span>
    <span>Azure OpenAI</span>
    <span>Gemini</span>
    <span>Docker</span>
    <span>Git</span>
  </div>
</section>
      </main>
    </>
  );
}