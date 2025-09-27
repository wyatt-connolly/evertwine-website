import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover amazing events happening in your city and connect with like-minded people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Event Cards */}
            {[
              {
                title: "Coffee & Code Meetup",
                date: "Dec 15, 2024",
                time: "2:00 PM - 4:00 PM",
                location: "Downtown Cafe, San Francisco",
                attendees: 12,
                category: "Tech",
                description: "Join fellow developers for coffee and coding discussions. All skill levels welcome!",
                image: "☕"
              },
              {
                title: "Weekend Hiking Adventure",
                date: "Dec 16, 2024",
                time: "9:00 AM - 3:00 PM",
                location: "Golden Gate Park, San Francisco",
                attendees: 8,
                category: "Outdoor",
                description: "Explore beautiful trails and meet fellow nature enthusiasts. Bring water and snacks!",
                image: "🥾"
              },
              {
                title: "Happy Hour Networking",
                date: "Dec 17, 2024",
                time: "6:00 PM - 8:00 PM",
                location: "The Bar, Mission District",
                attendees: 20,
                category: "Networking",
                description: "Professional networking event with drinks and appetizers. Great for meeting new people!",
                image: "🍻"
              },
              {
                title: "Art Gallery Opening",
                date: "Dec 18, 2024",
                time: "7:00 PM - 10:00 PM",
                location: "Modern Art Gallery, SOMA",
                attendees: 15,
                category: "Arts",
                description: "Celebrate local artists and enjoy wine and cheese. Free admission!",
                image: "🎨"
              },
              {
                title: "Book Club Discussion",
                date: "Dec 19, 2024",
                time: "7:00 PM - 9:00 PM",
                location: "Public Library, Castro",
                attendees: 6,
                category: "Books",
                description: "Discuss this month's book: 'The Seven Husbands of Evelyn Hugo'. New members welcome!",
                image: "📚"
              },
              {
                title: "Cooking Class: Italian Cuisine",
                date: "Dec 20, 2024",
                time: "6:30 PM - 9:30 PM",
                location: "Culinary School, North Beach",
                attendees: 10,
                category: "Food",
                description: "Learn to make authentic Italian pasta and enjoy a delicious meal together!",
                image: "🍝"
              }
            ].map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{event.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-blue-400 text-sm">{event.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>📅</span>
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span>👥</span>
                    <span>{event.attendees} people going</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200">
                  Join Event
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to Create Your Own Event?</h2>
            <p className="text-blue-100 mb-6">Host your own meetup and bring people together around your interests.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Create Event
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
