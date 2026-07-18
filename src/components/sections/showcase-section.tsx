"use client";

import { useState, type ReactNode, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionProps,
} from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { osIcons } from "@/components/icons/os-icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type PlatformId = "windows" | "macos" | "linux";

type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const platforms: {
  id: PlatformId;
  name: string;
  icon: "windows" | "apple" | "linux";
  primary: Shot;
  secondary: Shot;
}[] = [
  {
    id: "windows",
    name: "Windows",
    icon: "windows",
    primary: {
      src: "/screenshots/windows-2.webp",
      width: 1532,
      height: 817,
      alt: "CopyBrain clipboard timeline on Windows",
    },
    secondary: {
      src: "/screenshots/windows-1.webp",
      width: 1536,
      height: 812,
      alt: "CopyBrain app details on Windows",
    },
  },
  {
    id: "macos",
    name: "macOS",
    icon: "apple",
    primary: {
      src: "/screenshots/macos-2.webp",
      width: 2938,
      height: 1834,
      alt: "CopyBrain clipboard timeline on macOS",
    },
    secondary: {
      src: "/screenshots/macos-1.webp",
      width: 2934,
      height: 1840,
      alt: "CopyBrain app details on macOS",
    },
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    primary: {
      src: "/screenshots/linux-2.webp",
      width: 1919,
      height: 1079,
      alt: "CopyBrain clipboard timeline on Linux",
    },
    secondary: {
      src: "/screenshots/linux-1.webp",
      width: 1920,
      height: 1080,
      alt: "CopyBrain app details on Linux",
    },
  },
];

function TiltCard({
  children,
  className,
  initial,
  animate,
  transition,
}: {
  children: ReactNode;
  className?: string;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
}) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });
  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={initial}
      animate={animate}
      transition={transition}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={cn("group/tilt relative", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(320px circle at ${gx} ${gy}, rgba(124,58,237,0.25), transparent 70%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export function ShowcaseSection() {
  const [active, setActive] = useState<PlatformId>("macos");
  const [zoomedShot, setZoomedShot] = useState<Shot | null>(null);
  const activePlatform = platforms.find((p) => p.id === active)!;

  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-24 sm:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cross-platform"
          title="Looks right at home, everywhere."
          description="Same fast, private clipboard timeline — styled natively for Windows, macOS, and Linux."
          className="mb-12"
        />

        <div className="flex justify-center">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/[0.03] p-1">
            {platforms.map((p) => {
              const Icon = osIcons[p.icon];
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="showcase-tab-bg"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <Icon className="relative z-10 size-4" />
                  <span className="relative z-10">{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-14" style={{ perspective: 1200 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2"
            >
              <TiltCard
                initial={{ opacity: 0, x: -28, rotate: -3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
              >
                <button
                  type="button"
                  onClick={() => setZoomedShot(activePlatform.secondary)}
                  className="group/zoom relative block w-full cursor-zoom-in"
                >
                  <Image
                    src={activePlatform.secondary.src}
                    alt={activePlatform.secondary.alt}
                    width={activePlatform.secondary.width}
                    height={activePlatform.secondary.height}
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/zoom:bg-black/30 group-hover/zoom:opacity-100">
                    <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                      <ZoomIn className="size-5" />
                    </span>
                  </span>
                </button>
              </TiltCard>

              <TiltCard
                initial={{ opacity: 0, x: 28, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
              >
                <button
                  type="button"
                  onClick={() => setZoomedShot(activePlatform.primary)}
                  className="group/zoom relative block w-full cursor-zoom-in"
                >
                  <Image
                    src={activePlatform.primary.src}
                    alt={activePlatform.primary.alt}
                    width={activePlatform.primary.width}
                    height={activePlatform.primary.height}
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="h-full w-full object-cover"
                    priority
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/zoom:bg-black/30 group-hover/zoom:opacity-100">
                    <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                      <ZoomIn className="size-5" />
                    </span>
                  </span>
                </button>
              </TiltCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Dialog
        open={zoomedShot !== null}
        onOpenChange={(open) => {
          if (!open) setZoomedShot(null);
        }}
      >
        <DialogContent
          showClose={false}
          className="flex h-[92vh] w-[95vw] max-w-none items-center justify-center border-none bg-transparent p-0 shadow-none sm:h-[94vh] sm:w-[96vw]"
        >
          <DialogTitle className="sr-only">
            {zoomedShot?.alt ?? "CopyBrain screenshot"}
          </DialogTitle>
          <motion.div
            key={zoomedShot?.src}
            initial={{ opacity: 0, scale: 0.55 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative h-full w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.08,
              }}
            >
              <DialogClose className="absolute -top-3 -right-3 z-10 flex size-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none">
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </motion.div>
            {zoomedShot ? (
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <Image
                  src={zoomedShot.src}
                  alt={zoomedShot.alt}
                  fill
                  sizes="96vw"
                  className="object-contain"
                  priority
                />
              </div>
            ) : null}
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
