import { ZodError } from 'zod';

export function getZodErrorMessage(error: ZodError): string {
  const flattened = error.flatten();
  const firstFieldErrors = Object.values(flattened.fieldErrors) as (string[] | undefined)[];
  const fieldError = firstFieldErrors[0]?.[0];
  return fieldError || 'バリデーションエラーが発生しました';
}
