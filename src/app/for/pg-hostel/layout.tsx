import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How do I split mess and PG expenses with hostel-mates?', answer: 'Create a group in The Hisaab for your PG or hostel. Add mess fees, water, electricity, common groceries, and any shared expense. The Hisaab calculates each person\'s running balance and shows who owes whom at any moment.' },
  { question: 'What if someone joins or leaves the PG mid-month?', answer: 'You can add or remove members from a group at any time. Past expenses stay attached to whoever was in the group when they were logged. New members only share future expenses.' },
  { question: 'How do I split mess if some people skipped meals?', answer: 'Use unequal splits — Hisaab lets you set custom amounts per person on any expense. If three of four people ate Tuesday\'s dinner, split it among those three only. All free.' },
  { question: 'Can I track the security deposit?', answer: 'Yes — log it as a one-time expense paid by whoever fronted it. The Hisaab carries the balance forward until the deposit is refunded or split among everyone moving out.' },
  { question: 'Why is The Hisaab better than a WhatsApp group spreadsheet for PGs?', answer: 'Spreadsheets get outdated. WhatsApp messages scroll away. The Hisaab keeps a real running balance everyone can see — and friends in your group can view shared balances via a link without signing up.' },
];

export const metadata: Metadata = {
  title: 'Best App for Splitting PG and Hostel Expenses (Free, India)',
  description:
    'Split mess fees, rent, water, electricity, and shared groceries with PG-mates and hostel-mates. The Hisaab — free forever, works offline, made in India.',
  alternates: { canonical: 'https://thehisaab.com/for/pg-hostel' },
  openGraph: {
    title: 'PG & Hostel Expense Tracker - The Hisaab',
    description: 'Split mess and shared expenses with hostel-mates. Free, offline, made in India.',
    url: 'https://thehisaab.com/for/pg-hostel',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab - PG Expense Tracker' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PG & Hostel Expense Tracker - The Hisaab',
    description: 'Split mess, rent, water, electricity. Free. Made in India.',
    images: ['/image.jpg'],
  },
};

export default function PgHostelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Use Cases', url: 'https://thehisaab.com/for/pg-hostel' },
          { name: 'PG & Hostel', url: 'https://thehisaab.com/for/pg-hostel' },
        ])}
      />
      {children}
    </>
  );
}
