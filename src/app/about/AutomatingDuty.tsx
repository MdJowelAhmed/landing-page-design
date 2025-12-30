import React from "react";
import { motion } from "framer-motion";

const AutomatingDuty = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-8"
          >
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Automating Duty-Hour Tracking to Empower Tomorrow’s Physicians
            </h2>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Secure, AI-driven work-hour logging that frees residents and
              fellows to focus on patient care—and protects their well-being and
              your accreditation.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-teal-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Invisible, automatic tracking
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-teal-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Accreditation-grade compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-teal-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Built for resident well-being
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-10 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                Start Your Free Trial
              </button>
              <a
                href="#"
                className="text-teal-700 font-medium hover:text-teal-800 flex items-center gap-2 group"
              >
                Read Our Story
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right - Duty Hour Overview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative col-span-4"
          >
            {/* Decorative dotted arc */}
            <div className="absolute -top-8 -right-8 w-48 h-48 border-2 border-dashed border-teal-300 rounded-full opacity-60"></div>

            <div className="bg-white rounded-3xl shadow-2xl p-4 lg:p-5 relative">
              <div className="flex items-start justify-between mb-">
                <h3 className="text font-bold text-gray-900">
                  Duty Hour Overview
                </h3>
                <div className="text-right">
                  <div className="text-sm text-teal-600 font-medium">
                    On Service • PGY-2
                  </div>
                </div>
              </div>

              {/* Status Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-">
                  <span className="text-sm font-semibold text-gray-700">
                    Status
                  </span>
                  <div className="text-right mt-3">
                    <div className="text-xs text-gray-500 ">Compliance</div>
                    <div className="text-lg font-bold text-gray-900">
                      100% this week
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    On Duty
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Auto-check-in
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Next Risk Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold text-gray-700 block mb-2">
                      Next risk
                    </span>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                      Post-call violation in 5 hrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Circular Progress - Fatigue Meter */}
              <div className="flex justify-end">
                <div className="relative w-36 h-36">
                  {/* Background circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke="#e0f2f1"
                      strokeWidth="10"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="72"
                      cy="72"
                      r="60"
                      stroke="#0d9488"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 60}`}
                      strokeDashoffset={`${2 * Math.PI * 60 * (1 - 0.68)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  {/* Center text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-sm font-medium text-teal-700 mb-1">
                      Fatigue
                    </div>
                    <div className="text-3xl font-bold text-teal-900">68%</div>
                  </div>
                </div>
              </div>

              {/* Tip text */}
              <p className="text-xs text-gray-500 text-right mt-4">
                Tip: micro-nap recommended - consider early sign-out
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomatingDuty;
