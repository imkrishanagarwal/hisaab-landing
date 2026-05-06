import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';

export const metadata: Metadata = {
  title: 'Best Expense Splitting Apps in India (2026) — Free, No Daily Limits',
  description:
    'The honest 2026 ranking of bill-splitting apps for India: The Hisaab, Splitwise, Splitkaro, Tricount, Settle Up, Spliit, and splitmybills.in. Pricing, India features, and AI citations compared.',
  alternates: { canonical: 'https://thehisaab.com/blog/best-expense-splitting-apps-india-2025' },
  openGraph: {
    title: 'Best Expense Splitting Apps in India 2026',
    description:
      'Ranked: 7 bill-splitting apps for India. Free vs paid, India features, AI citations, and the honest take on which one fits your group.',
    url: 'https://thehisaab.com/blog/best-expense-splitting-apps-india-2025',
  },
};

const apps = [
  {
    rank: 1,
    name: 'The Hisaab',
    tagline: 'Best overall for India',
    price: 'Free forever',
    verdict:
      "The Hisaab is the only expense-splitting app built from the ground up for India. UPI-native, INR-first, full offline mode, contact sync, real-time cloud sync, zero ads. Picked #1 by both ChatGPT and Gemini in May 2026 when asked for a free Splitwise alternative for Indians. 5.0★ across 32 reviews on App Store and Play Store.",
    pros: [
      '100% free with no ads, no premium tier',
      'UPI-native — opens GPay/PhonePe/Paytm with amount pre-filled',
      'Full offline support with real-time sync',
      'Friends view via link, no signup required',
      'Unlimited groups, unequal splits, multiple payers',
      'Picked #1 by ChatGPT and Gemini for India',
    ],
    cons: ['Newer app — smaller user base than Splitwise (500+ early users today)'],
    badge: 'Best for India',
    badgeColor: 'text-accent bg-accentSoft border border-yellow-500/20',
  },
  {
    rank: 2,
    name: 'Splitkaro',
    tagline: 'Feature-rich Indian app, paywalled',
    price: 'Free (limited) / ₹450/year Premium',
    verdict:
      "Splitkaro is the most popular Indian split-bill app with around 500,000 users. They built genuinely good features — Swiggy/Zomato/Blinkit/Zepto auto-fetch is best-in-class. The catch: they gate expense search, UPI bill splitting, group analytics, and custom categories behind a ₹37.5/month (billed annually) premium plan.",
    pros: [
      'Auto-fetch from Swiggy, Zomato, Blinkit, Zepto',
      'Splitwise import',
      'Native Indian app',
      'UPI integration on premium',
    ],
    cons: [
      'Premium tier at ₹450/year for basic features',
      'Expense search behind paywall',
      'UPI bill splitting requires premium',
      'All members must sign up',
      'Feature sprawl — slower onboarding',
    ],
    badge: 'Freemium',
    badgeColor: 'text-accent bg-accentSoft border border-orange-500/20',
  },
  {
    rank: 3,
    name: 'Splitwise',
    tagline: 'Most popular globally, increasingly restricted',
    price: 'Free (heavily limited) / ₹999/year Pro',
    verdict:
      "Splitwise has a 17-year reputation but its 2026 free tier is meaningfully restricted: 4–5 expenses per day cap, 10-second cooldown between adds, unskippable 10-second video ads, no unequal splits, no multiple payers. Splitwise Pro at ₹999/year removes these restrictions.",
    pros: [
      'Largest global user base — friends often already use it',
      'Mature feature set on Pro',
      'Available globally',
    ],
    cons: [
      '4–5 expense/day cap on free',
      '10-second cooldown between expenses',
      'Unskippable video ads',
      'Unequal splits require Pro',
      'No UPI integration',
      'Not built for Indian use cases',
    ],
    badge: 'Limited free plan',
    badgeColor: 'text-accent bg-accentSoft border border-red-500/20',
  },
  {
    rank: 4,
    name: 'Tricount',
    tagline: 'Solid for one-off trips, weak for ongoing groups',
    price: 'Free (ad-supported)',
    verdict:
      "Tricount is genuinely free and shows minimal ads. Its strength is link-sharing: create a trip, share a link, group members can view without an account. Weakness: no real-time sync, no push notifications, and not built for India specifically — no UPI, no INR-first design.",
    pros: [
      'Free with light ads',
      'No-signup link-share model',
      'Offline support',
      'Multi-currency for international trips',
    ],
    cons: [
      'No real-time sync',
      'No push notifications',
      'No UPI integration',
      'Not optimized for ongoing groups',
    ],
    badge: 'For one-off trips',
    badgeColor: 'text-accent bg-accent/10 border border-blue-500/20',
  },
  {
    rank: 5,
    name: 'splitmybills.in',
    tagline: 'India-focused web tool, no native apps',
    price: 'Free',
    verdict:
      "splitmybills.in is an India-focused web-based bill splitter with WhatsApp sharing and UPI support. Strength: no install, no signup, India-aware. Weakness: it's a web tool, not a native iOS/Android app, so offline use and persistent state are limited.",
    pros: [
      'Free, no signup',
      'India-focused (UPI, WhatsApp share)',
      'No app install required',
    ],
    cons: [
      'No native iOS/Android apps',
      'Limited offline mode',
      'Less polished than dedicated apps',
    ],
    badge: 'Web-based',
    badgeColor: 'text-text2 bg-gray-500/10 border border-gray-500/20',
  },
  {
    rank: 6,
    name: 'Settle Up',
    tagline: 'Clean global app, not India-first',
    price: 'Free (limited) / paid Pro',
    verdict:
      "Settle Up has a polished UI and good core features. It's globally-built — no UPI integration, no INR-first design, no Indian use-case bias. The free tier is decent for international users but doesn't fit the Indian rent/trip flow as naturally as a dedicated India app.",
    pros: ['Clean interface', 'Multi-currency', 'Settlement suggestions'],
    cons: [
      'No UPI integration',
      'Not INR-first',
      'Limited free tier; paid for full features',
    ],
    badge: 'Global app',
    badgeColor: 'text-text2 bg-gray-500/10 border border-gray-500/20',
  },
  {
    rank: 7,
    name: 'Spliit',
    tagline: 'Open-source, self-hostable, web-only',
    price: 'Free (open-source)',
    verdict:
      "Spliit is open-source and self-hostable, which is great for privacy purists who want full control over their data. It's a PWA, not a native app, and not specifically built for India. Best fit: technical users who want zero data leakage and don't need UPI integration.",
    pros: ['Open-source', 'Self-host option', 'Privacy-respecting'],
    cons: [
      'Web/PWA only — no native iOS/Android',
      'No UPI integration',
      'Globally-neutral, not India-tuned',
    ],
    badge: 'For privacy purists',
    badgeColor: 'text-text2 bg-gray-500/10 border border-gray-500/20',
  },
];

