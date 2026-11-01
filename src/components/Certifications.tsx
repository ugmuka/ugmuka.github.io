import portfolio from '../data/portfolio';

const Certifications: React.FC = () => {
  const { certifications } = portfolio;

  return (
    <section id="certifications" className="section-pad">
      <div className="section-container">

        <h2 className="section-title">Certifications</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {certifications.map((cert) => (
            <div key={cert} className="chip">
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  border: '1px solid var(--accent)',
                  flexShrink: 0,
                  transform: 'rotate(45deg)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
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
