import ComparisonPageContent from '@/components/ComparisonPageContent';

export default function CompareSpllitoPage() {
  return (
    <ComparisonPageContent
      competitorName="Spllito"
      eyebrow="Ongoing tracking vs one-off splits"
      heroSubtitle="Spllito is great for occasional one-off splits with no signup. The Hisaab is built for ongoing groups — flatmates, trips, couples, office crews — with UPI-native settle and a friends-view-via-link flow."
      competitorCard={{
        name: 'Spllito',
        price: '₹0',
        period: '/free, no signup',
        bullets: [
          { ok: true, text: 'No signup at all' },
          { ok: true, text: 'Great for one-off bill splits' },
          { ok: false, text: 'No persistent groups' },
          { ok: false, text: 'No UPI integration' },
          { ok: false, text: 'No native mobile app' },
        ],
      }}
      hisaabCard={{
        badge: 'BEST FOR ONGOING',
        bullets: [
          'Persistent groups with running balances',
          'UPI-native one-tap settle',
          'Native iOS + Android, full offline',
          'Friends view via link, no signup',
          '5.0 ★ across 32 reviews',
        ],
      }}
      pricingFootnote="Both free. Verified May 2026."
      comparisonData={[
        {
          category: 'Use Case',
          features: [
            { feature: 'One-off split', competitor: 'Yes (best at this)', hisaab: 'Yes', hisaabWins: false },
            { feature: 'Ongoing group tracking', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Persistent group history', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'Friction',
          features: [
            { feature: 'Primary user signup', competitor: 'No', hisaab: 'Yes (for sync)', hisaabWins: false },
            { feature: 'Friends signup', competitor: 'No', hisaab: 'No (link share)', hisaabWins: false },
            { feature: 'Native app install', competitor: 'No', hisaab: 'Yes (iOS + Android)', hisaabWins: false },
            { feature: 'Works offline', competitor: 'Limited', hisaab: 'Yes', hisaabWins: true },
          ],
        },
        {
          category: 'India Context',
          features: [
            { feature: 'UPI integration', competitor: 'No', hisaab: 'Yes', hisaabWins: true },
            { feature: 'Made for India', competitor: 'Global', hisaab: 'Yes', hisaabWins: true },
            { feature: 'INR-first', competitor: 'Multi-currency', hisaab: 'Yes', hisaabWins: true },
          ],
        },
      ]}
      whereCompetitorWins={[
        { title: 'Zero-signup, zero-install', desc: 'For a literal one-time bill split with people you may never split with again, Spllito is the lower-friction choice. No app, no account, just a URL.' },
      ]}
      faqs={[
        { question: 'What is Spllito?', answer: 'Spllito is a web-based bill splitter that requires no signup, designed for occasional one-off splits.' },
        { question: 'Does The Hisaab require signup like Splitwise?', answer: 'Only the primary user signs up so expenses sync across devices. Friends view via link with no signup.' },
        { question: 'When should I use Spllito vs The Hisaab?', answer: 'Use Spllito for a single bill split. Use The Hisaab for ongoing groups with running balances, history, and UPI settle.' },
        { question: 'Is Spllito India-focused?', answer: 'Spllito is global. The Hisaab is UPI-native, INR-first, designed around Indian rent groups and trip crews.' },
      ]}
      relatedLinks={[
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'Splitkaro Alternative', href: '/splitkaro-alternative' },
        { label: 'vs Spliit', href: '/compare/spliit' },
        { label: 'For Trips', href: '/for/trips' },
      ]}
      footerHeading="Made for groups that last."
      footerSubheading="Persistent groups, UPI settle, full offline. Free forever."
    />
  );
}
