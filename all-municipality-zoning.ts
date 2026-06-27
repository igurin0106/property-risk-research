import { JapaneseMunicipalityZoning } from './japanese_zoning_data';
import { AdditionalMunicipalityZoning } from './additional_municipality_zoning';

// Type definition for urban planning info
export type UrbanPlanningInfo = {
  zoneType: string;
  buildingCoverageRatio: number;
  floorAreaRatio: number;
  fireDesignation: string;
  semiFireDesignation: string;
  heightDistrict: string;
  urbanPlanningArea: string;
};

// Normalize keys in additional data by removing prefecture prefixes
const normalizeKey = (key: string): string => {
  // Remove prefecture prefix patterns like "北海道", "東京都", etc.
  return key.replace(/^([ぁ-ん]{2,3}|[ァ-ヴー]{2,3})(県|道|府)/, '');
};

const normalizedAdditional: Record<string, UrbanPlanningInfo> = {};
for (const [key, value] of Object.entries(AdditionalMunicipalityZoning)) {
  const normalized = normalizeKey(key);
  normalizedAdditional[normalized] = value as UrbanPlanningInfo;
}

// Merge both data sources, with Japanese data taking precedence
export const ComprehensiveMunicipalityZoning: Record<string, UrbanPlanningInfo> = {
  ...normalizedAdditional,
  ...JapaneseMunicipalityZoning,
};

export const AllMunicipalityZoning: Record<string, UrbanPlanningInfo> = ComprehensiveMunicipalityZoning;
