import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { fetchUrbanPlanningInfo, getUrbanPlanningByAddress } from '@/services/reinfolib-service';
import { getZodErrorMessage } from '@/lib/zod-error';

const UrbanPlanningRequestSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  address: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { latitude, longitude, address } = UrbanPlanningRequestSchema.parse(body);

    // 住所がある場合は住所から取得、ない場合は座標から取得
    const data = address ? getUrbanPlanningByAddress(address) : await fetchUrbanPlanningInfo(latitude, longitude);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: getZodErrorMessage(error),
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: '都市計画情報の取得に失敗しました',
        },
      },
      { status: 500 }
    );
  }
}
