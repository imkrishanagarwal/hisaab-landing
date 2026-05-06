import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: "Why UPI Isn't the Moat in Indian Fintech (Lessons from Building Hisaab)",
  description:
    'UPI is table stakes, not a wedge. Six months of building an Indian split-bill app taught us the actual moat is cultural context, not payment integration.',
  alternates: { canonical: 'https://thehisaab.com/blog/why-upi-isnt-the-moat' },
  openGraph: {
    title: "Why UPI Isn't the Moat in Indian Fintech",
    description: 'Lessons from 6 months of competing with Splitwise.',
    url: 'https://thehisaab.com/blog/why-upi-isnt-the-moat',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="Why UPI Isn't the Moat in Indian Fintech"
      tag="Founder Notes"
      date="May 2026"
      readTime="5 min read"
      intro="When we started building Hisaab, the thesis was simple: 'Splitwise has bad UPI integration. We add UPI. We win.' Six months in, we know the thesis was wrong. UPI is table stakes. The real moat is cultural context — and it took us a lot of failed user interviews to understand that."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          UPI integration alone isn&apos;t a competitive moat in Indian fintech-lite. Every serious app has it or will. The real wedge is the social and cultural context around money — joint families, recurring rent dynamics, group trips of 8+ people, the &quot;didi I&apos;ll pay later&quot; dynamic. Building for that is hard to copy. Building UPI links is easy.
        </p>
      }
      relatedLinks={[
        { label: '6 Months Competing with Splitwise', href: '/blog/6-months-competing-with-splitwise' },
        { label: 'Build What Users Do, Not What They Say', href: '/blog/build-what-users-do-not-what-they-say' },
        { label: 'About The Hisaab', href: '/about' },
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
      ]}
      canonicalUrl="https://thehisaab.com/blog/why-upi-isnt-the-moat"
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">The wrong thesis</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Six months ago, we looked at Splitwise — global app, no UPI, growing wave of frustrated Indian users — and thought we had a clear opening. Add UPI integration. Brand it for India. Done.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Within the first month of building, we shipped UPI deep-link settle: tap a balance, GPay/PhonePe/Paytm opens with the amount pre-filled. It worked technically. Users tried it once. They didn&apos;t come back.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Why UPI alone wasn&apos;t enough</h2>
      <p className="text-text2 leading-relaxed mb-4">
        UPI is now infrastructure, not a feature. Every Indian fintech app has it or will within a year. PhonePe, Google Pay, Paytm, CRED, Splitkaro — they all have it. Building UPI integration is a week of engineering. It can be copied in a week.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Worse, UPI is a feature users only touch at the very end of an interaction — the settle moment. If everything before that moment doesn&apos;t fit how Indians share money, the UPI step doesn&apos;t save you. They&apos;ll go back to WhatsApp threads and Excel sheets.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What the actual moat looks like</h2>
      <p className="text-text2 leading-relaxed mb-4">
        The cultural context around money in India is the real wedge:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Group sizes are bigger.</strong> Indian college trip groups regularly hit 8–12 people. Western apps optimize for 2–4. UI paradigms break at 10+ people.</li>
        <li><strong className="text-text1">Splits are unequal by default.</strong> Vegetarians and non-veg, drinkers and teetotalers, who joined which activity. Equal-split-only apps fail constantly.</li>
        <li><strong className="text-text1">&quot;Adjust kar lungi&quot; is a real dynamic.</strong> Friends in India often absorb small differences to keep the peace. Apps that force precision feel awkward.</li>
        <li><strong className="text-text1">Recurring rent has a cycle.</strong> Indian flats have a rhythm — rent on the 1st, electricity end of month, water mid-month. The app should know this rhythm.</li>
        <li><strong className="text-text1">Hinglish is the actual language.</strong> &quot;Chhodo yaar, main adjust kar lungi&quot; isn&apos;t a translation; it&apos;s a feeling. Apps that speak this voice connect harder.</li>
      </ul>

      <h2 className="text-2xl font-bold text-text1 mb-4">The reframe</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Once we stopped treating UPI as the moat and started treating it as table stakes, the question changed from &quot;how do we add features?&quot; to &quot;how do we fit the dynamic?&quot;
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Three things worked:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-text2 leading-relaxed mb-6">
        <li><strong className="text-text1">Friends don&apos;t sign up.</strong> The dynamic of &quot;I&apos;ll send you a screenshot&quot; vs &quot;please install this app first&quot; is huge. Removing it changed completion rates.</li>
        <li><strong className="text-text1">Offline-first.</strong> Indian users use apps in metro tunnels, on Goa beaches, on Manali roads. &quot;Works always&quot; is more valuable than any feature.</li>
        <li><strong className="text-text1">Three features done well.</strong> Equal/custom split, settle-up via UPI, group balance view. That&apos;s it. The simplicity itself is the moat. (See our <a href="/blog/build-what-users-do-not-what-they-say" className="text-accent hover:text-primary-700">post on overbuilding</a>.)</li>
      </ol>

      <h2 className="text-2xl font-bold text-text1 mb-4">The lesson for other indie founders</h2>
      <p className="text-text2 leading-relaxed mb-4">
        If you&apos;re building Indian fintech-lite and your wedge is &quot;we have UPI&quot;, you don&apos;t have a wedge. UPI is the assumed baseline. The wedge is whatever cultural friction your incumbent doesn&apos;t see because they&apos;re a Western app. Find that. Build for that.
      </p>
      <p className="text-text2 leading-relaxed">
        For us, it was Indian rent + UPI flatmates + offline. Different products will have different wedges. But none of them are payment rail integration alone.
      </p>
    </BlogPostLayout>
  );
}
