import { ArrowUpRight } from 'lucide-react';
import { CONTACTS, PROFILE } from '../data/portfolioData';

/**
 * Contact section and footer with explicit TODO markers for missing CV and domain.
 */
export function ContactSection() {
  return (
    <>
      <section id="kontak" className="section-frame">
        <div className="container">
          <header className="section-header reveal-block">
            <span className="section-index tabular">05 / KONTAK</span>
            <h2 className="section-title">Terhubung & Kolaborasi</h2>
          </header>

          <div className="contact-grid">
            <div className="reveal-block">
              <p className="contact-lead">
                Terbuka untuk diskusi proyek pengembangan web, eksplorasi UI/UX, dan kolaborasi
                akademik di bidang Teknik Komputer.
              </p>
              <p style={{ margin: '0 0 1rem 0' }}>
                <span className="todo-tag">
                  TODO: Tautan unduh CV (PDF) akan ditambahkan setelah file tersedia.
                </span>
              </p>
              <p style={{ margin: 0 }}>
                <span className="todo-tag">
                  TODO: Domain resmi dan konfigurasi hosting akan ditautkan kemudian.
                </span>
              </p>
            </div>

            <div className="contact-list reveal-block">
              {CONTACTS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="contact-row"
                >
                  <div>
                    <div className="contact-row-label">{item.label}</div>
                    <div>{item.value}</div>
                  </div>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer tabular">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Teknik Komputer — FILKOM Universitas Brawijaya</span>
      </footer>
    </>
  );
}
