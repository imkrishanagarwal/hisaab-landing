import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is The Hisaab a good Settle Up alternative?', answer: 'Yes — and it\'s better for Indian users. The Hisaab offers unequal splits, multiple payers, UPI integration, and full offline mode, all completely free. Settle Up charges for its premium features and is not designed for India.' },
  { question: 'Is Settle Up free?', answer: 'Settle Up has a free plan but it is limited. Advanced features like unequal splits require a Pro subscription. The Hisaab gives you all these features at zero cost, forever.' },
  { question: 'How does The Hisaab compare to Settle Up for Indian users?', answer: 'The Hisaab is built specifically for India — INR-first, UPI payment links, and contact sync to find friends already on the app. Settle Up is a global app with no India-specific features.' },
  { question: 'Can I switch from Settle Up to The Hisaab easily?', answer: 'Yes. Just download The Hisaab, create your groups, and add your friends. You can recreate your active groups in minutes.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Settle Up — Best Settle Up Alternative for India',
  description: 'Comparing Settle Up vs The Hisaab? The Hisaab is free forever, built for India, with UPI support and no limits. See the full feature comparison.',
  alternates: { canonical: 'https://thehisaab.com/compare/settle-up' },
  openGraph: {
    title: 'The Hisaab vs Settle Up — Settle Up Alternative India',
    description: 'Free forever, built for India, UPI support. See why The Hisaab is the best Settle Up alternative.',
    url: 'https://thehisaab.com/compare/settle-up',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Settle Up Comparison' }],
    locale: 'en_IN',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://thehisaab.com' },
        { name: 'Compare', url: 'https://thehisaab.com/compare/settle-up' },
        { name: 'The Hisaab vs Settle Up', url: 'https://thehisaab.com/compare/settle-up' },
      ])} />
      {children}
    </>
  );
}
