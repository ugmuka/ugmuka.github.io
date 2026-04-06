import portfolio from '../data/portfolio';

const Experience: React.FC = () => {
  const { experiences } = portfolio;

  return (
    <section id="experience" className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">経歴</h2>
        {experiences.map((entry, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-semibold">{entry.company}</h3>
            <p className="text-gray-600 mb-1">{entry.role}</p>
            <p className="text-sm text-gray-500 mb-4">{entry.period}</p>
            <h4 className="font-medium mb-2">携わったプロジェクト</h4>
            <ul className="list-disc list-inside space-y-1">
              {entry.projects.map((project, j) => (
                <li key={j} className="text-gray-700">{project}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
