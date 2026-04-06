import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Talks from './components/Talks';
import Others from './components/Others';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-full">
      <Header />
      <main>
        <Profile />
        <Experience />
        <Skills />
        <Certifications />
        <Talks />
        <Others />
      </main>
      <footer className="py-6 px-4 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} 向井雄二
      </footer>
    </div>
  );
};

export default App;
