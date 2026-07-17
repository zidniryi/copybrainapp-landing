import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DownloadSection } from "@/components/sections/download-section";
import { StatsSection } from "@/components/sections/stats-section";
import { Glow } from "@/components/glow";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download CopyBrain for Windows, macOS, or Linux. Free clipboard timeline with unlimited history, instant search, and offline-first privacy.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48">
          <Glow className="mask-fade-radial" />
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70">
                Free download
              </span>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Get CopyBrain for your desktop.
              </h1>
              <p className="mt-5 text-balance text-lg leading-relaxed text-foreground/60">
                One app, every platform. Pick your operating system below —
                installation takes less than a minute.
              </p>
            </Reveal>
          </div>
        </section>

        <DownloadSection showHeading={false} className="pt-0" />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
