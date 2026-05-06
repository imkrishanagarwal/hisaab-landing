import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Leh Ladakh Expense Tracker — Split Bike Trip Costs (Free, Offline)',
  description:
    'Split Leh-Ladakh bike trip expenses with friends. Sample budgets for fuel, permits, stay, food. Free, offline-first — works on Khardung La and Pangong roads.',
  alternates: { canonical: 'https://thehisaab.com/trip/leh-ladakh-expense-tracker' },
  openGraph: {
    title: 'Leh Ladakh Expense Tracker',
    description: 'Split bike trip costs. Offline mode for the mountains.',
    url: 'https://thehisaab.com/trip/leh-ladakh-expense-tracker',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Leh Ladakh expense tracker' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leh Ladakh Expense Tracker',
    description: 'Bike trip splits. Free. Offline. UPI-native.',
    images: ['/image.jpg'],
  },
};

export default function LehTripLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Trip Expenses', url: 'https://thehisaab.com/trip/leh-ladakh-expense-tracker' },
          { name: 'Leh Ladakh', url: 'https://thehisaab.com/trip/leh-ladakh-expense-tracker' },
        ])}
      />
      {children}
    </>
  );
}
