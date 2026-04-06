import { useState } from 'react';

interface NavItem {
  label: string;
  targetId: string;
}

const navItems: NavItem[] = [
  { label: '経歴', targetId: 'experience' },
  { label: 'スキル', targetId: 'skills' },
  { label: '資格', targetId: 'certifications' },
  { label: '登壇', targetId: 'talks' },
  { label: 'その他', targetId: 'others' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <nav
        className="max-w-3xl mx-auto px-4 flex items-center justify-between h-14"
        aria-label="サイトナビゲーション"
      >
        <a href="#profile" className="font-semibold text-gray-800 hover:text-gray-600">
          向井雄二
        </a>

        {/* デスクトップメニュー */}
        <ul className="hidden sm:flex gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.targetId}>
              <a
                href={`#${item.targetId}`}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* モバイルハンバーガーボタン */}
        <button
          className="sm:hidden p-2 rounded hover:bg-gray-100"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </button>
      </nav>

      {/* モバイルドロップダウンメニュー */}
      {menuOpen && (
        <ul className="sm:hidden list-none m-0 p-0 border-t border-gray-200 bg-white">
          {navItems.map((item) => (
            <li key={item.targetId}>
              <a
                href={`#${item.targetId}`}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
