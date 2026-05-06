# Plan 3.0 — Content & SEO Strategy for thehisaab.com

> **Document scope:** Full content strategy for thehisaab.com — what to write, how long, which keywords, which competitors to name, where to distribute. Designed to be picked off one item at a time.
>
> **Companion to:** `HOMEPAGE_USER_MAGNET.md` (homepage UX/UV doc). This document is about *off-homepage* surface — blog, comparison pages, programmatic city pages, calculators.
>
> **Last updated:** 2026-05-06

---

## TL;DR — The Bet

Splitwise just turned its free tier into a paywalled trickle (4–5 expenses/day + ads + 10s cooldown — actively making news in 2026). Splitkaro has the Indian audience but gates the obvious things (search, UPI splitting, analytics) at ₹450/yr. Both are creating a class of pissed-off users actively searching for "free" alternatives **right now.**

Our content job is to be the page they land on for every variation of that search — and the page that converts them when they're on the fence.

We should **not** try to out-publish Splitkaro's feature blog (they're shouting; nobody's reading it). We should out-rank them on **commercial-intent, comparison, and pain-driven** queries while building a long-tail moat around use-cases and Indian context.

---

## 1. Content Pillars (only 3 — resist a 5th)

| # | Pillar | Owns the question | Connects to product |
|---|---|---|---|
| **P1** | **Splitwise/Splitkaro escape** | "Where do I go now that X charges me?" | Direct refugee funnel |
| **P2** | **How Indians actually share money** (rent, trips, PG, office, couples) | "How do I split this fairly?" | Use-case install |
| **P3** | **Hisab-kitab tooling** (calculators, templates, UPI helpers) | "I just need to compute this once" | Link magnets + brand recall |

Drop everything else. "Personal finance" is too broad, "money management" loses to BankBazaar, and "fintech in India" is not our fight.

---

## 2. Article Archetypes That Actually Pull Traffic in This Niche

Ranked by traffic-per-effort for *our specific niche*, with current evidence.

### A. The "X Alternatives" Listicle  ★★★★★
Highest commercial intent, lowest creative effort, longest shelf life. Tricount, PartyTab, SoftwareSuggest are already ranking — we can outflank them by being the most India-specific list.

- **Length:** 2,500–3,500 words. Long-form wins for listicles because Google rewards breadth.
- **Structure:** TL;DR table → 1 paragraph per app (200–300 words) → fairness section → FAQ → schema.
- **Must-haves:** A pricing table with dated footnote ("verified May 2026"), screenshots, an honest-flaw section per app (skip this and we sound like an ad).
- **Titles to write:**
  - "11 Best Splitwise Alternatives in India (2026) — Free, No Daily Limits"
  - "7 Best Splitkaro Alternatives in 2026 (Without the ₹450 Premium)"
  - "Splitwise vs Splitkaro vs The Hisaab vs Tricount — Tested for 30 Days"

### B. The "X vs Y" Comparison  ★★★★★
We already have `/compare/{splitwise,settle-up,tricount}` scaffolding. Each is worth 1,500–2,500 words. Buyer is at the bottom of the funnel — these are our highest-converting pages.

- **Length:** 1,800–2,500 words.
- **Structure:** Verdict in first 100 words → side-by-side table → 6 dimensions (price, daily limits, offline, UPI, splits, group size) → "who should pick which" → migration steps → FAQ.
- **Build out (priority order):**
  1. `/compare/splitkaro` — **build first**, missing from sitemap, highest Indian volume
  2. `/compare/splitwise` ✅ exists — expand to 2,000 words
  3. `/compare/cred` (people search "split bills with CRED")
  4. `/compare/google-pay` (low intent but huge volume)
  5. `/compare/tricount`, `/compare/settle-up`, `/compare/spliit`

### C. The "How to Split [X] in India" Guide  ★★★★
Long-tail, evergreen, low competition because most foreign sites write the rent-split version with $ examples that don't translate.

- **Length:** 1,200–1,800 words. Don't pad — just answer.
- **Structure:** Worked example with ₹ numbers → 3 methods → screenshot of doing it in Hisaab → calculator embed → FAQ.
- **Titles:**
  - "How to Split Rent with Roommates in India (4 Fair Methods + Calculator)"
  - "How to Split Trip Expenses Fairly — Goa, Manali, Bali, Bangkok"
  - "How to Split Rent When One Roommate Earns More"
  - "How to Split a Couple's Expenses Fairly (Income-Proportional)"
  - "How to Split Group Dinner Bill Item-Wise Without Doing Math"
  - "How to Split Office Lunch Expenses Without Awkwardness"

### D. The "Newsjack" — Splitwise/Splitkaro pricing pain  ★★★★
Splitwise's daily-limit decision generated ITVoice and Medium coverage. This is a wave to ride for 6–12 months while it's hot.

- **Length:** 800–1,200 words.
- **Titles:**
  - "Splitwise Free Plan Limits in 2026 — Everything That's Now Paid" (already in sitemap — write it long)
  - "Why Splitwise Added a Daily Expense Limit (and What to Use Instead)"
  - "Splitkaro Premium Review — Is ₹450/year Worth It for Indians?"
  - "Splitwise Pro is ₹2,499/year in India — Here's the Math on Whether It's Worth It"

### E. Programmatic City × Use-Case  ★★★★
Tricount cracked this with `/blog/how-do-you-split-travel-expenses-with-friends-in-india-goa-manali-jaipur`. Splitkaro built `/india/goa`. We should ship 30–50 of these.

- **Length:** 800–1,200 words each. Scaled, templated.
- **Pattern:** `/trip/{city}-expense-tracker` and `/{city}/split-expenses`
- **Cities:** Goa, Manali, Leh, Pondicherry, Bangalore, Mumbai, Kasol, Rishikesh, Mussoorie, Coorg, Jaipur, Udaipur, Gokarna, Andaman, Bali, Bangkok, Dubai, Singapore, Phuket, Vietnam.
- **Each page:** 4–5 city-specific expense categories (e.g., "scooter rental in Goa", "shack food", "room rate") → sample budget → app screenshot → install CTA. Reference the **programmatic-seo skill** before launching.

### F. The Tool/Calculator  ★★★★
Splitwise's rent calculator (`/calculators/rent`) ranks for "rent split calculator" globally. There's no Indian equivalent.

