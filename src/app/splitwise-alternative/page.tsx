'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, X as XIcon, ChevronDown, WifiOff, Users, IndianRupee, Shield, Zap, Ban } from 'lucide-react';
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
  { question: 'Is The Hisaab really a free Splitwise alternative?', answer: 'Yes. The Hisaab is 100% free with no ads, no paywalls, and no hidden fees. Every feature — unlimited groups, unequal splits, multiple payers, offline mode — is available to all users for free, forever.' },
  { question: 'Can I switch from Splitwise to The Hisaab?', answer: 'Yes! Simply download The Hisaab and start adding your groups and expenses. The Hisaab works independently and you can start using it alongside or instead of Splitwise right away.' },
  { question: 'Does The Hisaab have a daily expense limit like Splitwise?', answer: 'No. Unlike Splitwise which limits free users to 3 expenses per day, The Hisaab has no limits whatsoever. Add as many expenses as you want, anytime.' },
  { question: 'Does The Hisaab show ads like Splitwise free?', answer: 'No. The Hisaab has zero ads. No banner ads, no video ads, no unskippable ads. Ever.' },
  { question: 'Does The Hisaab work offline?', answer: 'Yes. The Hisaab works fully offline — add expenses, create groups, view balances without internet. Everything syncs automatically when you reconnect.' },
  { question: 'Is The Hisaab available on both Android and iOS?', answer: 'Yes. The Hisaab is available as a free download on both the Google Play Store (Android) and the Apple App Store (iOS).' },
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

