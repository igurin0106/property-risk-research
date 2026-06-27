import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { generatePDFContent } from '@/services/pdf-service';

const PDFRequestSchema = z.object({
  address: z.string().min(1),
  latitude: z.number(),
  longitude: z.number(),
  urbanPlanning: z.record(z.unknown()).optional(),
  hazards: z.record(z.unknown()).optional(),
  createdAt: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = PDFRequestSchema.parse(body);

    const pdfContent = generatePDFContent({
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt) : undefined,
    });

    const filename = `property-report-${Date.now()}.txt`;

    return new NextResponse(pdfContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: error.errors[0].message,
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
          message: 'PDF生成に失敗しました',
        },
      },
      { status: 500 }
    );
  }
}
