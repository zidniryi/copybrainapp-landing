import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalHero, LegalBody, LegalSection } from "@/components/legal";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CopyBrain's privacy policy. Your clipboard data stays on your device by default — no tracking, no cloud requirement, offline-first.",
  alternates: { canonical: "/privacy" },
};

const jsonLd = breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy" }]);

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <LegalHero
          eyebrow="Privacy"
          title="Privacy Policy"
          updated="July 17, 2026"
        />
        <LegalBody>
          <LegalSection title="1. Overview">
            <p>
              CopyBrain is built offline-first. On the Free plan, your
              clipboard history is stored in a local, encrypted database on
              your device and is never transmitted to CopyBrain or any third
              party. This policy explains what data CopyBrain collects, how
              it is used, and the choices you have.
            </p>
          </LegalSection>

          <LegalSection title="2. Data stored on your device">
            <p>
              Clipboard entries, categories, collections, and favorites are
              stored locally in an encrypted SQLite database. CopyBrain does
              not read this database over the network, and no clipboard
              content is uploaded unless you explicitly enable Cloud Sync on
              the Pro plan.
            </p>
          </LegalSection>

          <LegalSection title="3. Cloud Sync (Pro plan only)">
            <p>
              If you enable Cloud Sync, your clipboard history is encrypted
              on your device before it is sent to CopyBrain&apos;s sync
              servers, and decrypted only on devices you have authenticated.
              CopyBrain cannot read the contents of synced entries.
              Disabling Cloud Sync stops all future uploads; you can request
              deletion of previously synced data at any time.
            </p>
          </LegalSection>

          <LegalSection title="4. Application usage data">
            <p>
              CopyBrain does not include analytics, telemetry, or tracking
              of any kind in the Free plan. Pro&apos;s optional Clipboard
              Analytics feature computes statistics locally on your device
              and is never transmitted unless you explicitly export it.
            </p>
          </LegalSection>

          <LegalSection title="5. Excluded applications">
            <p>
              You can exclude specific applications — such as password
              managers — from clipboard capture entirely in Settings.
              Excluded entries are never written to the local database.
            </p>
          </LegalSection>

          <LegalSection title="6. Data retention and deletion">
            <p>
              Your local clipboard history is retained until you delete it,
              either per-entry, per-collection, or by clearing the entire
              database from Settings. Uninstalling CopyBrain does not
              automatically delete your local database; you can remove it
              manually or export it first.
            </p>
          </LegalSection>

          <LegalSection title="7. Third parties">
            <p>
              CopyBrain does not sell, rent, or share clipboard content with
              third parties. Pro billing is processed by a third-party
              payment provider that only receives the information necessary
              to process your subscription.
            </p>
          </LegalSection>

          <LegalSection title="8. Your rights">
            <p>
              You may export, import, or permanently delete your clipboard
              data at any time from within the app. For Cloud Sync accounts,
              you may request full account and data deletion by contacting
              us below.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to this policy">
            <p>
              We may update this policy as CopyBrain evolves. Material
              changes will be reflected by updating the date at the top of
              this page.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              Questions about this policy can be sent to{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href={`mailto:${siteConfig.email.hello}`}
              >
                {siteConfig.email.hello}
              </a>
              . Security-related reports can be sent to{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href={`mailto:${siteConfig.email.security}`}
              >
                {siteConfig.email.security}
              </a>
              .
            </p>
          </LegalSection>
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
