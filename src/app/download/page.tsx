'use client'

import { useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

export default function DownloadPage() {
  useEffect(() => {
    // Redirect to GitHub releases after a brief delay
    const timer = setTimeout(() => {
      window.location.href = 'https://github.com/imkrishanagarwal/hisaab-v2/releases/download/v0.1/hisaab.apk'
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <Head>
        <title>Download Hisaab App - Free Finance Management | Made in India</title>
        <meta name="description" content="Download Hisaab - The best finance management app made in India. Track expenses, manage budgets, and take control of your money. Free download!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehisaab.com/download" />
        <meta property="og:title" content="Download Hisaab App - Free Finance Management" />
        <meta property="og:description" content="Download Hisaab - The best finance management app made in India. Track expenses, manage budgets, and take control of your money. Free download!" />
        <meta property="og:image" content="https://thehisaab.com/hisaab-social-card.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Hisaab" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thehisaab.com/download" />
        <meta property="twitter:title" content="Download Hisaab App - Free Finance Management" />
        <meta property="twitter:description" content="Download Hisaab - The best finance management app made in India. Track expenses, manage budgets, and take control of your money. Free download!" />
        <meta property="twitter:image" content="https://thehisaab.com/hisaab-social-card.svg" />

        {/* WhatsApp specific */}
        <meta property="og:image:alt" content="Hisaab App - Finance Management Made Simple" />

        {/* Additional meta tags */}
        <meta name="keywords" content="hisaab, finance app, expense tracker, budget management, india, free app, money management" />
        <meta name="author" content="Hisaab Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thehisaab.com/download" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8">
          {/* Animated Download Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Download className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-bold mb-4 gradient-text-orange-green"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Downloading Hisaab
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-muted-foreground mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Thanks for choosing Hisaab! Your download will start automatically...
          </motion.p>

          {/* Loading Animation */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex space-x-2">
              <motion.div
                className="w-3 h-3 bg-primary-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="w-3 h-3 bg-primary-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
              <motion.div
                className="w-3 h-3 bg-primary-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4
                }}
              />
            </div>
          </motion.div>

          {/* Manual Download Button */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-muted-foreground">
              Download not starting automatically?
            </p>
            <a
              href="https://github.com/imkrishanagarwal/hisaab-v2/releases/download/v0.1/hisaab.apk"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            className="mt-6 pt-6 border-t border-orange-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-muted-foreground">
            🇮🇳 Made in India with ❤️
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Share this link with friends: <span className="font-mono bg-orange-50 px-2 py-1 rounded text-primary-600">thehisaab.com/download</span>
          </p>
        </motion.div>
      </motion.div>
      </div>
    </>
  )
}