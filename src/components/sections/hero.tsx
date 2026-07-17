"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Grid2x2, Apple, Terminal, ArrowRight, Link as LinkIcon, KeyRound, Code2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/glow";

const floatingCards = [
  {
    icon: LinkIcon,
    label: "URL",
    value: "meet.copybrainapp.xyz/standup",
    className: "left-[-8%] top-[8%] rotate-[-6deg]",
    delay: 0,
    color: "text-[#06B6D4]",
  },
  {
    icon: KeyRound,
    label: "JWT",
    value: "Bearer eyJhbGciOiJIUzI1NiIs...",
    className: "right-[-6%] top-[28%] rotate-[5deg]",
    delay: 0.4,
    color: "text-[#7C3AED]",
  },
  {
    icon: Code2,
    label: "Code",
    value: "npm install copybrain",
    className: "left-[-4%] bottom-[6%] rotate-[4deg]",
    delay: 0.8,
    color: "text-[#4F46E5]",
  },
];

const mockRows = [
  { time: "08:21", text: "npm install", tag: "Code" },
  { time: "08:35", text: "Bearer eyJhbGciOiJIUzI1NiIs...", tag: "JWT" },
  { time: "09:01", text: "useCopyBrainHistory()", tag: "Code" },
  { time: "10:20", text: "meet.copybrainapp.xyz/standup", tag: "URL" },
  { time: "12:55", text: "github.com/copybrainapp/core", tag: "URL" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <Glow className="mask-fade-radial" />
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
            Now available for Windows, macOS &amp; Linux
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Your second brain for{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              everything you copy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-foreground/60"
          >
            CopyBrain automatically remembers everything you copy. Search
            text, code, links, terminal commands, emails, and notes
            instantly — even months later.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-foreground/50"
          >
            <span>Fast.</span>
            <span>Private.</span>
            <span>Offline.</span>
            <span>Cross-platform.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-primary-foreground shadow-[0_8px_30px_-8px_rgba(79,70,229,0.7)] hover:opacity-90"
            >
              <Link href="/download#windows">
                <Grid2x2 className="size-4" />
                Download for Windows
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
            >
              <Link href="/download#macos">
                <Apple className="size-4" />
                Download for macOS
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10"
            >
              <Link href="/download#linux">
                <Terminal className="size-4" />
                Download for Linux
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-foreground/70 hover:text-foreground">
              <Link href="/#features">
                View Features
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex items-center gap-2 text-xs font-medium text-foreground/45"
          >
            <ShieldCheck className="size-3.5 shrink-0 text-[#06B6D4]" />
            Encrypted &amp; 100% offline-first — your clipboard, prompts, and
            secrets never leave your device.
          </motion.p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl border border-foreground/10 bg-card/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur"
          >
            <div className="flex items-center gap-1.5 border-b border-foreground/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
              <span className="ml-3 text-xs font-medium text-foreground/55">
                CopyBrain — Timeline
              </span>
            </div>
            <div className="space-y-1 p-4">
              {mockRows.map((row, i) => (
                <motion.div
                  key={row.time}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-foreground/5"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="font-mono text-xs text-foreground/55">{row.time}</span>
                    <span className="truncate text-sm text-foreground/85">{row.text}</span>
                  </div>
                  <span className="shrink-0 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-foreground/50">
                    {row.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + card.delay }}
              className={`animate-float-slow absolute hidden w-56 rounded-xl border border-foreground/10 bg-card/95 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] backdrop-blur sm:block ${card.className}`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div className="flex items-center gap-2">
                <card.icon className={`size-3.5 ${card.color}`} />
                <span className="text-[10px] font-medium uppercase tracking-wide text-foreground/55">
                  {card.label}
                </span>
              </div>
              <p className="mt-1.5 truncate font-mono text-xs text-foreground/80">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
