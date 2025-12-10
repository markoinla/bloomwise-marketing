import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FeatureFAQProps {
  id?: string;
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

export const FeatureFAQ = ({
  id,
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
}: FeatureFAQProps) => {
  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden border-t border-border/30">
      <div className="container max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left: Section header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-balance">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-muted-foreground text-sm text-pretty">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right: FAQ accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/40"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4 gap-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
