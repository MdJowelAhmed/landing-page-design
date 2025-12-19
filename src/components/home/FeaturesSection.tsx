"use client";

import { motion } from "framer-motion";

const features = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "Fraud-Proof Integrity",
        description: "Guaranteed accurate attendance with dual-factor geo-fencing and Wi-Fi validation system.",
        highlighted: false,
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
        title: "Seamless Monetization",
        description: "Instant access to your paid HRM dashboard upon subscription purchase for full control.",
        highlighted: true,
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        ),
        title: "Simplified Setup",
        description: "Easily define your institution's location, Wi-Fi, and onboard employees from one dashboard.",
        highlighted: false,
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        ),
        title: "Scalable Solution",
        description: "A robust platform that grows with your business, managing multiple locations and access tiers.",
        highlighted: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-[#F8F6F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
                        Why Choose <span className="text-[#0D9488]">Duty Hour App</span>
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className={`group relative p-6 rounded-2xl transition-all duration-300 ${feature.highlighted
                                    ? "bg-[#0D9488] text-white shadow-xl shadow-teal-500/20"
                                    : "bg-white border border-gray-100 hover:border-[#0D9488]/30 hover:shadow-lg"
                                }`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${feature.highlighted
                                        ? "bg-white/20"
                                        : "bg-[#F8F6F3]"
                                    }`}
                            >
                                <div className={feature.highlighted ? "text-white" : "text-[#0D9488]"}>
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3
                                className={`text-lg font-semibold mb-2 ${feature.highlighted ? "text-white" : "text-[#1E293B]"
                                    }`}
                            >
                                {feature.title}
                            </h3>
                            <p
                                className={`text-sm leading-relaxed ${feature.highlighted ? "text-white/90" : "text-[#64748B]"
                                    }`}
                            >
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center max-w-4xl mx-auto"
                >
                    <p className="text-sm text-[#64748B] leading-relaxed">
                        The Duty Hour App is engineered for absolute operational integrity, providing the most accurate, fraud-proof attendance data available. We offer smart, scalable HRM control designed for maximum efficiency.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
