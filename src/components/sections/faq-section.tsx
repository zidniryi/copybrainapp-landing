import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          description="Can't find what you're looking for? Reach us anytime."
          className="mb-14"
        />

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="border-foreground/10 py-1"
              >
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline [&>svg]:text-foreground/40">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-foreground/55">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
