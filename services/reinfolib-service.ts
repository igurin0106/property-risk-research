import { z } from 'zod';
import { UrbanPlanningInfo } from '@/types/property';

const ReinfolibResponseSchema = z.object({
  features: z
    .array(
      z.object({
        properties: z.any().optional(),
      })
    )
    .optional(),
});

export async function fetchUrbanPlanningInfo(latitude: number, longitude: number): Promise<UrbanPlanningInfo> {
  const apiKey = process.env.REINFOLIB_API_KEY;

  if (!apiKey) {
    return {
      zoneType: '未取得',
    };
  }

  try {
    const response = await fetch(
      `https://api.reinfolib.mlit.go.jp/features?geometry=${longitude},${latitude}&geometry_reference=EPSG:4326&key=${apiKey}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      return {
        zoneType: '取得失敗',
      };
    }

    const data = await response.json();
    const validated = ReinfolibResponseSchema.parse(data);

    if (!validated.features || validated.features.length === 0) {
      return {
        zoneType: '情報なし',
      };
    }

    const properties = validated.features[0]?.properties || {};

    return {
      zoneType: extractProperty(properties, 'zoneType'),
      buildingCoverageRatio: extractNumberProperty(properties, 'buildingCoverageRatio'),
      floorAreaRatio: extractNumberProperty(properties, 'floorAreaRatio'),
      fireDesignation: extractProperty(properties, 'fireDesignation'),
      semiFireDesignation: extractProperty(properties, 'semiFireDesignation'),
      heightDistrict: extractProperty(properties, 'heightDistrict'),
      urbanPlanningArea: extractProperty(properties, 'urbanPlanningArea'),
    };
  } catch {
    return {
      zoneType: '取得失敗',
    };
  }
}

function extractProperty(properties: Record<string, unknown>, key: string): string | undefined {
  const value = properties[key];
  return typeof value === 'string' ? value : undefined;
}

function extractNumberProperty(properties: Record<string, unknown>, key: string): number | undefined {
  const value = properties[key];
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}
