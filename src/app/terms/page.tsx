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
              These terms govern your use of Evertwine. Please read them
              carefully.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Acceptance of Terms
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              By accessing or using Evertwine, you agree to be bound by these
              Terms of Service and all applicable laws and regulations. If you
              do not agree with any of these terms, you are prohibited from
              using this service.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Use License</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Permitted Use
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  You may use Evertwine to:
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Discover and join events in your area</li>
                  <li>Connect with other users who share your interests</li>
                  <li>Create and host your own events</li>
                  <li>Communicate with other users through our platform</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Prohibited Use
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  You may not use Evertwine to:
                </p>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Harass, abuse, or harm other users</li>
                  <li>Post illegal, harmful, or inappropriate content</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              User Responsibilities
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Provide accurate and up-to-date information
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Respect other users and their privacy
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Follow all applicable laws and regulations
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Report any inappropriate behavior or content
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Limitation of Liability
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Evertwine is provided &ldquo;as is&rdquo; without any warranties,
              express or implied. We do not guarantee the accuracy,
              completeness, or usefulness of any information on our platform.
            </p>
            <p className="text-gray-300 text-sm">
              In no event shall Evertwine be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with your use of our service.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Terms?
            </h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about these terms, please contact our
              legal team.
            </p>
            <a
              href="mailto:legal@evertwine.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
