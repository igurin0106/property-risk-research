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
  urbanPlanning: z.any().optional(),
  hazards: z.any().optional(),
  evacuationSites: z.any().optional(),
  salesMemo: z.string().optional(),
  acquisitionMemo: z.string().optional(),
});

export type PropertyReportCreateInput = z.infer<typeof PropertyReportCreateSchema>;
