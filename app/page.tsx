import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { DemoSection } from "@/components/demo-section";
import { FeatureSections } from "@/components/feature-sections";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DemoSection />
      <FeatureSections />
      <CTASection />
      <Footer />
    </main>
  );
}
