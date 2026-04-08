import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';

export const metadata: Metadata = {
  title: 'Splitwise Free Plan Limits in India: What You Can\'t Do | The Hisaab',
  description: 'Splitwise free users are limited to 3 expenses per day, 3 groups, no unequal splits, and unskippable ads. Here\'s the full list — and what to use instead.',
  alternates: { canonical: 'https://thehisaab.com/blog/splitwise-free-plan-limits' },
  openGraph: {
    title: 'Splitwise Free Plan Limits: What You Can and Can\'t Do',
    description: 'Splitwise limits free users to 3 expenses/day, no unequal splits, and unskippable video ads. Here\'s the full breakdown.',
    url: 'https://thehisaab.com/blog/splitwise-free-plan-limits',
  },
};

const limits = [
  {
    limit: '3 expenses per day',
    detail: 'Free users can only add 3 expenses every 24 hours. Split a dinner, add a cab, pay for snacks — and you\'re locked out for the rest of the day.',
    impact: 'High',
  },
  {
    limit: 'Unskippable video ads',
    detail: 'Splitwise shows 10-second video ads between actions on the free plan. You can\'t skip them. They appear frequently during normal use.',
    impact: 'High',
  },
  {
    limit: 'No unequal splits on free',
    detail: 'Splitting unequally — where different people owe different amounts — requires Splitwise Pro. This is a core feature for most real-world expenses.',
    impact: 'High',
  },
  {
    limit: 'No multiple payers on free',
    detail: 'If two people split a hotel bill and both paid, you can\'t record that on the free plan. Multiple payers is a Pro-only feature.',
    impact: 'Medium',
  },
  {
    limit: 'Limited groups',
    detail: 'Free accounts are limited in how many active groups they can have. Once you hit the limit, you must delete or archive old groups to create new ones.',
    impact: 'Medium',
  },
  {
    limit: 'No receipt scanning on free',
    detail: 'Smart receipt scanning (scan a bill to auto-fill the expense) is a Pro-only feature.',
    impact: 'Low',
  },
];

export default function SplitwiseLimitsArticle() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      {/* HEADER */}
      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Blog</Link>
            <span className="text-gray-700">/</span>
            <span className="text-sm text-[#2563EB] font-medium">Splitwise</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Splitwise Free Plan Limits: What You Can and Can&apos;t Do
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Splitwise started as a free app. Over time, it moved key features behind a paywall. Here&apos;s exactly what free users can&apos;t do — and the alternatives.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600 pb-8 border-b border-white/5">
            <span>April 2025</span>
            <span>·</span>
            <span>4 min read</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed mb-4">
            If you&apos;ve used Splitwise recently and noticed it feels more restrictive than it used to — you&apos;re not imagining things. Splitwise has progressively moved features from free to paid since introducing Splitwise Pro.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Here&apos;s the complete list of what the free plan restricts, how much it affects everyday use, and what Indian users are switching to instead.
          </p>
        </div>
      </section>

      {/* LIMITS TABLE */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Splitwise Free Plan Restrictions</h2>
          <div className="space-y-4">
            {limits.map((item) => (
              <div key={item.limit} className="bg-[#121212] border border-white/5 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">{item.limit}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
                    item.impact === 'High' ? 'text-red-400 bg-red-500/10' :
                    item.impact === 'Medium' ? 'text-yellow-400 bg-yellow-500/10' :
                    'text-gray-400 bg-gray-500/10'
                  }`}>{item.impact} impact</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* PRICING */}
          <div className="mt-8 bg-[#121212] border border-white/5 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-1">How much does Splitwise Pro cost in India?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Splitwise Pro costs <strong className="text-white">₹999 per year</strong> (or approximately ₹83/month). To remove the 3-expense daily limit, unlock unequal splits, remove ads, and get multiple-payer support, you need to pay this subscription.
            </p>
          </div>
        </div>
      </section>

      {/* THE ALTERNATIVE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">The alternative: The Hisaab</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            The Hisaab is a free expense-splitting app built specifically for India. Every feature that Splitwise restricts to Pro — unequal splits, multiple payers, unlimited groups, unlimited expenses — is available in The Hisaab for free. No ads. No daily limit. No subscription.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { feature: 'Daily expense limit', splitwise: '3/day (free)', hisaab: 'Unlimited' },
              { feature: 'Unequal splits', splitwise: 'Pro only', hisaab: 'Free' },
              { feature: 'Multiple payers', splitwise: 'Pro only', hisaab: 'Free' },
              { feature: 'Unlimited groups', splitwise: 'Limited on free', hisaab: 'Unlimited' },
              { feature: 'Video ads', splitwise: 'Unskippable', hisaab: 'None' },
              { feature: 'UPI support', splitwise: 'No', hisaab: 'Yes' },
            ].map((row) => (
              <div key={row.feature} className="bg-[#0B0B0B] rounded-xl border border-white/5 p-4">
                <p className="text-xs text-gray-600 mb-2">{row.feature}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Splitwise</p>
                    <p className="text-sm text-red-400 font-medium">{row.splitwise}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5">The Hisaab</p>
                    <p className="text-sm text-emerald-400 font-medium">{row.hisaab}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0B0B0B] rounded-2xl border border-[#2563EB]/20">
            <p className="text-white font-semibold mb-1">Try The Hisaab — no limits, no ads, no cost</p>
            <p className="text-gray-500 text-sm mb-4">Everything Splitwise Pro offers. Free forever for Indian users.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-10 bg-[#0B0B0B] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/best-expense-splitting-apps-india-2025" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Best Apps in India 2025</Link>
            <Link href="/splitwise-alternative" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/compare/splitwise" className="text-sm text-[#2563EB] hover:text-[#60a5fa] transition-colors bg-[#2563EB]/5 px-4 py-2 rounded-lg">Full Comparison</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Done with Splitwise limits?" subheading="The Hisaab gives you everything — unlimited, free, built for India." />
    </div>
  );
}
