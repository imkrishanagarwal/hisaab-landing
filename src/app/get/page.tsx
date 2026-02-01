'use client'

import { useEffect } from 'react'
import Head from 'next/head'

export default function GetPage() {
  useEffect(() => {
    // Immediate redirect to GitHub releases
    window.location.href = 'https://github.com/imkrishanagarwal/hisaab-v2/releases/download/v0.1/hisaab.apk'
  }, [])

  return (
    <>
      <Head>
        <title>Get Hisaab App - Free Download | Finance Management Made Simple</title>
        <meta name="description" content="Get Hisaab now! The best finance management app made in India. Quick download, easy setup. Track expenses and manage your money better." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehisaab.com/get" />
        <meta property="og:title" content="Get Hisaab App - Free Download" />
        <meta property="og:description" content="Get Hisaab now! The best finance management app made in India. Quick download, easy setup. Track expenses and manage your money better." />
        <meta property="og:image" content="https://thehisaab.com/hisaab-social-card.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Hisaab" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thehisaab.com/get" />
        <meta property="twitter:title" content="Get Hisaab App - Free Download" />
        <meta property="twitter:description" content="Get Hisaab now! The best finance management app made in India. Quick download, easy setup. Track expenses and manage your money better." />
        <meta property="twitter:image" content="https://thehisaab.com/icon-512x512.png" />

        {/* WhatsApp specific */}
        <meta property="og:image:alt" content="Hisaab App - Get it now!" />

        {/* Additional meta tags */}
        <meta name="keywords" content="get hisaab, download hisaab, finance app, expense tracker, budget app, india" />
        <meta name="author" content="Hisaab Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thehisaab.com/get" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Redirecting to download...</p>
        </div>
      </div>
    </>
  )
}