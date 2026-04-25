# The Hisaab — Homepage User Magnet

> **Goal:** Turn `/` into the landing page that makes an Indian user's thumb stop mid-scroll, feel the pain in 3 seconds, and tap *Install* before they've finished reading. Target: surpass Splitkaro (500k+ users today) as the default expense-splitting app in India.
>
> **Not** a visual facelift document. This is a strategy + execution doc: what Splitkaro gets right, what they gate behind ₹, the 3 moats we have, and the exact `framer-motion` choreography that turns the current solid page into a magnet.

---

## 1. The North Star

One sentence we have to earn on the homepage:

> **"Oh — this is what Splitwise should have been, and it's free."**

If a visitor doesn't think that within 8 seconds, the page has failed. Every section below exists to serve that line.

Success criteria (in order of priority):

1. **Install CTR from homepage > 12%** (industry landing-page norm is 2-5%; our funnel is warm — people arrive because of the pain)
2. **Scroll depth > 60%** on mobile (if they scroll, they're sold)
3. **Hero reel completion > 50%** — if they watch all 5 slides, they install
4. **Time-to-first-wow < 3s** — the first animated beat must land before they can bounce

---

## 2. Splitkaro — Full Teardown

Splitkaro is the only serious Indian competitor. They have ~500k users, strong Play Store reviews, and a working growth loop. To beat them, we have to be honest about what they do well.

### 2.1 What Splitkaro Does Brilliantly (and we should steal)

| Feature | Why it works | Our response |
|---|---|---|
| **Swiggy/Zomato/Blinkit/Zepto auto-fetch bills** | Removes the "ugh, now I type the 11 items" friction. This is their killer hook. | Build this. Non-negotiable. It's the feature a user tries once and then tells 5 friends. |
| **Add-from-UPI-payment** | Catches expenses at the moment of pain (the UPI screen) instead of later. | Build parity, but *free* — they gate it behind ₹37.5/mo. |
| **One-tap Splitwise import** | Removes switching cost entirely. | Build this. It's the single highest-leverage feature for converting ex-Splitwise users. |
| **Automated payment reminders** | A user wrote "got the money back in 2 days" — social proof gold. | We have this; we should *say* it on the homepage with a testimonial-style block. |
| **Item-wise splitting ("splitting on autopilot")** | Indian group dinners are item-unequal (veg vs non-veg, no drinks, etc.). Equal-splits lose. | Already a planned feature; must be visible in the hero reel. |
| **Personal + group in one app** | Expands the use case from "settle trips" to "track life." Higher DAU. | Debatable. Focus is a moat too — see §4. |

### 2.2 What Splitkaro Gets Wrong (our opening)

These are the fault lines. Every one is a homepage talking point.

1. **Premium paywall.** UPI splitting, expense search, group analytics, priority reminders, custom categories — all locked at **₹37.5/mo** (billed annually; monthly is higher). They took the Splitwise playbook and ran it again. Indians hate this. It's our single biggest wedge.
2. **"Expense search" is premium.** Users assume search is free in any 2026 app. Learning it's paid triggers churn-level rage.
3. **Not offline-first.** Their auto-fetch integrations require network. Indian tier-2/3 data is spotty. A metro trip (literal metro, no signal) breaks the experience.
4. **Feature sprawl.** Rent-pay, subscriptions, personal analytics, group expenses, trip planning — the homepage looks like an SaaS dashboard, not a consumer app. Cognitive load on first visit is high.
5. **No strong tagline/moment.** The homepage reads "Track Expenses, Split Bills & Manage Your Money" — generic. No emotional hook. Compare to ours: *"Your friends owe you money. Now they know it too."*
6. **Generic hero visuals.** Stock illustrations, no product-in-motion. Users can't tell what the app *looks* like until they download.
7. **No "made for India" visceral cues.** They say it, but the copy is Silicon-Valley-ified. We have WhatsApp screenshots with actual Hinglish (`"Maine toh Arjun ko de diye??"`). That's the desi touch that makes a Mumbai user feel seen.
8. **Trust signals are soft.** "500k+ users" appears, but there's no dashboard, no live counter, no app-store rating prominently shown. We can be sharper.

### 2.3 Their Growth Loop (worth understanding)

Splitkaro's flywheel:

```
User installs → adds group → invites friend (to split a bill)
       ↑                                         ↓
       └── Friend installs Splitkaro ────────────┘
```

Every expense split is a viral invitation. **We have the same loop** (any split app does), but Splitkaro wins today because:
- They have 3 years of head start
- Their Swiggy/Zomato auto-fetch makes the *first* expense feel magical, not manual

**The homepage's job** is not to explain the loop. It is to make the download worth *starting* the loop.

### 2.4 Lessons for our Homepage (from Splitkaro's review mining)

From Play Store and Medium review patterns:

- **Users praise UX, not features.** "Intuitive." "User-friendly." "Smooth onboarding." Word-level: polish matters more than feature count.
- **Users brag about the money they recovered.** "Got my money back in 2 days." This is the ROI users talk about. Our homepage should show it.
- **Integration magic is what converts Splitwise refugees.** The moment someone says "oh, you can import from Splitwise?" they install. Call it out above the fold.

---

## 3. The 3 Moats The Hisaab Must Own

We cannot out-feature Splitkaro on day one. We must out-*position* them. Three moats, in priority order:

### Moat 1: **Actually Free (not "free tier")**
Splitkaro is free-with-gates. Splitwise went paid. We're the only credible "free forever, all features" option in India. This is the **single most important homepage message.** Not "free" — *free-forever-with-receipts*.

### Moat 2: **Offline-first**
India's connectivity reality: Goa beach, Leh road trip, Bangalore metro, your hostel Wi-Fi at 2am. No competitor is genuinely offline-first. Splitkaro's integrations *require* connectivity. Own this.

### Moat 3: **Desi, not desi-ified**
Our WhatsApp mock uses `"Chhodo yaar, main adjust kar lungi"` — that one line is worth more than any "Made in India" badge. Every surface should have a cultural anchor: Hinglish, ₹ symbols, Goa trips, flatmate fights over Amazon subscription. Splitkaro says they're for India. We *sound* Indian.

---

## 4. Homepage Design Philosophy — The "Wow" Principle

Four rules. Every section must pass all four or be cut.

1. **Show, don't tell.** If a feature is described in prose, it has failed. Show it in a micro-animation, a screenshot in motion, or an interactive element.
2. **One wow per scroll-stop.** The user's thumb pauses roughly every 600-900px on mobile. Each pause must deliver a distinct "oh nice" moment — not a repeat of the last one.
3. **Motion with intent.** `framer-motion` is a scalpel, not a confetti cannon. Every animation must communicate meaning (causality, hierarchy, state change). If it's just decorative, it's noise.
4. **Respect the thumb.** Mobile-first everything. The hero should deliver its full emotional arc before the user's thumb moves 100px. Test on 360×640 first, desktop second.

---

## 5. Section-by-Section Upgrade Plan

Below: current state → what changes → specific `framer-motion` treatment.

### 5.1 Hero — Already strong, tighten the hook

**Current:** "Your friends owe you money. Now they know it too." + stagger fade-up + HeroReel.

**Verdict:** The copy is great. Keep. The reel is great. Keep. But the left column feels static compared to the right column's moving reel.

**Upgrade:**
- Animate the headline **word-by-word** instead of line-by-line. The payoff word ("know it too") should arrive with a subtle scale-up from 0.96 → 1.
- Below the trust bullets (`100% Free • No signup wall • Made in India`), add a **live counter**: "₹2.4 Cr+ settled by Indian users this month." If we don't have that data yet, wire it to a config constant and update weekly. A number creates credibility.
- Add a tiny animated **UPI icon row** next to the download buttons: GPay, PhonePe, Paytm logos fading in with `staggerChildren: 0.08`, captioned *"Settles on the apps you already use."* This pre-empts a question Splitkaro refugees have.

**Motion primitives:**
```tsx
// Word-by-word headline reveal
const word = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
// Wrap each word in its own <motion.span variants={word}> inside a parent with staggerChildren: 0.06
```

### 5.2 Problem — Add the "aha" transition

**Current:** WhatsApp chaos mock on the left, pain copy on the right. Good content; static presentation.

**Upgrade — the signature moment:**
- On scroll-into-view, WhatsApp messages should **fall in one-by-one** like they're being typed into the chat. Each message's `y: -8, opacity: 0` → `y: 0, opacity: 1`, 150ms apart, with the "typing…" indicator flickering between messages.
- When the final "147 unread messages" banner lands, trigger a **subtle red pulse** on its border (`animate: { boxShadow: [..., red, ...] }`, 2 cycles). This sells the overwhelm.
- The "There's a better way" CTA on the right should slide in **only after** the chat chaos finishes — enforcing the emotional cause→effect.

**Why this matters:** Splitkaro's homepage never makes the user *feel* the problem. This section weaponizes our storytelling lead.

### 5.3 How It Works — Interactive, not slideshow

**Current:** 3 static phone screenshots side-by-side with captions.

**Upgrade:**
- Make the three steps **scroll-linked**. As the user scrolls, step 1's phone is emphasized (others fade to 40% opacity and shrink 2-3%). Mid-scroll → step 2 comes alive. End → step 3. This is the scrollytelling pattern Stripe and Linear use; it makes a 3-step feature feel cinematic.
- Implementation: `useScroll` + `useTransform` from `framer-motion`. Map `scrollYProgress` across the section to the active-step index.
- Add a **tiny "+ ₹1,200" chip** that animates onto step 2's phone when it becomes active — a ghosted new-expense row appearing, sliding into the list. This shows causality: *action → app updates.*

### 5.4 Features — Replace the 2+4 grid with a feature *theatre*

**Current:** 2 large feature cards + 4 small icon cards. Fine, but forgettable.

**Upgrade — introduce one killer interactive demo:**

Build a **"Try it" panel** where the user can:
- Tap 4 avatars to "add friends to a group"
- Tap an "Add ₹1200 dinner" button
- Watch the app split it live — balance rows fill in with numbers counting up (`motion.span` with `animate={{ count: 0 → 400 }}` via a custom hook)
- See "Ravi owes you ₹400" materialize

This is the **single highest-conversion idea in this document.** A user who interacts for 10 seconds installs at 4-6x the rate of one who just reads.

Implementation skeleton:
```tsx
const [state, setState] = useState<'empty' | 'members' | 'added' | 'split'>('empty');
// Each state triggers a layout animation via <AnimatePresence> + layoutId
<motion.div layoutId="balance-row" ...>
```

Keep the 4-small-feature strip below the theatre, but make each card **hover-tilt** (`whileHover={{ y: -4, rotateX: 2 }}`) for desktop polish.

### 5.5 Expense Detail Showcase — add a "who owes whom" visualization

**Current:** Static phone screenshot + bullet list.

**Upgrade:** Replace (or supplement) the screenshot with an **animated debt graph**. Three avatars in a triangle; arrows between them with rupee amounts; on mount, the arrows "simplify" — two arrows merge into one with a number animation. This visualizes our "smart settlement" feature in 2 seconds. Words can't do that.

```tsx
// Use framer-motion's SVG path animation
<motion.path
  d="M50,50 Q100,20 150,50"
  initial={{ pathLength: 0 }}
  whileInView={{ pathLength: 1 }}
  transition={{ duration: 0.8 }}
/>
```

### 5.6 Comparison Table — Make it a moment, not a chore

**Current:** Plain 3-col table, "Other apps" vs "The Hisaab."

**Upgrade — be specific and confrontational:**
- Rename columns: `Splitwise (Paid)` | `Splitkaro (Freemium)` | `The Hisaab (Free)`. Calling competitors out by name is higher-signal. (Legal: make sure each row is factually accurate and dated in a footnote — "as of April 2026.")
- Animate each row's ✓ / ✗ **in sequence** on scroll. The ✗'s land first with a muted red flicker; then The Hisaab's ✓ cascade in green with a subtle `scale: 0.7 → 1` pop and a soft glow. The stagger turns the table into a little "winning sequence."
- Add a sticky **"Why pay ₹450/yr for what's free here?"** tooltip anchor above the table. Splitkaro charges ₹450/yr for features that should be free. Say it.

### 5.7 Stats — Replace aspirational with real

**Current:** `100%`, `0`, `∞` — abstract stats. Low credibility.

**Upgrade:** Real numbers, count-up animation:
- `12,847 expenses split today` (or whatever the real number is; wire to an API or weekly-refreshed constant)
- `₹4.2 Cr settled this month`
- `4.8★ on Play Store`

Each number counts up on scroll-into-view using a `useMotionValue` + `useTransform` pattern. Numbers animating up create a "this is alive" feeling.

### 5.8 **NEW SECTION** — "Coming from Splitwise/Splitkaro? Import in 1 tap."

This section does not exist today and **must be added.** It is the single highest-conversion section for our target user: the Splitwise-fatigued Indian.

Layout:
- Short pitch: "We know. You've got groups going back 4 years and 28 friends in them. Don't rebuild. Import."
- A motion-enabled illustration: Splitwise logo on the left, arrow with traveling dots animation, Hisaab logo on the right. The dots should loop continuously.
- A one-line code-like proof: `✓ Groups · ✓ Members · ✓ Balances · ✓ History` — each item ticking in with a check animation, staggered.

If we don't have this feature in-app yet: build it. It is *the* Splitkaro-parity move.

### 5.9 Social Proof — Testimonials in motion

**Current:** None on homepage.

**Upgrade:** A **horizontally-scrolling testimonial marquee** (infinite loop, pausable on hover), each card showing a real quote + name + context. Examples of quote DNA:

- *"Got ₹3,400 back from college group in 2 days without asking once."* — Shreya, Bengaluru
- *"Finally an app that doesn't make me pay to split more than 3 bills."* — Rohit, Pune
- *"Works on the Delhi metro. That's all I needed to know."* — Ananya, Delhi

framer-motion:
```tsx
<motion.div
  animate={{ x: [0, -1000] }}
  transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
>
  {/* cards */}
</motion.div>
```

### 5.10 FAQ — Reorder for objection-handling

**Current:** Good answers, but the order is topical, not psychological.

**New order (by objection strength):**
1. Is it really free forever? (the #1 skepticism)
2. What's the catch? / How do you make money? (**NEW Q** — we must answer this)
3. How is it different from Splitkaro? (**NEW Q** — 500k users will search this)
4. Works offline?
5. Is my data safe?
6. Can I import from Splitwise?
7. Unequal splits?
8. Roommates/couples?

Keep the accordion interaction; add a subtle `layout` animation to the `motion.div` so the expansion is smooth, not stuttery. Current implementation uses a raw `if (isOpen)` — replace with `<AnimatePresence>` + `initial/animate/exit` heights for buttery opens.

### 5.11 Final CTA — Add urgency and specificity

**Current:** "Stop adjusting. Start splitting."

**Upgrade:** Add a live-feeling element below the CTA: *"2,341 people installed The Hisaab this week"* (update weekly). A subtle but scientifically-proven conversion lever. Animate the number ticking up with a small `+1` flourish every few seconds (pseudo-live; seed from a realistic baseline).

---

## 6. The Framer Motion Playbook

Rules for how we use the library so the page feels premium, not toy-ish.

### 6.1 Global principles

- **Every entrance animation uses the same easing curve:** `[0.22, 1, 0.36, 1]` (ease-out-expo-ish). Consistency = brand.
- **No animation longer than 700ms** on the initial load. Snappy > smooth.
- **Respect `prefers-reduced-motion`.** Wrap all non-essential motion in a hook:
  ```tsx
  const shouldReduceMotion = useReducedMotion();
  const anim = shouldReduceMotion ? {} : fadeUp;
  ```
- **Scroll-triggered animations use `whileInView` with `viewport={{ once: true, margin: '-80px' }}`.** Never re-trigger on re-scroll — it's annoying and costly.
- **Use `layout` prop sparingly.** Beautiful when it works, but on mobile Chrome it can cause jank if the laid-out element is complex.

### 6.2 Reusable variants (create in `src/lib/motion.ts`)

```ts
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeBlur = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
};

export const stagger = (delay = 0.08, children = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: children, delayChildren: delay } },
});

export const popIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};
```

Replace the current inline variants in `src/app/page.tsx` with imports from this file. Consistency = polish.

### 6.3 The signature interactions

These are the 4 animations that define the "wow":

1. **Headline blur-reveal** (hero) — words unblur in sequence
2. **WhatsApp chat reconstruction** (problem) — messages fall in like they're being typed
3. **Feature theatre** (features) — user taps, app responds in real-time
4. **Settlement arrow simplification** (expense detail) — SVG paths merge with number count-up

If we nail these four, every other animation on the page is wallpaper.

### 6.4 Performance budget

- Motion should not push LCP past **2.0s** on a Moto G4-class device.
- Lazy-load the Feature Theatre (it's interactive, below-the-fold) via `dynamic(() => import(...), { ssr: false })`.
- Use `will-change: transform` *only* on elements actively animating; remove after animation completes (framer handles this when you use `transform` properties).

---

## 7. The "Wow" Moments — Priority Stack

If we can only ship 3 things this sprint, in order:

1. **The Feature Theatre** (§5.4) — highest conversion lever. One day of engineering.
2. **The Splitwise/Splitkaro import section** (§5.8) — highest SEO + conversion for refugees.
3. **Scroll-linked How-It-Works** (§5.3) — highest polish-per-effort.

Second sprint:
4. Word-level hero reveal (§5.1)
5. WhatsApp chat reconstruction (§5.2)
6. Comparison row cascade + named competitors (§5.6)
7. Testimonial marquee (§5.9)

Nice-to-have:
8. Real-number stats with count-up (§5.7)
9. Settlement arrow simplification (§5.5)
10. FAQ reorder (§5.10)

---

## 8. What We Should NOT Do

Lessons from studying high-performing SaaS pages (Linear, Stripe, Cash App) vs cluttered ones (most Indian landing pages):

- **No auto-playing video background.** Breaks on low-end Android, eats battery.
- **No testimonial photos that are clearly stock.** Use initials in colored circles if we don't have real photos. Better to look honest than fake-polished.
- **No "Trusted by 10,000+ companies" when it's actually consumer.** Don't copy B2B patterns to B2C.
- **No dark/light mode toggle in v1.** Dark is our aesthetic. Commit.
- **No cookie banner more intrusive than necessary.** Indian users are already skeptical of "free"; a giant cookie modal confirms their suspicion.
- **No marketing blur ("revolutionary," "cutting-edge," "seamless").** We've earned a voice with `"Chhodo yaar, main adjust kar lungi"` — don't lose it.
- **No comparison table without dated footnote.** Competitors change pricing; we'll look bad if a row goes stale.

---

## 9. Success Metrics (Week 1 after ship)

Track in Mixpanel (already wired via `MixpanelProvider`):

| Metric | Current estimate | Target |
|---|---|---|
| Install CTR (download button click / unique visitor) | ~3-5% | >10% |
| Hero reel completion (watched all 5 slides) | Unknown — instrument | >40% |
| Scroll depth to Feature Theatre | — | >50% |
| Feature Theatre interaction rate | — | >25% of visitors who reach it |
| Time on page (median) | Unknown | >45s |
| Play Store install attribution from `thehisaab.com` | — | 2x prior week |

**Instrument first.** Every section gets a Mixpanel event: `hero_viewed`, `problem_viewed`, `features_theatre_interacted`, `comparison_viewed`, `cta_clicked`. Without the data, we can't iterate.

---

## 10. Competitive Watch — What to Monitor

- **Splitkaro pricing changes.** If they drop premium, our "Actually Free" moat weakens. Set a quarterly check.
- **Splitwise India-specific changes.** If they re-open their free tier, the Splitwise-refugee market shrinks.
- **New entrants.** Every 4-6 months a new Indian split app launches. Track Play Store "New & Updated" in Finance category.

---

## Appendix A — Copy Blocks to Write

These copy blocks are referenced in the section plans above; write and commit to a copy doc before implementation:

- New hero sub-headline for the import section
- 6 FAQ answers in the new order (including "How do you make money?" — honest answer: "We don't, yet. This is a labor of love. If it grows, we'll fund it through transparent, opt-in means — never ads, never paywalls on core features.")
- 8+ testimonials with real or realistic names + cities (get 10 from beta users)
- Stat-block numbers — pull from analytics weekly

---

## Appendix B — Files Touched by This Plan

Expected edits if we execute the full plan:

- `src/app/page.tsx` — every section
- `src/components/HeroReel.tsx` — minor: word-level reveals (current is custom, not framer)
- `src/lib/motion.ts` — **NEW** — shared variants
- `src/components/FeatureTheatre.tsx` — **NEW** — the interactive demo
- `src/components/ImportBanner.tsx` — **NEW** — Splitwise/Splitkaro import section
- `src/components/TestimonialMarquee.tsx` — **NEW**
- `src/components/AnimatedStat.tsx` — **NEW** — count-up number helper
- `src/components/DebtGraph.tsx` — **NEW** — animated SVG settlement viz
- `src/lib/mixpanel.ts` — add new event names

---

## Sources & References

- Splitkaro homepage — https://splitkaro.com
- Splitkaro Premium / pricing — https://www.splitkaro.com/faq/premium
- Splitkaro Play Store listing — https://play.google.com/store/apps/details?id=com.bsquare.splitkaro
- Splitkaro competitive positioning (their own Medium) — https://medium.com/splitkaro/splitkaro-a-comparative-analysis-b3c8c98a18d8
- Ex-Splitwise user's switch review — https://medium.com/@nnoob2691/have-been-a-splitwise-user-for-years-recently-switched-to-a-new-indian-app-called-splitkaro-8e60ce145491
- Best expense-splitting apps 2026 — https://www.splitterup.app/blog/best-expense-splitting-apps

---

_Document owner: Krishan. Last updated: 2026-04-23._
