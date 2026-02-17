'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const DEEP_LINK_SCHEME = 'hisaab'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.hisaab.app'
const APP_STORE_URL = 'https://apps.apple.com/app/hisaab/id0000000000'
const APK_FALLBACK_URL = 'https://github.com/imkrishanagarwal/hisaab-v2/releases/download/v0.1/hisaab.apk'

type VisitorInfo = {
  ip: string
  os: string
  browser: string
  deviceType: string
  screenResolution: string
  language: string
  timezone: string
}

function getOS(ua: string): string {
  if (/Windows NT 10/.test(ua)) return 'Windows 10/11'
  if (/Windows NT 6.3/.test(ua)) return 'Windows 8.1'
  if (/Windows NT 6.2/.test(ua)) return 'Windows 8'
  if (/Windows NT 6.1/.test(ua)) return 'Windows 7'
  if (/Windows/.test(ua)) return 'Windows'
  if (/Mac OS X/.test(ua)) {
    const match = ua.match(/Mac OS X (\d+[._]\d+[._]?\d*)/)
    return match ? `macOS ${match[1].replace(/_/g, '.')}` : 'macOS'
  }
  if (/Android/.test(ua)) {
    const match = ua.match(/Android (\d+\.?\d*)/)
    return match ? `Android ${match[1]}` : 'Android'
  }
  if (/iPhone|iPad|iPod/.test(ua)) {
    const match = ua.match(/OS (\d+[._]\d+)/)
    return match ? `iOS ${match[1].replace(/_/g, '.')}` : 'iOS'
  }
  if (/Linux/.test(ua)) return 'Linux'
  if (/CrOS/.test(ua)) return 'Chrome OS'
  return 'Unknown'
}

function getBrowser(ua: string): string {
  if (/Edg\//.test(ua)) {
    const match = ua.match(/Edg\/(\d+)/)
    return `Edge ${match?.[1] || ''}`
  }
  if (/OPR\/|Opera/.test(ua)) {
    const match = ua.match(/OPR\/(\d+)/)
    return `Opera ${match?.[1] || ''}`
  }
  if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) {
    const match = ua.match(/Chrome\/(\d+)/)
    return `Chrome ${match?.[1] || ''}`
  }
  if (/Safari\//.test(ua) && !/Chrome/.test(ua)) {
    const match = ua.match(/Version\/(\d+)/)
    return `Safari ${match?.[1] || ''}`
  }
  if (/Firefox\//.test(ua)) {
    const match = ua.match(/Firefox\/(\d+)/)
    return `Firefox ${match?.[1] || ''}`
  }
  return 'Unknown'
}

function getDeviceType(ua: string): string {
  if (/Tablet|iPad/i.test(ua)) return 'Tablet'
  if (/Mobile|iPhone|Android.*Mobile/i.test(ua)) return 'Mobile'
  return 'Desktop'
}

function getPlatform(ua: string): 'android' | 'ios' | 'other' {
  if (/Android/i.test(ua)) return 'android'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  return 'other'
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-[#374151] last:border-b-0">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-white text-sm font-medium text-right max-w-[60%] break-all">{value || 'N/A'}</span>
    </div>
  )
}

export default function LinkPage() {
  const { param } = useParams<{ param: string }>()
  const [info, setInfo] = useState<VisitorInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<'trying' | 'redirecting' | 'fallback'>('trying')

  useEffect(() => {
    const ua = navigator.userAgent
    const platform = getPlatform(ua)

    // Desktop — skip deep link, show info directly
    if (platform === 'other') {
      setStatus('fallback')
      collectInfo()
      return
    }

    // Mobile — attempt deep link
    const deepLink = `${DEEP_LINK_SCHEME}://link/${param}`
    const start = Date.now()

    window.location.href = deepLink

    // If the app opened, the page will be hidden/blurred.
    // If still visible after 2s, the app isn't installed → redirect to store.
    const timer = setTimeout(() => {
      // If the user left the page (app opened), skip redirect
      if (document.hidden || Date.now() - start > 3000) return

      setStatus('redirecting')

      if (platform === 'android') {
        window.location.href = PLAY_STORE_URL
      } else {
        window.location.href = APP_STORE_URL
      }
    }, 2000)

    const onVisibilityChange = () => {
      if (document.hidden) clearTimeout(timer)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Also collect info for mobile in case store redirect fails
    collectInfo()

    return () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [param])

  async function collectInfo() {
    const ua = navigator.userAgent

    let ip = 'Fetching...'
    try {
      const res = await fetch('/api/visitor-info')
      const data = await res.json()
      ip = data.ip
    } catch {
      ip = 'Unavailable'
    }

    setInfo({
      ip,
      os: getOS(ua),
      browser: getBrowser(ua),
      deviceType: getDeviceType(ua),
      screenResolution: `${screen.width} x ${screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })
    setLoading(false)
  }

  const platform = typeof navigator !== 'undefined' ? getPlatform(navigator.userAgent) : 'other'

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans">
      <div className="max-w-[480px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-[28px] font-extrabold text-[#F98C2F] tracking-tight">Hisaab</div>
          <p className="text-gray-400 text-sm mt-1">Link: {param}</p>
        </div>

        {/* Deep link status for mobile */}
        {status === 'trying' && platform !== 'other' && (
          <div className="bg-[#2C2C2E] rounded-2xl p-6 border border-[#374151] mb-4 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F98C2F] mx-auto mb-3" />
            <p className="text-gray-300 text-sm">Opening Hisaab app...</p>
          </div>
        )}

        {status === 'redirecting' && (
          <div className="bg-[#2C2C2E] rounded-2xl p-6 border border-[#374151] mb-4 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F98C2F] mx-auto mb-3" />
            <p className="text-gray-300 text-sm">
              App not found. Redirecting to {platform === 'android' ? 'Play Store' : 'App Store'}...
            </p>
          </div>
        )}

        {/* Manual store button (visible after redirect attempt) */}
        {status !== 'trying' && platform !== 'other' && (
          <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151] mb-4 text-center">
            <p className="text-gray-400 text-sm mb-4">Don&apos;t have the app yet?</p>
            <a
              href={platform === 'android' ? PLAY_STORE_URL : APP_STORE_URL}
              className="inline-block bg-[#F98C2F] text-black py-3 px-8 rounded-xl font-bold text-sm no-underline"
            >
              {platform === 'android' ? 'Get it on Play Store' : 'Download on App Store'}
            </a>
            {platform === 'android' && (
              <a
                href={APK_FALLBACK_URL}
                className="block text-gray-400 text-xs mt-3 underline"
              >
                Or download APK directly
              </a>
            )}
          </div>
        )}

        {/* Visitor info */}
        {loading ? (
          <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151] animate-pulse">
            <div className="h-6 bg-[#374151] rounded w-1/2 mb-4" />
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between py-3">
                <div className="h-4 bg-[#374151] rounded w-24" />
                <div className="h-4 bg-[#374151] rounded w-32" />
              </div>
            ))}
          </div>
        ) : info && (
          <div className="bg-[#2C2C2E] rounded-2xl p-5 border border-[#374151]">
            <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Visitor Info</div>
            <InfoRow label="IP Address" value={info.ip} />
            <InfoRow label="Device" value={info.deviceType} />
            <InfoRow label="OS" value={info.os} />
            <InfoRow label="Browser" value={info.browser} />
            <InfoRow label="Screen" value={info.screenResolution} />
            <InfoRow label="Language" value={info.language} />
            <InfoRow label="Timezone" value={info.timezone} />
          </div>
        )}
      </div>
    </div>
  )
}
