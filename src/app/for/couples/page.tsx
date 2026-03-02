'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Heart, Shield, Eye, IndianRupee } from 'lucide-react';
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
  { question: 'How do couples use Hisaab?', answer: 'Create a private group for just the two of you. Log shared expenses like dinners, rent, groceries, and vacations. Hisaab tracks the running balance so things stay fair — without awkward conversations.' },
  { question: 'Is my data private?', answer: 'Yes. Only people in your group can see the expenses. Hisaab never shares or sells your data. Your financial information stays between you and your partner.' },
  { question: 'Do we both need to download the app?', answer: 'Ideally yes — both partners can then add expenses and see balances in real-time. But one person can track everything solo too.' },
  { question: 'Can we split things unevenly?', answer: 'Yes. If one person earns more or you want to split by percentage, you can set custom amounts for each expense.' },
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

export default function CouplesPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
                For Couples
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Share expenses,
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">not arguments.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Track shared expenses with your partner without awkward money conversations. Hisaab keeps things fair, transparent, and private.
              </motion.p>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/expense-detail.webp" alt="Couple expense tracking in Hisaab - fair and transparent" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SCENARIOS ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Every couple shares expenses
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you&apos;re dating, living together, or married — money shouldn&apos;t be awkward.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: 'Dinners & dates', desc: 'Who paid last time? Track it without keeping mental tabs.', color: 'text-red-400 bg-red-500/10' },
              { icon: IndianRupee, title: 'Rent & bills', desc: 'Split rent, electricity, WiFi fairly each month.', color: 'text-[#2563EB] bg-[#2563EB]/10' },
              { icon: Eye, title: 'Full transparency', desc: 'Both partners see every expense and the running balance.', color: 'text-emerald-400 bg-emerald-500/10' },
              { icon: Shield, title: 'Completely private', desc: 'Only you two see the data. We never share it.', color: 'text-purple-400 bg-purple-500/10' },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Keep it simple
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Create a couple group', desc: 'Just the two of you. Private and secure.' },
              { step: '2', title: 'Log expenses', desc: 'Dinner? Groceries? Vacation? Log who paid.' },
              { step: '3', title: 'Stay balanced', desc: 'See your running balance. Settle up when it feels right.' },
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

      {/* ===== FAIRNESS ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Fair doesn&apos;t mean 50/50
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Maybe one of you earns more. Maybe you take turns. Whatever works for your relationship,
                Hisaab supports it with flexible splitting — equal, percentage, or custom amounts.
              </p>
              <ul className="space-y-3">
                {[
                  'Split equally or by custom amounts',
                  'Track who pays more over time',
                  'Settle up however often you want',
                  'No judgment, just math',
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
                <Image src="/ss/add-exp.webp" alt="Custom expense splitting for couples in Hisaab" width={260} height={520} className="w-full h-auto" />
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
            <Link href="/for/roommates" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Roommate Bills</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Money talk, simplified." subheading="Download Hisaab and share expenses with your partner the easy way." />
    </div>
  );
}
