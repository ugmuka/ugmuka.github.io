---
description: コミットメッセージは Conventional Commits 形式に従う
---

コミットを作成する際は必ず **Conventional Commits** 形式に従うこと。

## フォーマット

```
<type>: <subject>
```

- **type**（必須）: 変更の種類
- **subject**（必須）: 変更の要約（日本語可）。影響範囲が明確な場合は subject 内に含めてよい

## type 一覧

| type | 用途 |
|---|---|
| feat | 新機能追加 |
| fix | バグ修正 |
| docs | ドキュメントのみの変更 |
| chore | ビルドプロセスや補助ツールの変更（src変更なし） |
| refactor | バグ修正・機能追加を伴わないコード変更 |
| test | テストの追加・修正 |
| style | コードの意味に影響しない変更（空白、フォーマット等） |

## 例

- `feat: Snowflake接続設定を追加`
- `docs: dbt採用理由を更新（knowledge）`
- `fix: ADF パイプラインのタイムアウト設定を修正`
- `chore: .gitignore を更新`

## Claude がコミットする場合の追加ルール

Claude Code がコミットを作成する場合は、コミットメッセージの末尾に以下のトレーラーを**必ず**付与する：

```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

また、変更の意図・背景が一目でわかるよう、コミット本文（body）にユーザーからの指示内容を簡潔に記載する：

```
<type>: <subject>

ユーザー指示: <指示内容の要約（1〜2行）>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

### Claude コミットの例

```
docs: dbt採用理由を更新（knowledge）

ユーザー指示: dbt採用の背景にコスト比較情報を追記

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

これにより `git log` で Claude によるコミットかどうか、またその意図を識別できる。
