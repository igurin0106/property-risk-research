import { UrbanPlanningInfo } from '@/types/property';
import { AllMunicipalityZoning } from '@/all-municipality-zoning';

// 市区町村単位の用途地域データベース（全国対応版・456市区町村）
const municipalityDatabase: Record<string, UrbanPlanningInfo> = AllMunicipalityZoning;

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
