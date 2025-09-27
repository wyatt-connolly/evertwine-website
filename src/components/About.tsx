"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, MapPin, MessageCircle } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      avatar: "👩‍💼",
      bio: "Former product manager at Google. Passionate about building communities.",
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      avatar: "👨‍💻",
      bio: "Ex-Twitter engineer. Loves creating seamless user experiences.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      avatar: "👩‍🎨",
      bio: "Event planning expert. Believes in the power of human connection.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description:
        "We believe in fostering genuine relationships through shared experiences.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our community is at the heart of everything we do.",
    },
    {
      icon: MapPin,
      title: "Local Impact",
      description: "Building stronger neighborhoods, one event at a time.",
    },
    {
      icon: MessageCircle,
      title: "Safe & Inclusive",
      description: "Creating welcoming spaces for everyone to connect.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            About Evertwine
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re on a mission to help people build meaningful relationships
            through real-world experiences and shared interests.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 rounded-2xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-300 mb-4">
                Evertwine was born from a simple observation: in our digital
                age, people are more connected than ever, yet many feel more
                isolated than before. We saw friends struggling to meet new
                people, neighbors who never spoke, and communities that felt
                disconnected.
              </p>
              <p className="text-gray-300">
                We believe that the best relationships start with shared
                experiences. Whether it&apos;s a coffee meetup, a hiking adventure,
                or a happy hour, these moments create the foundation for lasting
                friendships.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">🌟</div>
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-blue-100">
                To create a world where everyone can find their community and
                build meaningful relationships through shared experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5,247+</div>
              <div className="text-blue-200">People on Waitlist</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">User Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
