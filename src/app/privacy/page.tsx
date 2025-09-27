import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy and the security of your personal information are our top priorities.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: April 18, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-6">
              This Privacy Policy explains how Evertwine, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects information when you use our website, mobile application, and related services (collectively, the &quot;Services&quot;). By accessing or using the Services, you agree to this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6">
              1. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  A. Personal Information
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 ml-4">
                  <li><strong>Account Details:</strong> Name, email address, phone number, profile photo.</li>
                  <li><strong>Verification Data:</strong> Selfie + ID documents (optional today, becoming mandatory for full account activation), background check data (optional, launching late 2025), AR-face data (planned Q2 2026).</li>
                  <li><strong>Location Data:</strong> GPS coordinates or approximate location to power our Interactive Map and List View.</li>
                  <li><strong>Usage & Preferences:</strong> Filters you set, events you join or host, message and connection history.</li>
                  <li><strong>Support & Communications:</strong> Correspondence with our support team, survey responses.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  B. Non-Personal Information
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 ml-4">
                  <li><strong>Technical Data:</strong> Device type, operating system, browser version, IP address.</li>
                  <li><strong>Analytics Data:</strong> Feature usage, crash reports, performance logs collected via cookies, SDKs, and similar technologies.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. How We Use Your Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Provide & Improve Services
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Deliver core functionality (map, event discovery, messaging).</li>
                  <li>Analyze usage to optimize performance and develop new features.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Enhance Trust & Security
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Verify identities and detect fraud or misuse.</li>
                  <li>Monitor for suspicious behavior and enforce our Terms of Service.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Personalize Your Experience
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Remember preferences and recommend relevant meetups.</li>
                  <li>Tailor in-app prompts based on your activity.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Communicate with You
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Send account notifications, feature announcements, and critical security alerts.</li>
                  <li>Provide customer support and respond to your inquiries.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Legal & Compliance
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Respond to lawful requests by public authorities.</li>
                  <li>Enforce our Terms, protect rights, and comply with applicable laws.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We use cookies, web beacons, and SDKs to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Remember your login and preferences.</li>
              <li>Measure feature adoption and app performance.</li>
              <li>Detect and prevent security threats.</li>
            </ul>
            <p className="text-gray-300 text-sm">
              You can manage cookies through your browser or device settings. Disabling cookies may limit certain features.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. Information Sharing & Disclosure
            </h2>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We share data with vendors who help operate the app (e.g., hosting, analytics, verification services).</li>
              <li><strong>Legal Requirements:</strong> We disclose data to comply with subpoenas, court orders, or legal processes.</li>
              <li><strong>Business Transfers:</strong> If Evertwine is acquired or merges, user data may be transferred under the same privacy commitments.</li>
              <li><strong>Aggregate or De-identified Data:</strong> We may share insights that do not identify individual users.</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. Your Privacy Rights
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Access your personal information.</li>
              <li>Correct or update inaccuracies.</li>
              <li>Delete your account and personal data.</li>
              <li>Restrict or object to certain processing activities.</li>
              <li>Port your data to another service.</li>
            </ul>
            <p className="text-gray-300 text-sm">
              To exercise these rights, contact us at support@evertwine.social. We may verify your identity before fulfilling requests.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. Data Security
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We implement industry-standard safeguards, including:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Encryption of data in transit (TLS) and at rest.</li>
              <li>Access Controls limiting internal access to authorized personnel.</li>
              <li>Regular Audits and penetration testing.</li>
            </ul>
            <p className="text-gray-300 text-sm">
              While we strive to protect your data, no system is entirely immune to breach. We will notify you promptly if a security incident affects your personal information.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              7. Data Retention
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We retain your personal data only as long as necessary to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Provide the Services.</li>
              <li>Comply with legal obligations.</li>
              <li>Resolve disputes or enforce our agreements.</li>
            </ul>
            <p className="text-gray-300 text-sm">
              When data is no longer needed, we securely delete or anonymize it.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              8. International Transfers
            </h2>
            <p className="text-gray-300 text-sm">
              Currently, all data is collected, processed, and stored within the United States. Should we expand internationally or transfer data across borders, we will implement appropriate safeguards (e.g., Standard Contractual Clauses) and update this policy accordingly.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-300 text-sm">
              Evertwine is intended for users aged 18 and above. We do not knowingly collect personal data from anyone under 18. If we learn we have collected data from a minor, we will promptly delete it.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-300 text-sm">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will post the revised policy with a new &quot;Last updated&quot; date and, where required by law, notify you of significant changes. Continued use of the Services after such updates constitutes acceptance of the revised policy.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              11. Contact Us
            </h2>
            <p className="text-blue-100 mb-6">
              If you have questions, requests, or concerns about this Privacy Policy or our data practices, please reach out to:
            </p>
            <a
              href="mailto:support@evertwine.social"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              support@evertwine.social
            </a>
            <p className="text-blue-100 mt-4 text-sm">
              Thank you for trusting Evertwine with your information. We&apos;re committed to keeping your data safe and your experience secure.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
