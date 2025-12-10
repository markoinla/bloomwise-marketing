import { useState, useEffect, useRef } from "react";

import {
  Workflow,
  Package,
  CalendarCheck,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const features: Feature[] = [
  {
    title: "End-to-end production workflow",
    description: "From orders and design, to delivery routes, optimize every aspect of your business.",
    icon: Workflow,
    image: "/app-screenshots/production-calendar.png",
  },
  {
    title: "Smart Recipe & inventory",
    description: "Easy-to-use AI recipe builder powered by an extensive flower database.",
    icon: Package,
    image: "/app-screenshots/ai-recipe-builder.png",
  },
  {
    title: "Stress free event planning",
    description: "Plan and execute flawless events with task and cost management tools.",
    icon: CalendarCheck,
    image: "/app-screenshots/event-workspace.png",
  },
  {
    title: "Shopify Integration",
    description: "Seamlessly connect your online store to streamline your online production management.",
    icon: ShoppingBag,
    image: "/app-screenshots/shopify-integration.png",
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-rotate tabs
  useEffect(() => {
    if (isHovering) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovering]);

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight sm:text-4xl md:mb-16 md:text-5xl lg:mb-20">
          Your floral studio runs better with Bloomwise
        </h2>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Tabs */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className={cn(
                    "group relative cursor-pointer rounded-2xl p-6 transition-all duration-300",
                    isActive ? "bg-muted" : "hover:bg-muted/50"
                  )}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex gap-4">
                    <div className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-lg border transition-colors",
                        isActive ? "bg-background border-primary text-primary shadow-sm" : "bg-muted border-transparent text-muted-foreground group-hover:bg-background"
                    )}>
                      <Icon className="size-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className={cn(
                          "font-semibold leading-none transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {/* Progress bar for active state */}
                  {isActive && (
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-border overflow-hidden rounded-full mt-4 max-lg:hidden">
                          <div className="h-full bg-primary animate-progress origin-left" style={{ animationDuration: '5000ms' }} />
                      </div>
                  )}
                  
                  {/* Mobile: Show image when active */}
                  <div className={cn("mt-6 lg:hidden", isActive ? "block" : "hidden")}>
                     <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full object-cover object-top"
                     />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Area (Desktop Only) */}
          <div className="relative hidden lg:col-span-7 lg:block">
            <div className="sticky top-24">
               <div className="aspect-[4/3] w-full relative">
                  {features.map((feature, index) => (
                      <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-500 flex items-center justify-center",
                            activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                        )}
                      >
                         <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-contain object-center"
                         />
                      </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress {
          animation-name: progress;
          animation-timing-function: linear;
        }
      `}</style>
    </section>
  );
};
