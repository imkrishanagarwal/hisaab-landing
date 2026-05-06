import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How is The Hisaab different from Spliit?', answer: 'Spliit is an open-source web/PWA tool you can self-host. The Hisaab is a polished native iOS and Android app built specifically for India: UPI-native, offline-first, with one-tap settle to GPay/PhonePe/Paytm. If you want self-hosted privacy, Spliit. If you want the best Indian-context experience, The Hisaab.' },
  { question: 'Is Spliit free?', answer: 'Yes, Spliit is free and open-source. The Hisaab is also free, with no premium tier and no ads — for both the official Spliit instance and self-hosted ones.' },
  { question: 'Does Spliit have UPI integration?', answer: 'No, Spliit is built as a globally-neutral expense splitter. The Hisaab is UPI-native — settle balances opens GPay, PhonePe, or Paytm with the amount pre-filled.' },
  { question: 'Should I self-host Spliit or use The Hisaab?', answer: 'If self-hosting and privacy/control are your top priorities, Spliit is the right call. If you want the simplest path to splitting bills with Indian friends — UPI-native, native mobile apps, no DevOps — The Hisaab is the better fit.' },
  { question: 'Do my friends need to sign up to use The Hisaab?', answer: 'No. The primary user signs up so expenses sync across devices. Friends view shared groups via a link, no app install.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Spliit - Native India App vs Open-Source PWA',
  description:
    'Compare The Hisaab and Spliit. Spliit is open-source and self-hostable; The Hisaab is a native iOS/Android app built for India with UPI-native settle.',
  alternates: { canonical: 'https://thehisaab.com/compare/spliit' },
  openGraph: {
    title: 'The Hisaab vs Spliit',
    description: 'Native India-first app vs open-source PWA. Detailed comparison.',
    url: 'https://thehisaab.com/compare/spliit',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Spliit' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs Spliit',
    description: 'Open-source PWA vs UPI-native native app for India.',
    images: ['/image.jpg'],
  },
};

export default function CompareSpliitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/spliit' },
          { name: 'The Hisaab vs Spliit', url: 'https://thehisaab.com/compare/spliit' },
        ])}
      />
      {children}
    </>
  );
}
