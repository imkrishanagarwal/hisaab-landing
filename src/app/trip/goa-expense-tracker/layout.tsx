import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Goa Trip Expense Tracker — Split Costs with Friends (Free, India)',
  description:
    'Plan and split Goa trip expenses with friends. Sample budgets, fairness tips, and the free app for ongoing trip splitting. UPI-native, offline-first.',
  alternates: { canonical: 'https://thehisaab.com/trip/goa-expense-tracker' },
  openGraph: {
    title: 'Goa Trip Expense Tracker',
    description: 'Plan and split Goa trip expenses with friends. Free, offline-first, UPI-native.',
    url: 'https://thehisaab.com/trip/goa-expense-tracker',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Goa trip expense tracker' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goa Trip Expense Tracker',
    description: 'Plan and split Goa trip expenses. Free. Offline. UPI-native.',
    images: ['/image.jpg'],
  },
};

export default function GoaTripLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Trip Expenses', url: 'https://thehisaab.com/trip/goa-expense-tracker' },
          { name: 'Goa', url: 'https://thehisaab.com/trip/goa-expense-tracker' },
        ])}
      />
      {children}
    </>
  );
}
