"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                    <h2 className="text-3xl sm:text-4xl font-bold text-accent">
                        Your Office, In Their Pocket. Secure
                    </h2>
                    <h3 className="text-2xl sm:text-3xl text-center max-w-2xl font-bold text-accent-foreground mt-2">
                        Mobile Check-In
                    </h3>
                </motion.div>

                <div className=" ">


                    {/* Right - Phone Mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="w-[1000px] h-[800px] relative">  <Image src="/assets/mobile-check.png" alt="Mobile Check-in" width={1000} height={800} className="object-contain w-full h-full" /></div>
                    </motion.div>


                    {/* Left - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex justify-between  items-center">
                            <div className="relative">
                                <div className="absolute bottom-36">
                                    <div className="text-4xl font-bold text-accent">12.0k+</div>
                                    <div className="text-sm text-accent">Employees Managed</div>
                                </div>
                                <div className="absolute left-16">
                                    <div className="text-4xl font-bold text-accent">42.0k+</div>
                                    <div className="text-sm text-accent">Employee Overview</div>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Bottom Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className=""
                                >
                                    <div className=" max-w-xl ">
                                        <p className="text-sm text-accent leading-relaxed">
                                        The employee experience is seamless. Our intuitive mobile app manages secure, dual-factor authentication (geo-fencing + Wi-Fi) on the go, ensuring accurate and hassle-free attendance logging every time.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        {/* App Store Button */}
                                        <a
                                            href="#"
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
                                            href="#"
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
                            </div>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
