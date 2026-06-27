import Link from 'next/link';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4">
            ← 戻る
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">調査履歴</h1>
          <p className="text-gray-600">保存済みの物件調査レポート一覧</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-600">調査履歴はまだありません</p>
          <Link href="/search" className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            新規調査を開始
          </Link>
        </div>
      </div>
    </div>
  );
}
