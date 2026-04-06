import { useState } from 'react';

interface NavItem {
  label: string;
  targetId: string;
}

const navItems: NavItem[] = [
  { label: 'EXPERIENCE', targetId: 'experience' },
  { label: 'SKILLS', targetId: 'skills' },
  { label: 'CERTS', targetId: 'certifications' },
  { label: 'TALKS', targetId: 'talks' },
  { label: 'OTHERS', targetId: 'others' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(248, 249, 252, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-accent)',
      }}
    >
      <nav
        style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}
        className="flex items-center justify-between h-14"
        aria-label="サイトナビゲーション"
      >
        {/* Monogram logo */}
        <a
          href="#profile"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--accent)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
          }}
        >
          YM<span style={{ color: 'var(--text-muted)', marginLeft: '0.4rem', fontSize: '0.65rem' }}>_</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.targetId}>
              <a href={`#${item.targetId}`} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1px',
              background: menuOpen ? 'var(--accent)' : 'var(--text-muted)',
              marginBottom: '5px',
              transition: 'background 0.2s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '14px',
              height: '1px',
              background: menuOpen ? 'var(--accent)' : 'var(--text-muted)',
              marginBottom: '5px',
              transition: 'background 0.2s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1px',
              background: menuOpen ? 'var(--accent)' : 'var(--text-muted)',
              transition: 'background 0.2s',
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul
          className="sm:hidden list-none m-0 p-0"
          style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}
        >
          {navItems.map((item) => (
            <li key={item.targetId} style={{ borderBottom: '1px solid var(--border)' }}>
              <a
                href={`#${item.targetId}`}
                className="nav-link"
                style={{ display: 'block', padding: '0.9rem 1.5rem', fontSize: '0.7rem' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
