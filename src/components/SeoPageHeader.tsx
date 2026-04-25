'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import DownloadButtons from './DownloadButtons';

export default function SeoPageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          <Link href="/" className="flex items-center gap-2 text-text2 hover:text-text1 transition-colors">
            <ArrowLeft size={18} />
            <Image src="/logo.webp" alt="The Hisaab" width={28} height={28} className="rounded-lg" />
            <span className="text-lg font-bold text-text1">The Hisaab</span>
          </Link>
          <div className="hidden sm:block">
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </div>
    </header>
  );
}
