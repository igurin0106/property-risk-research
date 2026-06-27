import { HazardInfo, UrbanPlanningInfo } from '@/types/property';

export interface PDFReportData {
  address: string;
  latitude: number;
  longitude: number;
  urbanPlanning?: UrbanPlanningInfo;
  hazards?: HazardInfo;
  createdAt?: Date;
}

export function generatePDFContent(data: PDFReportData): string {
  const createdAt = data.createdAt ? new Date(data.createdAt).toLocaleDateString('ja-JP') : new Date().toLocaleDateString('ja-JP');

  const hazardEntries = data.hazards
    ? Object.entries(data.hazards)
        .filter(([, value]) => value)
        .map(([key, value]) => {
          const labels: Record<string, string> = {
            flood: '洪水浸水想定',
            landslide: '土砂災害警戒区域',
            tsunami: '津波浸水想定',
            highTide: '高潮浸水想定',
          };
          return `${labels[key]}: ${typeof value === 'object' && value !== null && 'riskLevel' in value ? (value as Record<string, unknown>).riskLevel : 'N/A'}`;
        })
        .join('\n')
    : '';

  const up = data.urbanPlanning || {};

  return `
Property Risk Research - 物件調査レポート
=====================================

住所: ${data.address}
緯度: ${data.latitude}
経度: ${data.longitude}
調査日: ${createdAt}

【用途地域情報】
用途地域: ${up.zoneType || 'N/A'}
建ぺい率: ${up.buildingCoverageRatio ? `${up.buildingCoverageRatio}%` : 'N/A'}
容積率: ${up.floorAreaRatio ? `${up.floorAreaRatio}%` : 'N/A'}
防火地域: ${up.fireDesignation || 'N/A'}
準防火地域: ${up.semiFireDesignation || 'N/A'}
高度地区: ${up.heightDistrict || 'N/A'}

【ハザード情報】
${hazardEntries}

出典: 国土交通省 不動産情報ライブラリ, 国土交通省 ハザードマップポータル
`;
}
