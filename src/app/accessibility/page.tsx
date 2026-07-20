import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalHero, LegalBody, LegalSection } from "@/components/legal";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "CopyBrain's accessibility commitment: WCAG AA contrast, full keyboard navigation, and screen reader support across the app and website.",
  alternates: { canonical: "/accessibility" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Accessibility", path: "/accessibility" },
]);

export default function AccessibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <LegalHero
          eyebrow="Accessibility"
          title="Built to be usable by everyone."
          updated="July 17, 2026"
        />
        <LegalBody>
          <LegalSection title="Our standard">
            <p>
              CopyBrain is designed and tested against WCAG 2.1 Level AA.
              Both this website and the desktop application are built with
              keyboard navigation, screen reader support, and color contrast
              as first-class requirements, not an afterthought.
            </p>
          </LegalSection>

          <LegalSection title="Keyboard navigation">
            <p>
              Every interactive element — navigation, search, timeline
              entries, collections, and settings — is reachable and
              operable using only a keyboard, with visible focus states
              throughout.
            </p>
          </LegalSection>

          <LegalSection title="Screen readers">
            <p>
              Interface elements use semantic HTML and ARIA labeling so
              that screen readers announce controls, state changes, and
              search results accurately.
            </p>
          </LegalSection>

          <LegalSection title="Color and contrast">
            <p>
              Text and interactive elements maintain a minimum contrast
              ratio in line with WCAG AA guidelines, even against
              CopyBrain&apos;s dark interface.
            </p>
          </LegalSection>

          <LegalSection title="Feedback">
            <p>
              If you encounter an accessibility barrier anywhere on this
              site or in the app, please tell us at{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href={`mailto:${siteConfig.email.support}`}
              >
                {siteConfig.email.support}
              </a>{" "}
              so we can fix it.
            </p>
          </LegalSection>
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
