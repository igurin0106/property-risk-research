import { z } from 'zod';

export const AddressSearchSchema = z.object({
  address: z
    .string()
    .min(5, '住所は5文字以上で入力してください')
    .max(200, '住所は200文字以内で入力してください'),
});

export type AddressSearchInput = z.infer<typeof AddressSearchSchema>;

export const PropertyReportCreateSchema = z.object({
  address: z.string().min(1),
  latitude: z.number(),
  longitude: z.number(),
  urbanPlanning: z.record(z.unknown()).optional(),
  hazards: z.record(z.unknown()).optional(),
  evacuationSites: z.array(z.record(z.unknown())).optional(),
  salesMemo: z.string().optional(),
  acquisitionMemo: z.string().optional(),
});

export type PropertyReportCreateInput = z.infer<typeof PropertyReportCreateSchema>;
