"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, MessageCircle } from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Calendar,
      title: "Find Events",
      description: "Discover meetups and activities that match your interests",
      color: "from-blue-500 to-blue-600",
      mockup: "📅",
    },
    {
      icon: MapPin,
      title: "Local Happenings",
      description: "See what's going on in your neighborhood",
      color: "from-purple-500 to-purple-600",
      mockup: "🗺️",
    },
    {
      icon: MessageCircle,
      title: "Chat & Connect",
      description: "Talk to people before you meet them",
      color: "from-green-500 to-green-600",
      mockup: "💬",
    },
    {
      icon: Users,
      title: "Meet People",
      description: "Build real friendships through shared experiences",
      color: "from-orange-500 to-orange-600",
      mockup: "👥",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple steps to meet new people and have fun
          </p>
        </motion.div>

        {/* Enhanced Features Grid with Mockups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Feature Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </div>

              {/* Mock Phone Preview */}
              <div className="w-32 h-48 bg-gray-900 rounded-2xl p-1 mx-auto mb-6 shadow-lg">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-3">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{feature.mockup}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {feature.title}
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="w-full h-1 bg-gray-200 rounded"></div>
                      <div className="w-3/4 h-1 bg-gray-200 rounded mx-auto"></div>
                      <div className="w-1/2 h-1 bg-gray-200 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* App Screenshots Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              See It In Action
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real screenshots from the Evertwine app
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mock Screenshots */}
            {[
              {
                title: "Event Discovery",
                description: "Browse events in your area",
                mockup: "📱",
                content:
                  "🎉 Coffee Meetup\n📍 Downtown Cafe\n⏰ Today 2:00 PM\n👥 8 people going",
              },
              {
                title: "Chat & Connect",
                description: "Talk to attendees before events",
                mockup: "💬",
                content:
                  "Hey! Excited for the hike?\n\nYeah! First time?\n\nYes, any tips?\n\nBring water! 🥾",
              },
              {
                title: "Profile & Interests",
                description: "Show who you are",
                mockup: "👤",
                content:
                  "Sarah Chen\n📍 San Francisco\n🎯 Hiking, Coffee\n📸 3 photos",
              },
            ].map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 mx-auto mb-6 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-4">{screenshot.mockup}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {screenshot.content}
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {screenshot.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {screenshot.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
