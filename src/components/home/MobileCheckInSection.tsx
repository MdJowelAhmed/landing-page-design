"use client";

import { motion } from "framer-motion";

export default function MobileCheckInSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
                        Your Office, In Their Pocket. Secure
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0D9488] mt-2">
                        Mobile Check-In
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="text-4xl font-bold text-[#1E293B]">12.0k+</div>
                            <div className="text-sm text-[#64748B]">Employees Managed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#1E293B]">42.0k+</div>
                            <div className="text-sm text-[#64748B]">Employee Overview</div>
                        </div>
                    </motion.div>

                    {/* Right - Phone Mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative flex gap-4">
                            {/* Phone 1 - Weekly Reports */}
                            <div className="w-48 h-96 bg-[#1E293B] rounded-[28px] p-1.5 shadow-xl">
                                <div className="w-full h-full bg-white rounded-[22px] overflow-hidden p-3">
                                    <div className="text-[10px] text-[#64748B] mb-2">9:41</div>
                                    <div className="text-sm font-semibold text-[#1E293B] mb-3">Weekly Reports</div>

                                    {/* Pie Chart */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-20 h-20">
                                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                                                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#0D9488" strokeWidth="3" strokeDasharray="60 40" />
                                                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#EA580C" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-60" />
                                                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#64748B" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="-85" />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-[8px] text-[#64748B]">Pie</span>
                                            </div>
                                        </div>
                                        <div className="text-[8px] space-y-1">
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#0D9488]" />
                                                <span>Clinical</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                                                <span>Internal Medicine</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#64748B]" />
                                                <span>On-call</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-[10px]">
                                        <div>
                                            <span className="text-[#64748B]">Current Week Present</span>
                                            <div className="font-bold text-[#1E293B]">5 Days</div>
                                        </div>
                                        <div>
                                            <span className="text-[#64748B]">Current Week Absent</span>
                                            <div className="font-bold text-[#1E293B]">1 Days</div>
                                        </div>
                                        <div>
                                            <span className="text-[#64748B]">Current Week Holiday</span>
                                            <div className="font-bold text-[#1E293B]">0 Days</div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="flex justify-around items-center text-[8px]">
                                            {['Home', 'Schedule', 'Reports', 'Profile'].map((item, i) => (
                                                <div key={item} className={`text-center ${i === 2 ? 'text-[#0D9488]' : 'text-[#64748B]'}`}>
                                                    <div className={`w-4 h-4 mx-auto mb-0.5 rounded ${i === 2 ? 'bg-[#0D9488]' : 'bg-gray-200'}`} />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone 2 - Dashboard */}
                            <div className="w-52 h-[420px] bg-[#1E293B] rounded-[32px] p-1.5 shadow-2xl -mt-4">
                                <div className="w-full h-full bg-white rounded-[26px] overflow-hidden p-3">
                                    {/* Header */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-[#0D9488] flex items-center justify-center">
                                            <span className="text-white text-[10px] font-bold">M</span>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-[#1E293B]">Hello Mark</div>
                                            <div className="text-[10px] text-green-500 flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                Internal Medicine
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Card */}
                                    <div className="bg-[#F8F6F3] rounded-xl p-3 mb-3">
                                        <div className="text-xs font-semibold text-[#1E293B] mb-2">Today&apos;s Status</div>
                                        <div className="grid grid-cols-2 gap-2 text-[9px]">
                                            <div>
                                                <span className="text-[#64748B]">Status: </span>
                                                <span className="text-green-600 font-medium">Check IN</span>
                                            </div>
                                            <div>
                                                <span className="text-[#64748B]">Today Time: </span>
                                                <span className="font-medium">8:30 Min</span>
                                            </div>
                                            <div>
                                                <span className="text-[#64748B]">WiFi: </span>
                                                <span className="text-green-600 font-medium">Connected</span>
                                            </div>
                                            <div>
                                                <span className="text-[#64748B]">Geofencing: </span>
                                                <span className="text-green-600 font-medium">Active</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Analytics */}
                                    <div className="bg-[#F8F6F3] rounded-xl p-3">
                                        <div className="text-xs font-semibold text-[#1E293B] mb-2">This Week&apos;s Analytics</div>
                                        <div className="flex items-end justify-between h-16 gap-0.5">
                                            {[40, 60, 30, 80, 50, 70, 90].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-gradient-to-t from-[#0D9488] to-[#14B8A6] rounded-t"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex justify-between text-[7px] text-[#64748B] mt-1">
                                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                                <span key={d}>{d}</span>
                                            ))}
                                        </div>
                                        <div className="text-center mt-2">
                                            <span className="text-[9px] text-[#0D9488] font-medium">See Full Details</span>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="flex justify-around items-center bg-white rounded-full py-1.5 shadow border border-gray-50">
                                            {['Home', 'Schedule', 'Reports', 'Profile'].map((item, i) => (
                                                <div key={item} className={`text-center text-[7px] ${i === 0 ? 'text-[#0D9488]' : 'text-[#64748B]'}`}>
                                                    <div className={`w-3 h-3 mx-auto mb-0.5 rounded-full ${i === 0 ? 'bg-[#0D9488]' : 'bg-gray-200'}`} />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 max-w-2xl"
                >
                    <p className="text-sm text-[#64748B] leading-relaxed">
                        The employee experience is seamless. Our intuitive mobile app manages secure, dual-factor authentication (geo-fencing + Wi-Fi) on the go, ensuring accurate and hassle-free attendance logging every time.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        {/* App Store Button */}
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E] transition-colors"
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
                            href="#"
                            className="inline-flex items-center px-4 py-2 bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E] transition-colors"
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
                </motion.div>
            </div>
        </section>
    );
}
