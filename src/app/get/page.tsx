'use client'

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { initMixpanel, trackEvent } from '@/lib/mixpanel'

const PLAY_STORE_BASE = 'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab'
const APP_STORE_URL = 'https://apps.apple.com/in/app/the-hisaab/id6759067047'

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

function GetRedirect() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')

    const ios = isIOS()
    initMixpanel()
    trackEvent('store_redirect', {
      store: ios ? 'app_store' : 'play_store',
      ref: ref || undefined,
      platform: ios ? 'ios' : 'android',
      page: '/get',
    })

    if (ios) {
      // Copy referral code to clipboard before redirecting to App Store
      if (ref) {
        navigator.clipboard.writeText(`hisaab-ref:${ref}`).catch(() => {})
      }
      window.location.href = APP_STORE_URL
    } else {
      // Android: pass ref via Play Store referrer param
      const url = ref
        ? `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(`ref=${ref}`)}`
        : PLAY_STORE_BASE
      window.location.href = url
    }
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

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
      <p className="text-gray-400">Redirecting to download...</p>
    </div>
  </div>
)

export default function GetPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <GetRedirect />
    </Suspense>
  )
}