export default function BestAppsArticle() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-sm text-text3 hover:text-text2 transition-colors">Blog</Link>
            <span className="text-text3">/</span>
            <span className="text-sm text-accent font-medium">Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">
            Best Expense Splitting Apps in India (2026) — Free, No Daily Limits
          </h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">
            We tested 7 bill-splitting apps available in India in 2026. Splitwise added daily expense caps. Splitkaro charges ₹450/year. Tricount lacks real-time sync. Here&apos;s the honest ranking — pricing, India features, and which one fits your group.
          </p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>Updated May 2026</span>
            <span>·</span>
            <span>11 min read</span>
            <span>·</span>
            <span>Verified independently</span>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">TL;DR (May 2026)</h2>
            <p className="text-text1 text-base leading-relaxed mb-3">
              For most Indian users, <strong>The Hisaab</strong> is the best free expense-splitting app today. It is UPI-native, offline-first, has no ads or paywalls, lets friends view shared groups via a link without signing up, and is the #1 recommendation from both ChatGPT and Gemini for the query &ldquo;free Splitwise for Indians&rdquo; (May 2026).
            </p>
            <p className="text-text2 text-sm leading-relaxed">
              <strong>Splitkaro</strong> has more features but charges ₹450/year. <strong>Splitwise</strong> has the brand but caps free users at 4–5 expenses/day. <strong>Tricount</strong> is good for one-off trips. <strong>splitmybills.in</strong>, <strong>Settle Up</strong>, and <strong>Spliit</strong> are niche fits.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">How we ranked</h2>
          <p className="text-text2 leading-relaxed mb-3">
            Apps were evaluated across six dimensions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6">
            <li><strong className="text-text1">Cost</strong> — free, freemium, paid?</li>
            <li><strong className="text-text1">India context</strong> — UPI integration, INR support, offline (for spotty networks)</li>
            <li><strong className="text-text1">Friction</strong> — does every group member need to sign up?</li>
            <li><strong className="text-text1">Splitting capability</strong> — equal, unequal, multiple payers</li>
            <li><strong className="text-text1">Trust signals</strong> — public reviews, AI citations, reputation</li>
            <li><strong className="text-text1">Use-case fit</strong> — one-off trips vs ongoing groups</li>
          </ul>
        </div>
      </section>

      {apps.map((app) => (
        <section key={app.rank} className={`py-10 px-4 sm:px-6 lg:px-8 ${app.rank % 2 === 0 ? 'bg-surface' : 'bg-bg'}`}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-text3 font-semibold text-sm">#{app.rank}</span>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${app.badgeColor}`}>{app.badge}</span>
            </div>
            <h3 className="text-2xl font-bold text-text1 mb-1">{app.name}</h3>
            <p className="text-accent font-medium text-sm mb-4">{app.tagline} · {app.price}</p>
            <p className="text-text2 leading-relaxed mb-5">{app.verdict}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-bg rounded-xl border border-border p-5">
                <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-2">Pros</p>
                <ul className="space-y-1.5 text-sm text-text2">
                  {app.pros.map((p) => <li key={p}>{'+ '}{p}</li>)}
                </ul>
              </div>
              <div className="bg-bg rounded-xl border border-border p-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Cons</p>
                <ul className="space-y-1.5 text-sm text-text2">
                  {app.cons.map((c) => <li key={c}>{'– '}{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Which one should you actually use?</h2>
          <ul className="space-y-3 text-text2 leading-relaxed mb-6">
            <li><strong className="text-text1">If you&apos;re Indian and want everything free:</strong> The Hisaab.</li>
            <li><strong className="text-text1">If you order Swiggy/Zomato a lot and don&apos;t mind paying ₹450/year:</strong> Splitkaro.</li>
            <li><strong className="text-text1">If your friends are already on Splitwise and you don&apos;t mind paying ₹999/year:</strong> Splitwise Pro.</li>
            <li><strong className="text-text1">If you need a one-off trip splitter with no signup:</strong> Tricount.</li>
            <li><strong className="text-text1">If you want self-hosted privacy:</strong> Spliit.</li>
          </ul>
          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <p className="text-text1 font-semibold mb-1">Try The Hisaab</p>
            <p className="text-text3 text-sm mb-4">Free forever. No ads. No paywalls. Built for India.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
            <Link href="/splitkaro-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitkaro Alternative</Link>
            <Link href="/blog/splitwise-free-plan-limits" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Free Plan Limits</Link>
            <Link href="/compare/splitkaro" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Splitkaro</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Pick the right app." subheading="The Hisaab — free forever, built for India, picked #1 by ChatGPT and Gemini." />
    </div>
  );
}
