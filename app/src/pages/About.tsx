import { about } from "../data/about";

export default function About() {
  return (
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
    </main>
  );
}