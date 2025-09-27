"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Database,
  Globe,
  Lock,
  BarChart3,
  Users,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React Native", "TypeScript", "Expo", "Framer Motion"],
      description:
        "Cross-platform mobile app with smooth animations and native performance",
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      description: "Scalable server architecture with real-time capabilities",
      icon: Cpu,
      color: "from-green-500 to-green-600",
    },
    {
      category: "Cloud & Infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "CDN"],
      description: "Enterprise-grade infrastructure with global scalability",
      icon: Cloud,
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Security & Privacy",
      technologies: [
        "OAuth 2.0",
        "JWT",
        "End-to-End Encryption",
        "GDPR Compliance",
      ],
      description: "Bank-level security with complete user privacy protection",
      icon: Shield,
      color: "from-red-500 to-red-600",
    },
  ];

  const innovations = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description:
        "Machine learning algorithms analyze user preferences, behavior, and compatibility to suggest the most relevant events and connections.",
      features: [
        "Interest-based event recommendations",
        "Compatibility scoring for user matching",
        "Predictive analytics for event success",
        "Personalized content curation",
      ],
    },
    {
      icon: Globe,
      title: "Real-Time Location Services",
      description:
        "Advanced geolocation technology enables precise event discovery and location-based social features.",
      features: [
        "GPS-based event discovery",
        "Proximity-based user suggestions",
        "Location-aware notifications",
        "Geofenced event boundaries",
      ],
    },
    {
      icon: MessageCircle,
      title: "Advanced Chat System",
      description:
        "Real-time messaging with rich media support, group management, and intelligent moderation.",
      features: [
        "Real-time message delivery",
        "Group chat management",
        "Media sharing and storage",
        "AI-powered content moderation",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Comprehensive analytics platform providing insights into user behavior, event success, and community growth.",
      features: [
        "User engagement tracking",
        "Event success metrics",
        "Community growth analytics",
        "Predictive trend analysis",
      ],
    },
  ];

  const performanceMetrics = [
    {
      label: "App Load Time",
      value: "< 2s",
      description: "Lightning-fast app startup",
    },
    {
      label: "Message Delivery",
      value: "< 100ms",
      description: "Real-time messaging",
    },
    { label: "Uptime", value: "99.9%", description: "Enterprise reliability" },
    {
      label: "Scalability",
      value: "1M+",
      description: "Concurrent users supported",
    },
  ];

  return (
    <section
      id="technology"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
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
            Technology & Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technology and innovative features that set
            Evertwine apart from traditional social networking platforms.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technology Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {tech.category}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {tech.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tech.technologies.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Innovations
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <innovation.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {innovation.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {innovation.description}
                    </p>
                    <ul className="space-y-2">
                      {innovation.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Performance & Reliability
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            System Architecture
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Mobile App</h4>
              <p className="text-blue-100">
                React Native cross-platform app with native performance and
                smooth animations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                Cloud Infrastructure
              </h4>
              <p className="text-blue-100">
                Scalable AWS infrastructure with global CDN and real-time data
                synchronization
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Data Layer</h4>
              <p className="text-blue-100">
                PostgreSQL with Redis caching for high-performance data
                operations and analytics
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Security & Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-green-600" />
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Security & Privacy First
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We prioritize user privacy and data security with enterprise-grade
              encryption, GDPR compliance, and transparent data practices.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  End-to-End Encryption
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  GDPR Compliant
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  SOC 2 Certified
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
