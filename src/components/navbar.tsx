"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "@/components/icons/github-icon";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { trackDownloadCta } from "@/lib/gtm";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CopyBrain on GitHub"
            className="flex size-9 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </Link>
          <ThemeToggle />
          <Button
            asChild
            className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:opacity-90"
          >
            <Link
              href="/download"
              onClick={() =>
                trackDownloadCta({ location: "navbar_desktop", label: "Download Now" })
              }
            >
              Download Now
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-6 py-6 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-5">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              GitHub
            </Link>
            <Button
              asChild
              className="mt-2 w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90"
            >
              <Link
                href="/download"
                onClick={() => {
                  setOpen(false);
                  trackDownloadCta({ location: "navbar_mobile", label: "Download Now" });
                }}
              >
                Download Now
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
