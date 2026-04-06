import portfolio from '../data/portfolio';

const Certifications: React.FC = () => {
  const { certifications } = portfolio;

  return (
    <section id="certifications" className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">資格</h2>
        <ul className="list-disc list-inside space-y-2">
          {certifications.map((cert) => (
            <li key={cert} className="text-gray-700">{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
