import portfolio from '../data/portfolio';

const Profile: React.FC = () => {
  const { profile } = portfolio;

  return (
    <section
      id="profile"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 1.5rem 4rem',
        minHeight: '72vh',
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
          background: 'radial-gradient(ellipse at center, rgba(255,184,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Role label */}
        <div
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            animationDelay: '0.1s',
          }}
        >
          <span style={{ color: 'var(--accent)', opacity: 0.6 }}>▸</span>
          {profile.role.toUpperCase()}
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            margin: '0 0 0.4rem 0',
            animationDelay: '0.2s',
          }}
        >
          {profile.name}
        </h1>

        {/* Roman name */}
        <div
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: 400,
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            letterSpacing: '0.06em',
            animationDelay: '0.3s',
          }}
        >
          Yuji Mukai
        </div>

        {/* Divider line */}
        <div
          className="animate-fade-up"
          style={{
            width: '3rem',
            height: '1px',
            background: 'var(--accent)',
            marginBottom: '2rem',
            animationDelay: '0.35s',
          }}
        />

        {/* Email */}
        <div
          className="animate-fade-up"
          style={{ marginBottom: '2rem', animationDelay: '0.4s' }}
        >
          <a
            href={`mailto:${profile.email}`}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {profile.email}
          </a>
        </div>

        {/* Social links */}
        <nav aria-label="SNSリンク" className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
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
