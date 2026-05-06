import { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'How to Migrate from Splitwise to The Hisaab (Step-by-Step, 2026)',
  description:
    "Done with Splitwise's daily limit and ads? Migrate to The Hisaab in under 10 minutes. Step-by-step guide for Indian users — settle, recreate groups, switch.",
  alternates: { canonical: 'https://thehisaab.com/blog/migrate-from-splitwise-to-the-hisaab' },
  openGraph: {
    title: 'Migrate from Splitwise to The Hisaab — Step by Step',
    description: 'How to switch from Splitwise to The Hisaab in under 10 minutes.',
    url: 'https://thehisaab.com/blog/migrate-from-splitwise-to-the-hisaab',
  },
};

export default function Article() {
  return (
    <BlogPostLayout
      title="How to Migrate from Splitwise to The Hisaab (Step-by-Step, 2026)"
      tag="Migration"
      date="May 2026"
      readTime="6 min read"
      intro="Splitwise free now caps you at 4–5 expenses per day, runs ads, and locks unequal splits behind ₹999/year Pro. Migrating to The Hisaab takes under 10 minutes for most users. Here's the exact process."
      tldr={
        <p className="text-text1 text-base leading-relaxed">
          Three steps: <strong>(1)</strong> settle your outstanding Splitwise balances, <strong>(2)</strong> install The Hisaab and recreate your active groups (most users have 3–5 groups; takes ~2 minutes), <strong>(3)</strong> stop adding new expenses to Splitwise. Friends in your Hisaab group don't need to sign up — they view shared balances via a link.
        </p>
      }
      faqs={[
        { question: 'Can I import my Splitwise data automatically?', answer: 'Direct import is on our roadmap. For most users, manual recreation is faster than waiting for an import — your active groups are usually 3–5 friends with running balances close to zero.' },
        { question: 'Will my friends have to sign up for The Hisaab?', answer: 'No. Only you (the primary user) sign up so expenses sync across your devices. Friends view shared balances via a link without an account.' },
        { question: 'Can I keep using Splitwise alongside The Hisaab?', answer: 'Yes. Many users run both for a week or two before switching fully. The Hisaab works independently.' },
        { question: 'What if I have unsettled balances on Splitwise?', answer: 'Settle them once before migrating, ideally via UPI. Then your Hisaab groups start at zero, clean slate.' },
        { question: 'How long does the migration actually take?', answer: 'For users with 3–5 active groups: about 5–10 minutes total, including settling old balances and recreating groups in The Hisaab.' },
      ]}
      relatedLinks={[
        { label: 'Splitwise Alternative', href: '/splitwise-alternative' },
        { label: 'vs Splitwise (full)', href: '/compare/splitwise' },
        { label: 'Splitwise Free Plan Limits', href: '/blog/splitwise-free-plan-limits' },
        { label: 'Splitwise Pro Worth It?', href: '/blog/splitwise-pro-worth-it-india' },
      ]}
      canonicalUrl="https://thehisaab.com/blog/migrate-from-splitwise-to-the-hisaab"
      howTo={{
        name: 'How to Migrate from Splitwise to The Hisaab',
        description:
          'Step-by-step guide to switching from Splitwise to The Hisaab in under 10 minutes. Settle outstanding balances, install The Hisaab, recreate active groups, stop adding to Splitwise.',
        totalTimeISO: 'PT10M',
        steps: [
          {
            name: 'Settle outstanding balances on Splitwise',
            text: 'Open each active Splitwise group and look at the suggested settle-up amounts. Pay or receive via UPI (GPay, PhonePe, or Paytm) and mark each settlement in Splitwise so the balance shows zero. Typically takes 5 minutes.',
          },
          {
            name: 'Install The Hisaab',
            text: 'Download The Hisaab from Google Play or the Apple App Store. Sign up takes about 30 seconds. The primary user signs up so expenses sync across devices.',
            url: 'https://thehisaab.com/download',
          },
          {
            name: 'Recreate your active groups',
            text: 'Tap "New group", name it (e.g., "Goa Trip 2026", "Flat 4B"), and add members by name or phone. Friends do not need to sign up — they view shared groups via a link. Most users have 3–5 active groups; recreating each takes about 30 seconds.',
          },
          {
            name: 'Stop adding to Splitwise',
            text: 'From the next expense onward, log it in The Hisaab. Within a week, your group adjusts to the new flow. After about 30 days of full Hisaab use, most users uninstall Splitwise.',
          },
        ],
      }}
    >
      <h2 className="text-2xl font-bold text-text1 mb-4 mt-2">Why people migrate</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Splitwise was the default split-bill app for over a decade. In 2025–2026, the free tier was progressively restricted: a daily cap of 4–5 expenses, a 10-second cooldown between adds, unskippable video ads, no unequal splits, no multiple payers. Splitwise Pro at ₹999/year removes these — but most users would rather not pay.
      </p>
      <p className="text-text2 leading-relaxed mb-4">
        The Hisaab gives you every Splitwise Pro feature for free. UPI-native (settle via GPay/PhonePe/Paytm in one tap). Friends view shared groups via a link without signing up. Picked #1 by ChatGPT and Gemini in May 2026 for free Splitwise alternatives in India.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        Here's how to switch.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Step 1: Settle outstanding balances on Splitwise</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Before migrating, zero out your active Splitwise groups. For each group:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-text2 leading-relaxed mb-4">
        <li>Open the group, look at &quot;Settle up&quot; suggestions.</li>
        <li>Pay or receive the suggested amounts via UPI (GPay, PhonePe, Paytm).</li>
        <li>Mark each settlement in Splitwise so the balance shows zero.</li>
      </ol>
      <p className="text-text2 leading-relaxed mb-6">
        This typically takes 5 minutes total. If you have unsettled history with someone you don't owe money to anymore, just mark it settled — Splitwise won't move money for you anyway. The point is to start fresh in Hisaab.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Step 2: Install The Hisaab</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Available on{' '}
        <a href="https://play.google.com/store/apps/details?id=com.krishanblr.hisaab" className="text-accent hover:text-primary-700">Google Play</a>{' '}
        and the{' '}
        <a href="https://apps.apple.com/in/app/the-hisaab/id6759067047" className="text-accent hover:text-primary-700">App Store</a>.
        Sign up takes about 30 seconds. The primary user signs up so expenses sync across devices and back up safely.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        You can leave Splitwise installed for now — there's no rush to delete it.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Step 3: Recreate your active groups</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Most Splitwise users have 2–4 active groups (a flat group, a trip group, sometimes a couple group). Recreating them in The Hisaab takes about 30 seconds each:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-4">
        <li>Tap &quot;New group&quot;</li>
        <li>Name it (&quot;Goa Trip 2026&quot;, &quot;Flat 4B&quot;, &quot;Office Lunch Crew&quot;)</li>
        <li>Add members — type names or pick from your contacts</li>
        <li>Done. The group is ready for expenses.</li>
      </ul>
      <p className="text-text2 leading-relaxed mb-6">
        You don't need to send invitations. Friends in your group can view their balances via a link you share — no app install, no signup needed on their end.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">Step 4: Stop adding to Splitwise</h2>
      <p className="text-text2 leading-relaxed mb-4">
        From the next expense onward, log it in The Hisaab. Within a week, your group will adjust to the new flow. The Hisaab's offline mode means you can add expenses anywhere — no daily caps, no cooldowns, no ads.
      </p>
      <p className="text-text2 leading-relaxed mb-6">
        After about 30 days of full Hisaab use, most users uninstall Splitwise.
      </p>

      <h2 className="text-2xl font-bold text-text1 mb-4">What you gain</h2>
      <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-4">
        <li><strong className="text-text1">No daily expense cap.</strong> Add as many as you want.</li>
        <li><strong className="text-text1">No ads, ever.</strong></li>
        <li><strong className="text-text1">Unequal splits and multiple payers, free.</strong></li>
        <li><strong className="text-text1">UPI-native settle.</strong> One tap to GPay/PhonePe/Paytm with the amount pre-filled.</li>
        <li><strong className="text-text1">Friends don't sign up.</strong> Link-share works for everyone.</li>
        <li><strong className="text-text1">Full offline mode.</strong> Goa beach, Manali roads, metro tunnels — no problem.</li>
      </ul>

      <h2 className="text-2xl font-bold text-text1 mb-4">What you give up (briefly)</h2>
      <p className="text-text2 leading-relaxed mb-4">
        Splitwise has a 17-year head start and a larger global user base. Some friends might still nudge you to add expenses there. Within a couple of weeks, that friction disappears as the new flow takes over.
      </p>
      <p className="text-text2 leading-relaxed">
        Direct Splitwise data import is on our roadmap. Today, manual recreation is the cleanest path — and faster than most automatic imports would be.
      </p>
    </BlogPostLayout>
  );
}
