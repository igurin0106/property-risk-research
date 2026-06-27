'use server';

import { connectDB } from '@/lib/mongodb';
import PropertyReport from '@/models/PropertyReport';
import { PropertyReportCreateSchema } from '@/lib/validators';

export async function createPropertyReport(
  input: unknown,
  userId: string
) {
  try {
    const validated = PropertyReportCreateSchema.parse(input);

    await connectDB();

    const report = new PropertyReport({
      address: validated.address,
      latitude: validated.latitude,
      longitude: validated.longitude,
      urbanPlanning: validated.urbanPlanning || {},
      hazards: validated.hazards || {},
      evacuationSites: validated.evacuationSites || [],
      salesMemo: validated.salesMemo,
      acquisitionMemo: validated.acquisitionMemo,
      createdBy: userId,
    });

    await report.save();

    return {
      success: true,
      data: {
        id: report._id.toString(),
        address: report.address,
      },
    };
  } catch {
    return {
      success: false,
      error: {
        code: 'CREATE_FAILED',
        message: 'レポート保存に失敗しました',
      },
    };
  }
}
