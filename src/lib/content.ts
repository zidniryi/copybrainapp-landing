import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  History,
  Clock,
  CalendarDays,
  Search,
  Tags,
  FolderKanban,
  Star,
  ShieldCheck,
  Laptop,
  Gauge,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail?: string;
  span?: "sm" | "lg";
};

export const features: Feature[] = [
  {
    icon: History,
    title: "Unlimited Clipboard History",
    description: "Never lose copied text again.",
    detail:
      "Every snippet, link, and file you copy is saved automatically — no limits, no manual saving.",
    span: "lg",
  },
  {
    icon: Clock,
    title: "Timeline",
    description:
      "See everything you've copied today, yesterday, last week, or years ago.",
    detail: "Scroll back through your entire clipboard history like a diary.",
  },
  {
    icon: CalendarDays,
    title: "Calendar View",
    description: "Jump directly to any day.",
    detail: "Pick June 11, 2025 and see everything you copied that day.",
  },
  {
    icon: Search,
    title: "Instant Search",
    description: "Search anything.",
    detail:
      'Type "invoice" and instantly find Invoice API, Invoice.pdf, and Invoice Email.',
    span: "lg",
  },
  {
    icon: Tags,
    title: "Smart Categories",
    description: "Automatically detects URLs, emails, code, and more.",
    detail:
      "URL, Email, Phone, SQL, JSON, Markdown, JWT, API Keys, Code, Image, File — sorted for you.",
  },
  {
    icon: FolderKanban,
    title: "Collections",
    description: "Organize clipboard into folders.",
    detail: "Frontend, Backend, Personal, Work, Ideas, Meeting — your call.",
  },
  {
    icon: Star,
    title: "Favorites",
    description: "Pin important snippets forever.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    description: "Everything stays on your computer.",
    detail: "No tracking. No cloud required. Offline-first, encrypted database.",
    span: "lg",
  },
  {
    icon: Laptop,
    title: "Cross Platform",
    description: "Windows, macOS, and Linux.",
    detail: "One license. Every desktop.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Starts in under a second.",
    detail:
      "Startup < 1s · Search < 100ms · Memory < 50MB · Supports 1M+ clipboard entries.",
  },
];

export const smartCategories = [
  "URL",
  "Email",
  "Phone",
  "SQL",
  "JSON",
  "Markdown",
  "JWT",
  "API Keys",
  "Code",
  "Image",
  "File",
];

export const collections = [
  "Frontend",
  "Backend",
  "Personal",
  "Work",
  "Ideas",
  "Meeting",
];

export type TimelineEntry = {
  time: string;
  content: string;
  category: string;
};

export const timelineToday: TimelineEntry[] = [
  { time: "08:21", content: "npm install", category: "Code" },
  { time: "08:35", content: "Bearer eyJhbGciOiJIUzI1NiIs...", category: "JWT" },
  { time: "09:01", content: "useCopyBrainHistory()", category: "Code" },
  { time: "10:20", content: "meet.copybrainapp.xyz/standup", category: "URL" },
  { time: "12:55", content: "github.com/copybrainapp/core", category: "URL" },
];

export const timelineYesterday: TimelineEntry[] = [
  { time: "16:04", content: "Invoice_2025_06_11.pdf", category: "File" },
  { time: "14:42", content: "docker compose up -d --build", category: "Code" },
  { time: "11:18", content: "./scripts/deploy.sh production", category: "Code" },
  {
    time: "09:30",
    content: "SELECT * FROM clipboard_items WHERE pinned = true;",
    category: "SQL",
  },
];

