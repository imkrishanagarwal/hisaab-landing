'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronDown, Coffee, Utensils, Car, Receipt } from 'lucide-react';
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
  { question: 'How do I track office lunch expenses with my team?', answer: 'Create a group in The Hisaab called "Office Lunch" and add your teammates. Every time someone orders for the team, add it in seconds. The app tells everyone exactly what they owe — no more awkward "bhai kitna hua mera?" conversations.' },
  { question: 'Can I use The Hisaab for team outings and office trips?', answer: 'Absolutely. Create a separate group for the outing, add all colleagues, and track every expense — hotel, dinner, cab, activities. The Hisaab calculates the most efficient way to settle up with the fewest transfers.' },
  { question: 'What if different people order different amounts every day?', answer: 'The Hisaab supports unequal splits. Set exact amounts per person for every order, and balances accumulate over time. Settle up weekly or monthly — whenever it makes sense for your team.' },
  { question: 'Is The Hisaab free for office use?', answer: 'Yes, 100% free with no limits. Add as many colleagues as you want, track as many expenses as you need. No subscription, no premium plan required.' },
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

export default function OfficePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* HERO */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
                For Office & Teams
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Track office expenses
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">without the chaos.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Team lunches, client dinners, office trips, shared supplies — track every rupee across your team and settle cleanly, weekly or monthly.
              </motion.p>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/group-details.webp" alt="Track office team expenses in The Hisaab" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATABLE SCENARIO */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">Sound familiar?</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every office has that one person who keeps track in their head. Until they forget.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-5 mb-12">
            {[
              '"Bhai, aaj lunch ka kitna hua mera?"',
              '"Rohit ne pichle teen baar pay kiya, ab meri baari hai"',
              '"Office trip ka hisaab abhi tak clear nahi hua"',
              '"Spreadsheet main daal dena, main evening mein dekhta hun"',
            ].map((quote) => (
              <motion.div key={quote} variants={fadeUp} className="bg-[#0B0B0B] rounded-xl border border-white/5 p-5 text-gray-400 text-sm italic">
                {quote}
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <p className="text-white text-lg font-medium">With The Hisaab, everyone always knows where they stand.</p>
          </motion.div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Every office expense, handled
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Utensils, title: 'Team lunches', desc: 'Track daily lunch orders with unequal splits. Settle at the end of the week.', color: 'text-orange-400 bg-orange-500/10' },
              { icon: Car, title: 'Client cabs & travel', desc: 'Log shared cabs to client meetings. Know who owes reimbursement.', color: 'text-[#2563EB] bg-[#2563EB]/10' },
              { icon: Coffee, title: 'Office supplies', desc: 'Someone bought printer paper or coffee pods? Log it and split fairly.', color: 'text-yellow-400 bg-yellow-500/10' },
              { icon: Receipt, title: 'Team outings & trips', desc: 'Annual retreats, team dinners, offsites — one group for all expenses.', color: 'text-emerald-400 bg-emerald-500/10' },
            ].map((feature) => {
              const [textColor, bgColor] = feature.color.split(' ');
              return (
                <motion.div key={feature.title} variants={fadeUp} className="bg-[#121212] rounded-xl border border-white/5 p-5">
                  <div className={`w-9 h-9 ${bgColor} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon size={18} className={textColor} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">How it works</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Create an office group', desc: 'Name it "Office Lunches" or "Team Outing" and add your colleagues.' },
              { step: '2', title: 'Add expenses instantly', desc: 'Each time someone pays, add it in 5 seconds with who owes what.' },
              { step: '3', title: 'Settle cleanly', desc: 'See who owes whom. Settle weekly via UPI — no back-and-forth.' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-10 bg-[#121212] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for/trips" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Trip Expenses</Link>
            <Link href="/for/roommates" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Roommate Bills</Link>
            <Link href="/splitwise-alternative" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Your team deserves better than a spreadsheet." subheading="Download The Hisaab and settle office expenses cleanly, every week." />
    </div>
  );
}
