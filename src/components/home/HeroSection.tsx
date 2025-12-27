"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaAnglesDown } from "react-icons/fa6";


export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[]">
            {/* Decorative top bar */}
            <div className="absolute top-0 right-0 w-1/2 h-2 " />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left order-2 "

                    >
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl  tracking-tight leading-tight lg:mb-16">
                            <span className="text-[#1E293B]">Your Workforce</span>
                            <br />
                            <span className="text-[#0D9488] font-bold ml-10 lg:ml-16 my-4">Your Control</span>
                            <br />
                            <span className="text-[#1E293B]">Perfected Attendance</span>
                        </h1>

                        <div className="flex justify-between items-center gap-5 ">
                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-8 flex flex-wrap items-center gap-4 bg-[#FFFFFF94] p-4 py-6 rounded-md shadow-lg "
                            >
                                {/* User Avatars */}
                                <div className="flex -space-x-3 ">
                                    <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (16).png" alt="Image" height={100} width={100} />
                                    <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (17).png" alt="Image" height={100} width={100} />
                                    <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (21).png" alt="Image" height={100} width={100} />
                                    <Image className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold" src="/assets/Image (22).png" alt="Image" height={100} width={100} />
                                </div>
                                <Link href="/contact">
                                    <Button className="bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-lg px-8 py-6 text-base shadow-lg shadow-teal-500/20">
                                        Start Your Free Trial
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Subheading */}
                            {/* <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-6 text-sm text-[#64748B]"
                            >
                                Reliable Data. Verified Accuracy.
                            </motion.p> */}



                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#1E293B]">34.0k+</div>
                                <div className="text-xs text-[#64748B]">Attendance Records Processed</div>
                            </div>
                        </div>



                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-8 flex flex-wrap gap-8 justify-end"
                        >

                            <div
                                className="w-[350px] flex justify-between items-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1E293B]">12.0k+</div>
                                    <div className="text-xs text-[#64748B]">Employees Managed</div>
                                </div>


                                {/* Learn More */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className=" gap-2 text-[#64748B] cursor-pointer hover:text-[#0D9488] transition-colors"
                                >

                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="bg-[#fff] rounded-full p-5 mb-5"
                                    >

                                        <FaAnglesDown className="w-8 h-8" />
                                    </motion.div>

                                    <span className="text-sm font-medium mt-4">Learn More</span>
                                </motion.div></div>
                        </motion.div>


                    </motion.div>

                    {/* Right Content - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-start order-1 "
                    >
                        {/* Phone Mockup */}
                        <div className="relative">
                            {/* Orange Phone Frame */}
                            <div className="relative w-[400px] sm:w-[450px] h-[550px] sm:h-[550px] lg:h-[600px]">
                                <div className="w-full h-full rounded-[32px] overflow-hidden">
                                    {/* Phone Screen Content */}
                                    <Image src="/hero.png" alt="Phone Screen" fill
                                    className="object-cover h-[550px] sm:h-[550px] lg:h-[500px]" />
                                </div>
                            </div>

                          
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}

                >
  <div className="mt-10 text-center lg:text-left  max-w-4xl">
                                <p className="text-sm text-[#64748B] leading-relaxed">
                                    Take command of your institution's attendance. The Duty Hour App provides business admins with a powerful HRM dashboard, enabled by geo-fenced and Wi-Fi-verified check-ins. Ensure every minute counts, manage employees effortlessly, and secure your operations with unparalleled accuracy.
                                </p>
                            </div>
                </motion.div>
            </div>
        </section>
    );
}
