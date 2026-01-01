import React from "react";
import { motion } from "framer-motion";

const MissionAndVision = () => {
  const allValues = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
          <circle cx="18" cy="6" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Excellence",
      description:
        "We pursue the highest standards in technology, training, and patient safety.",
      color: "light-blue",
      colorClass: "bg-sky-400",
      textColorClass: "text-sky-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "We act transparently, respect data privacy, and honour our commitments.",
      color: "green",
      colorClass: "bg-green-500",
      textColorClass: "text-green-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8h.01M19 12h.01M17 16h.01"
            opacity="0.6"
            transform="translate(2, -2)"
          />
        </svg>
      ),
      title: "Collaboration",
      description:
        "We build strong partnerships with trainees, programs, unions, and accrediting bodies.",
      color: "light-orange",
      colorClass: "bg-orange-300",
      textColorClass: "text-orange-500",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We continuously refine our tools, leveraging AI and real-world feedback to solve emerging challenges.",
      color: "yellow",
      colorClass: "bg-yellow-400",
      textColorClass: "text-yellow-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      title: "Equity",
      description:
        "We champion fair access, protecting all residents from unreasonable hours and supporting diversity in medicine.",
      color: "brown",
      colorClass: "bg-amber-700",
      textColorClass: "text-amber-800",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5 5 0 010 7.424M13.814 10.941a3 3 0 010 4.243M12 5v14M5 12h14"
          />
        </svg>
      ),
      title: "Advocacy",
      description:
        "We stand with trainees to improve working conditions, well-being, and the quality of medical education.",
      color: "light-blue",
      colorClass: "bg-sky-400",
      textColorClass: "text-sky-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Respect",
      description:
        "We uphold the dignity, voices, and work-life balance of every member of the GME community.",
      color: "brown-red",
      colorClass: "bg-rose-700",
      textColorClass: "text-rose-800",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 00-6-6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v2M12 20v2M2 12h2M20 12h2"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Well-Being",
      description:
        "We design for sustainable careers, not just short-term compliance.",
      color: "purple",
      colorClass: "bg-purple-400",
      textColorClass: "text-purple-600",
    },
  ];

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

  return (
    <div>
      {/* Mission, Vision & Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-gray-600 mb-3">
              Mission, Vision & Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What Guides the Duty Hour App
            </h2>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white shadow-md"
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  {/* Teal target/bullseye icon with arrow */}
                  <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"
                      />
                      <path
                        strokeLinecap="round"
                        d="M12 2v3M12 19v3M2 12h3M19 12h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-teal-600 mb-4">
                    Mission
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    We empower graduate medical education programs and their
                    resident physicians through automated work-hour tracking and
                    data-driven solutions that save critical time for clinical
                    duties, uphold fair working hours, safeguard well-being, and
                    ensure the highest standards of patient care—partnering the
                    solidarity of the labor movement with accreditation-grade
                    rigor.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white shadow-md"
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  {/* Orange lightbulb icon with radiating lines */}
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v2M20 12h-2M4 12H2M18.364 5.636l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l1.414 1.414M5.636 5.636l1.414 1.414"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">
                    Vision
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A health care ecosystem in which every physician-in-training
                    is respected, supported, and equipped to excel—freed from
                    administrative burdens through automated work-hour tracking
                    so they can devote more time to clinical learning under
                    safe, equitable conditions that produce resilient clinicians
                    and deliver optimal care to every community.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our Values
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {allValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-white shadow-md"
                >
                  <div
                    className={`w-14 h-14 rounded-lg ${value.colorClass} text-white flex items-center justify-center mb-4`}
                  >
                    {value.icon}
                  </div>
                  <h4
                    className={`text-lg font-bold mb-3 ${value.textColorClass}`}
                  >
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionAndVision;
