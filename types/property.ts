export interface UrbanPlanningInfo {
  zoneType?: string;
  buildingCoverageRatio?: number;
  floorAreaRatio?: number;
  fireDesignation?: string;
  semiFireDesignation?: string;
  heightDistrict?: string;
  urbanPlanningArea?: string;
}

export interface HazardInfo {
  flood?: {
    riskLevel: string;
    depth?: number;
    estimatedWaterDepth?: string;
  };
  landslide?: {
    riskLevel: string;
  };
  tsunami?: {
    riskLevel: string;
    estimatedWaterDepth?: string;
  };
  highTide?: {
    riskLevel: string;
    estimatedWaterDepth?: string;
  };
}

export interface EvacuationSite {
  name: string;
  latitude: number;
  longitude: number;
  distance?: number;
}

export interface PropertySearchResult {
  address: string;
  latitude: number;
  longitude: number;
  urbanPlanning: UrbanPlanningInfo;
  hazards: HazardInfo;
  evacuationSites: EvacuationSite[];
}
