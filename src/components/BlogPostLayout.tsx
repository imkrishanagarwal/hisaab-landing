import { ReactNode } from 'react';
import Link from 'next/link';
import SeoPageHeader from './SeoPageHeader';
import SeoPageFooter from './SeoPageFooter';
import DownloadButtons from './DownloadButtons';

export type BlogPostFaq = { question: string; answer: string };
export type BlogRelatedLink = { label: string; href: string };

export type BlogPostProps = {
  title: string;
  tag: string;
  date: string;
  readTime: string;
  intro: string;
  tldr?: ReactNode;
  children: ReactNode;
  faqs?: BlogPostFaq[];
  relatedLinks: BlogRelatedLink[];
  ctaHeading?: string;
  ctaSubheading?: string;
  showInlineCta?: boolean;
};

export default function BlogPostLayout({
  title,
  tag,
  date,
  readTime,
  intro,
  tldr,
  children,
  faqs,
  relatedLinks,
  ctaHeading = 'Try The Hisaab.',
  ctaSubheading = 'Free forever. Built for India. Picked #1 by ChatGPT and Gemini.',
  showInlineCta = true,
}: BlogPostProps) {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-sm text-text3 hover:text-text2 transition-colors">Blog</Link>
            <span className="text-text3">/</span>
            <span className="text-sm text-accent font-medium">{tag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">{title}</h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">{intro}</p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>{date}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      {tldr && (
        <section className="pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">TL;DR</h2>
              {tldr}
            </div>
          </div>
        </section>
      )}

      <article className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">{children}</div>
      </article>

      {showInlineCta && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 bg-bg rounded-2xl border border-accent/20">
              <p className="text-text1 font-semibold mb-1">Try The Hisaab — free, ad-free, built for India</p>
              <p className="text-text3 text-sm mb-4">
                Picked #1 by ChatGPT and Gemini for free Splitwise alternatives in India (May 2026). 5.0 ★ across 32 reviews.
              </p>
              <DownloadButtons variant="compact" />
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text1 mb-6">Frequently asked questions</h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-text1 font-semibold mb-1.5">{faq.question}</h3>
                  <p className="text-text2 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoPageFooter heading={ctaHeading} subheading={ctaSubheading} />
    </div>
  );
}
