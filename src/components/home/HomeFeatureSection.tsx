"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomeFeatureSection() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column - Stats & Text */}
                    <div className="lg:col-span-4 relative z-20 space-y-12">
                        {/* Top Stat */}
                        <div className="flex flex-col">
                            <h3 className="text-4xl font-bold text-foreground">12.0k+</h3>
                            <p className="text-muted-foreground text-sm">Employees Managed</p>
                        </div>

                        {/* Main Heading Group */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-medium text-foreground">Total Control</h2>
                            <h2 className="text-4xl font-bold text-teal-600">Instant Setup</h2>
                            <h2 className="text-4xl font-bold text-foreground">Zero Attendance Fraud</h2>
                        </div>

                        {/* Bottom Stat */}
                        <div className="flex flex-col">
                            <h3 className="text-4xl font-bold text-foreground">42.0k+</h3>
                            <p className="text-muted-foreground text-sm">Employee Overview</p>
                        </div>
                    </div>

                    {/* Right Column - Dashboard & Dark Background */}
                    <div className="lg:col-span-8 relative">
                        {/* Dark Background Shape */}
                        <div className="absolute inset-0 bg-[#0F172A] rounded-[2.5rem] -mr-48 -z-10 h-[120%] -top-[10%] w-[130%]" />

                        {/* Decorative Pattern on Dark BG */}
                        <div className="absolute inset-0 -mr-48 -z-10 h-[120%] -top-[10%] w-[130%] opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        {/* Dashboard Mockup Layer */}
                        <div className="relative z-10 p-4 md:pl-12 md:py-8 md:pr-0">
                            {/* Text Content inside Dark Area */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-gray-300 text-sm leading-relaxed max-w-lg mb-8"
                            >
                                Your subscribed HRM dashboard is the command center for your business.
                                Easily define your institution&apos;s geo-fenced location and Wi-Fi credentials,
                                onboard employees, and manage subscription packages. Gain immediate access
                                to highly accurate, verified attendance data, ensuring payroll integrity.
                            </motion.p>

                            {/* Dashboard Image Mockup */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
                            >
                                {/* Placeholder for Dashboard Interface - Using a gradient/div structure to mimic the image */}
                                <div className="bg-[#1E293B] aspect-[16/10] w-full p-2 flex flex-col">
                                    {/* Mock Browser/App Header */}
                                    <div className="h-6 bg-slate-800 rounded-t-lg flex items-center px-4 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    {/* Mock Content */}
                                    <div className="flex-1 bg-slate-50 p-4 grid grid-cols-4 gap-4">
                                        <div className="col-span-1 bg-white shadow-sm rounded-lg p-2 space-y-2">
                                            <div className="h-2 w-1/2 bg-slate-200 rounded" />
                                            <div className="h-2 w-3/4 bg-slate-200 rounded" />
                                            <div className="h-2 w-2/3 bg-slate-200 rounded" />
                                        </div>
                                        <div className="col-span-3 space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-24 bg-white shadow-sm rounded-lg flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full border-4 border-teal-500/20 border-t-teal-500" />
                                                </div>
                                                <div className="h-24 bg-white shadow-sm rounded-lg p-2">
                                                    <div className="flex items-end justify-between h-full gap-1">
                                                        <div className="w-full bg-teal-500/20 h-[40%] rounded-t" />
                                                        <div className="w-full bg-teal-500/40 h-[70%] rounded-t" />
                                                        <div className="w-full bg-teal-500/60 h-[50%] rounded-t" />
                                                        <div className="w-full bg-teal-500 h-[80%] rounded-t" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-32 bg-white shadow-sm rounded-lg w-full" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA Button "Cutout" */}
                        <div className="absolute -bottom-12 right-12 md:right-auto md:-left-12 bg-background p-6 rounded-tr-[2rem] z-20">
                            <Button
                                size="lg"
                                className="bg-[#388E96] hover:bg-[#2C7A82] text-white px-8 h-14 text-lg rounded-xl shadow-lg"
                            >
                                Start Your Free Trial
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
