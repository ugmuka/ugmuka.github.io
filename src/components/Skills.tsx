import portfolio from '../data/portfolio';

const Skills: React.FC = () => {
  const { skills } = portfolio;

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">スキル</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
              <ul className="list-disc list-inside space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
