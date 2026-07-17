import type { ReactNode } from "react";
import { Glow } from "@/components/glow";
import { Reveal } from "@/components/motion/reveal";

export function LegalHero({
  eyebrow,
  title,
  updated,
}: {
  eyebrow: string;
  title: string;
  updated: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48">
      <Glow className="mask-fade-radial opacity-70" />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-foreground/55">Last updated: {updated}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="space-y-12">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/60">
        {children}
      </div>
    </div>
  );
}
