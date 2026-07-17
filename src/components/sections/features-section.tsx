import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { features, smartCategories, collections } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you copy, organized automatically."
          description="CopyBrain quietly captures every clipboard event and turns it into a searchable, categorized archive — without you lifting a finger."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <RevealItem
              key={feature.title}
              className={cn(feature.span === "lg" ? "lg:col-span-2" : "")}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.05]">
                <span className="flex size-10 items-center justify-center rounded-xl border border-foreground/10 bg-gradient-to-br from-[#4F46E5]/25 via-[#7C3AED]/20 to-[#06B6D4]/20">
                  <feature.icon className="size-5 text-foreground" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                  {feature.description}
                </p>
                {feature.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                    {feature.detail}
                  </p>
                ) : null}

                {feature.title === "Smart Categories" ? (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {smartCategories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-foreground/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}

                {feature.title === "Collections" ? (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {collections.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-foreground/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}

                {feature.title === "Performance" ? (
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      ["<1s", "Startup"],
                      ["<100ms", "Search"],
                      ["<50MB", "Memory"],
                    ].map(([value, label]) => (
                      <div key={label}>
                        <div className="text-sm font-semibold text-foreground">
                          {value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wide text-foreground/55">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#4F46E5]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#4F46E5]/20"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
