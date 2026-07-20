import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalHero, LegalBody, LegalSection } from "@/components/legal";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Get started with CopyBrain: installation, keyboard shortcuts, search syntax, collections, and Cloud Sync setup.",
  alternates: { canonical: "/docs" },
};

const jsonLd = breadcrumbJsonLd([{ name: "Documentation", path: "/docs" }]);

export default function DocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <LegalHero
          eyebrow="Documentation"
          title="Get started with CopyBrain."
          updated="July 17, 2026"
        />
        <LegalBody>
          <LegalSection title="Installation">
            <p>
              Download the installer for your platform from the{" "}
              <Link className="text-foreground underline underline-offset-4" href="/download">
                Download page
              </Link>
              . Windows and macOS builds are signed; Linux ships as
              AppImage, .deb, .rpm, and .tar.gz. After installation,
              CopyBrain runs in the background and starts capturing
              clipboard events immediately.
            </p>
          </LegalSection>

          <LegalSection title="The Timeline">
            <p>
              Every copy you make appears in the Timeline, grouped by day.
              Use the Calendar view to jump directly to a specific date, or
              scroll to browse chronologically.
            </p>
          </LegalSection>

          <LegalSection title="Search">
            <p>
              Press the global search shortcut to open Instant Search from
              anywhere on your system. Results are ranked by relevance and
              return in under 100ms, even across a history of a million
              entries.
            </p>
          </LegalSection>

          <LegalSection title="Smart Categories">
            <p>
              CopyBrain automatically tags each entry as URL, Email, Phone,
              SQL, JSON, Markdown, JWT, API Key, Code, Image, or File. Use
              category filters in the sidebar to narrow the timeline to a
              specific type.
            </p>
          </LegalSection>

          <LegalSection title="Collections and Favorites">
            <p>
              Create Collections (for example, Frontend, Backend, Personal,
              Work, Ideas, Meeting) to organize snippets by project. Pin any
              entry as a Favorite to keep it permanently accessible from the
              sidebar.
            </p>
          </LegalSection>

          <LegalSection title="Excluding applications">
            <p>
              Open Settings → Privacy to exclude specific applications from
              clipboard capture entirely — useful for password managers or
              other sensitive tools.
            </p>
          </LegalSection>

          <LegalSection title="Export and import">
            <p>
              Your full history, or any individual Collection, can be
              exported to a portable file from Settings → Data, and imported
              back on any device running CopyBrain.
            </p>
          </LegalSection>

          <LegalSection title="Cloud Sync (Pro)">
            <p>
              Pro subscribers can enable Cloud Sync from Settings → Account
              to keep clipboard history available across every desktop
              they use. Data is encrypted on-device before it is uploaded.
            </p>
          </LegalSection>

          <LegalSection title="Need more help?">
            <p>
              Email{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href={`mailto:${siteConfig.email.support}`}
              >
                {siteConfig.email.support}
              </a>{" "}
              or check the{" "}
              <Link className="text-foreground underline underline-offset-4" href="/#faq">
                FAQ
              </Link>
              .
            </p>
          </LegalSection>
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
