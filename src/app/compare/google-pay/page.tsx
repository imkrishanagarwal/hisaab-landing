import ComparisonPageContent from '@/components/ComparisonPageContent';

export default function CompareGooglePayPage() {
  return (
    <ComparisonPageContent
      competitorName="Google Pay"
      eyebrow="Tracker vs payment app"
      heroSubtitle="Google Pay is excellent for paying. The Hisaab is built for tracking. The smart move for Indian groups: use both. Track in Hisaab; settle via GPay in one tap."
      competitorCard={{
        name: 'Google Pay',
        price: '₹0',
        period: '/free',
        bullets: [
          { ok: true, text: 'Best-in-class UPI payment' },
          { ok: true, text: 'Built-in basic bill split' },
          { ok: false, text: 'Not built for ongoing expense tracking' },
          { ok: false, text: 'Limited group balance views' },
          { ok: false, text: 'No offline expense logging' },
        ],
      }}
      hisaabCard={{
        badge: 'BEST WITH GPAY',
        bullets: [
          'Built end-to-end for tracking',
          'Unequal splits, multiple payers',
          'Full offline-first',
          'One-tap settle via GPay/PhonePe/Paytm',
          'Group balance view at a glance',
        ],
      }}
      pricingFootnote="Both free. Verified May 2026."
      comparisonData={[
        {
          category: 'Use Case',
          features: [
            { feature: 'Designed for', competitor: 'UPI payments', hisaab: 'Group expense tracking', hisaabWins: true },
            { feature: 'Quick one-off bill split', competitor: 'Yes (basic)', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Ongoing trip / rent tracking', competitor: 'Limited', hisaab: 'Built for it', hisaabWins: true },
            { feature: 'Multiple groups in parallel', competitor: 'Limited', hisaab: 'Unlimited', hisaabWins: true },
          ],
        },
        {
          category: 'Splitting',
          features: [
            { feature: 'Equal splits', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Unequal/custom splits', competitor: 'Limited', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Multiple payers per expense', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Smart settlement (minimize transfers)', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'Reliability',
          features: [
            { feature: 'Works offline', competitor: 'Limited', hisaab: 'Full offline', hisaabWins: true },
            { feature: 'Friends need to sign up', competitor: 'GPay account required', hisaab: 'No (link share)', hisaabWins: true },
            { feature: 'Settles via UPI', competitor: 'Yes (native)', hisaab: 'Yes (deep links to any UPI app)', hisaabWins: false },
          ],
        },
      ]}
      whereCompetitorWins={[
        {
          title: 'It is the UPI app itself',
          desc: 'Google Pay is the rail. We open GPay to actually move money. For the payment step, GPay (or PhonePe or Paytm) is irreplaceable. The Hisaab is the layer above it that tracks what to pay and to whom.',
        },
        {
          title: 'Already installed',
          desc: 'Most Indians already have GPay. The Hisaab is one extra install. The reason to do it is the dedicated tracking — but if your group splits two bills a year, GPay alone is fine.',
        },
      ]}
      faqs={[
        {
          question: 'Can I split bills using Google Pay?',
          answer:
            'Yes — Google Pay has a built-in group expense feature where you can create groups and split costs. It works for one-off splits but is not designed for ongoing tracking across multiple groups.',
        },
        {
          question: 'Why use The Hisaab if Google Pay can split bills?',
          answer:
            'GPay is excellent for paying. The Hisaab is built for tracking. If you have a trip with 8 people across 30 expenses, or flatmate rent and groceries every month, you need a dedicated tracker.',
        },
        {
          question: 'Does The Hisaab integrate with Google Pay?',
          answer:
            'Yes. When you settle up in The Hisaab, we open GPay (or PhonePe or Paytm) with the exact amount pre-filled. Best of both: tracking in Hisaab, instant payment via UPI.',
        },
        {
          question: 'Which is better for trip expenses with friends?',
          answer:
            'For a trip with multiple expenses, dynamic splits, and offline situations, The Hisaab is built for this. GPay is best for the final settle-up payment itself.',
        },
      ]}
      relatedLinks={[
        { label: 'vs PhonePe', href: '/compare/phonepe' },
        { label: 'vs Paytm', href: '/compare/paytm' },
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'For Trips', href: '/for/trips' },
      ]}
      footerHeading="Track in Hisaab. Pay via GPay."
      footerSubheading="Free, offline-first, settles via UPI. The combo Indian groups deserve."
    />
  );
}
