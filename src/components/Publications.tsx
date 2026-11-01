import portfolio from '../data/portfolio';

const Publications: React.FC = () => {
  const { publications } = portfolio;

  return (
    <section id="publications" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <div className="section-number">
          <span className="section-prefix">05</span>
          <h2 className="section-title">PUBLICATIONS</h2>
        </div>

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
                  fontSize: '0.65rem',
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
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
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

              {/* Arrow */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  flexShrink: 0,
                  opacity: 0.6,
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
