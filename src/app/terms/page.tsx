import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Welcome to Evertwine! These Terms of Service govern your use of
              our platform.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: April 18, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-6">
              These Terms of Service (&quot;Terms&quot;) are a binding agreement
              between you (&quot;User,&quot; &quot;you,&quot; or
              &quot;your&quot;) and Evertwine, LLC (&quot;Evertwine,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). They govern
              your access to and use of our website, mobile application, and
              related services (collectively, the &quot;Services&quot;). By
              accessing or using the Services, you accept and agree to these
              Terms in full. If you do not agree, please discontinue use
              immediately.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">
              1. Purpose of Evertwine
            </h2>
            <p className="text-gray-300 text-sm">
              Evertwine is an activity-based meetup platform for both casual and
              professional connections. We provide an Interactive Map and List
              View to help you discover and join local coffee meetups, fitness
              classes, networking mixers, and more—so you can spend less time
              messaging and more time meeting face-to-face.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. License and Access
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We grant you a limited, revocable, non-exclusive license to access
              and use the Services for your personal and professional networking
              only. This license does not allow you to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>
                Copy, modify, distribute, or publicly display any part of the
                Services.
              </li>
              <li>Use the Services for unauthorized commercial purposes.</li>
              <li>Reverse-engineer or attempt to extract source code.</li>
              <li>Violate any applicable laws or regulations.</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. User Accounts & Verification
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              To use certain features, you must register and create an account.
              You agree to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>
                Provide accurate, up-to-date information during registration.
              </li>
              <li>Maintain the security of your account credentials.</li>
              <li>Complete verification steps when prompted:</li>
            </ul>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-8 mb-4">
              <li>
                ID + Selfie Verification is currently optional for enhanced
                trust features but will become mandatory for full account
                activation in the near future.
              </li>
              <li>Optional Background Checks will roll out in late 2025.</li>
              <li>AR-Based Facial Recognition is planned for Q2 2026.</li>
            </ul>
            <p className="text-gray-300 text-sm">
              Failure to complete mandatory verification once required may limit
              or suspend your ability to use certain features.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. User Responsibilities
            </h2>
            <p className="text-gray-300 text-sm mb-4">You agree to:</p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>Keep your profile information truthful and current.</li>
              <li>Respect other users&apos; privacy and rights.</li>
              <li>Follow all local, state, federal, and international laws.</li>
              <li>
                Use the Services only as intended—do not exploit or misuse
                features.
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. Prohibited Activities
            </h2>
            <p className="text-gray-300 text-sm mb-4">You must not:</p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>Harass, intimidate, or defraud other users.</li>
              <li>Post abusive, defamatory, or infringing content.</li>
              <li>Impersonate any person or entity.</li>
              <li>
                Distribute spam, malware, or unauthorized data-scraping tools.
              </li>
              <li>Host or promote unsafe or unlawful meetups.</li>
              <li>Interfere with the operation or security of the Services.</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. User-Generated Content
            </h2>
            <p className="text-gray-300 text-sm">
              When you upload text, photos, or other content (&quot;UGC&quot;),
              you grant Evertwine a non-exclusive, royalty-free, worldwide
              license to display, reproduce, and distribute that UGC in
              connection with the Services. You retain ownership, provided it
              does not infringe others&apos; rights or violate applicable laws.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              7. Operation Through App Stores
            </h2>
            <p className="text-gray-300 text-sm">
              Our mobile app is distributed via the Apple App Store and Google
              Play Store. You agree to comply with their respective terms and
              policies in addition to these Terms.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              8. Termination
            </h2>
            <p className="text-gray-300 text-sm">
              We may suspend or terminate your access at our discretion—without
              notice—for violating these Terms or for any other reason. Upon
              termination, your rights under these Terms immediately cease.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-gray-300 text-sm">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE.&quot; EVERTWINE DISCLAIMS ALL WARRANTIES, EXPRESS OR
              IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NONINFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED OR
              ERROR-FREE SERVICE.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-300 text-sm">
              TO THE FULLEST EXTENT PERMITTED BY LAW, EVERTWINE SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              11. Indemnification
            </h2>
            <p className="text-gray-300 text-sm">
              You agree to indemnify and hold harmless Evertwine and its
              affiliates from any claim or demand, including reasonable
              attorneys&apos; fees, arising from your breach of these Terms or
              your misuse of the Services.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              12. Governing Law & Dispute Resolution
            </h2>
            <p className="text-gray-300 text-sm">
              These Terms are governed by the laws of the State of Nevada,
              without regard to its conflict-of-law rules. Any dispute must be
              brought exclusively in the state or federal courts located in
              Nevada.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              13. Changes to These Terms
            </h2>
            <p className="text-gray-300 text-sm">
              We may update these Terms for operational, legal, or regulatory
              reasons. Substantial changes will be communicated via the app or
              email. Continued use after an update constitutes acceptance of the
              revised Terms.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              14. Contact Information
            </h2>
            <p className="text-blue-100 mb-6">
              For questions or disputes, please contact us at:
            </p>
            <a
              href="mailto:support@evertwine.social"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              support@evertwine.social
            </a>
            <p className="text-blue-100 mt-4 text-sm">
              Thank you for choosing Evertwine, where real connections happen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
