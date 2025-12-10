import { cn } from "@/lib/utils";

interface JourneyStage {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  image: string;
}

const stages: JourneyStage[] = [
  {
    id: "inquiry",
    title: "Capture every inquiry",
    subtitle: "in one place",
    features: [
      "Track leads from website forms, emails, and referrals",
      "Log initial contact notes and client preferences",
      "Never lose a potential booking again",
    ],
    image: "https://placehold.co/600x400/e8f5e9/2e7d32?text=Inquiry+Dashboard",
  },
  {
    id: "consultation",
    title: "Understand the vision",
    subtitle: "with AI-powered insights",
    features: [
      "Upload inspiration photos and let Bloom AI identify flowers",
      "Extract color palettes automatically from any image",
      "Capture style preferences and budget expectations",
    ],
    image: "https://placehold.co/600x400/e3f2fd/1565c0?text=Bloom+AI+Analysis",
  },
  {
    id: "design",
    title: "Design with confidence",
    subtitle: "and know your costs",
    features: [
      "Create recipes with ingredients, steps, and substitutions",
      "See real-time cost calculations as you build",
      "Plan every arrangement for the event",
    ],
    image: "https://placehold.co/600x400/fff3e0/ef6c00?text=Recipe+Builder",
  },
  {
    id: "proposal",
    title: "Send stunning proposals",
    subtitle: "that win bookings",
    features: [
      "Drag-and-drop visual proposal editor",
      "Client portal with no login required",
      "Track when they view and approve",
    ],
    image: "https://placehold.co/600x400/fce4ec/c2185b?text=Visual+Proposal",
  },
  {
    id: "production",
    title: "Convert to production",
    subtitle: "with one click",
    features: [
      "Event designs become orders instantly",
      "Generate recipe sheets for your team",
      "Assign tasks and track progress",
    ],
    image: "https://placehold.co/600x400/f3e5f5/7b1fa2?text=Production+Orders",
  },
  {
    id: "delivery",
    title: "Deliver and document",
    subtitle: "with proof",
    features: [
      "Photo proof at every delivery with timestamps",
      "Driver routes and mobile access",
      "Final invoicing and payment collection",
    ],
    image: "https://placehold.co/600x400/e0f2f1/00695c?text=Delivery+Proof",
  },
];

export const EventJourney = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Event Planning
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-balance">
            <span className="font-serif italic">From first inquiry</span>
            <br />
            <span className="font-serif italic font-semibold">to final invoice</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every wedding. Every event. One seamless workflow.
          </p>
        </div>

        {/* Alternating Sections */}
        <div className="space-y-16 md:space-y-24">
          {stages.map((stage, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={stage.id}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
                )}
              >
                {/* Content */}
                <div
                  className={cn(
                    "space-y-6",
                    isEven ? "md:order-1" : "md:order-2"
                  )}
                >
                  {/* Stage indicator */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-border max-w-[60px]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight">
                    <span className="font-serif italic">{stage.title}</span>
                    <br />
                    <span className="font-serif italic font-semibold">{stage.subtitle}</span>
                  </h3>

                  {/* Features */}
                  <ul className="space-y-3">
                    {stage.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div
                  className={cn(
                    "relative",
                    isEven ? "md:order-2" : "md:order-1"
                  )}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Subtle background decoration */}
                  <div
                    className={cn(
                      "absolute -z-10 w-72 h-72 rounded-full blur-3xl opacity-20",
                      isEven
                        ? "-bottom-10 -right-10 bg-primary/50"
                        : "-bottom-10 -left-10 bg-primary/30"
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-muted-foreground mb-4">
            Ready to streamline your event workflow?
          </p>
          <a
            href="/features/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-colors"
          >
            Explore Event Planning
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
