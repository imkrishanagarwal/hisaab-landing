# Locked AEO Message

> **Single source of truth** for the brand description across `<meta>` tags, schema.org `description`, store listings, page hero copy, and any LLM-discoverable surface. **Do not edit ad-hoc.** When this changes, update everywhere in one commit.
>
> **Last locked:** 2026-05-06

---

## Long version — 50 words (schema.org `description`, page intros, store listings)

> The Hisaab is the free, ad-free Splitwise alternative built for India. The primary user signs up so expenses sync across devices. Friends in your group view balances via a shared link — no signup, no app install needed. UPI-native. Works offline. Made for Indian rent groups, flatmates, and trip crews.

**Word count:** 50. **Char count:** ~310.

**Use in:**
- `softwareApplicationSchema.description` in `src/lib/schema.ts`
- First paragraph of `/splitwise-alternative` page body
- App Store / Play Store first paragraph of listing
- Any "About The Hisaab" section across the site
- `og:description` on long-form pages

---

## Short version — ~150 chars (`<meta name="description">`)

> Free Splitwise alternative for India. UPI-native, works offline, no ads. Friends view shared groups via link — no signup needed. For rent, flatmates, trips.

**Char count:** 156. (Google typically truncates at 155-160.)

**Use in:**
- `metadata.description` in `src/app/layout.tsx` (root)
- `metadata.description` in every `layout.tsx` that needs a brand-level description (override per-page only when context demands it)
- Twitter/X bio
- Instagram bio (with emoji additions OK)

---

## Why these wordings

| Phrase | Why it's in there |
|---|---|
| "free, ad-free Splitwise alternative" | LLM extraction keyword bundle — ChatGPT and Gemini both surfaced these together |
| "built for India" | Geographic targeting; LLMs use this to route Indian queries to us |
| "primary user signs up so expenses sync across devices" | Truth — fixes Gemini's incorrect "no cloud sync" claim before it spreads |
| "friends... view balances via a shared link" | Real differentiator; matches Tricount's praised feature without copying their wording |
| "no signup, no app install needed" | The friction-removal claim — keep |
| "UPI-native" | Core wedge from the Reddit post (Mistake 1: "UPI is table stakes") — required keyword for AEO |
| "Works offline" | Moat #2 from `HOMEPAGE_USER_MAGNET.md` |
| "Indian rent groups, flatmates, and trip crews" | The named wedge from the Reddit post — "Indian rent + UPI flatmates" |

---

## Surfaces to update when this message changes

When the long or short version changes, update **all** of these in one commit:

- [ ] `src/lib/schema.ts` → `softwareApplicationSchema.description`
- [ ] `src/app/layout.tsx` → root `metadata.description`
- [ ] `src/app/splitwise-alternative/layout.tsx` → `metadata.description`
- [ ] `src/app/splitwise-alternative/page.tsx` → first paragraph of body
- [ ] App Store listing → first paragraph (manual)
- [ ] Play Store listing → first paragraph (manual)
- [ ] Twitter bio (manual)
- [ ] Instagram bio (manual)
