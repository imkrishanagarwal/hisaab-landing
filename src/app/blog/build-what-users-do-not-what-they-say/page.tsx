import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "I Built 4 Features Users Asked For. Less Than 3% Touched Them.",
  description:
    "Six months of building Hisaab taught us users say one thing in interviews and do another in the data. Here's the gap, and what we shipped instead.",
  alternates: { canonical: 'https://thehisaab.com/blog/build-what-users-do-not-what-they-say' },
  openGraph: {
    title: "Build What Users Do, Not What They Say",
    description: '4 features users asked for. <3% touched them. Lessons from Hisaab.',
    url: 'https://thehisaab.com/blog/build-what-users-do-not-what-they-say',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="Build What Users Do, Not What They Say"
      tag="Founder Notes"
      date="May 2026"
      readTime="5 min read"
      intro="In Hisaab's first 3 months, users asked us for receipt scanning, multi-currency support, complex splitting rules, and recurring expenses. We built all four. Less than 3% of users touched any of them. Here's what we shipped after the data came in — and what we learned about the gap between user-asked and user-used."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          Users ask for what would be cool to have. They use what removes friction from the next 30 seconds. The gap is enormous. In Hisaab&apos;s case, the three features that actually got used were equal split, settle-up via UPI, and group balance view. That&apos;s the whole product. Everything else is feature theatre.
        </p>
      }
      relatedLinks={[
        { label: '6 Months Competing with Splitwise', href: '/blog/6-months-competing-with-splitwise' },
        { label: 'Why UPI Isn\'t the Moat', href: '/blog/why-upi-isnt-the-moat' },
        { label: 'Talk to Users Sooner', href: '/blog/talk-to-users-sooner' },
        { label: 'About The Hisaab', href: '/about' },
      ]}
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">The features users asked for</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Across our first 30 user interviews, the top requests were consistent:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Receipt scanning</strong> — &quot;point my camera at the bill, fill the expense automatically&quot;</li>
        <li><strong className="text-text1">Multi-currency</strong> — &quot;handle our Bali/Bangkok trip in baht and rupees&quot;</li>
        <li><strong className="text-text1">Complex splitting rules</strong> — &quot;four people pay for hotel, three for fuel, two for snacks&quot;</li>
        <li><strong className="text-text1">Recurring expenses</strong> — &quot;rent and WiFi every month, automatic&quot;</li>
      </ol>
      <p className="text-text2 leading-relaxed mb-6">
        We built all four. Two months later, we looked at usage data.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What the data showed</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Less than 3% of active users touched any of those four features.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li>Receipt scanning: ~1.8% of users tried it once. Most didn&apos;t come back.</li>
        <li>Multi-currency: ~0.4% of expenses used non-INR.</li>
        <li>Complex multi-payer rules: ~2.1% of expenses had any custom split logic beyond &quot;equal&quot;.</li>
        <li>Recurring expenses: ~2.7% of users set up at least one recurring rule.</li>
      </ul>
      <p className="text-text2 leading-relaxed mb-6">
        Meanwhile, equal-split + UPI settle + group balance view were touched by 95%+ of active users every week.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Why users ask for what they don&apos;t use</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Three reasons we&apos;ve identified, in roughly this order:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Aspirational use cases.</strong> Users imagine a future trip to Bali where they&apos;ll need multi-currency. They don&apos;t plan around their actual weekly Goa-trip-with-college-friends pattern, which is INR-only.</li>
        <li><strong className="text-text1">Interview psychology.</strong> When asked &quot;what would you want?&quot;, users default to listing more things. Saying &quot;just keep the basic thing fast&quot; feels like a non-answer.</li>
        <li><strong className="text-text1">Feature comparison shopping.</strong> Users have seen Splitwise, Splitkaro, and Tricount. They list features those apps have because the comparison is fresh in their mind.</li>
      </ol>

      <h2 className="text-2xl font-bold text-text1 mb-4">The reframe</h2>
      <p className="text-text2 leading-relaxed mb-4">
        We deleted (or hid) most of those four features. Receipt scanning we kept but moved deep in the menu. Multi-currency we paused. Recurring expenses we kept but downgraded from &quot;hero feature&quot; to &quot;power feature.&quot;
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        We doubled down on the three features users actually used:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Equal split</strong> — but with custom-amount escape hatch when needed.</li>
        <li><strong className="text-text1">Settle-up via UPI</strong> — one tap, opens GPay/PhonePe/Paytm with amount pre-filled.</li>
        <li><strong className="text-text1">Group balance view</strong> — see who owes whom at a glance.</li>
      </ul>
      <p className="text-text2 leading-relaxed mb-6">
        Three features. That&apos;s the whole product. We say it on the homepage. We say it in the App Store listing. The discipline of saying &quot;these three things, done well&quot; is itself the differentiator against Splitkaro&apos;s feature sprawl.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">The lesson</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Run user interviews to find pain. Don&apos;t run them to get a feature wishlist. The wishlist is asking for confirmation; the pain is what you actually solve. After every interview, ask &quot;what did you actually do this week, and where did the friction live?&quot;
      </p>
      <p className="text-text2 leading-relaxed">
        Then ship the features that remove the friction users encountered, not the features they imagined needing. The data — usage, retention, NPS — will tell you within 4 weeks whether you got it right.
      </p>
    </BlogPostLayout>
  );
}
