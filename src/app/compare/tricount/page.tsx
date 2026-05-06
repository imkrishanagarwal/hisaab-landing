'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X as XIcon, ChevronDown } from 'lucide-react';
import DownloadButtons from '@/components/DownloadButtons';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const comparisonData = [
  { category: 'Collaboration', features: [
    { feature: 'Real-time cloud sync', tricount: 'Peer-to-peer via QR/link', hisaab: 'Instant cloud sync', hisaabWins: true },
    { feature: 'Push notifications', tricount: 'No', hisaab: 'Yes — when expenses are added', hisaabWins: true },
    { feature: 'Friends always updated', tricount: 'Must share link every time', hisaab: 'Auto-synced always', hisaabWins: true },
    { feature: 'Activity feed', tricount: 'No', hisaab: 'Full real-time activity log', hisaabWins: true },
  ]},
  { category: 'India Support', features: [
    { feature: 'INR-first design', tricount: 'Multi-currency, not INR-first', hisaab: 'INR default, India-built', hisaabWins: true },
    { feature: 'UPI payment links', tricount: 'No', hisaab: 'Yes', hisaabWins: true },
    { feature: 'Contact sync', tricount: 'No — manual friend adding', hisaab: 'Find friends via contacts', hisaabWins: true },
  ]},
  { category: 'Features', features: [
    { feature: 'Free forever', tricount: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Unequal splits', tricount: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Multiple payers', tricount: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Offline support', tricount: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Settlement suggestions', tricount: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Smart balance simplification', tricount: 'Basic', hisaab: 'Yes — minimises transfers', hisaabWins: true },
  ]},
  { category: 'Experience', features: [
    { feature: 'Android & iOS', tricount: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Indian language support', tricount: 'No', hisaab: 'Designed for Indian users', hisaabWins: true },
    { feature: 'Data privacy', tricount: 'Standard', hisaab: 'No tracking, no data selling', hisaabWins: true },
  ]},
];

const faqs = [
  { question: 'Is The Hisaab better than Tricount?', answer: 'For Indian users, yes. Tricount is solid for simple one-off splits but lacks real-time sync, push notifications, UPI support, and India-specific features. The Hisaab is a cloud-based app built specifically for how Indian friend groups actually split money.' },
  { question: 'Is Tricount free?', answer: 'Yes, Tricount is free. The Hisaab is also completely free — but adds real-time cloud sync, push notifications, UPI integration, and contact sync that Tricount doesn\'t have.' },
  { question: 'What is the main difference between Tricount and The Hisaab?', answer: 'The biggest difference is sync. Tricount uses a peer-to-peer model where you share a trip link — there\'s no account, no push notifications, and no live activity feed. The Hisaab is cloud-based: every member\'s app updates the moment an expense is added, with notifications sent automatically.' },
  { question: 'Does The Hisaab work without internet like Tricount?', answer: 'Yes. The Hisaab works fully offline. Add expenses without internet and everything syncs automatically when your connection is restored — just like Tricount, but with a full cloud account on top.' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-surface2 transition-colors">
        <span className="text-text1 font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-text3 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-text2 text-sm leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function CompareTricountPage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      {/* HERO */}
      <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
              Detailed Comparison
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 leading-[1.1] tracking-tight mb-5">
              The Hisaab vs Tricount
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-text2 max-w-2xl mx-auto leading-relaxed">
              Both apps are free. But one is built for India with real-time sync and UPI. Here&apos;s exactly how they compare.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* KEY DIFFERENCE CALLOUT */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-text2 mb-2">Tricount</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-text1">Free</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text3">
                <li className="flex items-start gap-2"><XIcon size={14} className="text-accent/60 mt-0.5 flex-shrink-0" /> No real-time sync (link-based)</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-accent/60 mt-0.5 flex-shrink-0" /> No push notifications</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-accent/60 mt-0.5 flex-shrink-0" /> No UPI support</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-text3 mt-0.5 flex-shrink-0" /> Simple offline splitting</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-accent/5 rounded-2xl border border-accent/20 p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 bg-brand text-text1 text-xs font-bold px-2.5 py-1 rounded-full">RECOMMENDED</div>
              <h3 className="text-lg font-semibold text-accent mb-2">The Hisaab</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-text1">Free</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text2">
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> Real-time cloud sync</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> Push notifications</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> UPI payment links</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> Built for India</li>
              </ul>
              <div className="mt-6"><DownloadButtons variant="compact" /></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">Feature-by-Feature Breakdown</motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-base max-w-2xl mx-auto">
              Rated 5★ by 32 Indian users on App Store + Play Store. Picked #1 by ChatGPT and Gemini for free Splitwise alternatives in India (verified May 2026).
            </motion.p>
          </motion.div>
          <div className="space-y-8">
            {comparisonData.map((section) => (
              <motion.div key={section.category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">{section.category}</h3>
                <div className="bg-bg rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-3 text-center text-xs font-semibold border-b border-border text-text3">
                    <div className="p-3 text-left">Feature</div>
                    <div className="p-3">Tricount</div>
                    <div className="p-3 bg-accent/5 text-accent">The Hisaab</div>
                  </div>
                  {section.features.map((row) => (
                    <div key={row.feature} className="grid grid-cols-3 text-center text-sm border-b border-border last:border-0">
                      <div className="p-3.5 text-text2 text-left text-xs sm:text-sm">{row.feature}</div>
                      <div className="p-3.5 text-text3 text-xs sm:text-sm flex items-center justify-center gap-1">
                        {row.hisaabWins ? <XIcon size={12} className="text-accent/60 flex-shrink-0" /> : <Check size={12} className="text-text3 flex-shrink-0" />}
                        <span className="hidden sm:inline">{row.tricount}</span>
                      </div>
                      <div className={`p-3.5 text-xs sm:text-sm flex items-center justify-center gap-1 bg-accent/5 ${row.hisaabWins ? 'text-brand' : 'text-text2'}`}>
                        <Check size={12} className="text-brand flex-shrink-0" />
                        <span className="hidden sm:inline">{row.hisaab}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">Frequently Asked Questions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/compare/splitwise" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Splitwise</Link>
            <Link href="/compare/settle-up" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Settle Up</Link>
            <Link href="/for/trips" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Trip Expenses</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Same price. Better app." subheading="Both are free — but only one is built for India, with real-time sync and UPI." />
    </div>
  );
}
