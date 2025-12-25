"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "./ui/Icon";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Waitlist() {
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
              className="px-8 py-4 rounded-full bg-accent-lime-button text-black font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-glow-hover active:scale-95 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
              {status !== "loading" && <Icon name="arrow-right" size={18} />}
            </motion.button>
          </motion.form>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-sm ${
                status === "success" ? "text-accent-lime" : "text-red-400"
              }`}
            >
              {message}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

