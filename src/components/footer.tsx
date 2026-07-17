import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/logo";
import { GithubIcon } from "@/components/icons/github-icon";
import { siteConfig } from "@/lib/site-config";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: `mailto:${siteConfig.email.support}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Contact", href: `mailto:${siteConfig.email.hello}` },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/50">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CopyBrain on GitHub"
                className="flex size-9 items-center justify-center rounded-lg border border-foreground/10 text-foreground/60 transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </Link>
              <Link
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CopyBrain on X"
                className="flex size-9 items-center justify-center rounded-lg border border-foreground/10 text-foreground/60 transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <X className="size-4" />
              </Link>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                >
                  X / Twitter
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email.hello}`}
                  className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                >
                  {siteConfig.email.hello}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-foreground/55">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-foreground/55">
            Built for people who copy a lot.
          </p>
        </div>
      </div>
    </footer>
  );
}
