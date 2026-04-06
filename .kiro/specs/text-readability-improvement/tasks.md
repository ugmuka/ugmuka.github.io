# Implementation Plan

- [x] 1. デザインシステムのライトテーマ移行
- [x] 1.1 カラートークンをライトテーマ値に全更新する
  - `:root` ブロック内のすべてのカラーカスタムプロパティ（背景3階層・テキスト2種・アクセント・グロウ・ボーダー）をライトテーマ値に置換する
  - `--text-primary` と `--bg-primary` のコントラスト比が 4.5:1 以上であること
  - `--text-muted` と `--bg-primary`/`--bg-surface`/`--bg-subtle` のコントラスト比が 3:1 以上であること
  - アンバー系アクセントカラーをライト背景で視認性を保つゴールド系に調整する
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 3.1, 3.2, 3.3, 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 1.2 セクション見出し用の CSS クラスを再構成する
  - `.section-number` コンテナを縦並び（flex-direction: column）に変更し、`::after` 疑似要素を削除する
  - `.section-prefix` クラスを新規追加：mono フォント 0.75rem、アクセントカラー、セクション番号表示用
  - `.section-title` クラスを新規追加：display フォント 1.75rem、font-weight 700、セクション名表示用
  - セクション見出しが display フォントで 1.5rem 以上、font-weight 600 以上で表示されること
  - _Requirements: 5.1, 5.3_

- [x] 1.3 タグ・装飾ユーティリティクラスをライトテーマに適応する
  - `.tag` の letter-spacing を 0.02em に変更して文字の過剰な広がりを解消する
  - `.dot-grid` の背景ドットカラーをライト背景で自然に見えるゴールド系に調整する
  - `.scanline-overlay` の不透明度をライト背景向けに調整する
  - _Requirements: 4.4, 6.5_

- [x] 2. コンポーネントのライトテーマ対応と見出し再構成
- [x] 2.1 (P) Header のハードコードされたダーク背景色をライトテーマに対応させる
  - sticky ヘッダーの背景色（現在ハードコードされた rgba 値）をライトテーマ値に変更する
  - ナビゲーションリンクがデフォルト状態で背景に対して 3:1 以上のコントラストを持つこと
  - _Requirements: 3.4_

- [x] 2.2 (P) 全セクションの見出し HTML を番号＋タイトルの2行構成に移行する
  - Experience, Skills, Certifications, Talks, Others の5コンポーネントで、`<span>01 / EXPERIENCE</span>` 形式を `<span className="section-prefix">01</span><h2 className="section-title">EXPERIENCE</h2>` 形式に変更する
  - 各セクション番号とタイトルが正しく対応していること（01〜05）
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 2.3 本文テキストのフォントサイズと行間を要件準拠に修正する
  - Experience のプロジェクト項目テキストを 1rem / line-height 1.7 に修正する
  - Certifications の資格テキストを 1rem / line-height 1.7 に修正する
  - Talks の登壇タイトルテキストを 1rem / line-height 1.5 に修正する
  - Others の活動説明テキストを 1rem に修正する（line-height は 1.7 のまま）
  - 本文テキストがデスクトップで 1rem（16px）以上で表示されること
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 2.4 (P) コンポーネント内のハードコードカラー値をライトテーマ対応に修正する
  - Others.tsx の hover 時カラー（`#fff`）をライトテーマに合うダーク値に変更する
  - Profile.tsx の radial-gradient カラーがライト背景で自然に見えることを確認し、必要なら調整する
  - _Requirements: 6.5_

- [x] 3. ビルド検証と視覚確認
  - TypeScript ビルド（`npm run build`）が成功すること
  - ローカルサーバーで全セクションがライトテーマで正しく表示されること
  - コントラスト比が WCAG AA 基準を満たしていることを目視確認する
  - _Requirements: 1.1, 1.2, 2.1, 3.1, 5.1, 6.5_
