import portfolio from '../data/portfolio';

const Experience: React.FC = () => {
  const { experiences } = portfolio;

  return (
    <section id="experience" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <div className="section-number">
          <span>01 / EXPERIENCE</span>
        </div>

        {experiences.map((entry, i) => (
          <div key={i} style={{ display: 'flex', gap: '2rem' }}>

            {/* Timeline column */}
            <div style={{ position: 'relative', width: '1px', flexShrink: 0 }}>
              <div className="timeline-line" />
              <div className="timeline-dot" />
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingBottom: '3rem', paddingTop: '0.2rem' }}>

              {/* Company + period */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {entry.company}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    background: 'var(--accent-glow)',
                    padding: '0.15rem 0.5rem',
                    border: '1px solid var(--border-accent)',
                  }}
                >
                  {entry.period}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  marginBottom: '1.5rem',
                }}
              >
                {entry.role}
              </p>

              {/* Projects header */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ color: 'var(--accent)' }}>▸</span> PROJECTS
              </div>

              {/* Project list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {entry.projects.map((project, j) => (
                  <li
                    key={j}
                    className="card"
                    style={{
                      padding: '0.7rem 1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.7rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: 'var(--accent)',
                        opacity: 0.5,
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    >
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {project}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
