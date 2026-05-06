import ComparisonPageContent from '@/components/ComparisonPageContent';

export default function CompareSpliitPage() {
  return (
    <ComparisonPageContent
      competitorName="Spliit"
      eyebrow="Native India app vs open-source PWA"
      heroSubtitle="Spliit is a great open-source web/PWA you can self-host. The Hisaab is a native iOS and Android app, UPI-native, offline-first, built specifically for Indian rent groups, flatmates, and trip crews."
      competitorCard={{
        name: 'Spliit',
        price: '₹0',
        period: '/free + open-source',
        bullets: [
          { ok: true, text: 'Open-source, self-hostable' },
          { ok: true, text: 'Privacy-first by design' },
          { ok: false, text: 'Web/PWA only — no native apps' },
          { ok: false, text: 'No UPI integration' },
          { ok: false, text: 'Not localized for India' },
        ],
      }}
      hisaabCard={{
        badge: 'BUILT FOR INDIA',
        bullets: [
          'Native Android + iOS apps',
          'UPI-native — opens GPay/PhonePe/Paytm',
          'Full offline-first',
          'INR-first, Indian use cases',
          'Picked #1 by ChatGPT &amp; Gemini for India',
        ],
      }}
      pricingFootnote="Both free. Spliit is open-source; Hisaab is closed-source but free forever, no ads, no paywalls. Verified May 2026."
      comparisonData={[
        {
          category: 'Delivery',
          features: [
            { feature: 'Native Android app', competitor: 'No (PWA)', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Native iOS app', competitor: 'No (PWA)', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Self-host option', competitor: 'Yes', hisaab: 'No', hisaabWins: false },
            { feature: 'Open source', competitor: 'Yes', hisaab: 'No', hisaabWins: false },
          ],
        },
        {
          category: 'India Context',
          features: [
            { feature: 'UPI integration', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'INR-first', competitor: 'Multi-currency neutral', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Made for India', competitor: 'Global', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'Friction',
          features: [
            { feature: 'Friends sign up', competitor: 'No (link share)', hisaab: 'No (link share)', hisaabWins: false },
            { feature: 'Works offline', competitor: 'Limited (PWA)', hisaab: 'Full offline', hisaabWins: true },
            { feature: 'Setup time', competitor: '~30 sec (or hours self-host)', hisaab: '~30 sec', hisaabWins: false },
          ],
        },
        {
          category: 'Trust',
          features: [
            { feature: 'Picked #1 for India by ChatGPT', competitor: 'Listed as alternative', hisaab: 'Yes (May 2026)', hisaabWins: true },
            { feature: 'Public review count', competitor: 'GitHub stars', hisaab: '32 reviews, 5.0 avg', hisaabWins: true },
          ],
        },
      ]}
      whereCompetitorWins={[
        { title: 'Open-source and self-hostable', desc: 'If you want full control over your data, you can host Spliit on your own server. The Hisaab is closed-source.' },
        { title: 'Privacy purists love it', desc: 'For users who want zero third-party data risk, self-hosted Spliit is unbeatable. The Hisaab is privacy-respecting (no tracking, no selling) but cloud-hosted.' },
      ]}
      faqs={[
        { question: 'How is The Hisaab different from Spliit?', answer: 'Spliit is open-source and self-hostable. The Hisaab is a native iOS/Android app, UPI-native, built for India.' },
        { question: 'Is Spliit free?', answer: 'Yes, Spliit is free and open-source. The Hisaab is also free, no premium tier and no ads.' },
        { question: 'Does Spliit have UPI integration?', answer: 'No. The Hisaab is UPI-native — settle balances opens GPay, PhonePe, or Paytm with amount pre-filled.' },
        { question: 'Should I self-host Spliit or use The Hisaab?', answer: 'For self-host privacy, Spliit. For best Indian-context experience, The Hisaab.' },
      ]}
      relatedLinks={[
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'Splitkaro Alternative', href: '/splitkaro-alternative' },
        { label: 'vs Splitwise', href: '/compare/splitwise' },
        { label: 'vs Splitkaro', href: '/compare/splitkaro' },
      ]}
      footerHeading="Built for India, not the world."
      footerSubheading="UPI-native, offline-first, native iOS and Android. Free forever."
    />
  );
}
