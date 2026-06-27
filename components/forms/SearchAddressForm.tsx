'use client';

import { FormEvent, useState } from 'react';
import { AddressSearchSchema } from '@/lib/validators';
import { ZodError } from 'zod';
import { getZodErrorMessage } from '@/lib/zod-error';

interface SearchAddressFormProps {
  onSearch: (address: string) => Promise<void>;
  isLoading?: boolean;
}

export function SearchAddressForm({ onSearch, isLoading = false }: SearchAddressFormProps) {
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const validated = AddressSearchSchema.parse({ address });
      await onSearch(validated.address);
    } catch (err) {
      if (err instanceof ZodError) {
        setError(getZodErrorMessage(err));
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('検索に失敗しました。もう一度お試しください。');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
          物件住所
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setError('');
          }}
          placeholder="例: 東京都渋谷区神宮前1-1-1"
          disabled={isSubmitting || isLoading}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!address.trim() || isSubmitting || isLoading}
        className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting || isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            検索中...
          </>
        ) : (
          '検索'
        )}
      </button>
    </form>
  );
}
