# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

GitHub Pages でホスティングされる個人ポートフォリオサイトです。Vite + React + TypeScript + Tailwind CSS v4 で構築した静的サイトで、`npm run build` で `docs/` に出力します。

## アーキテクチャ

- **エントリーポイント**: `index.html` → Vite が `src/main.tsx` をマウント
- **データレイヤー**: `src/data/portfolio.ts` — ポートフォリオコンテンツの唯一の定義元。全コンポーネントがここから直接 import する（Props は使わない）
- **コンポーネント**: `src/components/` — セクション別（Header, Profile, Experience, Skills, Certifications, Talks, Others）、`src/App.tsx` が順に並べる
- **スタイリング**: Tailwind CSS v4（`@tailwindcss/vite` プラグイン経由、PostCSS 設定不要）+ `src/index.css` のカスタムデザインシステム
- **デプロイ**: GitHub Pages が `docs/` ディレクトリの静的ファイルを配信

## デザインシステム

`src/index.css` で定義。コンポーネント側でクラスを直接使う。

**CSS カスタムプロパティ（デザイントークン）**:
- `--bg-primary` (#f8f9fc) / `--bg-surface` (#ffffff) / `--bg-subtle` (#eef0f7) — 背景3階層（ライトテーマ）
- `--text-primary` (#1a1d2e) / `--text-muted` (#5c6374) — テキスト
- `--accent` (#b8860b) — ダークゴールド系アクセントカラー
- `--accent-dim` / `--accent-glow` / `--accent-glow-strong` — アクセント派生色
- `--border` / `--border-accent` — 境界線

**ユーティリティクラス**: `.card`（ホバー時グロウ）、`.tag`、`.btn-ghost`、`.nav-link`、`.section-number` / `.section-prefix` / `.section-title`、`.timeline-line` / `.timeline-dot`、`.dot-grid`、`.scanline-overlay`、`.section-divider`、`.cursor-blink`、`.animate-fade-up` / `.animate-fade-in`

**フォント**: Syne（Display / `--font-display`）、DM Sans（Body / `--font-body`）、JetBrains Mono（Mono / `--font-mono`）、Noto Sans JP（日本語フォールバック）。ユーティリティ: `.font-display`、`.font-mono-custom`

## 開発コマンド

```bash
npm run dev       # Vite 開発サーバー → http://localhost:5173
npm run build     # TypeScript チェック + docs/ にビルド出力
npm run preview   # ビルド済みサイトを Vite でプレビュー
npm run lint      # ESLint チェック
```

テストのセットアップはなし（lint のみ）。

## TypeScript 設定

`tsconfig.app.json` で `noUnusedLocals` / `noUnusedParameters` が有効。未使用の変数・パラメータはビルドエラーになる。

## MCP インテグレーション

`.mcp.json` は `chrome-devtools` MCP サーバーを設定しており、ローカル開発サーバー `http://localhost:5173` に接続します。これにより、開発中にブラウザ自動化ツール（スクリーンショット、ナビゲーション、スクリプト実行）を使ってレンダリングされたサイトを視覚的に検証できます。

## DevContainer

`.devcontainer/` セットアップには以下が含まれます:
- **Chromium + chromium-driver** をブラウザ自動化用にインストール
- **ポート 5173** をローカル開発アクセス用にフォワード
- Claude Code、Node.js LTS、Docker-in-Docker 機能を含む


# AI-DLC とスペック駆動開発

AI-DLC（AI 開発ライフサイクル）上の Kiro スタイルスペック駆動開発の実装

## プロジェクトコンテキスト

### パス
- Steering（出力）: `.kiro/steering/` — `/kiro:steering` で生成
- Specs（出力）: `.kiro/specs/` — `/kiro:spec-init` で生成
- ルールとテンプレート: `.kiro/settings/` — Kiro 設定（ルールおよびスペック・Steering テンプレート）

### Steering と Specification の違い

**Steering** (`.kiro/steering/`) - プロジェクト全体のルールとコンテキストで AI をガイド
**Specs** (`.kiro/specs/`) - 個別機能の開発プロセスを正式化

### アクティブな Specification
- `.kiro/specs/` でアクティブな Specification を確認
- `/kiro:spec-status [feature-name]` で進捗を確認

## 開発ガイドライン
- 英語で考え、英語でレスポンスを生成する。プロジェクトファイル（requirements.md、design.md、tasks.md、research.md、バリデーションレポートなど）に書き込む Markdown コンテンツは、その Specification に設定されたターゲット言語（spec.json.language 参照）で書くこと。

## 最小ワークフロー
- フェーズ 0（任意）: `/kiro:steering`, `/kiro:steering-custom`
- フェーズ 1（仕様策定）:
  - `/kiro:spec-init "description"`
  - `/kiro:spec-requirements {feature}`
  - `/kiro:validate-gap {feature}`（任意: 既存コードベース向け）
  - `/kiro:spec-design {feature} [-y]`
  - `/kiro:validate-design {feature}`（任意: 設計レビュー）
  - `/kiro:spec-tasks {feature} [-y]`
- フェーズ 2（実装）: `/kiro:spec-impl {feature} [tasks]`
  - `/kiro:validate-impl {feature}`（任意: 実装後）
- 進捗確認: `/kiro:spec-status {feature}`（いつでも使用可）

## 開発ルール
- 3 フェーズ承認ワークフロー: 要件 → 設計 → タスク → 実装
- 各フェーズで人間のレビューが必要。`-y` は意図的なファストトラック時のみ使用
- Steering を最新に保ち、`/kiro:spec-status` で整合性を確認
- ユーザーの指示に正確に従い、その範囲内で自律的に行動する: 必要なコンテキストを収集し、このセッションでエンドツーエンドで作業を完了させる。質問するのは不可欠な情報が欠けているか、指示が致命的に曖昧な場合のみ。

## Steering 設定
- `.kiro/steering/` 全体をプロジェクトメモリとして読み込む
- デフォルトファイル: `product.md`, `tech.md`, `structure.md`
- カスタムファイルをサポート（`/kiro:steering-custom` で管理）
