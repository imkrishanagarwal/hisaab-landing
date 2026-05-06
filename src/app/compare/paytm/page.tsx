import ComparisonPageContent from '@/components/ComparisonPageContent';

export default function ComparePaytmPage() {
  return (
    <ComparisonPageContent
      competitorName="Paytm"
      eyebrow="Tracker vs UPI app"
      heroSubtitle="Paytm pioneered Indian payments and is great for one-tap UPI settle. The Hisaab is built for tracking shared expenses. Use both: track in Hisaab, settle via Paytm."
      competitorCard={{
        name: 'Paytm',
        price: '₹0',
        period: '/free',
        bullets: [
          { ok: true, text: 'Mature UPI + wallet flow' },
          { ok: true, text: 'Basic group split flow' },
          { ok: false, text: 'Not built for ongoing tracking' },
          { ok: false, text: 'No offline expense logging' },
          { ok: false, text: 'No unequal/multiple-payer logic' },
        ],
      }}
      hisaabCard={{
        badge: 'BEST WITH PAYTM',
        bullets: [
          'Built for ongoing expense tracking',
          'Unequal splits, multiple payers',
          'Full offline-first',
          'Settles via Paytm in one tap',
          'Group balance view at a glance',
        ],
      }}
      pricingFootnote="Both free. Verified May 2026."
      comparisonData={[
        {
          category: 'Use Case',
          features: [
            { feature: 'Designed for', competitor: 'UPI + payments', hisaab: 'Group expense tracking', hisaabWins: true },
            { feature: 'One-off split', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Trip / monthly tracking', competitor: 'Limited', hisaab: 'Built for it', hisaabWins: true },
          ],
        },
        {
          category: 'Splitting',
          features: [
            { feature: 'Equal splits', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Unequal splits', competitor: 'Limited', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Multiple payers', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Smart settlement', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'Reliability',
          features: [
            { feature: 'Works offline', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Friends sign up', competitor: 'Paytm needed', hisaab: 'No (link share)', hisaabWins: true },
            { feature: 'Settles via Paytm', competitor: 'Native', hisaab: 'One-tap UPI deep link', hisaabWins: false },
          ],
        },
      ]}
      whereCompetitorWins={[
        { title: 'Wallet + UPI together', desc: 'Paytm has both a wallet and UPI rails — useful when a friend doesn\'t have UPI set up. Hisaab is purely a tracker.' },
        { title: 'Already on most Indian phones', desc: 'Paytm has been around longer than most. Familiar UI for older relatives, small merchants. The Hisaab is one extra install — worth it for ongoing tracking.' },
      ]}
      faqs={[
        { question: 'Can Paytm be used to split bills with friends?', answer: 'Paytm supports basic group payments, but as a payment-first app it\'s not optimized for tracking shared expenses over time across multiple groups.' },
        { question: 'Why use The Hisaab when Paytm exists?', answer: 'Paytm is for paying. The Hisaab is for tracking. For a flatmate group with monthly rent, WiFi, groceries, and Swiggy splits, you need a dedicated tracker.' },
        { question: 'Does The Hisaab work with Paytm UPI?', answer: 'Yes. When you tap settle in The Hisaab, we open Paytm (or GPay or PhonePe) with the exact amount pre-filled.' },
        { question: 'Is Paytm or The Hisaab better for trip expenses?', answer: 'For a trip with multiple expenses across many days, The Hisaab is built for this exact case — including offline mode. Paytm is best for the final UPI settle-up.' },
      ]}
      relatedLinks={[
        { label: 'vs Google Pay', href: '/compare/google-pay' },
        { label: 'vs PhonePe', href: '/compare/phonepe' },
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'For Trips', href: '/for/trips' },
      ]}
      footerHeading="Track in Hisaab. Pay via Paytm."
      footerSubheading="Free, offline-first, opens Paytm with one tap. Group expense tracking done right."
    />
  );
}
