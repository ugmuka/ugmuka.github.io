---
name: sync-portfolio-from-cv
description: Sync career data from cv/cv.yaml (the RenderCV résumé source) into src/data/portfolio.ts (the website's data layer). Use when the user says things like "cv.yamlの内容をサイトに反映して", "経歴書を更新したのでポートフォリオサイトにも反映して", "cvを見て更新して", or after cv/cv.yaml has been edited and the site looks out of date.
metadata:
  author: project
  version: "1.0.0"
---

# cv.yaml → portfolio.ts 同期

このリポジトリには経歴データが2箇所にある:

- **`cv/cv.yaml`** — RenderCV用の経歴書ソース。`make cv` で `cv/rendercv_output/` にPDFを生成する。日本企業向け職務経歴書のフォーマット・分かち書き（英数字の前後に半角スペース）を前提にしている。**こちらが内容の一次情報源。**
- **`src/data/portfolio.ts`** — ポートフォリオサイト（React）が直接importするデータ層。`PortfolioData` 型に従う。

この2つは自動連携していない。cv.yamlが更新されたら、このスキルの手順でportfolio.tsへ反映する。

## 手順

1. `cv/cv.yaml` と `src/data/portfolio.ts` の両方を読み、差分を洗い出す（新規追加・日付更新・文言修正など）。
2. 下記の「フィールド対応表」と「変換ルール」に従って `src/data/portfolio.ts` を編集する。型定義（`ProfileData` 等のinterface）は原則変更しない。構造を変える必要がある場合はユーザーに確認する。
3. 判断に迷うケース（下記「要確認ケース」）があればユーザーに聞く。黙って推測で埋めない。
4. 編集後、`npm run build` と `npm run lint` を実行して確認する。
5. コミットする場合は `.claude/rules/commit-message-rules.md` に従う（Conventional Commits + Claudeトレーラー）。

## フィールド対応表

| cv.yaml | portfolio.ts | 備考 |
|---|---|---|
| `cv.name` | `profile.name` | |
| `cv.headline` | `profile.role` | |
| `cv.email` | `profile.email` | |
| `cv.sections.職務要約` | `profile.summary` | 配列の各要素が1段落。整形ルール参照 |
| `cv.social_networks` (network/username) | `profile.socialLinks` | `X` → `https://x.com/{username}`、`LinkedIn` → `https://www.linkedin.com/in/{username}/` |
| `cv.custom_connections` (placeholder/url) | `profile.socialLinks` | `platform: placeholder`, `url` はそのまま |
| `cv.sections.職務経歴` (company/position/start_date/end_date) | `experiences[].company` / `.role` / `.period` | 日付変換・並び順ルール参照 |
| `cv.sections.主なプロジェクト` (name/start_date/end_date/location/summary) | `experiences[].projects[].title` / `.period` / `.role`(←location) / `.summary` | **所属企業への振り分けが必要**。要確認ケース参照 |
| `cv.sections.活かせる経験・知識` (label/details) | `skills[].category`(←label) / `.items`(←detailsを`, `で分割) | 1:1対応、順序もそのまま |
| `cv.sections.業務外の活動` の「登壇」highlights | `talks[]` | フリーテキストのパース必要。要確認ケース参照 |
| `cv.sections.業務外の活動` の「技術記事の執筆」「個人開発」等 | `otherActivities[]` | Markdownリンク `[text](url)` → `description` + `links[]` |
| `cv.sections.業務外の活動` の「資格」 | `certifications[]` | `A / B / C` 形式を ` / ` で分割 |
| `cv.sections.Appendix 職務経歴詳細` | （サイトには反映しない） | PDF専用の詳細版。サイトは「主なプロジェクト」側の要約を使う |

## 変換ルール

- **日付形式**: cv.yamlの `YYYY-MM-DD` / `YYYY-MM` をサイトでは `YYYY/MM/DD` / `YYYY/MM` に変換（ハイフン→スラッシュ、粒度はcv.yaml側に合わせる。日付を勝手に補完しない）。`end_date: present` は `現在` に変換し、`期間: '開始〜現在'` の形にする。
- **分かち書きスペースの除去**: cv.yamlはPDFの日本語組版用に英数字の前後へ半角スペースを入れている（例: `1000億行超・2システム統合の Snowflake 移行で`）。サイト側ではこのスペースを詰める（例: `1000億行超・2システム統合のSnowflake移行で`）。既存のportfolio.ts内の文章と見比べて同じ詰め方に揃えること。
- **改行の結合**: cv.yamlの `>-` ブロックで複数行になっている要約は、サイト側では1つの文字列に結合する（文末が「。」なので改行やスペースを挟まずそのまま連結でよい）。
- **経歴・プロジェクトの並び順**: `experiences[]` は開始日が新しい順（直近の案件が配列の先頭）。各社内の `projects[]` も新しい順。cv.yamlの「主なプロジェクト」は既にこの順（新しい順）で書かれているので、そのまま踏襲すればよい。

## 要確認ケース（推測で埋めずユーザーに聞く）

- **プロジェクトの所属企業振り分け**: `主なプロジェクト` はフラットなリストで、どの `職務経歴` エントリに紐づくかの明示フィールドがない。基本は「プロジェクトの `start_date` がその企業の在籍期間に収まるか」で判定できるが、兼業などで期間が重なる場合は `Appendix 職務経歴詳細` の `summary`（例: 「AME&Company（株）の HR テック『HR pentest』」のように会社名が明記されていることがある）を手がかりにする。それでも判断できなければユーザーに確認する。
- **登壇(talks)の日付粒度**: cv.yamlの「登壇」highlightsは `YYYY/MM` までしか書かれていないが、`portfolio.ts` の `talks[].date` は `YYYY/MM/DD` まで持っている。新しい登壇をcv.yamlから拾うときは、正確な日付をユーザーに確認する（過去分は既存の値を保持し、上書きしない）。
- **登壇highlightsのパース**: `"{date} {event}「{title}」 [Slides]({url})"` という書式を前提にパースする。この書式から外れるエントリがあれば機械的に処理せずユーザーに確認する。
- **portfolio.ts側にあってcv.yamlに無い内容**: サイト側が直接編集されてcv.yamlより先に進んでいることがある（例: 新しい `otherActivities` エントリ）。この場合は同期の方向を確認する（cv.yamlにも追記すべきか、サイト限定の内容か）。

## 確認方法

- `npm run build` / `npm run lint` が通ること
- 可能であれば `npm run dev` を起動し、Experience / Skills / Certifications / Talks / Others の各セクションを目視確認する
