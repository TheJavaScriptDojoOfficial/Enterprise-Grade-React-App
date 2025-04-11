import { useState, useEffect } from 'react';

/**
 * Returns a debounced version of the input value after the specified delay.
 *
 * @param value - The input value to debounce.
 * @param delay - Delay in milliseconds.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
