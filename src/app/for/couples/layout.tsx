import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How do couples use The Hisaab?', answer: 'Create a private group for just the two of you. Log shared expenses like dinners, rent, groceries, and vacations. The Hisaab tracks the running balance so things stay fair — without awkward conversations.' },
  { question: 'Is my data private?', answer: 'Yes. Only people in your group can see the expenses. The Hisaab never shares or sells your data. Your financial information stays between you and your partner.' },
  { question: 'Do we both need to download the app?', answer: 'Ideally yes — both partners can then add expenses and see balances in real-time. But one person can track everything solo too.' },
  { question: 'Can we split things unevenly?', answer: 'Yes. If one person earns more or you want to split by percentage, you can set custom amounts for each expense.' },
];

export const metadata: Metadata = {
  title: 'Best Expense Tracker for Couples - Share Expenses Fairly',
  description:
    'Track shared expenses with your partner without awkward money conversations. The Hisaab keeps things fair and transparent. Free. Private. Simple.',
  alternates: {
    canonical: 'https://thehisaab.com/for/couples',
  },
  openGraph: {
    title: 'Couple Expense Tracker - The Hisaab',
    description: 'Share expenses with your partner fairly. Track dinners, rent, vacations. Free and private.',
    url: 'https://thehisaab.com/for/couples',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab - Couple Expense Tracker' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couple Expense Tracker - The Hisaab',
    description: 'Track shared expenses with your partner. Fair, private, free.',
    images: ['/image.jpg'],
  },
};

export default function CouplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Use Cases', url: 'https://thehisaab.com/for/couples' },
          { name: 'Couples', url: 'https://thehisaab.com/for/couples' },
        ])}
      />
      {children}
    </>
  );
}
