'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronDown, Plane, WifiOff, Users, IndianRupee } from 'lucide-react';
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
  { question: 'How do I split trip expenses with friends?', answer: 'Download The Hisaab, create a group for your trip, and add expenses as they happen. The Hisaab automatically calculates who owes whom. Works offline too — perfect for remote destinations.' },
  { question: 'Can I add expenses without internet during a trip?', answer: 'Yes. The Hisaab works fully offline. Add all your expenses during the trip and they sync automatically when you get internet access.' },
  { question: 'How do I handle unequal splitting on trips?', answer: 'The Hisaab supports custom amounts for each person. If someone didn\'t join dinner or someone paid more, you can set exact amounts per person — all for free.' },
  { question: 'What if multiple people paid for one expense?', answer: 'The Hisaab supports multiple payers. If two people split a hotel bill, you can record both as payers with their exact amounts.' },
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

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
              <motion.p variants={fadeUp} className="text-sm font-medium text-[#2563EB] mb-4 tracking-wide uppercase">
                For Group Trips
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Split trip expenses
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#60a5fa] bg-clip-text text-transparent">without the drama.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Goa with the squad? Family vacation? Weekend road trip? Add expenses as they happen and The Hisaab handles the math &mdash; even without internet.
              </motion.p>
              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="screenshot-phone animate-float-slow w-full max-w-xs mx-auto">
                <Image src="/ss/group-details.webp" alt="Trip expense tracking in The Hisaab - see who owes whom" width={400} height={800} className="w-full h-auto" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TRIP SCENARIO ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sound familiar?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every group trip ends the same way &mdash; a chaotic WhatsApp thread about who paid for what.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-5 mb-12">
            {[
              '"Bro, Airbnb kisne pay kiya?"',
              '"Maine dinner ke 2400 diye the, adjust kar lena"',
              '"Excel bhejo koi please"',
              '"Chhodo yaar, main adjust kar lungi"',
            ].map((quote) => (
              <motion.div key={quote} variants={fadeUp} className="bg-[#0B0B0B] rounded-xl border border-white/5 p-5 text-gray-400 text-sm italic">
                {quote}
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <p className="text-white text-lg font-medium">With The Hisaab, none of this happens.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY HISAAB FOR TRIPS ===== */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why The Hisaab is perfect for trips
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: WifiOff, title: 'Works offline', desc: 'No signal in the mountains? Add expenses anyway. Syncs later.', color: 'text-yellow-400 bg-yellow-500/10' },
              { icon: Users, title: 'Any group size', desc: 'From couples to 20+ friends. No limits on group members.', color: 'text-[#2563EB] bg-[#2563EB]/10' },
              { icon: IndianRupee, title: 'Unequal splits', desc: 'Not everyone eats the same or stays the same rooms. Split any way.', color: 'text-emerald-400 bg-emerald-500/10' },
              { icon: Plane, title: 'All expenses in one place', desc: 'Hotels, food, transport, activities — everything tracked in one group.', color: 'text-purple-400 bg-purple-500/10' },
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

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 sm:py-24 bg-[#121212]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How it works
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '1', img: '/ss/grouplist.webp', alt: 'Create a trip group in The Hisaab', title: 'Create a trip group', desc: 'Name it "Goa 2026" and add your friends.' },
              { step: '2', img: '/ss/add-exp.webp', alt: 'Add trip expenses as they happen', title: 'Add expenses on the go', desc: 'Hotel, dinner, cab — add each expense in 5 seconds.' },
              { step: '3', img: '/ss/expense-detail.webp', alt: 'See who owes whom after the trip', title: 'Settle after the trip', desc: 'See exact balances and settle with minimum transfers.' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="relative mb-6 mx-auto w-fit">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {item.step}
                  </div>
                  <div className="screenshot-phone w-48 mx-auto rounded-2xl overflow-hidden">
                    <Image src={item.img} alt={item.alt} width={200} height={400} className="w-full h-auto" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
            <Link href="/for/roommates" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Roommate Bills</Link>
            <Link href="/for/couples" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Couples</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Your next trip, sorted." subheading="Download The Hisaab and never fight over trip expenses again." />
    </div>
  );
}
