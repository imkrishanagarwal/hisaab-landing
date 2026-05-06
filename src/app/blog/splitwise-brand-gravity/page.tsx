import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How Splitwise Became a Verb (And How to Beat It)',
  description:
    "Splitwise is so embedded in friend groups that 'splitwise it' is a verb. Replacing a verb is hard — but possible if you stop trying to beat them on features.",
  alternates: { canonical: 'https://thehisaab.com/blog/splitwise-brand-gravity' },
  openGraph: {
    title: 'How Splitwise Became a Verb (And How to Beat It)',
    description: 'Brand gravity is the real moat. Here\'s how indie founders chip away at it.',
    url: 'https://thehisaab.com/blog/splitwise-brand-gravity',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="How Splitwise Became a Verb (And How to Beat It)"
      tag="Founder Notes"
      date="May 2026"
      readTime="6 min read"
      intro="When we started Hisaab, we underestimated Splitwise. Not their product — their brand gravity. Splitwise has 17 years of head start. In some friend groups, 'splitwise it' is a verb. Replacing a verb is the actual hard part."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          Splitwise has 17 years of brand equity in expense splitting. That equity is the real moat — heavier than any single feature. You don&apos;t beat brand gravity by being &quot;better.&quot; You beat it by picking a wedge where the incumbent is structurally weak (in our case: India + UPI + flatmates) and being unambiguously sharper there. Then you let migration be voluntary, not asked.
        </p>
      }
      relatedLinks={[
        { label: '6 Months Competing with Splitwise', href: '/blog/6-months-competing-with-splitwise' },
        { label: 'Why UPI Isn\'t the Moat', href: '/blog/why-upi-isnt-the-moat' },
        { label: 'Migrate from Splitwise', href: '/blog/migrate-from-splitwise-to-the-hisaab' },
        { label: 'Splitwise Free Plan Limits', href: '/blog/splitwise-free-plan-limits' },
      ]}
      canonicalUrl="https://thehisaab.com/blog/splitwise-brand-gravity"
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">When a brand becomes a verb</h2>
      <p className="text-text2 leading-relaxed mb-4">
        &quot;Did you splitwise it?&quot; is a real sentence in some Indian friend groups. Like Googling something or Ubering somewhere, the brand has become inseparable from the action. That kind of verbification is the strongest possible moat — stronger than features, stronger than pricing, stronger even than UI.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        We didn&apos;t fully appreciate this when we started. We thought: &quot;there&apos;s pain (paywall, ads, daily limits), there&apos;s a clear better product, users will switch.&quot; They don&apos;t. Or, they switch slowly, in waves, and only when a specific friend group decides en masse to migrate.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Why &quot;better&quot; isn&apos;t enough</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Even when our product was clearly better for an Indian use case, users would say something like: &quot;yeah it&apos;s nicer, but my Goa group is on Splitwise. I don&apos;t want to ask 6 people to switch.&quot;
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        The blocker isn&apos;t the product. It&apos;s the social cost of asking 6 friends to install something new. Even if 5 of them would happily switch, the friction of the ask itself is the wall. Splitwise gets to coast on that.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">The four ways indie apps beat verb-brands</h2>

      <h3 className="text-xl font-bold text-text1 mb-2 mt-6">1. Pick a wedge they&apos;re structurally weak at</h3>
      <p className="text-text2 leading-relaxed mb-4">
        Splitwise is a global app. India isn&apos;t their priority — UPI integration, INR-first design, offline-mode for spotty Indian networks, item-wise split flows for Indian dinners. They&apos;ll never lead on these because they have to serve users in 100 countries.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Our wedge is &quot;Indian rent + UPI flatmates.&quot; Concrete, specific, narrow. We don&apos;t try to win for Americans splitting an Airbnb in Joshua Tree. We don&apos;t need to.
      </p>

      <h3 className="text-xl font-bold text-text1 mb-2">2. Reduce friction asymmetrically</h3>
      <p className="text-text2 leading-relaxed mb-4">
        Splitwise requires every group member to sign up. We don&apos;t — only the primary user signs up; friends view shared groups via a link. That single design choice removes the social cost of asking. The person who switches doesn&apos;t have to convince anyone else.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Asymmetric friction reduction is how upstart apps slip past verb-brands. Make migration a unilateral decision, not a group one.
      </p>

      <h3 className="text-xl font-bold text-text1 mb-2">3. Let timing do the work</h3>
      <p className="text-text2 leading-relaxed mb-4">
        Splitwise made it harder to be free in 2024–2026 (daily caps, ads, paywalls). That created a moment of acute pain across millions of users. We didn&apos;t create that pain — but we&apos;re positioned to catch users when they&apos;re actively looking for an alternative.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Verb-brands lose users when they degrade. We can&apos;t force that. We can be ready for it.
      </p>

      <h3 className="text-xl font-bold text-text1 mb-2">4. Build for AI search, not just Google</h3>
      <p className="text-text2 leading-relaxed mb-4">
        Brand gravity was built in a Google-search world. AI search is a partial reset. When Indian users ask ChatGPT or Gemini &quot;free Splitwise for Indians&quot;, the answer isn&apos;t &quot;Splitwise&quot; — the answer is whichever app has the cleanest, most extractable claim. We&apos;ve been picked #1 by both LLMs in May 2026 because our /splitwise-alternative page is structured well.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        AI-search citations don&apos;t inherit verb-brand gravity. They reset every time someone asks a fresh question.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">The lesson</h2>
      <p className="text-text2 leading-relaxed">
        Don&apos;t try to beat a verb-brand head-on. Pick a wedge where they&apos;re weak by design. Make migration unilateral. Be patient and ready when they degrade. And invest in being citable in AI search — that&apos;s the new top-of-funnel where verb-brand gravity is weakest.
      </p>
    </BlogPostLayout>
  );
}