export default function SplitwiseAlternativePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
                Free Splitwise Alternative
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                Everything Splitwise charges&nbsp;for.
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">Completely free.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The Hisaab is the best free alternative to Splitwise. Unlimited groups, unequal splits, multiple payers, offline mode &mdash; all free, no ads, made for India.
              </motion.p>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
              <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  No daily limits
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  No ads
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  No paywall
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/grouplist.webp" alt="The Hisaab app - free Splitwise alternative showing group expenses" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY PEOPLE ARE SWITCHING ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-sm font-medium text-red-400 mb-3 tracking-wide uppercase">
              Why people are switching
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Splitwise isn&apos;t free anymore
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Splitwise introduced daily limits, unskippable ads, and a paywall for features that used to be free. Thousands of users are looking for a better option.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Ban, title: '3 expenses/day limit', desc: 'Splitwise free users can only add 3 expenses per day. The Hisaab has no limits.', color: 'text-red-400 bg-red-500/10' },
              { icon: Zap, title: '10-second unskippable ads', desc: 'Splitwise forces you to watch ads before adding expenses. The Hisaab has zero ads.', color: 'text-red-400 bg-red-500/10' },
              { icon: IndianRupee, title: '₹999/year for premium', desc: 'Splitwise Pro costs ₹999/year for features The Hisaab gives you free.', color: 'text-red-400 bg-red-500/10' },
            ].map((item) => {
              const [textColor, bgColor] = item.color.split(' ');
              return (
                <motion.div key={item.title} variants={fadeUp} className="bg-[#0B0B0B] rounded-xl border border-white/5 p-6">
                  <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon size={20} className={textColor} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Hisaab vs Splitwise
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              See why The Hisaab is the better choice for splitting expenses in India.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-white/5">
              <div className="p-4 text-gray-400">Feature</div>
              <div className="p-4 text-gray-400">Splitwise</div>
              <div className="p-4 text-[#2563EB] bg-[#2563EB]/5">The Hisaab</div>
            </div>
            {[
              { feature: 'Price', splitwise: '₹999/year (Pro)', hisaab: 'Free forever', highlight: true },
              { feature: 'Daily expense limit', splitwise: '3/day on free', hisaab: 'Unlimited', highlight: true },
              { feature: 'Ads', splitwise: '10-sec unskippable', hisaab: 'No ads ever', highlight: false },
              { feature: 'Unlimited groups', splitwise: 'Paid only', hisaab: 'Yes, free', highlight: true },
              { feature: 'Multiple payers', splitwise: 'Paid only', hisaab: 'Yes, free', highlight: false },
              { feature: 'Unequal splits', splitwise: 'Paid only', hisaab: 'Yes, free', highlight: false },
              { feature: 'Offline mode', splitwise: 'Limited', hisaab: 'Full offline', highlight: false },
              { feature: 'Made for India', splitwise: 'Global app', hisaab: 'INR-first, desi UX', highlight: true },
              { feature: 'Data privacy', splitwise: 'Tracks data', hisaab: 'No tracking', highlight: false },
              { feature: 'Real-time sync', splitwise: 'Yes', hisaab: 'Yes', highlight: false },
            ].map((row) => (
              <div key={row.feature} className="comparison-row grid grid-cols-3 text-center text-sm border-b border-white/5 last:border-0">
                <div className="p-4 text-gray-300 text-left font-medium">{row.feature}</div>
                <div className="p-4 text-gray-500 flex items-center justify-center gap-1.5">
                  <XIcon size={14} className="text-red-400/60" />
                  <span className="hidden sm:inline">{row.splitwise}</span>
                </div>
                <div className={`p-4 flex items-center justify-center gap-1.5 ${row.highlight ? 'text-emerald-400' : 'text-gray-300'} bg-[#2563EB]/5`}>
                  <Check size={14} className="text-emerald-400" />
                  <span className="hidden sm:inline">{row.hisaab}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/compare/splitwise" className="text-[#2563EB] hover:text-[#60a5fa] text-sm font-medium transition-colors">
              See full detailed comparison &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What you get with The Hisaab
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users, title: 'Unlimited groups', desc: 'Trips, flatmates, couples — create as many groups as you need. No limits, no premium plan required.', color: 'text-[#2563EB] bg-[#2563EB]/10' },
              { icon: IndianRupee, title: 'Unequal splits & multiple payers', desc: 'Split by exact amounts or let multiple people pay for one expense. Perfect for real-world scenarios.', color: 'text-emerald-400 bg-emerald-500/10' },
              { icon: WifiOff, title: 'Full offline mode', desc: 'Add expenses anywhere — even without internet. Everything syncs automatically when you reconnect.', color: 'text-yellow-400 bg-yellow-500/10' },
              { icon: Shield, title: 'Privacy first', desc: 'Your data stays yours. We never sell, share, or track your financial information.', color: 'text-purple-400 bg-purple-500/10' },
              { icon: Zap, title: 'Fast & lightweight', desc: 'Built with performance in mind. No bloat, instant load times, smooth animations.', color: 'text-orange-400 bg-orange-500/10' },
              { icon: Ban, title: 'No ads, no paywalls', desc: 'Zero ads. Zero premium tiers. Every feature available to every user, free forever.', color: 'text-red-400 bg-red-500/10' },
            ].map((feature) => {
              const [textColor, bgColor] = feature.color.split(' ');
              return (
                <motion.div key={feature.title} variants={fadeUp} className="bg-[#0B0B0B] rounded-xl border border-white/5 p-6">
                  <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon size={20} className={textColor} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== APP SCREENSHOTS ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              See it in action
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg">
              Clean, intuitive design that makes expense splitting effortless.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { src: '/ss/grouplist.webp', alt: 'The Hisaab groups list - track all shared expenses' },
              { src: '/ss/add-exp.webp', alt: 'Add and split expenses in The Hisaab' },
              { src: '/ss/group-details.webp', alt: 'Group expense details and balances' },
              { src: '/ss/expense-detail.webp', alt: 'Detailed expense breakdown - who paid and who owes' },
            ].map((img) => (
              <motion.div key={img.src} variants={fadeUp} className="screenshot-phone rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} width={260} height={520} className="w-full h-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect for every situation
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Group trips', desc: 'Goa with friends, family vacations, weekend getaways. Split hotels, food, travel, and more.', href: '/for/trips' },
              { title: 'Roommates', desc: 'Rent, groceries, utilities, WiFi, Swiggy orders. Track every shared expense with your flatmates.', href: '/for/roommates' },
              { title: 'Couples', desc: 'Dinners, rent, vacations together. Keep things fair without awkward money conversations.', href: '/for/couples' },
            ].map((useCase) => (
              <motion.div key={useCase.title} variants={fadeUp}>
                <Link href={useCase.href} className="block bg-[#0B0B0B] rounded-xl border border-white/5 p-6 hover:border-[#2563EB]/30 transition-colors">
                  <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{useCase.desc}</p>
                  <span className="text-[#2563EB] text-sm font-medium">Learn more &rarr;</span>
                </Link>
              </motion.div>
            ))}
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
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      <SeoPageFooter heading="Ditch the paywall." subheading="Switch to The Hisaab — the free Splitwise alternative that actually stays free." />
    </div>
  );
}
