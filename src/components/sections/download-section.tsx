"use client";

import { useState } from "react";
import Link from "next/link";
import { Download as DownloadIcon, Check, Info, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { osIcons } from "@/components/icons/os-icons";
import { downloads, sourceRelease, type DownloadAsset } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { trackDownload } from "@/lib/gtm";

const WINDOWS_HELP_VIDEO_ID = "sppI2ObCctY";
const MACOS_HELP_VIDEO_ID = "ih5HidIpgzw";

export function DownloadSection({
  showHeading = true,
  className,
}: {
  showHeading?: boolean;
  className?: string;
}) {
  const [pendingWindowsAsset, setPendingWindowsAsset] =
    useState<DownloadAsset | null>(null);
  const [pendingMacAsset, setPendingMacAsset] =
    useState<DownloadAsset | null>(null);

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
                          "h-auto w-full min-h-9 items-center whitespace-normal py-2",
                          asset.primary
                            ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-primary-foreground hover:opacity-90"
                            : "border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
                        )}
                      >
                        <Link
                          href={asset.href}
                          download
                          onClick={(e) => {
                            if (platform.id === "windows") {
                              e.preventDefault();
                              setPendingWindowsAsset(asset);
                              return;
                            }
                            if (platform.id === "macos") {
                              e.preventDefault();
                              setPendingMacAsset(asset);
                              return;
                            }
                            trackDownload({
                              platform: platform.id,
                              file: asset.file,
                              label: asset.label,
                            });
                          }}
                          className="flex w-full min-w-0 flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <DownloadIcon className="size-4 shrink-0" />
                            <span className="truncate">{asset.label}</span>
                          </span>
                          <span
                            className={cn(
                              "min-w-0 truncate font-mono text-[11px] font-normal",
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

                    {platform.note ? (
                      <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-foreground/50">
                        <Info className="mt-0.5 size-3.5 shrink-0" />
                        {platform.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-10 text-center text-sm text-foreground/55">
          Free forever on the core plan. No account required to download.
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground sm:justify-start">
                <Code2 className="size-4 text-[#06B6D4]" />
                Prefer to build it yourself?
              </h3>
              <p className="mt-1 text-sm text-foreground/55">
                CopyBrain is open source. Download the source code and build
                it manually if you&apos;d rather not use the prebuilt
                installers.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="shrink-0 border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
            >
              <Link
                href={sourceRelease.href}
                onClick={() =>
                  trackDownload({
                    platform: "source",
                    file: `copybrainapp-releases-${sourceRelease.version}.zip`,
                    label: "Source code (.zip)",
                  })
                }
              >
                <DownloadIcon className="size-4" />
                Source code (v{sourceRelease.version})
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <Dialog
        open={pendingWindowsAsset !== null}
        onOpenChange={(open) => {
          if (!open) setPendingWindowsAsset(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Seeing a Windows warning?</DialogTitle>
            <DialogDescription>
              CopyBrain isn&apos;t code-signed yet, so Windows SmartScreen may
              flag the installer. Here&apos;s a quick walkthrough on how to
              continue safely.
            </DialogDescription>
          </DialogHeader>

          <div
            className="overflow-hidden rounded-xl border border-foreground/10"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${WINDOWS_HELP_VIDEO_ID}`}
              title="How to run CopyBrain on Windows (SmartScreen warning)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-foreground/50">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            On the SmartScreen popup, click &quot;More info&quot; then &quot;Run
            anyway&quot; to install.
          </p>

          {pendingWindowsAsset ? (
            <Button
              asChild
              size="lg"
              className="h-auto min-h-9 w-full items-center whitespace-normal break-words bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] py-2 text-center text-primary-foreground hover:opacity-90"
            >
              <a
                href={pendingWindowsAsset.href}
                download
                onClick={() => {
                  trackDownload({
                    platform: "windows",
                    file: pendingWindowsAsset.file,
                    label: pendingWindowsAsset.label,
                  });
                  setPendingWindowsAsset(null);
                }}
              >
                <DownloadIcon className="size-4 shrink-0" />
                Continue download — {pendingWindowsAsset.file}
              </a>
            </Button>
          ) : null}
        </DialogContent>
      </Dialog>

      <Dialog
        open={pendingMacAsset !== null}
        onOpenChange={(open) => {
          if (!open) setPendingMacAsset(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Seeing a &quot;can&apos;t be opened&quot; warning?</DialogTitle>
            <DialogDescription>
              CopyBrain isn&apos;t notarized by an Apple Developer account yet,
              so Gatekeeper will block it on first launch. Here&apos;s a quick
              walkthrough on how to open it anyway.
            </DialogDescription>
          </DialogHeader>

          <div
            className="overflow-hidden rounded-xl border border-foreground/10"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${MACOS_HELP_VIDEO_ID}`}
              title="How to install CopyBrain on macOS (Gatekeeper warning)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-foreground/50">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            Open System Settings → Privacy &amp; Security, scroll down, and
            click &quot;Open Anyway&quot; next to the CopyBrain warning to
            install.
          </p>

          {pendingMacAsset ? (
            <Button
              asChild
              size="lg"
              className="h-auto min-h-9 w-full items-center whitespace-normal break-words bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] py-2 text-center text-primary-foreground hover:opacity-90"
            >
              <a
                href={pendingMacAsset.href}
                download
                onClick={() => {
                  trackDownload({
                    platform: "macos",
                    file: pendingMacAsset.file,
                    label: pendingMacAsset.label,
                  });
                  setPendingMacAsset(null);
                }}
              >
                <DownloadIcon className="size-4 shrink-0" />
                Continue download — {pendingMacAsset.file}
              </a>
            </Button>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
