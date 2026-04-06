import portfolio from '../data/portfolio';

const Others: React.FC = () => {
  const { otherActivities } = portfolio;

  return (
    <section id="others" className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">その他</h2>
        {otherActivities.map((activity, i) => (
          <div key={i} className="mb-4">
            <p className="text-gray-700 mb-2">
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
                        className="text-blue-600 hover:underline"
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
    </section>
  );
};

export default Others;
