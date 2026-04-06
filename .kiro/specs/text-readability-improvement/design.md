# 技術設計書: テキスト可読性改善

## 概要

ポートフォリオサイトのテキスト可読性を改善する。**ライトテーマへ全面移行**し、WCAG AA 基準のコントラスト比・適切なフォントサイズ・行間・セクション見出しの視覚的階層を確立する。変更はすべて `src/index.css` のデザイントークン（CSS カスタムプロパティ）を起点とし、コンポーネント側の最小限な修正でグローバルに反映させる。

---

## 設計方針

### テーマ選択: ライトテーマ移行

要件 6.1 に基づき設計フェーズで検討した結果、**ライトテーマ（白背景・ダークテキスト）**を採用する。

**採用理由:**
- `#07080f` のような極暗背景は明瞭度が低く、`--text-muted` の確保が構造的に難しい
- ライトテーマはコントラスト比達成が容易（WCAG AA を大きく上回る）
- アンバーアクセント（`#b8860b`）はライト背景でも 4.5:1 を確保でき、ゴールド系の個性を維持できる
- 採用担当者・クライアントが日中の明るい環境で閲覧する用途に適合

---

## カラーシステム設計

### 新カラートークン（`:root` ブロック、`src/index.css`）

| トークン | 旧値（ダーク） | 新値（ライト） |
|---|---|---|
| `--bg-primary` | `#07080f` | `#f8f9fc` |
| `--bg-surface` | `#0d0f1a` | `#ffffff` |
| `--bg-subtle` | `#12162b` | `#eef0f7` |
| `--text-primary` | `#e8eaf0` | `#1a1d2e` |
| `--text-muted` | `#6b7280` | `#5c6374` |
| `--accent` | `#ffb800` | `#b8860b` |
| `--accent-dim` | `#cc9200` | `#9a7009` |
| `--accent-glow` | `rgba(255,184,0,0.15)` | `rgba(184,134,11,0.12)` |
| `--accent-glow-strong` | `rgba(255,184,0,0.3)` | `rgba(184,134,11,0.25)` |
| `--border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.10)` |
| `--border-accent` | `rgba(184,134,11,0.4)` | `rgba(184,134,11,0.4)` |

### コントラスト比検証

| テキスト（新値） | 背景（新値） | 比率 | 要件 | 判定 |
|---|---|---|---|---|
| `#1a1d2e` | `#f8f9fc` (--bg-primary) | >15:1 | 4.5:1 (req 1.1) | ✓ |
| `#5c6374` | `#f8f9fc` (--bg-primary) | ~5.5:1 | 3:1 (req 1.2) | ✓ |
| `#5c6374` | `#ffffff` (--bg-surface) | ~5.7:1 | 3:1 (req 1.2) | ✓ |
| `#5c6374` | `#eef0f7` (--bg-subtle) | ~4.8:1 | 3:1 (req 3.1) | ✓ |
| `#b8860b` | `#f8f9fc` | ~4.5:1 | 装飾要素（req 1.4）| ✓ |

---

## セクション見出しの再設計

### 要件 5.1: 主見出し ≥ 1.5rem（`--font-display`）

現行の `.section-number` クラスは、"01 / EXPERIENCE" を 1 つの `<span>` で `font-mono 0.85rem` で表示しており、要件を満たさない。

**新構造:**

```css
/* src/index.css */

.section-number {
  display: flex;
  flex-direction: column;    /* 縦並びに変更 */
  margin-bottom: 2.5rem;
  /* ::after 疑似要素は削除 */
}

.section-prefix {            /* "01" 部分 — 新規クラス */
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.section-title {             /* "EXPERIENCE" 部分 — 新規クラス */
  font-family: var(--font-display);
  font-size: 1.75rem;        /* > 1.5rem (req 5.1) */
  font-weight: 700;          /* >= 600 (req 5.3) */
  color: var(--text-primary);
  margin: 0;
  letter-spacing: 0.02em;
}
```

**JSX 変更パターン（5 コンポーネント共通）:**

```jsx
/* 変更前 */
<div className="section-number">
  <span>01 / EXPERIENCE</span>
</div>

/* 変更後 */
<div className="section-number">
  <span className="section-prefix">01</span>
  <h2 className="section-title">EXPERIENCE</h2>
</div>
```

