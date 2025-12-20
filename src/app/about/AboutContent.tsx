"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Automated Work-Hour Logging",
        description: "Launching it to liveliobasis and platform work hours and check tracking detailed tracked work hours after on working hours.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Data-Driven Insights",
        description: "Powerful analytics that let nurses track hours. Accu satisfied track where hours and viewed dash patterns on you time.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Compliance & Reporting",
        description: "Get ability on duty-hour insights with export paths, DHA-child reports. Organize reports audit not required use on site platform.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Fatigue & Wellness",
        description: "Integrate work-life fatigue. It and accessible to outputs your time bring access reports real scenarios. Hours set measures.",
        color: "teal",
    },
];

const securityValues = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: "Data Protection",
        description: "• 24/7 active encryption on patient\n• TLS and HTTPS\n• End-to-end secured",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Privacy & Regulation",
        description: "• HIPAA and data protection law\n• Full Data-CA Compliance\n• PHI HIPAA Compliance",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Access & Governance",
        description: "• Role-based access control for residents program\n• Execute secure platform\n• Ensuring admin on setting",
    },
];

const timeline = [
    {
        year: "2021-2023",
        title: "System crash crisis start, counseling, managing and attendance resident issue time to fix operations.",
        description: "Duty Hour App launched to sort work timelogic: managing and support resident hours.",
    },
    {
        year: "2024",
        title: "Partnering with programs, trainees, and admin to product smartchat treating hours and safeguard residents result to ensure.",
        description: "Duty Hour App launched to sort work timelogic: managing and support resident hours.",
    },
    {
        year: "2025+",
        title: "Our present effort medical resident physicians through automated tracking and data-driven solutions that give effective time for clinical duties, uphold best working hours, intelligent well-being and ensure the highest standards of patient care by proactively identifying the visibility of the labour movement with next-generation workflow labour.",
        description: "",
    },
];

const allValues = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Excellence",
        description: "We pursue the highest standards in all aspects of product development, ensuring you track and ensure safety.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Integrity",
        description: "We prioritize transparency, respect data privacy, and operate with the highest professional commitments.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Collaboration",
        description: "We build lasting relationships with programs admin, leveraging their input to create emerging challenges.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Innovation",
        description: "We embrace new study, undertake workflow, and forward-thinking well in close emerging challenges.",
        color: "orange",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: "Transparency",
        description: "We champion the newest advancements of the safeguard excellence hour and supporting diversity innovations.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Respect",
        description: "We stand for the highest voices, and assure-create safe and labour community.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: "Learning",
        description: "We design to continually respect, learning and adapt-to the quality of product educations.",
        color: "teal",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        title: "Community",
        description: "We design to coordinate measure, analyzing life of contributors and labour against care.",
        color: "orange",
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

export default function AboutContent() {
    return (
        <>
            {/* Hero Section - About Who */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <p className="text-sm text-teal-600 font-medium mb-3">About Who Do</p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Automated Tracking, Compliance, and Well-Being—In One Platform
                        </h1>
                        <p className="text-base text-muted-foreground max-w-4xl">
                            Duty Hour App delivers highly integrated systems and intelligent combining hours/work satisfaction with its drivers integrated product support.
                        </p>
                    </motion.div>

                    {/* Feature Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-teal-500 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-teal-500 text-white flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-base font-bold text-teal-600 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Automating Duty-Hour Tracking Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-cyan-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                                Automating Duty-Hour Tracking to Empower Tomorrow's Physicians
                            </h2>
                            <p className="text-base text-muted-foreground mb-8">
                                Secure Shift track, Duty track-product load with residency care—and presence how well-being and track revelations.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-muted-foreground">Enables informed</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-muted-foreground">Reduces manual logging</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-muted-foreground">Lightning resident</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-muted-foreground">Self-being</span>
                                </div>
                            </div>

                            <Link href="/contact">
                                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base">
                                    Start Your Free Trial
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Right - Duty Hour Overview Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-foreground">Duty Hour Overview</h3>
                                <span className="text-sm text-teal-600 font-medium">October 16/17</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                    <span className="text-sm font-medium text-foreground">Status</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Compliant</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                                    <span className="text-sm font-medium text-foreground">Location</span>
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">At Work</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <span className="text-sm font-medium text-foreground">Med 3rd</span>
                                    <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">Call week 1 Oct</span>
                                </div>
                            </div>

                            {/* Circular Progress Placeholder */}
                            <div className="mt-8 flex justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 rounded-full border-8 border-teal-200"></div>
                                    <div className="absolute inset-0 rounded-full border-8 border-teal-600 border-t-transparent border-r-transparent transform rotate-45"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-foreground">58%</div>
                                            <div className="text-xs text-muted-foreground">Progress</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Security & Our Values Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-sm text-muted-foreground mb-3">Security & Compliance</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Accreditation-Grade Security from Day One
                        </h2>
                        <p className="text-base text-muted-foreground max-w-4xl">
                            Built with healthcare-grade safeguards in programs, trainees, and admins can trust how sales to collected, stored, and accessed.
                        </p>
                    </motion.div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-foreground mb-8">Our Values</h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {securityValues.map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-teal-500 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-teal-500 text-white flex items-center justify-center mb-4">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-base font-bold text-foreground mb-3">
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story Timeline */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-sm text-muted-foreground mb-3">Our Story</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            From Manual Documentation to Invisible Tracking
                        </h2>
                        <p className="text-base text-muted-foreground max-w-4xl">
                            The Duty Hour App was born out of frustrations with outdated, time-consuming, labor-intensive methods; tracking and the tedious choice of manual duty hour documentation. In 2121, after 16 years working inside mandatory programs, Loss Mountain duty-hour accreditation track a solution: the Duty-Hour App.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-6">
                                    <div className="bg-teal-50 rounded-lg p-6">
                                        <h4 className="text-lg font-bold text-teal-600 mb-2">{item.year}</h4>
                                        <p className="text-sm text-foreground font-medium mb-2">{item.title}</p>
                                        {item.description && (
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission, Vision & Values */}
            <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <p className="text-sm text-muted-foreground mb-3">Mission, Vision & Values</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            What Guides the Duty Hour App
                        </h2>
                    </motion.div>

                    {/* Mission & Vision */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border-2 border-teal-500"
                        >
                            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-teal-600 mb-4">Mission</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We empower physicians education programs and their residents health educations through automated tracking systems that truly respect reducing workforce administrative shift workload engaged and being their are ensure the highest standards of patient care and working hours.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border-2 border-orange-500"
                        >
                            <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">Vision</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                A health care ecosystem in which every physician-in-training is reimbursed, supervised, and equipped in state-level from GME duty hour compliance is seamless, data-driven solution have time to attend learning career safe, expanded can decide never times ting to attend learning careers work, expanded candidates and produce workflow reduces and labour optimal earn to the communities.
                            </p>
                        </motion.div>
                    </div>

                    {/* Values Grid */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h3>
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
                                    className={`p-6 rounded-2xl bg-white border-2 ${value.color === 'orange' ? 'border-orange-500' : 'border-teal-500'
                                        } hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`w-14 h-14 rounded-lg ${value.color === 'orange' ? 'bg-orange-500' : 'bg-teal-500'
                                        } text-white flex items-center justify-center mb-4`}>
                                        {value.icon}
                                    </div>
                                    <h4 className={`text-base font-bold mb-3 ${value.color === 'orange' ? 'text-orange-600' : 'text-teal-600'
                                        }`}>
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
