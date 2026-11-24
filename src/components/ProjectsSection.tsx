import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

/**
 * Featured projects section wired for GSAP horizontal scroll pinning on desktop.
 */
export function ProjectsSection() {
  return (
    <section id="proyek" className="section-frame projects-section">
      <div className="container">
        <header className="section-header reveal-block">
          <span className="section-index tabular">02 / PROYEK</span>
          <h2 className="section-title">Studi Kasus & Eksplorasi Sistem</h2>
        </header>

        <div className="projects-pin-wrapper">
          <div className="projects-track">
            {PROJECTS.map((project) => (
              <article key={project.id} className="project-panel">
                <div className="project-panel-body">
                  <div>
                    <div className="project-meta-top">
                      <span className="project-num tabular">PROYEK {project.index}</span>
                      <span
                        className={`project-status ${project.isLive ? 'project-status--live' : ''}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-role-line">
                      Peran: {project.role} — Fokus: {project.focus}
                    </p>
                    <p className="project-desc">{project.summary}</p>

                    <ul className="project-facts">
                      {project.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-footer">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>{project.linkLabel}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="project-visual">
                  {project.screenshot ? (
                    <>
                      <div className="project-screenshot-box">
                        <img
                          src={project.screenshot}
                          alt={project.screenshotAlt ?? project.title}
                          className="project-screenshot"
                          width={1440}
                          height={900}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      {project.caption && (
                        <span className="project-visual-caption">{project.caption}</span>
                      )}
                    </>
                  ) : (
                    <div className="project-blueprint-box">
                      <FolderGit2 size={24} aria-hidden="true" />
                      <strong>Repositori Proposal</strong>
                      <p className="project-desc" style={{ margin: 0 }}>
                        Pemodelan dinamika Fossen + identifikasi parameter Box-Jenkins secara
                        daring untuk wahana bawah air BlueROV2.
                      </p>
                      {project.todoNote && <span className="todo-tag">{project.todoNote}</span>}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
