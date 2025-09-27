"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Users, MapPin, Heart } from "lucide-react";
import WaitlistModal from "./WaitlistModal";

export default function CommunityCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const handleJoinWaitlist = () => {
    setShowWaitlistModal(true);
  };

  return (
    <section
      id="community"
      ref={ref}
      className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Meet People?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our waitlist and be the first to know when Evertwine launches
              in your city.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleJoinWaitlist}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-sm text-blue-200 mt-4">
              No spam, ever. We&apos;ll only email you when we launch.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-white mb-4">
                Waitlist Benefits:
              </h4>
              {[
                { icon: Users, text: "Early access to the app" },
                { icon: MapPin, text: "Exclusive beta events" },
                { icon: Heart, text: "Help shape the community" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <benefit.icon className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <span className="text-blue-100">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Community Stats & Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Community Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Growing Community
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5,000+</div>
                  <div className="text-sm text-blue-200">People waiting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-200">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-sm text-blue-200">Love it</div>
                </div>
              </div>
            </div>

            {/* Mock App Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">App Preview</h3>
              <div className="w-48 h-80 bg-gray-900 rounded-2xl p-2 mx-auto">
                <div className="w-full h-full bg-white rounded-xl p-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">E</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="font-semibold text-gray-900">
                        Events Today
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="bg-blue-50 p-2 rounded">
                          ☕ Coffee Meetup
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          🥾 Hiking Group
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          🍻 Happy Hour
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-4">
                        📍 3 events near you
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                What People Are Saying
              </h3>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm text-white">
                    &ldquo;Can&apos;t wait for this to launch!&rdquo;
                  </div>
                  <div className="text-xs text-blue-200 mt-1">- Sarah, SF</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm text-white">
                    &ldquo;Finally, a real social app!&rdquo;
                  </div>
                  <div className="text-xs text-blue-200 mt-1">
                    - Mike, Austin
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-sm text-white">
                    &ldquo;This is exactly what I needed&rdquo;
                  </div>
                  <div className="text-xs text-blue-200 mt-1">- Emma, NYC</div>
                </div>
              </div>
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
