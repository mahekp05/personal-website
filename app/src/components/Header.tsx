import {
  Briefcase,
  FolderKanban,
  PenSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link to="/" className="site-logo">
          Mahek Patel
        </Link>

        <Link to="/work">
          <Briefcase size={18} /> Experience
        </Link>

        <Link to="/projects">
          <FolderKanban size={18} /> Projects
        </Link>

        <Link to="/notes">
          <PenSquare size={18} /> Writing
        </Link>

        <Link to="/about">
          <User size={18} /> About
        </Link>
      </nav>
    </header>
  );
}