'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { RiskSummary } from '@/components/reports/RiskSummary';
import { HazardInfo, UrbanPlanningInfo } from '@/types/property';

function SearchResultsContent({ address, lat, lng }: { address: string; lat: number; lng: number }) {
  const [urbanPlanning, setUrbanPlanning] = useState<UrbanPlanningInfo>({ zoneType: '読み込み中...' });
  const [hazards, setHazards] = useState<HazardInfo>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [urbanRes, hazardRes] = await Promise.all([
          fetch('/api/urban-planning', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ latitude: lat, longitude: lng }),
          }),
          fetch('/api/hazards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ latitude: lat, longitude: lng }),
          }),
        ]);

        if (urbanRes.ok) {
          const data = await urbanRes.json();
          if (data.success) {
            setUrbanPlanning(data.data);
          }
        }

        if (hazardRes.ok) {
          const data = await hazardRes.json();
          if (data.success) {
            setHazards(data.data);
          }
        }
      } catch {
        setError('情報取得に失敗しました');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [lat, lng]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-gray-600">情報を取得中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
        {error}
      </div>
    );
  }

  return <RiskSummary address={address} urbanPlanning={urbanPlanning} hazards={hazards} />;
}

export default function SearchResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ address?: string; lat?: string; lng?: string }>;
}) {
  const [params, setParams] = useState<{ address?: string; lat?: string; lng?: string }>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    searchParams.then((p) => {
      setParams(p);
      setIsReady(true);
    });
  }, [searchParams]);

  if (!isReady) {
    return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">読み込み中...</div>;
  }

  const address = params.address || '不明な住所';
  const lat = parseFloat(params.lat || '0');
  const lng = parseFloat(params.lng || '0');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="mb-8">
          <Link href="/search" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4">
            ← 別の住所を検索
          </Link>
        </header>

        <Suspense fallback={<div className="text-center">読み込み中...</div>}>
          <SearchResultsContent address={address} lat={lat} lng={lng} />
        </Suspense>

        <div className="mt-8 flex gap-4">
          <button className="flex-1 px-4 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            このレポートを保存
          </button>
          <button className="flex-1 px-4 py-3 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors">
            PDF出力
          </button>
        </div>
      </div>
    </div>
  );
}
