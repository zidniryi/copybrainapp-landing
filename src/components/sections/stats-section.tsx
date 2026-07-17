import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { stats } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="relative border-y border-foreground/10 bg-foreground/[0.02] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <div className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-foreground/50">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
