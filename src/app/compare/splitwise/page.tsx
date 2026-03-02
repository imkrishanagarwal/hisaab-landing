'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    { feature: 'Base price', splitwise: 'Free (limited) / ₹999/yr Pro', hisaab: 'Free forever', hisaabWins: true },
    { feature: 'Daily expense limit', splitwise: '3 expenses/day (free)', hisaab: 'Unlimited', hisaabWins: true },
    { feature: 'Ads', splitwise: '10-second unskippable video ads', hisaab: 'No ads ever', hisaabWins: true },
    { feature: 'Hidden fees', splitwise: 'Premium required for full features', hisaab: 'None', hisaabWins: true },
  ]},
  { category: 'Core Features', features: [
    { feature: 'Unlimited groups', splitwise: 'Paid only (3 on free)', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Unequal splits', splitwise: 'Paid only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Multiple payers', splitwise: 'Paid only', hisaab: 'Yes, free', hisaabWins: true },
    { feature: 'Expense categories', splitwise: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Settlement suggestions', splitwise: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'Real-time sync', splitwise: 'Yes', hisaab: 'Yes', hisaabWins: false },
  ]},
  { category: 'Experience', features: [
    { feature: 'Offline mode', splitwise: 'Limited functionality', hisaab: 'Full offline support', hisaabWins: true },
    { feature: 'Made for India', splitwise: 'Global app, not localized', hisaab: 'INR-first, Indian UX', hisaabWins: true },
    { feature: 'App speed', splitwise: 'Can be slow, bloated', hisaab: 'Fast & lightweight', hisaabWins: true },
    { feature: 'Data privacy', splitwise: 'Tracks user data', hisaab: 'No tracking, no data selling', hisaabWins: true },
    { feature: 'Android app', splitwise: 'Yes', hisaab: 'Yes', hisaabWins: false },
    { feature: 'iOS app', splitwise: 'Yes', hisaab: 'Yes', hisaabWins: false },
  ]},
];

const faqs = [
  { question: 'Is The Hisaab better than Splitwise?', answer: 'For most users in India, yes. The Hisaab offers all the features Splitwise charges for — unlimited groups, unequal splits, multiple payers — completely free with no ads. Splitwise charges ₹999/year for premium and limits free users to 3 expenses/day.' },
  { question: 'Is Splitwise Pro worth ₹999 per year?', answer: 'Not when The Hisaab offers every Pro feature for free. Unlimited groups, unequal splits, multiple payers, offline mode, and no ads — all at zero cost.' },
  { question: 'Can I use both The Hisaab and Splitwise?', answer: 'Yes. You can use both apps simultaneously. Many users start by trying The Hisaab alongside Splitwise and eventually switch fully.' },
  { question: 'Does The Hisaab have all the features of Splitwise Pro?', answer: 'Yes. The Hisaab includes unlimited groups, unequal splits, multiple payers, full offline mode, real-time sync, and no ads — all features that require Splitwise Pro.' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-gray-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function CompareSplitwisePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
              Detailed Comparison
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              The Hisaab vs Splitwise
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A honest, feature-by-feature comparison. See exactly where The Hisaab beats Splitwise &mdash; and where they&apos;re equal.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING HIGHLIGHT ===== */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="bg-[#121212] rounded-2xl border border-white/5 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Splitwise</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">₹999</span>
                <span className="text-gray-500">/year</span>
              </div>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li className="flex items-start gap-2"><XIcon size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" /> 3 expenses/day on free</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" /> Unskippable video ads</li>
                <li className="flex items-start gap-2"><XIcon size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" /> Limited groups on free</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-gray-600 mt-0.5 flex-shrink-0" /> All features with Pro</li>
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
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> Unlimited expenses</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> Zero ads</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> Unlimited groups</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" /> All features included</li>
              </ul>
              <div className="mt-6">
                <DownloadButtons variant="compact" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== DETAILED COMPARISON TABLE ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Feature-by-Feature Breakdown
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {comparisonData.map((section) => (
              <motion.div key={section.category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide mb-4">{section.category}</h3>
                <div className="bg-[#0B0B0B] rounded-xl border border-white/5 overflow-hidden">
                  <div className="grid grid-cols-3 text-center text-xs font-semibold border-b border-white/5 text-gray-500">
                    <div className="p-3 text-left">Feature</div>
                    <div className="p-3">Splitwise</div>
                    <div className="p-3 bg-[#2563EB]/5 text-[#2563EB]">The Hisaab</div>
                  </div>
                  {section.features.map((row) => (
                    <div key={row.feature} className="comparison-row grid grid-cols-3 text-center text-sm border-b border-white/5 last:border-0">
                      <div className="p-3.5 text-gray-300 text-left text-xs sm:text-sm">{row.feature}</div>
                      <div className="p-3.5 text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-1">
                        {row.hisaabWins ? <XIcon size={12} className="text-red-400/60 flex-shrink-0" /> : <Check size={12} className="text-gray-600 flex-shrink-0" />}
                        <span className="hidden sm:inline">{row.splitwise}</span>
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

      {/* ===== HOW TO SWITCH ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How to switch from Splitwise
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Getting started with The Hisaab takes under a minute.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Download The Hisaab', desc: 'Get the free app from Google Play Store or Apple App Store.' },
              { step: '2', title: 'Create your groups', desc: 'Set up your groups and add friends. Takes seconds.' },
              { step: '3', title: 'Start splitting', desc: 'Add expenses and let The Hisaab handle the math. All features unlocked.' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
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

      {/* ===== RELATED PAGES ===== */}
      <section className="py-12 bg-[#0B0B0B] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/splitwise-alternative" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Free Splitwise Alternative</Link>
            <Link href="/for/trips" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Trip Expenses</Link>
            <Link href="/for/roommates" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Roommate Bills</Link>
            <Link href="/for/couples" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Couples</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="The verdict is clear." subheading="The Hisaab gives you everything Splitwise Pro offers — for free." />
    </div>
  );
}
