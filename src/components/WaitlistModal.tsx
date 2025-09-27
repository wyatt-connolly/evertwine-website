"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Mail, CheckCircle, Users, MapPin, Heart } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail("");

    // Hide success message after 4 seconds then close modal
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 4000);
  };

  const handleClose = () => {
    setEmail("");
    setIsSubmitting(false);
    setShowSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-gray-900 rounded-3xl p-8 max-w-lg w-full border border-gray-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {!showSuccess ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Join the Waitlist
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Be the first to know when Evertwine launches in your city!
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Waitlist Benefits:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">
                          Early access to the app
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">
                          Exclusive beta events
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-gray-300">
                          Help shape the community
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 px-6 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Joining...</span>
                        </div>
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <p className="text-xs text-gray-500 text-center mt-6">
                  No spam, ever. We'll only email you when we launch.
                </p>
              </>
            ) : (
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Welcome to the Waitlist!
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  You're now on the list. We'll notify you when Evertwine is
                  ready in your area.
                </p>

                {/* Stats */}
                <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        5,247
                      </div>
                      <div className="text-xs text-gray-400">Your Position</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        50+
                      </div>
                      <div className="text-xs text-gray-400">Cities</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Check your email for a confirmation message.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
