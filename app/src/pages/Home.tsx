function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Hi, I'm Mahek.</h1>

        <p className="hero-intro">
          I'm a software engineer, researcher, and builder of tools that
          actually get used.
        </p>

        <p>
          I recently graduated from the University of South Florida with a degree in
          Computer Science. My interests lie at the intersection of backend
          engineering and applied AI, with a focus on building scalable systems and
          intelligent products that people actually use.
        </p>
      </section>

      <section className="stack">
        <div className="highlight">
          <p className="highlight-date">2025 - 2026</p>
          <h3>Research Assistant, AI Course Companion</h3>
          <p>
            Built AI-powered educational tools deployed across 30+ university
            courses and used by more than 1,000 students.
          </p>
        </div>

        <div className="highlight">
          <p className="highlight-date">Summer 2025</p>
          <h3>Embarc Collective</h3>
          <p>
            Developed automation workflows and AI tooling supporting 300+
            startups, founders, and entrepreneurship programs.
          </p>
        </div>

        <div className="highlight">
          <p className="highlight-date">2025 - 2026</p>
          <h3>Break Through Tech AI Fellow</h3>
          <p>
            Built multimodal machine learning models for dermatology
            classification with a focus on inclusivity across skin tones.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Home;