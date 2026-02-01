'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Heart, Shield, Zap, Coffee, Star, ArrowRight, Phone, Mail, Github, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">₹</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Hisaab
              </span>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">Features</Link>
              <Link href="#why-hisaab" className="text-gray-600 hover:text-orange-600 transition-colors">Why Hisaab</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors">Privacy</Link>
              <Link href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href="/download"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Download size={20} />
              <span className="hidden sm:inline">Download APK</span>
            </motion.a>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col space-y-4 px-4">
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-orange-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#why-hisaab"
                  className="text-gray-600 hover:text-orange-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Hisaab
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-orange-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-orange-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="/download"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download size={20} />
                  <span>Download APK</span>
                </a>
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
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-green-100 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-sm font-semibold text-gray-700">Made in India 🇮🇳 • Made for India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Split bills,
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                not friendships
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The simple, beautiful expense tracker that keeps your relationships intact.
              Track shared expenses, settle debts, and never argue about money again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/download"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={24} />
                <span>Download for Android</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone size={24} />
                <span>Coming Soon for iOS</span>
              </motion.button>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Privacy First</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-72 sm:w-80 h-80 sm:h-96 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-1">
              <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-5xl sm:text-6xl mb-4">₹</div>
                  <div className="text-lg sm:text-xl font-semibold">Hisaab</div>
                  <div className="text-xs sm:text-sm text-gray-300 mt-2">Split expenses with ease</div>
                  <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-2 sm:p-3">
                      <span className="text-xs sm:text-sm">Trip to Goa</span>
                      <span className="text-orange-400 text-xs sm:text-sm">₹2,400</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-2 sm:p-3">
                      <span className="text-xs sm:text-sm">Dinner Split</span>
                      <span className="text-green-400 text-xs sm:text-sm">₹800</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-2 sm:p-3">
                      <span className="text-xs sm:text-sm">Movie Tickets</span>
                      <span className="text-blue-400 text-xs sm:text-sm">₹600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Hisaab Section */}
      <section id="why-hisaab" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why thousands choose Hisaab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100"
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">100% Free Forever</h3>
              <p className="text-gray-600">
                No subscription fees, no premium plans, no hidden costs.
                While others charge ₹200+ per month, Hisaab remains completely free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Simple & Fast</h3>
              <p className="text-gray-600">
                Clean, intuitive design that works offline. Add expenses in seconds,
                not minutes. No complex menus or confusing features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Privacy First</h3>
              <p className="text-gray-600">
                Your data stays yours. No tracking, no ads, no selling your information.
                Built with privacy at the core.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the features to manage shared expenses, without the complexity
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: "Smart Expense Splitting",
                description: "Split equally or set custom amounts. Perfect for trips, dinners, and shared living.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Coffee,
                title: "Friend Network",
                description: "Sync contacts to find friends already using Hisaab. Build your expense-sharing network.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Heart,
                title: "Auto Settlements",
                description: "See who owes what at a glance. One-tap settlements to clear debts instantly.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Zap,
                title: "Works Offline",
                description: "Add expenses anywhere, anytime. Syncs automatically when you're back online.",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: Shield,
                title: "Group Management",
                description: "Create groups for trips, home, couples, or any shared expense scenario.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: Star,
                title: "Activity Feed",
                description: "Real-time updates on all group activities. Never miss an expense or settlement.",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Made in India Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              🇮🇳 Proudly Made in India
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Built by Indians, for Indians. Supporting local innovation and keeping your money
              in your pocket where it belongs.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Free Forever</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">0</div>
                <div className="text-lg opacity-90">Monthly Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-lg opacity-90">Expenses Tracked</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to split smarter?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands using Hisaab to track expenses without breaking friendships
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/download"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 space-x-2"
            >
              <Download size={24} />
              <span>Download Hisaab APK</span>
              <ArrowRight size={24} />
            </motion.a>
            <p className="text-sm text-gray-500 mt-4">
              Free download • No registration required • Works offline
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">₹</span>
                </div>
                <span className="text-xl font-bold">Hisaab</span>
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
              <ul className="space-y-2 text-gray-400">
                <li><a href="/download" className="hover:text-white transition-colors">Android APK</a></li>
                <li><span className="text-gray-500">iOS (Coming Soon)</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hello@thehisaab.com" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Mail size={16} />
                  <span>hello@thehisaab.com</span>
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Github size={16} />
                  <span>GitHub</span>
                </a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Hisaab. Made with ❤️ in India. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Free forever • No ads • Privacy first
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
