"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const steps = [
    {
        number: "01",
        title: "Take a Photo",
        description:
            "Snap a picture of your item with your phone. That's it.",
    },
    {
        number: "02",
        title: "AI Generates Listing",
        description:
            "Our AI analyzes your photo and creates a compelling eBay listing with title, description, and suggested pricing.",
    },
    {
        number: "03",
        title: "Publish & Sell",
        description:
            "Review, tweak if needed, and publish directly to eBay in one click.",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative z-10 pt-8 pb-8 md:pt-24 md:pb-12">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
                    >
                        Sell faster with AI-powered listings that write themselves
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            whileHover={{ y: -4, borderColor: "#1C1C1C" }}
                            className="p-6 md:p-8 rounded-[20px] border border-border-dark bg-[#141414] shadow-card transition-all"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-accent-lime mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3">
                                {step.title}
                            </h3>
                            <p className="text-text-muted leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

