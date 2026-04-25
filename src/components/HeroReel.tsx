'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

/**
 * HeroReel — 4-slide app workflow that mirrors the real v3 user journey.
 *
 *   1. Home       — see your balance, browse active groups
 *   2. Add expense— ₹450 with smart split, save in seconds
 *   3. Settle     — settlement-complete choreography (check + stats)
 *   4. Done       — brand close: "Owe no one. Lose no friend."
 *
 * Each slide is real Warm Ledger UI, not a flat screenshot. Slides cross-fade
 * via the existing .hero-reel-slide / .active CSS.
 */

const SLIDES = [
  { id: 'home',    duration: 3600 },
  { id: 'add',     duration: 4000 },
  { id: 'settle',  duration: 3200 },
  { id: 'done',    duration: 2800 },
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
        <div className="hero-reel-notch" />

        <div className="hero-reel-progress">
          {SLIDES.map((_, i) => (
            <div key={i} className="hero-reel-progress-bar">
              <div
                ref={(el) => { progressRef.current[i] = el; }}
                className="hero-reel-progress-fill"
              />
            </div>
          ))}
        </div>

        <div className="hero-reel-tap-left" onClick={goPrev} />
        <div className="hero-reel-tap-right" onClick={goNext} />

        {/* SLIDE 1 — HOME */}
        <div className={`hero-reel-slide reel-screen ${currentSlide === 0 ? 'active' : ''}`}>
          <div className="reel-statusbar">
            <span>9:41</span>
            <div className="reel-statusbar-icons">
              <svg width="16" height="11" viewBox="0 0 24 16" fill="currentColor"><rect x="0" y="11" width="4" height="5" rx="1"/><rect x="6" y="8" width="4" height="8" rx="1"/><rect x="12" y="4" width="4" height="12" rx="1"/><rect x="18" y="0" width="4" height="16" rx="1"/></svg>
              <svg width="22" height="11" viewBox="0 0 38 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="0.5" y="0.5" width="33" height="15" rx="3.5"/><rect x="3" y="3" width="28" height="10" rx="1.5" fill="currentColor" stroke="none"/></svg>
            </div>
          </div>
          <div className="reel-hero" style={{ marginTop: 8 }}>
            <div className="reel-hero-label reel-word" style={{ transitionDelay: '0.1s' }}>You&apos;re owed</div>
            <div className="reel-hero-amount reel-word" style={{ transitionDelay: '0.2s' }}>₹2,450</div>
            <div className="reel-hero-sub reel-word" style={{ transitionDelay: '0.3s' }}>Across 3 active groups</div>
          </div>
          <div className="reel-section-label reel-word" style={{ transitionDelay: '0.4s' }}>Active</div>
          <div className="reel-card reel-word" style={{ transitionDelay: '0.5s' }}>
            <div className="reel-card-emoji">🏝️</div>
            <div className="reel-card-text">
              <div className="reel-card-name">Goa Trip 2026</div>
              <div className="reel-card-meta">New expense today</div>
            </div>
            <div className="reel-card-amt reel-pos">₹1,200</div>
          </div>
          <div className="reel-card reel-word" style={{ transitionDelay: '0.6s' }}>
            <div className="reel-card-emoji">🏠</div>
            <div className="reel-card-text">
              <div className="reel-card-name">Flatmates</div>
              <div className="reel-card-meta">Pending 3 days</div>
            </div>
            <div className="reel-card-amt reel-neg">−₹450</div>
          </div>
          <div className="reel-card reel-word" style={{ transitionDelay: '0.7s' }}>
            <div className="reel-card-emoji">🍽️</div>
            <div className="reel-card-text">
              <div className="reel-card-name">Weekend Squad</div>
              <div className="reel-card-meta">Almost settled</div>
            </div>
            <div className="reel-card-amt reel-pos">₹1,700</div>
          </div>
          <div className="reel-fab reel-word" style={{ transitionDelay: '0.9s' }}>+</div>
        </div>

        {/* SLIDE 2 — ADD EXPENSE */}
        <div className={`hero-reel-slide reel-screen ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="reel-statusbar">
            <span>9:41</span>
            <div className="reel-statusbar-icons">
              <svg width="16" height="11" viewBox="0 0 24 16" fill="currentColor"><rect x="0" y="11" width="4" height="5" rx="1"/><rect x="6" y="8" width="4" height="8" rx="1"/><rect x="12" y="4" width="4" height="12" rx="1"/><rect x="18" y="0" width="4" height="16" rx="1"/></svg>
              <svg width="22" height="11" viewBox="0 0 38 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="0.5" y="0.5" width="33" height="15" rx="3.5"/><rect x="3" y="3" width="28" height="10" rx="1.5" fill="currentColor" stroke="none"/></svg>
            </div>
          </div>
          <div className="reel-nav reel-word" style={{ transitionDelay: '0.05s' }}>
            <div className="reel-nav-btn">✕</div>
            <div className="reel-nav-title">Add expense</div>
            <div className="reel-nav-save">SAVE</div>
          </div>
          <div className="reel-amount-block">
            <div className="reel-amount-label reel-word" style={{ transitionDelay: '0.15s' }}>Total amount</div>
            <div className="reel-amount-value reel-word" style={{ transitionDelay: '0.25s' }}>₹450</div>
            <div className="reel-chips reel-word" style={{ transitionDelay: '0.45s' }}>
              <div className="reel-chip reel-chip-active">1k</div>
              <div className="reel-chip">2k</div>
              <div className="reel-chip">5k</div>
            </div>
          </div>
          <div className="reel-input-card reel-word" style={{ transitionDelay: '0.6s' }}>
            <div className="reel-input-label">Description</div>
            <div className="reel-input-value">Lunch at Olive</div>
          </div>
          <div className="reel-input-card reel-word reel-input-row" style={{ transitionDelay: '0.7s' }}>
            <div>
              <div className="reel-input-label">Paid by</div>
              <div className="reel-input-value">You</div>
            </div>
            <div className="reel-input-pill">CHANGE</div>
          </div>
          <div className="reel-input-card reel-word reel-input-row" style={{ transitionDelay: '0.8s' }}>
            <div>
              <div className="reel-input-label">Split</div>
              <div className="reel-input-value">Equal · 4 people</div>
            </div>
            <div className="reel-input-pill">EDIT</div>
          </div>
          <div className="reel-save-btn reel-word" style={{ transitionDelay: '1.0s' }}>Save expense</div>
        </div>

        {/* SLIDE 3 — SETTLE */}
        <div className={`hero-reel-slide reel-screen ${currentSlide === 2 ? 'active' : ''}`}>
          <div className="reel-statusbar">
            <span>9:41</span>
            <div className="reel-statusbar-icons">
              <svg width="16" height="11" viewBox="0 0 24 16" fill="currentColor"><rect x="0" y="11" width="4" height="5" rx="1"/><rect x="6" y="8" width="4" height="8" rx="1"/><rect x="12" y="4" width="4" height="12" rx="1"/><rect x="18" y="0" width="4" height="16" rx="1"/></svg>
              <svg width="22" height="11" viewBox="0 0 38 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="0.5" y="0.5" width="33" height="15" rx="3.5"/><rect x="3" y="3" width="28" height="10" rx="1.5" fill="currentColor" stroke="none"/></svg>
            </div>
          </div>
          <div className="reel-settle-content">
            <div className="reel-check-circle reel-word" style={{ transitionDelay: '0.1s' }}>
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <div className="reel-settle-title reel-word" style={{ transitionDelay: '0.3s' }}>Settlement complete</div>
            <div className="reel-settle-sub reel-word" style={{ transitionDelay: '0.4s' }}>Goa Trip 2026 · just now</div>
            <div className="reel-stats reel-word" style={{ transitionDelay: '0.55s' }}>
              <div>
                <div className="reel-stat-val reel-pos">₹3,450</div>
                <div className="reel-stat-label">Settled</div>
              </div>
              <div>
                <div className="reel-stat-val">7</div>
                <div className="reel-stat-label">Expenses</div>
              </div>
              <div>
                <div className="reel-stat-val">4</div>
                <div className="reel-stat-label">Friends</div>
              </div>
            </div>
            <div className="reel-share-btn reel-word" style={{ transitionDelay: '0.75s' }}>
              <span>📲</span>
              <span>Share to WhatsApp</span>
            </div>
          </div>
        </div>

        {/* SLIDE 4 — BRAND CLOSE */}
        <div className={`hero-reel-slide reel-screen reel-done ${currentSlide === 3 ? 'active' : ''}`}>
          <div className="reel-done-content">
            <div className="reel-done-logo reel-word" style={{ transitionDelay: '0.05s' }}>
              <Image src="/logo.webp" alt="Hisaab" width={48} height={48} className="rounded-2xl" />
            </div>
            <div className="reel-done-wordmark reel-word" style={{ transitionDelay: '0.18s' }}>The Hisaab</div>
            <div className="reel-done-headline reel-word" style={{ transitionDelay: '0.32s' }}>Owe no one.</div>
            <div className="reel-done-headline reel-done-accent reel-word" style={{ transitionDelay: '0.45s' }}>Lose no friend.</div>
            <div className="reel-done-trust reel-word" style={{ transitionDelay: '0.65s' }}>
              <span className="reel-done-pill">★ 5.0</span>
              <span className="reel-done-pill">Free forever</span>
              <span className="reel-done-pill">No ads</span>
            </div>
            <div className="reel-done-meta reel-word" style={{ transitionDelay: '0.85s' }}>
              App Store + Play Store · Made in India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
