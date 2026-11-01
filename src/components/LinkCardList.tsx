export interface LinkCardItem {
  key: string;
  label: string;
  sublabel: string;
  title: string;
  url: string;
}

interface LinkCardListProps {
  items: LinkCardItem[];
}

const LinkCardList: React.FC<LinkCardListProps> = ({ items }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    {items.map((item) => (
      <a
        key={item.key}
        href={item.url}
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
        {/* Label (date / issue) */}
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
          {item.label}
        </span>

        {/* Sublabel (event / circle) + title */}
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
            {item.sublabel}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              lineHeight: 1.5,
            }}
          >
            {item.title}
          </div>
        </div>
      </a>
    ))}
  </div>
);

export default LinkCardList;
