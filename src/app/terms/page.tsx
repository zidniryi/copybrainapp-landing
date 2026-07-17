import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalHero, LegalBody, LegalSection } from "@/components/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms of service governing use of CopyBrain, the desktop clipboard timeline for Windows, macOS, and Linux.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background">
        <LegalHero
          eyebrow="Legal"
          title="Terms of Service"
          updated="July 17, 2026"
        />
        <LegalBody>
          <LegalSection title="1. Acceptance of terms">
            <p>
              By downloading, installing, or using CopyBrain, you agree to
              these terms. If you do not agree, do not use the application.
            </p>
          </LegalSection>

          <LegalSection title="2. License">
            <p>
              CopyBrain grants you a personal, non-exclusive, non-transferable
              license to install and use the application on devices you own
              or control, subject to the plan you are on (Free or Pro). One
              Pro license covers use across Windows, macOS, and Linux.
            </p>
          </LegalSection>

          <LegalSection title="3. Free and Pro plans">
            <p>
              The Free plan is provided at no cost and includes unlimited
              clipboard history, timeline, search, collections, favorites,
              calendar view, and export/import. The Pro plan is a paid
              subscription that adds Cloud Sync, OCR, image history, AI
              search, encrypted backup, priority support, and clipboard
              analytics. Pro includes a 14-day free trial; you may cancel at
              any time before the trial ends without charge.
            </p>
          </LegalSection>

          <LegalSection title="4. Billing and cancellation">
            <p>
              Pro subscriptions renew automatically until cancelled.
              Cancelling stops future billing; access continues until the
              end of the current billing period. Downgrading to Free retains
              your local clipboard history but disables Pro-only features
              such as Cloud Sync.
            </p>
          </LegalSection>

          <LegalSection title="5. Acceptable use">
            <p>
              You agree not to reverse engineer, redistribute, or resell
              CopyBrain, and not to use it to store or process content that
              is unlawful or infringes on the rights of others.
            </p>
          </LegalSection>

          <LegalSection title="6. Data ownership">
            <p>
              You retain full ownership of the content you copy and store in
              CopyBrain. We claim no rights over your clipboard history,
              collections, or exports.
            </p>
          </LegalSection>

          <LegalSection title="7. Availability">
            <p>
              CopyBrain&apos;s core functionality is offline-first and does
              not depend on our servers. Cloud Sync and related Pro features
              depend on service availability and may occasionally be
              interrupted for maintenance.
            </p>
          </LegalSection>

          <LegalSection title="8. Warranty disclaimer">
            <p>
              CopyBrain is provided &ldquo;as is&rdquo; without warranties of
              any kind, express or implied, including fitness for a
              particular purpose. We recommend periodically exporting
              important clipboard history as a backup.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of liability">
            <p>
              To the maximum extent permitted by law, CopyBrain is not
              liable for indirect, incidental, or consequential damages
              arising from use of the application.
            </p>
          </LegalSection>

          <LegalSection title="10. Changes to these terms">
            <p>
              We may update these terms from time to time. Continued use of
              CopyBrain after an update constitutes acceptance of the revised
              terms.
            </p>
          </LegalSection>

          <LegalSection title="11. Contact">
            <p>
              Questions about these terms can be sent to{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href={`mailto:${siteConfig.email.hello}`}
              >
                {siteConfig.email.hello}
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
