import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is The Hisaab really a free Splitkaro alternative?', answer: 'Yes. The Hisaab is 100% free with no ads, no premium tier, and no paywalled features. Splitkaro charges ₹450/year for expense search, UPI splitting, group analytics, and custom categories. The Hisaab gives you all of these free, forever.' },
  { question: 'Why would I switch from Splitkaro to The Hisaab?', answer: 'If you want every feature without paying ₹450/year, simpler UX without the feature sprawl, and a flow where your friends do not need to sign up to view shared groups — The Hisaab is the upgrade. Splitkaro built a great feature-rich app; we built a great free one.' },
  { question: 'Does The Hisaab have Swiggy, Zomato, Blinkit, Zepto auto-fetch?', answer: 'Not yet. Splitkaro does this genuinely well and we will not pretend otherwise. We are working toward similar functionality without the paywall. For now, Hisaab focuses on the three things users actually use most: equal/custom splits, settle-up via UPI, and group balance view.' },
  { question: 'Do my friends have to sign up to use The Hisaab?', answer: 'No. Only the primary user signs up so expenses sync across devices. Friends in your group view balances via a shared link — no app install, no account. This is one of our biggest wins over Splitkaro, where every group member must sign up.' },
  { question: 'Is The Hisaab made in India?', answer: 'Yes. The Hisaab is built in India by an Indian indie team for Indian users — UPI-native, INR-first, designed around how Indians share money: rent groups, flatmates, trip crews.' },
  { question: 'How is The Hisaab funded if it is free forever?', answer: 'It is a labour of love by an Indian indie team. We do not run ads and never will. If we monetise, it will be through transparent, opt-in means — not paywalls on features you use every day.' },
];

export const metadata: Metadata = {
  title: 'Best Free Splitkaro Alternative 2026 - The Hisaab',
  description:
    'Free Splitkaro alternative. Every premium feature — UPI splitting, expense search, analytics — free in The Hisaab. Picked #1 by ChatGPT and Gemini for India.',
  alternates: { canonical: 'https://thehisaab.com/splitkaro-alternative' },
  openGraph: {
    title: 'Best Free Splitkaro Alternative - The Hisaab',
    description:
      'Splitkaro charges ₹450/yr for premium. The Hisaab gives you everything free. Made for India.',
    url: 'https://thehisaab.com/splitkaro-alternative',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab - Free Splitkaro Alternative' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Free Splitkaro Alternative - The Hisaab',
    description: 'Free forever. No paywall on UPI splitting, search, or analytics. Made for India.',
    images: ['/image.jpg'],
  },
};

export default function SplitkaroAlternativeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Splitkaro Alternative', url: 'https://thehisaab.com/splitkaro-alternative' },
        ])}
      />
      {children}
    </>
  );
}