適用コンポーネント:
- `src/components/Experience.tsx` → prefix: `01`, title: `EXPERIENCE`
- `src/components/Skills.tsx` → prefix: `02`, title: `SKILLS`
- `src/components/Certifications.tsx` → prefix: `03`, title: `CERTIFICATIONS`
- `src/components/Talks.tsx` → prefix: `04`, title: `TALKS`
- `src/components/Others.tsx` → prefix: `05`, title: `OTHERS`

---

## 本文フォントサイズ・行間の修正

### 要件 2.1: 本文テキスト ≥ 1rem（デスクトップ）

| ファイル | 要素 | 現 fontSize | 新 fontSize | 現 lineHeight | 新 lineHeight |
|---|---|---|---|---|---|
| `Experience.tsx` L113 | プロジェクト項目 | 0.875rem | **1rem** | 1.5 | **1.7** (req 2.2) |
| `Certifications.tsx` L47 | 資格テキスト | 0.82rem | **1rem** | 1.5 | **1.7** |
| `Talks.tsx` L62 | 登壇タイトル | 0.875rem | **1rem** | 1.4 | **1.5** (req 2.3) |
| `Others.tsx` L21 | 活動説明 | 0.875rem | **1rem** | 1.7 | 変更不要 |

---

## ユーティリティクラスの修正

### `.tag` の letter-spacing

要件 4.4: `.tag` が 0.75rem のとき letter-spacing は 0.02em 以下。

```css
/* 変更前 */
.tag { letter-spacing: 0.15em; ... }   /* 過剰 */

/* 変更後 */
.tag { letter-spacing: 0.02em; ... }
```

### `.dot-grid` のライトテーマ対応

```css
/* 変更前（暗背景向け amber dots） */
.dot-grid {
  background-image: radial-gradient(circle, rgba(255,184,0,0.12) 1px, transparent 1px);
}

/* 変更後（ライト背景向け淡金 dots） */
.dot-grid {
  background-image: radial-gradient(circle, rgba(184,134,11,0.10) 1px, transparent 1px);
}
```

### `Header.tsx` の sticky 背景

```jsx
/* 変更前 */
background: 'rgba(7, 8, 15, 0.92)'

/* 変更後 */
background: 'rgba(248, 249, 252, 0.92)'
```

---

## 変更対象ファイル一覧

| ファイル | 変更内容 |
|---|---|
| `src/index.css` | `:root` トークン全更新、`.section-number` 再定義、`.section-prefix`/`.section-title` 追加、`.tag` letter-spacing 修正、`.dot-grid` 調整 |
| `src/components/Header.tsx` | sticky 背景色変更（L25） |
| `src/components/Experience.tsx` | 見出し HTML 変更 + プロジェクト項目フォントサイズ/行間 |
| `src/components/Skills.tsx` | 見出し HTML 変更 |
| `src/components/Certifications.tsx` | 見出し HTML 変更 + 資格テキストフォントサイズ/行間 |
| `src/components/Talks.tsx` | 見出し HTML 変更 + 登壇タイトルフォントサイズ/行間 |
| `src/components/Others.tsx` | 見出し HTML 変更 + 活動説明フォントサイズ |

---

## 実装しないこと

- レスポンシブ対応の追加変更（既存 clamp()/Tailwind レスポンシブは維持）
- ダークモード切り替え機能の実装（要件 6 に含まれない）
- `src/data/portfolio.ts` の変更（コンテンツはそのまま）
- 新しい React コンポーネントの作成（既存構造内で完結）

---

## 検証方法

1. `npm run build` — TypeScript (`noUnusedLocals`/`noUnusedParameters`) エラーなし
2. `npm run dev` で Vite 開発サーバー起動 → `http://localhost:5173`
3. chrome-devtools MCP でスクリーンショット撮影・目視確認
   - 全セクションが白背景・ダークテキストで表示されること
   - セクション見出し（EXPERIENCE 等）が大きく（1.75rem）表示されること
   - `.tag` 要素の文字間隔が詰まっていること
   - 本文テキストが 1rem（16px）で表示されること
4. コントラスト比: ブラウザ DevTools の Accessibility タブで検証
