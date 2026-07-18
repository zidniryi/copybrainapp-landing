"use client";

import Link from "next/link";
import { Download as DownloadIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { osIcons } from "@/components/icons/os-icons";
import { downloads } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { trackDownload } from "@/lib/gtm";

export function DownloadSection({
  showHeading = true,
  className,
}: {
  showHeading?: boolean;
  className?: string;
}) {
  return (
    <section id="download" className={cn("relative py-24 sm:py-32 scroll-mt-24", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Download"
            title="One license. Every desktop."
            description="CopyBrain runs natively on Windows, macOS, and Linux. Pick your platform and get started in under a minute."
            className="mb-16"
          />
        ) : null}

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {downloads.map((platform) => {
            const Icon = osIcons[platform.icon];
            return (
              <RevealItem key={platform.id}>
                <div
                  id={platform.id}
                  className="group relative flex h-full scroll-mt-28 flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-7 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.05]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-foreground/10 bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20">
                      <Icon className="size-5 text-foreground" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-foreground/55">
                        v{platform.version} · {platform.size}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {platform.supports.map((s) => (
                      <li
                        key={s}
                        className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-foreground/60"
                      >
                        <Check className="size-3 text-[#06B6D4]" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-1 flex-col justify-end gap-2.5">
                    {platform.assets.map((asset) => (
                      <Button
                        key={asset.file}
                        asChild
                        size="lg"
                        variant={asset.primary ? "default" : "outline"}
                        className={cn(
                          "w-full justify-between",
                          asset.primary
                            ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-primary-foreground hover:opacity-90"
                            : "border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
                        )}
                      >
                        <Link
                          href={asset.href}
                          download
                          onClick={() =>
                            trackDownload({
                              platform: platform.id,
                              file: asset.file,
                              label: asset.label,
                            })
                          }
                        >
                          <span className="flex items-center gap-2">
                            <DownloadIcon className="size-4" />
                            {asset.label}
                          </span>
                          <span
                            className={cn(
                              "font-mono text-[11px] font-normal",
                              asset.primary
                                ? "text-primary-foreground/70 group-hover:text-primary-foreground/90"
                                : "text-foreground/50 group-hover:text-foreground/60"
                            )}
                          >
                            {asset.file}
                          </span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-10 text-center text-sm text-foreground/55">
          Free forever on the core plan. No account required to download.
        </Reveal>
      </div>
    </section>
  );
}
