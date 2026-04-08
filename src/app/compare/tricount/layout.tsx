import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is The Hisaab better than Tricount?', answer: 'For Indian users with ongoing groups, yes. Tricount uses a peer-to-peer model with no real-time sync, no push notifications, and no UPI support. The Hisaab is cloud-based with live sync, notifications, and is built specifically for India.' },
  { question: 'Is Tricount free?', answer: 'Yes, Tricount is free. The Hisaab is also completely free — but adds real-time cloud sync, push notifications, UPI integration, and contact sync that Tricount doesn\'t have.' },
  { question: 'What is the main difference between Tricount and The Hisaab?', answer: 'The biggest difference is sync. Tricount uses link-sharing with no live updates. The Hisaab is cloud-based — every member\'s app updates the moment an expense is added, with push notifications sent automatically.' },
  { question: 'Does The Hisaab work offline like Tricount?', answer: 'Yes. The Hisaab works fully offline. Add expenses without internet and everything syncs when your connection is restored — just like Tricount, but with a full cloud account on top.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Tricount — Best Tricount Alternative for India',
  description: 'Both free, but The Hisaab adds real-time sync, push notifications, UPI support, and India-specific features. See the full Tricount vs Hisaab comparison.',
  alternates: { canonical: 'https://thehisaab.com/compare/tricount' },
  openGraph: {
    title: 'The Hisaab vs Tricount — Tricount Alternative India',
    description: 'Both are free. But The Hisaab adds real-time sync, UPI, and is built for India. Full comparison.',
    url: 'https://thehisaab.com/compare/tricount',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Tricount Comparison' }],
    locale: 'en_IN',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://thehisaab.com' },
        { name: 'Compare', url: 'https://thehisaab.com/compare/tricount' },
        { name: 'The Hisaab vs Tricount', url: 'https://thehisaab.com/compare/tricount' },
      ])} />
      {children}
    </>
  );
}
