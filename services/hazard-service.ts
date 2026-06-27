import { HazardInfo } from '@/types/property';

export async function fetchHazardInfo(latitude: number, longitude: number): Promise<HazardInfo> {
  // テスト用ダミーデータ（座標に基づいてバリエーション）
  // 本番環境では実際のハザードマップAPI呼び出しを実装

  // 座標をハッシュ化して、異なるデータを返す
  const hash = Math.abs(Math.floor(latitude * 1000 + longitude * 100)) % 4;

  const floodDepths = ['0.5m未満', '0.5～1m', '1～2m', '2～3m'];
  const landslideRisks = ['警戒区域外', '警戒区域内', '特別警戒区域内', '警戒区域外'];
  const tsunamiDepths = ['1m未満', '1～3m', '3m以上', '1m未満'];
  const highTideDepths = ['0.5m未満', '0.5～1m', '1m以上', '0.5m未満'];

  return {
    flood: {
      riskLevel: hash <= 1 ? '低い' : '中程度',
      estimatedWaterDepth: floodDepths[hash],
    },
    landslide: {
      riskLevel: landslideRisks[hash],
    },
    tsunami: {
      riskLevel: hash === 2 ? '高い' : '低い',
      estimatedWaterDepth: tsunamiDepths[hash],
    },
    highTide: {
      riskLevel: '低い',
      estimatedWaterDepth: highTideDepths[hash],
    },
  };
}
