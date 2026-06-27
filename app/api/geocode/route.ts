import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { geocodeAddress } from '@/services/geocoding-service';
import { getZodErrorMessage } from '@/lib/zod-error';

const GeocodesRequestSchema = z.object({
  address: z.string().min(1, 'Address is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address } = GeocodesRequestSchema.parse(body);

    const result = await geocodeAddress(address);

    return NextResponse.json({
      success: true,
      data: result,
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

    if (error instanceof Error) {
      const message = error.message === 'Address not found' ? '住所が見つかりません' : '住所の検索に失敗しました';

      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'GEOCODING_ERROR',
            message,
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
          message: '予期しないエラーが発生しました',
        },
      },
      { status: 500 }
    );
  }
}
