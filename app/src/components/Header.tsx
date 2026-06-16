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
          <Briefcase size={18} />
        </Link>

        <Link to="/now">
          <FolderKanban size={18} />
        </Link>

        <Link to="/notes">
          <PenSquare size={18} />
        </Link>

        <Link to="/about">
          <User size={18} />
        </Link>
      </nav>
    </header>
  );
}