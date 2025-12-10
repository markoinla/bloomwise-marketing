import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FeaturePageHeroProps {
  headline: string;
  description: string;
  primaryImage?: string;
  primaryImageAlt?: string;
  primaryVideo?: string;
  badge?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export const FeaturePageHero = ({
  headline,
  description,
  primaryImage,
  primaryImageAlt,
  primaryVideo,
  badge,
  primaryCTA = { text: "Start Free", href: "#" },
  secondaryCTA = { text: "Learn more", href: "#" },
}: FeaturePageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] animate-in fade-in slide-in-from-bottom-3 duration-500 text-balance">
              {headline}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100 text-pretty">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200">
              <Button
                size="lg"
                className="group bg-[#1a5a3c] hover:bg-[#145a34] text-white rounded-full px-6 h-11 font-medium"
                asChild
              >
                <a href={primaryCTA.href}>
                  {primaryCTA.text}
                </a>
              </Button>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center gap-1.5 text-foreground font-medium hover:text-primary transition-colors group"
              >
                {secondaryCTA.text}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right: Media */}
          <div className="relative animate-in fade-in slide-in-from-right-6 duration-600 delay-150">
            {/* Media content - Video or Screenshot */}
            <div className="relative rounded-xl border border-border/40 bg-card shadow-xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                {primaryVideo ? (
                  <video
                    src={primaryVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                ) : primaryImage ? (
                  <img
                    src={primaryImage}
                    alt={primaryImageAlt || "Feature screenshot"}
                    className="w-full h-full object-cover object-top"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
