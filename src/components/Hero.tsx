import { ArrowDownRight, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (id: string) => void;
}

/**
 * Hero section introducing name, role, core statement, and portrait frame.
 */
export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="beranda" className="section-frame hero-section">
      <div className="container hero-grid">
        <div>
          <p className="hero-eyebrow hero-stagger">
            <span>TEKNIK KOMPUTER — FILKOM UB</span>
          </p>
          <h1 className="hero-name hero-stagger">{PROFILE.name}</h1>
          <p className="hero-role hero-stagger">{PROFILE.role}</p>
          <p className="hero-statement hero-stagger">{PROFILE.statement}</p>

          <div className="hero-actions hero-stagger">
            <a
              href="#proyek"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('proyek');
              }}
            >
              <span>Lihat Proyek</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#kontak"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('kontak');
              }}
            >
              <Mail size={16} aria-hidden="true" />
              <span>Hubungi Saya</span>
            </a>
          </div>
        </div>

        <aside className="hero-portrait-frame hero-stagger" aria-label="Foto profil">
          <div className="hero-portrait-wrap">
            <img
              src={PROFILE.photoPath}
              alt={PROFILE.photoAlt}
              className="hero-portrait-img"
              width={480}
              height={600}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero-portrait-meta tabular">
            <span>{PROFILE.location}</span>
            <span>ANGKATAN 2024</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
