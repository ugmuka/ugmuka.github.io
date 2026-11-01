import portfolio from '../data/portfolio';

const Talks: React.FC = () => {
  const { talks } = portfolio;

  return (
    <section id="talks" style={{ padding: '4rem 1.5rem', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <h2 className="section-title">Talks</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {talks.map((talk, i) => (
            <a
              key={i}
              href={talk.slideUrl}
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
              {/* Date */}
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
                {talk.date}
              </span>

              {/* Event + title */}
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
                  {talk.event}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                  }}
                >
                  {talk.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talks;
