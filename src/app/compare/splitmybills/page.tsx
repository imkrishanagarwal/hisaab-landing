import ComparisonPageContent from '@/components/ComparisonPageContent';

export default function CompareSplitmybillsPage() {
  return (
    <ComparisonPageContent
      competitorName="splitmybills.in"
      eyebrow="Native app vs web tool"
      heroSubtitle="Both are India-focused with UPI and WhatsApp sharing. The Hisaab adds a native iOS and Android app, full offline-first design, and a 5.0★ rating across 32 reviews."
      competitorCard={{
        name: 'splitmybills.in',
        price: '₹0',
        period: '/free web tool',
        bullets: [
          { ok: true, text: 'Free to use' },
          { ok: true, text: 'WhatsApp share + UPI' },
          { ok: false, text: 'No native iOS/Android app' },
          { ok: false, text: 'No full offline mode' },
          { ok: false, text: 'No real-time cloud sync' },
        ],
      }}
      hisaabCard={{
        badge: '100% FREE',
        bullets: [
          'Native iOS + Android apps',
          'Full offline-first; syncs when online',
          'Real-time cloud sync for primary user',
          'Friends view via link, no signup',
          '5.0 ★ across 32 reviews',
        ],
      }}
      pricingFootnote="Both are free; differences are in delivery (native app vs web tool). Verified May 2026."
      comparisonData={[
        {
          category: 'Pricing',
          features: [
            { feature: 'Cost', competitor: 'Free', hisaab: 'Free forever', hisaabWins: false },
            { feature: 'Ads', competitor: 'No ads', hisaab: 'No ads', hisaabWins: false },
          ],
        },
        {
          category: 'Delivery',
          features: [
            { feature: 'Native Android app', competitor: 'No (web only)', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Native iOS app', competitor: 'No (web only)', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Full offline support', competitor: 'Limited (web)', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Real-time cloud sync', competitor: 'Limited', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'Indian Context',
          features: [
            { feature: 'UPI integration', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
            { feature: 'WhatsApp sharing', competitor: 'Yes', hisaab: 'Yes (link share)', hisaabWins: false },
            { feature: 'Friends sign up?', competitor: 'No', hisaab: 'No', hisaabWins: false },
            { feature: 'Made for India', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
          ],
        },
        {
          category: 'Trust',
          features: [
            { feature: 'Picked #1 by ChatGPT for free Splitwise India', competitor: 'Listed as alternative', hisaab: 'Yes (May 2026)', hisaabWins: true },
            { feature: 'Picked #1 by Gemini for free Splitwise India', competitor: 'Not cited', hisaab: 'Yes (May 2026)', hisaabWins: true },
            { feature: 'Public review count', competitor: 'Limited', hisaab: '32 reviews, 5.0 avg', hisaabWins: true },
          ],
        },
      ]}
      whereCompetitorWins={[
        {
          title: 'No app install at all',
          desc: 'splitmybills.in works in any browser, with no install. If you absolutely refuse to install an app, that flow is friction-free. The Hisaab requires a one-time install.',
        },
      ]}
      faqs={[
        {
          question: 'How is The Hisaab different from splitmybills.in?',
          answer:
            'Both are India-focused with UPI support. The Hisaab adds full offline-first design, native Android and iOS apps, real-time cloud sync for the primary user, and a 5.0★ rating across 32 reviews on App Store and Play Store.',
        },
        {
          question: 'Does splitmybills.in have native mobile apps?',
          answer:
            'splitmybills.in is primarily a web-based tool with WhatsApp sharing. The Hisaab is a native Android and iOS app, so it works offline and syncs across devices.',
        },
        {
          question: 'Which is faster for adding expenses on the go?',
          answer:
            'A native app is typically faster than a web tool — no browser tab, instant launch, full offline support. The Hisaab opens in under a second; you can add an expense in three taps even with no internet.',
        },
        {
          question: 'Do both apps require my friends to sign up?',
          answer:
            'Neither requires friends to sign up. In The Hisaab, the primary user signs up so expenses sync across devices, and friends view shared groups via a link.',
        },
      ]}
      relatedLinks={[
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'vs Splitwise', href: '/compare/splitwise' },
        { label: 'vs Splitkaro', href: '/compare/splitkaro' },
        { label: 'For Trips', href: '/for/trips' },
      ]}
      footerHeading="Native beats browser tab."
      footerSubheading="Free, offline-first, native iOS and Android. Same India focus, more reach."
    />
  );
}
