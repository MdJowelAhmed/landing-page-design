"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", location: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header Section */}
            <section className="bg-gradient-to-b from-teal-50 to-transparent pt-24 pb-12 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
                    >
                        Our team is ready to answer your questions about security, integration, and subscription tiers. Contact us today to schedule a personalized demo and see how easily you can achieve guaranteed attendance accuracy and total payroll integrity.
                    </motion.p>
                </div>
            </section>

            {/* Contact Card Section */}
            <section className="pb-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
                    >
                        {/* Left Panel - Contact Info */}
                        <div className="lg:w-[40%] bg-gradient-to-br from-[#388E96] to-[#2C7A82] p-8 md:p-12 text-white relative overflow-hidden">
                            {/* Decorative Circle */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full translate-x-12 translate-y-12" />

                            <div className="relative z-10 h-full flex flex-col">
                                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                <p className="text-teal-50 text-sm mb-12">
                                    Contact us for a demo today. Eliminate payroll discrepancies and save up to 40% in admin verification time with our integrated system.
                                </p>

                                <div className="space-y-8 mt-auto lg:mt-0">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <svg className="w-5 h-5 text-teal-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-teal-50 hover:text-white transition-colors cursor-pointer">+123456789</span>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <svg className="w-5 h-5 text-teal-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <a href="mailto:example@gmail.com" className="text-teal-50 hover:text-white transition-colors">example@gmail.com</a>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <svg className="w-5 h-5 text-teal-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-teal-50">example location</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Form */}
                        <div className="lg:w-[60%] p-8 md:p-12 bg-white relative">
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-600">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 mb-6">Thanks for reaching out! We'll allow 24-48 hours for a response.</p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        className="bg-[#388E96] hover:bg-[#2C7A82] text-white"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Sabbir Ahmed"
                                                className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder:text-gray-300 focus:border-[#388E96] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Your E-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Sabbir Ahmed"
                                                className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder:text-gray-300 focus:border-[#388E96] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Your Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Sabbir Ahmed"
                                                className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder:text-gray-300 focus:border-[#388E96] focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="location" className="block text-sm font-semibold text-gray-700">Your Location</label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                placeholder="Sabbir Ahmed"
                                                className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder:text-gray-300 focus:border-[#388E96] focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Your Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Sabbir Ahmed"
                                            className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder:text-gray-300 focus:border-[#388E96] focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write Your Message Here"
                                            rows={3}
                                            className="w-full border-b border-gray-200 py-3 text-gray-800 placeholder:text-gray-300 focus:border-[#388E96] focus:outline-none transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-[#388E96] hover:bg-[#2C7A82] text-white px-8 py-6 text-base rounded-xl"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
