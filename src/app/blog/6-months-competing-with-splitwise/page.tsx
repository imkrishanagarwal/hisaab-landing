import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: '6 Months Building an App to Compete with Splitwise in India: What I Got Wrong',
  description:
    'The honest founder retrospective: 6 mistakes we made building Hisaab, an Indian Splitwise alternative. Originally posted on r/developersIndia (104k views).',
  alternates: { canonical: 'https://thehisaab.com/blog/6-months-competing-with-splitwise' },
  openGraph: {
    title: '6 Months Competing with Splitwise: What I Got Wrong',
    description: '6 honest mistakes from building an Indian Splitwise alternative.',
    url: 'https://thehisaab.com/blog/6-months-competing-with-splitwise',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="6 Months Building an App to Compete with Splitwise in India: What I Got Wrong"
      tag="Founder Notes"
      date="May 2026"
      readTime="7 min read"
      intro="Started building Hisaab six months ago thinking 'Splitwise has bad UPI integration, this should be easy.' Six months later, here's everything I underestimated. Originally posted on r/developersIndia where it hit 104k views and 505 upvotes; reposted here with light edits."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          Six mistakes from 6 months of building an Indian Splitwise alternative: (1) thinking UPI was the wedge — it&apos;s table stakes; (2) building features users asked for instead of features they used; (3) underestimating Splitwise&apos;s brand gravity; (4) UAC ads killing organic visibility; (5) optimizing the listing before having traffic; (6) not talking to users enough. The market is real but punishes Western-style playbooks.
        </p>
      }
      relatedLinks={[
        { label: 'Why UPI Isn\'t the Moat', href: '/blog/why-upi-isnt-the-moat' },
        { label: 'Build What Users Do', href: '/blog/build-what-users-do-not-what-they-say' },
        { label: 'How Splitwise Became a Verb', href: '/blog/splitwise-brand-gravity' },
        { label: 'UAC Ads Killed My ASO', href: '/blog/uac-ads-killed-my-aso' },
        { label: 'ASO Without Discovery', href: '/blog/aso-without-discovery' },
        { label: 'Talk to Users Sooner', href: '/blog/talk-to-users-sooner' },
      ]}
    >
      <p className="text-text2 leading-relaxed mb-6">
        Started building Hisaab six months ago thinking &quot;Splitwise has bad UPI integration, this should be easy.&quot; Six months later, here&apos;s everything I underestimated. Posting in case it helps another indie founder avoid the same mistakes.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3 mt-2">
        Mistake 1: Assuming &quot;Indian users want UPI&quot; was enough of a wedge.
      </h2>
      <p className="text-text2 leading-relaxed mb-6">
        It isn&apos;t. UPI is table stakes. The actual wedge is the social context around money in India — joint families, recurring rent, group trips of 8+ people, the &quot;didi I&apos;ll pay later&quot; dynamic that doesn&apos;t exist in the West. UPI is a feature. The cultural fit is the moat. (
        <a href="/blog/why-upi-isnt-the-moat" className="text-accent hover:text-primary-700">Full essay on this</a>.)
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">
        Mistake 2: Building features users said they wanted instead of features they actually used.
      </h2>
      <p className="text-text2 leading-relaxed mb-6">
        Users in early interviews asked for: receipt scanning, multi-currency, complex splitting rules, recurring expenses. I built all of them. Usage data: &lt;3% of users touched any of them. The features that actually got used: equal split, settle-up button, group balance view. Three features. That&apos;s the whole product. (
        <a href="/blog/build-what-users-do-not-what-they-say" className="text-accent hover:text-primary-700">Full essay on this</a>.)
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">
        Mistake 3: Underestimating Splitwise&apos;s brand gravity.
      </h2>
      <p className="text-text2 leading-relaxed mb-6">
        I thought &quot;people will switch the moment a better Indian option exists.&quot; They don&apos;t. Splitwise has 8+ years of brand equity — it&apos;s literally a verb in some friend groups. Replacing a verb is hard. You don&apos;t beat them on features; you beat them on a specific use case where they&apos;re weak (in my case: Indian rent + UPI flatmates). (
        <a href="/blog/splitwise-brand-gravity" className="text-accent hover:text-primary-700">Full essay on this</a>.)
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">
        Mistake 4: Spending 6 weeks on UAC ads before realizing it was poisoning my retention numbers.
      </h2>
      <p className="text-text2 leading-relaxed mb-6">
        UAC brought cheap installs from low-quality sources. They installed, never opened, killed my retention metrics, which made the Play Store algorithm suppress me organically. Net effect: paid users actively reducing my organic visibility. Worst kind of negative ROI. (
        <a href="/blog/uac-ads-killed-my-aso" className="text-accent hover:text-primary-700">Full essay on this</a>.)
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">
        Mistake 5: Optimizing the listing before having a discovery channel.
      </h2>
      <p className="text-text2 leading-relaxed mb-6">
        I rewrote my Play Store listing 4 times. Doesn&apos;t matter. If 200 people see your listing per month, even a 50% conversion rate gets you 100 installs. The bottleneck was top-of-funnel awareness. Listing optimization is a multiplier on traffic, not a substitute for it. (
        <a href="/blog/aso-without-discovery" className="text-accent hover:text-primary-700">Full essay on this</a>.)
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">
        Mistake 6: Waiting too long to talk to users.
      </h2>
      <p className="text-text2 leading-relaxed mb-6">
        I have ~500 active users. I&apos;ve talked to maybe 30. Should have been 100+ by now. Every conversation reveals a feature I overbuilt or a problem I didn&apos;t see. Cheapest research method that exists, and indie founders skip it because it feels uncomfortable. (
        <a href="/blog/talk-to-users-sooner" className="text-accent hover:text-primary-700">Full essay on this</a>.)
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">What&apos;s working now</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Organic word-of-mouth from college flatmate groups. Focused content on Indian-specific pain points. Ruthless feature deletion.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        AI search has been an unexpected channel — Hisaab is now picked #1 by both ChatGPT and Gemini in May 2026 when asked &quot;free Splitwise for Indians.&quot; That&apos;s free top-of-funnel traffic with explicit intent.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Reviews are growing too: 5.0★ across 32 reviews on App Store and Play Store. We reply to every review within 24 hours. The math is real but slow — and it&apos;s the kind of slow that compounds.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-3">If anyone else is building consumer apps for India</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Happy to compare notes. The market is real but it punishes Western-style playbooks hard. Drop me a line:{' '}
        <a href="mailto:admin@thehisaab.com" className="text-accent hover:text-primary-700">
          admin@thehisaab.com
        </a>
        . We reply within 24h.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        And the original Reddit post (104k views, 505 upvotes, 70 comments, 400+ shares):{' '}
        <a
          href="https://www.reddit.com/r/developersIndia/comments/1t4d0pu/6_months_building_an_app_to_compete_with/"
          className="text-accent hover:text-primary-700"
        >
          r/developersIndia
        </a>
        .
      </p>
    </BlogPostLayout>
  );
}
