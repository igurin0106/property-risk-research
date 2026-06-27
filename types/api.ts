export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface GeocodingResponse {
  address: string;
  latitude: number;
  longitude: number;
}

export interface UrbanPlanningResponse {
  zoneType?: string;
  buildingCoverageRatio?: number;
  floorAreaRatio?: number;
  fireDesignation?: string;
  semiFireDesignation?: string;
  heightDistrict?: string;
  urbanPlanningArea?: string;
}

export interface HazardResponse {
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

export interface EvacuationSiteResponse {
  name: string;
  latitude: number;
  longitude: number;
  distance?: number;
}
