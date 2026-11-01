import portfolio from '../data/portfolio';

const Profile: React.FC = () => {
  const { profile, experiences, skills, certifications } = portfolio;
  const currentRole = experiences[0];
  const stack = skills.find((s) => s.category.startsWith('Cloud'))?.items.join(' / ');
  const since = currentRole.period.split('〜')[0];

  return (
    <section
      id="profile"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 1.5rem 4rem',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid scanline-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.6,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(184,134,11,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '64rem', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div
          className="animate-fade-in"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}
        >
          {/* Main column */}
          <div style={{ flex: '1 1 28rem', minWidth: 0 }}>
            {/* Name */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                color: 'var(--text-primary)',
                margin: '0 0 0.4rem 0',
              }}
            >
              {profile.name}
            </h1>

            {/* Roman name */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2.6vw, 1.6rem)',
                fontWeight: 400,
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                letterSpacing: '0.03em',
              }}
            >
              Yuji Mukai
            </div>

            {/* Divider line */}
            <div
              style={{
                width: '3rem',
                height: '1px',
                background: 'var(--accent)',
                marginBottom: '2rem',
              }}
            />

            {/* Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: '38rem', marginBottom: '2.5rem' }}>
              {profile.summary.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Social links */}
            <nav aria-label="SNSリンク">
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {profile.socialLinks.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      {link.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Field list (schema-record motif) */}
          <div className="note-block" style={{ flex: '0 1 19rem', minWidth: '17rem' }}>
            <dl className="field-list">
              <dt>role</dt>
              <dd>{profile.role}</dd>
              <dt>company</dt>
              <dd>{currentRole.company}</dd>
              <dt>since</dt>
              <dd>{since}</dd>
              <dt>stack</dt>
              <dd>{stack}</dd>
              <dt>certs</dt>
              <dd>{certifications.length}</dd>
              <dt>contact</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6rem',
          background: 'linear-gradient(transparent, var(--bg-primary))',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
};

export default Profile;
