'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Zap, Coffee, Star, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButtons from '@/components/DownloadButtons';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Image src="/logo.png" alt="The Hisaab" width={40} height={40} className="rounded-xl" />
              <span className="text-2xl font-bold text-white">
                The Hisaab
              </span>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="#why-hisaab" className="text-gray-400 hover:text-white transition-colors">Why The Hisaab</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <DownloadButtons variant="compact" />
            </motion.div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#121212] border-t border-gray-800 py-4 rounded-b-2xl"
            >
              <nav className="flex flex-col space-y-4 px-4">
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#why-hisaab"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why The Hisaab
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div onClick={() => setIsMenuOpen(false)}>
                  <DownloadButtons variant="compact" className="w-full justify-center" />
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-[#2563EB] mr-2" />
              <span className="text-sm font-semibold text-gray-300">Made in India • Made for India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Split expenses,
              <br />
              <span className="text-[#2563EB]">
                stay friends
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              The simple, beautiful expense tracker that keeps your relationships intact.
              Track shared expenses, settle debts, and never argue about money again.
            </p>

            <DownloadButtons variant="hero" />

            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Privacy First</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <Image
              src="/devices.png"
              alt="The Hisaab app on devices"
              width={500}
              height={600}
              className="w-full max-w-md h-auto"
              priority
            />
          </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose The Hisaab Section */}
      <section id="why-hisaab" className="py-16 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why thousands choose The Hisaab
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              When other apps started charging fees, we decided to build something better.
              Simple, beautiful, and free forever.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">100% Free Forever</h3>
              <p className="text-gray-400">
                No subscription fees, no premium plans, no hidden costs.
                While others charge ₹200+ per month, The Hisaab remains completely free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/10"
            >
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Simple & Fast</h3>
              <p className="text-gray-400">
                Clean, intuitive design that works offline. Add expenses in seconds,
                not minutes. No complex menus or confusing features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Privacy First</h3>
              <p className="text-gray-400">
                Your data stays yours. No tracking, no ads, no selling your information.
                Built with privacy at the core.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Everything you need</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              All the features to manage shared expenses, without the complexity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: "Smart Expense Splitting",
                description: "Split equally or set custom amounts. Perfect for trips, dinners, and shared living.",
                color: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/10"
              },
              {
                icon: Coffee,
                title: "Friend Network",
                description: "Sync contacts to find friends already using The Hisaab. Build your expense-sharing network.",
                color: "bg-purple-500/10 text-purple-400 border-purple-500/10"
              },
              {
                icon: Heart,
                title: "Auto Settlements",
                description: "See who owes what at a glance. One-tap settlements to clear debts instantly.",
                color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/10"
              },
              {
                icon: Zap,
                title: "Works Offline",
                description: "Add expenses anywhere, anytime. Syncs automatically when you're back online.",
                color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/10"
              },
              {
                icon: Shield,
                title: "Group Management",
                description: "Create groups for trips, home, couples, or any shared expense scenario.",
                color: "bg-red-500/10 text-red-400 border-red-500/10"
              },
              {
                icon: Star,
                title: "Activity Feed",
                description: "Real-time updates on all group activities. Never miss an expense or settlement.",
                color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/10"
              }
            ].map((feature, index) => {
              const colorParts = feature.color.split(' ');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-[#121212] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${colorParts[0]} rounded-xl flex items-center justify-center mb-4 border ${colorParts[2]}`}>
                    <feature.icon className={`w-6 h-6 ${colorParts[1]}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Made in India Section */}
      <section className="py-16 bg-[#121212] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Proudly Made in India
            </h2>
            <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
              Built by Indians, for Indians. Supporting local innovation and keeping your money
              in your pocket where it belongs.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-[#2563EB]">100%</div>
                <div className="text-lg text-gray-400">Free Forever</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-emerald-400">0</div>
                <div className="text-lg text-gray-400">Monthly Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-orange-400">∞</div>
                <div className="text-lg text-gray-400">Expenses Tracked</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to split smarter?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands using The Hisaab to track expenses without breaking friendships
            </p>
            <DownloadButtons variant="cta" />
            <p className="text-sm text-gray-600 mt-4">
              Free download • No registration required • Works offline
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#121212] border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="The Hisaab" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">The Hisaab</span>
              </div>
              <p className="text-gray-400">
                Split bills, not friendships. The simple way to track shared expenses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <DownloadButtons variant="footer-links" />
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:admin@thehisaab.com" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Mail size={16} />
                  <span>admin@thehisaab.com</span>
                </a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              © 2025 The Hisaab. Made with love in India. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Free forever • No ads • Privacy first
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
