import portfolio from '../data/portfolio';

const Publications: React.FC = () => {
  const { publications } = portfolio;

  return (
    <section id="publications" className="section-pad">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {publications.map((publication, i) => (
            <a
              key={i}
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.2rem',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {/* Issue */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                  flexShrink: 0,
                  width: '5.5rem',
                }}
              >
                {publication.issue}
              </span>

              {/* Circle + title */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.04em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {publication.circle}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                  }}
                >
                  {publication.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
