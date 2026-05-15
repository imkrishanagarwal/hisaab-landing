export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab';
export const APP_STORE_URL = 'https://apps.apple.com/in/app/the-hisaab/id6759067047';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function getUtmParams(search?: string): UtmParams {
  const raw = search ?? (typeof window === 'undefined' ? '' : window.location.search);
  if (!raw) return {};
  const params = new URLSearchParams(raw);
  const utm: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export function buildPlayStoreUrl(utm: UtmParams = {}): string {
  const keys = Object.keys(utm);
  if (keys.length === 0) return PLAY_STORE_URL;
  const referrer = new URLSearchParams(utm as Record<string, string>).toString();
  return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`;
}

export function buildAppStoreUrl(utm: UtmParams = {}): string {
  if (!utm.utm_source && !utm.utm_campaign) return APP_STORE_URL;
  // Apple uses 'ct' (campaign token, max 100 chars) for attribution.
  const ct = [utm.utm_source, utm.utm_campaign].filter(Boolean).join('_').slice(0, 100);
  return `${APP_STORE_URL}?ct=${encodeURIComponent(ct)}`;
}
