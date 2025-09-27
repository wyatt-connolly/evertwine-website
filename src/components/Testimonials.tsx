"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah",
      location: "San Francisco",
      content:
        "I've made more friends in 3 months than I did in 3 years. The hiking meetups are amazing!",
      rating: 5,
      avatar: "👩‍💼",
      event: "Hiking Adventure",
    },
    {
      name: "Marcus",
      location: "Austin",
      content:
        "Finally found my people through the tech meetups. Great way to network and have fun.",
      rating: 5,
      avatar: "👨‍💻",
      event: "Tech Happy Hour",
    },
    {
      name: "Emily",
      location: "New York",
      content:
        "The app helped me discover so many cool events in my city. Love the community!",
      rating: 5,
      avatar: "👩‍🎨",
      event: "Art Gallery Opening",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real stories from real people
          </p>
        </motion.div>

        {/* Enhanced Testimonials with Avatars */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* User Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Event Badge */}
              <div className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                Attended: {testimonial.event}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial with Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  "Evertwine changed my social life"
                </h3>
                <blockquote className="text-xl mb-8 opacity-90">
                  "I went from having no friends in the city to having a full
                  social calendar. The hiking group I joined through Evertwine
                  has become my second family."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🏔️
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Alex Chen</div>
                    <div className="text-blue-200">
                      Software Engineer, Seattle
                    </div>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-300 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock App Screenshot */}
              <div className="relative">
                <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-4">📱</div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="font-semibold text-gray-900">
                          Hiking Group Chat
                        </div>
                        <div className="text-left space-y-1">
                          <div className="bg-blue-100 p-2 rounded text-xs">
                            Alex: "Great hike today!"
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-xs">
                            Sarah: "Thanks for organizing!"
                          </div>
                          <div className="bg-blue-100 p-2 rounded text-xs">
                            Alex: "Next week?"
                          </div>
                          <div className="bg-gray-100 p-2 rounded text-xs">
                            Mike: "I'm in! 🥾"
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
