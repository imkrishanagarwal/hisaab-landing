'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const SLIDES = [
  { id: 'hook', duration: 3000 },
  { id: 'whatsapp', duration: 3500 },
  { id: 'insight', duration: 2500 },
  { id: 'pricing', duration: 3000 },
  { id: 'solution', duration: 3000 },
];

export default function HeroReel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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
      if (index < SLIDES.length - 1) {
        elapsedRef.current = 0;
        setCurrentSlide(index + 1);
      } else {
        // Loop back to start
        elapsedRef.current = 0;
        setCurrentSlide(0);
      }
    }, duration - elapsedRef.current);
  }, []);

  useEffect(() => {
    // Update progress bars
    progressRef.current.forEach((fill, i) => {
      if (!fill) return;
      if (i < currentSlide) {
        fill.style.transform = 'scaleX(1)';
        fill.style.transition = 'none';
      } else if (i > currentSlide) {
        fill.style.transform = 'scaleX(0)';
        fill.style.transition = 'none';
      } else {
        fill.style.transform = 'scaleX(0)';
        fill.style.transition = 'none';
      }
    });

    if (isPlaying) {
      animateProgress(currentSlide);
    }

    return clearTimers;
  }, [currentSlide, isPlaying, animateProgress, clearTimers]);

  // Pause on tab hidden
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

        {/* Progress bars */}
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

        {/* Tap areas */}
        <div className="hero-reel-tap-left" onClick={goPrev} />
        <div className="hero-reel-tap-right" onClick={goNext} />

        {/* SLIDE 1 — Hook */}
        <div className={`hero-reel-slide hero-reel-slide-hook ${currentSlide === 0 ? 'active' : ''}`}>
          <h2>
            <span className="reel-word" style={{ transitionDelay: '0.1s' }}>YOUR</span><br />
            <span className="reel-word" style={{ transitionDelay: '0.2s' }}>FRIENDS</span><br />
            <span className="reel-word" style={{ transitionDelay: '0.3s' }}>OWE YOU</span><br />
            <span className="reel-word reel-accent" style={{ transitionDelay: '0.4s' }}>&#8377;2,847</span>
          </h2>
          <p className="reel-word reel-sub" style={{ transitionDelay: '0.8s' }}>
            And you&apos;re too nice to ask.
          </p>
        </div>

        {/* SLIDE 2 — WhatsApp Chaos */}
        <div className={`hero-reel-slide hero-reel-slide-wa ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="reel-wa-header">
            <div className="reel-wa-avatar">G</div>
            <div>
              <div className="reel-wa-title">Goa 2024</div>
              <div className="reel-wa-sub">Ravi, Priya, Arjun, +5 others</div>
            </div>
          </div>
          <div className="reel-wa-chat">
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '0.2s' }}>
              <div className="reel-wa-name">Ravi</div>
              Bro maine dinner ke 2400 diye the
              <div className="reel-wa-time">11:42 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '0.4s' }}>
              <div className="reel-wa-name">Priya</div>
              Maine toh Arjun ko de diye??
              <div className="reel-wa-time">11:44 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-sent" style={{ transitionDelay: '0.6s' }}>
              Airbnb kisne pay kiya??
              <div className="reel-wa-time">11:45 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '0.8s' }}>
              <div className="reel-wa-name">Arjun</div>
              Excel bhejo koi pls
              <div className="reel-wa-time">11:46 PM</div>
            </div>
            <div className="reel-wa-msg reel-wa-received" style={{ transitionDelay: '1.0s' }}>
              <div className="reel-wa-name">Sneha</div>
              Koi baat nhi, main adjust kar lungi
              <div className="reel-wa-time">11:48 PM</div>
            </div>
            <div className="reel-wa-unread" style={{ transitionDelay: '1.2s' }}>147 unread messages</div>
          </div>
        </div>

        {/* SLIDE 3 — Insight */}
        <div className={`hero-reel-slide hero-reel-slide-insight ${currentSlide === 2 ? 'active' : ''}`}>
          <h2>
            <span className="reel-word" style={{ transitionDelay: '0.2s' }}>You KNOW</span><br />
            <span className="reel-word" style={{ transitionDelay: '0.4s' }}>your friend</span><br />
            <span className="reel-word" style={{ transitionDelay: '0.6s' }}>owes you.</span>
            <span className="reel-word reel-insight-sub" style={{ transitionDelay: '1.0s' }}>You just can&apos;t say it.</span>
          </h2>
        </div>

        {/* SLIDE 4 — Pricing */}
        <div className={`hero-reel-slide hero-reel-slide-pricing ${currentSlide === 3 ? 'active' : ''}`}>
          <div className="reel-pricing-top">
            <div className="reel-word reel-pricing-amount" style={{ transitionDelay: '0.2s' }}>&#8377;2,400</div>
            <div className="reel-word reel-pricing-label" style={{ transitionDelay: '0.4s' }}>PER YEAR</div>
            <div className="reel-word reel-pricing-sub" style={{ transitionDelay: '0.6s' }}>on Splitwise &amp; others</div>
          </div>
          <div className="reel-pricing-bottom">
            <p className="reel-word reel-pricing-alt" style={{ transitionDelay: '0.8s' }}>Hisaab tracks the same</p>
            <div className="reel-word reel-pricing-free" style={{ transitionDelay: '1.0s' }}>&#8377;0</div>
          </div>
        </div>

        {/* SLIDE 5 — Solution */}
        <div className={`hero-reel-slide hero-reel-slide-solution ${currentSlide === 4 ? 'active' : ''}`}>
          <div className="reel-solution-content">
            <div className="reel-check-circle">
              <svg viewBox="0 0 24 24"><polyline points="5 13 10 18 20 6" /></svg>
            </div>
            <div className="reel-settled-text">All Settled</div>
            <div className="reel-settled-names">
              <div className="reel-settled-name" style={{ transitionDelay: '0.6s' }}>Ravi — Settled ✓</div>
              <div className="reel-settled-name" style={{ transitionDelay: '0.9s' }}>Priya — Settled ✓</div>
              <div className="reel-settled-name" style={{ transitionDelay: '1.2s' }}>Arjun — Settled ✓</div>
            </div>
          </div>
          <div className="reel-solution-bottom">
            <h3 className="reel-word" style={{ transitionDelay: '0.6s' }}>No more Excel.</h3>
            <h3 className="reel-word" style={{ transitionDelay: '0.9s' }}>No more &apos;baad mein bhejta&apos;</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
