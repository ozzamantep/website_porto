import { SKILLS } from '../data/portfolioData';

/**
 * Skills section presenting confirmed competencies and explicit TODO slots.
 */
export function SkillsSection() {
  return (
    <section id="keahlian" className="section-frame">
      <div className="container">
        <header className="section-header reveal-block">
          <span className="section-index tabular">03 / KEAHLIAN</span>
          <h2 className="section-title">Keahlian Utama</h2>
        </header>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <article key={skill.title} className="skill-block reveal-block">
              <h3 className="skill-block-title">{skill.title}</h3>
              <p className="skill-block-desc">{skill.detail}</p>
              {skill.todo && (
                <p style={{ margin: '1rem 0 0 0' }}>
                  <span className="todo-tag">{skill.todo}</span>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
