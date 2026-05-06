import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "I Have 500 Users. I've Talked to 30. Here's What I'd Do Differently.",
  description:
    "Six months into building Hisaab, the cheapest research method I'd skipped most was user interviews. Here's why and what I'd change.",
  alternates: { canonical: 'https://thehisaab.com/blog/talk-to-users-sooner' },
  openGraph: {
    title: "I've Talked to 30 of 500 Users. Here's What I'd Do Differently.",
    description: "User interviews: cheapest research method, easiest to skip.",
    url: 'https://thehisaab.com/blog/talk-to-users-sooner',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="I Have 500 Users. I've Talked to 30. Here's What I'd Do Differently."
      tag="Founder Notes"
      date="May 2026"
      readTime="4 min read"
      intro="Six months into Hisaab, we have around 500 active users and I've personally talked to about 30 of them. That should have been 100+ by now. User interviews are the cheapest research method that exists, and indie founders skip them because they feel uncomfortable. Here's what I would do differently."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          User interviews are unreasonably effective. Every conversation reveals a feature you overbuilt or a problem you didn&apos;t see. The reason indie founders skip them isn&apos;t time — it&apos;s the social discomfort of asking strangers to talk. Push past it. Aim for one interview per week minimum, every week, forever.
        </p>
      }
      relatedLinks={[
        { label: 'Build What Users Do, Not What They Say', href: '/blog/build-what-users-do-not-what-they-say' },
        { label: '6 Months Competing with Splitwise', href: '/blog/6-months-competing-with-splitwise' },
        { label: 'About The Hisaab', href: '/about' },
        { label: 'UAC Ads Killed My ASO', href: '/blog/uac-ads-killed-my-aso' },
      ]}
      canonicalUrl="https://thehisaab.com/blog/talk-to-users-sooner"
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">Why founders skip user interviews</h2>
      <p className="text-text2 leading-relaxed mb-4">
        On paper, user interviews are obviously valuable. In practice, indie founders skip them because:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Social discomfort.</strong> &quot;Hi stranger, can I have 20 minutes of your time?&quot; feels presumptuous. It feels like sales.</li>
        <li><strong className="text-text1">Fear of negative feedback.</strong> If they hate it, you have to listen. Easier to assume they&apos;re happy.</li>
        <li><strong className="text-text1">Logistics.</strong> Scheduling, calls, taking notes — feels like overhead vs &quot;just shipping the next feature.&quot;</li>
        <li><strong className="text-text1">Dataism.</strong> &quot;I&apos;ll look at the analytics&quot; feels rigorous. Conversations feel anecdotal.</li>
      </ul>
      <p className="text-text2 leading-relaxed mb-6">
        I told myself versions of all four. The result: 30 conversations across 6 months. Should have been 100+.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What every conversation revealed</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Patterns from the 30 interviews I did manage to do:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li>One feature I overbuilt: receipt scanning. Almost no one used it. (Covered in <a href="/blog/build-what-users-do-not-what-they-say" className="text-accent hover:text-primary-700">this post</a>.)</li>
        <li>One pain point I had no idea about: hostel-mates joining and leaving mid-month, breaking the math. Now there&apos;s a flow for that.</li>
        <li>One naming issue: users called the &quot;settle up&quot; button &quot;pay&quot; in conversation. I renamed the UI affordance.</li>
        <li>One distribution insight: 12 of 30 users had heard about Hisaab from a college flatmate. Word-of-mouth from college groups was a much bigger channel than I&apos;d realized.</li>
      </ul>
      <p className="text-text2 leading-relaxed mb-6">
        Every interview surfaced at least one of these. The cost: 20–30 minutes per call, plus a thank-you message. The ROI is unreasonable.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What I would do differently</h2>
      <ol className="list-decimal pl-6 space-y-3 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Build a habit, not a project.</strong> One interview per week, forever. Calendar block it like exercise. Don&apos;t wait for the &quot;right time.&quot;</li>
        <li><strong className="text-text1">Ask for the call when they&apos;re happy.</strong> Right after a positive review or a good support interaction is the easiest moment. People in a positive state say yes more often.</li>
        <li><strong className="text-text1">Ask about behavior, not opinions.</strong> &quot;Walk me through the last time you split a bill&quot; beats &quot;what features do you want?&quot; every time.</li>
        <li><strong className="text-text1">Talk to negative reviewers too.</strong> The friction is highest, but the insight density is highest. We&apos;ve learned the most from users who almost churned.</li>
        <li><strong className="text-text1">Record (with permission) and timestamp insights.</strong> Memory will fail. A 20-minute call has 5–10 actual insights buried in it.</li>
      </ol>

      <h2 className="text-2xl font-bold text-text1 mb-4">The lesson for other indie founders</h2>
      <p className="text-text2 leading-relaxed mb-4">
        The cheapest research method is also the one indie founders skip the hardest. If you&apos;re building a consumer app and have under 1,000 users, you should be talking to one of them every week — at minimum. Do it before you build the next feature, not after.
      </p>
      <p className="text-text2 leading-relaxed">
        And if you&apos;re a Hisaab user reading this — I&apos;d love to talk to you.{' '}
        <a href="mailto:admin@thehisaab.com" className="text-accent hover:text-primary-700">
          admin@thehisaab.com
        </a>
        . 20 minutes. We reply to every email.
      </p>
    </BlogPostLayout>
  );
}
