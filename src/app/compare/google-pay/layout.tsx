import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Can I split bills using Google Pay?', answer: 'Yes — Google Pay has a built-in group expense feature where you can create groups, log bills, and split costs. It works fine for one-off splits but is not designed for ongoing expense tracking across multiple groups.' },
  { question: 'Why use The Hisaab if Google Pay can split bills?', answer: 'GPay is excellent for paying. The Hisaab is built for tracking. If you have a Goa trip with 8 people across 30 expenses, or flatmate rent and groceries every month, you need a dedicated tracker — not a payment app with bill-split bolted on. The Hisaab handles unequal splits, multiple payers, offline mode, and group balance views that GPay does not.' },
  { question: 'Does The Hisaab integrate with Google Pay?', answer: 'Yes. When you settle up in The Hisaab, we open GPay (or PhonePe or Paytm) with the exact amount pre-filled. You get the best of both: dedicated expense tracking in Hisaab, instant payment via your preferred UPI app.' },
  { question: 'Is Google Pay free for splitting bills?', answer: 'Yes, GPay is free. The Hisaab is also free, with no premium tier and no ads.' },
  { question: 'Which is better for trip expenses with friends?', answer: 'For a trip with multiple expenses, dynamic splits, and offline situations (Goa beach, Manali road trip), The Hisaab is built for this exact case. GPay is better for the final settle-up payment itself.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Google Pay - Tracker vs Payment App',
  description:
    'Google Pay is for paying. The Hisaab is for tracking. Use The Hisaab to manage group expenses; settle via GPay/PhonePe/Paytm in one tap.',
  alternates: { canonical: 'https://thehisaab.com/compare/google-pay' },
  openGraph: {
    title: 'The Hisaab vs Google Pay',
    description: 'Why use a tracker app alongside Google Pay for group expenses.',
    url: 'https://thehisaab.com/compare/google-pay',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Google Pay' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs Google Pay',
    description: 'Tracker + UPI app together = best workflow for Indian groups.',
    images: ['/image.jpg'],
  },
};

export default function CompareGooglePayLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/google-pay' },
          { name: 'The Hisaab vs Google Pay', url: 'https://thehisaab.com/compare/google-pay' },
        ])}
      />
      {children}
    </>
  );
}
