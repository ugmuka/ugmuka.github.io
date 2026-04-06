# Technology Stack

## Architecture

サーバーレス静的サイト。Vite + React + TypeScript でビルドし、`docs/` に静的ファイルを出力して GitHub Pages で公開する。WebAssembly ランタイム不要。

## Core Technologies

- **Language**: TypeScript ~6.0.2
- **UI Framework**: React 19
- **Build Tool**: Vite ^8.0.4
- **Styling**: Tailwind CSS v4（`@tailwindcss/vite` プラグイン経由）
- **Hosting**: GitHub Pages（`docs/` ディレクトリを公開）

## Key Libraries

- **@vitejs/plugin-react**: React の Fast Refresh と JSX 変換
- **@tailwindcss/vite**: Tailwind CSS v4 の Vite プラグイン（PostCSS 設定不要）

## Design System

CSS カスタムプロパティを `src/index.css` で一元管理し、デザイントークンの単一ソース・オブ・トゥルースとする。

### Visual Theme
- ダークターミナル美学: 黒に近い背景（near-black）、アンバー `#ffb800` をアクセントカラーとして使用
- グロウエフェクト（`text-shadow` / `box-shadow`）をアクセント要素に適用

### Font Strategy
| 用途 | フォント |
|---|---|
| Display | `Syne` |
| Body | `DM Sans` |
| Mono | `JetBrains Mono` |
| 日本語 fallback | `Noto Sans JP` |

### Reusable CSS Utility Classes
コンポーネント間で共有する CSS クラスを `src/index.css` に定義する:

- `.card` — カード型コンテナ
- `.btn-ghost` — ゴーストボタン
- `.tag` — タグ／バッジ
- `.nav-link` — ナビゲーションリンク
- `.section-number` — セクション番号装飾
- `.timeline-line` / `.timeline-dot` — タイムラインレイアウト
- `.dot-grid` — ドットグリッド背景パターン
- `.scanline-overlay` — スキャンライン効果オーバーレイ

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
