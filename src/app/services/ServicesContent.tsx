"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
        features: [
            "Custom website development",
            "E-commerce solutions",
            "Progressive Web Apps (PWA)",
            "CMS integration",
            "API development",
        ],
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        features: [
            "iOS app development",
            "Android app development",
            "Cross-platform (React Native)",
            "App maintenance & support",
            "App Store optimization",
        ],
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        title: "UI/UX Design",
        description: "Beautiful, intuitive designs that captivate users and drive engagement.",
        features: [
            "User research & analysis",
            "Wireframing & prototyping",
            "Visual design",
            "Interaction design",
            "Design systems",
        ],
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and services for modern digital businesses.",
        features: [
            "Cloud migration",
            "AWS / Azure / GCP",
            "DevOps & CI/CD",
            "Serverless architecture",
            "Cloud security",
        ],
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Digital Marketing",
        description: "Data-driven marketing strategies to grow your online presence and reach.",
        features: [
            "SEO optimization",
            "Social media marketing",
            "Content marketing",
            "PPC advertising",
            "Analytics & reporting",
        ],
        gradient: "from-orange-500 to-amber-500",
    },
    {
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets.",
        features: [
            "Security audits",
            "Penetration testing",
            "Compliance consulting",
            "Incident response",
            "Security training",
        ],
        gradient: "from-green-500 to-emerald-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesContent() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-24 relative">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            Our Services
                        </span>
                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <span className="text-foreground">Solutions That </span>
                            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                Transform
                            </span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            From concept to deployment, we offer comprehensive digital services to help your
                            business thrive in the modern digital landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service) => (
                            <motion.div key={service.title} variants={cardVariants}>
                                <Card className="h-full bg-card/50 border-border/50 hover:border-violet-500/50 transition-all duration-300 group overflow-hidden">
                                    <CardHeader>
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            {service.icon}
                                        </div>
                                        <CardTitle className="text-xl text-foreground group-hover:text-violet-400 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                    <svg className="w-4 h-4 mr-2 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Ready to Get{" "}
                            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                                Started?
                            </span>
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            Let&apos;s discuss how we can help transform your business with our digital solutions.
                        </p>
                        <Link href="/contact" className="inline-block mt-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-violet-500/25 px-8"
                            >
                                Contact Us Today
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
