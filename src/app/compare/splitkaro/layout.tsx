import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is The Hisaab better than Splitkaro?', answer: 'For users who want every feature without paying, yes. Splitkaro charges ₹450/year for expense search, UPI splitting, custom categories, and group analytics. The Hisaab is 100% free with no premium tier — every feature available to everyone, forever.' },
  { question: 'Does The Hisaab have Swiggy/Zomato auto-fetch like Splitkaro?', answer: 'Not yet. Splitkaro does this genuinely well, and we will be honest about it. We are building toward a similar capability in a privacy-first way. Today, Hisaab focuses on being the simplest, fastest free split-bill app for India — and your friends do not need to sign up to view shared groups.' },
  { question: 'Why is Splitkaro Premium ₹450 per year?', answer: 'Splitkaro gates expense search, UPI splitting, group analytics, custom categories, and priority reminders behind a ₹37.5/month (billed annually) premium plan. The Hisaab gives you all of these for free.' },
  { question: 'Do my friends need to sign up to use The Hisaab?', answer: 'No. Only the primary user signs up so expenses sync across devices. Friends in your group view shared balances via a link — no app install, no account. Splitkaro requires every group member to sign up.' },
  { question: 'Can I import my Splitkaro groups into The Hisaab?', answer: 'Direct Splitkaro import is on our roadmap. Today, you can recreate your groups in Hisaab in under a minute — most users tell us their active groups are 3 to 5 friends, which takes under 30 seconds.' },
  { question: 'Is The Hisaab made in India like Splitkaro?', answer: 'Yes. The Hisaab is built by an Indian indie team for Indian users — UPI-native, INR-first, designed around how Indians actually share money: rent groups, flatmates, trip crews.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Splitkaro - Free vs ₹450/yr Premium (2026)',
  description:
    'Compare The Hisaab and Splitkaro. Splitkaro charges ₹450/year for expense search, UPI splitting, and analytics. The Hisaab gives you every feature free. No signup for friends.',
  alternates: { canonical: 'https://thehisaab.com/compare/splitkaro' },
  openGraph: {
    title: 'The Hisaab vs Splitkaro - Free vs Premium',
    description:
      'Detailed comparison: The Hisaab is 100% free; Splitkaro charges ₹450/year. See which features are gated and which are free.',
    url: 'https://thehisaab.com/compare/splitkaro',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Splitkaro' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs Splitkaro - Honest Comparison',
    description: 'Splitkaro charges ₹450/year for what The Hisaab gives free.',
    images: ['/image.jpg'],
  },
};

export default function CompareSplitkaroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/splitkaro' },
          { name: 'The Hisaab vs Splitkaro', url: 'https://thehisaab.com/compare/splitkaro' },
        ])}
      />
      {children}
    </>
  );
}
