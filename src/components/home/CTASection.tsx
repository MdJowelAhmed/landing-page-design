"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const impactStats = [
    {
        label: "Reduction In Admin Time",
        value: 42,
        displayValue: "42%",
    },
    {
        label: "Decrease in Payroll Errors",
        value: 31,
        displayValue: "31%",
    },
];

const progressStats = [
    {
        label: "Attendance Data Accuracy",
        value: 99.9,
        displayValue: "99.9%",
    },
    {
        label: "Fraudulent Check-Ins Eliminated",
        value: 95,
        displayValue: "95%",
    },
    {
        label: "Employee Setup Time Reduced",
        value: 90,
        displayValue: "90%",
    },
];

export default function CTASection() {
    return (
        <section className="pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Heading & Download */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl  lg:text-4xl font-medium text-accent">
                            The New Standard
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-bold lg:text-5xl text-primary-foreground lg:my-4 my-2 ml-20">
                            In Verifiable
                        </h3>
                        <p className="text-2xl md:text-3xl font-medium lg:text-4xl text-accent mt-2 ml-12">
                            Workforce Management
                        </p>

                        <p className="mt-6 text-sm text-accent leading-relaxed lg:max-w-md w-full">
                           Duty Hour App brings integrity and automation to your HR processes. Our dual-validation system ensures every minute is accounted for, eliminating manual data entry and risk.
                        </p>

                        <div className="mt-6 ">
                                <p className="text-sm font-semibold text-accent mb-3">Download Now</p>
                            <div className="flex flex-wrap gap-3">
                                {/* App Store Button */}
                                <a
                                    href=" https://apps.apple.com/ca/app/duty-hour-app/id6753148379"
                                    target="_blank"
                                    className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] leading-none">Download on the</div>
                                        <div className="text-sm font-semibold leading-tight">Apple Store</div>
                                    </div>
                                </a>
                                {/* Google Play Button */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.duty.users&hl=en"
                                    target="_blank"
                                    className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] leading-none">Get it on</div>
                                        <div className="text-sm font-semibold leading-tight">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-xl lg:max-w-[480px] w-full shadow-xl border border-gray-100 p-6 lg:p-12"
                    >
                        {/* Measurable Impact Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div>
                                <div className="text-sm  text-accent mb-2">Measurable Impact</div>
                            <div className="flex -space-x-2">
                                    <div className="flex -space-x-3 ">
                                                                   <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (16).png" alt="Image" height={100} width={100} />
                                                                   <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (17).png" alt="Image" height={100} width={100} />
                                                                   <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (21).png" alt="Image" height={100} width={100} />
                                                                   <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (22).png" alt="Image" height={100} width={100} />

                                                                   </div>
                                                               
                            </div>
                            </div>
                            <div className="flex gap-8 ml-auto">
                                {impactStats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-bold text-accent">{stat.displayValue}</div>
                                        <div className="text-[10px] text-[#64748B]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-6">
                            {progressStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-accent">{stat.label}</span>
                                        <span className="text-sm font-bold text-accent">{stat.displayValue}</span>
                                    </div>
                                    <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-primary to-primary-foreground rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            
            </div>
        </section>
    );
}
