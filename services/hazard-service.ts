import { HazardInfo } from '@/types/property';

export async function fetchHazardInfo(latitude: number, longitude: number): Promise<HazardInfo> {
  try {
    return await fetchHazardInfoFromAPI(latitude, longitude);
  } catch {
    return getDefaultHazardInfo();
  }
}

async function fetchHazardInfoFromAPI(latitude: number, longitude: number): Promise<HazardInfo> {
  const hazardInfo: HazardInfo = {};

  const [flood, landslide, tsunami, highTide] = await Promise.allSettled([
    fetchFloodInfo(latitude, longitude),
    fetchLandslideInfo(latitude, longitude),
    fetchTsunamiInfo(latitude, longitude),
    fetchHighTideInfo(latitude, longitude),
  ]);

  if (flood.status === 'fulfilled') {
    hazardInfo.flood = flood.value;
  }
  if (landslide.status === 'fulfilled') {
    hazardInfo.landslide = landslide.value;
  }
  if (tsunami.status === 'fulfilled') {
    hazardInfo.tsunami = tsunami.value;
  }
  if (highTide.status === 'fulfilled') {
    hazardInfo.highTide = highTide.value;
  }

  return hazardInfo;
}

async function fetchFloodInfo(
  latitude: number,
  longitude: number
): Promise<{ riskLevel: string; depth?: number; estimatedWaterDepth?: string } | undefined> {
  try {
    const response = await fetch(
      `https://disaportal.gsi.go.jp/api/v1/features/flood?lat=${latitude}&lng=${longitude}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();

    return {
      riskLevel: data.riskLevel || '未取得',
      depth: data.depth,
      estimatedWaterDepth: data.estimatedWaterDepth,
    };
  } catch {
    return undefined;
  }
}

async function fetchLandslideInfo(
  latitude: number,
  longitude: number
): Promise<{ riskLevel: string } | undefined> {
  try {
    const response = await fetch(
      `https://disaportal.gsi.go.jp/api/v1/features/landslide?lat=${latitude}&lng=${longitude}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();

    return {
      riskLevel: data.riskLevel || '未取得',
    };
  } catch {
    return undefined;
  }
}

async function fetchTsunamiInfo(
  latitude: number,
  longitude: number
): Promise<{ riskLevel: string; estimatedWaterDepth?: string } | undefined> {
  try {
    const response = await fetch(
      `https://disaportal.gsi.go.jp/api/v1/features/tsunami?lat=${latitude}&lng=${longitude}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();

    return {
      riskLevel: data.riskLevel || '未取得',
      estimatedWaterDepth: data.estimatedWaterDepth,
    };
  } catch {
    return undefined;
  }
}

async function fetchHighTideInfo(
  latitude: number,
  longitude: number
): Promise<{ riskLevel: string; estimatedWaterDepth?: string } | undefined> {
  try {
    const response = await fetch(
      `https://disaportal.gsi.go.jp/api/v1/features/hightide?lat=${latitude}&lng=${longitude}`,
      {
        headers: { Accept: 'application/json' },
      }
    );

    if (!response.ok) {
      return undefined;
    }

    const data = await response.json();

    return {
      riskLevel: data.riskLevel || '未取得',
      estimatedWaterDepth: data.estimatedWaterDepth,
    };
  } catch {
    return undefined;
  }
}

function getDefaultHazardInfo(): HazardInfo {
  return {
    flood: { riskLevel: '未取得' },
    landslide: { riskLevel: '未取得' },
    tsunami: { riskLevel: '未取得' },
    highTide: { riskLevel: '未取得' },
  };
}
