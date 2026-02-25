'use client';

import { useEffect } from 'react';
import { initMixpanel, trackEvent } from '@/lib/mixpanel';

export default function MixpanelProvider() {
  useEffect(() => {
    initMixpanel();

    trackEvent('page_visit', {
      user_agent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen_resolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer,
      page_url: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return null;
}
