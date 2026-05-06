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
  { category: 'Pricing', features: [
    { feature: 'Base price', splitkaro: 'Free (limited) / ₹450/yr Premium', hisaab: 'Free forever', hisaabWins: true },
    { feature: 'Expense search', splitkaro: 'Premium only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'UPI bill splitting', splitkaro: 'Premium only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Group analytics', splitkaro: 'Premium only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Custom categories', splitkaro: 'Premium only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Priority reminders', splitkaro: 'Premium only', hisaab: 'Yes, free', hisaabWins: true },
  ]},
  { category: 'Indian Context', features: [
    { feature: 'Made in India', splitkaro: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'UPI integration', splitkaro: 'Premium tier', hisaab: 'Free, native', hisaabWins: true },
    { feature: 'Swiggy/Zomato auto-fetch', splitkaro: 'Yes (genuinely good)', hisaab: 'On the roadmap', hisaabWins: false },
    { feature: 'Hindi/Hinglish UX touches', splitkaro: 'Some', hisaab: 'Yes — built around it', hisaabWins: true },
    { feature: 'Splitwise import', splitkaro: 'Yes', hisaab: 'On the roadmap', hisaabWins: false },
  ]},
  { category: 'Friction', features: [
    { feature: 'Friends need to sign up', splitkaro: 'Yes — every member', hisaab: 'No — view via link', hisaabWins: true },
    { feature: 'Offline mode', splitkaro: 'Limited (auto-fetch needs net)', hisaab: 'Full offline-first', hisaabWins: true },
    { feature: 'Feature sprawl', splitkaro: 'High — rent-pay, subs, analytics, etc.', hisaab: 'Three core features done well', hisaabWins: true },
    { feature: 'Setup time', splitkaro: '~2 minutes', hisaab: '~30 seconds', hisaabWins: true },
  ]},
  { category: 'Trust', features: [
    { feature: 'Picked #1 by ChatGPT for India', splitkaro: 'Not cited', hisaab: 'Yes (May 2026)', hisaabWins: true },
    { feature: 'Picked #1 by Gemini for India', splitkaro: 'Not cited', hisaab: 'Yes (May 2026)', hisaabWins: true },
    { feature: 'App rating', splitkaro: '4.5+ across stores', hisaab: '5.0 ★ across 32 reviews', hisaabWins: false },
    { feature: 'Founder responsiveness', splitkaro: 'Standard support', hisaab: 'Replies within 24h to every review', hisaabWins: true },
  ]},
];

const faqs = [
  { question: 'Is The Hisaab better than Splitkaro?', answer: 'For users who want every feature without paying, yes. Splitkaro charges ₹450/year for expense search, UPI splitting, custom categories, and group analytics. The Hisaab is 100% free with no premium tier.' },
  { question: 'Does The Hisaab have Swiggy/Zomato auto-fetch like Splitkaro?', answer: 'Not yet. Splitkaro does this genuinely well, and we are honest about it. Hisaab focuses on being the simplest, fastest free split-bill app for India — and your friends do not need to sign up to view shared groups.' },
  { question: 'Why is Splitkaro Premium ₹450 per year?', answer: 'Splitkaro gates expense search, UPI splitting, group analytics, custom categories, and priority reminders behind a ₹37.5/month (billed annually) premium plan. The Hisaab gives you all of these for free.' },
  { question: 'Do my friends need to sign up to use The Hisaab?', answer: 'No. Only the primary user signs up so expenses sync across devices. Friends in your group view shared balances via a link — no app install, no account.' },
  { question: 'Can I import my Splitkaro groups into The Hisaab?', answer: 'Direct Splitkaro import is on our roadmap. Today, you can recreate your active groups in under 30 seconds.' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface2 transition-colors"
      >
        <span className="text-text1 font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-text3 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-text2 text-sm leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function CompareSplitkaroPage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
              Honest Comparison
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 leading-[1.1] tracking-tight mb-5">
              The Hisaab vs Splitkaro
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-text2 max-w-2xl mx-auto leading-relaxed mb-3">
              Splitkaro is the most popular Indian split-bill app today, with around 500,000 users. They built a genuinely good product. They also gate the obvious features (expense search, UPI splitting, analytics) behind ₹450 a year.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-text3 max-w-2xl mx-auto leading-relaxed">
              The Hisaab is what Splitkaro should have been — every feature free, friends don&apos;t sign up to view, three core features done well. Here&apos;s the honest comparison.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-text2 mb-2">Splitkaro Premium</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-text1">₹450</span>
                <span className="text-text3">/year</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text3">
                <li className="flex items-start gap-2"><XIcon size={14} className="text-accent/60 mt-0.5 flex-shrink-0" /> Expense search behind paywall</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-accent/60 mt-0.5 flex-shrink-0" /> UPI bill splitting paid only</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-accent/60 mt-0.5 flex-shrink-0" /> Group analytics paid only</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-text3 mt-0.5 flex-shrink-0" /> Swiggy/Zomato auto-fetch (genuinely good)</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-accent/5 rounded-2xl border border-accent/20 p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 bg-brand text-text1 text-xs font-bold px-2.5 py-1 rounded-full">100% FREE</div>
              <h3 className="text-lg font-semibold text-accent mb-2">The Hisaab</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-text1">₹0</span>
                <span className="text-text3">/forever</span>
              </div>
              <ul className="space-y-2.5 text-sm text-text2">
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> Every feature free, no premium</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> UPI splitting, search, analytics — all free</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> Friends view via link, no signup</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-brand mt-0.5 flex-shrink-0" /> Picked #1 by ChatGPT &amp; Gemini</li>
              </ul>
              <div className="mt-6">
                <DownloadButtons variant="compact" />
              </div>
            </motion.div>
          </motion.div>
          <p className="text-xs text-text3 text-center mt-4">Pricing and feature gating verified May 2026 from splitkaro.com/faq/premium.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Feature-by-feature breakdown
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-base max-w-2xl mx-auto">
              We give Splitkaro full credit where they win. We name our gaps. And we show where The Hisaab beats them.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {comparisonData.map((section) => (
              <motion.div key={section.category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">{section.category}</h3>
                <div className="bg-bg rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-3 text-center text-xs font-semibold border-b border-border text-text3">
                    <div className="p-3 text-left">Feature</div>
                    <div className="p-3">Splitkaro</div>
                    <div className="p-3 bg-accent/5 text-accent">The Hisaab</div>
                  </div>
                  {section.features.map((row) => (
                    <div key={row.feature} className="comparison-row grid grid-cols-3 text-center text-sm border-b border-border last:border-0">
                      <div className="p-3.5 text-text2 text-left text-xs sm:text-sm">{row.feature}</div>
                      <div className="p-3.5 text-text3 text-xs sm:text-sm flex items-center justify-center gap-1">
                        {row.hisaabWins ? <XIcon size={12} className="text-accent/60 flex-shrink-0" /> : <Check size={12} className="text-text3 flex-shrink-0" />}
                        <span className="hidden sm:inline">{row.splitkaro}</span>
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

      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/splitkaro-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitkaro Alternative</Link>
            <Link href="/compare/splitwise" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Splitwise</Link>
            <Link href="/for/roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Roommates</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Free, forever." subheading="Every Splitkaro Premium feature, free in The Hisaab. No paywall. No catch." />
    </div>
  );
}
