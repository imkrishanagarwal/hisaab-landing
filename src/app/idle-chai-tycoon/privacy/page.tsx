'use client';

import { motion } from 'framer-motion';
import { Shield, Smartphone, BarChart2, Megaphone, Mail, Eye } from 'lucide-react';

export default function ChaiPrivacy() {
  return (
    <div className="min-h-screen bg-[#0D0A07] text-white">
      {/* Header */}
      <header className="bg-[#0D0A07]/80 backdrop-blur-lg border-b border-orange-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-5 gap-3">
            <span className="text-2xl">☕</span>
            <span className="text-xl font-bold text-white">Chai to Crore</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Chai to Crore: Startup Tycoon</p>
            <p className="text-sm text-gray-600 mt-2">Last updated: April 2026</p>
          </div>

          <div className="space-y-8">
            {/* At a Glance */}
            <div className="bg-[#150F09] rounded-2xl p-8 border border-orange-900/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-orange-400" />
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🚫</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">No Account Required</h3>
                  <p className="text-gray-400 text-sm">No email, name, or phone number is ever collected. You play anonymously.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🎮</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">Game Progress Only</h3>
                  <p className="text-gray-400 text-sm">We only save your in-game stage and score to sync your progress.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📵</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">No Data Selling</h3>
                  <p className="text-gray-400 text-sm">Your data is never sold or shared with advertisers or third parties for targeting.</p>
                </div>
              </div>
            </div>

            {/* What We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What We Collect</h2>

              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30 mb-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-400" />
                  Anonymous Player ID
                </h3>
                <p className="text-gray-400 mb-3">
                  When you first launch the game, we create a random anonymous ID for your device using Supabase Anonymous Auth. This ID is not linked to any personal information — no name, no email, no phone number.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• A randomly generated UUID (anonymous)</li>
                  <li>• Device platform (Android or iOS)</li>
                  <li>• App version</li>
                </ul>
              </div>

              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30 mb-4">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-orange-400" />
                  Game Progress
                </h3>
                <p className="text-gray-400 mb-3">
                  To sync your progress and power leaderboards, we store the following game data linked to your anonymous ID:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Current stage (e.g. Chai Stall, Series A, Unicorn)</li>
                  <li>• Number of prestiges (exits completed)</li>
                  <li>• Total in-game earnings (your fictional ₹ score)</li>
                  <li>• Last played timestamp</li>
                </ul>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm text-gray-400">
                    None of this data can identify you personally. It is fictional game data tied to a random ID.
                  </p>
                </div>
              </div>

              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-orange-400" />
                  Ads &amp; Analytics (Third-Party SDKs)
                </h3>
                <p className="text-gray-400 mb-3">
                  The game displays ads via Google AdMob and may use analytics tools to improve gameplay. These third-party SDKs may collect certain device-level data as described in their own privacy policies.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• <strong className="text-white">Google AdMob:</strong> Shows rewarded, interstitial, and banner ads. May collect advertising identifiers (IDFA/GAID) per Google&apos;s policies.</li>
                  <li>• <strong className="text-white">Analytics (Mixpanel / PostHog):</strong> Anonymous event tracking to understand how players interact with the game (e.g., which upgrades are popular). No personal data is sent.</li>
                  <li>• <strong className="text-white">Push Notifications (Expo):</strong> Used only to remind you that your idle income is waiting. You can disable these at any time in your device settings.</li>
                </ul>
              </div>
            </section>

            {/* What We Do NOT Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What We Do NOT Collect</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <ul className="space-y-3 text-gray-400">
                  <li>• <strong className="text-white">No name, email, or phone number</strong> — ever</li>
                  <li>• <strong className="text-white">No contacts or address book</strong></li>
                  <li>• <strong className="text-white">No location data</strong></li>
                  <li>• <strong className="text-white">No camera or microphone access</strong></li>
                  <li>• <strong className="text-white">No social media profiles</strong></li>
                  <li>• <strong className="text-white">No payment details</strong> — in-app purchases are handled entirely by the App Store / Google Play</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Data */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Data</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <ul className="space-y-3 text-gray-400">
                  <li>• <strong className="text-white">Sync your progress</strong> across devices and sessions</li>
                  <li>• <strong className="text-white">Power leaderboards</strong> using your anonymous score</li>
                  <li>• <strong className="text-white">Improve the game</strong> through aggregated, anonymous usage analytics</li>
                  <li>• <strong className="text-white">Deliver ads</strong> via Google AdMob to keep the game free</li>
                  <li>• <strong className="text-white">Send optional push notifications</strong> (idle income reminders, events)</li>
                </ul>
              </div>
            </section>

            {/* In-App Purchases */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">In-App Purchases</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <p className="text-gray-400">
                  All in-app purchases are processed securely by the Apple App Store or Google Play Store. We do not receive or store your payment card details. Purchase receipts are validated server-side only to unlock the corresponding in-game benefit.
                </p>
              </div>
            </section>

            {/* Data Storage & Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage &amp; Security</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <ul className="space-y-3 text-gray-400">
                  <li>• <strong className="text-white">Hosted on Supabase</strong> with enterprise-grade encryption in transit and at rest</li>
                  <li>• <strong className="text-white">Row-level security</strong>: each anonymous player can only read and write their own data</li>
                  <li>• <strong className="text-white">Local storage (MMKV)</strong> is used on-device for instant game state reads — this never leaves your device</li>
                  <li>• <strong className="text-white">No third-party data brokers</strong> have access to our database</li>
                </ul>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <p className="text-gray-400">
                  Chai to Crore is rated for general audiences and does not knowingly collect personal information from children under 13. Since we collect no personal information from any player, no special handling is needed. If you believe a child has made an in-app purchase without authorization, please contact your device&apos;s app store directly.
                </p>
              </div>
            </section>

            {/* Data Deletion */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Deletion</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <p className="text-gray-400 mb-3">
                  Because your data is anonymous, uninstalling the game effectively severs the link between your device and your anonymous record. If you want your anonymous game record deleted from our servers, email us from the address below with your request and the platform you played on.
                </p>
                <p className="text-gray-400">
                  We will delete the record within <strong className="text-white">30 days</strong>.
                </p>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <p className="text-gray-400">
                  We may update this policy as the game evolves (e.g., new features, new SDKs). The &quot;Last updated&quot; date at the top will always reflect the most recent revision. Continued use of the app after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="bg-[#150F09] rounded-xl p-6 border border-orange-900/30">
                <p className="text-gray-400 mb-4">
                  Questions? Requests? Want your data deleted? Reach out:
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <a href="mailto:developer.krishan.agarwal@gmail.com" className="text-orange-400 hover:underline">
                    developer.krishan.agarwal@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-700 text-sm mt-12">
            ☕ Chai to Crore: Startup Tycoon &mdash; Built with love (and chai) in India.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
