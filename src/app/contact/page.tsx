import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team. We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      General Inquiries
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      For general questions and support
                    </p>
                    <a
                      href="mailto:hello@evertwine.com"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      hello@evertwine.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Business Partnerships
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      For partnership opportunities
                    </p>
                    <a
                      href="mailto:partnerships@evertwine.com"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      partnerships@evertwine.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Press & Media</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      For media inquiries and press
                    </p>
                    <a
                      href="mailto:press@evertwine.com"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      press@evertwine.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Office Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Headquarters</h4>
                    <p className="text-gray-300 text-sm">
                      123 Market Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Business Hours</h4>
                    <p className="text-gray-300 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-blue-100 mb-6">
              Connect with us on social media and stay updated on the latest
              news.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://twitter.com/evertwine"
                className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/evertwine"
                className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/evertwine"
                className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
