import { about } from "../data/about";
import { contact } from "../data/contact";

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
      <section className="prose">
        <p>
          {contact.description}{" "}
          {contact.links.map((link, index) => (
            <span key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.value}
              </a>
              {index < contact.links.length - 1 && " · "}
            </span>
          ))}
        </p>
      </section>

      </main>
    </>
  );
}