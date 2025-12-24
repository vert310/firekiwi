"use client";

import { motion } from "framer-motion";
import { Icon } from "./ui/Icon";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative z-10 pt-24 pb-8 md:pt-32 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#1C1C1C] mb-8"
          >
            <Icon name="sparkles" size={14} className="text-accent-lime" />
            <span className="text-sm text-white">Coming Soon</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            Turn Photos into{" "}
            <span className="text-accent-lime">eBay</span>{" "}
            <span className="text-accent-lime">Listings</span> with AI
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-xl"
          >
            FireKiwi uses artificial intelligence to transform a single photo into a
            complete, optimized eBay listing in seconds. Snap, generate, and sell.
          </motion.p>

          <motion.form
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 mb-12"
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
              className="px-8 py-4 rounded-full bg-accent-lime-button text-black font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-glow-hover active:scale-95 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Notified
              <Icon name="arrow-right" size={18} />
            </motion.button>
          </motion.form>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-border-dark border border-border-dark flex items-center justify-center">
                <Icon name="camera" size={18} className="text-accent-lime" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Snap a Photo</div>
                <div className="text-xs text-text-muted">Quick & easy</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-border-dark border border-border-dark flex items-center justify-center">
                <Icon name="sparkles" size={18} className="text-accent-lime" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">AI Magic</div>
                <div className="text-xs text-text-muted">Instant listing</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

