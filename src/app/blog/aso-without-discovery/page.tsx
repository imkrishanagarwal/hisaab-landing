import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'ASO Without Discovery is Polish on a Coffin (Lessons from Hisaab)',
  description:
    "We rewrote our Play Store listing 4 times. It didn't matter. The bottleneck was top-of-funnel awareness, not listing conversion. Here's what we learned.",
  alternates: { canonical: 'https://thehisaab.com/blog/aso-without-discovery' },
  openGraph: {
    title: 'ASO Without Discovery is Polish on a Coffin',
    description: 'Listing optimization is a multiplier, not a substitute for traffic.',
    url: 'https://thehisaab.com/blog/aso-without-discovery',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="ASO Without Discovery is Polish on a Coffin"
      tag="Founder Notes"
      date="May 2026"
      readTime="4 min read"
      intro="In Hisaab's first three months, we rewrote our Play Store listing four times. Different headlines, screenshots, descriptions, keywords. None of it moved the needle. The bottleneck wasn't conversion — it was the 200 people seeing the listing per month. Listing optimization is a multiplier on traffic, not a substitute for it."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          App Store Optimization is real and worth doing — but it&apos;s a multiplier, not a substitute. If 200 people see your listing per month, even a 50% conversion gets you 100 installs. The bottleneck is top-of-funnel discovery, not listing copy. Fix discovery first; polish ASO once you have meaningful traffic.
        </p>
      }
      relatedLinks={[
        { label: 'UAC Ads Killed My ASO', href: '/blog/uac-ads-killed-my-aso' },
        { label: '6 Months Competing with Splitwise', href: '/blog/6-months-competing-with-splitwise' },
        { label: 'About The Hisaab', href: '/about' },
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
      ]}
      canonicalUrl="https://thehisaab.com/blog/aso-without-discovery"
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">The trap of optimizing too early</h2>
      <p className="text-text2 leading-relaxed mb-4">
        ASO blogs make it sound like a magic bullet. Pick the right keywords. Write a headline that converts. Test 5 screenshot variants. Watch your installs grow.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        The unstated assumption: people are seeing your listing in the first place. If they&apos;re not, ASO does nothing. It&apos;s like polishing the typography on a flier nobody has picked up.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">The math nobody talks about</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Imagine your Play Store listing converts at 50% — outstanding by industry standards. The math:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li>200 listing views/month × 50% = <strong className="text-text1">100 installs/month</strong></li>
        <li>2,000 listing views/month × 50% = <strong className="text-text1">1,000 installs/month</strong></li>
        <li>20,000 listing views/month × 50% = <strong className="text-text1">10,000 installs/month</strong></li>
      </ul>
      <p className="text-text2 leading-relaxed mb-4">
        Doubling your conversion rate from 25% to 50% gets you from 50 to 100 installs/month at the small end. Multiplying your traffic 100x gets you 10,000 installs/month.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Both improvements matter. But for indie founders with limited time, working on traffic dwarfs working on conversion until the traffic exists.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What actually drives discovery</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Indie consumer apps in India typically get discovered through:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Reddit / r/developersIndia / r/India / city subs.</strong> Our 104k-view r/developersIndia post drove more high-intent installs in a week than 6 weeks of UAC.</li>
        <li><strong className="text-text1">SEO via comparison pages.</strong> /compare/splitwise, /compare/splitkaro, /splitwise-alternative — these rank for high-intent commercial queries.</li>
        <li><strong className="text-text1">AI search citations.</strong> Picked #1 by ChatGPT and Gemini in May 2026 for &quot;free Splitwise for Indians.&quot; Free top-of-funnel traffic with explicit intent.</li>
        <li><strong className="text-text1">Word of mouth from college flat groups.</strong> Compounds slowly but becomes the long-term retention engine.</li>
        <li><strong className="text-text1">LinkedIn/Twitter founder content.</strong> Indie hackers, PMs, dev community. Smaller volume but highest signal-to-noise.</li>
      </ol>

      <h2 className="text-2xl font-bold text-text1 mb-4">When ASO actually matters</h2>
      <p className="text-text2 leading-relaxed mb-4">
        ASO becomes important once you have a few thousand listing views per month. At that point, conversion lifts produce meaningful absolute install increases. Until then, every hour spent rewriting your listing is an hour not spent on traffic.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        Two specific exceptions where ASO matters early:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Listing name keywords.</strong> &quot;Hisaab: Splitwise Alternative&quot; vs &quot;Hisaab&quot; — the keywords in the name matter for in-store search. Get this right once.</li>
        <li><strong className="text-text1">First two screenshots.</strong> Even at low traffic, the first two screenshots are what users see in search results. Worth getting these right early.</li>
      </ul>
      <p className="text-text2 leading-relaxed mb-6">
        Everything else (long description, A/B testing 5 hero variants, tagline experiments) can wait until you have meaningful traffic.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">The lesson</h2>
      <p className="text-text2 leading-relaxed">
        Build discovery first. Once 2,000+ people are seeing your listing every month, ASO compound investment becomes worthwhile. Until then, ASO obsession is a procrastination disguised as work.
      </p>
    </BlogPostLayout>
  );
}
