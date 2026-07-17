import { CalendarDays, ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { timelineToday, timelineYesterday } from "@/lib/content";

function TimelineColumn({
  label,
  entries,
}: {
  label: string;
  entries: typeof timelineToday;
}) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6">
      <h3 className="text-sm font-semibold text-foreground/70">{label}</h3>
      <div className="mt-4 space-y-1">
        {entries.map((entry) => (
          <div
            key={`${label}-${entry.time}`}
            className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-foreground/5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="font-mono text-xs text-foreground/55">
                {entry.time}
              </span>
              <span className="truncate text-sm text-foreground/85">
                {entry.content}
              </span>
            </div>
            <span className="shrink-0 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-foreground/50">
              {entry.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TimelineDemo() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Timeline"
            title="Scroll back through everything you've ever copied."
            description="Every entry is timestamped and organized by day. Jump straight to a date with the calendar view, or just scroll."
            className="mx-0 max-w-xl text-left"
          />

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-foreground/10 bg-card/80 p-5">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <CalendarDays className="size-4 text-[#06B6D4]" />
                June 11, 2025
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-foreground/55">
                <ArrowDown className="size-3.5" />
                Everything copied that day.
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RevealItem>
            <TimelineColumn label="Today" entries={timelineToday} />
          </RevealItem>
          <RevealItem>
            <TimelineColumn label="Yesterday" entries={timelineYesterday} />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
