import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Rent Split Calculator (India, Free) — 4 Methods, Instant Math',
  description:
    'Free rent split calculator for Indian flatmates. Equal, by room size, by income, or hybrid. Instant math, no signup. Made by The Hisaab.',
  alternates: { canonical: 'https://thehisaab.com/tools/rent-split-calculator' },
  openGraph: {
    title: 'Rent Split Calculator (India, Free)',
    description: '4 fair methods to split rent. Instant math, no signup.',
    url: 'https://thehisaab.com/tools/rent-split-calculator',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Rent Split Calculator' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rent Split Calculator (India)',
    description: '4 fair methods. Instant. Free.',
    images: ['/image.jpg'],
  },
};

export default function RentSplitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Tools', url: 'https://thehisaab.com/tools/rent-split-calculator' },
          { name: 'Rent Split Calculator', url: 'https://thehisaab.com/tools/rent-split-calculator' },
        ])}
      />
      {children}
    </>
  );
}
