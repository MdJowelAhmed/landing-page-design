"use client";

import { motion } from "framer-motion";

const values = [
    {
        icon: "💡",
        title: "Innovation",
        description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
        icon: "🤝",
        title: "Collaboration",
        description: "We work closely with our clients, treating their success as our own.",
    },
    {
        icon: "⭐",
        title: "Excellence",
        description: "We maintain the highest standards in everything we do, from code to customer service.",
    },
    {
        icon: "🔒",
        title: "Integrity",
        description: "We operate with transparency and honesty in all our business relationships.",
    },
];

const team = [
    {
        name: "Alex Johnson",
        role: "CEO & Founder",
        image: "AJ",
    },
    {
        name: "Sarah Chen",
        role: "CTO",
        image: "SC",
    },
    {
        name: "Michael Park",
        role: "Design Director",
        image: "MP",
    },
    {
        name: "Emily Davis",
        role: "Lead Developer",
        image: "ED",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutContent() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-24 relative">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                            About Us
                        </span>
                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <span className="text-foreground">We Are </span>
                            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                Brand
                            </span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            A passionate team of innovators, designers, and developers dedicated to transforming
                            businesses through cutting-edge digital solutions. Since 2014, we&apos;ve been helping
                            companies of all sizes achieve their digital ambitions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gradient-to-b from-transparent via-accent/20 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-2xl mb-4">
                                🎯
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                            <p className="text-muted-foreground">
                                To empower businesses worldwide by delivering innovative, scalable, and user-centric
                                digital solutions that drive growth and create lasting value. We believe technology
                                should be accessible, intuitive, and transformative.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl mb-4">
                                🔭
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                            <p className="text-muted-foreground">
                                To be the global leader in digital innovation, recognized for our commitment to
                                excellence, creativity, and the positive impact we create for our clients and
                                communities. We envision a world where every business can thrive digitally.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Our Core{" "}
                            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                                Values
                            </span>
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do and define who we are.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariants}
                                className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-violet-500/50 transition-all duration-300 text-center group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Meet Our{" "}
                            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                                Team
                            </span>
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            The talented individuals who make the magic happen.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                                    {member.image}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
