function Home() {
  return (
    <main className="page">
      <section className="hero">

        <h1>Hi, I'm Mahek.</h1>

        <p className="hero-intro">
          I build AI-powered products and backend systems that people actually use.
        </p>

        <div className="hero-details">
          <p>
            Recently graduated from the University of South Florida with a B.S. in
            Computer Science.
          </p>

          <p>
            Interested in backend engineering, applied AI, and turning ideas into
            reliable products used by real people.
          </p>
        </div>

      </section>


    <section className="tech-section">
      <div className="tech-cloud">
        <span>Python</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>Go</span>
        <span>PHP</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Flask</span>
        <span>PostgreSQL</span>
        <span>MongoDB</span>
        <span>REST APIs</span>
        <span>Docker</span>
        <span>Google Cloud</span>
        <span>GitHub Actions</span>
        <span>CI/CD</span>
        <span>Gemini</span>
        <span>Azure</span>
        <span>RAG</span>
        <span>LLM Applications</span>
        <span>Prompt Engineering</span>
        <span>Model Evaluation</span>
        <span>TensorFlow</span>
        <span>scikit-learn</span>
        <span>Git</span>
      </div>
    </section>

      <section className="ticket-stack">
        <article className="ticket">
          <div className="ticket-main">
            <h3>University of South Florida</h3>
            <p className="ticket-role">
              AI Course Companion Research Assistant
            </p>

            <p>
              Built AI-powered educational tools deployed across 30+ university
              courses and used by more than 1,000 students.
            </p>
          </div>

          <div className="ticket-stub">
            <span className="ticket-date">May 2025–2026</span>
          </div>
        </article>

        <article className="ticket">
          <div className="ticket-main">
            <h3>Embarc Collective</h3>
            <p className="ticket-role">
              Technical Operations Intern
            </p>

            <p>
              Developed automation workflows and AI tooling supporting 300+ startups,
              founders, and entrepreneurship programs.
            </p>
          </div>

          <div className="ticket-stub">
            <span className="ticket-date">Jun 2025 - Aug 2025</span>
          </div>
        </article>

        <article className="ticket">
          <div className="ticket-main">
            <h3>Break Through Tech</h3>
            <p className="ticket-role">
              AI Fellow
            </p>

            <p>
              Built multimodal machine learning models for dermatology classification
              with a focus on inclusivity across skin tones.
            </p>
          </div>

          <div className="ticket-stub">
            <span className="ticket-date">May 2025–2026</span>
          </div>
        </article>
      </section>

    </main>
  );
}

export default Home;