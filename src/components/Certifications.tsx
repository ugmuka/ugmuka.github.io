import portfolio from '../data/portfolio';

const Certifications: React.FC = () => {
  const { certifications } = portfolio;

  return (
    <section id="certifications" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <div className="section-number">
          <span className="section-prefix">03</span>
          <h2 className="section-title">CERTIFICATIONS</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert}
              className="card"
              style={{
                padding: '1.2rem 1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              {/* Diamond icon */}
              <span
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  border: '1px solid var(--accent)',
                  flexShrink: 0,
                  marginTop: '0.35rem',
                  transform: 'rotate(45deg)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.7,
                }}
              >
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
