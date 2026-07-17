import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/glow";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Glow className="mask-fade-radial opacity-70" />
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Stop losing what you copy.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base text-foreground/60 sm:text-lg">
            Download CopyBrain and start building your searchable clipboard
            timeline today. Free, offline, and ready in under a minute.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-primary-foreground shadow-[0_8px_30px_-8px_rgba(79,70,229,0.7)] hover:opacity-90"
            >
              <Link href="/download">
                Download Now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
            >
              <Link href="/#features">View Features</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
