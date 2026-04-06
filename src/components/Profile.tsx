import portfolio from '../data/portfolio';

const Profile: React.FC = () => {
  const { profile } = portfolio;

  return (
    <section id="profile" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{profile.role}</p>
        <p className="mb-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.email}
          </a>
        </p>
        <nav aria-label="SNSリンク">
          <ul className="flex flex-wrap gap-3 list-none p-0">
            {profile.socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                >
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Profile;
