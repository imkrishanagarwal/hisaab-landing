'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Home, Zap, ShoppingCart, Wifi } from 'lucide-react';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const faqs = [
  { question: 'How do I split rent and bills with my roommates?', answer: 'Create a group in The Hisaab for your flat, add all roommates, then log every shared expense — rent, electricity, WiFi, groceries. The Hisaab calculates running balances automatically.' },
  { question: 'Can I track recurring expenses like rent?', answer: 'Yes. Add rent or any recurring bill each month. The Hisaab keeps a running total so you can settle up weekly or monthly — whatever works for your flat.' },
  { question: 'What if not all roommates share every expense?', answer: 'You can choose which roommates to include in each expense. If only two of you ordered Swiggy, split it between just those two.' },
  { question: 'Is The Hisaab better than a shared spreadsheet?', answer: 'Much better. Spreadsheets get outdated, cause confusion, and nobody wants to maintain them. The Hisaab updates in real-time and everyone can see their balance instantly.' },
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

export default function RoommatesPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
                For Roommates & Flatmates
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Rent. Groceries. WiFi.
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">Sorted.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Track every shared expense with your flatmates. The Hisaab keeps a running balance so you always know who owes whom &mdash; no spreadsheets needed.
              </motion.p>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/activities.webp" alt="Roommate expense tracking in The Hisaab - track all shared bills" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== EXPENSE CATEGORIES ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything flatmates share
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Track every kind of shared expense in one place.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Home, title: 'Rent', desc: 'Split monthly rent equally or by room size.', color: 'text-[#2563EB] bg-[#2563EB]/10' },
              { icon: Zap, title: 'Utilities', desc: 'Electricity, water, gas — split by usage or equally.', color: 'text-yellow-400 bg-yellow-500/10' },
              { icon: ShoppingCart, title: 'Groceries & Food', desc: 'Weekly groceries, Swiggy orders, cooking supplies.', color: 'text-emerald-400 bg-emerald-500/10' },
              { icon: Wifi, title: 'WiFi & Subscriptions', desc: 'Internet, Netflix, cleaning service — all tracked.', color: 'text-purple-400 bg-purple-500/10' },
            ].map((item) => {
              const [textColor, bgColor] = item.color.split(' ');
              return (
                <motion.div key={item.title} variants={fadeUp} className="bg-[#0B0B0B] rounded-xl border border-white/5 p-5">
                  <div className={`w-9 h-9 ${bgColor} rounded-lg flex items-center justify-center mb-3`}>
                    <item.icon size={18} className={textColor} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple setup for your flat
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Create a flat group', desc: 'Name it your flat name, add all roommates.' },
              { step: '2', title: 'Log shared expenses', desc: 'Rent paid? Groceries bought? Log it in 5 seconds.' },
              { step: '3', title: 'Settle monthly', desc: 'See exact balances. One simple settlement at month end.' },
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

      {/* ===== NO MORE SPREADSHEETS ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                No more &quot;check the spreadsheet&quot;
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Everyone can see their balance in real-time. No outdated Excel sheets, no WhatsApp arguments, no one &quot;forgetting&quot; what they owe.
              </p>
              <ul className="space-y-3">
                {[
                  'See running balance for each roommate',
                  'Everyone updates in real-time',
                  'Choose who to include in each expense',
                  'Settle up with minimum transfers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="screenshot-phone w-64 rounded-2xl overflow-hidden">
                <Image src="/ss/expense-detail.webp" alt="Expense details - see exactly who owes what" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      <section className="py-10 bg-[#121212] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/splitwise-alternative" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/for/trips" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Trip Expenses</Link>
            <Link href="/for/couples" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Couples</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Flat expenses, finally fair." subheading="Download The Hisaab and split bills with your roommates the easy way." />
    </div>
  );
}
