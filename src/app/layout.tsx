import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import "./globals.css";

const GTM_ID = "GTM-PH3Q7MGP";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://copybrainapp.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CopyBrain — Your Second Brain for Everything You Copy",
    template: "%s — CopyBrain",
  },
  description:
    "CopyBrain is a modern clipboard timeline for Windows, macOS, and Linux. Automatically save everything you copy. Find clipboard history instantly with blazing-fast search. Private. Offline. Cross-platform.",
  applicationName: "CopyBrain",
  keywords: [
    "clipboard manager",
    "clipboard history",
    "clipboard timeline",
    "copy history",
    "clipboard archive",
    "copybrain",
    "developer tools",
    "clipboard search",
    "clipboard software",
    "windows clipboard",
    "mac clipboard",
    "linux clipboard",
    "clipboard organizer",
    "clipboard backup",
  ],
  authors: [{ name: "CopyBrain" }],
  creator: "CopyBrain",
  publisher: "CopyBrain",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CopyBrain",
    title: "CopyBrain",
    description: "Your second brain for everything you copy.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CopyBrain",
    description: "Your second brain for everything you copy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CopyBrain",
  url: SITE_URL,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Windows, macOS, Linux",
  description: "CopyBrain automatically remembers everything you copy.",
  downloadUrl: `${SITE_URL}/download`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "CopyBrain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider>
          <MotionProvider>
            <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
