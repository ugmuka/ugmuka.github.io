# Requirements Document

## Project Description (Input)
reactで書き直して

## Introduction

本仕様は、stlite（WebAssembly）上の Streamlit アプリとして実装されている個人ポートフォリオサイトを React に書き直すための要件を定義する。対象サイトはデータエンジニア・向井雄二のポートフォリオであり、GitHub Pages の静的サイトとして引き続き動作させる。現行サイトが持つすべてのコンテンツセクション（プロフィール・職歴・スキル・資格・登壇履歴・その他）を React アプリケーションとして再実装し、保守性・拡張性を高めることを目的とする。

---

## Requirements

### Requirement 1: プロジェクト構成とビルド環境

**Objective:** As a 開発者, I want GitHub Pages にデプロイ可能な React アプリのビルド環境を構築する, so that サーバーレス静的サイトとして維持コストなしに公開し続けられる

#### Acceptance Criteria

1. The Portfolio Site shall ビルド成果物を `docs/` ディレクトリ以下に出力する
2. The Portfolio Site shall GitHub Pages から `docs/` を公開するだけでアクセス可能な静的ファイル（HTML / CSS / JS）を生成する
3. When ビルドコマンドを実行した時, the Portfolio Site shall エラーなくビルドが完了し `docs/index.html` が生成される
4. If ビルドが失敗した場合, the Portfolio Site shall エラーメッセージをコンソールに出力する
5. The Portfolio Site shall Python / stlite / WebAssembly への依存を持たない

---

### Requirement 2: プロフィール表示

**Objective:** As a 採用担当者, I want エンジニアの基本情報と SNS リンクを一目で確認したい, so that 連絡先やオンライン活動をすぐに把握できる

#### Acceptance Criteria

1. The Portfolio Site shall 氏名（向井雄二）・職種（Data Engineer）・メールアドレスを表示する
2. The Portfolio Site shall X / LinkedIn / Qiita / Zenn / SpeakerDeck の各 SNS リンクをクリック可能な形で表示する
3. When SNS リンクをクリックした時, the Portfolio Site shall 対象の外部 URL を新しいタブで開く
4. The Portfolio Site shall メールアドレスを `mailto:` リンクとして表示する

---

### Requirement 3: 職歴・プロジェクト一覧表示

**Objective:** As a 採用担当者, I want エンジニアの職歴と関与プロジェクトを確認したい, so that 実務経験とスキルの裏付けを理解できる

#### Acceptance Criteria

1. The Portfolio Site shall 勤務先（DATUM STUDIO 株式会社）・職種（データエンジニア）・在籍期間（2020/04/01〜現在）を表示する
2. The Portfolio Site shall 携わったプロジェクト一覧をリスト形式で表示する
3. The Portfolio Site shall プロジェクト一覧に少なくとも現行サイトに記載された 7 件のプロジェクトを含む

---

### Requirement 4: スキルマトリクス表示

**Objective:** As a 採用担当者, I want 技術スタックをカテゴリ別に確認したい, so that 対象エンジニアが担当できる領域を素早く判断できる

#### Acceptance Criteria

1. The Portfolio Site shall スキルを「Language」「Application Framework」「Cloud」「Infrastructure Tools」「Data Engineering Tools」「BI Tools」「Others」のカテゴリに分けて表示する
2. The Portfolio Site shall 各カテゴリに現行サイトと同等のスキル項目を含む
3. The Portfolio Site shall 各カテゴリのスキル項目をリスト形式で表示する

---

### Requirement 5: 資格表示

**Objective:** As a 採用担当者, I want 取得済み認定資格の一覧を確認したい, so that エンジニアの公式認定レベルを把握できる

#### Acceptance Criteria

1. The Portfolio Site shall 資格一覧をリスト形式で表示する
2. The Portfolio Site shall 現行サイトに記載された 5 件の資格（応用情報技術者・AWS SAP・AWS DAS・GCP PDE・SnowPro Advanced Architect）をすべて含む

---

### Requirement 6: 登壇履歴表示

**Objective:** As a コミュニティメンバー, I want 過去の登壇情報と資料リンクを確認したい, so that 発表内容に興味があれば資料を参照できる

#### Acceptance Criteria

1. The Portfolio Site shall 登壇履歴をテーブル形式で表示し、各行に「日付」「イベント名」「タイトル」「資料リンク」を含める
2. The Portfolio Site shall 資料リンクをクリック可能なリンクとして表示する
3. When 資料リンクをクリックした時, the Portfolio Site shall 対象の外部 URL を新しいタブで開く
4. The Portfolio Site shall 現行サイトに記載された 4 件の登壇履歴をすべて含む

---

### Requirement 7: その他活動表示

**Objective:** As a 採用担当者, I want 職歴以外の開発活動を確認したい, so that エンジニアの幅広い技術経験を把握できる

#### Acceptance Criteria

1. The Portfolio Site shall 職歴以外の開発活動（知人プロダクト Actice の支援など）を文章形式で表示する
2. When 外部プロダクトへのリンクをクリックした時, the Portfolio Site shall 対象の外部 URL を新しいタブで開く

---

### Requirement 8: レスポンシブレイアウト

**Objective:** As a サイト訪問者, I want デスクトップとモバイルどちらでも快適に閲覧したい, so that デバイスを選ばず情報を参照できる

#### Acceptance Criteria

1. The Portfolio Site shall デスクトップ幅（1024px 以上）とモバイル幅（375px 以上）の両方で主要なコンテンツが正しく表示される
2. While モバイル幅で表示している場合, the Portfolio Site shall テキストや画像が画面幅を超えてはみ出さない
3. The Portfolio Site shall セクション間のナビゲーションをページ内リンクまたはメニューとして提供する

---

### Requirement 9: パフォーマンスとアクセシビリティ

**Objective:** As a サイト訪問者, I want サイトを素早く読み込み・スクリーンリーダーでも利用したい, so that ストレスなく情報にアクセスできる

#### Acceptance Criteria

1. The Portfolio Site shall 初回ロード時に WebAssembly ランタイムのダウンロードを不要とし、現行 stlite サイトより高速に表示する
2. The Portfolio Site shall 画像・アイコンなどに適切な代替テキスト（alt 属性）を付与する
3. The Portfolio Site shall セマンティックな HTML 要素（`<header>`, `<main>`, `<section>`, `<nav>` 等）を使用する
