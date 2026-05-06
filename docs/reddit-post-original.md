# Original Reddit Post — r/developersIndia

**URL:** https://www.reddit.com/r/developersIndia/comments/1t4d0pu/6_months_building_an_app_to_compete_with/
**Subreddit:** r/developersIndia
**Flair:** I Made This
**Author:** Krishan
**Captured metrics:** 104,000 views · 505 upvotes · 70 comments · 400+ shares (as of 2026-05-06)

---

## Title

**6 months building an app to compete with Splitwise in India. What I got wrong.**

---

## Body

Started building Hisaab six months ago thinking "Splitwise has bad UPI integration, this should be easy." Six months later, here's everything I underestimated. Posting in case it helps another indie founder avoid the same mistakes.

**Mistake 1: Assuming "Indian users want UPI" was enough of a wedge.**

It isn't. UPI is table stakes. The actual wedge is the social context around money in India — joint families, recurring rent, group trips of 8+ people, the "didi I'll pay later" dynamic that doesn't exist in the West. UPI is a feature. The cultural fit is the moat.

**Mistake 2: Building features users said they wanted instead of features they actually used.**

Users in early interviews asked for: receipt scanning, multi-currency, complex splitting rules, recurring expenses. I built all of them. Usage data: <3% of users touched any of them. The features that actually got used: equal split, settle-up button, group balance view. Three features. That's the whole product.

**Mistake 3: Underestimating Splitwise's brand gravity.**

I thought "people will switch the moment a better Indian option exists." They don't. Splitwise has 8+ years of brand equity — it's literally a verb in some friend groups. Replacing a verb is hard. You don't beat them on features, you beat them on a specific use case where they're weak (in my case: Indian rent + UPI flatmates).

**Mistake 4: Spending 6 weeks on UAC ads before realizing it was poisoning my retention numbers.**

UAC brought cheap installs from low-quality sources. They installed, never opened, killed my retention metrics, which made the Play Store algorithm suppress me organically. Net effect: paid users actively reducing my organic visibility. Worst kind of negative ROI.

**Mistake 5: Optimizing the listing before having a discovery channel.**

I rewrote my Play Store listing 4 times. Doesn't matter. If 200 people see your listing per month, even a 50% conversion rate gets you 100 installs. The bottleneck was top-of-funnel awareness. Listing optimization is a multiplier on traffic, not a substitute for it.

**Mistake 6: Waiting too long to talk to users.**

I have ~500 active users. I've talked to maybe 30. Should have been 100+ by now. Every conversation reveals a feature I overbuilt or a problem I didn't see. Cheapest research method that exists, and indie founders skip it because it feels uncomfortable.

**What's working now:** organic word-of-mouth from college flatmate groups, focused content on Indian-specific pain points, and ruthless feature deletion.

If anyone else is building consumer apps for India, happy to compare notes. The market is real but it punishes Western-style playbooks hard.

---

## Key pull-quotes (for reuse in homepage, blog posts, social)

- "UPI is a feature. The cultural fit is the moat."
- "Three features. That's the whole product."
- "You don't beat them on features, you beat them on a specific use case where they're weak — in my case, Indian rent + UPI flatmates."
- "Splitwise is literally a verb in some friend groups. Replacing a verb is hard."
- "UAC brought cheap installs from low-quality sources. Net effect: paid users actively reducing my organic visibility."
- "Listing optimization is a multiplier on traffic, not a substitute for it."
- "The market is real but it punishes Western-style playbooks hard."

---

## Validated audience signals

- The post landed on **r/developersIndia**, not a consumer sub. ICP for this content = **technical, India-based, early-adopter**. Not the same audience as the homepage's general consumer.
- **400+ shares** indicates the *content shape* (founder transparency + mistakes list + Indian-context) over-performs — repeatable format.
- **70 comments** is a VOC goldmine — see `docs/voc-reddit.md` (TODO).
