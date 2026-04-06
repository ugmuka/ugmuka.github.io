# CLAUDE.md

このファイルは、リポジトリで作業する際の Claude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

GitHub Pages でホスティングされる個人ポートフォリオサイトです。Vite + React + TypeScript で構築した静的サイトで、`npm run build` で `docs/` に出力します。WebAssembly ランタイム不要。

## アーキテクチャ

- **エントリーポイント**: `index.html`（ルート）- Vite が処理し `src/main.tsx` をマウント
- **アプリケーション**: `src/` - React コンポーネント群
- **コンテンツデータ**: `src/data/portfolio.ts` - ポートフォリオコンテンツの唯一の定義元
- **コンポーネント**: `src/components/` - セクション別コンポーネント（Header, Profile, Experience, Skills, Certifications, Talks, Others）
- **デプロイ**: GitHub Pages が `docs/` ディレクトリの静的ファイルを配信

## 開発コマンド

### ローカル開発
```bash
npm run dev       # Vite 開発サーバー起動 → http://localhost:5173
npm run build     # docs/ にビルド出力
```

### ビルド済みサイトのプレビュー
```bash
npx http-server   # 起動 → http://127.0.0.1:8080/docs
```

### リント
```bash
npm run lint
```

## MCP インテグレーション

`.mcp.json` は `chrome-devtools` MCP サーバーを設定しており、ローカル開発サーバー `http://127.0.0.1:8080/docs` に接続します。これにより、開発中にブラウザ自動化ツール（スクリーンショット、ナビゲーション、スクリプト実行）を使ってレンダリングされたサイトを視覚的に検証できます。

## DevContainer

`.devcontainer/` セットアップには以下が含まれます:
- **Chromium + chromium-driver** をブラウザ自動化用にインストール
- **ポート 8080** をローカル開発アクセス用にフォワード
- Claude Code、Node.js LTS、Docker-in-Docker 機能を含む

## 主要ファイル

- `index.html` - Vite エントリーポイント
- `src/data/portfolio.ts` - ポートフォリオコンテンツデータ（ここを編集してコンテンツ更新）
- `src/components/` - セクション別 React コンポーネント
- `src/App.tsx` - ページ全体レイアウト
- `vite.config.ts` - Vite 設定（`build.outDir: 'docs'`）
- `.mcp.json` - MCP サーバー設定（chrome-devtools）


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
