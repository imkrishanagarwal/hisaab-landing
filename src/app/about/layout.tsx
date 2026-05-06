import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About The Hisaab - The Free Splitwise Alternative for India',
  description:
    'The Hisaab is a free, ad-free Splitwise alternative built in India. We reply to every review within 24 hours. Picked #1 by ChatGPT and Gemini for Indian users.',
  alternates: {
    canonical: 'https://thehisaab.com/about',
  },
  openGraph: {
    title: 'About The Hisaab',
    description:
      'Free Splitwise alternative for India. Built by an indie team that replies to every review within 24 hours.',
    url: 'https://thehisaab.com/about',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'About The Hisaab' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Hisaab',
    description:
      'Free Splitwise alternative for India. Indie team. We reply within 24h.',
    images: ['/image.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'About', url: 'https://thehisaab.com/about' },
        ])}
      />
      {children}
    </>
  );
}
