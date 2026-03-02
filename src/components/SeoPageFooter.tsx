'use client';

import Link from 'next/link';
import DownloadButtons from './DownloadButtons';

export default function SeoPageFooter({ heading, subheading }: { heading?: string; subheading?: string }) {
  return (
    <>
      <section className="py-16 sm:py-20 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {heading || 'Ready to switch?'}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            {subheading || 'Download Hisaab for free. No ads. No paywalls. All features included.'}
          </p>
          <DownloadButtons variant="cta" />
          <p className="text-sm text-gray-600 mt-5">
            Available on Android &amp; iOS &bull; Free forever &bull; No credit card needed
          </p>
        </div>
      </section>

      <footer className="bg-[#121212] border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2026 Hisaab. Made with love in India.
          </p>
          <nav className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
