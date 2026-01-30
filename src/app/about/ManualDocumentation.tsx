import React from "react";
import { motion } from "framer-motion";

const ManualDocumentation = () => {
  const timeline = [
    {
      year: "2009-2024",
      text: "Sixteen years inside GME: coordinating, managing, and watching residents lose time to spreadsheets.",
    },
    {
      year: "2025",
      text: "Duty Hour App founded to turn work-hour tracking into a background process residents never have to think about.",
    },
    {
      year: "TODAY",
      text: "Partnering with programs, trainees, and unions to uphold fair working hours and safeguard patient care.",
    },
  ];

  return (
    <div>
      {/* Our Story Timeline */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-accent mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-accent mb-6">
              From Manual Documentation to Invisible Tracking
            </h2>
            <p className="text-sm text-accent max-w-4xl mb-4">
              For more than a decade, graduate-medical-education professionals
              have juggled patient care, teaching and the tedious chore of
              manual duty hour documentation. In 2025, after 16 years working
              inside residency programs, Mark Bolden turned that frustration
              into a solution: the Duty Hour App.
            </p>
            <p className="text-sm text-accent max-w-4xl">
              From day one, our goal has been simple make work-hour tracking
              invisible and instant, so trainees devote every spare minute to
              learning and healing.
            </p>
          </motion.div>

          {/* Two Column Layout: Timeline Left, Promise Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Timeline Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 border-l-3 border-primary"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 "
                >
                  <div className="shrink-0 ">
                    {/* Teal circular icon with inner circle (target/record button style) */}
                    <div className="w-5 h-5 rounded-full border-3 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="flex-1 ">
                    <p className="text-base text-accent-foreground leading-relaxed">
                      <h3 className="font-semibold">{item.year}:</h3>{" "}
                     <p className="text-sm text-accent leading-relaxed"> {item.text}</p>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Our Promise Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pt-0"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8  border border-gray-200">
                <h3 className="text-lg font-bold text-accent mb-4">
                  Our promise:
                </h3>
                <p className="text-base text-accent leading-relaxed">
                  We empower graduate medical education programs and their
                  resident physicians through automated work-hour tracking and
                  data-driven solutions that save critical time for clinical
                  duties, uphold fair working hours, safeguard well-being, and
                  ensure the highest standards of patient care partnering the
                  solidarity of the labour movement with accreditation-grade
                  rigour.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManualDocumentation;