export const stats = [
  { value: "1M+", label: "Clipboard Items" },
  { value: "100%", label: "Offline" },
  { value: "<100ms", label: "Search" },
  { value: "<50MB", label: "Memory" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "Senior Developer",
    quote:
      "I copy API keys, stack traces, and commands all day. CopyBrain's search finds anything from weeks ago in under a second — it's basically muscle memory now.",
    initials: "MC",
  },
  {
    name: "Sofia Ramirez",
    role: "Product Designer",
    quote:
      "The timeline view is genius. I can scroll back to exactly what I copied while researching a client brief three weeks ago without digging through old files.",
    initials: "SR",
  },
  {
    name: "Aiden Park",
    role: "Computer Science Student",
    quote:
      "Between lecture notes, code snippets, and citations, my clipboard used to be chaos. Collections keep everything sorted by class, and it's completely free.",
    initials: "AP",
  },
  {
    name: "Priya Nair",
    role: "QA Engineer",
    quote:
      "Logging repro steps used to mean fifteen browser tabs open at once. Now I just copy as I go and pull the whole sequence from the timeline when I file the bug.",
    initials: "PN",
  },
  {
    name: "Jonas Weber",
    role: "Content Creator",
    quote:
      "Scripts, captions, links to assets — CopyBrain remembers all of it. Smart categories mean I never mix up a draft caption with a finished one again.",
    initials: "JW",
  },
  {
    name: "Hannah Wolfe",
    role: "Office Manager",
    quote:
      "I'm not technical, but CopyBrain just works. Everything I copy from emails and spreadsheets is there when I need it, and it runs quietly in the background.",
    initials: "HW",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Everything you need to never lose a copy again.",
    cta: "Download Now",
    href: "/download",
    features: [
      "Unlimited clipboard history",
      "Timeline",
      "Instant search",
      "Collections",
      "Favorites",
      "Dark mode",
      "Calendar view",
      "Export",
      "Import",
    ],
  },
  {
    name: "Pro",
    price: "Contact us",
    description: "For power users who work across multiple devices.",
    cta: "Contact Us",
    href: `mailto:${siteConfig.email.hello}?subject=${encodeURIComponent(
      "CopyBrain Pro"
    )}`,
    featured: true,
    features: [
      "Everything in Free",
      "Cloud sync",
      "OCR (image-to-text)",
      "Image history",
      "AI-powered search",
      "Encrypted backup",
      "Priority support",
      "Clipboard analytics",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What is CopyBrain?",
    answer:
      "CopyBrain is a desktop clipboard manager that automatically saves everything you copy — text, code, links, and files — into a searchable timeline, so you can find anything you've ever copied in seconds.",
  },
  {
    question: "Is CopyBrain open source?",
    answer:
      "Yes. CopyBrain's client is open source, so you can read the code, verify how your clipboard data is handled, or build it yourself instead of trusting an unsigned binary.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. CopyBrain is offline-first by design. Your clipboard history lives in a local, encrypted database on your machine and never requires an internet connection to work.",
  },
  {
    question: "Is my clipboard uploaded anywhere?",
    answer:
      "No. On the Free plan, nothing ever leaves your computer. Cloud Sync is an opt-in Pro feature, and even then only the devices you explicitly connect can access your synced history.",
  },
  {
    question: "Does it support Linux?",
    answer:
      "Yes. CopyBrain ships native builds for Linux as AppImage, .deb, .rpm, and .tar.gz, alongside full support for Windows and macOS.",
  },
  {
    question: "Can I sync devices?",
    answer:
      "Cloud Sync is available on the Pro plan. It uses end-to-end encrypted backups so your history stays private while staying available across every desktop you use.",
  },
  {
    question: "Is there a portable version?",
    answer:
      "Yes. Windows users can download the Portable (.zip) build and run it without installation — perfect for USB drives or locked-down machines.",
  },
  {
    question: "How much RAM does it use?",
    answer:
      "CopyBrain typically uses under 50MB of memory, even with a history of over a million clipboard entries, thanks to its lightweight native architecture.",
  },
  {
    question: "Can I disable certain applications?",
    answer:
      "Yes. You can exclude specific applications — like password managers — from being tracked at all, so sensitive copies never touch the database.",
  },
  {
    question: "How does Instant Search work?",
    answer:
      "CopyBrain indexes every clipboard entry as it's captured, so searching across a million items returns results in under 100ms, even for partial matches.",
  },
  {
    question: "What happens to my data if I uninstall CopyBrain?",
    answer:
      "Your local database remains on disk unless you delete it manually. You can also export your full history to a portable file before uninstalling.",
  },
  {
    question: "Do I need an account to use CopyBrain?",
    answer:
      "No account is required for the Free plan. An account is only needed if you upgrade to Pro to enable Cloud Sync and encrypted backups.",
  },
  {
    question: "Is CopyBrain accessible with a screen reader and keyboard only?",
    answer:
      "Yes. Every view in CopyBrain — timeline, search, collections, and settings — is fully navigable by keyboard and labeled for screen readers.",
  },
  {
    question: "What counts as a 'clipboard entry'?",
    answer:
      "Any text, code, link, file path, or image you copy on your system. CopyBrain automatically tags each entry with a smart category like URL, Email, SQL, or JSON.",
  },
  {
    question: "Can I try Pro before paying?",
    answer:
      "Yes, Pro includes a 14-day free trial with full access to Cloud Sync, OCR, AI Search, and clipboard analytics — no credit card required to start.",
  },
];
