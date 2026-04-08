import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How do I track office lunch expenses with my team?', answer: 'Create a group in The Hisaab called "Office Lunch" and add your teammates. Every time someone orders for the team, add it in seconds. The app tells everyone exactly what they owe.' },
  { question: 'Can I use The Hisaab for team outings and office trips?', answer: 'Absolutely. Create a group for the outing, add all colleagues, and track every expense — hotel, dinner, cab, activities. The Hisaab calculates the most efficient way to settle up.' },
  { question: 'What if different people order different amounts each day?', answer: 'The Hisaab supports unequal splits. Set exact amounts per person for every order, and balances accumulate over time. Settle weekly or monthly.' },
  { question: 'Is The Hisaab free for office use?', answer: 'Yes, 100% free with no limits. Add as many colleagues as you want, track as many expenses as you need. No subscription required.' },
];

export const metadata: Metadata = {
  title: 'Office Expense Tracker — Team Lunch & Work Bill Splitter | The Hisaab',
  description: 'Track team lunches, office supplies, client cabs, and work outings with The Hisaab. Free bill splitting app for office teams in India.',
  alternates: { canonical: 'https://thehisaab.com/for/office' },
  openGraph: {
    title: 'Office & Team Expense Tracker — The Hisaab',
    description: 'Track team lunches, office trips, and shared work expenses. Free for all team members.',
    url: 'https://thehisaab.com/for/office',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab - Office Expense Tracker' }],
    locale: 'en_IN',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://thehisaab.com' },
        { name: 'Use Cases', url: 'https://thehisaab.com/for/office' },
        { name: 'Office Expenses', url: 'https://thehisaab.com/for/office' },
      ])} />
      {children}
    </>
  );
}
