import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "How UAC Ads Killed My Indian App's Organic Visibility (and What to Do Instead)",
  description:
    "Six weeks of UAC ads brought cheap installs that killed our retention metrics, which made the Play Store algorithm suppress us organically. The honest playbook.",
  alternates: { canonical: 'https://thehisaab.com/blog/uac-ads-killed-my-aso' },
  openGraph: {
    title: "How UAC Ads Killed My App's Organic Visibility",
    description: 'The mistake that cost us 6 weeks. Lessons for indie founders.',
    url: 'https://thehisaab.com/blog/uac-ads-killed-my-aso',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="How UAC Ads Killed My Indian App's Organic Visibility"
      tag="Founder Notes"
      date="May 2026"
      readTime="5 min read"
      intro="Six weeks into Hisaab, we tried to scale installs with Google's UAC (Universal App Campaigns). The cheap installs poisoned our retention metrics, which the Play Store algorithm uses to rank organic discovery. The result: paid installs actively reduced our organic visibility. Here's what happened and what to do instead."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          UAC drives cheap installs from low-quality sources. Those users install but don&apos;t open. The Play Store algorithm reads low retention as &quot;this app is bad&quot; and downranks it organically. Net effect: we paid money to make ourselves harder to find. For indie consumer apps in India, organic-first (content + community) almost always beats paid-first.
        </p>
      }
      relatedLinks={[
        { label: 'ASO Without Discovery', href: '/blog/aso-without-discovery' },
        { label: '6 Months Competing with Splitwise', href: '/blog/6-months-competing-with-splitwise' },
        { label: 'Why UPI Isn\'t the Moat', href: '/blog/why-upi-isnt-the-moat' },
        { label: 'About The Hisaab', href: '/about' },
      ]}
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">What UAC promised</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Google&apos;s pitch for UAC is appealing for indie founders. Set a budget. Let Google&apos;s algorithm find install-likely users across Search, YouTube, Google Display Network, and Play. Pay per install. Scale.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        We started at ₹50/day to test. Installs came in. Cost per install was around ₹15–25 — surprisingly cheap. We scaled to ₹500/day for a couple weeks, then ₹1500/day. Installs scaled linearly. We thought we were winning.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What actually happened</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Within four weeks, we noticed two patterns:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Day-1 retention dropped.</strong> Pre-UAC: ~45% of users opened the app the day after install. Post-UAC: ~18%. Most paid users installed and never opened.</li>
        <li><strong className="text-text1">Organic installs declined.</strong> We measured organic installs from Play Store search. They were trending up before UAC. After 3 weeks of UAC at scale, organic installs dropped by ~30%.</li>
      </ol>
      <p className="text-text2 leading-relaxed mb-6">
        The Play Store algorithm uses retention as a key ranking signal. Low D1 retention → algorithm thinks the app is low quality → suppresses it in search results. We were paying Google to make ourselves harder to find.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Why UAC failed for our specific app</h2>
      <p className="text-text2 leading-relaxed mb-4">
        UAC works well for two kinds of apps: (1) apps with a fast first-action loop (a casual game, a lottery app), where even low-intent users open and play; (2) apps with deep retention systems (push notifications, gamification, hooks) that pull installed users back regardless of acquisition source.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Hisaab is neither. Our value shows up the second time a user splits a bill — not in the first 30 seconds. Users acquired via UAC rarely make it to a real expense. They install, ignore the app, and disappear.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">The fix</h2>
      <p className="text-text2 leading-relaxed mb-4">
        We turned off UAC entirely. Within three weeks, organic install rate started recovering. Two months later, we were back above the pre-UAC baseline.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        The replacement strategy:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Content-led acquisition.</strong> Reddit, LinkedIn, Twitter founder posts. Our r/developersIndia post hit 104k views, 505 upvotes, 70 comments — converting at far higher quality than UAC.</li>
        <li><strong className="text-text1">SEO + AEO.</strong> /splitwise-alternative now ranks well for India queries and is picked #1 by ChatGPT and Gemini. Free traffic, high intent.</li>
        <li><strong className="text-text1">Word-of-mouth from college flatmate groups.</strong> One college flat installs us; the other 4 flatmates do too; the next semester their juniors do. Compounding.</li>
      </ul>

      <h2 className="text-2xl font-bold text-text1 mb-4">The lesson</h2>
      <p className="text-text2 leading-relaxed mb-4">
        For indie consumer apps with retention-driven value, paid-first acquisition is often actively negative ROI — not just zero. Until you have rock-solid retention metrics, organic and community-led acquisition is almost always the right play.
      </p>
      <p className="text-text2 leading-relaxed">
        UAC isn&apos;t evil. It&apos;s just the wrong tool for our stage and our app. If you&apos;re an indie founder considering it, watch your D1/D7 retention before and after with hawk eyes. If retention drops, kill the campaign immediately — every additional install is making your organic discovery worse.
      </p>
    </BlogPostLayout>
  );
}
