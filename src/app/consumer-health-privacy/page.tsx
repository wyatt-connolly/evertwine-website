import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsumerHealthPrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Consumer Health Data Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we handle voluntary health-related information you choose to
              share.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: April 18, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-6">
              Evertwine, LLC (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) respects your privacy and wants you to feel
              comfortable sharing any personal details you choose—like fitness
              goals or activity habits—in your profile bio. This Consumer Health
              Data Privacy Policy describes how we handle voluntary
              health-related information you enter. It supplements our general
              Privacy Policy and Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">
              1. What Information Is Covered?
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Self-Reported Activity Details
                </h3>
                <p className="text-gray-300 text-sm">
                  Anything you choose to write in your profile or bio about your
                  exercise, step counts, wellness routines, or other fitness
                  habits (e.g., &quot;I run 2 miles daily,&quot; &quot;I hit
                  10,000 steps each day&quot;).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  No Sensor or Device Data
                </h3>
                <p className="text-gray-300 text-sm">
                  We do not automatically collect data from wearables, health
                  apps, or sensors. All health-related details are provided at
                  your discretion.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. How We Use Self-Reported Health Details
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Profile Display & Matching
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>
                    We show your bio text to other users so they can learn about
                    shared interests.
                  </li>
                  <li>
                    Optional filters may use keywords from bios (e.g.,
                    &quot;running group&quot;) to help match you with relevant
                    meetups.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Personalization
                </h3>
                <p className="text-gray-300 text-sm">
                  We may suggest events (e.g., running clubs, fitness meetups)
                  if your bio indicates those interests.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Internal Analytics (Aggregated & Anonymous)
                </h3>
                <p className="text-gray-300 text-sm">
                  We may tally how many users mention &quot;hiking&quot; or
                  &quot;yoga&quot; to guide feature development—but never link
                  that aggregate data back to your identity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. Sharing & Disclosure
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Within Evertwine
                </h3>
                <p className="text-gray-300 text-sm">
                  Your self-written health details appear only in your profile
                  and within the app when other users view your bio.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  No Third-Party Sales
                </h3>
                <p className="text-gray-300 text-sm">
                  We never sell or share your health-related bio text to
                  advertisers or external marketers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Legal Requests
                </h3>
                <p className="text-gray-300 text-sm">
                  Only if required by law (e.g., valid court order) would we
                  disclose any part of your profile text, including
                  self-reported health details.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. Your Choices & Rights
            </h2>

            <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>Opt Out of Display:</strong> Remove or edit any
                health-related content from your bio at any time via your
                profile settings.
              </li>
              <li>
                <strong>Data Portability:</strong> You can copy and save your
                profile text, including any health details you provided.
              </li>
              <li>
                <strong>Account Deletion:</strong> Deleting your account removes
                your entire profile, including self-reported health information.
              </li>
            </ul>

            <p className="text-gray-300 text-sm">
              To exercise these rights, go to your account settings or contact
              support@evertwine.social
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. Data Security & Retention
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Security Measures
                </h3>
                <p className="text-gray-300 text-sm">
                  We encrypt your profile data in transit (TLS) and at rest, and
                  restrict internal access to authorized staff only.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Retention Period
                </h3>
                <p className="text-gray-300 text-sm">
                  We keep your profile text as long as your account is active.
                  If you delete your account, we remove your profile data within
                  30 days (aside from brief backups which are purged within 90
                  days).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-300 text-sm">
              We may update this policy to reflect new features or legal
              requirements. We will post the revised version with a new
              &quot;Last updated&quot; date. Continued use of health-related
              features constitutes acceptance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              7. Contact Us
            </h2>
            <p className="text-blue-100 mb-6">
              Questions or concerns? Reach out to support@evertwine.social.
              We&apos;re committed to keeping your voluntary health details
              private and secure.
            </p>
            <a
              href="mailto:support@evertwine.social"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              support@evertwine.social
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
