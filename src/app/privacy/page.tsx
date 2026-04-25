'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield, Lock, Eye, Trash2 } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      {/* Header */}
      <header className="bg-bg/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-text2 hover:text-text1 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center space-x-3">
              <Image src="/logo.webp" alt="The Hisaab" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-text1">The Hisaab</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-text1 mb-4">Privacy Policy</h1>
            <p className="text-xl text-text2">
              Your privacy is our priority. Here&apos;s how we protect your data.
            </p>
            <p className="text-sm text-text3 mt-2">Last updated: February 2024</p>
          </div>

          <div className="space-y-8">
            {/* Privacy Highlights */}
            <div className="bg-surface rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-text1 mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-accent" />
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brandSoft border border-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-semibold text-text1 mb-2">No Data Selling</h3>
                  <p className="text-text2 text-sm">We never sell, rent, or share your personal information with third parties.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-text1 mb-2">Secure Storage</h3>
                  <p className="text-text2 text-sm">All data is encrypted and stored securely using industry-standard practices.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brandSoft border border-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Trash2 className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-semibold text-text1 mb-2">Data Control</h3>
                  <p className="text-text2 text-sm">You can delete your account and all associated data at any time.</p>
                </div>
              </div>
            </div>

            {/* Detailed Policy */}
            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Information We Collect</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-text1 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-text2">
                  <li>• Email address (for account creation and login)</li>
                  <li>• Phone number (for verification and friend matching)</li>
                  <li>• Name (for profile and expense sharing)</li>
                  <li>• Profile picture (optional)</li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 mt-4 border border-gray-800">
                <h3 className="text-lg font-semibold text-text1 mb-3">App Usage Data</h3>
                <ul className="space-y-2 text-text2">
                  <li>• Expenses and settlements you create</li>
                  <li>• Groups you join or create</li>
                  <li>• App interactions and usage patterns</li>
                  <li>• Device information (model, OS version)</li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 mt-4 border border-gray-800">
                <h3 className="text-lg font-semibold text-text1 mb-3">Contacts (Optional)</h3>
                <ul className="space-y-2 text-text2">
                  <li>• Phone contacts (only with your explicit permission)</li>
                  <li>• Used solely to help you find friends who use The Hisaab</li>
                  <li>• Never shared with third parties</li>
                  <li>• Can be disabled at any time in app settings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">How We Use Your Information</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <ul className="space-y-3 text-text2">
                  <li>• <strong className="text-text1">Core Functionality:</strong> Enable expense tracking, splitting, and settlements</li>
                  <li>• <strong className="text-text1">Account Management:</strong> User authentication, profile management, and security</li>
                  <li>• <strong className="text-text1">Friend Discovery:</strong> Help you find friends who also use The Hisaab</li>
                  <li>• <strong className="text-text1">Sync & Backup:</strong> Synchronize your data across devices</li>
                  <li>• <strong className="text-text1">App Improvement:</strong> Anonymous analytics to improve app performance</li>
                  <li>• <strong className="text-text1">Support:</strong> Respond to your questions and provide customer support</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Data Security</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <ul className="space-y-3 text-text2">
                  <li>• <strong className="text-text1">Encryption:</strong> All data is encrypted in transit and at rest</li>
                  <li>• <strong className="text-text1">Secure Infrastructure:</strong> Hosted on Supabase with enterprise-grade security</li>
                  <li>• <strong className="text-text1">Access Control:</strong> Strict access controls and authentication</li>
                  <li>• <strong className="text-text1">Regular Updates:</strong> Security patches and updates applied promptly</li>
                  <li>• <strong className="text-text1">Data Minimization:</strong> We only collect data necessary for app functionality</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Third-Party Services</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <p className="text-text2 mb-4">The Hisaab uses the following third-party services:</p>
                <ul className="space-y-3 text-text2">
                  <li>• <strong className="text-text1">Supabase:</strong> Database and authentication (privacy policy: supabase.com/privacy)</li>
                  <li>• <strong className="text-text1">Expo:</strong> App development and push notifications</li>
                  <li>• <strong className="text-text1">No Analytics:</strong> We don&apos;t use Google Analytics, Facebook tracking, or similar services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Your Rights</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <p className="text-text2 mb-4">You have complete control over your data:</p>
                <ul className="space-y-3 text-text2">
                  <li>• <strong className="text-text1">Access:</strong> View all data associated with your account</li>
                  <li>• <strong className="text-text1">Update:</strong> Modify your profile information anytime</li>
                  <li>• <strong className="text-text1">Delete:</strong> Permanently delete your account and all data</li>
                  <li>• <strong className="text-text1">Export:</strong> Download your expense data in standard formats</li>
                  <li>• <strong className="text-text1">Opt-out:</strong> Disable contact syncing or any optional features</li>
                </ul>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border-l-4 border-accent">
                  <p className="text-sm text-text2">
                    To exercise any of these rights, contact us at <a href="mailto:admin@thehisaab.com" className="text-accent hover:underline">admin@thehisaab.com</a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Data Retention</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <ul className="space-y-3 text-text2">
                  <li>• Active accounts: Data retained while account is active</li>
                  <li>• Deleted accounts: All data permanently deleted within 30 days</li>
                  <li>• Legal requirements: Some data may be retained longer if required by law</li>
                  <li>• Anonymous analytics: Aggregated, anonymized data may be retained for app improvement</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Children&apos;s Privacy</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <p className="text-text2">
                  The Hisaab is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please contact us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Changes to This Policy</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <p className="text-text2">
                  We may update this privacy policy from time to time. We will notify you of any changes
                  by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
                  Continued use of the app after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text1 mb-4">Contact Us</h2>
              <div className="bg-surface rounded-xl p-6 border border-gray-800">
                <p className="text-text2 mb-4">
                  If you have any questions about this privacy policy or your data, please contact us:
                </p>
                <div className="space-y-2 text-text2">
                  <p>Email: <a href="mailto:admin@thehisaab.com" className="text-accent hover:underline">admin@thehisaab.com</a></p>
                  <p>Website: <a href="https://thehisaab.com" className="text-accent hover:underline">thehisaab.com</a></p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
