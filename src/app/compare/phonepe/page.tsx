import ComparisonPageContent from '@/components/ComparisonPageContent';

export default function ComparePhonePePage() {
  return (
    <ComparisonPageContent
      competitorName="PhonePe"
      eyebrow="Tracker vs UPI app"
      heroSubtitle="PhonePe is India's largest UPI app — perfect for paying. The Hisaab is built for tracking. Use both: track shared expenses in Hisaab, settle via PhonePe in one tap."
      competitorCard={{
        name: 'PhonePe',
        price: '₹0',
        period: '/free',
        bullets: [
          { ok: true, text: 'India\'s largest UPI app' },
          { ok: true, text: 'Basic group split flow' },
          { ok: false, text: 'Not built for ongoing tracking' },
          { ok: false, text: 'No unequal/multiple-payer splits' },
          { ok: false, text: 'No offline expense logging' },
        ],
      }}
      hisaabCard={{
        badge: 'BEST WITH PHONEPE',
        bullets: [
          'Built for ongoing group tracking',
          'Unequal splits, multiple payers',
          'Full offline-first logging',
          'One-tap settle via PhonePe',
          'Group balance view at a glance',
        ],
      }}
      pricingFootnote="Both free. Verified May 2026."
      comparisonData={[
        {
          category: 'Use Case',
          features: [
            { feature: 'Designed for', competitor: 'UPI payments', hisaab: 'Group expense tracking', hisaabWins: true },
            { feature: 'Quick one-off split', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Trip / rent / monthly tracking', competitor: 'Limited', hisaab: 'Built for it', hisaabWins: true },
          ],
        },
        {
          category: 'Splitting',
          features: [
            { feature: 'Equal splits', competitor: 'Yes', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Unequal/custom splits', competitor: 'Limited', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Multiple payers per expense', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Smart settlement', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'Reliability',
          features: [
            { feature: 'Works offline', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Friends sign up', competitor: 'PhonePe needed', hisaab: 'No (link share)', hisaabWins: true },
            { feature: 'Settles via PhonePe', competitor: 'Native', hisaab: 'One-tap deep link', hisaabWins: false },
          ],
        },
      ]}
      whereCompetitorWins={[
        {
          title: 'It is the UPI rail',
          desc: 'PhonePe moves the money. Hisaab tells you what to pay and to whom. They complement each other; PhonePe is irreplaceable for the actual transfer.',
        },
        {
          title: 'Already on every Indian phone',
          desc: 'PhonePe has hundreds of millions of users. The Hisaab is one extra install. Worth it if you split more than two bills a month.',
        },
      ]}
      faqs={[
        { question: 'Can PhonePe split bills with friends?', answer: 'PhonePe supports basic group payments, but it is built for the payment moment — not ongoing tracking across multiple groups, multiple payers, and unequal splits over time.' },
        { question: 'Why use The Hisaab alongside PhonePe?', answer: 'The Hisaab tracks who paid, who owes, and how to settle. PhonePe is the rail. Use Hisaab to manage the math; tap settle and PhonePe opens with the amount pre-filled.' },
        { question: 'Does The Hisaab open PhonePe to settle?', answer: 'Yes. The Hisaab generates a UPI deep link that opens PhonePe (or GPay or Paytm) with the exact amount pre-filled.' },
        { question: 'Is PhonePe-style group payment enough for flatmates?', answer: 'For a one-off split, yes. For monthly rent + WiFi + groceries + Swiggy across 3 flatmates, no — you need running balance tracking that lets you settle in one move at month-end.' },
      ]}
      relatedLinks={[
        { label: 'vs Google Pay', href: '/compare/google-pay' },
        { label: 'vs Paytm', href: '/compare/paytm' },
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'For Roommates', href: '/for/roommates' },
      ]}
      footerHeading="Track in Hisaab. Pay via PhonePe."
      footerSubheading="Free, offline-first, opens PhonePe with one tap. The Indian group expense workflow done right."
    />
  );
}
