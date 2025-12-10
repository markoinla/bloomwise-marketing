import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FeatureCTABannerProps {
  headline: string;
  subtext?: string;
  features?: string[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  contained?: boolean;
}

export const FeatureCTABanner = ({
  headline,
  subtext,
  features,
  primaryCTA = { text: "Start Free", href: "#" },
  contained = false,
}: FeatureCTABannerProps) => {
  const textContent = (
    <div className="relative z-10 container">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl text-[#0c4a6e] text-balance">
          {headline}
        </h2>

        {features && features.length > 0 && (
          <ul className="mt-6 space-y-2 inline-flex flex-col items-start">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-[#0369a1] text-sm">
                <Check className="w-4 h-4 text-[#0284c7]" strokeWidth={2.5} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {subtext && (
          <p className="mt-4 text-[#0369a1]/80 text-pretty">
            {subtext}
          </p>
        )}

        <div className="mt-8">
          <Button
            size="lg"
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-full px-8 h-12 font-medium"
            asChild
          >
            <a href={primaryCTA.href}>
              {primaryCTA.text}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  if (contained) {
    return (
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] py-16 md:py-20 px-8 md:px-16">
            {textContent}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] py-16 md:py-20 rounded-b-2xl overflow-hidden">
      {/* Background image - positioned to bleed outside container */}
      <div
        className="absolute inset-y-0 right-0 w-full pointer-events-none"
        style={{
          backgroundImage: "url('/design-images/hero-bg-1.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      />
      {textContent}
    </section>
  );
};
