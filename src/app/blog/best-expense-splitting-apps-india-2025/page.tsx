import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';

export const metadata: Metadata = {
  title: 'Best Expense Splitting Apps in India 2025 | The Hisaab',
  description: 'Ranked: the best bill splitting apps for India in 2025 — The Hisaab, Splitwise, Settle Up, Tricount and more. Free vs paid, India features, offline support compared.',
  alternates: { canonical: 'https://thehisaab.com/blog/best-expense-splitting-apps-india-2025' },
  openGraph: {
    title: 'Best Expense Splitting Apps in India 2025',
    description: 'Ranked: the best bill splitting apps for India in 2025. Free vs paid, India features, offline support compared.',
    url: 'https://thehisaab.com/blog/best-expense-splitting-apps-india-2025',
  },
};

const apps = [
  {
    rank: 1,
    name: 'The Hisaab',
    tagline: 'Best overall for India',
    price: 'Free forever',
    verdict: 'The Hisaab is the only expense splitting app built from the ground up for India. INR-first, UPI payment links, contact sync to find friends, full offline mode, real-time cloud sync, and zero ads — all at no cost. It offers every feature that Splitwise charges for, completely free.',
    pros: ['100% free with no ads', 'Built for India — INR, UPI, Indian UX', 'Full offline support with real-time sync', 'Unlimited groups and expenses', 'Contact sync to find friends on the app', 'Unequal splits and multiple payers'],
    cons: ['Newer app — smaller user base than Splitwise'],
    badge: '🏆 Best for India',
    badgeColor: 'text-accent bg-accentSoft border border-yellow-500/20',
  },
  {
    rank: 2,
    name: 'Splitwise',
    tagline: 'Most popular, but with significant limits',
    price: 'Free (limited) / ₹999/year Pro',
    verdict: 'Splitwise is the most well-known expense splitting app globally. But its free plan limits you to 3 expenses per day, shows unskippable video ads, and restricts unequal splits and multiple payers to Pro subscribers. For Indian users, it\'s also not INR-first and has no UPI integration.',
    pros: ['Large user base — most friends are already on it', 'Feature-rich on paid plan', 'Available in India'],
    cons: ['3 expense/day limit on free plan', 'Unskippable video ads', 'Unequal splits require paid plan', '₹999/year for full features', 'No UPI support', 'Not India-first'],
    badge: '⚠️ Limited free plan',
    badgeColor: 'text-accent bg-accentSoft border border-orange-500/20',
  },
  {
    rank: 3,
    name: 'Tricount',
    tagline: 'Good for one-off trips, limited for ongoing groups',
    price: 'Free',
    verdict: 'Tricount is genuinely free and works well for simple trip splits. The catch: it uses a peer-to-peer model rather than cloud accounts. There\'s no real-time sync — everyone accesses the same trip via a shared link. No push notifications, no activity feed, no UPI. Good for a one-time trip with non-technical users; not ideal for ongoing friend groups.',
    pros: ['Fully free', 'No account required — easy for one-off trips', 'Offline support', 'Unequal splits'],
    cons: ['No real-time sync (link-sharing model)', 'No push notifications', 'No UPI support', 'No ongoing group tracking', 'No contact sync'],
    badge: '✓ Good for one-off trips',
    badgeColor: 'text-accent bg-accent/10 border border-blue-500/20',
  },
  {
    rank: 4,
    name: 'Settle Up',
    tagline: 'Solid but India features are lacking',
    price: 'Free (limited) / ~₹250/month Pro',
    verdict: 'Settle Up has a clean UI and decent core features. But it\'s a global app with a paid tier and no India-specific features. No UPI, no INR-first design, no contact sync. The free plan is limited, and the Pro plan adds a recurring cost that The Hisaab makes unnecessary.',
    pros: ['Clean interface', 'Available on Android and iOS', 'Settlement suggestions'],
    cons: ['No UPI support', 'Not INR-first', 'Limited free plan', 'Pro subscription required for full features', 'No contact sync for India'],
    badge: '○ Global app, not India-first',
    badgeColor: 'text-text2 bg-gray-500/10 border border-gray-500/20',
  },
];

