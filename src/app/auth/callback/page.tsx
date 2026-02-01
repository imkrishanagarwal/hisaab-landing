'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, Smartphone, ArrowRight } from 'lucide-react'

export default function AuthCallback() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    // Parse URL parameters to check verification status
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    const type = urlParams.get('type')
    const error = urlParams.get('error')
    const errorDescription = urlParams.get('error_description')

    if (error) {
      setStatus('error')
      setErrorMessage(errorDescription || error)
    } else if (token && type === 'email') {
      // Email verification successful
      setStatus('success')
    } else {
      // Could be other verification types or success states
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
        ease: 'easeOut',
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
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 text-center">
          {status === 'loading' && (
            <>
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-foreground mb-4"
                variants={itemVariants}
              >
                Verifying Your Email
              </motion.h1>
              <motion.p
                className="text-muted-foreground"
                variants={itemVariants}
              >
                Please wait while we verify your email address...
              </motion.p>
            </>
          )}

          {status === 'success' && (
            <>
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                variants={iconVariants}
              >
                <CheckCircle className="w-8 h-8 text-secondary-600" />
              </motion.div>

              <motion.h1
                className="text-2xl font-bold text-foreground mb-4 gradient-text-orange-green"
                variants={itemVariants}
              >
                Email Verified! 🎉
              </motion.h1>

              <motion.p
                className="text-muted-foreground mb-8"
                variants={itemVariants}
              >
                Your email address has been successfully verified. You can now enjoy all features of Hisaab.
              </motion.p>

              <motion.div
                className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-primary-600 mr-3" />
                  <h2 className="text-lg font-semibold text-foreground">Next Steps</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start text-left">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      1
                    </span>
                    <p className="text-foreground">Open the <span className="font-semibold text-primary-600">Hisaab app</span> on your phone</p>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    <p className="text-foreground">Log in with your verified email address</p>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    <p className="text-foreground">Start managing your finances with confidence!</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={itemVariants}
              >
                <a
                  href="https://github.com/imkrishanagarwal/hisaab-v2/releases/download/v0.1/hisaab.apk"
                  download
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex-1"
                >
                  <Smartphone className="w-5 h-5" />
                  Download App
                </a>
                <a
                  href="/"
                  className="flex items-center justify-center gap-2 bg-white border border-primary-200 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors flex-1"
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
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center"
                variants={iconVariants}
              >
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </motion.div>

              <motion.h1
                className="text-2xl font-bold text-foreground mb-4"
                variants={itemVariants}
              >
                Verification Failed
              </motion.h1>

              <motion.p
                className="text-muted-foreground mb-6"
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
                  className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex-1"
                >
                  Try Again
                </button>
                <a
                  href="/"
                  className="bg-white border border-primary-200 text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors flex-1 text-center"
                >
                  Back to Home
                </a>
              </motion.div>
            </>
          )}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-6"
          variants={itemVariants}
        >
          Need help? Contact our support team at{' '}
          <a href="mailto:support@hisaab.app" className="text-primary-600 hover:text-primary-700 font-medium">
            support@hisaab.app
          </a>
        </motion.p>
      </motion.div>
    </div>
  )
}