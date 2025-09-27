import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Press & Media</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest news, press releases, and media resources about Evertwine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Press Releases */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Latest Press Releases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Evertwine Raises $5M Series A</h3>
                  <p className="text-gray-400 text-sm mb-2">December 15, 2024</p>
                  <p className="text-gray-300 text-sm">Funding will accelerate product development and expand to 50+ cities nationwide.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Launch in 10 New Cities</h3>
                  <p className="text-gray-400 text-sm mb-2">December 1, 2024</p>
                  <p className="text-gray-300 text-sm">Evertwine expands to Austin, Seattle, Denver, and 7 other major cities.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Partnership with Local Businesses</h3>
                  <p className="text-gray-400 text-sm mb-2">November 20, 2024</p>
                  <p className="text-gray-300 text-sm">New partnerships with 100+ local venues to host community events.</p>
                </div>
              </div>
            </div>

            {/* Media Coverage */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Media Coverage</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">TechCrunch</h4>
                    <p className="text-gray-300 text-sm">&ldquo;Evertwine is revolutionizing how people connect in the digital age&rdquo;</p>
                    <p className="text-gray-400 text-xs">Read more →</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📺</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Forbes</h4>
                    <p className="text-gray-300 text-sm">&ldquo;The social app that&apos;s bringing back real-world connections&rdquo;</p>
                    <p className="text-gray-400 text-xs">Read more →</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🎙️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Wired</h4>
                    <p className="text-gray-300 text-sm">&ldquo;How Evertwine is solving the loneliness epidemic&rdquo;</p>
                    <p className="text-gray-400 text-xs">Read more →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Company Stats */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Company Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5,247+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">1,200+</div>
                  <div className="text-gray-400 text-sm">Events Hosted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-gray-400 text-sm">User Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Media Kit */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Media Kit</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📸</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Press Photos</h4>
                    <p className="text-gray-400 text-sm">High-resolution images and logos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📄</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Company Fact Sheet</h4>
                    <p className="text-gray-400 text-sm">Key facts and company information</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">👥</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Executive Bios</h4>
                    <p className="text-gray-400 text-sm">Leadership team information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-blue-100 mb-6">For press inquiries, interviews, or media kit requests, please contact our press team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:press@evertwine.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Press Team
              </a>
              <a 
                href="mailto:press@evertwine.com?subject=Media Kit Request"
                className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-200"
              >
                Request Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