export default function BestAppsArticle() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      {/* ARTICLE HEADER */}
      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-sm text-text3 hover:text-text2 transition-colors">Blog</Link>
            <span className="text-text3">/</span>
            <span className="text-sm text-accent font-medium">Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">
            Best Expense Splitting Apps in India 2025
          </h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">
            A ranked, honest comparison of every major bill-splitting app available in India — including what each one costs, what it limits, and who it&apos;s actually best for.
          </p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>April 2025</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          <p className="text-text2 leading-relaxed mb-4">
            Splitting expenses with friends sounds simple until it isn&apos;t. Someone always forgets to pay back, group WhatsApp threads turn into confusing threads of &quot;I paid for dinner bro&quot; and &quot;haan send kar dena,&quot; and spreadsheets get abandoned after week two.
          </p>
          <p className="text-text2 leading-relaxed mb-4">
            The right expense-splitting app makes all of this disappear. But not all apps are created equal — especially for Indian users who need INR support, UPI integration, and an app that actually works when you&apos;re in a hill station with no signal.
          </p>
          <p className="text-text2 leading-relaxed">
            Here are the four best options available in India in 2025, ranked honestly.
          </p>
        </div>
      </section>

      {/* APPS */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {apps.map((app) => (
            <div key={app.name} className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-text3 text-sm font-bold">#{app.rank}</span>
                    <h2 className="text-text1 text-xl font-bold">{app.name}</h2>
                  </div>
                  <p className="text-text3 text-sm">{app.tagline}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0 ${app.badgeColor}`}>{app.badge}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-text3 uppercase tracking-wide">Price:</span>
                <span className="text-sm font-medium text-text1">{app.price}</span>
              </div>

              <p className="text-text2 text-sm leading-relaxed mb-5">{app.verdict}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-2">Pros</p>
                  <ul className="space-y-1.5">
                    {app.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-text2">
                        <span className="text-brand mt-0.5 flex-shrink-0">✓</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Cons</p>
                  <ul className="space-y-1.5">
                    {app.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-text2">
                        <span className="text-accent/70 mt-0.5 flex-shrink-0">✗</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {app.rank === 1 && (
                <div className="mt-6 pt-5 border-t border-border">
                  <DownloadButtons variant="compact" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto py-12">
          <h2 className="text-2xl font-bold text-text1 mb-4">The Bottom Line</h2>
          <p className="text-text2 leading-relaxed mb-4">
            For most Indian users, <strong className="text-text1">The Hisaab</strong> is the clear choice. It&apos;s completely free, built specifically for India, supports UPI, works offline, and has every advanced feature (unequal splits, multiple payers, real-time sync) that other apps either charge for or don&apos;t offer at all.
          </p>
          <p className="text-text2 leading-relaxed mb-4">
            Splitwise made sense before it introduced a paywall and daily limits. Tricount works well for one-off trips where you don&apos;t want to create accounts. Settle Up is a solid global option with no particular India advantage.
          </p>
          <p className="text-text2 leading-relaxed">
            If you&apos;re splitting ongoing expenses with friends, roommates, a partner, or colleagues in India — The Hisaab is the app to download.
          </p>

          <div className="mt-8 p-6 bg-bg rounded-2xl border border-border">
            <p className="text-text1 font-semibold mb-1">Try The Hisaab — free forever</p>
            <p className="text-text3 text-sm mb-4">Available on Android and iOS. No ads, no subscription, no limits.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related articles:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/splitwise-free-plan-limits" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Free Plan Limits</Link>
            <Link href="/blog/how-to-split-rent-with-roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">How to Split Rent</Link>
            <Link href="/compare/splitwise" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Splitwise Detailed</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Ready to switch?" subheading="Download The Hisaab and never fight over bills again." />
    </div>
  );
}
