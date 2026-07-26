'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const clarityProjectId = 'xsfx1ko5mf';

export function ClarityAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Clarity.init(clarityProjectId);
    }
  }, []);

  return null;
}
