"use client";

import { motion } from "framer-motion";
import { Icon } from "./ui/Icon";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Waitlist() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Be the First to Know
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto"
          >
            Join the waitlist and get early access when we launch. No spam, just launch updates.
          </motion.p>

          <motion.form
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
              className="flex-1 px-6 py-4 rounded-full bg-[#141414] border border-border-dark text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-transparent transition-all"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 rounded-full bg-accent-lime-button text-black font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-glow-hover active:scale-95 transition-all whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
              <Icon name="arrow-right" size={18} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

