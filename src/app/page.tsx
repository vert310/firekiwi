import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import { Icon } from "@/components/ui/Icon";

export default function Home() {
  return (
    <main className="relative min-h-screen">
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
      <HowItWorks />
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

