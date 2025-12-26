"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HRDashboardSection() {
    return (
        <section className="py-20 bg-[#F8F6F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-end max-w-xl  "
                >
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-[#0D9488]">
                        Effortless HR
                    </h2>
                 
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                    {/* Left - Description & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 col-span-5"
                    >
                        <div>
                      
                               <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E293B] mt-6">
                        Easy Setup
                    </h3>
                    <p className="text-xl  ml-20 text-[#1E293B] mt-6">
                        Enrol Your Institution Today
                    </p>
                        </div>
                        <p className="text-sm text-[#0B0E0F] leading-relaxed mt-12 max-w-3xl">
                           Gain complete administrative control from your centralized dashboard. Easily define geo-fencing and Wi-Fi credentials to achieve fraud-proof attendance data and total payroll integrity. Manage all subscription tiers and effortlessly onboard employees directly within the command center, allowing you to focus entirely on scaling your business.
                        </p>

                        <Link href="/contact" className="mx-auto ml-20">
                            <Button className="bg-[#0D9488] hover:bg-[#0F766E]  text-white rounded-lg px-8 py-6 text-base shadow-lg shadow-teal-500/20">
                                Start Your Free Trial
                            </Button>
                        </Link>

                        {/* Stats */}
                        <div className="space-y-6 pt-8 relative">
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
                        <div className="w-[800px] h-[700px] relative">
                            <Image src="/assets/laptop.png" alt="HR Dashboard" width={1000} height={800} className="object-cover w-full h-full absolute -left-48 bottom-20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
