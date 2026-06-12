import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link to="/" className="site-logo">
          Mahek Patel
        </Link>
        <Link to="/notes">Thoughts</Link>
        <Link to="/work">Experience</Link>
        <Link to="/now">Projects</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}