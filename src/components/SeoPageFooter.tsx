'use client';

import Link from 'next/link';
import DownloadButtons from './DownloadButtons';

export default function SeoPageFooter({ heading, subheading }: { heading?: string; subheading?: string }) {
  return (
    <>
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text1 mb-4">
            {heading || 'Ready to switch?'}
          </h2>
          <p className="text-text2 text-lg mb-8 max-w-xl mx-auto">
            {subheading || 'Download The Hisaab for free. No ads. No paywalls. All features included.'}
          </p>
          <DownloadButtons variant="cta" />
          <p className="text-sm text-text3 mt-5">
            Available on Android &amp; iOS &bull; Free forever &bull; No credit card needed
          </p>
        </div>
      </section>

      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text3 text-sm">
            &copy; 2026 The Hisaab. Made with love in India.
          </p>
          <nav className="flex items-center gap-6 text-sm text-text3">
            <Link href="/" className="hover:text-text1 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-text1 transition-colors">About</Link>
            <a
              href="https://www.instagram.com/thehisaab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text1 transition-colors"
            >
              Instagram
            </a>
            <Link href="/privacy" className="hover:text-text1 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-text1 transition-colors">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
