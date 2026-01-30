"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DualFactor() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const validationSteps = [
        {
            number: "1",
            title: "Initiate Check-In",
            description: "Open the app at your worksite to verify your location and confirm your presence",
            bgColor: "bg-teal-600",
            hoverGradient: "from-teal-600 via-teal-500 to-cyan-500",
        },
        {
            number: "2",
            title: "Geo-Fence Check",
            description: "Open the app to verify your location within the designated geo-fenced area; no match-no check-in",
            bgColor: "bg-teal-500",
            hoverGradient: "from-teal-500 via-cyan-500 to-teal-400",
        },
        {
            number: "3",
            title: "Wi-Fi SSID Check",
            description: "Connect to the approved company Wi-Fi network to automatically verify your location and complete the check-in",
            bgColor: "bg-teal-500",
            hoverGradient: "from-cyan-500 via-teal-400 to-cyan-400",
        },
        {
            number: "4",
            title: "Verified Success",
            description: "Your check-in is instantly confirmed. You are now successfully verified and present at the workplace",
            bgColor: "bg-teal-400",
            hoverGradient: "from-teal-400 via-cyan-400 to-teal-300",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="lg:py-20 py-10 bg-white">
            <section className="max-w-7xl mx-auto rounded-2xl py-6 lg:py-12 bg-gradient-to-b from-cyan-50 to-white">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">
                            How Dual-Factor Validation Works
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-accent max-w-3xl mx-auto">
                            The Duty Hour App delivers verified attendance through a dual-factor system: employees log in only when
                            within designated geo-fenced locations and connected to specific Wi-Fi SSIDs.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-4"
                    >
                        {validationSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="h-full rounded-2xl  border border-gray-200 overflow-hidden shadow-sm hover:bg-[#4e9dab] transition-all duration-500 cursor-pointer">
                                    <motion.div
                                        className={` p-6 sm:p-8 transition-all duration-500`}
                                        animate={hoveredIndex === index ? { scale: 1.02 } : { scale: 1 }}
                                    >
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${hoveredIndex === index ? 'bg-white' : 'bg-[#4e9dab]'}`}>
                                            <span className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-[#4e9dab]' : 'text-white'}`}>
                                                {step.number}
                                            </span>
                                        </div>
                                    </motion.div>
                                    <div className="p-6">
                                        <h3 className={`text-lg sm:text-xl font-bold lg:mb-3 transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-900'}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-600'}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </section>
    );
}