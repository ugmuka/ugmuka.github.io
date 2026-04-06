import portfolio from '../data/portfolio';

const Skills: React.FC = () => {
  const { skills } = portfolio;

  return (
    <section id="skills" style={{ padding: '4rem 1.5rem', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <div className="section-number">
          <span>02 / SKILLS</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {skills.map((category) => (
            <div
              key={category.category}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '1rem' }}
            >
              {/* Category label */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  width: '11rem',
                  flexShrink: 0,
                  paddingTop: '0.3rem',
                  textTransform: 'uppercase',
                }}
              >
                {category.category}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flex: 1 }}>
                {category.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
