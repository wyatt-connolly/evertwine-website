import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ColoradoPrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Colorado Consumer Privacy Notice
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Privacy rights for Colorado residents under the Colorado Privacy
              Act.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: April 18, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-sm mb-6">
              This notice supplements our general Privacy Policy and applies
              solely to California and Colorado residents as required by the
              Colorado Privacy Act (CPA), C.R.S. §§ 6-1-1301 et seq.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">
              1. Controller & Scope
            </h2>
            <p className="text-gray-300 text-sm">
              Evertwine, LLC (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is the data controller for personal data
              collected through our website and mobile application (the
              &quot;Services&quot;). This notice describes Colorado
              residents&apos; rights and how we process your personal data.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              2. Categories of Personal Data Collected
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Under the CPA, we collect and process the following categories of
              personal data about Colorado residents:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 font-semibold text-white">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-white">
                      Examples
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  <tr>
                    <td className="py-3 px-4 font-medium">Identifiers</td>
                    <td className="py-3 px-4">
                      Name, email address, phone number, user ID
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Verification Data</td>
                    <td className="py-3 px-4">
                      Selfie and government-issued ID images (optional)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">
                      Profile & Preference Data
                    </td>
                    <td className="py-3 px-4">
                      Bio text (including any fitness or activity details),
                      filters selected, meetup history
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Location Data</td>
                    <td className="py-3 px-4">
                      GPS coordinates, neighborhood or city-level location
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Usage Data</td>
                    <td className="py-3 px-4">
                      Pages viewed, feature usage, session duration
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Technical Data</td>
                    <td className="py-3 px-4">
                      IP address, device type, operating system
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">
                      Communications Data
                    </td>
                    <td className="py-3 px-4">
                      Support inquiries, notifications preferences
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              3. Sources of Personal Data
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We obtain your personal data directly from you when you:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Create or update your account</li>
              <li>Enter profile or bio information</li>
              <li>Use or interact with the Services</li>
              <li>Communicate with our support team</li>
            </ul>
            <p className="text-gray-300 text-sm">
              We may also collect certain technical and analytics data
              automatically via cookies and similar technologies.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              4. Purposes for Processing
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              We process your personal data for these business purposes:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 font-semibold text-white">
                      Purpose
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-white">
                      CPA Category
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  <tr>
                    <td className="py-3 px-4">
                      Provide & operate core features
                    </td>
                    <td className="py-3 px-4">
                      Identifiers, Profile & Preference, Usage, Technical
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">User verification & safety</td>
                    <td className="py-3 px-4">
                      Verification Data, Identifiers
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Personalize recommendations</td>
                    <td className="py-3 px-4">Profile & Preference, Usage</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Security & fraud prevention</td>
                    <td className="py-3 px-4">Identifiers, Usage, Technical</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      Customer support & communications
                    </td>
                    <td className="py-3 px-4">Identifiers, Communications</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      Compliance & legal obligations
                    </td>
                    <td className="py-3 px-4">Identifiers, Communications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              5. Colorado Residents&apos; Rights
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Under the CPA, you have the following rights with respect to your
              personal data:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Right to Access
                </h3>
                <p className="text-gray-300 text-sm">
                  Request confirmation of whether we process your data and
                  access to a copy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Right to Correct
                </h3>
                <p className="text-gray-300 text-sm">
                  Request correction of inaccurate personal data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Right to Delete
                </h3>
                <p className="text-gray-300 text-sm">
                  Request deletion of your personal data, subject to certain
                  exceptions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Right to Data Portability
                </h3>
                <p className="text-gray-300 text-sm">
                  Request a machine-readable copy of your data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Right to Opt-Out of Sale or Targeted Advertising
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  You have the right to opt-out if we sell your personal data or
                  use it for targeted advertising.
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Our Practice:</strong> We do not sell personal data or
                  process it for targeted advertising.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Right to Non-Discrimination
                </h3>
                <p className="text-gray-300 text-sm">
                  You may not be discriminated against for exercising any of the
                  above rights.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              6. How to Exercise Your Rights
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Submit a request by email to privacy@evertwine.social with the
              subject line &quot;CPA Request&quot;, and include:
            </p>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 ml-4 mb-4">
              <li>
                Your name and email address (must match the account on file)
              </li>
              <li>
                The right you wish to exercise (e.g., &quot;Access,&quot;
                &quot;Delete&quot;)
              </li>
              <li>
                Any relevant details to help us verify your identity and process
                the request
              </li>
            </ul>
            <p className="text-gray-300 text-sm">
              We will respond within 45 days. We may request additional
              information to verify your identity but will not charge a fee
              unless permitted by law.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              7. Data Retention
            </h2>
            <p className="text-gray-300 text-sm">
              We retain your personal data only as long as necessary to fulfill
              the purposes described above or comply with legal obligations.
              After that, we delete or anonymize your data in a secure manner.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              8. Changes to This Notice
            </h2>
            <p className="text-gray-300 text-sm">
              We may update this notice from time to time. We will post the
              revised version with a new &quot;Last updated&quot; date.
              Continued use of the Services after changes indicates acceptance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              9. Contact Us
            </h2>
            <p className="text-blue-100 mb-6">
              If you have questions about this Notice or our privacy practices,
              please contact:
            </p>
            <a
              href="mailto:privacy@evertwine.social"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              privacy@evertwine.social
            </a>
            <p className="text-blue-100 mt-4 text-sm">
              Thank you for trusting Evertwine. We&apos;re committed to
              protecting your privacy and giving you control over your personal
              data.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
