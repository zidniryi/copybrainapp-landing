import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Loved by people who copy a lot"
          title="Trusted across every kind of workflow."
          description="From developers to office managers, CopyBrain fits how you already work."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6">
                <Quote className="size-5 text-[#7C3AED]" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-xs font-semibold text-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-foreground/55">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
