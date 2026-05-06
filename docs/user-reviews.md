# User Reviews — Play Store & App Store

> Captured 2026-05-06. Use as the source of truth for testimonials, schema.org `Review` markup, and copy mining. Update when significant new reviews arrive.

---

## Headline-grade reviews (deploy to homepage / comparison pages)

### "I have deleted splitwise and have been The Hisaab for over 15 days now. Kudos!"
- **Reviewer:** IamNavv
- **Source:** App Store, India · Apr 10, 2026 · Title: *"Does what it claims flawlessly"*
- **Why it's gold:** The Splitwise-refugee narrative in one user's own words. Strongest possible social proof for `/compare/splitwise` and `/splitwise-alternative`.
- **Deploy to:**
  - Homepage hero adjacent block — the *"Oh, this is what Splitwise should have been"* moment from `HOMEPAGE_USER_MAGNET.md` §1
  - `/compare/splitwise` page hero
  - `/splitwise-alternative` near the top
  - Schema.org `Review` markup

### "Unlike Splitwise it's not that complicated to use... Must-have app for the ones who stay in PGs!"
- **Reviewer:** Harshit Gupta
- **Source:** Play Store · May 4, 2026
- **Why it's gold:** Validates two things at once — the Splitwise-is-complicated wedge *and* the PG/flatmate use case (named in the Reddit post as the wedge: "Indian rent + UPI flatmates").
- **Deploy to:**
  - `/for/roommates`
  - `/for/pg-hostel` (when built — items C19/I from plan3.0)
  - Hero of any PG/flatmate-facing Reel
  - Schema.org `Review` markup

### "No ads no nonsense, easyy to useeee"
- **Reviewer:** Shresht Pratap Singh Thakur
- **Source:** Play Store · Apr 25, 2026
- **Why it's gold:** Zero-ads is one of the 3 moats from `HOMEPAGE_USER_MAGNET.md`. User said it spontaneously. Use the exact spelling — *"easyy to useeee"* signals authenticity.
- **Deploy to:**
  - Homepage trust strip
  - Comparison pages where "no ads" is a row
  - Reels overlay text

### "Really very helpful, specially when in a trip with friends"
- **Reviewer:** Aadarsh11
- **Source:** App Store, India · Apr 10, 2026
- **Why it's gold:** Trip use case validated by a real user in their own voice.
- **Deploy to:**
  - `/for/trips`
  - Every `/trip/{city}-expense-tracker` programmatic page
  - Reels about Goa/Manali trips

### "Clean design and simple interface. Works smoothly. Great app to manage personal finances without confusion."
- **Reviewer:** Ahana@Anu
- **Source:** App Store · Apr 17, 2026
- **Why it's gold:** Validates "clean/simple" — counter to Splitwise's complexity narrative.
- **Deploy to:**
  - Homepage testimonial marquee
  - About page

### "Extremely good. It helped me so much in keeping my hisab records."
- **Reviewer:** Krishna Kedia
- **Source:** Play Store · May 5, 2026
- **Why it's gold:** User naturally uses **"hisab records"** — confirms the brand-name term resonates and is search-relevant. Also: ironic that the user shares the founder's first name (almost) — note carefully.
- **Deploy to:**
  - Homepage marquee
  - Hinglish posts (`/blog/hisab-kitab-kaise-rakhe`)

---

## Supporting reviews (use in marquees, less prominent placement)

| Reviewer | Source | Quote | Best use |
|---|---|---|---|
| Lavish Agarwal | Play Store · May 4 | "Fantastic App" | Marquee |
| Ankit Chaurasia | Play Store · May 4 | "Easy to use, User friendly" | Marquee |
| Sanjay Agarwal | Play Store · May 4 | "Great experience" | Marquee |
| Suman Agrawal | Play Store · May 4 | "Very easy to use" | Marquee |
| Ronak Agarwalla | Play Store · May 4 | "Good" | Skip — too short |
| Insane Gamer | Play Store · May 4 | "You are awesome brother 🤌" (Hindi) | Reels — Hinglish vibe |
| Nodata | Play Store · May 1 | "...the issue has now been resolved... Thank you for your support and quick resolution." | About / Founder responsiveness page |

---

## Patterns observed (for copy strategy)

1. **"Easy to use" appears in 5 of 14 reviews.** This is the single most repeated phrase. The product's positioning should be **"the easy one,"** not "the feature-rich one."
2. **"Splitwise" appears as a comparison anchor in 2 reviews unprompted.** Confirms users frame Hisaab in opposition to Splitwise. Lean into this in copy.
3. **PG / trip / hisab records — three use cases surface in unsolicited reviews.** These are the three `/for/*` pages that should be most prominent.
4. **Founder responsiveness is being noticed** (Nodata's review explicitly thanks for quick resolution). Make this visible — a "we reply to every review within 24h" line is a real moat against Splitwise's faceless support.

---

## Implementation checklist

- [ ] **Schema.org `Review` markup** — add to `src/lib/schema.ts` for the 5 headline-grade reviews. Google may surface in rich results.
- [ ] **Homepage testimonial marquee** — implement per `HOMEPAGE_USER_MAGNET.md` §5.9 using these quotes (real names, real dates, real platforms).
- [ ] **Per-page testimonial routing:**
  - `/compare/splitwise` → IamNavv
  - `/for/roommates` + `/for/pg-hostel` → Harshit
  - `/for/trips` + `/trip/*` → Aadarsh
- [ ] **Reel template** — overlay each headline quote on a 30s product screen-record. 5 reels from this doc alone.
- [ ] **App Store / Play Store screenshots** — render 1-2 of these quotes on the screenshot strip in the listing. Listings still convert with social proof inside the listing.
- [ ] **Review-ask flow in-app** (item A2 from plan3.0) — to grow this list from 32 to 100+.

---

## Schema.org example for `src/lib/schema.ts`

```ts
export const reviewSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'SoftwareApplication', name: 'The Hisaab' },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'IamNavv' },
    reviewBody: 'I have deleted splitwise and have been The Hisaab for over 15 days now. Kudos!',
    datePublished: '2026-04-10',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'SoftwareApplication', name: 'The Hisaab' },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'Harshit Gupta' },
    reviewBody:
      "Unlike splitwise it's not that complicated to use. Must-have app for the ones who stay in PGs!",
    datePublished: '2026-05-04',
  },
  // …repeat for the 5 headline reviews
];
```
