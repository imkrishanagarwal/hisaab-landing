import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';

export const metadata: Metadata = {
  title: 'Blog — Expense Splitting Tips & Guides | The Hisaab',
  description: 'Guides on splitting bills, tracking shared expenses, and managing money with friends, roommates, and colleagues in India.',
  alternates: { canonical: 'https://thehisaab.com/blog' },
  openGraph: {
    title: 'Blog | The Hisaab',
    description: 'Guides on splitting bills, tracking shared expenses, and managing money with friends in India.',
    url: 'https://thehisaab.com/blog',
  },
};

const posts = [
  {
    slug: 'best-expense-splitting-apps-india-2025',
    title: 'Best Expense Splitting Apps in India 2025',
    description: 'A honest ranking of every major bill-splitting app available in India — features, pricing, and who each one is best for.',
    date: 'April 2025',
    readTime: '6 min read',
    tag: 'Comparison',
  },
  {
    slug: 'splitwise-free-plan-limits',
    title: 'Splitwise Free Plan Limits: What You Can and Can\'t Do',
    description: 'Splitwise restricts free users to 3 expenses per day, limited groups, and no unequal splits. Here\'s what that means for you — and what to use instead.',
    date: 'April 2025',
    readTime: '4 min read',
    tag: 'Splitwise',
  },
  {
    slug: 'how-to-split-rent-with-roommates',
    title: 'How to Split Rent Fairly with Roommates (3 Methods)',
    description: 'Equal split, proportional split, or by room size — which method is fairest? And how to track it automatically without the monthly drama.',
    date: 'April 2025',
    readTime: '5 min read',
    tag: 'Guide',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-[#2563EB] mb-3 tracking-wide uppercase">The Hisaab Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
            Guides & Tips
          </h1>
          <p className="text-gray-400 text-lg">
            Everything you need to know about splitting expenses fairly in India.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-[#121212] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-gray-600">{post.date}</span>
                  <span className="text-xs text-gray-600">·</span>
                  <span className="text-xs text-gray-600">{post.readTime}</span>
                </div>
                <h2 className="text-white font-semibold text-xl mb-2 group-hover:text-[#60a5fa] transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{post.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[#2563EB] text-sm font-medium">
                  Read article <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <SeoPageFooter heading="Start splitting smarter." subheading="Download The Hisaab — free forever, built for India." />
    </div>
  );
}
