"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HRDashboardSection() {
    return (
        <section className="lg:py-20 py-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-end max-w-xl  "
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic text-[#0D9488]">
                        Effortless HR
                    </h2>

                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-4 relative">
                    {/* Left - Description & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:space-y-6 space-y-2 col-span-5"
                    >
                        <div>

                            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E293B] lg:mt-6 mt-2">
                                Easy Setup
                            </h3>
                            <p className="text-xl  lg:ml-20 ml-10 text-[#1E293B] lg:mt-6 mt-2">
                                Enrol Your Institution Today
                            </p>
                        </div>
                        <p className="text-sm text-[#0B0E0F] leading-relaxed lg:mt-12 mt-4 w-full lg:max-w-3xl text-justify lg:text-left ">
                            Gain complete administrative control from your centralized dashboard. Easily define geo-fencing and Wi-Fi credentials to achieve fraud-proof attendance data and total payroll integrity. Manage all subscription tiers and effortlessly onboard employees directly within the command center, allowing you to focus entirely on scaling your business.
                        </p>

                        <Link href="/contact" className="mx-auto ml-20 hidden lg:block">
                            <Button className="bg-[#0D9488] hover:bg-[#0F766E]  text-white rounded-lg px-8 py-6 text-base shadow-lg shadow-teal-500/20">
                                Start Your Free Trial
                            </Button>
                        </Link>

                        <div className="block lg:hidden">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <div className="text-2xl font-semibold text-center text-[#1E293B]">42%</div>
                                    <div className="text-sm text-[#64748B]">Setup Time Reduced</div>
                                </div>
                                <div className="">
                                    <div className="text-2xl font-semibold text-center text-[#1E293B]">31%</div>
                                    <div className="text-sm text-[#64748B]">Payroll Fraud Risk</div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-6 pt-8 relative hidden lg:block">
                            <div className="absolute top-10 left-40">
                                <div className="text-2xl font-semibold text-center text-[#1E293B]">42%</div>
                                <div className="text-sm text-[#64748B]">Setup Time Reduced</div>
                            </div>
                            <div className="absolute top-40 left-60">
                                <div className="text-2xl font-semibold text-center text-[#1E293B]">31%</div>
                                <div className="text-sm text-[#64748B]">Payroll Fraud Risk</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Laptop Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative col-span-7"
                    >
                        {/* Laptop Frame */}
                        <div className="w-full h-[350px] md:w-[650px] md:h-[500px] lg:w-[560px] lg:h-[600px] xl:w-[800px] xl:h-[700px] relative">
                            <Image src="/assets/laptop.png" alt="HR Dashboard" width={1000} height={800} className="object-cover w-full h-full absolute lg:-left-16  xl:-left-48 lg:bottom-12 xl:bottom-20" />
                        </div>
                    </motion.div>


                    <Link href="/contact" className="mx-auto ml-20 md:ml-60 md:mt-6 mt-1  block lg:hidden ">
                            <Button className="bg-[#0D9488] hover:bg-[#0F766E]  text-white rounded-lg px-8 py-6 text-base shadow-lg shadow-teal-500/20">
                                Start Your Free Trial
                            </Button>
                        </Link>
                </div>
            </div>
        </section>
    );
}
