import { PROFILE } from '../data/portfolioData';

/**
 * About section with concise biography and structured academic metadata.
 */
export function About() {
  return (
    <section id="tentang" className="section-frame">
      <div className="container">
        <header className="section-header reveal-block">
          <span className="section-index tabular">01 / TENTANG</span>
          <h2 className="section-title">Latar Belakang & Fokus Kerja</h2>
        </header>

        <div className="about-grid">
          <div className="reveal-block">
            <p className="about-copy">
              Saya adalah mahasiswa Program Studi Teknik Komputer, Fakultas Ilmu Komputer,
              Universitas Brawijaya (angkatan 2024). Sebelumnya saya menempuh pendidikan di
              SMK Telkom Banjarbaru.
            </p>
            <p className="about-copy">
              Di luar perkuliahan, saya terlibat sebagai Website Developer 2 pada pengembangan
              situs resmi FILKOM Merch UB dengan fokus pada pembaruan ide UI dan UX, serta aktif
              dalam kepengurusan organisasi di Motion Amarine dan kewirausahaan mahasiswa.
            </p>
          </div>

          <dl className="spec-table reveal-block">
            <div className="spec-row">
              <dt className="spec-key">Nama</dt>
              <dd className="spec-val">{PROFILE.name}</dd>
            </div>
            <div className="spec-row">
              <dt className="spec-key">Institusi</dt>
              <dd className="spec-val">{PROFILE.institution}</dd>
            </div>
            <div className="spec-row">
              <dt className="spec-key">Program</dt>
              <dd className="spec-val">{PROFILE.program}</dd>
            </div>
            <div className="spec-row">
              <dt className="spec-key">Domisili</dt>
              <dd className="spec-val">{PROFILE.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
