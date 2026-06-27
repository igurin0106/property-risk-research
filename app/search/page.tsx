'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SearchAddressForm } from '@/components/forms/SearchAddressForm';

export default function SearchPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string>('');

  async function handleSearch(address: string) {
    setIsSearching(true);
    setError('');
    try {
      const response = await fetch('/api/geocode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error?.message || '住所の検索に失敗しました');
        return;
      }

      if (data.success) {
        window.location.href = `/reports/search?lat=${data.data.latitude}&lng=${data.data.longitude}&address=${encodeURIComponent(address)}`;
      }
    } catch (error) {
      setError('通信エラーが発生しました');
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4">
            ← 戻る
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">物件調査</h1>
          <p className="text-gray-600">住所を入力して物件の調査情報を取得</p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              ⚠️ {error}
            </div>
          )}
          <SearchAddressForm onSearch={handleSearch} isLoading={isSearching} />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">利用方法</h2>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white font-medium flex-shrink-0">
                  1
                </span>
                <span>物件の住所を入力</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white font-medium flex-shrink-0">
                  2
                </span>
                <span>用途地域、建ぺい率、ハザード情報が自動取得されます</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white font-medium flex-shrink-0">
                  3
                </span>
                <span>仕入れメモを追加して調査結果を保存</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
