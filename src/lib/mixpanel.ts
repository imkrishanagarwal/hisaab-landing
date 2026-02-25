import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = 'b8dbac77a69fd927db98d2d226937c0d';

let initialized = false;

export function initMixpanel() {
  if (initialized) return;
  mixpanel.init(MIXPANEL_TOKEN, {
    track_pageview: false,
    persistence: 'localStorage',
  });
  initialized = true;
}

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  mixpanel.track(name, properties);
}
