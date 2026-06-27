import { UrbanPlanningInfo } from '@/types/property';

export async function fetchUrbanPlanningInfo(latitude: number, longitude: number): Promise<UrbanPlanningInfo> {
  try {
    // Overpass API を使用して OpenStreetMap から用途地域を取得
    const overpassQuery = `
      [bbox:${latitude - 0.01},${longitude - 0.01},${latitude + 0.01},${longitude + 0.01}];
      (
        way["landuse"~"residential|commercial|industrial|retail"];
        relation["landuse"~"residential|commercial|industrial|retail"];
      );
      out center 1;
    `;

    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: overpassQuery,
    });

    if (!response.ok) {
      return getDefaultUrbanPlanning();
    }

    const data = await response.json();
    const element = data.elements?.[0];

    if (!element) {
      return getDefaultUrbanPlanning();
    }

    const landuse = element.tags?.landuse || '';
    return parseUrbanPlanningFromLanduse(landuse);
  } catch {
    return getDefaultUrbanPlanning();
  }
}

function parseUrbanPlanningFromLanduse(landuse: string): UrbanPlanningInfo {
  switch (landuse) {
    case 'commercial':
      return {
        zoneType: '商業地域',
        buildingCoverageRatio: 80,
        floorAreaRatio: 600,
        fireDesignation: '防火地域',
        semiFireDesignation: '指定なし',
        heightDistrict: '高さ制限あり',
        urbanPlanningArea: '東京都市部',
      };
    case 'retail':
      return {
        zoneType: '近隣商業地域',
        buildingCoverageRatio: 70,
        floorAreaRatio: 400,
        fireDesignation: '準防火地域',
        semiFireDesignation: '指定なし',
        heightDistrict: '指定なし',
        urbanPlanningArea: '都市計画区域',
      };
    case 'industrial':
      return {
        zoneType: '工業地域',
        buildingCoverageRatio: 65,
        floorAreaRatio: 300,
        fireDesignation: '指定なし',
        semiFireDesignation: '準防火地域',
        heightDistrict: '指定なし',
        urbanPlanningArea: '工業地帯',
      };
    case 'residential':
    default:
      return {
        zoneType: '第1種住居地域',
        buildingCoverageRatio: 60,
        floorAreaRatio: 200,
        fireDesignation: '指定なし',
        semiFireDesignation: '指定なし',
        heightDistrict: '指定なし',
        urbanPlanningArea: '住宅地域',
      };
  }
}

function getDefaultUrbanPlanning(): UrbanPlanningInfo {
  return {
    zoneType: '情報取得中',
    buildingCoverageRatio: 60,
    floorAreaRatio: 200,
    fireDesignation: '未取得',
    semiFireDesignation: '未取得',
    heightDistrict: '未取得',
    urbanPlanningArea: '日本',
  };
}
