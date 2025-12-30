import React from "react";
import { motion } from "framer-motion";
import { IoMdTimer } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";

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
            className="col-span-7 "
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl w-5xl font-bold text-gray-900 mb-6 leading-tight  ">
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
                <div className="w-10 h-10 rounded-full  flex items-center justify-center 0">
                  {/* <svg
                    className="w-5 h-5 text-teal-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg> */}

                  <IoMdTimer className="w-6 h-6 " />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Invisible, automatic tracking
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full  flex items-center justify-center ">
                  <GoShieldCheck className="w-6 h-6 " />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Accreditation-grade compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full  flex items-center justify-center ">
                  <IoHeartOutline className="w-6 h-6 " />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Built for resident well-being
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-gradient-to-r from-[#4E9DAB] to-[#336C79] hover:bg-gradient-to-r hover:from-[#336C79] hover:to-[#4E9DAB] text-white font-semibold px-10 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                Start Your Free Trial
              </button>
              <a
                href=""
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
            className="relative col-span-5 mt-28"
          >
            {/* Decorative dotted arc */}
            <div className="absolute top-1 -right-3 w-48 h-48 border-2 border-dashed border-teal-700 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -right-8 w-60 h-60 border-2 border-dashed border-teal-700 rounded-full opacity-60"></div>

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
                  <p className="text-sm font-semibold text-gray-700">Status</p>
                  <div className="text-right mt-3">
                    <div className="text-xs text-gray-500 mb-3">Compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      On Duty
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      Auto-check-in
                    </span>
                  </div>
                  <div className=" font-bold text-gray-900  ">
                    100% this week
                  </div>
                </div>
              </div>

              {/* Next Risk Section */}
              <div className="mb-8 flex items-center justify-between">
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
                      <div className="text-3xl font-bold text-teal-900">
                        68%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip text */}
              <p className="text-xs text-start text-gray-500 text-right mt-4">
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
