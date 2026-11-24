import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'kontak', label: 'Kontak' },
];

/**
 * Sticky top navigation bar with theme toggle and mobile drawer.
 */
export function Header({ theme, onToggleTheme, activeSection, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="#beranda"
          className="brand-mark"
          onClick={(e) => handleLinkClick(e, 'beranda')}
          aria-label={`Beranda ${PROFILE.name}`}
        >
          <span className="brand-dot" aria-hidden="true" />
          <span>{PROFILE.initials}</span>
        </a>

        <nav
          className="site-nav"
          data-open={menuOpen}
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              data-active={activeSection === item.id}
              onClick={(e) => handleLinkClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {theme === 'dark' ? <Sun size={14} aria-hidden="true" /> : <Moon size={14} aria-hidden="true" />}
            <span>{theme === 'dark' ? 'Terang' : 'Gelap'}</span>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
