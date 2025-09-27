import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EULAPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              End User License Agreement (EULA)
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Legal agreement governing your use of Evertwine&apos;s services.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: April 18, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-6">
              This End User License Agreement (&quot;EULA&quot;) is a legal
              contract between you (&quot;User,&quot; &quot;you,&quot; or
              &quot;your&quot;) and Evertwine, LLC (&quot;Evertwine,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your
              use of our website, mobile application, and related services
              (collectively, the &quot;Services&quot;). By accessing or using
              the Services, you agree to this EULA in full and to comply with
              all other Evertwine policies—including our Privacy Policy, Terms
              of Service, Cookie Policy, and any other guidelines or rules we
              publish. If you do not agree, do not use the Services.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">
              1. License Grant
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Subject to your compliance with this EULA, Evertwine grants you a
              limited, non-exclusive, non-transferable, revocable license to
              access and use the Services for personal and professional
              networking. This license does not permit you to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>
                Modify, reproduce, distribute, or publicly display any part of
                the Services.
              </li>
              <li>Use the Services for unauthorized commercial purposes.</li>
              <li>Decompile, reverse-engineer, or extract source code.</li>
              <li>Violate any applicable laws or regulations.</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. Operation Through App Stores
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Our mobile app is available via the Apple App Store and Google
              Play Store. You must also comply with:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Apple App Store Terms:</strong> All guidelines on
                privacy, security, and content.
              </li>
              <li>
                <strong>Google Play Developer Policies:</strong> All
                requirements for functionality, content, and security.
              </li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              Non-compliance may result in suspension or removal from those
              platforms.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. User Obligations
            </h2>
            <p className="text-gray-300 text-sm mb-4">You agree to:</p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Provide Accurate Information:</strong> Registration and
                profile details must be truthful and up to date.
              </li>
              <li>
                <strong>Maintain Account Security:</strong> Safeguard your
                credentials and report any unauthorized access.
              </li>
              <li>
                <strong>Follow All Laws:</strong> Comply with local, state,
                federal, and international laws.
              </li>
              <li>
                <strong>Respect Others:</strong> Treat all users courteously; do
                not infringe on their rights.
              </li>
              <li>
                <strong>Avoid Prohibited Content:</strong> Do not post abusive,
                defamatory, infringing, or unlawful material.
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. Prohibited Uses
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              You may not use Evertwine to:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4">
              <li>Engage in fraud, harassment, or other harmful conduct.</li>
              <li>Distribute spam, malware, or malicious software.</li>
              <li>Impersonate individuals or misrepresent affiliations.</li>
              <li>Scrape, harvest, or collect data without permission.</li>
              <li>Host or promote unlawful or unsafe meetups.</li>
              <li>Interfere with platform operations or security.</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. User-Generated Content
            </h2>
            <p className="text-gray-300 text-sm">
              By posting content (&quot;UGC&quot;), you grant Evertwine a
              worldwide, non-exclusive, royalty-free license to use, display,
              reproduce, and distribute your UGC in connection with the
              Services. You retain ownership, but you represent that your UGC
              does not violate any rights or laws. We may remove any UGC that
              breaches these terms without notice.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. Ownership & Intellectual Property
            </h2>
            <p className="text-gray-300 text-sm">
              All aspects of the Services—text, graphics, logos, software, and
              data—are owned by Evertwine or our licensors and protected by
              copyright, trademark, and other laws. You agree not to use, copy,
              or create derivative works without our prior written permission.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              7. Agreement to Other Policies
            </h2>
            <p className="text-gray-300 text-sm">
              Your use of Evertwine is also governed by our Privacy Policy,
              Cookie Policy, Terms of Service, and any other policies we
              publish. By using the Services, you acknowledge that you have
              read, understood, and agreed to be bound by all such policies.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              8. Meetup Risk & Liability Disclaimer
            </h2>
            <p className="text-gray-300 text-sm">
              While we strive to maintain industry-leading safety
              standards—including mandatory ID + selfie verification—meetups are
              organized and attended by users in real-world settings. You assume
              all risks associated with attending or hosting any meetup.
              Evertwine is not responsible for any injury, loss, or damage
              arising out of or in connection with meetups or in-person
              interactions facilitated through the Services.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              9. Termination
            </h2>
            <p className="text-gray-300 text-sm">
              We may suspend or terminate your access at any time, with or
              without cause. Upon termination, your license ends immediately.
              Sections 5 (UGC), 6 (Ownership), 8 (Liability Disclaimer), 9
              (Termination), 11 (Indemnification), and 12 (Governing Law)
              survive termination.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              10. Disclaimers & Limitation of Liability
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Disclaimer of Warranties
                </h3>
                <p className="text-gray-300 text-sm">
                  The Services are provided &quot;as is&quot; and &quot;as
                  available,&quot; without warranties of any kind.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Limitation of Liability
                </h3>
                <p className="text-gray-300 text-sm">
                  To the fullest extent permitted by law, Evertwine will not be
                  liable for any indirect, incidental, special, or consequential
                  damages arising from your use of the Services including
                  meetups-related incidents even if advised of the possibility.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              11. Indemnification
            </h2>
            <p className="text-gray-300 text-sm">
              You agree to indemnify and hold harmless Evertwine, its
              affiliates, officers, and employees from any claims, damages, or
              expenses (including attorneys&apos; fees) arising out of your
              breach of this EULA, your use of the Services, or your
              participation in any meetups.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              12. Governing Law & Dispute Resolution
            </h2>
            <p className="text-gray-300 text-sm">
              This EULA is governed by Nevada law, without regard to
              conflict-of-law principles. All disputes must be resolved
              exclusively in the state or federal courts in Nevada. You consent
              to jurisdiction and venue in those courts.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              13. Changes to This EULA
            </h2>
            <p className="text-gray-300 text-sm">
              We may update this EULA for legal, operational, or regulatory
              reasons. We will notify you of significant changes by posting the
              revised EULA with a new &quot;Last updated&quot; date. Continued
              use after changes indicates acceptance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              14. Contact Information
            </h2>
            <p className="text-blue-100 mb-6">
              For questions or concerns about this EULA, please contact:
            </p>
            <a
              href="mailto:support@evertwine.social"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              support@evertwine.social
            </a>
            <p className="text-blue-100 mt-4 text-sm">
              Thank you for using Evertwine. We&apos;re committed to providing a
              safe, engaging, and reliable platform for real-world connections.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
