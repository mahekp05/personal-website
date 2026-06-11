import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link to="/" className="site-logo">
          Field Notes
        </Link>

        <nav>
          <Link to="/notes">Notes</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/now">Now</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Field Notes</p>

        <h1>Hi, I'm Mahek.</h1>

        <p className="hero-intro">
          I'm a software engineer, researcher, and chronic note-taker.
        </p>

        <p className="hero-text">
          I build AI-powered tools, backend systems, and automation workflows
          that help people learn, work, and make better decisions.
        </p>

        <p className="hero-text">
          This site is a collection of projects, lessons learned, and notes from
          things I'm building and exploring.
        </p>
      </section>
    </main>
  );
}

export default Home;