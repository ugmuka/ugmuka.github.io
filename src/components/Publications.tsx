import portfolio from '../data/portfolio';
import LinkCardList from './LinkCardList';

const Publications: React.FC = () => {
  const { publications } = portfolio;
  const items = publications.map((publication, i) => ({
    key: String(i),
    label: publication.issue,
    sublabel: publication.circle,
    title: publication.title,
    url: publication.url,
  }));

  return (
    <section id="publications" className="section-pad">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>

        <LinkCardList items={items} />
      </div>
    </section>
  );
};

export default Publications;
