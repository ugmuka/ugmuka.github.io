import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Talks from './components/Talks';
import Others from './components/Others';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-full" style={{ background: 'var(--bg-primary)' }}>
      <Header />
      <main>
        <Profile />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Talks />
        <div className="section-divider" />
        <Others />
      </main>
      <footer
        className="py-8 px-4 text-center"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border)',
        }}
      >
        © {new Date().getFullYear()} 向井雄二 — Built with React + Vite
      </footer>
    </div>
  );
};

export default App;
