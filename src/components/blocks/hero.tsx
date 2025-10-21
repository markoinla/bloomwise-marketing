import {
  ArrowRight,
  Workflow,
  Package,
  CalendarCheck,
  ShoppingBag,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

const features = [
  {
    title: "Manage your end-to-end production workflow",
    description: "From orders and design, to smart delivery routes, optimize every aspect of your business.",
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

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">

          <p className="text-primary my-2 text-lg font-medium md:text-xl">
            Built by florists, for florists.
          </p>
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Make your floral business bloom
          </h1>


          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Bloomwise is an AI-powered platform for managing every aspect of your floral business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href={GITHUB_URL}>Get template</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="https://shadcnblocks.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Built by shadcnblocks.com
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-primary mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <video
            src="/design-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
