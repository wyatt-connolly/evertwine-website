"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  BarChart3,
  Globe,
  Smartphone,
  Calendar,
} from "lucide-react";

export default function MarketOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marketData = [
    {
      icon: Users,
      value: "$2.8B",
      label: "Social Networking Market",
      description: "Global social networking market size by 2025",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      value: "$1.2B",
      label: "Event Discovery Market",
      description: "Event discovery and ticketing market",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Smartphone,
      value: "4.2B",
      label: "Mobile Users",
      description: "Global smartphone users worldwide",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Target,
      value: "78%",
      label: "Urban Population",
      description: "Percentage living in urban areas",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const competitiveAdvantages = [
    {
      title: "Real-World Focus",
      description:
        "Unlike digital-only platforms, we prioritize face-to-face interactions and shared experiences",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Location-Based Discovery",
      description:
        "Advanced geolocation features help users discover events and people in their immediate area",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Dual Event Types",
      description:
        "Unique combination of organized meetups and spontaneous happy hour events",
      icon: Calendar,
      color: "from-green-500 to-green-600",
    },
    {
      title: "AI-Powered Matching",
      description:
        "Smart algorithms match users with events and people based on interests and compatibility",
      icon: Target,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const revenueStreams = [
    {
      title: "Premium Subscriptions",
      description: "Advanced features, unlimited events, priority matching",
      revenue: "$9.99/month",
      potential: "High",
    },
    {
      title: "Event Partnerships",
      description: "Revenue sharing with venues and event organizers",
      revenue: "15-30% commission",
      potential: "Very High",
    },
    {
      title: "Location Services",
      description: "Promoted listings for local businesses and venues",
      revenue: "$50-500/month",
      potential: "Medium",
    },
    {
      title: "Premium Features",
      description: "Advanced filtering, unlimited messaging, event creation",
      revenue: "Freemium model",
      potential: "High",
    },
  ];

  const growthMetrics = [
    {
      label: "Target Users",
      value: "1M+",
      description: "Active users by Year 2",
    },
    {
      label: "Market Penetration",
      value: "5%",
      description: "Of urban social networking market",
    },
    {
      label: "Revenue Target",
      value: "$50M",
      description: "Annual recurring revenue by Year 3",
    },
    {
      label: "Geographic Expansion",
      value: "50+",
      description: "Cities across North America",
    },
  ];

  return (
    <section
      id="market-opportunity"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Evertwine is positioned at the intersection of social networking and
            event discovery, targeting a massive and growing market with unique
            competitive advantages.
          </p>
        </motion.div>

        {/* Market Data */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {marketData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${data.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <data.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {data.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {data.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {data.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Competitive Advantages
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Revenue Model
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stream.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {stream.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Revenue:
                    </span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {stream.revenue}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Potential:
                    </span>
                    <span
                      className={`font-semibold ${
                        stream.potential === "Very High"
                          ? "text-green-600"
                          : stream.potential === "High"
                          ? "text-blue-600"
                          : "text-orange-600"
                      }`}
                    >
                      {stream.potential}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Growth Projections
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-2">{metric.label}</div>
                <div className="text-sm opacity-90">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Investment Opportunity
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join us in revolutionizing how people connect in the real world.
              We're seeking strategic investors to help scale our platform
              globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Contact for Investment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Download Pitch Deck
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
