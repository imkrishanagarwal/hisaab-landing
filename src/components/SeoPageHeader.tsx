'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import DownloadButtons from './DownloadButtons';

export default function SeoPageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={18} />
            <Image src="/logo.webp" alt="Hisaab" width={28} height={28} className="rounded-lg" />
            <span className="text-lg font-bold text-white">Hisaab</span>
          </Link>
          <div className="hidden sm:block">
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </div>
    </header>
  );
}
