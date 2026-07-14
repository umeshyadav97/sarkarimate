'use client';

import { useCallback, useEffect, useState } from 'react';

export function useBookmark(key: string) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(window.localStorage.getItem(key) === 'true');
  }, [key]);

  const toggleBookmark = useCallback(() => {
    setIsBookmarked((currentValue) => {
      const nextValue = !currentValue;
      window.localStorage.setItem(key, String(nextValue));
      return nextValue;
    });
  }, [key]);

  return { isBookmarked, toggleBookmark };
}
