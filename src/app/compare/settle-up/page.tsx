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
    { feature: 'Free plan', settleUp: 'Basic features only', hisaab: 'All features free', hisaabWins: true },
    { feature: 'Premium price', settleUp: '~₹250/month Pro', hisaab: '₹0 forever', hisaabWins: true },
    { feature: 'Ads', settleUp: 'Present on free plan', hisaab: 'Zero ads ever', hisaabWins: true },
  ]},
  { category: 'Core Features', features: [
    { feature: 'Unlimited groups', settleUp: 'Limited on free', hisaab: 'Yes, always free', hisaabWins: true },
    { feature: 'Unequal splits', settleUp: 'Pro only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Multiple payers', settleUp: 'Limited', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Settlement suggestions', settleUp: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Activity feed', settleUp: 'Basic', hisaab: 'Real-time, detailed', hisaabWins: true },
  ]},
  { category: 'India Support', features: [
    { feature: 'INR as primary currency', settleUp: 'Multi-currency, not INR-first', hisaab: 'INR-first design', hisaabWins: true },
    { feature: 'UPI integration', settleUp: 'No', hisaab: 'Yes', hisaabWins: true },
    { feature: 'Contact sync (find friends)', settleUp: 'No', hisaab: 'Yes', hisaabWins: true },
    { feature: 'Made for Indian UX', settleUp: 'Global app', hisaab: 'Built for India', hisaabWins: true },
  ]},
  { category: 'Experience', features: [
    { feature: 'Offline mode', settleUp: 'Limited', hisaab: 'Full offline support', hisaabWins: true },
    { feature: 'Real-time sync', settleUp: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Android & iOS', settleUp: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Data privacy', settleUp: 'Standard', hisaab: 'No tracking, no selling', hisaabWins: true },
  ]},
];

const faqs = [
  { question: 'Is The Hisaab a good Settle Up alternative?', answer: 'Yes — and it\'s better for Indian users. The Hisaab offers unequal splits, multiple payers, UPI integration, and full offline mode, all completely free. Settle Up charges for its premium features and is not designed for India.' },
  { question: 'Is Settle Up free?', answer: 'Settle Up has a free plan but it is limited. Advanced features like unequal splits require a Pro subscription. The Hisaab gives you all these features at zero cost, forever.' },
  { question: 'How does The Hisaab compare to Settle Up for Indian users?', answer: 'The Hisaab is built specifically for India — INR-first, UPI payment links, Hinglish-friendly interface, and contact sync to find friends already on the app. Settle Up is a global app with no India-specific features.' },
  { question: 'Can I switch from Settle Up to The Hisaab easily?', answer: 'Yes. Just download The Hisaab, create your groups, and add your friends. You can recreate your active groups in minutes and start fresh with a better app.' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors">
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-gray-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{answer}</div>}
    </div>
  );
}

export default function CompareSettleUpPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* HERO */}
      <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
              Detailed Comparison
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              The Hisaab vs Settle Up
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Looking for a Settle Up alternative in India? Here&apos;s an honest comparison of every feature that matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="bg-[#121212] rounded-2xl border border-white/5 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Settle Up</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">~₹250</span>
                <span className="text-gray-500">/month Pro</span>
              </div>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li className="flex items-start gap-2"><XIcon size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" /> Limited free plan</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" /> No India-specific features</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" /> No UPI support</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-gray-600 mt-0.5 flex-shrink-0" /> Basic expense tracking</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#2563EB]/5 rounded-2xl border border-[#2563EB]/20 p-6 sm:p-8 relative">
              <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">RECOMMENDED</div>
              <h3 className="text-lg font-semibold text-[#2563EB] mb-2">The Hisaab</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">₹0</span>
                <span className="text-gray-500">/forever</span>
              </div>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> All features, always free</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> INR-first, built for India</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> UPI payment links</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> Full offline mode</li>
              </ul>
              <div className="mt-6"><DownloadButtons variant="compact" /></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">Feature-by-Feature Breakdown</motion.h2>
          </motion.div>
          <div className="space-y-8">
            {comparisonData.map((section) => (
              <motion.div key={section.category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">{section.category}</h3>
                <div className="bg-[#0B0B0B] rounded-xl border border-white/5 overflow-hidden">
                  <div className="grid grid-cols-3 text-center text-xs font-semibold border-b border-white/5 text-gray-500">
                    <div className="p-3 text-left">Feature</div>
                    <div className="p-3">Settle Up</div>
                    <div className="p-3 bg-[#2563EB]/5 text-[#2563EB]">The Hisaab</div>
                  </div>
                  {section.features.map((row) => (
                    <div key={row.feature} className="grid grid-cols-3 text-center text-sm border-b border-white/5 last:border-0">
                      <div className="p-3.5 text-gray-300 text-left text-xs sm:text-sm">{row.feature}</div>
                      <div className="p-3.5 text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-1">
                        {row.hisaabWins ? <XIcon size={12} className="text-red-400/60 flex-shrink-0" /> : <Check size={12} className="text-gray-600 flex-shrink-0" />}
                        <span className="hidden sm:inline">{row.settleUp}</span>
                      </div>
                      <div className={`p-3.5 text-xs sm:text-sm flex items-center justify-center gap-1 bg-[#2563EB]/5 ${row.hisaabWins ? 'text-emerald-400' : 'text-gray-300'}`}>
                        <Check size={12} className="text-emerald-400 flex-shrink-0" />
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
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-[#121212] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/splitwise-alternative" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/compare/splitwise" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">vs Splitwise</Link>
            <Link href="/compare/tricount" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">vs Tricount</Link>
            <Link href="/for/trips" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Trip Expenses</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="The better choice for India." subheading="Everything Settle Up charges for — free, with UPI support built in." />
    </div>
  );
}
