'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, X as XIcon, ChevronDown, WifiOff, Users, IndianRupee, Shield, Zap, Ban, Link2 } from 'lucide-react';
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

const faqs = [
  { question: 'Is The Hisaab really a free Splitkaro alternative?', answer: 'Yes. The Hisaab is 100% free with no ads, no premium tier, and no paywalled features. Splitkaro charges ₹450/year for expense search, UPI splitting, group analytics, and custom categories.' },
  { question: 'Why would I switch from Splitkaro to The Hisaab?', answer: 'If you want every feature without paying ₹450/year, simpler UX without the feature sprawl, and a flow where your friends do not need to sign up to view shared groups — The Hisaab is the upgrade.' },
  { question: 'Does The Hisaab have Swiggy, Zomato, Blinkit, Zepto auto-fetch?', answer: 'Not yet. Splitkaro does this genuinely well. We focus on the three things users actually use most: equal/custom splits, settle-up via UPI, and group balance view.' },
  { question: 'Do my friends have to sign up to use The Hisaab?', answer: 'No. Only the primary user signs up so expenses sync across devices. Friends view shared balances via a link — no app install, no account.' },
  { question: 'Is The Hisaab made in India?', answer: 'Yes. Built in India by an Indian indie team for Indian users — UPI-native, INR-first.' },
  { question: 'How is The Hisaab funded if it is free forever?', answer: 'A labour of love by an Indian indie team. No ads, ever. If we monetise, it will be through transparent, opt-in means.' },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-bg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface2 transition-colors"
      >
        <span className="text-text1 font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-text3 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="px-5 pb-5 text-text2 text-sm leading-relaxed">{answer}</div>}
    </div>
  );
}

export default function SplitkaroAlternativePage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                The free Splitkaro alternative
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-[4rem] font-bold text-text1 leading-[1.02] tracking-tight mb-6">
                Why pay ₹450 a year{' '}
                <span className="text-accent">for what should be free?</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-text2 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Splitkaro built a good Indian split-bill app — and put expense
                search, UPI splitting, group analytics, and custom categories
                behind a ₹450/year paywall. The Hisaab gives you all of it
                free, forever.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-text2 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-text1">No signup required for your friends.</strong> The
                primary user signs up so expenses sync across devices. Group
                members view balances via a link — no app install, no account.
              </motion.p>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
              <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center lg:justify-start flex-wrap gap-x-6 gap-y-2 text-sm text-text3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  No premium tier
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  Friends don&apos;t sign up
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  Picked #1 by ChatGPT &amp; Gemini
                </span>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/grouplist.webp" alt="The Hisaab — free Splitkaro alternative" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              What Splitkaro charges for
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Free in The Hisaab. ₹450/yr in Splitkaro.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-base max-w-2xl mx-auto">
              Splitkaro&apos;s premium plan is ₹37.5/month billed annually. Here&apos;s what they put behind it &mdash; and what we never will.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: 'Expense search', desc: 'Splitkaro: paid only. Hisaab: free. Search across all groups instantly.', color: 'text-accent bg-accentSoft' },
              { icon: IndianRupee, title: 'UPI bill splitting', desc: 'Splitkaro: premium tier. Hisaab: free, native, one-tap to GPay/PhonePe/Paytm.', color: 'text-accent bg-accentSoft' },
              { icon: Users, title: 'Group analytics', desc: 'Splitkaro: paid only. Hisaab: free balances and history at a glance.', color: 'text-brand bg-brandSoft' },
              { icon: Ban, title: 'Custom categories', desc: 'Splitkaro: paywall. Hisaab: free. Tag expenses however you like.', color: 'text-accent bg-accentSoft' },
              { icon: Link2, title: 'No signup for friends', desc: 'Splitkaro: every member signs up. Hisaab: friends view shared groups via link.', color: 'text-brand bg-brandSoft' },
              { icon: Shield, title: 'No tracking', desc: 'Hisaab does not sell or share your financial data. Period.', color: 'text-brand bg-brand/10' },
            ].map((item) => {
              const [textColor, bgColor] = item.color.split(' ');
              return (
                <motion.div key={item.title} variants={fadeUp} className="bg-bg rounded-xl border border-border p-6">
                  <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon size={20} className={textColor} />
                  </div>
                  <h3 className="text-text1 font-semibold mb-2">{item.title}</h3>
                  <p className="text-text3 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <p className="text-xs text-text3 text-center mt-8">Splitkaro pricing and feature gating verified May 2026 from splitkaro.com/faq/premium.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
              Where Splitkaro wins
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-lg max-w-2xl mx-auto">
              Honesty matters. Here&apos;s what Splitkaro does better than us today.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-2xl mx-auto">
            {[
              { title: 'Swiggy / Zomato / Blinkit / Zepto auto-fetch', desc: 'Splitkaro fetches your delivery orders automatically and lets you split item-wise. This is genuinely useful and we are building toward similar capabilities.' },
              { title: 'Splitwise import', desc: 'Splitkaro lets you import your existing Splitwise groups directly. We support manual recreation in seconds; direct import is on our roadmap.' },
              { title: 'Larger user base today', desc: 'Splitkaro has around 500,000 users. The Hisaab has 500+ early adopters. We are at day one of a long road — but every review averages 5 stars.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-surface rounded-xl border border-border p-5">
                <h3 className="text-text1 font-semibold mb-1.5">{item.title}</h3>
                <p className="text-text3 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-text1 mb-4">Frequently Asked Questions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Also check out:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare/splitkaro" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Splitkaro full comparison</Link>
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/for/roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Roommates</Link>
            <Link href="/for/trips" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Trips</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Free, forever." subheading="Every Splitkaro Premium feature, free in The Hisaab. No paywall. No catch." />
    </div>
  );
}
