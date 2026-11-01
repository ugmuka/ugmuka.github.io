import portfolio, { type ActivityLink } from '../data/portfolio';

function renderDescriptionWithLinks(text: string, links: ActivityLink[]): React.ReactNode[] {
  const matches = links
    .map((link) => ({ link, idx: text.indexOf(link.label) }))
    .filter((match) => match.idx !== -1)
    .sort((a, b) => a.idx - b.idx);

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  matches.forEach(({ link, idx }) => {
    if (idx < cursor) return;
    parts.push(text.slice(cursor, idx));
    parts.push(
      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="link-inline-accent">
        {link.label}
      </a>
    );
    cursor = idx + link.label.length;
  });
  parts.push(text.slice(cursor));

  return parts;
}

const Others: React.FC = () => {
  const { otherActivities } = portfolio;

  return (
    <section id="others" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

        <h2 className="section-title">Others</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {otherActivities.map((activity, i) => (
            <div key={i} className="note-block">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {renderDescriptionWithLinks(activity.description, activity.links)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Others;
