import Link from "next/link";
import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { pricingPlans } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Free forever. Upgrade if you need more."
          description="Start with a full-featured free plan. Move to Pro when you need cloud sync, OCR, and AI-powered search."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  plan.featured
                    ? "border-[#4F46E5]/50 bg-gradient-to-b from-[#4F46E5]/10 via-foreground/[0.03] to-transparent shadow-[0_0_0_1px_rgba(79,70,229,0.25)]"
                    : "border-foreground/10 bg-foreground/[0.03]"
                )}
              >
                {plan.comingSoon ? (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-3 py-1 text-xs font-medium text-primary-foreground">
                    <Clock className="size-3" />
                    Coming soon
                  </span>
                ) : plan.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-foreground/50">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight text-foreground",
                      plan.comingSoon && "text-foreground/40"
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period ? (
                    <span className="text-sm text-foreground/55">{plan.period}</span>
                  ) : null}
                </div>

                {plan.comingSoon ? (
                  <Button
                    size="lg"
                    disabled
                    aria-disabled="true"
                    className="mt-6 w-full cursor-not-allowed border border-foreground/10 bg-foreground/5 text-foreground/50 opacity-100 hover:bg-foreground/5 disabled:opacity-100"
                  >
                    <Clock className="size-4" />
                    {plan.cta}
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      "mt-6 w-full",
                      plan.featured
                        ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-primary-foreground hover:opacity-90"
                        : "border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
                    )}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                )}

                {plan.comingSoon ? (
                  <p className="mt-3 text-center text-xs text-foreground/35">
                    Pro is in development — pricing shown is planned, not final.
                  </p>
                ) : null}

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        plan.comingSoon ? "text-foreground/50" : "text-foreground/70"
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          plan.comingSoon ? "text-[#06B6D4]/50" : "text-[#06B6D4]"
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
