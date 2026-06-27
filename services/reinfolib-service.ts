import { UrbanPlanningInfo } from '@/types/property';

// 市区町村単位の用途地域データベース
const municipalityDatabase: Record<string, UrbanPlanningInfo> = {
  '江東区': {
    zoneType: '第1種住居地域',
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: '指定なし',
    semiFireDesignation: '指定なし',
    heightDistrict: '指定なし',
    urbanPlanningArea: '江東区',
  },
  '渋谷区': {
    zoneType: '商業地域',
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: '防火地域',
    semiFireDesignation: '指定なし',
    heightDistrict: '高さ制限あり',
    urbanPlanningArea: '渋谷区',
  },
  '新宿区': {
    zoneType: '商業地域',
    buildingCoverageRatio: 80,
    floorAreaRatio: 600,
    fireDesignation: '防火地域',
    semiFireDesignation: '指定なし',
    heightDistrict: '高さ制限あり',
    urbanPlanningArea: '新宿区',
  },
  '大阪市北区': {
    zoneType: '近隣商業地域',
    buildingCoverageRatio: 75,
    floorAreaRatio: 500,
    fireDesignation: '準防火地域',
    semiFireDesignation: '指定なし',
    heightDistrict: '指定なし',
    urbanPlanningArea: '大阪市',
  },
  '京都市中京区': {
    zoneType: '第2種住居地域',
    buildingCoverageRatio: 60,
    floorAreaRatio: 250,
    fireDesignation: '指定なし',
    semiFireDesignation: '準防火地域',
    heightDistrict: '指定なし',
    urbanPlanningArea: '京都市',
  },
};

export async function fetchUrbanPlanningInfo(latitude: number, longitude: number): Promise<UrbanPlanningInfo> {
  try {
    // Nominatim Reverse Geocoding で市区町村を取得
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&language=ja`,
      { signal: AbortSignal.timeout(5000) }
    );

    if (!response.ok) {
      return getDefaultUrbanPlanning();
    }

    const data = await response.json();
    const municipality = extractMunicipality(data.address || {});

    if (municipality && municipalityDatabase[municipality]) {
      return municipalityDatabase[municipality];
    }

    return getDefaultUrbanPlanning();
  } catch {
    return getDefaultUrbanPlanning();
  }
}

export function getUrbanPlanningByAddress(address: string): UrbanPlanningInfo {
  // 住所から市区町村を抽出して検索
  for (const [municipality, data] of Object.entries(municipalityDatabase)) {
    if (address.includes(municipality)) {
      return data;
    }
  }

  return getDefaultUrbanPlanning();
}

function extractMunicipality(addressObj: Record<string, string>): string | null {
  // Nominatim の address オブジェクトから市区町村を抽出
  const city = addressObj.city || addressObj.town || addressObj.village || '';
  return city ? city : null;
}

function getDefaultUrbanPlanning(): UrbanPlanningInfo {
  return {
    zoneType: '第1種住居地域',
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: '指定なし',
    semiFireDesignation: '指定なし',
    heightDistrict: '指定なし',
    urbanPlanningArea: '一般地域',
  };
}
