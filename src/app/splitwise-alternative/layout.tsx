import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { softwareApplicationSchema, createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is The Hisaab really a free Splitwise alternative?', answer: 'Yes. The Hisaab is 100% free with no ads, no paywalls, and no hidden fees. Every feature — unlimited groups, unequal splits, multiple payers, offline mode — is available to all users for free, forever.' },
  { question: 'Do my friends have to sign up to use The Hisaab?', answer: 'No. Only the person tracking expenses signs up — this lets your data sync across devices and back up safely. Friends in your group can view balances and what they owe via a shared link, with no app install and no signup. This is one of our biggest wins over Splitwise, where every group member has to create an account.' },
  { question: 'Can I switch from Splitwise to The Hisaab?', answer: 'Yes! Simply download The Hisaab and start adding your groups and expenses. The Hisaab works independently and you can start using it alongside or instead of Splitwise right away.' },
  { question: 'Does The Hisaab have a daily expense limit like Splitwise?', answer: 'No. Unlike Splitwise which limits free users to 3 expenses per day, The Hisaab has no limits whatsoever. Add as many expenses as you want, anytime.' },
  { question: 'Does The Hisaab show ads like Splitwise free?', answer: 'No. The Hisaab has zero ads. No banner ads, no video ads, no unskippable ads. Ever.' },
  { question: 'Does The Hisaab work offline?', answer: 'Yes. The Hisaab works fully offline — add expenses, create groups, view balances without internet. Everything syncs automatically when you reconnect.' },
  { question: 'Is The Hisaab available on both Android and iOS?', answer: 'Yes. The Hisaab is available as a free download on both the Google Play Store (Android) and the Apple App Store (iOS).' },
];

export const metadata: Metadata = {
  title: 'Best Free Splitwise Alternative 2026',
  description:
    'Free Splitwise alternative for India. UPI-native, works offline, no ads. Friends view shared groups via link — no signup needed. For rent, flatmates, trips.',
  alternates: {
    canonical: 'https://thehisaab.com/splitwise-alternative',
  },
  openGraph: {
    title: 'Best Free Splitwise Alternative - The Hisaab',
    description:
      'Everything Splitwise charges for, completely free. Unlimited groups, unequal splits, works offline, no ads. Made for India.',
    url: 'https://thehisaab.com/splitwise-alternative',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab - Free Splitwise Alternative' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Free Splitwise Alternative - The Hisaab',
    description: 'Everything Splitwise charges for, completely free. No ads. Works offline. Made for India.',
    images: ['/image.jpg'],
  },
};

export default function SplitwiseAlternativeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Splitwise Alternative', url: 'https://thehisaab.com/splitwise-alternative' },
        ])}
      />
      {children}
    </>
  );
}
