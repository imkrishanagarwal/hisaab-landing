'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useTransform, animate } from 'framer-motion';
import { IndianRupee, RotateCcw, UserPlus, Check } from 'lucide-react';
import { EASE, fadeUp, popIn, stagger } from '@/lib/motion';

type TheatreState = 'empty' | 'members' | 'added' | 'split';

const MEMBERS = [
  { name: 'You', color: 'bg-accent', isMe: true },
  { name: 'Priya', color: 'bg-pink-500', isMe: false },
  { name: 'Arjun', color: 'bg-brand', isMe: false },
  { name: 'Sneha', color: 'bg-amber-500', isMe: false },
];

const EXPENSE_TOTAL = 1200;
const PER_PERSON = EXPENSE_TOTAL / MEMBERS.length;

export default function FeatureTheatre() {
  const [state, setState] = useState<TheatreState>('empty');

  const next = () => {
    setState((s) => {
      if (s === 'empty') return 'members';
      if (s === 'members') return 'added';
      if (s === 'added') return 'split';
      return s;
    });
  };

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-brand/15 blur-xl opacity-60 pointer-events-none" />
      <div className="relative bg-gradient-to-b from-surface to-bg rounded-3xl border border-border p-6 sm:p-8 max-w-md mx-auto shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[11px] text-accent uppercase tracking-[0.15em] font-semibold mb-1">Try it live</div>
            <div className="text-base font-semibold text-text1">Goa Trip 2024</div>
          </div>
          {state !== 'empty' && (
            <button
              onClick={() => setState('empty')}
              className="text-text3 hover:text-text1 transition-colors p-1.5 rounded-lg hover:bg-surface2"
              aria-label="Reset demo"
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>

        <MembersBlock state={state} onAdd={next} />
        <ExpenseBlock state={state} onAdd={next} />
        <ActionBlock state={state} onSplit={next} />

        <StepIndicator state={state} />
      </div>
    </div>
  );
}

function MembersBlock({ state, onAdd }: { state: TheatreState; onAdd: () => void }) {
  return (
    <div className="mb-3 min-h-[92px]">
      <AnimatePresence mode="wait">
        {state === 'empty' ? (
          <motion.button
            key="add-members"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onAdd}
            className="w-full py-5 border-2 border-dashed border-border rounded-xl text-text3 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all flex items-center justify-center gap-2 text-sm font-medium"
          >
            <UserPlus size={16} />
            Tap to add friends
          </motion.button>
        ) : (
          <motion.div
            key="members-list"
            variants={stagger(0, 0.08)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 py-2"
          >
            {MEMBERS.map((m) => (
              <motion.div key={m.name} variants={popIn} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-11 h-11 rounded-full ${m.color} flex items-center justify-center text-surface font-semibold text-sm shadow-lg ${m.isMe ? 'ring-2 ring-accent/40 ring-offset-2 ring-offset-surface' : ''}`}
                >
                  {m.isMe ? 'Y' : m.name[0]}
                </div>
                <span className={`text-[10px] ${m.isMe ? 'text-accent font-semibold' : 'text-text2'}`}>{m.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExpenseBlock({ state, onAdd }: { state: TheatreState; onAdd: () => void }) {
  return (
    <div className="mb-3 min-h-[72px]">
      <AnimatePresence mode="wait">
        {state === 'members' && (
          <motion.button
            key="add-expense"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={onAdd}
            className="w-full py-3.5 bg-accent text-surface rounded-xl font-semibold text-sm hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <IndianRupee size={15} />
            Add ₹1,200 dinner
          </motion.button>
        )}
        {(state === 'added' || state === 'split') && (
          <motion.div
            key="expense"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex items-center gap-3 p-3.5 bg-surface2 border border-border rounded-xl"
          >
            <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center">
              <IndianRupee size={16} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-text1 font-medium">Dinner at Martin&apos;s</div>
              <div className="text-[11px] text-text3">You paid · split 4 ways</div>
            </div>
            <div className="text-base font-bold text-text1">₹1,200</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ActionBlock({ state, onSplit }: { state: TheatreState; onSplit: () => void }) {
  return (
    <div className="min-h-[180px]">
      <AnimatePresence mode="wait">
        {state === 'added' && (
          <motion.button
            key="split-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={onSplit}
            className="w-full py-3.5 bg-brand text-surface rounded-xl font-semibold text-sm hover:bg-secondary-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Check size={15} strokeWidth={2.5} />
            Split equally
          </motion.button>
        )}
        {state === 'split' && (
          <motion.div
            key="balances"
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            <motion.div variants={fadeUp} className="text-[11px] text-brand font-semibold uppercase tracking-wider mb-1">
              Balances
            </motion.div>
            {MEMBERS.filter((m) => !m.isMe).map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="flex items-center justify-between p-3 bg-brandSoft border border-brand/20 rounded-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full ${m.color} flex items-center justify-center text-surface text-xs font-semibold`}>
                    {m.name[0]}
                  </div>
                  <span className="text-sm text-text2">
                    {m.name} owes you
                  </span>
                </div>
                <CountUpRupee target={PER_PERSON} />
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="flex items-center justify-between pt-2 px-1">
              <span className="text-xs text-text3">Your share</span>
              <span className="text-xs text-text2 tabular-nums">₹{PER_PERSON}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CountUpRupee({ target }: { target: number }) {
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(shouldReduceMotion ? target : 0);
  const display = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 0.7, ease: [...EASE] });
    return () => controls.stop();
  }, [target, shouldReduceMotion, count]);

  return (
    <span className="text-sm font-bold text-brand tabular-nums">
      ₹<motion.span>{display}</motion.span>
    </span>
  );
}

function StepIndicator({ state }: { state: TheatreState }) {
  const steps: TheatreState[] = ['empty', 'members', 'added', 'split'];
  const activeIdx = steps.indexOf(state);

  return (
    <div className="flex items-center justify-center gap-1.5 mt-6 pt-5 border-t border-border">
      {steps.map((s, i) => (
        <div
          key={s}
          className={`h-1 rounded-full transition-all duration-300 ${
            i === activeIdx
              ? 'w-6 bg-accent'
              : i < activeIdx
                ? 'w-1.5 bg-brand'
                : 'w-1.5 bg-surface2'
          }`}
        />
      ))}
      <span className="ml-2 text-[10px] text-text3 uppercase tracking-wider">
        {state === 'empty' && 'Start'}
        {state === 'members' && 'Add expense'}
        {state === 'added' && 'Split it'}
        {state === 'split' && 'Done in 3 taps'}
      </span>
    </div>
  );
}
