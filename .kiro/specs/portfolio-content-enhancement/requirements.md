# Requirements Document

## Introduction

本ドキュメントは、Data Engineer 向井雄二の個人ポートフォリオサイト（GitHub Pages）に対して、一般的なポートフォリオに期待されるコンテンツ要素を追加・拡充するための要件を定義する。現状のサイトはプロフィール・職歴・スキル・資格・登壇・その他活動の各セクションを持つが、採用担当者やクライアントが判断材料として必要とする情報（自己紹介文、プロジェクト詳細、スキルレベル表示、OSS/ブログ活動など）が不足している。本機能強化により、訪問者がエンジニアの実力・人物像を迅速に把握できるポートフォリオを実現する。

## Requirements

### Requirement 1: 自己紹介・サマリーセクション

**Objective:** 採用担当者として、エンジニアの強みや専門領域を数文で把握したい。そうすることで、詳細を読む前に適性を素早く判断できる。

#### Acceptance Criteria

1. The Portfolio Site shall display a summary section containing a short professional bio (50〜200字程度) that describes the engineer's expertise and career focus.
2. The Portfolio Site shall display the engineer's years of experience or career start year in the summary section.
3. When a visitor accesses the site, the Portfolio Site shall render the summary section in a visually prominent position near the top of the page (Profile セクション直下またはヘッダー内).
4. The Portfolio Site shall display a "What I do" または "About" の見出しを持つ自己紹介ブロックを表示する.

---

### Requirement 2: プロジェクト詳細の充実

**Objective:** 採用担当者・クライアントとして、各プロジェクトの技術スタックや担当範囲・成果を具体的に確認したい。そうすることで、実務能力を正確に評価できる。

#### Acceptance Criteria

1. The Portfolio Site shall display each project with the following fields: プロジェクト概要（1〜2文）、使用技術スタック、担当フェーズ（設計/開発/運用など）.
2. The Portfolio Site shall display period and scale information (例: データ量・チーム規模) for each project entry where available.
3. When a project has measurable outcomes, the Portfolio Site shall display quantified achievements (例: 処理速度 XX% 改善).
4. The Portfolio Site shall display each project's technology stack as tags or badges to enable quick scanning.

---

### Requirement 3: スキルレベルの可視化

**Objective:** 訪問者として、スキル一覧だけでなく各技術の習熟度を把握したい。そうすることで、エンジニアを業務に適用できるかを判断できる。

#### Acceptance Criteria

1. The Portfolio Site shall display a proficiency indicator (例: 年数、レベル区分 Beginner/Intermediate/Advanced/Expert、またはスターレーティング) for each skill item.
2. The Portfolio Site shall group skills by category (Language、Cloud、Data Engineering Tools 等) as currently implemented, and additionally indicate primary skills or featured technologies.
3. Where a skill has official certifications linked to it, the Portfolio Site shall visually associate the certification with the corresponding skill category.
4. The Portfolio Site shall display the number of years of practical experience alongside each skill where data is available.

---

### Requirement 4: 資格・学習活動の拡充

**Objective:** 採用担当者として、取得資格の取得年・有効期限や、継続的な学習姿勢を確認したい。そうすることで、エンジニアの最新技術への追随度を評価できる。

#### Acceptance Criteria

1. The Portfolio Site shall display each certification with its acquisition year or date.
2. Where a certification has an expiration date, the Portfolio Site shall display the expiration date or renewal status.
3. The Portfolio Site shall display certifications in a structured format (バッジ形式またはカード形式) that visually distinguishes certified areas (AWS / GCP / Snowflake など).
4. Where the engineer has in-progress certifications or learning goals, the Portfolio Site shall display an "In Progress" or "Next Goal" indicator.

---

### Requirement 5: ブログ・技術記事活動の表示

**Objective:** 訪問者として、エンジニアの技術発信活動（Qiita/Zenn 記事）を確認したい。そうすることで、知識共有への姿勢とライティング能力を判断できる。

#### Acceptance Criteria

1. The Portfolio Site shall display links to the engineer's technical writing platforms (Qiita、Zenn) with descriptive labels.
2. Where featured articles are defined in the portfolio data, the Portfolio Site shall display up to 5 featured articles with title、platform、and URL.
3. The Portfolio Site shall display the total article count or latest publish date for each platform where data is available.
4. When a visitor clicks an article or platform link, the Portfolio Site shall open the link in a new browser tab with `target="_blank" rel="noopener noreferrer"`.

---

### Requirement 6: OSS・個人開発プロジェクトの表示

**Objective:** 採用担当者・クライアントとして、業務以外での技術活動（個人開発・OSS）を確認したい。そうすることで、エンジニアの自発的な技術探求を評価できる。

#### Acceptance Criteria

1. The Portfolio Site shall display a section for personal projects or OSS contributions separate from work experience.
2. The Portfolio Site shall display each personal project with: プロジェクト名、概要、使用技術、リポジトリまたはデモリンク.
3. When a project link is provided, the Portfolio Site shall render it as a clickable link with `target="_blank" rel="noopener noreferrer"`.
4. If no personal projects are defined in the portfolio data, the Portfolio Site shall hide the personal projects section entirely (セクション自体を非表示にする).

---

### Requirement 7: データ層の型定義拡張

**Objective:** 開発者として、新しいコンテンツフィールドを追加する際に型安全性を維持したい。そうすることで、コンテンツ更新時のバグを防止できる。

#### Acceptance Criteria

1. The Portfolio Site shall define TypeScript interfaces for all new content fields (bio、proficiency level、certification date、featured articles、personal projects、contact info) in `src/data/portfolio.ts`.
2. When optional fields are not populated in the portfolio data, the Portfolio Site shall render sections gracefully without breaking the UI (オプションフィールドは `?` で定義する).
3. The Portfolio Site shall maintain the single-source-of-truth principle: all displayable content shall be defined exclusively in `src/data/portfolio.ts`.
4. If a required field is missing from the portfolio data, the Portfolio Site shall display a sensible fallback value or hide the corresponding UI element.
