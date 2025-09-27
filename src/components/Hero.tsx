"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

export default function Hero() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const handleJoinWaitlist = () => {
    setShowWaitlistModal(true);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">Meet People</span>
              <br />
              <span className="text-gray-900 dark:text-white">
                In Real Life
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto lg:mx-0"
            >
              Find events and meetups in your city. Connect with people who
              share your interests and build real friendships.
            </motion.p>

            {/* Simple Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Users, text: "Meet New People" },
                { icon: MapPin, text: "Local Events" },
                { icon: MessageCircle, text: "Chat & Connect" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Simple CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleJoinWaitlist}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto lg:mx-0"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Enhanced Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-gray-50 dark:bg-gray-700">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      9:41
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* App Header with Logo */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">E</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                          Evertwine
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Events near you
                        </p>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-3 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        <span className="text-sm text-gray-500">
                          Search events...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Event Cards with Images */}
                  <div className="px-6 space-y-4">
                    {[
                      {
                        title: "Coffee Meetup",
                        location: "Downtown Cafe",
                        time: "2:00 PM",
                        people: 8,
                        image: "☕",
                      },
                      {
                        title: "Hiking Group",
                        location: "Central Park",
                        time: "10:00 AM",
                        people: 12,
                        image: "🥾",
                      },
                      {
                        title: "Happy Hour",
                        location: "The Bar",
                        time: "6:00 PM",
                        people: 15,
                        image: "🍻",
                      },
                    ].map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.2 }}
                        className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl">
                            {event.image}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {event.location}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {event.time}
                                </p>
                              </div>
                              <div className="flex items-center space-x-1 text-blue-600">
                                <Users className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                  {event.people}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
      />
    </section>
  );
}
