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

export default function OfficePage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      {/* HERO */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                For office and teams
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-bold text-text1 leading-[1.02] tracking-tight mb-6">
                Office hisaab.
                <br />
                <span className="text-accent">Without the spreadsheet.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-text2 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Team lunches, client cabs, offsites, supplies. Track every rupee, settle weekly via UPI. No more &ldquo;I&apos;ll send a Google Sheet.&rdquo;
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
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 mb-4 tracking-tight leading-[1.05]">That one <span className="text-accent">tracker</span> in everyone&apos;s head.</motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-lg max-w-2xl mx-auto">
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
              <motion.div key={quote} variants={fadeUp} className="bg-bg rounded-xl border border-border p-5 text-text2 text-sm italic">
                {quote}
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <p className="text-text1 text-lg font-medium">With The Hisaab, everyone always knows where they stand.</p>
          </motion.div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Every office expense, handled
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Utensils, title: 'Team lunches', desc: 'Track daily lunch orders with unequal splits. Settle at the end of the week.', color: 'text-accent bg-accentSoft' },
              { icon: Car, title: 'Client cabs & travel', desc: 'Log shared cabs to client meetings. Know who owes reimbursement.', color: 'text-accent bg-accent/10' },
              { icon: Coffee, title: 'Office supplies', desc: 'Someone bought printer paper or coffee pods? Log it and split fairly.', color: 'text-accent bg-accentSoft' },
              { icon: Receipt, title: 'Team outings & trips', desc: 'Annual retreats, team dinners, offsites — one group for all expenses.', color: 'text-brand bg-brandSoft' },
            ].map((feature) => {
              const [textColor, bgColor] = feature.color.split(' ');
              return (
                <motion.div key={feature.title} variants={fadeUp} className="bg-surface rounded-xl border border-border p-5">
                  <div className={`w-9 h-9 ${bgColor} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon size={18} className={textColor} />
                  </div>
                  <h3 className="font-semibold text-text1 text-sm mb-1">{feature.title}</h3>
                  <p className="text-text3 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 mb-4 tracking-tight leading-[1.05]">Three steps. <span className="text-accent">Friday settled.</span></motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Create an office group', desc: 'Name it "Office Lunches" or "Team Outing" and add your colleagues.' },
              { step: '2', title: 'Add expenses instantly', desc: 'Each time someone pays, add it in 5 seconds with who owes what.' },
              { step: '3', title: 'Settle cleanly', desc: 'See who owes whom. Settle weekly via UPI — no back-and-forth.' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-text1 font-semibold mb-2">{item.title}</h3>
                <p className="text-text3 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4"><>The <span className="text-accent">honest</span> FAQ.</></motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-10 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for/trips" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Trip Expenses</Link>
            <Link href="/for/roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Roommate Bills</Link>
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Your team deserves better than a spreadsheet." subheading="Download The Hisaab and settle office expenses cleanly, every week." />
    </div>
  );
}
