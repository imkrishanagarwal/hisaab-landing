import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { softwareApplicationSchema, createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is Hisaab really a free Splitwise alternative?', answer: 'Yes. Hisaab is 100% free with no ads, no paywalls, and no hidden fees. Every feature — unlimited groups, unequal splits, multiple payers, offline mode — is available to all users for free, forever.' },
  { question: 'Can I switch from Splitwise to Hisaab?', answer: 'Yes! Simply download Hisaab and start adding your groups and expenses. Hisaab works independently and you can start using it alongside or instead of Splitwise right away.' },
  { question: 'Does Hisaab have a daily expense limit like Splitwise?', answer: 'No. Unlike Splitwise which limits free users to 3 expenses per day, Hisaab has no limits whatsoever. Add as many expenses as you want, anytime.' },
  { question: 'Does Hisaab show ads like Splitwise free?', answer: 'No. Hisaab has zero ads. No banner ads, no video ads, no unskippable ads. Ever.' },
  { question: 'Does Hisaab work offline?', answer: 'Yes. Hisaab works fully offline — add expenses, create groups, view balances without internet. Everything syncs automatically when you reconnect.' },
  { question: 'Is Hisaab available on both Android and iOS?', answer: 'Yes. Hisaab is available as a free download on both the Google Play Store (Android) and the Apple App Store (iOS).' },
];

export const metadata: Metadata = {
  title: 'Best Free Splitwise Alternative 2026',
  description:
    'Looking for a free Splitwise alternative? Hisaab offers unlimited groups, unequal splits, offline mode, and no ads — 100% free forever. Made for India. Download on Android & iOS.',
  alternates: {
    canonical: 'https://thehisaab.com/splitwise-alternative',
  },
  openGraph: {
    title: 'Best Free Splitwise Alternative - Hisaab',
    description:
      'Everything Splitwise charges for, completely free. Unlimited groups, unequal splits, works offline, no ads. Made for India.',
    url: 'https://thehisaab.com/splitwise-alternative',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Hisaab - Free Splitwise Alternative' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Free Splitwise Alternative - Hisaab',
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
