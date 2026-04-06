# Technology Stack

## Architecture

サーバーレス静的サイト。Vite + React + TypeScript でビルドし、`docs/` に静的ファイルを出力して GitHub Pages で公開する。WebAssembly ランタイム不要。

## Core Technologies

- **Language**: TypeScript 5.x
- **UI Framework**: React 19
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS v4（`@tailwindcss/vite` プラグイン経由）
- **Hosting**: GitHub Pages（`docs/` ディレクトリを公開）

## Key Libraries

- **@vitejs/plugin-react**: React の Fast Refresh と JSX 変換
- **@tailwindcss/vite**: Tailwind CSS v4 の Vite プラグイン（PostCSS 設定不要）

## Development Standards

### Code Quality
- TypeScript strict モード有効
- ESLint（`eslint.config.js`）

### Testing
- 現時点でテストなし（手動検証）

## Development Environment

### Required Tools
- `node` / `npm`（Node.js LTS）
- `http-server`（ローカルプレビュー用）

### Common Commands
```bash
# Dev:   npm run dev  → http://localhost:5173
# Build: npm run build  → docs/ に出力
# Preview built site: npx http-server  → http://127.0.0.1:8080/docs
```

## Key Technical Decisions

- **React + Vite 採用**: stlite の WebAssembly ランタイムを排除し、初回ロードを大幅に高速化
- **Tailwind CSS v4**: PostCSS 設定ファイル不要。`@import "tailwindcss"` の 1 行で有効化
- **コンポーネント単位の設計**: セクションごとに独立したコンポーネント（`src/components/`）を持ち、データは `src/data/portfolio.ts` に集約

---
_Document standards and patterns, not every dependency_
