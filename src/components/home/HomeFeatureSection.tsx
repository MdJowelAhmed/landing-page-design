"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeFeatureSection() {
    return (
        <section className=" overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-12 gap-8 ">

                    {/* Left Column - Stats & Text */}
                    <div className="lg:col-span-3 relative z-20 space-y-6">


                        {/* Main Heading Group */}
                        <div className=" flex flex-col items-center mt-10">
                            <h2 className="text-3xl font-medium text-accent">Total Control</h2>

                        </div>
                        <div className="flex justify-between w-[500px] items-center  ">
                            {/* Top Stat */}
                            <div className="flex flex-col">
                                <h3 className="text-4xl font-bold text-accent">12.0k+</h3>
                                <p className="text-accent  text-sm">Employees Managed</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl font-bold text-accent-foreground">Instant Setup</h2>
                                <h2 className="text-2xl font-bold text-accent">Zero Attendance Fraud</h2>
                            </div>
                        </div>

                        <div className="flex justify-between w-[570px] items-center ml-20  gap-10">
                            {/* Bottom Stat */}
                            <div className="flex flex-col">
                                <h3 className="text-4xl font-bold text-accent">42.0k+</h3>
                                <p className="text-accent  text-sm">Employee Overview</p>
                            </div>

                            {/* Text Content inside Dark Area */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className=" text-sm leading-relaxed max-w-2xl mb-8 text-accent text-justify"
                            >
                                Your subscribed HRM dashboard is the command center for your business.
                                Easily define your institution&apos;s geo-fenced location and Wi-Fi credentials,
                                onboard employees, and manage subscription packages. Gain immediate access
                                to highly accurate, verified attendance data, ensuring payroll integrity.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Column - Dashboard & Dark Background */}
                    <div className="lg:col-span-8 relative">


                        {/* Dashboard Mockup Layer */}
                        <div className="relative z-10 p-4 md:pl-12 md:py-8 md:pr-0">


                            {/* Dashboard Image Mockup */}
                            <Image src="/assets/dashboard.png" alt="Dashboard" width={800} height={400} />
                            {/* CTA Button "Cutout" */}

                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-primary-foreground text-white px-5 h-12 font-bold rounded-lg shadow-lg absolute bottom-12 right-12  md:-right-2"
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
