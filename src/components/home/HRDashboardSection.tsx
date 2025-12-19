"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-[#0D9488]">
                        Effortless HR
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mt-2">
                        Easy Setup
                    </h3>
                    <p className="text-xl text-[#1E293B] mt-2">
                        Enrol Your Institution Today
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Description & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-sm text-[#64748B] leading-relaxed">
                            Gain complete administrative control from your centralized dashboard. Easily define geo-fencing and Wi-Fi credentials to achieve fraud-proof attendance data and total payroll integrity. Manage all subscription tiers and effortlessly onboard employees directly within the command center, allowing you to focus entirely on scaling your business.
                        </p>

                        <Link href="/contact">
                            <Button className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-full px-8 py-6 text-base shadow-lg shadow-teal-500/20">
                                Start Your Free Trial
                            </Button>
                        </Link>

                        {/* Stats */}
                        <div className="space-y-6 pt-8">
                            <div>
                                <div className="text-4xl font-bold text-[#1E293B]">42%</div>
                                <div className="text-sm text-[#64748B]">Setup Time Reduced</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#1E293B]">31%</div>
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
                        className="relative"
                    >
                        {/* Laptop Frame */}
                        <div className="relative">
                            {/* Screen */}
                            <div className="bg-[#1E293B] rounded-t-xl p-2 shadow-2xl">
                                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                                    {/* Dashboard UI */}
                                    <div className="p-4 h-full">
                                        {/* Top Bar */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded bg-[#0D9488] flex items-center justify-center">
                                                    <span className="text-white text-[8px] font-bold">DH</span>
                                                </div>
                                                <span className="text-[10px] font-semibold text-[#1E293B]">Dashboard / Start</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-[#F97316]" />
                                                <span className="text-[10px] text-[#64748B]">Admin</span>
                                            </div>
                                        </div>

                                        {/* Stats Cards Row */}
                                        <div className="grid grid-cols-4 gap-2 mb-4">
                                            {[
                                                { label: 'Total Employees', value: '1,234', color: 'bg-blue-500' },
                                                { label: 'Present Today', value: '1,180', color: 'bg-green-500' },
                                                { label: 'On Leave', value: '42', color: 'bg-yellow-500' },
                                                { label: 'Late Arrivals', value: '12', color: 'bg-red-500' },
                                            ].map((stat, i) => (
                                                <div key={i} className="bg-[#F8F6F3] rounded-lg p-2">
                                                    <div className={`w-4 h-4 rounded ${stat.color} mb-1`} />
                                                    <div className="text-[10px] font-bold text-[#1E293B]">{stat.value}</div>
                                                    <div className="text-[8px] text-[#64748B]">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Chart Area */}
                                        <div className="grid grid-cols-3 gap-2">
                                            {/* Bar Chart */}
                                            <div className="col-span-2 bg-[#F8F6F3] rounded-lg p-3">
                                                <div className="text-[10px] font-semibold text-[#1E293B] mb-2">Weekly Attendance</div>
                                                <div className="flex items-end justify-between h-16 gap-1">
                                                    {[65, 80, 45, 90, 70, 85, 75].map((h, i) => (
                                                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                                            <div
                                                                className="w-full bg-gradient-to-t from-[#0D9488] to-[#14B8A6] rounded-t"
                                                                style={{ height: `${h}%` }}
                                                            />
                                                            <span className="text-[6px] text-[#64748B]">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Pie Chart */}
                                            <div className="bg-[#F8F6F3] rounded-lg p-3">
                                                <div className="text-[10px] font-semibold text-[#1E293B] mb-2">Departments</div>
                                                <div className="relative w-16 h-16 mx-auto">
                                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                                                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#0D9488" strokeWidth="4" strokeDasharray="50 50" />
                                                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#EA580C" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="-50" />
                                                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#64748B" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-80" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Laptop Base */}
                            <div className="bg-gradient-to-b from-[#94A3B8] to-[#64748B] h-3 rounded-b-lg mx-4" />
                            <div className="bg-[#64748B] h-1 rounded-b mx-16" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
