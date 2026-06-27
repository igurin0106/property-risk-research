import { HazardInfo, UrbanPlanningInfo } from '@/types/property';

interface RiskSummaryProps {
  address: string;
  urbanPlanning: UrbanPlanningInfo;
  hazards: HazardInfo;
}

function getRiskLevel(hazardInfo: HazardInfo): 'high' | 'medium' | 'low' {
  const risks = [
    hazardInfo.flood?.riskLevel,
    hazardInfo.landslide?.riskLevel,
    hazardInfo.tsunami?.riskLevel,
    hazardInfo.highTide?.riskLevel,
  ];

  const hasHighRisk = risks.some((r) => r?.includes('高'));
  const hasMediumRisk = risks.some((r) => r?.includes('中'));

  if (hasHighRisk) return 'high';
  if (hasMediumRisk) return 'medium';
  return 'low';
}

function getRiskColor(level: 'high' | 'medium' | 'low'): string {
  switch (level) {
    case 'high':
      return 'bg-red-50 border-red-200';
    case 'medium':
      return 'bg-yellow-50 border-yellow-200';
    case 'low':
      return 'bg-green-50 border-green-200';
  }
}

function getRiskBadgeColor(level: 'high' | 'medium' | 'low'): string {
  switch (level) {
    case 'high':
      return 'bg-red-500 text-white';
    case 'medium':
      return 'bg-yellow-500 text-white';
    case 'low':
      return 'bg-green-500 text-white';
  }
}

function getRiskLabel(level: 'high' | 'medium' | 'low'): string {
  switch (level) {
    case 'high':
      return '高リスク';
    case 'medium':
      return '中程度';
    case 'low':
      return '低リスク';
  }
}

export function RiskSummary({ address, urbanPlanning, hazards }: RiskSummaryProps) {
  const riskLevel = getRiskLevel(hazards);

  return (
    <div className={`border rounded-lg p-6 ${getRiskColor(riskLevel)}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{address}</h2>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskBadgeColor(riskLevel)}`}>
            {getRiskLabel(riskLevel)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white bg-opacity-60 rounded p-4">
          <p className="text-sm text-gray-600 mb-1">用途地域</p>
          <p className="text-lg font-semibold text-gray-900">{urbanPlanning.zoneType || '未取得'}</p>
        </div>

        {urbanPlanning.buildingCoverageRatio && (
          <div className="bg-white bg-opacity-60 rounded p-4">
            <p className="text-sm text-gray-600 mb-1">建ぺい率</p>
            <p className="text-lg font-semibold text-gray-900">{urbanPlanning.buildingCoverageRatio}%</p>
          </div>
        )}

        {urbanPlanning.floorAreaRatio && (
          <div className="bg-white bg-opacity-60 rounded p-4">
            <p className="text-sm text-gray-600 mb-1">容積率</p>
            <p className="text-lg font-semibold text-gray-900">{urbanPlanning.floorAreaRatio}%</p>
          </div>
        )}

        {urbanPlanning.fireDesignation && (
          <div className="bg-white bg-opacity-60 rounded p-4">
            <p className="text-sm text-gray-600 mb-1">防火地域</p>
            <p className="text-lg font-semibold text-gray-900">{urbanPlanning.fireDesignation}</p>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="bg-white bg-opacity-60 rounded p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">ハザード情報</p>
          <ul className="space-y-2">
            {hazards.flood && (
              <li className="flex justify-between text-sm">
                <span className="text-gray-700">洪水浸水想定:</span>
                <span className="font-medium text-gray-900">{hazards.flood.riskLevel}</span>
              </li>
            )}
            {hazards.landslide && (
              <li className="flex justify-between text-sm">
                <span className="text-gray-700">土砂災害警戒区域:</span>
                <span className="font-medium text-gray-900">{hazards.landslide.riskLevel}</span>
              </li>
            )}
            {hazards.tsunami && (
              <li className="flex justify-between text-sm">
                <span className="text-gray-700">津波浸水想定:</span>
                <span className="font-medium text-gray-900">{hazards.tsunami.riskLevel}</span>
              </li>
            )}
            {hazards.highTide && (
              <li className="flex justify-between text-sm">
                <span className="text-gray-700">高潮浸水想定:</span>
                <span className="font-medium text-gray-900">{hazards.highTide.riskLevel}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
