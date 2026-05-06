import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'What is Spllito?', answer: 'Spllito is a web-based bill splitter that requires no signup, designed for occasional one-off splits. It is great when you just need to split one dinner bill quickly with friends.' },
  { question: 'Does The Hisaab require signup like Splitwise?', answer: 'The primary user signs up so expenses sync across devices and back up. Friends in your group view shared balances via a link with no signup. So we sit between Spllito (no signup ever) and Splitwise (everyone signs up).' },
  { question: 'When should I use Spllito vs The Hisaab?', answer: 'Use Spllito for a single bill split with friends you may never split with again. Use The Hisaab for ongoing groups — flatmates, trips, couples, office crews — where you need running balances, history, and UPI settle.' },
  { question: 'Is Spllito India-focused?', answer: 'Spllito is globally-oriented and not specifically built for India. The Hisaab is UPI-native, INR-first, and designed around Indian rent groups and trip crews.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Spllito - Ongoing Tracking vs One-Off Splits',
  description:
    'Spllito is great for no-signup one-off bill splits. The Hisaab is built for ongoing group expense tracking with UPI-native settle and friends-view-via-link.',
  alternates: { canonical: 'https://thehisaab.com/compare/spllito' },
  openGraph: {
    title: 'The Hisaab vs Spllito',
    description: 'No-signup one-off splits vs ongoing tracking with UPI-native settle.',
    url: 'https://thehisaab.com/compare/spllito',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Spllito' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs Spllito',
    description: 'When to use each: occasional vs ongoing.',
    images: ['/image.jpg'],
  },
};

export default function CompareSpllitoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/spllito' },
          { name: 'The Hisaab vs Spllito', url: 'https://thehisaab.com/compare/spllito' },
        ])}
      />
      {children}
    </>
  );
}
