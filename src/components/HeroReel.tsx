'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const SLIDES = [
  { id: 'hook', duration: 2800 },
  { id: 'whatsapp', duration: 3200 },
  { id: 'transition', duration: 2200 },
  { id: 'product', duration: 3000 },
  { id: 'settled', duration: 2800 },
];

export default function HeroReel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const progressRef = useRef<(HTMLDivElement | null)[]>([]);
  const startTimeRef = useRef<number>(0);
  const elapsedRef = useRef<number>(0);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const animateProgress = useCallback((index: number) => {
    const duration = SLIDES[index].duration;
    const fill = progressRef.current[index];
    if (!fill) return;

    startTimeRef.current = performance.now() - elapsedRef.current;

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      fill.style.transform = `scaleX(${progress})`;
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    timerRef.current = setTimeout(() => {
      elapsedRef.current = 0;
      setCurrentSlide(index < SLIDES.length - 1 ? index + 1 : 0);
    }, duration - elapsedRef.current);
  }, []);

  useEffect(() => {
    progressRef.current.forEach((fill, i) => {
      if (!fill) return;
      fill.style.transition = 'none';
      fill.style.transform = i < currentSlide ? 'scaleX(1)' : 'scaleX(0)';
    });

    if (isPlaying) {
      animateProgress(currentSlide);
    }

    return clearTimers;
  }, [currentSlide, isPlaying, animateProgress, clearTimers]);

  useEffect(() => {
    const handler = () => {
      if (document.hidden && isPlaying) {
        elapsedRef.current = performance.now() - startTimeRef.current;
        clearTimers();
      } else if (!document.hidden && isPlaying) {
        animateProgress(currentSlide);
      }
    };
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, [isPlaying, currentSlide, animateProgress, clearTimers]);

  const goNext = () => {
    clearTimers();
    elapsedRef.current = 0;
    setCurrentSlide((prev) => (prev < SLIDES.length - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    clearTimers();
    elapsedRef.current = 0;
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="hero-reel-wrapper">
      <div className="hero-reel-phone">
        <div className={`hero-reel-notch ${currentSlide === 3 ? 'hero-reel-notch-hidden' : ''}`} />

        {/* Progress bars */}
        <div className={`hero-reel-progress ${currentSlide === 3 ? 'hero-reel-progress-hidden' : ''}`}>
          {SLIDES.map((_, i) => (
            <div key={i} className="hero-reel-progress-bar">
              <div
                ref={(el) => { progressRef.current[i] = el; }}
                className="hero-reel-progress-fill"
              />
            </div>
          ))}
        </div>

        {/* Tap areas */}
        <div className="hero-reel-tap-left" onClick={goPrev} />
        <div className="hero-reel-tap-right" onClick={goNext} />

        {/* SLIDE 1 — Hook: Emotional gut punch */}
        <div className={`hero-reel-slide hero-reel-slide-hook ${currentSlide === 0 ? 'active' : ''}`}>
          <h2>
            <span className="reel-word" style={{ transitionDelay: '0.05s' }}>YOUR</span><br />
            <span className="reel-word" style={{ transitionDelay: '0.15s' }}>FRIENDS</span><br />
            <span className="reel-word" style={{ transitionDelay: '0.25s' }}>OWE YOU</span><br />
            <span className="reel-word reel-accent" style={{ transitionDelay: '0.4s' }}>&#8377;2,847</span>
          </h2>
          <p className="reel-word reel-hook-sub" style={{ transitionDelay: '0.7s' }}>
            And you&apos;re too nice to ask.
          </p>
        </div>

        {/* SLIDE 2 — WhatsApp Chaos: 4 tight messages + unread */}
        <div className={`hero-reel-slide hero-reel-slide-wa ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="reel-wa-header">
            <div className="reel-wa-avatar">G</div>
            <div>
              <div className="reel-wa-title">Goa Trip 2024</div>
              <div className="reel-wa-sub">Ravi, Priya, Arjun, +5</div>
            </div>
          </div>
          <div className="reel-wa-chat">
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '0.15s' }}>
              <div className="reel-wa-name">Ravi</div>
              Bro maine dinner ke 2400 diye the
              <div className="reel-wa-time">11:42 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '0.35s' }}>
              <div className="reel-wa-name">Priya</div>
              Maine toh Arjun ko de diye??
              <div className="reel-wa-time">11:44 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-sent" style={{ transitionDelay: '0.55s' }}>
              Airbnb kisne pay kiya??
              <div className="reel-wa-time">11:45 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '0.75s' }}>
              <div className="reel-wa-name">Sneha</div>
              Chhodo yaar, main adjust kar lungi
              <div className="reel-wa-time">11:48 PM</div>
            </div>
            <div className="reel-wa-unread" style={{ transitionDelay: '1.0s' }}>147 unread messages</div>
          </div>
        </div>

        {/* SLIDE 3 — Transition: Meet the solution */}
        <div className={`hero-reel-slide hero-reel-slide-meet ${currentSlide === 2 ? 'active' : ''}`}>
          <div className="reel-meet-content">
            <p className="reel-word reel-meet-intro" style={{ transitionDelay: '0.1s' }}>There&apos;s a better way.</p>
            <div className="reel-word reel-meet-logo" style={{ transitionDelay: '0.4s' }}>
              <Image src="/logo.webp" alt="The Hisaab" width={56} height={56} className="rounded-2xl" />
            </div>
            <h2 className="reel-word reel-meet-name" style={{ transitionDelay: '0.6s' }}>The Hisaab</h2>
            <p className="reel-word reel-meet-tagline" style={{ transitionDelay: '0.8s' }}>Split bills, not friendships.</p>
          </div>
        </div>

        {/* SLIDE 4 — Product: Actual app screenshot */}
        <div className={`hero-reel-slide hero-reel-slide-product ${currentSlide === 3 ? 'active' : ''}`}>
          <Image
            src="/ss/grouplist.webp"
            alt="The Hisaab app - all your groups and balances"
            width={375}
            height={750}
            className="reel-product-img"
          />
          <div className="reel-product-overlay">
            <div className="reel-product-badges">
              <span className="reel-word reel-product-badge" style={{ transitionDelay: '0.4s' }}>Free forever</span>
              <span className="reel-word reel-product-badge" style={{ transitionDelay: '0.55s' }}>No ads</span>
              <span className="reel-word reel-product-badge" style={{ transitionDelay: '0.7s' }}>Works offline</span>
            </div>
          </div>
        </div>

        {/* SLIDE 5 — Settled: Satisfaction + value prop */}
        <div className={`hero-reel-slide hero-reel-slide-solution ${currentSlide === 4 ? 'active' : ''}`}>
          <div className="reel-solution-content">
            <div className="reel-check-circle">
              <svg viewBox="0 0 24 24"><polyline points="5 13 10 18 20 6" /></svg>
            </div>
            <div className="reel-settled-text">All Settled</div>
            <div className="reel-settled-names">
              <div className="reel-settled-name" style={{ transitionDelay: '0.5s' }}>Ravi — ✓ Settled</div>
              <div className="reel-settled-name" style={{ transitionDelay: '0.7s' }}>Priya — ✓ Settled</div>
              <div className="reel-settled-name" style={{ transitionDelay: '0.9s' }}>Arjun — ✓ Settled</div>
            </div>
          </div>
          <div className="reel-solution-bottom">
            <p className="reel-word reel-solution-tagline" style={{ transitionDelay: '1.0s' }}>
              No Excel. No awkward texts.<br />Just The Hisaab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
