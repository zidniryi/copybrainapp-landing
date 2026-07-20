import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { DemoSection } from "@/components/sections/demo-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { DownloadSection } from "@/components/sections/download-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TimelineDemo } from "@/components/sections/timeline-demo";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <Hero />
        <DemoSection />
        <ShowcaseSection />
        <DownloadSection />
        <FeaturesSection />
        <TimelineDemo />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
