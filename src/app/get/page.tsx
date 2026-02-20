'use client'

import { useEffect } from 'react'
import Head from 'next/head'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab'

export default function GetPage() {
  useEffect(() => {
    window.location.href = PLAY_STORE_URL
  }, [])

  return (
    <>
      <Head>
        <title>Get The Hisaab App - Free Download | Finance Management Made Simple</title>
        <meta name="description" content="Get The Hisaab now! The best finance management app made in India. Quick download, easy setup. Track expenses and manage your money better." />
      </Head>

      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-gray-400">Redirecting to download...</p>
        </div>
      </div>
    </>
  )
}
