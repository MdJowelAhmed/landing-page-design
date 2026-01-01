import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <Image
          src="/assets/about/Frame 2147226790 (8).svg"
          alt="Automated Work-Hour Logging"
          width={40}
          height={40}
        />
      ),
      title: "Automated Work-Hour Logging",
      description:
        "Geofencing + Wi-Fi handshake for seamless clock in/out, even offline. Background breaks and meal-period enforcement—no taps required.",
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (9).svg"
          alt="Compliance & Reporting"
          width={40}
          height={40}
        />
      ),
      title: "Compliance & Reporting",
      description:
        "On-device rule engine for ACGME (and custom) caps, with instant alerts. One-click exports in ACGME format and a full audit trail for directors and accreditors.",
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (10).svg"
          alt="AI-Driven Insights"
          width={40}
          height={40}
        />
      ),
      title: "AI-Driven Insights",
      description:
        "Predictive violation risk scores that flag duty-hour conflicts before they happen. LLM-powered summaries and an in-app chatbot for policy Q&A.",
      iconBgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (11).svg"
          alt="Fatigue & Wellness"
          width={40}
          height={40}
        />
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
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Automated Tracking, Compliance, and Well-Being—In One Platform
            </h2>
            <p className="text-sm text-gray-700 max-w-4xl">
              Duty Hour App makes duty-hour management invisible and
              intelligent, combining background automation with AI-driven
              insights and wellness support.
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
                className="p-4 rounded-xl border border-teal-200 bg-white hover:border-teal-400 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-full  flex items-center justify-center mb-3`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#4E9DAB] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#4E9DAB] leading-relaxed">
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
