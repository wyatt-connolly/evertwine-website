import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Success Stories</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real stories from real people who found their community through Evertwine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Success Story Cards */}
            {[
              {
                name: "Sarah Chen",
                location: "San Francisco, CA",
                avatar: "👩‍💼",
                story: "I moved to SF for work and didn't know anyone. Through Evertwine, I joined a hiking group and now have an amazing circle of friends. We go on adventures every weekend!",
                event: "Hiking Adventures",
                friends: "15+ friends made",
                image: "🥾"
              },
              {
                name: "Marcus Johnson",
                location: "Austin, TX",
                avatar: "👨‍💻",
                story: "As a remote worker, I was feeling isolated. The tech meetups on Evertwine helped me build a professional network and find my co-founder for my startup!",
                event: "Tech Happy Hours",
                friends: "Found co-founder",
                image: "💻"
              },
              {
                name: "Emily Rodriguez",
                location: "New York, NY",
                avatar: "👩‍🎨",
                story: "I'm an introvert and struggled to meet people. The art gallery events on Evertwine were perfect - I could connect over shared interests in a comfortable setting.",
                event: "Art Gallery Openings",
                friends: "8 close friends",
                image: "🎨"
              },
              {
                name: "David Kim",
                location: "Seattle, WA",
                avatar: "👨‍🍳",
                story: "I love cooking but had no one to share meals with. Through cooking classes on Evertwine, I've made friends who come over for dinner parties every month!",
                event: "Cooking Classes",
                friends: "Dinner party group",
                image: "🍳"
              },
              {
                name: "Lisa Wang",
                location: "Los Angeles, CA",
                avatar: "👩‍🏃‍♀️",
                story: "I was new to LA and wanted to stay active. The running groups on Evertwine helped me find my tribe. We now train for marathons together!",
                event: "Running Groups",
                friends: "Marathon training group",
                image: "🏃‍♀️"
              },
              {
                name: "Alex Thompson",
                location: "Chicago, IL",
                avatar: "👨‍📚",
                story: "I'm a book lover but had no one to discuss books with. The book clubs on Evertwine introduced me to amazing people who share my passion for literature.",
                event: "Book Clubs",
                friends: "Book discussion group",
                image: "📚"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-4xl">{story.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{story.name}</h3>
                    <p className="text-gray-400 text-sm">{story.location}</p>
                  </div>
                </div>
                <div className="text-2xl mb-3">{story.image}</div>
                <p className="text-gray-300 text-sm mb-4 italic">&ldquo;{story.story}&rdquo;</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-blue-400">📅</span>
                    <span className="text-gray-300">Started with: {story.event}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-400">👥</span>
                    <span className="text-gray-300">{story.friends}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Share Your Story</h2>
            <p className="text-blue-100 mb-6">Have you made meaningful connections through Evertwine? We&apos;d love to hear your story!</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Share Your Story
            </button>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5,247+</div>
              <div className="text-gray-300">People Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1,200+</div>
              <div className="text-gray-300">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Cities Active</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
