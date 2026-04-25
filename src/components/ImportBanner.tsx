'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { EASE, fadeUp, stagger } from '@/lib/motion';

const IMPORT_ITEMS = ['Groups', 'Members', 'Balances', 'History'];

export default function ImportBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger(0.05, 0.1)}
      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-bg to-surface p-6 sm:p-10"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #2563EB22 0%, transparent 50%), radial-gradient(circle at 70% 70%, #10b98122 0%, transparent 50%)',
        }}
      />

      <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div variants={fadeUp}>
          <p className="text-sm font-medium text-[#2563EB] mb-3 tracking-wide uppercase">
            Coming from Splitwise or Splitkaro?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text1 mb-4 leading-tight">
            Don&apos;t rebuild.
            <br />
            <span className="gradient-text">Import in one tap.</span>
          </h2>
          <p className="text-text2 text-base leading-relaxed mb-6">
            Four years of groups. Twenty-eight friends. Balances going back to that Manali trip in 2022. We know. Bring it all over &mdash; nothing gets left behind.
          </p>

          <motion.ul variants={stagger(0.1, 0.08)} className="grid grid-cols-2 gap-2.5">
            {IMPORT_ITEMS.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-center gap-2 text-sm text-text2"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-emerald-400" strokeWidth={3} />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-7 flex items-center gap-2 text-[#2563EB] font-medium text-sm">
            <span>Takes about 8 seconds</span>
            <ArrowRight size={15} />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative h-[220px] sm:h-[260px] flex items-center justify-center">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between">
              <SourceLogo label="Splitwise" tint="from-green-500/20 to-green-500/5" />

              <div className="flex-1 relative mx-3 h-8">
                <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 -translate-y-1/2" />
                {!shouldReduceMotion &&
                  [0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2563EB]"
                      initial={{ left: '0%', opacity: 0 }}
                      animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: EASE,
                        times: [0, 0.1, 0.9, 1],
                      }}
                      style={{ boxShadow: '0 0 8px rgba(37, 99, 235, 0.8)' }}
                    />
                  ))}
              </div>

              <DestinationLogo />
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="text-xs text-text3 tracking-wide">or</div>
            </div>

            <div className="mt-3 flex items-center justify-between opacity-70">
              <SourceLogo label="Splitkaro" tint="from-orange-500/20 to-orange-500/5" />
              <div className="flex-1 relative mx-3 h-6">
                <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-white/5 via-white/15 to-white/5 -translate-y-1/2" />
              </div>
              <DestinationLogo small />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SourceLogo({ label, tint }: { label: string; tint: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tint} border border-border flex items-center justify-center`}>
        <span className="text-xs font-bold text-text1">{label[0]}</span>
      </div>
      <span className="text-[11px] text-text3">{label}</span>
    </div>
  );
}

function DestinationLogo({ small = false }: { small?: boolean }) {
  const size = small ? 48 : 56;
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-2xl border border-[#2563EB]/40 flex items-center justify-center bg-[#2563EB]/10"
        style={{ width: size, height: size, boxShadow: '0 0 24px rgba(37, 99, 235, 0.25)' }}
      >
        <Image src="/logo.webp" alt="The Hisaab" width={size - 16} height={size - 16} className="rounded-lg" />
      </div>
      <span className="text-[11px] text-[#2563EB] font-medium">The Hisaab</span>
    </div>
  );
}
