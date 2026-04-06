# Requirements Document

## Introduction

個人ポートフォリオサイト（GitHub Pages / Vite + React + TypeScript + Tailwind CSS v4）において、テキストの可読性を改善する。現状のダークテーマ（背景 `#07080f`、テキスト `#e8eaf0`、ミュートテキスト `#6b7280`）は、コントラスト比・フォントサイズ・行間・文字間隔の観点で読みづらい箇所が存在する。採用担当者・クライアントが経歴・スキル・資格・登壇履歴を快適に閲覧できるよう、デザインシステム（`src/index.css`）のデザイントークンとユーティリティクラスを中心に可読性を向上させる。**ダークモードへの固執は不要であり、ライトモードへの全面移行を含む配色変更を許容する。**

---

## Requirements

### 1. テキストコントラスト比の確保

**Objective:** 採用担当者として、本文テキストとミュートテキストが背景に対して十分なコントラストを持つことを望む。そうすることで、経歴やスキルの内容を目を細めることなく読める。

#### Acceptance Criteria

1. The Portfolio Site shall display `--text-primary` with a contrast ratio of at least 4.5:1 against `--bg-primary` (WCAG AA 達成).
2. The Portfolio Site shall display `--text-muted` with a contrast ratio of at least 3:1 against `--bg-primary` and `--bg-surface` (WCAG AA Large Text 相当).
3. When `--text-muted` contrast ratio is below 3:1 with the current background token, the Portfolio Site shall replace the token value with a higher-luminance color.
4. The Portfolio Site shall maintain the amber accent color `#ffb800` for interactive and decorative elements without applying it to body text.

---

### 2. 本文フォントサイズと行間の最適化

**Objective:** 閲覧者として、本文テキストが適切なサイズと行間で表示されることを望む。そうすることで、長い職歴やプロジェクト説明を読み続けても疲れにくい。

#### Acceptance Criteria

1. The Portfolio Site shall render body text at a minimum font size of 1rem (16px) on desktop viewports (width ≥ 1024px).
2. The Portfolio Site shall apply a line-height of at least 1.7 to body text paragraphs and description blocks.
3. The Portfolio Site shall apply a line-height of at least 1.5 to list items in skills, certifications, and other sections.
4. When the viewport width is less than 768px, the Portfolio Site shall maintain a minimum font size of 0.9rem (14.4px) for body text.
5. If body text font size is reduced below 1rem, the Portfolio Site shall compensate by increasing line-height to at least 1.8.

---

### 3. ミュートテキストの視認性改善

**Objective:** 閲覧者として、補助的な情報（日付・タグ・ラベル）が薄すぎず読める色で表示されることを望む。そうすることで、プロジェクト期間や技術タグを見落とさずに確認できる。

#### Acceptance Criteria

1. The Portfolio Site shall display `.tag` component text with a contrast ratio of at least 3:1 against its background.
2. When `.tag` is in its default (non-hover) state, the Portfolio Site shall render tag text at `--text-muted` value no darker than `#8b95a1` (CIE L\* ≥ 60).
3. The Portfolio Site shall display date and period labels in Experience and Talks sections using `--text-muted` token at a luminance level sufficient for 3:1 contrast.
4. The Portfolio Site shall display `.nav-link` text in its default state with a contrast ratio of at least 3:1 against the header background.

---

### 4. 等幅フォント（モノスペース）テキストの可読性

**Objective:** 閲覧者として、スキルタグ・ナビゲーション・セクション番号などの等幅フォントが読みやすいサイズと間隔で表示されることを望む。そうすることで、技術スタック一覧を素早くスキャンできる。

#### Acceptance Criteria

1. The Portfolio Site shall render `.tag` text using `--font-mono` at a minimum font size of 0.75rem.
2. The Portfolio Site shall render `.btn-ghost` and `.nav-link` text using `--font-mono` at a minimum font size of 0.75rem with `letter-spacing` no greater than 0.1em.
3. The Portfolio Site shall render `.section-number` text at a minimum font size of 0.8rem.
4. While `.tag` font size is 0.75rem, the Portfolio Site shall apply `letter-spacing` of 0.02em or less to avoid overly spread characters.

---

### 5. セクション見出しの階層と可読性

**Objective:** 採用担当者として、各セクションの見出しと本文が明確な視覚的階層を持つことを望む。そうすることで、ページをスキャンしながら必要なセクションをすぐに見つけられる。

#### Acceptance Criteria

1. The Portfolio Site shall render primary section headings (e.g., EXPERIENCE, SKILLS) at a font size of at least 1.5rem using `--font-display`.
2. The Portfolio Site shall render secondary headings (company name, project title) at a font size of at least 1.1rem.
3. The Portfolio Site shall maintain a visible contrast between heading text and body text through font-weight or font-size differentiation (heading font-weight ≥ 600 or size ratio ≥ 1.2x).
4. When the viewport width is less than 768px, the Portfolio Site shall scale section headings down proportionally while keeping the size ratio between heading and body text at ≥ 1.2x.

---

### 6. デザインシステムの再構成

**Objective:** 開発者として、可読性改善のためにカラーテーマを含むデザインシステム全体を見直せることを望む。そうすることで、ダークモードに縛られず最も読みやすい配色を選択できる。

#### Acceptance Criteria

1. The Portfolio Site may adopt a light theme, dark theme, or a redesigned dark theme — the choice shall be determined in the design phase based on readability, contrast ratio compliance, and overall aesthetic quality.
2. The Portfolio Site shall define all color values via CSS custom properties in the `:root` block of `src/index.css`; no inline style overrides shall be introduced.
3. When CSS custom property values in `src/index.css` are updated, the Portfolio Site shall apply changes globally across all components that reference the token.
4. If a new CSS custom property is required to support readability improvements, the Portfolio Site shall define it in the `:root` block of `src/index.css`.
5. The Portfolio Site shall maintain visual coherence (consistent background, text, and accent colors) across all sections after any theme change.