- **Format:** Page with the working calculator (React, no signup) + 600–900 words of context.
- **Tools to build (in order):**
  1. `/tools/rent-split-calculator` — 4 methods (equal, by room, by income, hybrid)
  2. `/tools/trip-budget-calculator` — group trip estimator
  3. `/tools/who-pays-what` — minimum-transactions debt simplifier (live demo of our settlement engine)
  4. `/tools/upi-split-link` — generate UPI deep links from a split (this one's a viral magnet)

### G. The Data/Original-Insight Post  ★★★
Shareable, not searchable. We have Mixpanel data. Anonymise and publish.

- "We Tracked ₹X Cr Split Across Y Indian Trips — Here's What We Learned About How Friends Pay Each Other Back"
- "The Average Indian Goa Trip Costs ₹X — Based on 1,200 Real Group Splits"
- These are press-bait. Don't run them until 50k+ users, but plan for them.

### H. Pillars/hubs (long-form ultimate guides)  ★★
- "The Hisab Kitab Guide: Every Way to Split Money in India" — 5,000-word pillar at `/guide/split-money-india`
- Don't make this priority 1. Listicles + comparisons earn more, faster.

**What to skip:** Generic personal-finance posts ("how to save money in India"), motivational fluff, "future of fintech" — none of these convert installs.

---

## 3. Length Cheat Sheet

| Archetype | Target words | Why |
|---|---|---|
| Alternatives listicle | 2,500–3,500 | Google rewards depth on commercial-intent listicles |
| Vs comparison | 1,800–2,500 | Enough to feel comprehensive without padding |
| How-to guide | 1,200–1,800 | Answer the question, don't pad |
| Newsjack | 800–1,200 | Timeliness > depth |
| Programmatic city page | 800–1,200 | Scaled — kept tight |
| Calculator page | 600–900 + tool | The tool *is* the content |
| Original data post | 1,500–2,500 | Long enough to be quotable |
| FAQ-style answer | 400–700 | When intent is one specific question |

**On AI search (AEO/GEO):** keep a "TL;DR" or **bolded answer in the first 80 words** on every post. ChatGPT/Perplexity citations come from extractable, structured paragraphs near the top.

---

## 4. Keyword Universe

### 4a. Head terms (high volume, hard but worth it)

| Keyword | Intent | Strategy |
|---|---|---|
| splitwise alternative | Commercial | Already have `/splitwise-alternative` — push to top 3 |
| split bills app | Commercial | Land on homepage |
| expense splitting app india | Commercial | Listicle |
| splitwise india | Informational/Commercial | Comparison + newsjack |
| splitkaro alternative | Commercial | **Build dedicated page — gap** |
| hisab kitab app | Commercial | Brand-adjacent — own this term |
| free splitwise | Commercial | Current pain — newsjack |

### 4b. Mid-tail (high intent, easier)

`splitwise free limit`, `splitwise daily limit`, `splitwise pro worth it`, `splitkaro premium worth it`, `splitkaro vs splitwise`, `tricount india`, `settle up app india`, `spliit alternative`, `cred split bills`, `gpay split bills`, `whatsapp split bill`, `bill splitting app upi`, `rent split calculator india`, `expense tracker for friends`, `group expense app india`, `flatmate expense app`, `roommate bill split app`, `office lunch expense app`, `couple expense tracker india`.

### 4c. Long-tail (the moat — easiest wins)

These have 50–500 monthly volume each but compound to thousands. Almost zero serious competition.

- "how to split rent with roommates india"
- "how to split unequal rent"
- "how to split trip expenses with friends"
- "best app to split bills with friends in india"
- "how to track who owes whom"
- "split goa trip expenses"
- "split manali trip expenses"
- "split rent calculator india"
- "split expenses with girlfriend"
- "split flat expenses pg"
- "splitwise alternative offline"
- "splitwise alternative no signup"
- "splitwise alternative without ads"
- "is splitwise free in india 2026"
- "splitwise without daily limit"
- "expense splitting app for couples india"

### 4d. Hindi/Hinglish terms (uncontested)

Almost nobody is targeting these. Build a few pages with Hinglish bodies:

- "hisab kitab kaise rakhe"
- "kharcha split karne ka app"
- "trip ka kharcha kaise baante"
- "dosto se paise vasool kaise kare"
- "rent split kaise kare"
- "udhar yaad rakhne wala app"
- "paise wapas mangne ka app"
- "groups me expense kaise track kare"

These won't deliver huge volume each, but they brand-imprint hard with the desi-not-desi-ified moat from `HOMEPAGE_USER_MAGNET.md`.

### 4e. Search intent split (rough budget)

| Stage | % of content | Notes |
|---|---|---|
| Decision (vs/alternatives/best) | **45%** | Highest install conversion |
| Implementation/how-to | 25% | Long-tail moat |
| Awareness (what is, why) | 15% | Top of funnel |
| Tools/calculators | 15% | Backlink magnets |

We're a consumer app — skew commercial.

---

## 5. Competitor Mention Strategy

Naming competitors is high-conversion but high-risk. Three rules:

### Rule 1: Name them by name on commercial pages
"Other apps" loses to "Splitwise." Search engines and users both reward specificity. Our `/compare/*` and `/splitwise-alternative` pages should say "Splitwise" and "Splitkaro" everywhere.

### Rule 2: Always cite, always date
Every claim about a competitor needs a source link and a "verified May 2026" stamp. When Splitkaro changes pricing or Splitwise tweaks its limit, we'll need to find and update the page. Bake a `lastReviewed` field into each post's frontmatter.

### Rule 3: Hierarchy of disrespect (be careful here)

- **Splitwise** — lean into "expensive," "limited," "American" (factual, defensible). Avoid attacking the brand emotionally — they have lawyers and a 17-year reputation.
- **Splitkaro** — our real fight. Be **factual and specific**: "₹37.5/mo when billed annually," "expense search is locked behind premium," "their Swiggy auto-fetch is genuinely good (we don't do this yet — and we'll be honest about it)." Punch above our weight by being more honest about our own gaps than they are about theirs.
- **Tricount** — fastest-growing competitor in India in 2026 from search results. Treat as serious — comparison page on roadmap.
- **Settle Up, Spliit, Splid** — name in listicles, brief paragraphs only. Not main rivals.
- **Cred / GPay / WhatsApp Pay** — mention in "vs casual workflows" pieces because that's how most Indians actually split bills today.

### What to NOT do
- No "Splitwise sucks" headlines. Indian search algorithms downrank emotional negativity, and it makes us look small.
- No fake screenshots or invented features for competitors.
- No "we're the only one with X" if X is also in Splitkaro. We're better than them; we're not unique.

---

## 6. Topic Cluster Map

```
PILLAR 1 — Splitwise/Splitkaro Escape
├── /splitwise-alternative                              [exists]
├── /splitkaro-alternative                              [BUILD]
├── /compare/splitwise                                  [expand to 2k words]
├── /compare/splitkaro                                  [BUILD — priority]
├── /compare/tricount                                   [exists]
├── /compare/settle-up                                  [exists]
├── /compare/spliit                                     [new]
├── /compare/cred                                       [new]
├── /compare/google-pay                                 [new]
├── /blog/splitwise-free-plan-limits-2026               [in sitemap — write]
├── /blog/splitwise-pro-worth-it-india                  [new]
├── /blog/splitkaro-premium-review                      [new]
├── /blog/why-splitwise-added-daily-limit               [new]
├── /blog/best-splitwise-alternatives-india-2026        [in sitemap — rename year]
├── /blog/best-splitkaro-alternatives-2026              [new]
└── /blog/migrate-from-splitwise-to-the-hisaab          [new — our import flow]

PILLAR 2 — How Indians Share Money
├── /for/trips                                          [exists]
├── /for/roommates                                      [exists]
├── /for/couples                                        [exists]
├── /for/office                                         [exists]
├── /for/pg-hostel                                      [new — search volume exists]
├── /for/family                                         [new]
├── /blog/how-to-split-rent-with-roommates              [in sitemap — write]
├── /blog/how-to-split-rent-unequal-by-room-size        [new]
├── /blog/how-to-split-rent-by-income                   [new]
├── /blog/how-to-split-trip-expenses-friends            [new]
├── /blog/split-couple-expenses-fairly                  [new]
├── /blog/split-office-lunch-expenses                   [new]
├── /blog/group-dinner-bill-split-item-wise             [new]
├── /trip/goa-expense-tracker                           [new — programmatic]
├── /trip/manali-expense-tracker                        [new]
├── /trip/leh-ladakh-expense-tracker                    [new]
└── ... (20–30 more cities)

PILLAR 3 — Hisab Kitab Tooling
├── /tools/rent-split-calculator                        [new — build first]
├── /tools/trip-budget-calculator                       [new]
├── /tools/who-pays-what                                [new — showcase our engine]
├── /tools/upi-split-link                               [new — shareable]
├── /blog/hisab-kitab-kaise-rakhe                       [new — Hinglish]
├── /blog/kharcha-split-karne-ka-app                    [new — Hinglish]
└── /blog/dosto-se-paise-vasool-kaise-kare              [new — Hinglish]
```

**Internal linking rule:** Every blog post links to its closest `/for/*` use-case page AND its closest `/compare/*` page. Every `/for/*` and `/compare/*` page links back to 3 relevant blog posts. Every page links to homepage CTA.

---

## 7. The First-90-Days Production Plan

If we ship **2 high-quality pieces per week**, we hit ~24 articles in 90 days. Sequence:

**Weeks 1–2 — Plug the obvious holes**
1. `/compare/splitkaro` (highest-volume gap)
2. `/splitkaro-alternative`

**Weeks 3–4 — Newsjack the moment**
3. `/blog/splitwise-free-plan-limits-2026` (long version, 2k words)
4. `/blog/splitwise-pro-worth-it-india`

**Weeks 5–6 — Build the listicle moat**
5. `/blog/best-splitwise-alternatives-india-2026` (rewrite to 3k words)
6. `/blog/best-splitkaro-alternatives-2026`

**Weeks 7–8 — Use-case how-tos**
7. `/blog/how-to-split-rent-with-roommates` (long version + calculator embed)
8. `/blog/how-to-split-trip-expenses-friends`

**Weeks 9–10 — First tool**
9. `/tools/rent-split-calculator` + supporting blog
10. `/blog/splitkaro-premium-review`

**Weeks 11–12 — Programmatic launch**
11–14. Goa, Manali, Leh, Bangalore expense-tracker pages (templated)
15. `/compare/cred` + `/compare/google-pay`

**Weeks 13+** — Continue programmatic city rollout, write 1 newsjack/month, add Hinglish posts.

---

## 7.5. Existing Asset — The r/developersIndia Reddit Post

**URL:** https://www.reddit.com/r/developersIndia/comments/1t4d0pu/6_months_building_an_app_to_compete_with/

**Metrics (as of capture):** 104,000 views · 505 upvotes · 70 comments · 400+ shares.

**Why this matters:** This is validated audience demand. The Splitwise-refugee narrative resonates strongly with the technical Indian early-adopter audience — exactly the ICP that installs first, leaves Play Store reviews, and tells colleagues. Treat the post as both a distribution win *and* a content asset.

### How to use it (8 concrete plays)

1. **Social-proof badge on homepage.** "As seen on r/developersIndia — 104k views, 505 upvotes." Real metric > vague "popular." Place in trust strip; link out only on desktop.
2. **Embed top 3 comments as testimonials** in the marquee planned in §5.9 of `HOMEPAGE_USER_MAGNET.md`. Real Reddit usernames + "via r/developersIndia" tag.
3. **Mine the 70 comments for VOC copy.** Every "X bugs me about Splitwise" comment becomes a headline, FAQ item, or feature card. Voice-of-customer always beats founder voice.
4. **Write a meta-content blog post:** "What I Learned From 104k Reddit Views Building a Splitwise Alternative." Shareable content. Cross-post to Indie Hackers + LinkedIn.
5. **Cite in `/compare/splitkaro` and `/compare/splitwise`.** A "this question drove 70 comments on r/developersIndia" line is instant credibility for skeptical visitors.
6. **Backlink hygiene.** Submit the URL to Wayback Machine today. Add a contextual mention from `/about` so we can route authority back if needed.
7. **Repurpose into 4 formats:** LinkedIn carousel (10 slides), Twitter thread (12 tweets), YouTube Short (60s), Instagram Reel. Same story, different shapes.
8. **Schedule a 30-day follow-up post:** "6 months later: 104k views taught us X. Here's what shipped." Reddit rewards continuity; follow-ups often out-perform originals.

### Voice implication

The post landed on r/developersIndia (not r/india or r/IndianStreetBets) — current ICP is **technical, India-based, early-adopter**. Don't dilute the voice for mainstream consumers yet. Write for engineers and PMs first; broaden later.

### The post itself (saved to `docs/reddit-post-original.md`)

The post is a **6-mistakes-I-made** founder-transparency piece. Tone: honest, contrarian, specific. Best lines (use as pull-quotes everywhere):

- *"UPI is a feature. The cultural fit is the moat."*
- *"Three features. That's the whole product."* (equal split, settle-up button, group balance view — what users actually use)
- *"Splitwise is literally a verb in some friend groups. Replacing a verb is hard."*
- *"You don't beat them on features. You beat them on a specific use case where they're weak — in my case, Indian rent + UPI flatmates."*
- *"The market is real but it punishes Western-style playbooks hard."*

### Strategic implications from the post itself

1. **The named wedge is "Indian rent + UPI flatmates."** This phrase should appear on `/for/roommates` and the homepage. We've been calling it "made for India" — that's vague. "Indian rent + UPI flatmates" is concrete.
2. **The 3 used features should dominate the homepage and listicle pitches.** Equal split, settle-up button, group balance view. Anything else is feature-bloat in copy. Cut accordingly.
3. **Don't run UAC ads.** Mistake 4 is a hard-earned lesson — paid installs poisoned organic ranking. Distribution must be content/community-first until retention is rock-solid.
4. **Listing optimization is on hold.** Mistake 5 — top-of-funnel is the bottleneck, not conversion. SEO/Reddit/LinkedIn first, ASO later.
5. **More user interviews.** ~30 done out of 500. Every page on the site should ask for a user chat in a small footer CTA. Lifetime ROI: highest of anything we do.

### How to fork the post into 9 derivative pieces

The post is structurally **6 mistakes + intro + working-now**. Each mistake is its own essay/thread/short.

| # | Derivative | Format | Where it goes |
|---|---|---|---|
| 1 | "UPI is a feature. The cultural fit is the moat." | 1,200-word essay | `/blog/why-upi-isnt-the-moat` |
| 2 | "I built 4 features users asked for. <3% touched them." | 800-word essay | `/blog/build-what-users-do-not-what-they-say` |
| 3 | "How Splitwise became a verb (and how to beat it)" | 1,200-word essay | `/blog/splitwise-brand-gravity` |
| 4 | "How UAC ads killed my Indian app's organic visibility" | 1,000-word essay | `/blog/uac-ads-killed-my-aso` |
| 5 | "Listing optimization without discovery is polish on a coffin" | 800-word essay | `/blog/aso-without-traffic` |
| 6 | "I have 500 users. I've talked to 30. Here's what I'd do differently." | 800-word essay | `/blog/talk-to-users-sooner` |
| 7 | Full post on our blog (canonical: Reddit) | Cross-post with attribution | `/blog/6-months-competing-with-splitwise` |
| 8 | LinkedIn carousel | 8 slides | LinkedIn (founder profile) |
| 9 | Twitter/X thread | 12 tweets | Twitter |

**Note:** When cross-posting #7, set `<link rel="canonical" href="reddit URL">` to avoid duplicate-content penalty, or rewrite enough to make ours canonical and link to Reddit as "originally posted on r/developersIndia." Pick one — the second option is better for our SEO.

### Pickup items added

| ID | Item | Type | Status |
|----|------|------|--------|
| R1 | Wayback-archive the Reddit post + screenshot the metrics | Hygiene | Pending |
| R2 | Mine the 70 comments into a VOC doc (`docs/voc-reddit.md`) | Research | Pending |
| R3 | Add "As seen on r/developersIndia" trust strip to homepage | Homepage | Pending |
| R4 | Cross-post the full post to `/blog/6-months-competing-with-splitwise` (re-written, canonical to us) | Shareable | Pending |
| R5 | Repurpose to LinkedIn carousel + Twitter thread | Distribution | Pending |
| R6 | Schedule 30-day follow-up Reddit post | Distribution | Pending |
| R7 | Pull 3 testimonial quotes from comments for homepage marquee | Homepage | Pending |
| R8 | Mistake-1 essay: "Why UPI Isn't the Moat" | Shareable post | Pending |
| R9 | Mistake-2 essay: "Build What Users Do, Not What They Say" | Shareable post | Pending |
| R10 | Mistake-3 essay: "How Splitwise Became a Verb" | Shareable post | Pending |
| R11 | Mistake-4 essay: "UAC Ads Killed My ASO" | Shareable post | Pending |
| R12 | Mistake-5 essay: "ASO Without Discovery" | Shareable post | Pending |
| R13 | Mistake-6 essay: "I Talked to 30 of 500 Users" | Shareable post | Pending |
| R14 | Update homepage copy to feature "Indian rent + UPI flatmates" wedge | Copy | Pending |
| R15 | Reduce homepage feature count to the 3 used features (equal split, settle-up, balance view) | Copy | Pending |
| R16 | Add "Talk to me" footer CTA on every page (link to founder calendly) | Funnel | Pending |

---

## 7.6. Existing Asset — App Store Listings & Early Reviews

### Current state (verified 2026-05-06)

- **Google Play:** *Hisaab: Splitwise Alternative* — **26** five-star ratings, **500+** users
- **App Store:** *Hisaab: Split Bills & UPI* — **6** five-star ratings

### Why the listing names matter

These are doing SEO work *inside* each store independently:
- "Splitwise Alternative" in the Play Store name targets the highest-intent Android query.
- "Split Bills & UPI" in the App Store name targets the highest-intent iOS query (iOS Indians skew differently — UPI is the magnet term).

Don't change either. They're correctly segmented.

### Why the review counts matter

26 + 6 = 32 five-star reviews. Any rating under 50 reviews is fragile (one angry user moves the average meaningfully). Priority: **more reviews, fast.** And: 500+ users is small enough to be **honest about** — *"From 500+ Indians who switched"* converts better than a fake "10,000+ users" line.

### Immediate plays

1. **Add `aggregateRating` to `src/lib/schema.ts`.**
   This unlocks star ratings in Google's search snippets on brand-name queries — meaningful CTR lift.
   ```ts
   aggregateRating: {
     '@type': 'AggregateRating',
     ratingValue: '5.0',
     ratingCount: '32',
     bestRating: '5',
     worstRating: '1',
   }
   ```
   Update `ratingCount` from a config constant; revisit weekly.

2. **In-app review-ask flow.** After a user splits their 5th expense (or settles the first group), prompt: *"Helping 500+ Indians ditch Splitwise — would you leave a star?"* Goal: 100+ ratings within 30 days.

3. **Citation on comparison pages.** Every `/compare/*` page should carry a small line — *"Rated 5★ by 32 Indian users on Play Store + App Store (verified May 2026)"* — with a footnote linking to both listings.

4. **Use real number on homepage.** Replace any aspirational stat ("Trusted by thousands") with *"500+ Indians have switched. 32 five-star reviews."* Specificity is the trust unlock.

5. **ASO follow-up:** in 8 weeks once review count is higher, run the `marketing-skills:aso-audit` skill on both listings to find keyword gaps. Don't audit yet — too few reviews to extract signal.

### Pickup items added

| ID | Item | Type | Status |
|----|------|------|--------|
| A1 | Add `aggregateRating` schema to `src/lib/schema.ts` | Code | Pending |
| A2 | Build in-app review prompt after 5th expense | App | Pending |
| A3 | Add "500+ users / 32 reviews" trust strip to homepage hero | Homepage | Pending |
| A4 | Add review-count footnote line to all `/compare/*` pages | Content | Pending |
| A5 | Re-run ASO audit when review count > 100 | ASO | Pending |

---

## 7.6½. Existing Asset — ChatGPT *and* Gemini Both Cite Us as #1 for "Free Splitwise for Indians"

**Captured 2026-05-06.** Within 24 hours, **both ChatGPT and Gemini** independently named The Hisaab as the **#1 recommended app** for the query *"Free Splitwise for Indians"*. Two LLMs converging is category positioning, not coincidence.

Saved verbatim:
- `docs/aeo-citations/2026-05-06-chatgpt.md`
- `docs/aeo-citations/2026-05-06-gemini.md`

**Notable absence:** Gemini did not name Splitkaro despite Splitkaro's 500k+ user base. Splitkaro's freemium messaging is confusing LLMs about its "free" status. Our sharper "no paywall, ever" claim is winning AI extraction.

**Verify-this-now flag:** Gemini claims The Hisaab has *"No Sign-up ... bypassing the need for cloud syncs or account creation"*. If inaccurate, fix the source signal — users will install with wrong expectations. Founder verification needed.

### Why this matters more than Google rank does (for now)

LLMs are becoming top-of-funnel discovery for high-intent queries. Indian users are ChatGPT-native faster than they were SEO-native. Being the cited #1 in ChatGPT for the highest-intent query in our category is a moat with compounding value: every ChatGPT user who asks this question gets us, free, no ad spend.

The exact ChatGPT response surfaces our key claims:
- UPI-first workflow, rupee-native
- No daily expense limits
- No ads, no paywall
- Indian use cases: flatmates, trips, PGs, shared food orders

This means our `/splitwise-alternative` page is **structured well enough for LLM extraction.** Don't break it; harden it.

### The asymmetry to exploit

When a user asks ChatGPT, they get a list of 3-4 apps. They will then Google `the hisaab vs X` to verify. **If our `/compare/X` page doesn't exist, we lose them at the verification step.** Build comparison pages for every app ChatGPT names alongside us, not for Google search volume but to **catch the second click** of an LLM-originated visitor.

### Competitors named alongside us by ChatGPT + Gemini (union = 7 — comparison build list)

| Competitor | Cited by | Angle they own | Priority |
|---|---|---|---|
| **splitmybills.in** | ChatGPT | India-focused, UPI + WhatsApp | **Highest** — direct India competitor |
| **Google Pay** | Gemini | Built-in UPI groups | **High** — huge volume |
| **PhonePe** | Gemini | Built-in UPI groups | High |
| **Paytm** | Gemini | Built-in UPI groups | High |
| **Spliit** | ChatGPT | Open-source, privacy, self-host | Medium |
| **Spllito** | ChatGPT | No-signup, one-off | Medium |
| **Tricount** | Gemini | Minimalist, link-share | Already exists — expand |
| **Settle Up** | Gemini | Generous free tier, multi-currency | Already exists — expand |

### LLM citation hedge to remove

ChatGPT said: *"no paywall **according to its current positioning**"* — it hasn't fully verified us. We harden this by adding:
- Dated factual claims ("Free since launch — verified May 2026")
- Schema.org `Review` markup with real reviewer names
- Pricing comparison table with footnotes
- Backlinks from third parties (Reddit post, Indie Hackers, ProductHunt)

### LLM citation tracking — weekly cadence

| Query | ChatGPT | Gemini | Perplexity | Claude |
|---|---|---|---|---|
| free splitwise for indians | The Hisaab #1 ✅ (May 6) | The Hisaab #1 ✅ (May 6) | ? | ? |
| free splitwise alternative india | ? | ? | ? | ? |
| best bill split app for upi | ? | ? | ? | ? |
| splitkaro alternative | ? | ? | ? | ? |
| splitwise alternative reddit | ? | ? | ? | ? |
| how to split rent in india | ? | ? | ? | ? |
| best app for goa trip expenses | ? | ? | ? | ? |
| how do indian flatmates split rent | ? | ? | ? | ? |
| trip expense app india | ? | ? | ? | ? |

Run weekly. Track which pages get cited. Invest in citation-friendly hardening of those pages.

### Pickup items added

| ID | Item | Type | Status |
|----|------|------|--------|
| L1 | Screenshot ChatGPT result + archive to `docs/aeo-citations/2026-05-06.md` | Hygiene | Pending |
| L2 | Post the citation as social proof on Twitter, LinkedIn, Reddit follow-up | Distribution | Pending |
| L3 | Run `marketing-skills:ai-seo` skill on `/splitwise-alternative` and `/compare/splitwise` | AEO | Pending |
| L4 | Build `/compare/splitmybills` (highest-priority new competitor) | Comparison | Pending |
| L5 | Build `/compare/spliit` | Comparison | Pending |
| L6 | Build `/compare/spllito` | Comparison | Pending |
| L7 | Add "Featured by ChatGPT and Gemini as #1 free Splitwise alternative for India" badge to homepage trust strip | Homepage | Pending |
| L8 | Set up weekly LLM-citation tracker (ChatGPT/Gemini/Perplexity/Claude) | Ops | Pending |
| L9 | Add dated factual-claim footnotes ("Free since 2025 — verified May 2026") to all comparison pages | Content | Pending |
| L10 | 30-day follow-up: re-query the same prompts and track ranking shift | Ops | Pending |
| L11 | ~~Verify the "no sign-up / no cloud sync" Gemini claim~~ — RESOLVED: Hisaab has signup + cloud sync for primary users; friends view shared groups via link without signup. Gemini compressed this; we clarify, not retract. | Hygiene | ✅ Resolved |
| L11a | Add explicit "No signup required for friends — they view via link" paragraph to `/splitwise-alternative` (LLM-extractable) | Content | Pending |
| L11b | Add "Friends view via link. No app, no signup." feature card to homepage; reference Tricount's link-share as familiar pattern | Homepage | Pending |
| L11c | Add FAQ entry "Do my friends have to sign up?" with FAQ schema on `/splitwise-alternative` | Content | Pending |
| L11d | Standardize the 50-word AEO message across `<meta description>`, page intros, store listing, and schema.org `description` — consistency stops LLM hedging | Content | Pending |
| L12 | Build `/compare/google-pay`, `/compare/phonepe`, `/compare/paytm` (UPI app comparisons — Gemini named these) | Comparison | Pending |
| L13 | Build `/compare/splitmybills` — direct India competitor named by ChatGPT | Comparison | Pending |
| L14 | Build `/compare/spliit` and `/compare/spllito` (named by ChatGPT) | Comparison | Pending |
| L15 | Add "Trip vs Flatmate?" diagnostic toggle to homepage hero (mirror Gemini's question) | Homepage | Pending |
| L16 | Combined ChatGPT + Gemini social-proof post on LinkedIn / Twitter / Reddit | Distribution | Pending |

---

## 7.65. Existing Asset — Real User Reviews (saved in `docs/user-reviews.md`)

We have **14+ real reviews** across Play Store and App Store, captured 2026-05-06. Five are headline-grade. The other nine are useful for marquees and supporting copy.

### The single most powerful line we've earned

> *"I have deleted splitwise and have been The Hisaab for over 15 days now. Kudos!"* — **IamNavv**, App Store, Apr 10, 2026

Put this above the fold. It says everything `/splitwise-alternative` is trying to say, in 19 words, in a real user's voice, with a real attribution.

### Patterns to bake into copy

1. **"Easy to use" appears in 5 of 14 reviews.** Position Hisaab as **"the easy one,"** not "the feature-rich one."
2. **Splitwise is the comparison anchor users invoke unprompted.** Lean in — every page should make the Splitwise contrast explicit.
3. **PG / trip / hisab records** are the three use cases that surface organically. These three `/for/*` pages should be the most-built.
4. **Founder responsiveness is being noticed** (Nodata explicitly thanks for quick fix). A "we reply to every review within 24h" line is a real moat that Splitwise structurally cannot match. Make it visible on `/about`.

### Where each headline review goes

| Review | Page |
|---|---|
| IamNavv ("I deleted Splitwise") | Homepage hero, `/compare/splitwise`, `/splitwise-alternative` |
| Harshit Gupta ("Must-have for PG") | `/for/roommates`, `/for/pg-hostel`, PG-targeted Reels |
| Shresht ("no ads no nonsense") | Homepage trust strip |
| Aadarsh11 ("specially when in a trip") | `/for/trips`, `/trip/{city}-*` pages |
| Ahana@Anu ("clean design") | Homepage marquee, `/about` |

### Pickup items added

| ID | Item | Type | Status |
|----|------|------|--------|
| U1 | Add `Review` schema for 5 headline reviews to `src/lib/schema.ts` | Code | Pending |
| U2 | Build homepage testimonial marquee using these quotes (real names, dates, platforms) | Component | Pending |
| U3 | Route IamNavv quote to `/compare/splitwise` and `/splitwise-alternative` heroes | Content | Pending |
| U4 | Route Harshit quote to `/for/roommates` (and `/for/pg-hostel` when built) | Content | Pending |
| U5 | Route Aadarsh quote to `/for/trips` and programmatic `/trip/{city}` template | Content | Pending |
| U6 | Render top quote in App Store / Play Store screenshot strip | ASO | Pending |
| U7 | 5 Reels — one per headline review, overlay on screen-record | Distribution | Pending |
| U8 | Add "we reply to every review within 24h" line to `/about` (founder moat) | Copy | Pending |

---

## 7.7. Existing Asset — Instagram (@thehisaab)

**Handle:** [@thehisaab](https://www.instagram.com/thehisaab/)

### Why Instagram matters for this product

- Indian consumer apps live or die on Reels. Instagram's discovery algorithm is currently the cheapest organic reach on the planet for Indian audiences.
- Splitkaro and Splitwise have **near-zero** Reels game. Easy white space.
- The aesthetic moat (Hinglish, group-trip vibes, WhatsApp-chaos screenshots from `HOMEPAGE_USER_MAGNET.md`) maps directly onto Reels content shapes.

### Wire it into SEO immediately

Add to `src/lib/schema.ts` `organizationSchema.sameAs`:

```ts
sameAs: [
  'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab',
  'https://apps.apple.com/in/app/the-hisaab/id6759067047',
  'https://www.instagram.com/thehisaab/',
  'https://www.reddit.com/r/developersIndia/comments/1t4d0pu/6_months_building_an_app_to_compete_with/',
],
```

This strengthens Google's knowledge panel for brand-name searches and lets crawlers connect signal across platforms.

### Channel split (don't post the same thing everywhere)

| Channel | Audience | Content style |
|---|---|---|
| **Instagram Reels** (consumer) | College, flatmates, couples, group-trip culture | Hinglish, Goa/trip vibes, WhatsApp screen-record chaos, "POV: your friend hasn't paid back" jokes, in-app demos |
| **Instagram carousel** | Same | Visual storytelling — "5 ways friends ghost on group expenses," settle-up math, mistakes-in-Splitwise teardowns |
| **LinkedIn** | Founders, PMs, indie hackers | Founder transparency posts (mine the Reddit post format) |
| **Twitter/X** | Indie + dev community | Newsjacks ("Splitwise just added a daily limit"), short threads |
| **Reddit** | r/developersIndia, r/IndiaInvestments, r/india + city subs | Build-in-public, helpful answers in threads, no link drops |
| **YouTube Shorts** | Same as Instagram, slightly older skew | Repost top Reels |

**Rule:** Repurpose the *narrative*, not the *file*. A Reel and a tweet are not the same medium with different aspect ratios.

### Reel content seeds (first 10 to ship)

1. "POV: you went on a Goa trip and one friend hasn't paid back" — voiceover + WhatsApp screen-record
2. "Splitwise just told me I hit my daily limit. So I switched." — screen-record + reaction
3. "Splitwise vs The Hisaab: 60-second showdown" — split-screen
4. "How my flatmates split rent now (after 3 fights)" — story format
5. "The 3 features we kept. The 12 we deleted." — fork from the Reddit post (Mistake 2)
6. "Why UPI isn't enough" — fork from Reddit post (Mistake 1)
7. "Indian group dinner: 8 people, 1 bill, 4 vegetarians" — item-wise split demo
8. "The 'I'll pay later' lie, ranked" — listicle reel
9. "From 0 to 500 users: what worked" — founder content
10. "Founder reads negative review" — vulnerability content (works on Reels)

### Pickup items added

| ID | Item | Type | Status |
|----|------|------|--------|
| I1 | Add Instagram URL to `organizationSchema.sameAs` in `src/lib/schema.ts` | Code | Pending |
| I2 | Add Instagram link to homepage footer + every layout footer | Code | Pending |
| I3 | Ship 3 Reels per week from the seed list | Distribution | Pending |
| I4 | Embed top-performing Reel on homepage testimonial section | Homepage | Pending |
| I5 | Cross-post Reels to YouTube Shorts (zero-cost amplification) | Distribution | Pending |

---

## 8. Distribution (where Indian users actually are)

Publishing alone won't work — we need 4–5 amplification channels.

| Channel | What works | Cadence |
|---|---|---|
| **r/IndiaInvestments, r/IndiaTech, r/india, r/bangalore, r/mumbai, r/delhi** | Honest "I built this" + helpful answer to actual threads | Reply to relevant threads weekly. Don't drop links cold |
| **DesiDime, Quora India** | Long, helpful answers with one mention | Pick 2–3 threads per week from a tracker |
| **LinkedIn (founder, not company)** | Short founder narrative + one-line app mention | 2–3 posts/week, original POV not blog reposts |
| **Twitter/X** | Newsjack threads on Splitwise drama, screenshots of feature comparisons | Daily-ish; founder voice |
| **Instagram** ([@thehisaab](https://www.instagram.com/thehisaab/)) | Reels in Hinglish + carousels — consumer audience | 3 Reels/week + 2 carousels/week |
| **YouTube Shorts** | Repurpose Reels — Indian users discover finance content here too | Same cadence as Reels |
| **Product Hunt** | Re-launch when we ship Splitwise import or item-wise split | Plan around feature drops |
| **Indie Hackers** | "Building a free Splitwise alternative in India" build-in-public | Monthly post |
| **App-comparison directories** (`alternativeto.net`, SoftwareSuggest, G2, Capterra-IN) | Submit + ask first 50 users for reviews | Set up once, then maintain |
| **Backlinks** | Tricount and Splitkaro both publish guest posts on Indian travel/finance blogs. Pitch 5/month. | Monthly |
| **YouTube Shorts** | "I switched from Splitwise to ___" 30-sec story format | 1–2/week if budget allows |

A blog post without distribution gets 5 visits in month one. A blog post with a Reddit comment, a LinkedIn post, and a Twitter thread can hit 500+ in week one.

---

## 9. What to Measure (in Mixpanel + GSC)

For each post, track:
- Impressions, position, CTR (GSC) → is it ranking?
- Sessions → page → install-button click rate (Mixpanel) → is it converting?
- Scroll depth → 75% reach (Mixpanel) → is the content holding attention?
- Backlinks earned (Ahrefs/Search Console) → is it authoritative?

**Kill criterion:** If a post is older than 90 days and gets <50 impressions/month AND <2% CTR, rewrite or noindex. Don't let dead content rot.

---

## 10. Three Things to Do This Week

1. **Build `/compare/splitkaro`** — biggest competitive gap, highest Indian commercial intent.
2. **Rewrite `/blog/splitwise-free-plan-limits` to 2,000 words** with the 4–5 expense daily limit, the 10-second cooldown, the ad situation, screenshots, and a "what to do instead" CTA. Single most clickable headline in our niche right now.
3. **Set up the programmatic template** for `/trip/{city}-expense-tracker` so we can ship 5 in week one without writing each from scratch.

---

## Appendix A — Pickup List (one item at a time)

When ready to execute a piece, grab the row, scope it, and move it to "in progress."

| ID | Item | Type | Target word count | Pillar | Status |
|----|------|------|-------------------|--------|--------|
| C1 | `/compare/splitkaro` | Comparison | 2,000 | P1 | Pending |
| C2 | `/splitkaro-alternative` | Landing | 1,800 | P1 | Pending |
| C3 | `/blog/splitwise-free-plan-limits-2026` | Newsjack | 2,000 | P1 | Pending |
| C4 | `/blog/splitwise-pro-worth-it-india` | Newsjack | 1,200 | P1 | Pending |
| C5 | `/blog/best-splitwise-alternatives-india-2026` | Listicle | 3,000 | P1 | Pending |
| C6 | `/blog/best-splitkaro-alternatives-2026` | Listicle | 3,000 | P1 | Pending |
| C7 | `/blog/how-to-split-rent-with-roommates` | How-to | 1,500 | P2 | Pending |
| C8 | `/blog/how-to-split-trip-expenses-friends` | How-to | 1,500 | P2 | Pending |
| C9 | `/tools/rent-split-calculator` | Tool + 800 words | 800 + tool | P3 | Pending |
| C10 | `/blog/splitkaro-premium-review` | Newsjack/review | 1,500 | P1 | Pending |
| C11 | `/trip/goa-expense-tracker` | Programmatic | 1,000 | P2 | Pending |
| C12 | `/trip/manali-expense-tracker` | Programmatic | 1,000 | P2 | Pending |
| C13 | `/trip/leh-ladakh-expense-tracker` | Programmatic | 1,000 | P2 | Pending |
| C14 | `/trip/bangalore-expense-tracker` | Programmatic | 1,000 | P2 | Pending |
| C15 | `/compare/cred` | Comparison | 1,500 | P1 | Pending |
| C16 | `/compare/google-pay` | Comparison | 1,500 | P1 | Pending |
| C17 | `/compare/tricount` (expand) | Comparison | 2,000 | P1 | Pending |
| C18 | `/blog/migrate-from-splitwise-to-the-hisaab` | How-to | 1,200 | P1 | Pending |
| C19 | `/for/pg-hostel` | Use-case landing | 1,200 | P2 | Pending |
| C20 | `/tools/trip-budget-calculator` | Tool + 700 words | 700 + tool | P3 | Pending |
| C21 | `/tools/who-pays-what` | Tool + 700 words | 700 + tool | P3 | Pending |
| C22 | `/tools/upi-split-link` | Tool + 700 words | 700 + tool | P3 | Pending |
| C23 | `/blog/hisab-kitab-kaise-rakhe` | Hinglish | 1,200 | P3 | Pending |
| C24 | `/blog/kharcha-split-karne-ka-app` | Hinglish | 1,200 | P3 | Pending |

---

## Sources

- [Tricount: Top Splitwise Alternatives in India (2025)](https://tricount.com/blog/top-splitwise-alternatives-in-india-2025-which-app-should-you-switch-to)
- [Splitterup: Is Splitwise Pro Worth It?](https://www.splitterup.app/blog/splitwise-pro-worth-it)
- [Splitty: Splitwise Free Limits in 2026](https://splittyapp.com/learn/splitwise-free-limits/)
- [ITVoice: Splitwise has introduced restrictions on free expenses](https://www.itvoice.in/splitwise-has-introduced-restrictions-on-the-number-of-free-expenses-users-can-add)
- [PartyTab: 7 Best Splitwise Alternatives in 2026](https://partytab.app/blog/best-splitwise-alternatives)
- [Tricount: How do you split travel expenses in India (Goa, Manali, Jaipur)](https://tricount.com/en-us/blog/how-do-you-split-travel-expenses-with-friends-in-india-goa-manali-jaipur)
- [Splitkaro vs Splitwise (their own page)](https://www.splitkaro.com/splitwise-vs-splitkaro)
- [Splitkaro Goa trip planner](https://www.splitkaro.com/india/goa)
- [Splitkaro Premium](https://www.splitkaro.com/splitkaro-premium)
- [Medium: Switched from Splitwise to Splitkaro](https://medium.com/@nnoob2691/have-been-a-splitwise-user-for-years-recently-switched-to-a-new-indian-app-called-splitkaro-8e60ce145491)
- [Pratham Arora: How I bypass Splitwise ads and limits](https://medium.com/@prathamarora25.6/how-i-bypass-splitwise-ads-and-limits-and-you-should-too-68b7b84fbae5)
- [Splitwise rent calculator](https://www.splitwise.com/calculators/rent)
- [LeaseRunner: How to Split Rent Fairly (5 methods)](https://www.leaserunner.com/blog/how-to-split-rent)
- [BillCut: Bill Splitter Apps for Roommates in Indian Cities](https://www.billcut.com/blogs/bill-splitter-apps-for-roommates-in-indian-cities/)
- [YatraYaar: How to Split Travel Expenses (2026)](https://www.yatrayaar.in/blog/how-to-split-travel-expenses)
- [DesiDime: Splitwise Alternatives discussion](https://www.desidime.com/discussions/splitwise-alternatives)
- [Finanjo: Top 10 Splitwise Alternatives](https://finanjo.com/personal-finance/splitwise-alternatives-apps-free-and-paid)

---

_Document owner: Krishan. Pick items from §10 / Appendix A one at a time._

---

## §11 — MASTER PUNCH LIST (start here)

Consolidated from every section above. Phased by leverage and dependencies. **78 items.** Each one references the original ID so you can find context.

Legend: `[C]` content · `[H]` homepage · `[CD]` code · `[ASO]` store listings · `[D]` distribution · `[O]` ops/hygiene

---

### PHASE 0 — Foundation (next 2–3 hours)

These are the schema and copy unlocks where one change benefits every other piece downstream. Do these first.

| # | ID | Action | File / Surface | Type |
|---|---|---|---|---|
| 1 | L11d | Define and lock the 50-word AEO message (the "consistency stops LLM hedging" paragraph) | New: `docs/aeo-message.md` | C |
| 2 | L11d | Apply 50-word AEO message to `<meta description>` | `src/app/splitwise-alternative/layout.tsx` | CD |
| 3 | L11d | Apply 50-word AEO message to `softwareApplicationSchema.description` | `src/lib/schema.ts` | CD |
| 4 | I1 | Add Instagram URL to `organizationSchema.sameAs` | `src/lib/schema.ts` | CD |
| 5 | I1 | Add Reddit thread URL to `organizationSchema.sameAs` | `src/lib/schema.ts` | CD |
| 6 | A1 | Add `aggregateRating` (5.0 / 32) to `softwareApplicationSchema` | `src/lib/schema.ts` | CD |
| 7 | U1 | Add `Review` schema for 5 headline reviews | `src/lib/schema.ts` (new export) | CD |
| 8 | U1 | Mount `Review` schema JsonLd on relevant pages | various `layout.tsx` | CD |
| 9 | R15 | Trim `softwareApplicationSchema.featureList` to the 3 used features (equal split, settle-up via UPI, group balance view) | `src/lib/schema.ts` | CD |

---

### PHASE 1 — Convert the existing surge (this week)

The page that's already winning AEO citations needs to compound. Tighten the homepage and `/splitwise-alternative` so every visitor from ChatGPT, Gemini, Reddit, and the App Store hits aligned messaging.

| # | ID | Action | File / Surface | Type |
|---|---|---|---|---|
| 10 | U3 | Drop IamNavv quote ("I have deleted splitwise…") into homepage hero | `src/app/page.tsx` | H |
| 11 | R14 | Replace generic "made for India" copy with the named wedge: "Indian rent + UPI flatmates" | `src/app/page.tsx` | H |
| 12 | R15 | Reduce homepage feature claims to the 3 used features (equal split, settle-up via UPI, group balance view) | `src/app/page.tsx` | H |
| 13 | L7 | Build "ChatGPT + Gemini #1 / 32 ★ / 500+ users / r/developersIndia 104k" trust strip | `src/app/page.tsx` | H |
| 14 | A3 | Replace any "trusted by thousands" copy with the real 500+ / 32-review numbers | `src/app/page.tsx` | H |
| 15 | R3 | "As seen on r/developersIndia" badge inside trust strip (covered by #13) | `src/app/page.tsx` | H |
| 16 | L11a | Add "No signup required for friends — they view via link" paragraph high on `/splitwise-alternative` | `src/app/splitwise-alternative/page.tsx` | C |
| 17 | L11c | Add FAQ entry "Do my friends have to sign up?" with FAQPage schema | `src/app/splitwise-alternative/layout.tsx` (faqs array) | C |
| 18 | L11b | Add "Friends view via link. No app, no signup." feature card to homepage | `src/app/page.tsx` | H |
| 19 | U2 | Build homepage testimonial marquee using the 5 headline reviews | `src/components/TestimonialMarquee.tsx` (new) | H |
| 20 | U8 | Add "we reply to every review within 24h" line to `/about` (founder moat) | `src/app/about/page.tsx` | C |
| 21 | R1 | Wayback-archive the Reddit post + screenshot the metrics | external | O |
| 22 | L1 | Screenshot ChatGPT + Gemini citations as PNGs (saved markdown is in `docs/aeo-citations/`) | external | O |
| 23 | L11d | Apply 50-word AEO message to App Store + Play Store first paragraph | external | ASO |

---

### PHASE 2 — Plug the comparison gaps (week 2–3)

LLMs are sending users to verify with `the hisaab vs X` searches. Catch the second click.

| # | ID | Action | File / Surface | Type |
|---|---|---|---|---|
| 24 | C1 / L11 | Build `/compare/splitkaro` (highest-volume gap, ~2,000 words) | new route | C |
| 25 | C2 | Build `/splitkaro-alternative` landing (~1,800 words) | new route | C |
| 26 | L13 | Build `/compare/splitmybills` (named by ChatGPT) | new route | C |
| 27 | L12 | Build `/compare/google-pay` (named by Gemini, huge volume) | new route | C |
| 28 | L12 | Build `/compare/phonepe` | new route | C |
| 29 | L12 | Build `/compare/paytm` | new route | C |
| 30 | L14 | Build `/compare/spliit` (named by ChatGPT) | new route | C |
| 31 | L14 | Build `/compare/spllito` (named by ChatGPT) | new route | C |
| 32 | C3 | Rewrite `/blog/splitwise-free-plan-limits-2026` to ~2,000 words (newsjack the moment) | existing blog | C |
| 33 | U6 | Render top quote in App Store / Play Store screenshot strip | external | ASO |
| 34 | A4 | Add "Rated 5★ by 32 Indian users (verified May 2026)" footnote to all `/compare/*` pages | various pages | C |
| 35 | L9 | Add dated factual-claim footnotes ("Free since launch — verified May 2026") to all comparison pages | various pages | C |
| 36 | A2 | Build in-app review prompt after 5th expense / first settled group | mobile app | external |

---

### PHASE 3 — Content engine spin-up (month 1–2)

Establish weekly cadence. Mix newsjack, how-to, and use-case.

| # | ID | Action | Type |
|---|---|---|---|
| 37 | C4 | `/blog/splitwise-pro-worth-it-india` (newsjack, ~1,200 words) | C |
| 38 | C5 | Rewrite `/blog/best-splitwise-alternatives-india-2026` to ~3,000 words | C |
| 39 | C6 | `/blog/best-splitkaro-alternatives-2026` (~3,000 words) | C |
| 40 | C7 | `/blog/how-to-split-rent-with-roommates` longform + calculator embed (~1,500 words) | C |
| 41 | C8 | `/blog/how-to-split-trip-expenses-friends` (~1,500 words) | C |
| 42 | C10 | `/blog/splitkaro-premium-review` (~1,500 words) | C |
| 43 | C18 | `/blog/migrate-from-splitwise-to-the-hisaab` (showcase import flow) | C |
| 44 | C19 | Build `/for/pg-hostel` (validated by Harshit's review) | C |
| 45 | R8 | Mistake 1 essay — `/blog/why-upi-isnt-the-moat` | C |
| 46 | R9 | Mistake 2 essay — `/blog/build-what-users-do-not-what-they-say` | C |
| 47 | R10 | Mistake 3 essay — `/blog/splitwise-brand-gravity` | C |
| 48 | R11 | Mistake 4 essay — `/blog/uac-ads-killed-my-aso` | C |
| 49 | R12 | Mistake 5 essay — `/blog/aso-without-traffic` | C |
| 50 | R13 | Mistake 6 essay — `/blog/talk-to-users-sooner` | C |
| 51 | R4 | Cross-post full Reddit post to `/blog/6-months-competing-with-splitwise` (canonical to us) | C |
| 52 | R2 | Mine the 70 Reddit comments into a VOC doc (`docs/voc-reddit.md`) | O |
| 53 | R7 | Pull 3 testimonial quotes from comments for marquee (covered by #19 if comments are mined) | H |
| 54 | L15 | Add "Trip vs Flatmate?" diagnostic toggle to homepage hero (mirror Gemini's question) | H |
| 55 | C17 | Expand `/compare/tricount` to ~2,000 words | C |
| 56 | C15 | Build `/compare/cred` | C |

---

### PHASE 4 — Tools & programmatic (month 2–3)

Calculators are link magnets. Programmatic city pages are the long-tail moat.

| # | ID | Action | Type |
|---|---|---|---|
| 57 | C9 | `/tools/rent-split-calculator` (4 methods + ~800 words) | C |
| 58 | C20 | `/tools/trip-budget-calculator` | C |
| 59 | C21 | `/tools/who-pays-what` (live demo of the settlement engine) | C |
| 60 | C22 | `/tools/upi-split-link` (UPI deep-link generator — viral magnet) | C |
| 61 | C11 | `/trip/goa-expense-tracker` (programmatic template) | C |
| 62 | C12 | `/trip/manali-expense-tracker` | C |
| 63 | C13 | `/trip/leh-ladakh-expense-tracker` | C |
| 64 | C14 | `/trip/bangalore-expense-tracker` | C |
| 65 | C23 | `/blog/hisab-kitab-kaise-rakhe` (Hinglish) | C |
| 66 | C24 | `/blog/kharcha-split-karne-ka-app` (Hinglish) | C |
| 67 | C16 | (Already covered — `/compare/google-pay` in Phase 2) | — |

---

### PHASE 5 — Distribution + ops (always-on, starting week 1)

Publishing alone won't move numbers. Ship distribution alongside content.

| # | ID | Action | Cadence | Type |
|---|---|---|---|---|
| 68 | I3 | Ship 3 Reels per week from the seed list in §7.7 | weekly | D |
| 69 | I5 | Cross-post Reels to YouTube Shorts | weekly | D |
| 70 | I2 | Add Instagram link to footer of every layout | once | CD |
| 71 | I4 | Embed top-performing Reel on homepage testimonial section | when one breaks out | H |
| 72 | R5 | Repurpose Reddit post into LinkedIn carousel + Twitter thread | once | D |
| 73 | L16 | Combined ChatGPT + Gemini social-proof post on LinkedIn / Twitter / Reddit | once | D |
| 74 | L2 | Post the AEO citations as social proof | once | D |
| 75 | R6 | Schedule 30-day follow-up Reddit post on r/developersIndia | scheduled | D |
| 76 | A5 | Re-run ASO audit when review count > 100 | when triggered | ASO |
| 77 | L3 | Run `marketing-skills:ai-seo` skill on `/splitwise-alternative` and `/compare/splitwise` | once | O |
| 78 | L8 | Set up weekly LLM-citation tracker (ChatGPT/Gemini/Perplexity/Claude) | weekly | O |
| 79 | L10 | 30-day follow-up: re-query the LLM prompts and track citation persistence | scheduled | O |

---

### Cross-cutting reminders

- **One file, many edits:** Phase 0 items #2–9 all touch `src/lib/schema.ts` and `src/app/splitwise-alternative/layout.tsx`. Batch in one commit.
- **Homepage edits:** Phase 1 items #10–19 mostly touch `src/app/page.tsx`. Batch in one commit.
- **Comparison pages:** Phase 2 items #24–31 share a template — build the template first, then crank through.
- **Voice rules:** Hinglish, no marketing fluff, dated competitor claims, real user numbers. See `HOMEPAGE_USER_MAGNET.md` §8 ("What We Should NOT Do").

### Tracking

Mark items complete in this table as they ship. When the punch list bottoms out, refresh from current Mixpanel + GSC + LLM-citation data.


