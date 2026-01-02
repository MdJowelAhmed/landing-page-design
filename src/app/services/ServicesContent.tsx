"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PrecisionAttendance from "./PrecisionAttendance";
import DualFactor from "./DualFactor";

export default function ServicesContent() {
  return (
    <>
      {/* Hero Section */}
      <PrecisionAttendance />

      <DualFactor />

      {/* Work-Life Balance Tools Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent max-w-4xl mx-auto">
              Get essential insights & powerful tools for work-life balance
            </h2>
            <p className="mt-4 text-sm sm:text-base text-accent max-w-3xl mx-auto">
              Empowering professionals to master their time, ensure compliance,
              and track performance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Desktop Display */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="shadow-lg rounded-2xl overflow-hidden border-l-4 border-[#4E9DAB]"
            >
              <div className="w-full">
                <Image
                  src="/assets/work-life3.png"
                  alt="Desktop"
                  width={580}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="text-start pl-8 my-6">
                <div className="text-sm md:text-xl lg:font-bold text-accent mb-3">
                  Navigating complex shifts: How the Duty Hour App simplifies
                  your work schedule
                </div>
                <div className="text-xs text-accent">
                  Maximize productivity: Strategies to optimize your tracked
                  hours
                </div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6 shadow-2xl  border-b-2 border-r-4 border-[#4E9DAB] rounded-2xl p-4 bg-white hover:shadow-lg transition-shadow">
                <div>
                  {" "}
                  <Image
                    src="/assets/work-life2.png"
                    alt="Desktop"
                    width={500}
                    height={500}
                    className="object-cover"
                  />{" "}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4">
                    Ready to take control of your professional time?
                  </h3>
                  <p className="text-sm text-accent leading-relaxed">
                    The Duty Hour App is the single tool you need to confidently
                    manage your shifts, stay compliant, and find your ideal
                    work-life balance.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 shadow-2xl  border-b-2 border-r-4 border-[#4E9DAB] rounded-2xl p-4 bg-white hover:shadow-lg transition-shadow">
                <div>
                  {" "}
                  <Image
                    src="/assets/work-life1.png"
                    alt="Desktop"
                    width={500}
                    height={500}
                    className="object-cover"
                  />{" "}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4">
                    Why Accurate Time Tracking Matters: Maximizing productivity
                    & avoiding burnout
                  </h3>
                  <p className="text-sm text-accent leading-relaxed">
                    <span className="font-semibold text-accent">
                      Maximizes Productivity:
                    </span>{" "}
                    Identify time-sinks and optimize your peak performance hours
                    using clear data.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary to-primary-foreground rounded-2xl h-[398px] p-10">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-white">
                Download The Duty Hour <br /> Mobile App
              </h2>
              <p className="text-sm  mb-8 text-white">
                Get the power of accurate time tracking and compliance
                on-the-go, ensuring <br /> save-ins sources with one-tap
                logging.
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Download Now
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Link href="#" className="inline-block">
                    <div className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-lg hover:bg-secondary transition-colors">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-base font-medium">Apple Store</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="inline-block">
                    <div className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-lg hover:bg-secondary transition-colors">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-base font-medium">Google Play</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Mobile Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center items-center gap-6"
            >
              <div className="w-[500px] h-[500px] overflow-hidden absolute -top-30 left-0">
                <Image
                  src="/assets/service-mobile.png"
                  alt="Mobile Mockup"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
