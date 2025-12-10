import { type LucideIcon, Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature {
  icon?: LucideIcon;
  text: string;
}

interface FeatureGridSectionProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  features?: Feature[];
  image: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  ctaHref?: string;
}

export const FeatureGridSection = ({
  id,
  badge,
  title,
  description,
  features,
  image,
  imageAlt,
  imagePosition = "right",
}: FeatureGridSectionProps) => {
  const isImageRight = imagePosition === "right";

  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-6xl">
        <div
          className={cn(
            "grid gap-10 lg:gap-16 items-center",
            "lg:grid-cols-2"
          )}
        >
          {/* Content - always render first in DOM for accessibility, use order for visual */}
          <div className={cn(isImageRight ? "lg:order-1" : "lg:order-2")}>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-balance">
              {title}
            </h2>

            {description && (
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                {description}
              </p>
            )}

            {features && features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {features.map((feature, index) => {
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1a5a3c] dark:bg-primary">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-foreground text-sm leading-relaxed">{feature.text}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className={cn(isImageRight ? "lg:order-2" : "lg:order-1")}>
            <div className="relative rounded-xl border border-border/40 bg-card shadow-lg overflow-hidden">
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
