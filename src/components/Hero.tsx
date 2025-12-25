"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "./ui/Icon";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! We'll notify you when we launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to submit. Please try again.");
    }
  };

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lime/10 border-2 border-accent-lime/40 mb-6"
            animate={{
              boxShadow: [
                "0 0 0px rgba(230, 255, 8, 0.4)",
                "0 0 20px rgba(230, 255, 8, 0.6)",
                "0 0 0px rgba(230, 255, 8, 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon name="sparkles" size={16} className="text-accent-lime" />
            <span className="text-sm font-semibold text-accent-lime">Coming Soon</span>
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
            className="text-lg md:text-xl text-text-muted mb-4 leading-relaxed max-w-xl"
          >
            FireKiwi uses artificial intelligence to transform a single photo into a
            complete, optimized eBay listing in seconds. Snap, generate, and sell.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base text-text-muted/80 mb-8 leading-relaxed max-w-xl italic"
          >
            Join the waitlist to be notified when we launch.
          </motion.p>

          <motion.form
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 mb-6"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              aria-label="Email address"
              className="flex-1 px-6 py-4 rounded-full bg-[#141414] border border-border-dark text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-transparent transition-all disabled:opacity-50"
            />
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 rounded-full bg-accent-lime-button text-black font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-glow-hover active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            >
              {status === "loading" ? "Joining Waitlist..." : "Join Waitlist"}
              {status !== "loading" && <Icon name="arrow-right" size={18} />}
            </motion.button>
          </motion.form>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 text-sm ${
                status === "success" ? "text-accent-lime" : "text-red-400"
              }`}
            >
              {message}
            </motion.div>
          )}

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

