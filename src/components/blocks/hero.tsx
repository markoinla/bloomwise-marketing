import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./dashboard-mockup";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-16 lg:pt-60 lg:pb-16 relative">
      {/* Flipped decorative background at top */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none overflow-hidden max-h-[320px]" style={{ transform: 'scaleY(-1)' }}>
        <img
          src="/design-images/cta-bg-home.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      <div className="container relative z-10">
        {/* Main content - centered */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-foreground mx-auto text-4xl leading-tight tracking-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
            The <span className="font-semibold">Operating System</span> for Professional Florists
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl lg:text-2xl">
         Bloomwise is the AI-powered platform for managing your entire floral business. <span className="font-italic">Ditch the scary spreadsheet today.</span>
            </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
              <a href="#">Join the waitlist</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="from-background gap-2 bg-linear-to-r to-transparent shadow-md hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a href="#">
                Sign up for a demo
                <ArrowRight className="size-5" strokeWidth={2} />
              </a>
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 md:mt-20 lg:mt-24 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32">
          <div className="max-w-[1400px] mx-auto px-4">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
