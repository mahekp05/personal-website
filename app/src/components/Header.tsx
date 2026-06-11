import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link to="/" className="site-logo">
          Mahek Patel
        </Link>
        <Link to="/notes">Notes</Link>
        <Link to="/work">Work</Link>
        <Link to="/now">Now</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}