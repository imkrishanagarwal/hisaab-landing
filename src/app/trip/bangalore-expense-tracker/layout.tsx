import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Bangalore Trip Expense Tracker — Group Visits & Weekend Splits',
  description:
    'Split a Bangalore weekend trip or group visit. Sample budgets for stay, food, brewpubs, and Cabs. Free, UPI-native, made for Indian groups.',
  alternates: { canonical: 'https://thehisaab.com/trip/bangalore-expense-tracker' },
  openGraph: {
    title: 'Bangalore Trip Expense Tracker',
    description: 'Split Bangalore weekend trip costs. Free, UPI-native.',
    url: 'https://thehisaab.com/trip/bangalore-expense-tracker',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Bangalore trip expense tracker' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangalore Trip Expense Tracker',
    description: 'Split Bangalore trip costs. Free. UPI-native.',
    images: ['/image.jpg'],
  },
};

export default function BangaloreTripLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Trip Expenses', url: 'https://thehisaab.com/trip/bangalore-expense-tracker' },
          { name: 'Bangalore', url: 'https://thehisaab.com/trip/bangalore-expense-tracker' },
        ])}
      />
      {children}
    </>
  );
}
