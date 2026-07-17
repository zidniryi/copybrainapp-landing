import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium tracking-wide text-foreground/70">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-foreground/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
