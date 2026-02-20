'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, Smartphone, ArrowRight } from 'lucide-react'
import DownloadButtons from '@/components/DownloadButtons'

export default function AuthCallback() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    const type = urlParams.get('type')
    const error = urlParams.get('error')
    const errorDescription = urlParams.get('error_description')

    if (error) {
      setStatus('error')
      setErrorMessage(errorDescription || error)
    } else if (token && type === 'email') {
      setStatus('success')
    } else {
      setStatus('success')
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[#121212] rounded-2xl border border-gray-800 p-8 text-center">
          {status === 'loading' && (
            <>
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB]"></div>
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Verifying Your Email
              </motion.h1>
              <motion.p
                className="text-gray-400"
                variants={itemVariants}
              >
                Please wait while we verify your email address...
              </motion.p>
            </>
          )}

          {status === 'success' && (
            <>
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center"
                variants={iconVariants}
              >
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </motion.div>

              <motion.h1
                className="text-2xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Email Verified!
              </motion.h1>

              <motion.p
                className="text-gray-400 mb-8"
                variants={itemVariants}
              >
                Your email address has been successfully verified. You can now enjoy all features of The Hisaab.
              </motion.p>

              <motion.div
                className="bg-white/5 border border-gray-800 rounded-xl p-6 mb-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-[#2563EB] mr-3" />
                  <h2 className="text-lg font-semibold text-white">Next Steps</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start text-left">
                    <span className="bg-[#2563EB] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 shrink-0">1</span>
                    <p className="text-gray-300">Open the <span className="font-semibold text-[#2563EB]">The Hisaab app</span> on your phone</p>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="bg-[#2563EB] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 shrink-0">2</span>
                    <p className="text-gray-300">Log in with your verified email address</p>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="bg-[#2563EB] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 shrink-0">3</span>
                    <p className="text-gray-300">Start managing your finances with confidence!</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={itemVariants}
              >
                <div className="flex-1">
                  <DownloadButtons variant="dark" />
                </div>
                <a
                  href="/"
                  className="flex items-center justify-center gap-2 bg-white/5 border border-gray-800 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex-1"
                >
                  Back to Home
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </>
          )}

          {status === 'error' && (
            <>
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center"
                variants={iconVariants}
              >
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </motion.div>

              <motion.h1
                className="text-2xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Verification Failed
              </motion.h1>

              <motion.p
                className="text-gray-400 mb-6"
                variants={itemVariants}
              >
                {errorMessage || 'There was an issue verifying your email address. Please try again.'}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={itemVariants}
              >
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1D4ED8] transition-colors flex-1 border-none cursor-pointer"
                >
                  Try Again
                </button>
                <a
                  href="/"
                  className="bg-white/5 border border-gray-800 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex-1 text-center"
                >
                  Back to Home
                </a>
              </motion.div>
            </>
          )}
        </div>

        <motion.p
          className="text-center text-sm text-gray-500 mt-6"
          variants={itemVariants}
        >
          Need help? Contact our support team at{' '}
          <a href="mailto:admin@thehisaab.com" className="text-[#2563EB] hover:underline font-medium">
            admin@thehisaab.com
          </a>
        </motion.p>
      </motion.div>
    </div>
  )
}
