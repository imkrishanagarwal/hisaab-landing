'use client'

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const PLAY_STORE_BASE = 'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab'

function GetRedirect() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')
    const url = ref
      ? `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(`ref=${ref}`)}`
      : PLAY_STORE_BASE
    window.location.href = url
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
        <p className="text-gray-400">Redirecting to download...</p>
      </div>
    </div>
  )
}

export default function GetPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-gray-400">Redirecting to download...</p>
        </div>
      </div>
    }>
      <GetRedirect />
    </Suspense>
  )
}
