import { contact } from "../data/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
          >
            {link.label}
          </a>
        ))}
      </div>

      <small>© {new Date().getFullYear()} Mahek Patel</small>
    </footer>
  );
}