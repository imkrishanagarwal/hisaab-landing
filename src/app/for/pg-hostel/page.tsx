'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Home, Utensils, Users, IndianRupee } from 'lucide-react';
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
  { question: 'How do I split mess and PG expenses with hostel-mates?', answer: 'Create a group in The Hisaab for your PG or hostel. Add mess fees, water, electricity, common groceries, and any shared expense. The Hisaab calculates each person\'s running balance.' },
  { question: 'What if someone joins or leaves the PG mid-month?', answer: 'You can add or remove members from a group at any time. Past expenses stay attached to whoever was in the group then. New members only share future expenses.' },
  { question: 'How do I split mess if some people skipped meals?', answer: 'Use unequal splits — set custom amounts per person on any expense. If three of four people ate Tuesday\'s dinner, split it among those three only. All free.' },
  { question: 'Can I track the security deposit?', answer: 'Yes. Log it as a one-time expense paid by whoever fronted it. The Hisaab carries the balance forward until the deposit is refunded or split.' },
  { question: 'Why is The Hisaab better than a WhatsApp group spreadsheet?', answer: 'Spreadsheets get outdated. WhatsApp messages scroll away. The Hisaab keeps a real running balance everyone can see — and friends can view via a link without signing up.' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-surface2 transition-colors">
        <span className="text-text1 font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-text3 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} aria-hidden={!isOpen}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-text2 text-sm leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
}

export default function PgHostelPage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                For PG and hostel groups
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-[3.5rem] font-bold text-text1 leading-[1.05] tracking-tight mb-6">
                Mess fees. Mess of math.{' '}
                <span className="text-accent">Sorted.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-text2 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Split mess, rent, water, electricity, and shared groceries with
                hostel-mates and PG-mates. Real running balances. Custom splits
                for skipped meals. Settle via UPI in one tap.
              </motion.p>
              <motion.figure variants={fadeUp} className="mb-7 max-w-lg mx-auto lg:mx-0 border-l-2 border-accent pl-4 text-left">
                <blockquote className="text-base sm:text-[17px] text-text2 italic leading-snug">
                  &ldquo;Unlike Splitwise, it&apos;s not that complicated to use. Must-have app for the ones who stay in PGs!&rdquo;
                </blockquote>
                <figcaption className="mt-1.5 text-xs text-text3">
                  — Harshit Gupta, Play Store · ★★★★★
                </figcaption>
              </motion.figure>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/grouplist.webp" alt="The Hisaab — PG and hostel expense tracker" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Everything a PG group splits
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-base max-w-2xl mx-auto">
              Built around how Indian PGs and hostels actually share money.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Utensils, title: 'Mess fees', desc: 'Per-meal or monthly. Adjust for skipped meals with custom splits.', color: 'text-accent bg-accentSoft' },
              { icon: Home, title: 'Rent + utilities', desc: 'Monthly rent, water, electricity, internet — recurring or one-off.', color: 'text-brand bg-brandSoft' },
              { icon: IndianRupee, title: 'Security deposit', desc: 'Track who paid the deposit so it\'s clear at move-out.', color: 'text-accent bg-accent/10' },
              { icon: Users, title: 'Common groceries', desc: 'Tea, sugar, snacks, cleaning supplies — split fairly.', color: 'text-brand bg-brand/10' },
            ].map((item) => {
              const [textColor, bgColor] = item.color.split(' ');
              return (
                <motion.div key={item.title} variants={fadeUp} className="bg-bg rounded-xl border border-border p-5">
                  <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <item.icon size={20} className={textColor} />
                  </div>
                  <h3 className="font-semibold text-text1 mb-1.5">{item.title}</h3>
                  <p className="text-text3 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Why hostel groups switch to The Hisaab
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 leading-relaxed mb-4">
              PGs and hostels are special: 5–15 people in one place, mid-month
              joining and leaving, attendance-variable mess, recurring rent,
              and a wide spread of incomes. WhatsApp groups and shared sheets
              fall apart fast.
            </motion.p>
            <motion.p variants={fadeUp} className="text-text2 leading-relaxed mb-4">
              The Hisaab solves this with three things:
            </motion.p>
            <motion.ul variants={fadeUp} className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-4">
              <li>
                <strong className="text-text1">Custom splits per expense</strong>{' '}
                — for mess attendance variations, only-some-people groceries,
                room-specific bills.
              </li>
              <li>
                <strong className="text-text1">Friends view via link, no signup</strong>{' '}
                — only the primary user signs up so data syncs across devices.
                Hostel-mates see balances without installing anything.
              </li>
              <li>
                <strong className="text-text1">Offline-first</strong> — for
                hostels with patchy WiFi or coliving spaces with bad cell
                signal. Add expenses anywhere; they sync when online.
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">Frequently asked questions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for/roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Roommates</Link>
            <Link href="/for/trips" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Trips</Link>
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/blog/how-to-split-rent-with-roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">How to split rent</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Mess sorted. Money sorted." subheading="Free forever. Works offline. Made for Indian PGs and hostels." />
    </div>
  );
}
