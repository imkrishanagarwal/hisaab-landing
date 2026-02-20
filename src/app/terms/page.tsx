'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Header */}
      <header className="bg-[#0B0B0B]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="The Hisaab" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-white">The Hisaab</span>
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-[#2563EB]" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-400">
              Simple terms for a simple app. Here&apos;s what you need to know.
            </p>
            <p className="text-sm text-gray-600 mt-2">Last updated: February 2024</p>
          </div>

          <div className="space-y-8">
            {/* Key Terms Highlights */}
            <div className="bg-[#121212] rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-[#2563EB]" />
                Quick Summary
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Free Forever</h3>
                  <p className="text-gray-400 text-sm">The Hisaab is completely free to use. No hidden fees, ever.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Scale className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Fair Use</h3>
                  <p className="text-gray-400 text-sm">Use The Hisaab responsibly and respect other users.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <AlertCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Your Responsibility</h3>
                  <p className="text-gray-400 text-sm">You&apos;re responsible for your account and expense accuracy.</p>
                </div>
              </div>
            </div>

            {/* Detailed Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  By downloading, installing, or using The Hisaab mobile application (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
                </p>
                <p className="text-gray-400">
                  These Terms constitute a legally binding agreement between you and The Hisaab (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  The Hisaab is a mobile application that helps users track and split shared expenses with friends, family, and groups. The App provides features including:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Expense tracking and categorization</li>
                  <li>• Bill splitting and settlement calculations</li>
                  <li>• Group management for shared expenses</li>
                  <li>• Friend networking and contact synchronization</li>
                  <li>• Real-time activity feeds and notifications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Free Service</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">The Hisaab is completely free to use.</strong> We do not charge any subscription fees, transaction fees, or premium charges. The App will remain free for all users.
                </p>
                <p className="text-gray-400">
                  We reserve the right to introduce optional premium features in the future, but the core expense tracking and splitting functionality will always remain free.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts and Registration</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  To use The Hisaab, you must create an account by providing:
                </p>
                <ul className="space-y-2 text-gray-400 mb-4">
                  <li>• A valid email address</li>
                  <li>• A secure password</li>
                  <li>• Your name</li>
                  <li>• Phone number (for verification)</li>
                </ul>
                <p className="text-gray-400">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">You agree to use The Hisaab only for lawful purposes and in accordance with these Terms. You must not:</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Use the App for any illegal or unauthorized purpose</li>
                  <li>• Violate any laws in your jurisdiction</li>
                  <li>• Harass, abuse, or harm other users</li>
                  <li>• Upload or transmit malicious code or viruses</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Reverse engineer or modify the App</li>
                  <li>• Create false or misleading expense records</li>
                  <li>• Use the App to commit fraud or financial crimes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. User Content and Data</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  You retain ownership of all content you create in the App, including expenses, groups, and personal information. However, you grant us a limited license to store, process, and display this content to provide the Service.
                </p>
                <p className="text-gray-400 mb-4">
                  You are solely responsible for the accuracy of expense records and financial data you enter into the App.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Data Backup:</strong> While we implement regular backups, you are encouraged to keep your own records of important financial data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-gray-400 mb-2">Key privacy principles:</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• We never sell your personal data</li>
                  <li>• All data is encrypted and stored securely</li>
                  <li>• You can delete your account and data at any time</li>
                  <li>• Contact sync is optional and can be disabled</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">Financial Accuracy:</strong> The Hisaab is a tool to help track and split expenses. We are not responsible for the accuracy of financial calculations or the resolution of disputes between users.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">Service Availability:</strong> While we strive for 99.9% uptime, we cannot guarantee that the Service will be available at all times. The App may be unavailable due to maintenance, updates, or technical issues.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Third-Party Services:</strong> The App integrates with third-party services (like Supabase for data storage). We are not responsible for the availability or functionality of these services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  To the maximum extent permitted by law, The Hisaab and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
                </p>
                <p className="text-gray-400">
                  Our total liability for any claims related to the App shall not exceed the amount you paid to use the Service (which is ₹0, as the App is free).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  You may terminate your account at any time by deleting the App and requesting account deletion through the app settings or by contacting us.
                </p>
                <p className="text-gray-400 mb-4">
                  We may suspend or terminate your account if you violate these Terms or engage in any conduct that we determine to be harmful to the Service or other users.
                </p>
                <p className="text-gray-400">
                  Upon termination, your right to use the App will cease, and your account data will be deleted in accordance with our Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Updates and Changes</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  We may update the App and these Terms from time to time to improve functionality, fix bugs, or comply with legal requirements.
                </p>
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">App Updates:</strong> We may release updates through app stores or direct download. Some updates may be required for continued use.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Terms Updates:</strong> We will notify you of material changes to these Terms through the App or email. Continued use after changes constitutes acceptance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400">
                  These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or the use of the App shall be resolved in the courts of India.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <p className="text-gray-400 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>Email: <a href="mailto:admin@thehisaab.com" className="text-[#2563EB] hover:underline">admin@thehisaab.com</a></p>
                  <p>Website: <a href="https://thehisaab.com" className="text-[#2563EB] hover:underline">thehisaab.com</a></p>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <div className="bg-[#121212] rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">Thank you for using The Hisaab!</h3>
                <p className="text-gray-400">
                  We&apos;re committed to providing a simple, free, and reliable expense tracking service.
                  By using The Hisaab, you&apos;re supporting independent software development and Indian innovation.
                </p>
                <p className="text-gray-400 mt-3 font-medium">
                  Split bills, not friendships.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
