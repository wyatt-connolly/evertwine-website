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
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Name and email address when you sign up</li>
                  <li>Profile information and interests</li>
                  <li>Event attendance and participation</li>
                  <li>Messages and communications with other users</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Usage Information
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  We automatically collect certain information about your use of
                  our service:
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Device information and IP address</li>
                  <li>App usage patterns and preferences</li>
                  <li>Location data (with your permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  To provide and improve our services
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  To match you with relevant events and people
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  To communicate with you about our service
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  To ensure safety and prevent abuse
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Data Security
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Encryption
                </h3>
                <p className="text-gray-300 text-sm">
                  All data is encrypted in transit and at rest using
                  industry-standard encryption protocols.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Access Controls
                </h3>
                <p className="text-gray-300 text-sm">
                  Strict access controls ensure only authorized personnel can
                  access your data.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about this privacy policy, please
              contact us.
            </p>
            <a
              href="mailto:privacy@evertwine.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
