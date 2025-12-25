import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import AdSense from "@/components/AdSense";
import { Icon } from "@/components/ui/Icon";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StructuredData />
      {/* Header */}
      <header className="relative z-20 pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3">
            <Icon name="logo" size={32} />
            <span className="text-xl font-semibold">FireKiwi</span>
          </div>
        </div>
      </header>

      <Hero />
      <Showcase />

      {/* AdSense Ad Unit - Replace 'YOUR_AD_SLOT_ID' with your actual ad slot ID from AdSense */}
      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AdSense
            adSlot="5752321795"
            adFormat="auto"
            className="text-center"
          />
        </div>
      </div>

      <HowItWorks />
      <FAQ />
      <Waitlist />

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border-dark">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-sm text-text-muted text-center">
            © FireKiwi
          </p>
        </div>
      </footer>
    </main>
  );
}

