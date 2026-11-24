import { EDUCATIONS, EXPERIENCES } from '../data/portfolioData';

/**
 * Experience and education timeline section.
 */
export function ExperienceSection() {
  return (
    <section id="pengalaman" className="section-frame">
      <div className="container">
        <header className="section-header reveal-block">
          <span className="section-index tabular">04 / REKAM JEJAK</span>
          <h2 className="section-title">Pengalaman & Pendidikan</h2>
        </header>

        <div className="timeline-grid">
          <div className="reveal-block">
            <h3 className="timeline-col-title">Organisasi & Peran</h3>
            <div className="timeline-list">
              {EXPERIENCES.map((exp) => (
                <article key={exp.role} className="timeline-item">
                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-org">{exp.org}</p>
                  <p className="timeline-note tabular">{exp.period}</p>
                  <p className="timeline-note">{exp.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="reveal-block">
            <h3 className="timeline-col-title">Pendidikan</h3>
            <div className="timeline-list">
              {EDUCATIONS.map((edu) => (
                <article key={edu.school} className="timeline-item">
                  <h4 className="timeline-role">{edu.school}</h4>
                  <p className="timeline-org">{edu.program}</p>
                  <p className="timeline-note tabular">{edu.period}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
