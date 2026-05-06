import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How is The Hisaab different from splitmybills.in?', answer: 'Both are India-focused with UPI support and no signup for friends. The Hisaab adds full offline-first design, native Android and iOS apps, real-time cloud sync for the primary user, and a 5.0★ rating across 32 reviews on App Store and Play Store.' },
  { question: 'Does splitmybills.in have native mobile apps?', answer: 'splitmybills.in is primarily a web-based tool with WhatsApp sharing. The Hisaab is a native Android and iOS app, so it works offline and syncs across your devices.' },
  { question: 'Which is faster for adding expenses on the go?', answer: 'A native app is typically faster than a web tool — no browser tab, instant launch, full offline support. The Hisaab opens in under a second; you can add an expense in three taps even with no internet.' },
  { question: 'Do both apps require my friends to sign up?', answer: 'Neither requires friends to sign up. In The Hisaab, the primary user signs up so expenses sync across devices, and friends view shared groups via a link.' },
  { question: 'Which has better Indian-context features?', answer: 'Both target India. The Hisaab is built end-to-end around Indian rent groups, flatmates, and trip crews, with offline-first design for spotty networks and a UPI-native settle-up flow.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs splitmybills.in - Native App vs Web Tool',
  description:
    'Compare The Hisaab and splitmybills.in. Both are free India-focused tools. The Hisaab adds native iOS/Android apps, full offline mode, and 5.0★ across 32 reviews.',
  alternates: { canonical: 'https://thehisaab.com/compare/splitmybills' },
  openGraph: {
    title: 'The Hisaab vs splitmybills.in',
    description: 'Native app vs web tool. Both free, India-focused. Detailed comparison.',
    url: 'https://thehisaab.com/compare/splitmybills',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs splitmybills' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs splitmybills.in',
    description: 'Native app vs web tool. India-focused. Free.',
    images: ['/image.jpg'],
  },
};

export default function CompareSplitmybillsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/splitmybills' },
          { name: 'The Hisaab vs splitmybills.in', url: 'https://thehisaab.com/compare/splitmybills' },
        ])}
      />
      {children}
    </>
  );
}
