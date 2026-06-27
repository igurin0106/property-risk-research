# CLAUDE.md

## プロジェクト概要

Property Risk Researchは、不動産会社が物件仕入れ前に住所を入力するだけで、用途地域、法令上の制限、ハザードマップ情報、避難所、仕入れ判断メモを一元管理できるWebアプリケーションである。

本プロジェクトは、仕入れ担当者が役所調査・都市計画調査・災害リスク確認にかけている時間を削減し、仕入れ可否判断の品質を高めることを目的とする。

## 技術スタック

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- MapLibre GL JS
- MongoDB Atlas
- Mongoose
- NextAuth.js
- Zod
- @react-pdf/renderer
- Vercel
- GitHub

## コーディングルール

- TypeScript strict modeを使用する
- anyは禁止
- unknownを使う場合は必ず型ガードを実装する
- 関数は単一責務にする
- UIコンポーネントとビジネスロジックを分離する
- APIレスポンスは必ずZodで検証する
- 外部API呼び出しはservices配下に集約する
- DB操作はmodelsまたはactions経由で行う
- TODOコメントは禁止
- ダミーデータ実装は禁止
- console.logは禁止
- 本番品質で実装する

## 命名規則

- コンポーネント: PascalCase
- hooks: useXxx
- Server Actions: 動詞 + 名詞
- API service: xxxService
- 型定義: PascalCase
- MongoDB Model: PascalCase
- ファイル名: kebab-case
- 定数: UPPER_SNAKE_CASE

## ディレクトリルール

- app: ルーティングとページ
- components: 汎用UI
- features: 機能単位のUIとロジック
- actions: Server Actions
- services: 外部API接続
- models: MongoDBモデル
- lib: 共通設定
- hooks: React hooks
- types: 型定義
- utils: 純粋関数
- docs: 設計ドキュメント

## UIルール

- 業務利用を前提に、情報密度は高めにする
- 重要リスクは色で明確に表示する
  - 赤: 高リスク
  - 黄: 注意
  - 緑: 問題なし
  - グレー: 未取得
- 住所検索結果はカード形式で表示する
- レポート画面は印刷・PDF化を意識する
- モバイルよりもPC業務利用を優先する

## Tailwind CSS利用ルール

- Tailwind CSSを必ず使用する
- inline styleは禁止
- classNameは可読性を保つ
- 複雑なUIはコンポーネント化する
- 色はtheme拡張で管理する
- レスポンシブはsm/md/lg/xlを適切に使う

## API実装ルール

- Route Handlerを使用する
- APIレスポンス形式は統一する
- 成功時: `{ success: true, data: T }`
- 失敗時: `{ success: false, error: { code: string, message: string } }`
- 外部API失敗時はリトライを実装する
- レート制限を考慮する
- APIキーは環境変数で管理する
- クライアントにAPIキーを露出しない

## MongoDB設計ルール

- MongoDB Atlasを使用する
- Mongooseでスキーマを定義する
- 住所、緯度経度、都市計画情報、ハザード情報、調査メモを保存する
- createdAt / updatedAtを必ず付与する
- 検索用にaddressとcreatedByにindexを設定する
- 位置情報には2dsphere indexを設定する

## Git運用ルール

- mainブランチは常にデプロイ可能にする
- 開発はfeatureブランチで行う
- Pull Request単位でレビュー可能な粒度にする
- 1コミット1目的を守る
- Conventional Commitsを使用する

## テスト方針

- 型チェックを必ず通す
- ESLintエラー0
- API serviceは単体テスト対象
- risk-scoreなどの重要ロジックはテスト必須
- レポート保存処理は統合テスト対象
- 本番ビルドが成功することをリリース条件にする

## エラーハンドリング

- ユーザー向けエラー文言は日本語にする
- 外部API失敗時は「取得できませんでした」と表示し、画面全体を落とさない
- 保存失敗時は再試行可能にする
- 想定外エラーは共通エラーレスポンスに変換する
- APIキー未設定時は起動時に検知する

## コミットルール

Conventional Commitsを使用する。例:
- feat: add property address search
- fix: handle geocoding api failure
- refactor: extract hazard service
- docs: update README
- test: add risk score tests
- chore: configure eslint

## Claude Codeへの注意事項

- 最初に必ずこのCLAUDE.mdを読むこと
- README.mdも完成形で作成すること
- Issue順に実装すること
- コミット計画に従うこと
- TODOは禁止
- ダミー実装は禁止
- ESLintエラー0にすること
- TypeScriptエラー0にすること
- Vercelにデプロイ可能な状態にすること
- MongoDB Atlasに対応すること
- Tailwind CSSを必ず使用すること
- コンポーネント分割を徹底すること
- 不動産仕入れ業務で実用できる品質を優先すること
