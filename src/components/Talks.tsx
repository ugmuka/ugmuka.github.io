import portfolio from '../data/portfolio';

const Talks: React.FC = () => {
  const { talks } = portfolio;

  return (
    <section id="talks" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">登壇</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 pr-4 font-semibold whitespace-nowrap">日付</th>
                <th className="text-left py-2 pr-4 font-semibold">イベント</th>
                <th className="text-left py-2 pr-4 font-semibold">タイトル</th>
                <th className="text-left py-2 font-semibold whitespace-nowrap">資料</th>
              </tr>
            </thead>
            <tbody>
              {talks.map((talk, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3 pr-4 whitespace-nowrap text-gray-600">{talk.date}</td>
                  <td className="py-3 pr-4 text-gray-700">{talk.event}</td>
                  <td className="py-3 pr-4 text-gray-700">{talk.title}</td>
                  <td className="py-3">
                    <a
                      href={talk.slideUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline whitespace-nowrap"
                    >
                      資料
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Talks;
