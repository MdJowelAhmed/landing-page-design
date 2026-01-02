import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MissionAndVision = () => {
  const allValues = [
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (1).svg"
          alt="Excellence"
          width={40}
          height={40}
        />
      ),
      title: "Excellence",
      description:
        "We pursue the highest standards in technology, training, and patient safety.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (2).svg"
          alt="Integrity"
          width={40}
          height={40}
        />
      ),
      title: "Integrity",
      description:
        "We act transparently, respect data privacy, and honour our commitments.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (3).svg"
          alt="Collaboration"
          width={40}
          height={40}
        />
      ),
      title: "Collaboration",
      description:
        "We build strong partnerships with trainees, programs, unions, and accrediting bodies.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (4).svg"
          alt="Innovation"
          width={40}
          height={40}
        />
      ),
      title: "Innovation",
      description:
        "We continuously refine our tools, leveraging AI and real-world feedback to solve emerging challenges.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (5).svg"
          alt="Equity"
          width={40}
          height={40}
        />
      ),
      title: "Equity",
      description:
        "We champion fair access, protecting all residents from unreasonable hours and supporting diversity in medicine.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (6).svg"
          alt="Advocacy"
          width={40}
          height={40}
        />
      ),
      title: "Advocacy",
      description:
        "We stand with trainees to improve working conditions, well-being, and the quality of medical education.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790 (7).svg"
          alt="Respect"
          width={40}
          height={40}
        />
      ),
      title: "Respect",
      description:
        "We uphold the dignity, voices, and work-life balance of every member of the GME community.",
    },
    {
      icon: (
        <Image
          src="/assets/about/Frame 2147226790.svg"
          alt="Well-Being"
          width={40}
          height={40}
        />
      ),
      title: "Well-Being",
      description:
        "We design for sustainable careers, not just short-term compliance.",
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
            <p className="text-sm text-accent-foreground mb-3">
              Mission, Vision & Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent">
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
              className="p-5 rounded-xl border bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  {/* Teal target/bullseye icon with arrow */}
                  <div className=" rounded-full  flex items-center justify-center">
                    <Image
                      src="/assets/about/Frame.svg"
                      alt="Mission"
                      width={130}
                      height={130}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Mission
                  </h3>
                  <p className="text-sm text-accent leading-relaxed">
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
              className="p-8 rounded-xl bg-white border shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  {/* Orange lightbulb icon with radiating lines */}
                  <div className=" flex items-center justify-center">
                    <Image
                      src="/assets/about/Frame (1).svg"
                      alt="Vision"
                      width={130}
                      height={130}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">
                    Vision
                  </h3>
                  <p className="text-sm text-accent leading-relaxed">
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
            <h3 className="text-3xl sm:text-4xl font-bold text-accent mb-8">
              Our Values
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 "
            >
              {allValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-white shadow-md hover:border border-primary transition-all duration-300"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h4 className={`text-lg font-bold mb-3 text-primary`}>
                    {value.title}
                  </h4>
                  <p className="text-sm text-accent leading-relaxed">
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
