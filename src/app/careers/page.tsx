import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Help us build the future of social connection. We&apos;re looking
              for passionate people who want to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Open Positions
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">
                    Senior Frontend Developer
                  </h4>
                  <p className="text-gray-300 text-sm">
                    React, TypeScript, Next.js
                  </p>
                  <p className="text-blue-400 text-sm">San Francisco, CA</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">
                    Backend Engineer
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Node.js, PostgreSQL, AWS
                  </p>
                  <p className="text-blue-400 text-sm">Remote</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">
                    Product Designer
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Figma, User Research, Prototyping
                  </p>
                  <p className="text-blue-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Work With Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Competitive Salary
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Top-tier compensation and equity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Flexible Work</h4>
                    <p className="text-gray-300 text-sm">
                      Remote-first with office access
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Growth Opportunities
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Learn and grow with the company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="text-blue-100 mb-6">
              Send us your resume and let&apos;s start the conversation.
            </p>
            <a
              href="mailto:careers@evertwine.com?subject=Job Application"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
