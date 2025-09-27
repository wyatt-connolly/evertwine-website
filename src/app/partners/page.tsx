import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Partners</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with amazing organizations to create meaningful experiences for our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Partner Cards */}
            {[
              {
                name: "Local Coffee Shops",
                description: "Partnering with independent coffee shops to host meetups and create welcoming spaces for our community.",
                benefits: "Discounted drinks, private event spaces, community support",
                logo: "☕",
                category: "Venues"
              },
              {
                name: "Fitness Centers",
                description: "Collaborating with gyms and fitness centers to offer group classes and wellness events.",
                benefits: "Free trial classes, group discounts, wellness workshops",
                logo: "💪",
                category: "Health & Fitness"
              },
              {
                name: "Art Galleries",
                description: "Working with local galleries to host art appreciation events and cultural experiences.",
                benefits: "Private gallery tours, artist meet-and-greets, cultural events",
                logo: "🎨",
                category: "Arts & Culture"
              },
              {
                name: "Restaurants",
                description: "Partnering with restaurants to create unique dining experiences and food-focused events.",
                benefits: "Special group menus, cooking classes, food tastings",
                logo: "🍽️",
                category: "Food & Dining"
              },
              {
                name: "Outdoor Organizations",
                description: "Collaborating with outdoor groups to organize hiking, camping, and adventure activities.",
                benefits: "Guided outdoor activities, equipment discounts, safety training",
                logo: "🥾",
                category: "Outdoor Activities"
              },
              {
                name: "Educational Institutions",
                description: "Working with universities and learning centers to offer educational workshops and skill-building events.",
                benefits: "Expert-led workshops, learning resources, skill development",
                logo: "🎓",
                category: "Education"
              }
            ].map((partner, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{partner.category}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                  <p className="text-gray-400 text-xs">{partner.benefits}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Become a Partner</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Why Partner With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-sm">Reach engaged, active community members</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-sm">Increase brand visibility and awareness</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-sm">Support local community building</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300 text-sm">Access to event management tools</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Partnership Types</h3>
                <div className="space-y-3">
                  <div className="bg-gray-700 rounded-lg p-3">
                    <h4 className="text-white font-semibold text-sm">Venue Partners</h4>
                    <p className="text-gray-400 text-xs">Host events at your location</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <h4 className="text-white font-semibold text-sm">Activity Partners</h4>
                    <p className="text-gray-400 text-xs">Lead workshops and activities</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <h4 className="text-white font-semibold text-sm">Sponsor Partners</h4>
                    <p className="text-gray-400 text-xs">Support events and community initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Partnering?</h2>
            <p className="text-blue-100 mb-6">Join our network of partners and help us build stronger communities together.</p>
            <a 
              href="mailto:partnerships@evertwine.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Contact Partnerships Team
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
