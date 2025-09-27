import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Help Center</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions and get the support you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    How do I join an event?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Browse events in your area, tap on one you're interested in,
                    and click "Join Event". You'll receive a confirmation and
                    can start chatting with other attendees.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Is Evertwine free to use?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Yes! Evertwine is completely free. We believe in making
                    social connection accessible to everyone.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    How do I create my own event?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Tap the "+" button in the app, fill out the event details,
                    and publish it. Other users in your area will be able to see
                    and join your event.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Is my personal information safe?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Absolutely. We use industry-standard encryption and never
                    share your personal information with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Support
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email Support</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Get help via email within 24 hours
                    </p>
                    <a
                      href="mailto:help@evertwine.com"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      help@evertwine.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Live Chat</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Chat with our support team in real-time
                    </p>
                    <button className="text-blue-400 hover:text-blue-300">
                      Start Chat
                    </button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Documentation</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Browse our comprehensive guides
                    </p>
                    <button className="text-blue-400 hover:text-blue-300">
                      View Docs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-blue-100 mb-6">
              Our support team is here to help you get the most out of
              Evertwine.
            </p>
            <a
              href="mailto:help@evertwine.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
