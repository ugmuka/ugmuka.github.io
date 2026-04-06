# Implementation Plan

- [x] 1. Vite + React + TypeScript プロジェクト環境を構築する
- [x] 1.1 Vite の react-ts テンプレートでプロジェクトを初期化し、ビルド出力先を `docs/` に設定する
  - `npm create vite` で react-ts テンプレートを作成し、既存リポジトリ構造に統合する
  - `vite.config.ts` の `build.outDir` を `'docs'` に設定し、`base` を `'/'` に設定する
  - `tsconfig.json` / `tsconfig.app.json` の strict モードが有効であることを確認する
  - _Requirements: 1.1, 1.2_

- [x] 1.2 Tailwind CSS v4 を Vite プラグインとして導入する
  - `@tailwindcss/vite` を npm でインストールし、`vite.config.ts` に Tailwind プラグインを追加する
  - `src/index.css` に `@import "tailwindcss"` を記述してスタイルを有効化する
  - PostCSS 設定ファイルが不要であることを確認する（v4 は Vite プラグインのみで動作）
  - _Requirements: 1.2, 8.1_

- [x] 1.3 `npm run build` でビルドが成功し `docs/index.html` が生成されることを確認する
  - 初期状態でビルドを実行し、`docs/index.html` と `docs/assets/` が生成されることを確認する
  - ビルドエラー時にコンソールへエラーメッセージが出力されることを確認する
  - _Requirements: 1.3, 1.4_

- [x] 2. ポートフォリオコンテンツデータを TypeScript 定数として定義する
  - `docs/app/main.py` のすべての定数（NAME / EMAIL / SOCIAL_MEDIA / 職歴 / スキル / 資格 / 登壇 / その他）を `PortfolioData` 型に従って移行する
  - プロフィール情報（氏名・職種・メールアドレス・SNS リンク 5 件）を `profile` フィールドに設定する
  - 職歴エントリに勤務先・職種・在籍期間と 7 件以上のプロジェクトを含める
  - スキルを 7 カテゴリ（Language / Application Framework / Cloud / Infrastructure Tools / Data Engineering Tools / BI Tools / Others）に分けて定義する
  - 資格 5 件（応用情報技術者・AWS SAP・AWS DAS・GCP PDE・SnowPro Advanced Architect）をすべて含める
  - 登壇履歴 4 件を日付・イベント名・タイトル・SpeakerDeck URL つきで定義する
  - その他活動を説明文と外部リンクつきで定義する
  - `SOCIAL_MEDIA` の順序（X / LinkedIn / Qiita / Zenn / SpeakerDeck）を維持する
  - _Requirements: 2.1, 2.2, 3.1, 3.3, 4.1, 4.2, 5.2, 6.4_

- [x] 3. プロフィールセクションコンポーネントを実装する (P)
  - `<section id="profile">` でラップし、氏名・職種・メールアドレスを表示する
  - メールアドレスを `mailto:` リンクとして表示する
  - SNS リンク 5 件を `target="_blank" rel="noopener noreferrer"` 付きで表示する
  - アイコンなどに適切な代替テキストを付与する
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 9.2_

- [x] 4. 職歴・プロジェクトセクションコンポーネントを実装する (P)
  - `<section id="experience">` でラップし、勤務先・職種・在籍期間を表示する
  - プロジェクト一覧を `<ul>` / `<li>` のリスト形式で表示する
  - 7 件以上のプロジェクトがリストに含まれることを確認する
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 5. スキルマトリクスセクションコンポーネントを実装する (P)
  - `<section id="skills">` でラップし、7 カテゴリをそれぞれ `<h3>` + `<ul>` で表示する
  - 各カテゴリの全スキル項目をリスト形式で表示する
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 6. 資格セクションコンポーネントを実装する (P)
  - `<section id="certifications">` でラップし、資格一覧を `<ul>` / `<li>` でリスト表示する
  - 5 件の資格がすべて含まれることを確認する
  - _Requirements: 5.1, 5.2_

- [x] 7. 登壇履歴セクションコンポーネントを実装する (P)
  - `<section id="talks">` でラップし、`<table>` を使って日付・イベント名・タイトル・資料リンクを表示する
  - 資料リンクを `target="_blank" rel="noopener noreferrer"` 付きクリック可能リンクとして表示する
  - モバイルでのテーブル横スクロールのため `overflow-x-auto` コンテナで囲む
  - 4 件の登壇履歴がすべて含まれることを確認する
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 8. その他活動セクションコンポーネントを実装する (P)
  - `<section id="others">` でラップし、開発活動を文章形式で表示する
  - 外部プロダクトへのリンクを `target="_blank" rel="noopener noreferrer"` 付きで表示する
  - _Requirements: 7.1, 7.2_

- [x] 9. ナビゲーションバーとページ全体レイアウトを統合する
- [x] 9.1 Header コンポーネントを実装し、セクション間のページ内ナビゲーションを提供する
  - `<header>` + `<nav>` セマンティック要素を使用してナビゲーションバーを実装する
  - 各セクションへの `<a href="#section-id">` アンカーリンクを設置する
  - モバイルではメニュー開閉を `useState` でローカル管理し、`aria-label` / `aria-expanded` を付与する
  - _Requirements: 8.3, 9.3_

- [x] 9.2 App.tsx でページ全体のセマンティック構造とレスポンシブレイアウトを構成する
  - `<header>`, `<main>`, `<section>`, `<nav>` のセマンティック HTML 要素を使用する
  - Tailwind のレスポンシブ prefix を用いてデスクトップ（1024px 以上）とモバイル（375px 以上）の両方でレイアウトが正しく表示されるようにする
  - `overflow-x-hidden` / `max-w-full` でモバイル時の横はみ出しを防止する
  - `html` 要素に `scroll-behavior: smooth` を適用してスムーズスクロールを有効化する
  - すべてのセクションコンポーネントを組み込み、セクション `id` 属性を付与する
  - _Requirements: 8.1, 8.2, 9.1, 9.3_

- [x] 10. 旧 Python / stlite 関連ファイルを削除し、プロジェクトをクリーンアップする
  - `docs/app/main.py` および `docs/app/` ディレクトリを削除する
  - `pyproject.toml`、`uv.lock` を削除する
  - `.kiro/steering/tech.md` を Vite + React + TypeScript スタックに更新する
  - npm の `dev` スクリプト（`vite`）でローカル開発できることを確認する
  - _Requirements: 1.5_

- [ ]* 11. ビルド成果物とブラウザ表示の手動検証を実施する
  - `npm run build` が成功し `docs/index.html` が生成されることを確認する
  - `http-server` またはローカルサーバーで全セクションが表示されることを確認する
  - ブラウザ DevTools でモバイル幅（375px）のレイアウト崩れがないことを確認する
  - すべての外部リンク（SNS / 登壇資料 / その他）が新タブで開くことを確認する
  - スクリーンリーダーツールでセマンティック構造が正しいことを確認する
  - _Requirements: 1.3, 2.3, 6.3, 7.2, 8.1, 8.2, 9.2, 9.3_
