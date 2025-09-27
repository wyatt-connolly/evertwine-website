import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we use cookies and similar technologies to enhance your
              experience.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: April 18, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-6">
              Evertwine (&apos;we,&apos; &apos;us,&apos; or &apos;our&apos;)
              uses cookies and similar technologies to make our website and
              mobile app work, to improve performance, and to enhance your
              experience. This Cookie Policy explains what these technologies
              are, why we use them, and your choices regarding their use. For
              more details on how we handle your data generally, please see our
              Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-300 text-sm">
              Cookies are small text files placed on your device (computer,
              smartphone, or tablet) when you visit our website or use our
              mobile application. They store information about your activity and
              preferences.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Essential Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Necessary for basic site and app functionality—enabling secure
                  log-in, session management, and core features.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Analytical/Performance Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Collect anonymous data on how you interact with Evertwine
                  (e.g., pages visited, errors encountered) so we can optimize
                  performance and usability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Functionality Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Remember choices you make (e.g., language or region) to
                  personalize your experience and speed up your next visit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Security Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Support fraud prevention and account-protection measures, such
                  as login monitoring and breach detection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. How We Use Cookies
            </h2>
            <p className="text-gray-300 text-sm mb-4">We deploy cookies to:</p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Enable Core Functionality
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Keep you signed in, secure your sessions, and power
                    interactive features.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Improve Performance
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Analyze usage patterns and troubleshoot issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Personalize Your Experience
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Remember your settings and deliver content that matches your
                    preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Protect Security
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Detect suspicious activity and help prevent unauthorized
                    access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. Cookies in Our Mobile Applications
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              While traditional cookies are web-based, our mobile apps use
              similar technologies:
            </p>

            <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>Local Storage:</strong> Retains user preferences and
                settings on your device.
              </li>
              <li>
                <strong>Web Beacons & SDKs:</strong> Track in-app interactions
                and performance metrics.
              </li>
              <li>
                <strong>Device Fingerprinting:</strong> Gathers non-personal
                device details to help prevent fraud.
              </li>
            </ul>

            <p className="text-gray-300 text-sm">
              These function like cookies, improving app stability and
              customizing your experience.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. Third-Party Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We partner with trusted analytics providers who set their own
              cookies and use tracking tools to gather aggregate data:
            </p>

            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Google Analytics</li>
              <li>Firebase Analytics</li>
            </ul>

            <p className="text-gray-300 text-sm">
              These services help us understand overall usage trends; they do
              not collect personally identifiable information unless you have
              given consent elsewhere.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. No Advertising or Targeting Cookies
            </h2>
            <p className="text-gray-300 text-sm">
              Evertwine does not use cookies for advertising or cross-site
              tracking. You will not be served targeted ads based on your
              activity in our Services.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              7. Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Most browsers and devices allow you to control cookies via
              settings:
            </p>

            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>
                <strong>Browser Settings:</strong> Block or delete cookies in
                Chrome, Safari, Firefox, Edge, etc.
              </li>
              <li>
                <strong>Device Settings:</strong> On mobile, adjust privacy and
                storage settings to limit local data.
              </li>
            </ul>

            <p className="text-gray-300 text-sm">
              Disabling certain cookies may prevent features from working
              properly.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              8. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-300 text-sm">
              We may update this policy to reflect new technologies, legal
              requirements, or operational changes. Significant revisions will
              be noted by updating the &apos;Last updated&apos; date. Your
              continued use of our Services after changes indicates your
              acceptance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              9. Contact Us
            </h2>
            <p className="text-blue-100 mb-6">
              If you have questions about our use of cookies, please reach out
              to:
            </p>
            <a
              href="mailto:support@evertwine.social"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              support@evertwine.social
            </a>
            <p className="text-blue-100 mt-4 text-sm">
              Thank you for choosing Evertwine. We&apos;re committed to
              protecting your privacy and delivering a seamless, personalized
              experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
