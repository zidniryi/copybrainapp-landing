import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/content";

const SITE_URL = siteConfig.url;
const LOGO_URL = `${SITE_URL}/logo-mark.png`;

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "CopyBrain",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
  sameAs: [siteConfig.social.github, siteConfig.social.x],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "CopyBrain",
  description: siteConfig.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export const softwareApplicationJsonLd = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: "CopyBrain",
  url: SITE_URL,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Windows, macOS, Linux",
  description:
    "CopyBrain is a modern, open source clipboard timeline for Windows, macOS, and Linux. Automatically save everything you copy and find it instantly with blazing-fast search.",
  softwareVersion: "1.0.5",
  downloadUrl: `${SITE_URL}/download`,
  screenshot: [
    `${SITE_URL}/screenshots/windows-1.webp`,
    `${SITE_URL}/screenshots/macos-1.webp`,
    `${SITE_URL}/screenshots/linux-1.webp`,
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
  author: { "@id": `${SITE_URL}/#organization` },
};

export const faqPageJsonLd = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd,
    websiteJsonLd,
    softwareApplicationJsonLd,
    faqPageJsonLd,
  ],
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
