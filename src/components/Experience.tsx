import portfolio from '../data/portfolio';

const Experience: React.FC = () => {
  const { experiences } = portfolio;

  return (
    <section id="experience" className="section-pad">
      <div className="section-container">

        <h2 className="section-title">Experience</h2>

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
                    fontSize: '0.72rem',
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
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  marginBottom: '1.5rem',
                }}
              >
                {entry.role}
              </p>

              {/* Project list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {entry.projects.map((project, j) => (
                  <li key={j} className="manifest-row">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent)',
                        opacity: 0.65,
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    >
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'baseline',
                          gap: '0.6rem',
                          marginBottom: '0.3rem',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            lineHeight: 1.5,
                          }}
                        >
                          {project.title}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            letterSpacing: '0.08em',
                            color: 'var(--accent)',
                            flexShrink: 0,
                          }}
                        >
                          {project.period}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          letterSpacing: '0.04em',
                          color: 'var(--text-muted)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {project.role}
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {project.summary}
                      </p>
                    </div>
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
