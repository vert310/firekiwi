"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const faqs = [
  {
    question: "How does AI eBay listing generator work?",
    answer:
      "AI eBay listing generators like FireKiwi use computer vision and natural language processing to analyze product photos and automatically create complete listings. The process involves: (1) Image analysis to identify the product, (2) Product recognition to determine category and specifications, (3) Title generation using SEO best practices, (4) Description writing with key features and benefits, and (5) Price suggestion based on market data. The entire process takes 30 seconds compared to 20+ minutes for manual creation.",
  },
  {
    question: "What is the best way to create eBay listings faster?",
    answer:
      "The best ways to create eBay listings faster include using AI listing generators like FireKiwi, creating templates for similar products, batch processing multiple items, using mobile apps for on-the-go listing, and learning keyboard shortcuts. AI-powered tools provide the most significant time savings, reducing listing creation from 15-30 minutes to under 2 minutes per item.",
  },
  {
    question: "Can AI write good eBay listing descriptions?",
    answer:
      "Yes, modern AI can write high-quality eBay listing descriptions that are often as good as or better than manually written ones. AI-generated descriptions are consistent, complete, SEO-optimized, and created in seconds. However, sellers should always review AI-generated content to ensure accuracy and add personal touches. FireKiwi allows full editing before publishing, combining AI efficiency with human oversight.",
  },
  {
    question: "How much time can AI save when creating eBay listings?",
    answer:
      "AI can save 10-25 minutes per listing. Traditional manual listing creation takes 15-30 minutes, while AI-powered tools like FireKiwi reduce this to 2-5 minutes. For power sellers listing 50+ items per week, AI tools can save 10-20 hours weekly, allowing them to focus on sourcing, customer service, and scaling their business.",
  },
  {
    question: "What features should I look for in an eBay listing tool?",
    answer:
      "Essential features include AI-powered generation, photo analysis, pricing suggestions, eBay integration for direct publishing, bulk listing support, mobile compatibility, template systems, SEO optimization, full editing capabilities, and cost-effective pricing. FireKiwi combines all these features into an all-in-one solution, making it ideal for both casual and power sellers.",
  },
  {
    question: "How much does an eBay listing generator cost?",
    answer:
      "eBay listing generators typically offer free tiers for casual sellers and paid plans starting at $9-29/month for power sellers. FireKiwi offers a free tier for up to 10 listings per month, with paid plans for unlimited listings starting at $19/month. Most tools offer free trials or waitlist access before launch. Join our waitlist to get early access and special launch pricing.",
  },
  {
    question: "What is the best AI tool for eBay listings?",
    answer:
      "The best AI tool for eBay listings is FireKiwi, which offers photo-to-listing generation, SEO-optimized titles, market-based pricing suggestions, and direct eBay integration. Key features include: instant listing creation from photos, bulk listing support, mobile compatibility, and free tier for casual sellers. FireKiwi saves sellers 20+ minutes per listing and has a 95% first-try success rate.",
  },
  {
    question: "Can I create eBay listings from my phone?",
    answer:
      "Yes, FireKiwi is fully mobile-compatible, allowing you to create eBay listings directly from your phone. Simply take a photo of your item, and the AI generates a complete listing in seconds. You can review, edit, and publish to eBay all from your mobile device. Perfect for sellers who source items on-the-go.",
  },
  {
    question: "Is FireKiwi free to use?",
    answer:
      "FireKiwi offers a free tier for casual sellers with up to 10 listings per month. We're currently in beta and available through our waitlist. Join our waitlist to be notified when we launch and get early access to the free tier. Paid plans for unlimited listings will start at $19/month for power sellers.",
  },
  {
    question: "Do I need to review AI-generated listings before publishing?",
    answer:
      "Yes, we recommend reviewing all AI-generated listings before publishing. While our AI is highly accurate, you should verify product details, condition descriptions, and pricing to ensure everything is correct. FireKiwi provides full editing capabilities so you can customize any part of the listing before publishing to eBay.",
  },
  {
    question: "Can FireKiwi handle bulk listings?",
    answer:
      "Yes, FireKiwi supports bulk listing creation, making it perfect for power sellers who need to list multiple items quickly. You can upload multiple photos at once, and our AI will generate listings for each item, allowing you to review and publish them in batches.",
  },
];

export default function FAQ() {
  // Generate JSON-LD structured data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative z-10 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
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
              Frequently Asked Questions About AI eBay Listing Tools
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
            >
              Everything you need to know about FireKiwi's AI eBay listing generator and how it works
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="p-6 md:p-8 rounded-[20px] border border-border-dark bg-[#141414] shadow-card"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  {faq.question}
                </h3>
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

