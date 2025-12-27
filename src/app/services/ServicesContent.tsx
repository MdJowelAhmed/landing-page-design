"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PrecisionAttendance from "./PrecisionAttendance";
import DualFactor from "./DualFactor";

const validationSteps = [
    {
        number: "1",
        title: "Initiate Check-In",
        description: "Open the app at your worksite to verify your location and confirm your presence",
        bgColor: "bg-teal-600",
    },
    {
        number: "2",
        title: "Geo-Fence Check",
        description: "Open the app to verify your location within the designated geo-fenced area; no match-no check-in",
        bgColor: "bg-teal-500",
    },
    {
        number: "3",
        title: "Wi-Fi SSID Check",
        description: "Connect to the approved company Wi-Fi network to automatically verify your location and complete the check-in",
        bgColor: "bg-teal-500",
    },
    {
        number: "4",
        title: "Verified Success",
        description: "Your check-in is instantly confirmed. You are now successfully verified and present at the workplace",
        bgColor: "bg-teal-400",
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

export default function ServicesContent() {
    return (
        <>
            {/* Hero Section */}
       <PrecisionAttendance />

         <DualFactor />

            {/* Precision Attendance Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-cyan-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                            Precision Attendance. Powered by
                        </h2>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                            Geo-fencing
                        </h3>
                        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                            The Duty Hour App delivers verified attendance through a dual-factor system: employees log in only when
                            within designated geo-fenced locations and connected to specific Wi-Fi SSIDs.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Stats Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <div className="text-4xl sm:text-5xl font-bold text-foreground">34.0k+</div>
                                <div className="text-base sm:text-lg text-muted-foreground mt-2">
                                    Attendance Records Processed
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl sm:text-5xl font-bold text-foreground">12.0k+</div>
                                <div className="text-base sm:text-lg text-muted-foreground mt-2">
                                    Employees Managed
                                </div>
                            </div>
                            <div className="pt-4">
                                <h4 className="text-lg font-semibold text-foreground mb-4">Download Now</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="#" className="inline-block">
                                        <div className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-xs">Download on the</div>
                                                <div className="text-sm font-semibold">Apple Store</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="#" className="inline-block">
                                        <div className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-xs">Get it on</div>
                                                <div className="text-sm font-semibold">Google Play</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Phone Mockups Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative flex justify-center items-center gap-8"
                        >
                            <div className="text-center">
                                <div className="inline-block p-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] shadow-2xl">
                                    <div className="bg-white rounded-[2.2rem] p-2">
                                        <div className="w-48 sm:w-56 h-96 sm:h-[28rem] bg-gray-100 rounded-[1.8rem] flex items-center justify-center">
                                            <div className="text-center p-4">
                                                <div className="text-xs text-gray-500 mb-4">Weekly Reports</div>
                                                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 rounded-full"></div>
                                                <div className="space-y-2 text-xs text-left">
                                                    <div className="text-gray-600">Current Week Present</div>
                                                    <div className="font-bold">5 Days</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="inline-block p-1 bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] shadow-2xl">
                                    <div className="bg-white rounded-[2.2rem] p-2">
                                        <div className="w-48 sm:w-56 h-96 sm:h-[28rem] bg-gray-50 rounded-[1.8rem] flex items-center justify-center">
                                            <div className="text-center p-4 w-full">
                                                <div className="text-xs text-gray-500 mb-2">Hello Mark 👋</div>
                                                <div className="text-xs text-gray-400 mb-6">Today's Status</div>
                                                <div className="text-xs text-gray-600 mb-4">This Week's Analytics</div>
                                                <div className="h-32 flex items-end justify-around gap-1 px-4">
                                                    {[40, 55, 60, 70, 85, 75, 90].map((height, i) => (
                                                        <div key={i} className="flex-1 bg-teal-500 rounded-t" style={{ height: `${height}%` }}></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Download App Banner */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-white"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                Download The Duty Hour Mobile App
                            </h2>
                            <p className="text-base sm:text-lg mb-8 text-teal-50">
                                Get the power of accurate time tracking and compliance on-the-go,
                                ensuring save-ins sources with one-tap logging.
                            </p>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Download Now</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="#" className="inline-block">
                                        <div className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-xs">Download on the</div>
                                                <div className="text-base font-semibold">Apple Store</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="#" className="inline-block">
                                        <div className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                            </svg>
                                            <div className="text-left">
                                                <div className="text-xs">Get it on</div>
                                                <div className="text-base font-semibold">Google Play</div>
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
                            <div className="inline-block p-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] shadow-2xl">
                                <div className="bg-white rounded-[2.2rem] p-2">
                                    <div className="w-44 sm:w-52 h-80 sm:h-96 bg-gray-100 rounded-[1.8rem]"></div>
                                </div>
                            </div>
                            <div className="inline-block p-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[2.5rem] shadow-2xl">
                                <div className="bg-white rounded-[2.2rem] p-2">
                                    <div className="w-44 sm:w-52 h-80 sm:h-96 bg-gray-50 rounded-[1.8rem]"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground max-w-4xl mx-auto">
                            Get essential insights & powerful tools for work-life balance
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                            Empowering professionals to master their time, ensure compliance, and track performance.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Desktop Display */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-900 rounded-2xl p-8 shadow-2xl"
                        >
                            <div className="text-center mb-6">
                                <div className="text-sm text-gray-400 mb-4">Navigating complex shifts: How the Duty Hour App simplifies your work schedule</div>
                                <div className="text-xs text-gray-500 mb-6">Maximize productivity. Strategies to optimize your tracked hours.</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 h-64 flex items-center justify-center">
                                <div className="w-full">
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg"></div>
                                        <div className="h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg"></div>
                                        <div className="h-16 bg-gradient-to-br from-green-200 to-teal-200 rounded-lg"></div>
                                    </div>
                                    <div className="h-32 flex items-end justify-around gap-2">
                                        {[50, 70, 85, 60, 90, 75, 95].map((height, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t" style={{ height: `${height}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="border-2 border-teal-500 rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Ready to take control of your professional time?
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    The Duty Hour App is the single tool you need to confidently manage your shifts, stay compliant, and find your ideal work-life balance.
                                </p>
                            </div>

                            <div className="border-2 border-teal-500 rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    Why Accurate Time Tracking Matters: Maximizing productivity & avoiding burnout
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <span className="font-semibold text-foreground">Maximizes Productivity:</span> Identify time-sinks and optimize your peak performance hours using clear data.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-cyan-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Ready to Get{" "}
                            <span className="text-teal-600">
                                Started?
                            </span>
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            Let&apos;s discuss how Duty Hour can help transform your workforce management with precision attendance tracking.
                        </p>
                        <Link href="/contact" className="inline-block mt-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white border-0 shadow-lg shadow-teal-500/25 px-8"
                            >
                                Contact Us Today
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
