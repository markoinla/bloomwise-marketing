import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const questions = [
  {
    question:
      "I already sell on Shopify. Do I have to move my store or re-type every order?",
    answer:
      "No. Bloomwise connects to the Shopify store you already have, and orders, products, and customers sync both ways. A new online order shows up in Bloomwise within seconds of being placed, alongside your phone, walk-in, and event orders, so there is one list of what needs to be made today.",
  },
  {
    question: "My recipes live in a binder. What happens to them?",
    answer:
      "You build them in Bloomwise, with ingredients, quantities, steps, and sizes, and the material cost is calculated for you. Once a recipe is linked to a product, every order for that product prints with the recipe on the sheet, so your designers see what to make without asking. Bloom AI can also draft a recipe from an inspiration photo to give you a starting point.",
  },
  {
    question: "My designers work from paper. Do they have to be on a screen now?",
    answer:
      "No. Printed order sheets, daily schedules, and event sheets are how the shop floor runs on Bloomwise, and each one carries the recipe and order details a designer needs. Sheets include a QR code that opens the order on a phone for marking it done or adding a photo, but that is optional.",
  },
  {
    question: "Most of my orders come in by phone or walk-in, not online. Does this still help?",
    answer:
      "Yes. Phone, walk-in, event, and workshop orders are entered directly in Bloomwise and sit in the same production list as your Shopify orders. From there you print the day, schedule deliveries, and pull one shopping list across everything coming up.",
  },
  {
    question: "Is this a point-of-sale system? Does it replace my register or Shopify?",
    answer:
      "No, and it is not meant to. Shopify stays your storefront and your register stays your register. Bloomwise is the back of house: production, recipes, events, deliveries, and shopping lists.",
  },
  {
    question: "I'm not technical. What do I actually have to set up?",
    answer:
      "Bloomwise runs in your web browser, so there is nothing to install. You connect your Shopify store and add your recipes and products, and orders start flowing in from there. If you can run a Shopify store, you can run Bloomwise.",
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-20 md:py-24 lg:py-28", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <a href="/contact" className="underline underline-offset-4">
                get in touch
              </a>
              .
            </p>
          </div>

          <div className="text-start">
            <Accordion type="single" collapsible className="w-full">
              {questions.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
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
