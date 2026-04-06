import portfolio from '../data/portfolio';

const Others: React.FC = () => {
  const { otherActivities } = portfolio;

  return (
    <section id="others" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <div className="section-number">
          <span className="section-prefix">05</span>
          <h2 className="section-title">OTHERS</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {otherActivities.map((activity, i) => (
            <div key={i} className="card" style={{ padding: '1.2rem 1.2rem' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {activity.links.reduce<React.ReactNode[]>((parts, link, j) => {
                  const text = activity.description;
                  if (j === 0) {
                    const idx = text.indexOf(link.label);
                    if (idx !== -1) {
                      parts.push(text.slice(0, idx));
                      parts.push(
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            borderBottom: '1px solid var(--border-accent)',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        >
                          {link.label}
                        </a>
                      );
                      parts.push(text.slice(idx + link.label.length));
                    } else {
                      parts.push(text);
                    }
                  }
                  return parts;
                }, [])}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Others;
