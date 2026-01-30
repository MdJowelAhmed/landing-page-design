import React from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const tags = ["GME Operations", "Resident Well-Being", "UX & Compliance"];

  return (
    <div>
      {/* Our Team Section */}
      <section className="mb-10 lg:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Mark Bolden's Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Side - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm text-primary mb-3">Our Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-accent">
                Meet Our Creative Consultant
              </h2>
              {/* Image placeholder on left side */}
              <div className="mt-8 w-full h-96 bg-primary rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-sm">Team Member Image</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Mark Bolden's Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center mt-12"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">
                Mark Bolden
              </h3>
              <p className="text-lg text-accent mb-6">Creative Consultant</p>

              <div className="space-y-4 mb-6">
                <p className="text-sm text-accent leading-relaxed">
                  For 16 years, Mark worked inside Graduate Medical Education,
                  starting as a program coordinator and then manager, always
                  focused on finding efficiencies that give physicians more time
                  for what matters most.
                </p>
                <p className="text-sm text-accent leading-relaxed">
                  As a single father, he experienced firsthand how manual
                  tracking steals precious moments from families. That personal
                  frustration became the inspiration for the automated tracking
                  at the heart of the Duty Hour App.
                </p>
                <p className="text-sm text-accent leading-relaxed">
                  Today, as Creative Consultant, Mark leads product vision,
                  user-experience design, and compliance mapping. He brings
                  together his passion for education, technology, and physician
                  well-being to create tools that truly serve the GME community.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-gray-200 text-accent rounded-full text-xs font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4">
              Ready to Protect Your Residents—and Your Accreditation?
            </h2>
            <p className="text-sm text-accent text-justify md:text-center mx-auto mb-8">
              See how automated duty-hour tracking can free your trainees to
              focus on learning and patient care, while giving your program the
              data and safeguards it needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
              {/* Start Your Free Trial Button */}
              <motion.a
                target="_blank"
                href="https://business.dutyhourapp.com"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:px-8 px-4 lg:py-4 py-2 bg-gradient-to-r from-primary to-primary-foreground text-white font-semibold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Free Trial
              </motion.a>

              {/* App Store Buttons */}
              <div className="flex gap-2 flex-col font-semibold ">
                <p className="text-sm text-secondary mb-2 text-start">Download Now</p>
                <div className="flex gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-start items-center gap-2 px-4 py-[6px] bg-secondary text-white rounded-lg hover:bg-secondary transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.69-2.2.5-3.08-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-sm">
                      <p className="text">Download on the</p>{" "}
                      <p className="text-sm font-semibold text-start">
                        Apple Store
                      </p>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-start items-center gap-2 px-4 py-[6px] bg-secondary text-white rounded-lg hover:bg-secondary transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-sm">
                      <p className="text">Get it on</p>{" "}
                      <p className="text-sm font-semibold text-start">
                        Google Play
                      </p>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
