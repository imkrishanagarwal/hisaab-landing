import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';

export const metadata: Metadata = {
  title: 'How to Split Rent Fairly with Roommates (3 Methods) | The Hisaab',
  description: 'Equal split, proportional split, or by room size — learn which method is fairest for splitting rent with roommates in India, and how to track it automatically.',
  alternates: { canonical: 'https://thehisaab.com/blog/how-to-split-rent-with-roommates' },
  openGraph: {
    title: 'How to Split Rent Fairly with Roommates (3 Methods)',
    description: 'Equal split, proportional split, or by room size — which is fairest? Plus how to track rent and shared bills automatically.',
    url: 'https://thehisaab.com/blog/how-to-split-rent-with-roommates',
  },
};

const methods = [
  {
    number: '01',
    title: 'Equal Split',
    subtitle: 'Best for: identical rooms, similar lifestyles',
    description: 'Everyone pays the same amount. If rent is ₹30,000 and there are 3 roommates, each person pays ₹10,000. Simple, transparent, and easy to calculate.',
    example: 'Rent: ₹30,000 → 3 roommates → ₹10,000 each',
    when: 'Use this when rooms are roughly the same size, everyone has similar access to shared spaces, and no one is using significantly more utilities.',
    drawback: 'Can feel unfair if one roommate has a larger room, private bathroom, or better view.',
  },
  {
    number: '02',
    title: 'Split by Room Size',
    subtitle: 'Best for: different room sizes in the same flat',
    description: 'Divide rent proportionally based on each room\'s square footage (or a rough size estimate). The person with the bigger room pays more.',
    example: 'Rent: ₹30,000. Room A = 150 sq ft (50%), Room B = 100 sq ft (33%), Room C = 50 sq ft (17%) → ₹15,000 / ₹10,000 / ₹5,000',
    when: 'Use this when rooms are clearly different sizes. Measure or estimate each room and calculate the percentage of total floor space.',
    drawback: 'Requires measuring rooms. Doesn\'t account for other perks like private bathroom, better natural light, or closer to kitchen.',
  },
  {
    number: '03',
    title: 'Negotiated Split',
    subtitle: 'Best for: rooms with different perks or drawbacks',
    description: 'Discuss openly and agree on amounts that feel fair to everyone. One roommate might pay less because their room has no window; another might pay more because they have an attached bathroom.',
    example: 'Rent: ₹30,000. Room with attached bath: ₹13,000. Standard room: ₹10,000. Small room with balcony: ₹7,000.',
    when: 'Use this when rooms are different in ways that aren\'t just about size — amenities, noise levels, privacy, location in the flat all matter.',
    drawback: 'Can lead to disagreements if expectations aren\'t set upfront. Have the conversation before anyone moves in.',
  },
];

export default function SplitRentArticle() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      {/* HEADER */}
      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-sm text-text3 hover:text-text2 transition-colors">Blog</Link>
            <span className="text-text3">/</span>
            <span className="text-sm text-accent font-medium">Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">
            How to Split Rent Fairly with Roommates (3 Methods)
          </h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">
            Splitting rent is one of the most common sources of tension between roommates. Here are three fair methods, when to use each one, and how to track everything automatically so there&apos;s no monthly drama.
          </p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>April 2025</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {methods.map((method) => (
            <div key={method.number} className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-black text-text1/10 leading-none flex-shrink-0">{method.number}</span>
                <div>
                  <h2 className="text-xl font-bold text-text1 mb-1">{method.title}</h2>
                  <p className="text-sm text-accent">{method.subtitle}</p>
                </div>
              </div>

              <p className="text-text2 text-sm leading-relaxed mb-4">{method.description}</p>

              <div className="bg-bg rounded-xl border border-border p-4 mb-4">
                <p className="text-xs text-text3 uppercase tracking-wide mb-1">Example</p>
                <p className="text-sm text-text2 font-mono">{method.example}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-brand font-semibold uppercase tracking-wide mb-2">When to use it</p>
                  <p className="text-sm text-text2 leading-relaxed">{method.when}</p>
                </div>
                <div>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-2">Potential drawback</p>
                  <p className="text-sm text-text2 leading-relaxed">{method.drawback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEYOND RENT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Beyond rent: tracking shared bills</h2>
          <p className="text-text2 leading-relaxed mb-4">
            Rent is just the start. Most roommate flat-shares also involve splitting electricity, water, internet, maid salary, cooking gas, and groceries. These vary every month, which makes them harder to track than a fixed rent.
          </p>
          <p className="text-text2 leading-relaxed mb-6">
            The common approaches — rotating who pays, maintaining a shared notebook, or keeping a WhatsApp thread — all break down eventually. Someone forgets, the thread gets too long, or the notebook gets lost.
          </p>

          <h3 className="text-lg font-semibold text-text1 mb-3">The better approach: use an expense-tracking app</h3>
          <p className="text-text2 leading-relaxed mb-4">
            Create a group in The Hisaab called &quot;Flat Expenses&quot; or &quot;[Your Building Name] Flatmates.&quot; Every time someone pays the electricity bill, the maid, or picks up groceries, they add it to the group in seconds. The app tracks running balances and tells everyone what they owe — in real time.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Electricity', detail: 'Log each month\'s bill and split equally (or by usage)' },
              { label: 'Internet/WiFi', detail: 'Fixed monthly — easiest to split equally and track' },
              { label: 'Maid salary', detail: 'Track who pays each month and balance out quarterly' },
              { label: 'Groceries', detail: 'Log each shop with unequal splits if people eat differently' },
            ].map((item) => (
              <div key={item.label} className="bg-bg rounded-xl border border-border p-4">
                <p className="text-text1 font-semibold text-sm mb-1">{item.label}</p>
                <p className="text-text3 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-bg rounded-2xl border border-accent/20">
            <p className="text-text1 font-semibold mb-1">Track everything automatically with The Hisaab</p>
            <p className="text-text3 text-sm mb-4">Free forever. Works offline. Real-time sync across all flatmates&apos; phones.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-6">5 rules to avoid roommate money drama</h2>
          <div className="space-y-4">
            {[
              { tip: 'Decide the split method before anyone moves in', detail: 'Have the conversation upfront, not when tensions are already high.' },
              { tip: 'Put it in writing — even a WhatsApp message counts', detail: 'A quick message confirming the agreed split is enough. It prevents "I thought we said..." arguments later.' },
              { tip: 'Set a fixed monthly settle-up date', detail: 'The 1st or last day of each month. Everyone knows when to expect the transfer, so it\'s never awkward to ask.' },
              { tip: 'Track everything in one app, not a thread', detail: 'WhatsApp threads get buried. A dedicated app shows exact balances instantly, no scrolling required.' },
              { tip: 'Adjust splits when circumstances change', detail: 'If a flatmate starts working from home and their electricity usage increases, it\'s fair to revisit the bill split.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                <div>
                  <p className="text-text1 font-medium text-sm mb-1">{item.tip}</p>
                  <p className="text-text3 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-10 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for/roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Roommate Expense Tracker</Link>
            <Link href="/blog/best-expense-splitting-apps-india-2025" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Best Apps in India 2025</Link>
            <Link href="/for/office" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Office Expense Tracker</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="No more monthly rent drama." subheading="Track every flat expense automatically with The Hisaab — free for all roommates." />
    </div>
  );
}
