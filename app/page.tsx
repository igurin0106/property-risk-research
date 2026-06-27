import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Property Risk Research</h1>
        <p className="text-center text-gray-600 mb-8">
          物件住所を入力するだけで、用途地域・法令制限・ハザード情報を一元管理
        </p>

        <div className="space-y-4">
          <Link
            href="/search"
            className="block w-full px-4 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            物件調査を開始
          </Link>

          <Link
            href="/reports"
            className="block w-full px-4 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors text-center"
          >
            調査履歴を確認
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            不動産仕入れ担当者向けSaaS
          </p>
        </div>
      </div>
    </div>
  );
}
