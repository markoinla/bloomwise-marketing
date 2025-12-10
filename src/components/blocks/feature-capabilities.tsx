import { type LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCapabilitiesProps {
  title?: string;
  subtitle?: string;
  capabilities: Capability[];
}

export const FeatureCapabilities = ({
  title = "Key Capabilities",
  subtitle,
  capabilities,
}: FeatureCapabilitiesProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-6xl">
        {/* Capabilities grid */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="text-center animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
              >
                {/* Decorative icon */}
                <div className="mb-5 flex justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] dark:bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#1a5a3c] dark:text-primary" strokeWidth={1.5} />
                    </div>
                    {/* Small decorative dots */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#ffd54f]" />
                    <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 rounded-full bg-[#81d4fa]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty text-sm">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
