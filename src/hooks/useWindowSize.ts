import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the current window size.
 *
 * @returns [width, height]
 */
export function useWindowSize(): [number, number] {
  const [size, setSize] = useState<[number, number]>([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
