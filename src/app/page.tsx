'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, ArrowRight, Check, X as XIcon, Smartphone, WifiOff, Users, Clock, Shield, IndianRupee, ChevronDown } from 'lucide-react';
import { createFaqSchema } from '@/lib/schema';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButtons from '@/components/DownloadButtons';
import HeroReel from '@/components/HeroReel';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const faqs = [
  {
    question: 'Is The Hisaab really free forever?',
    answer: 'Yes, The Hisaab is 100% free with no ads, no paywalls, and no hidden fees. All features including unlimited groups, unequal splits, and offline mode are available to everyone.',
  },
  {
    question: 'How is The Hisaab different from Splitwise?',
    answer: 'The Hisaab offers everything Splitwise now charges for — unlimited groups, multiple payers, unequal splits — completely free. Plus, The Hisaab works fully offline, has no ads, and is designed specifically for Indian users with INR-first support.',
  },
  {
    question: 'Does The Hisaab work without internet?',
    answer: 'Yes, The Hisaab works fully offline. You can add expenses, create groups, and view balances without any internet connection. Everything syncs automatically when you\'re back online.',
  },
  {
    question: 'Can I use The Hisaab for splitting rent with roommates?',
    answer: 'Absolutely. The Hisaab is perfect for roommates. Track rent, groceries, utilities, WiFi, and every shared expense. See exactly who owes whom at a glance.',
  },
  {
    question: 'Is my financial data safe with The Hisaab?',
    answer: 'Yes. The Hisaab never sells or shares your data with third parties. Your expense data stays private and you can delete your account and all data at any time.',
  },
  {
    question: 'Can I split expenses unequally?',
    answer: 'Yes. The Hisaab supports equal splits, custom amount splits, and even multiple payers for a single expense — all for free, no premium plan needed.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border border-white/5 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-gray-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </motion.div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqSchema(faqs)) }}
      />
      {/* ===== HEADER ===== */}
      <header className="fixed w-full top-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image src="/logo.webp" alt="The Hisaab - Free expense splitting app" width={36} height={36} className="rounded-xl" />
              <span className="text-xl font-bold text-white tracking-tight">The Hisaab</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How it works</Link>
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="/splitwise-alternative" className="text-sm text-gray-400 hover:text-white transition-colors">Splitwise Alternative</Link>
              <div className="relative group">
                <button className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  Use Cases <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                  <div className="bg-[#121212] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-xl">
                    <p className="px-3 pt-1 pb-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">Use Cases</p>
                    <Link href="/for/trips" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Trip Expenses</Link>
                    <Link href="/for/roommates" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Roommate Bills</Link>
                    <Link href="/for/couples" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Couples</Link>
                    <Link href="/for/office" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Office & Teams</Link>
                    <div className="border-t border-white/5 my-1" />
                    <p className="px-3 pt-1 pb-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">Compare</p>
                    <Link href="/compare/splitwise" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">vs Splitwise</Link>
                    <Link href="/compare/settle-up" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">vs Settle Up</Link>
                    <Link href="/compare/tricount" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">vs Tricount</Link>
                    <div className="border-t border-white/5 my-1" />
                    <Link href="/blog" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Blog & Guides</Link>
                  </div>
                </div>
              </div>
              <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <DownloadButtons variant="compact" />
              </div>
              <button
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-[#121212] border-t border-white/5 py-4 rounded-b-2xl -mx-4 px-4"
            >
              <nav className="flex flex-col space-y-1">
                {[
                  { href: '#how-it-works', label: 'How it works' },
                  { href: '#features', label: 'Features' },
                  { href: '/splitwise-alternative', label: 'Splitwise Alternative' },
                  { href: '/compare/splitwise', label: 'The Hisaab vs Splitwise' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pl-3 pt-1 pb-1">
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Use Cases</p>
                </div>
                {[
                  { href: '/for/trips', label: 'Trip Expenses' },
                  { href: '/for/roommates', label: 'Roommate Bills' },
                  { href: '/for/couples', label: 'Couples' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-2" onClick={() => setIsMenuOpen(false)}>
                  <DownloadButtons variant="compact" className="w-full justify-center" />
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
                Free forever &bull; No ads &bull; Works offline
              </motion.p>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
                Your friends owe you money.
                <br />
                <span className="gradient-text">Now they know it too.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The Hisaab tracks every shared expense, splits bills fairly, and
                shows who owes whom &mdash; so you never have to ask.
              </motion.p>

              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  100% Free
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  No signup wall
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Made in India
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <HeroReel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="wa-chat-container max-w-sm mx-auto">
                <div className="wa-header">
                  <div className="wa-avatar">G</div>
                  <div>
                    <div className="text-sm font-semibold text-[#e9edef]">Goa Trip 2024</div>
                    <div className="text-[11px] text-[#8696a0]">Ravi, Priya, Arjun, +4 others</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-3">
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Ravi</div>
                    Bro maine dinner ke 2400 diye the
                    <div className="wa-time">11:42 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Priya</div>
                    Maine toh Arjun ko de diye??
                    <div className="wa-time">11:44 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-sent">
                    Airbnb kisne pay kiya??
                    <div className="wa-time">11:45 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Arjun</div>
                    Excel bhejo koi pls
                    <div className="wa-time">11:46 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Sneha</div>
                    Koi baat nhi, main adjust kar lungi
                    <div className="wa-time">11:48 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-sent">
                    ...
                    <div className="wa-time">11:49 PM</div>
                  </div>
                  <div className="wa-unread mt-1">147 unread messages</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <p className="text-sm font-medium text-red-400 mb-3 tracking-wide uppercase">Sound familiar?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                You <span className="italic">know</span> your friend owes you.
                <br />
                <span className="text-gray-500">You just can&apos;t say it.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Group trips, shared dinners, splitting rent &mdash; the money
                conversations always get awkward. WhatsApp threads turn into chaos.
                Excel sheets never get updated. Someone always &quot;adjusts.&quot;
              </p>
              <div className="flex items-center gap-2 text-[#2563EB] font-medium">
                <ArrowRight size={18} />
                <span>There&apos;s a better way</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-3 tracking-wide uppercase">
              3 taps. That&apos;s it.
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Splitting expenses shouldn&apos;t be hard
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Create a group, add an expense, and The Hisaab instantly calculates who owes whom. No spreadsheets required.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: 1, img: '/ss/grouplist.webp', alt: 'Create expense groups in The Hisaab - free Splitwise alternative', title: 'Create a group', desc: 'Trip, home, couple \u2014 any scenario. Add friends from your contacts instantly.' },
              { step: 2, img: '/ss/add-exp.webp', alt: 'Add and split expenses in The Hisaab app', title: 'Add expenses', desc: 'Split equally or set custom amounts. Single or multiple payers. Takes 5 seconds.' },
              { step: 3, img: '/ss/group-details.webp', alt: 'View balances and settle up in The Hisaab', title: 'Settle up', desc: 'See every balance at a glance. One-tap settlements with smart recommendations.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="relative mb-6 mx-auto w-fit">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {item.step}
                  </div>
                  <div className="screenshot-phone w-52 mx-auto rounded-2xl overflow-hidden">
                    <Image src={item.img} alt={item.alt} width={220} height={440} className="w-full h-auto" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-3 tracking-wide uppercase">
              Everything you need
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for how Indians actually split money
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#0B0B0B] rounded-2xl border border-white/5 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                  <Users size={20} className="text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Smart groups</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Trips, flatmates, couples, or anything. See who owes what across all your groups at a glance.
                Settled groups auto-hide so you focus on what matters.
              </p>
              <div className="screenshot-phone rounded-xl overflow-hidden max-w-[260px] mx-auto">
                <Image src="/ss/grouplist.webp" alt="The Hisaab groups list showing expense balances" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#0B0B0B] rounded-2xl border border-white/5 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Real-time activity</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Every expense, every settlement, every update &mdash; in one clean feed.
                Filter by group, type, or date. Never miss a transaction.
              </p>
              <div className="screenshot-phone rounded-xl overflow-hidden max-w-[260px] mx-auto">
                <Image src="/ss/activities.webp" alt="Real-time expense activity feed in The Hisaab" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: IndianRupee, title: 'Precise math', description: 'Every paisa accounted for. No rounding errors.', color: 'text-[#2563EB] bg-[#2563EB]/10' },
              { icon: WifiOff, title: 'Works offline', description: "Add expenses anywhere. Syncs when you're back online.", color: 'text-yellow-400 bg-yellow-500/10' },
              { icon: Smartphone, title: 'Instant sync', description: 'Everyone sees updates in real-time across devices.', color: 'text-purple-400 bg-purple-500/10' },
              { icon: Shield, title: 'Privacy first', description: 'Your data stays yours. No tracking, no selling.', color: 'text-emerald-400 bg-emerald-500/10' },
            ].map((feature) => {
              const [textColor, bgColor] = feature.color.split(' ');
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="bg-[#0B0B0B] rounded-xl border border-white/5 p-5"
                >
                  <div className={`w-9 h-9 ${bgColor} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon size={18} className={textColor} />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== EXPENSE DETAIL SHOWCASE ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-medium text-emerald-400 mb-3 tracking-wide uppercase">Full transparency</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Know exactly who owes you.
                <br />
                <span className="text-gray-500">Down to the last rupee.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Every expense shows who paid, how it was split, and your exact
                balance. No more guessing, no more awkward
                &quot;I think you owe me...&quot; conversations.
              </p>
              <ul className="space-y-3">
                {[
                  'See paid-by and split-with for every expense',
                  'Track your exact balance in each group',
                  'Smart settlement suggestions to minimize transfers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <Check size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="screenshot-phone w-64 rounded-2xl overflow-hidden animate-float-slow">
                <Image src="/ss/expense-detail.webp" alt="Detailed expense breakdown showing who paid and who owes" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section id="compare" className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-3 tracking-wide uppercase">
              Why switch?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The alternative that doesn&apos;t charge you
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Other apps started free, then locked features behind paywalls.
              The Hisaab is built different &mdash; free forever, no catch.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#0B0B0B] rounded-2xl border border-white/5 overflow-hidden"
          >
            <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-white/5">
              <div className="p-4 text-gray-400"></div>
              <div className="p-4 text-gray-400">Other apps</div>
              <div className="p-4 text-[#2563EB] bg-[#2563EB]/5">The Hisaab</div>
            </div>
            {[
              { feature: 'Price', others: 'Free trial \u2192 \u20b9200+/mo', hisaab: 'Free forever', highlight: true },
              { feature: 'Ads', others: 'Yes, on free tier', hisaab: 'No ads ever', highlight: false },
              { feature: 'Offline mode', others: 'Limited / No', hisaab: 'Full offline', highlight: false },
              { feature: 'Unlimited groups', others: 'Paid feature', hisaab: 'Unlimited', highlight: true },
              { feature: 'Multiple payers', others: 'Paid feature', hisaab: 'Built-in', highlight: false },
              { feature: 'Unequal splits', others: 'Paid feature', hisaab: 'Built-in', highlight: false },
              { feature: 'Data privacy', others: 'Tracks & sells data', hisaab: 'No tracking', highlight: false },
              { feature: 'Made for India', others: 'Global, not localized', hisaab: 'INR first, desi UX', highlight: true },
            ].map((row) => (
              <div key={row.feature} className="comparison-row grid grid-cols-3 text-center text-sm border-b border-white/5 last:border-0">
                <div className="p-4 text-gray-300 text-left font-medium">{row.feature}</div>
                <div className="p-4 text-gray-500 flex items-center justify-center gap-1.5">
                  <XIcon size={14} className="text-red-400/60" />
                  <span className="hidden sm:inline">{row.others}</span>
                </div>
                <div className={`p-4 flex items-center justify-center gap-1.5 ${row.highlight ? 'text-emerald-400' : 'text-gray-300'} bg-[#2563EB]/5`}>
                  <Check size={14} className="text-emerald-400" />
                  <span className="hidden sm:inline">{row.hisaab}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-[#0B0B0B] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-3 gap-4 text-center"
          >
            {[
              { value: '100%', label: 'Free forever', color: 'text-[#2563EB]' },
              { value: '0', label: 'Hidden fees', color: 'text-emerald-400' },
              { value: '\u221e', label: 'Groups & expenses', color: 'text-white' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <div className={`text-3xl sm:text-4xl font-bold mb-1.5 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-3 tracking-wide uppercase">
              Questions?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 sm:py-28 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Stop adjusting.
              <br />
              <span className="gradient-text">Start splitting.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of Indians who stopped fighting over money
              and started using The Hisaab.
            </motion.p>
            <motion.div variants={fadeUp}>
              <DownloadButtons variant="cta" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-gray-600 mt-5">
              Free download &bull; Works on Android &amp; iOS &bull; No credit card needed
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="bg-[#121212] border-t border-white/5 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <Image src="/logo.webp" alt="The Hisaab" width={28} height={28} className="rounded-lg" />
                <span className="text-lg font-bold">The Hisaab</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Split bills, not friendships. The free expense tracker made for India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-300">Product</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/splitwise-alternative" className="hover:text-white transition-colors">Splitwise Alternative</Link></li>
                <li><Link href="/compare/splitwise" className="hover:text-white transition-colors">The Hisaab vs Splitwise</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-300">Download</h4>
              <DownloadButtons variant="footer-links" />
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-300">Use Cases</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><Link href="/for/trips" className="hover:text-white transition-colors">Trip Expenses</Link></li>
                <li><Link href="/for/roommates" className="hover:text-white transition-colors">Roommate Bills</Link></li>
                <li><Link href="/for/couples" className="hover:text-white transition-colors">Couples</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-300">Contact</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li>
                  <a href="mailto:admin@thehisaab.com" className="hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={14} />
                    admin@thehisaab.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-sm">
              &copy; 2026 The Hisaab. Made with love in India.
            </p>
            <p className="text-gray-600 text-sm">
              Free forever &bull; No ads &bull; Privacy first
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
