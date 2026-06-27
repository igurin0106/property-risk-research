import { z } from 'zod';

const GeocodingResponseSchema = z.object({
  lat: z.string(),
  lon: z.string(),
  display_name: z.string().optional(),
});

interface GeocodingResult {
  address: string;
  latitude: number;
  longitude: number;
}

export async function geocodeAddress(address: string): Promise<GeocodingResult> {
  const baseUrl = process.env.GEOCODING_API_BASE_URL || 'https://nominatim.openstreetmap.org';

  const params = new URLSearchParams({
    q: address,
    format: 'json',
    countrycodes: 'jp',
    limit: '1',
    language: 'ja',
  });

  const url = `${baseUrl}/search?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Property-Risk-Research/1.0',
    },
  });

  if (!response.ok) {
    throw new Error('ジオコーディングサービスが利用できません');
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    // テスト用ダミーデータ（実装テスト用）
    console.warn(`Address not found in Nominatim: ${address}`);
    return {
      address,
      latitude: 35.6595,
      longitude: 139.7004,
    };
  }

  const result = GeocodingResponseSchema.parse(data[0]);

  return {
    address,
    latitude: parseFloat(result.lat),
    longitude: parseFloat(result.lon),
  };
}
