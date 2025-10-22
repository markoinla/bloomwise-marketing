import {
  Workflow,
  Package,
  CalendarCheck,
  ShoppingBag,
} from "lucide-react";
import { DashedLine } from "../dashed-line";

const features = [
  {
    title: "Manage your end-to-end production workflow",
    description: "From orders and design, to delivery routes, optimize every aspect of your business.",
    icon: Workflow,
  },
  {
    title: "Smart Recipe & inventory management",
    description: "Easy-to-use AI recipe builder powered by an extensive flower database.",
    icon: Package,
  },
  {
    title: "Stress free floral event planning",
    description: "Plan and execute flawless events with task and cost management tools.",
    icon: CalendarCheck,
  },
  {
    title: "Shopify Integration",
    description: "Seamlessly connect your online store to streamline your online production management.",
    icon: ShoppingBag,
  },
];

export const FeaturesCards = () => {
  return (
    <section className="overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight sm:text-4xl md:mb-16 md:text-5xl lg:mb-20">
          Your floral studio runs better with Bloomwise
        </h2>

        <div className="relative mx-auto max-w-6xl">
          {/* Center vertical dashed line */}
          <DashedLine
            orientation="vertical"
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 max-md:hidden"
          />

          <div className="space-y-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              const isLast = index === features.length - 1;

              return (
                <div key={feature.title} className="relative">
                  {/* Horizontal dashed line at top */}
                  <DashedLine
                    orientation="horizontal"
                    className="w-full"
                  />

                  <div
                    className={`flex flex-col gap-6 py-8 md:flex-row md:items-center md:gap-8 md:py-12 lg:gap-12 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Icon Card - positioned to overlap center line */}
                    <div
                      className={`flex shrink-0 items-center justify-center md:basis-1/2 ${
                        isEven ? "md:justify-end md:pr-8 lg:pr-12" : "md:justify-start md:pl-8 lg:pl-12"
                      }`}
                    >
                      <div className="bg-background relative z-10 flex size-20 items-center justify-center rounded-2xl border-2 border-primary/20 shadow-lg md:size-24 lg:size-28">
                        <Icon className="text-primary size-10 md:size-12 lg:size-14" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`md:basis-1/2 ${
                      isEven ? "md:pl-0" : "md:pr-0"
                    }`}>
                      <div className="space-y-3">
                        <h3 className="text-foreground text-xl font-semibold md:text-2xl">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom horizontal line for last item */}
                  {isLast && (
                    <DashedLine
                      orientation="horizontal"
                      className="w-full"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
