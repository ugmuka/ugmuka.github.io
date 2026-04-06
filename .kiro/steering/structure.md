# Project Structure

## Organization Philosophy

Vite + React + TypeScript のコンポーネントベース SPA。データ層（`src/data/`）と UI 層（`src/components/`）を明確に分離し、コンテンツ更新は `portfolio.ts` のみで完結する。

## Directory Patterns

### エントリーポイント
**Location**: `index.html`（ルート）  
**Purpose**: Vite が処理するルート HTML。`src/main.tsx` をスクリプトとして読み込む

### アプリケーション本体
**Location**: `src/`  
**Purpose**: React アプリケーション全体

### データ層
**Location**: `src/data/portfolio.ts`  
**Purpose**: ポートフォリオコンテンツ定数（`PortfolioData` 型）を定義する唯一の正規ソース  
**Example**: プロフィール・職歴・スキル・資格・登壇・その他活動をすべてここに定義

### コンポーネント層
**Location**: `src/components/`  
**Purpose**: セクションごとの React コンポーネント  
**Example**: `Header.tsx`, `Profile.tsx`, `Experience.tsx`, `Skills.tsx`, `Certifications.tsx`, `Talks.tsx`, `Others.tsx`

### ビルド出力
**Location**: `docs/`  
**Purpose**: GitHub Pages で公開する静的ファイル（`npm run build` で生成）

### 設定・仕様
**Location**: `.kiro/`  
**Purpose**: ステアリング（`steering/`）とスペック（`specs/`）による開発ガイドライン

## Naming Conventions

- **Files**: パスカルケース（例: `Profile.tsx`）、データファイルはキャメルケース（例: `portfolio.ts`）
- **TypeScript**: インターフェースはパスカルケース、定数はキャメルケース

## Code Organization Principles

- 各セクションコンポーネントは `portfolio.ts` を直接インポートする（props なし）
- 新セクション追加: `portfolio.ts` にデータを追加 → `src/components/` にコンポーネント作成 → `App.tsx` に組み込む
- すべての外部リンクに `target="_blank" rel="noopener noreferrer"` を付与する

---
_Document patterns, not file trees. New files following patterns shouldn't require updates_
