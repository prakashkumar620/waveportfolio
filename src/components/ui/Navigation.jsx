import { motion } from 'framer-motion';
import { NAV_LINKS, PERSONAL } from '../../utils/constants';

export default function Navigation({ activeSection }) {
  const handleNav = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="nav-logo">{PERSONAL.name.toUpperCase()}</div>

      <ul className="nav-links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              onClick={(e) => handleNav(e, href)}
              style={{
                color: activeSection === href.replace('#', '')
                  ? 'var(--neon-orange)'
                  : undefined,
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger — simplified */}
      <button
        aria-label="Menu"
        onClick={() => {
          const m = document.getElementById('mobile-menu');
          if (m) m.classList.toggle('open');
        }}
        style={{
          display: 'none',
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: 4,
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>
    </motion.nav>
  );
}
