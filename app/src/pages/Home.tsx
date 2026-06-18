function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Hi, I'm Mahek.</h1>

        <p className="hero-intro">
          I build AI-powered products and backend systems that people actually use.
        </p>

        <p className="hero-subtitle">
          Recent Computer Science graduate from the University of South Florida targeting Software Engineer, Backend Engineer, AI Engineer, and Full-Stack Engineer roles.
        </p>
        <p className="hero-open">
          Experience building backend systems, AI applications, and production software used by thousands of users.
        </p>
      </section>

      <section className="tech-section">
        <h2>Skills & Technologies</h2>

        <div className="tech-cloud">
          <span>Python</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>REST APIs</span>
          <span>Docker</span>
          <span>Google Cloud</span>
          <span>CI/CD</span>
          <span>RAG</span>
          <span>LLM Applications</span>
          <span>Model Evaluation</span>
          <span>Git</span>
        </div>
      </section>

      <section className="experience-section">
        <h2>Career Highlights</h2>

        <div className="ticket-stack">
          <article className="ticket">
            <div className="ticket-main">
              <h3>University of South Florida</h3>

              <p className="ticket-role">
                AI Course Companion Research Assistant
              </p>

              <p>
                Built AI-powered educational tools deployed across 30+
                university courses and used by more than 1,000 students.
              </p>
              <div className="project-links">
                <a
                  href="https://www.usf.edu/ai-cybersecurity-computing/news/2026/bellini-college-expands-ai-course-companion-to-enhance-teaching-and-student-learning.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article →
                </a>
              </div>

            </div>

            <div className="ticket-stub">
              <span className="ticket-date">May 2025 – May 2026</span>
            </div>
          </article>

          <article className="ticket">
            <div className="ticket-main">
              <h3>Embarc Collective</h3>

              <p className="ticket-role">
                Technical Operations Intern
              </p>

              <p>
                Developed automation workflows and AI tooling supporting 300+
                startups, founders, and entrepreneurship programs.
              </p>
            </div>

            <div className="ticket-stub">
              <span className="ticket-date">Jun 2025 – Aug 2025</span>
            </div>
          </article>

          <article className="ticket">
            <div className="ticket-main">
              <h3>Break Through Tech</h3>

              <p className="ticket-role">
                AI Fellowship
              </p>

              <p>
                Built multimodal machine learning model for dermatology
                classification with a focus on inclusivity across skin tones.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/nbm016/multimodal_skin_condition_classification_skinterest_tech_2a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project  →
                </a>
              </div>

            </div>

            <div className="ticket-stub">
              <span className="ticket-date">May 2025 – May 2026</span>
            </div>
          </article>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <article className="project-card">
            <h3>Plans4You</h3>

            <p className="project-description">
              Built a personalized search platform over 1M+ CMS records, improving
              recommendation relevance and delivering results in under 2 seconds.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/brandoncintron/plans4you"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>

          <article className="project-card">
            <h3>Secure Coding Vulnerability Analyzer</h3>

            <p className="project-description">
              Developed a static analysis tool that identifies secure coding
              vulnerabilities and helps developers detect potential risks during code
              review.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/mahekp05/security-agent"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>

          <article className="project-card">
            <h3>AI Startup Trends</h3>

            <p className="project-description">
              Analyzed 54,000+ AI startup launches on Product Hunt using custom data
              pipelines and network analysis to identify ecosystem growth, engagement
              trends, and winner-take-all dynamics.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/mahekp05/ai-startup-trends-product-hunt"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        </div>
      </section>

      

    </main>
  );
}

export default Home;