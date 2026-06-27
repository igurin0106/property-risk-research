# Property Risk Research

## サービス概要

Property Risk Researchは、不動産会社の仕入れ担当者向けに、物件住所から用途地域、法令上の制限、ハザードマップ情報、避難所、仕入れ判断メモを確認・保存・PDF出力できるWebアプリケーションです。

## 主な機能

- 住所検索
- 緯度経度取得
- 用途地域情報取得
- 建ぺい率・容積率表示
- 防火・準防火地域表示
- 高度地区表示
- 洪水・土砂災害・津波・高潮リスク表示
- 避難所情報表示
- 仕入れ判断メモ保存
- 調査レポートPDF出力
- 調査履歴管理

## 技術スタック

- Next.js
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

## セットアップ方法

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-org/property-risk-research.git
cd property-risk-research
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 環境変数を設定

```bash
cp .env.example .env.local
```

`.env.local` に以下の環境変数を設定してください：

```env
# MongoDB Atlas
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/property-risk-research

# NextAuth.js
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# 不動産情報ライブラリAPI
REINFOLIB_API_KEY=your-api-key

# ジオコーディングAPI
GEOCODING_API_BASE_URL=https://nominatim.openstreetmap.org

# 公開用URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 にアクセスしてください。

## MongoDB接続方法

### 1. MongoDB Atlasアカウント作成

https://www.mongodb.com/cloud/atlas に登録してください。

### 2. クラスタ作成

MongoDB Atlas で新しいクラスタを作成し、接続文字列を取得してください。

### 3. 接続文字列を設定

`.env.local` に接続文字列を設定します：

```
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster.mongodb.net/property-risk-research
```

接続処理は `lib/mongodb.ts` で管理されます。

## GitHub運用方法

### 開発ブランチの作成

```bash
git checkout -b feature/issue-001-initial-setup
```

### コミット

Conventional Commits を使用してコミットしてください：

```bash
git add .
git commit -m "feat: add property address search"
git push origin feature/issue-001-initial-setup
```

### Pull Request

GitHub でプルリクエストを作成し、レビュー後に main ブランチへマージしてください。

## Vercelデプロイ方法

### 1. GitHubリポジトリをVercelに接続

1. https://vercel.com にログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択

### 2. 環境変数を設定

Vercel プロジェクト設定で以下の環境変数を登録してください：

- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `REINFOLIB_API_KEY`
- `GEOCODING_API_BASE_URL`
- `NEXT_PUBLIC_APP_URL`

### 3. デプロイ設定

- Production ブランチ: `main`
- Preview: Pull Request 自動デプロイ

### 4. デプロイ実行

main ブランチへのマージで自動的に Production デプロイが実行されます。

## ディレクトリ構成

```
property-risk-research/
├── app/              # ルーティングとページ
├── actions/          # Server Actions
├── components/       # 汎用UI
├── features/         # 機能単位のUIとロジック
├── hooks/            # React hooks
├── lib/              # 共通設定
├── models/           # MongoDBモデル
├── services/         # 外部API接続
├── types/            # 型定義
├── utils/            # 純粋関数
├── styles/           # スタイル
├── public/           # 静的ファイル
├── scripts/          # スクリプト
├── docs/             # 設計ドキュメント
└── CLAUDE.md         # 開発ガイドライン
```

## 開発ルール

### TypeScript

- strict mode 有効
- any 禁止
- 型定義は必須

### ESLint

```bash
npm run lint
```

エラーは必ず 0 にしてください。

### 型チェック

```bash
npm run typecheck
```

### ビルド

```bash
npm run build
```

本番ビルドが成功することをリリース条件とします。

### テスト

```bash
npm run test
```

## コマンド一覧

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start

# ESLint実行
npm run lint

# 型チェック
npm run typecheck

# テスト実行
npm run test
```

## トラブルシューティング

### MongoDB接続エラー

接続文字列が正しいか確認してください。IP ホワイトリストにあなたの IP アドレスが登録されているか確認してください。

### 環境変数が読み込まれない

`.env.local` ファイルが正しく設定されているか確認してください。開発サーバーを再起動してください。

### Vercel デプロイエラー

- 環境変数が全て設定されているか確認
- ビルドコマンドが成功するか確認
- MongoDB 接続文字列が正しいか確認

## 今後の拡張

- 重要事項説明書チェックリスト連携
- 役所調査テンプレート出力
- 物件収支シミュレーション
- 仕入れ案件CRM連携
- 地価公示・取引価格情報連携
- Slack通知
- 複数拠点管理
- 権限管理
- CSVエクスポート

## ライセンス

Internal Use Only

## サポート

問題が発生した場合は、GitHub Issues で報告してください。
