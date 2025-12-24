"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/motion";

export default function Showcase() {
  return (
    <section className="relative z-10 pt-8 pb-8 md:pt-12 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative rounded-[20px] overflow-hidden border border-border-dark bg-[#141414] shadow-card"
        >
          <div className="relative w-full aspect-[16/10] md:aspect-video bg-gradient-to-br from-[#1C1C1C] to-[#0F0F0F]">
            <Image
              src="/images/showcase.jpg"
              alt="FireKiwi app showing AR interface with eBay listing for vintage camera"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

