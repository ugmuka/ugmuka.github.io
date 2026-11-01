import portfolio from '../data/portfolio';
import LinkCardList from './LinkCardList';

const Talks: React.FC = () => {
  const { talks } = portfolio;
  const items = talks.map((talk, i) => ({
    key: String(i),
    label: talk.date,
    sublabel: talk.event,
    title: talk.title,
    url: talk.slideUrl,
  }));

  return (
    <section id="talks" className="section-pad-subtle">
      <div className="section-container">
        <h2 className="section-title">Talks</h2>

        <LinkCardList items={items} />
      </div>
    </section>
  );
};

export default Talks;
