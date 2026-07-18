import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { DemoVideoPlayer } from "@/components/demo-video-player";

export function DemoSection() {
  return (
    <section id="demo" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Demo"
          title="See CopyBrain in action."
          description="A quick look at the clipboard timeline, instant search, and how naturally it fits into your workflow."
          className="mb-12"
        />
        <Reveal>
          <DemoVideoPlayer
            src="/video/demo.mp4"
            poster="/video/demo-poster.jpg"
            aspectRatio="960 / 628"
            className="mx-auto max-w-4xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
