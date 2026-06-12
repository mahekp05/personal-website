export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="mailto:mahekpatel@ufl.edu">Email</a>
        <a
          href="https://linkedin.com/in/mahekpat3l"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mahekp05"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <small>© {new Date().getFullYear()} Mahek Patel</small>
    </footer>
  );
}