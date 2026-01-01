import React from "react";
import { motion } from "framer-motion";

const AutomatedTracking = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: "Automated Work-Hour Logging",
      description:
        "Geofencing + Wi-Fi handshake for seamless clock in/out, even offline. Background breaks and meal-period enforcement—no taps required.",
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Compliance & Reporting",
      description:
        "On-device rule engine for ACGME (and custom) caps, with instant alerts. One-click exports in ACGME format and a full audit trail for directors and accreditors.",
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "AI-Driven Insights",
      description:
        "Predictive violation risk scores that flag duty-hour conflicts before they happen. LLM-powered summaries and an in-app chatbot for policy Q&A.",
      iconBgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          {/* First Z */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 8h8M6 8l4 4M6 12h8"
          />
          {/* Second Z */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 14h8M6 14l4 4M6 18h8"
            opacity="0.8"
          />
        </svg>
      ),
      title: "Fatigue & Wellness",
      description:
        "Integrates HealthKit, Google Fit, and wearables to compute real-time fatigue scores. Personalized mitigation tips—naps, breaks, or shift swaps—delivered as push notifications.",
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <div>
      {/* What We Do Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-gray-600 mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Automated Tracking, Compliance, and Well-Being—In One Platform
            </h2>
            <p className="text-base text-gray-700 max-w-4xl">
              Duty Hour App makes duty-hour management invisible and intelligent,
              combining background automation with AI-driven insights and
              wellness support.
            </p>
          </motion.div>

          {/* Feature Cards Grid - 2x2 Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl border border-teal-200 bg-white hover:border-teal-400 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-full ${feature.iconBgColor} ${feature.iconColor} flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-teal-600 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomatedTracking;
