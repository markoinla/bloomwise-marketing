import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-16 lg:pt-60 lg:pb-16 relative">
      {/* Flipped decorative background at top */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none" style={{ transform: 'scaleY(-1)' }}>
        <img
          src="/design-images/cta-bg-home.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      <div className="container relative z-10">
        {/* Main content - centered */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-primary mb-4 font-medium tracking-wide md:text-xl">
            Built by florists, for florists
          </p>
          <h1 className="text-foreground mx-auto text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Let your business bloom
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl lg:text-2xl">
            Bloomwise is an AI-powered platform that helps you manage and optimize every aspect of your floral business.
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

        {/* Video demo */}
        <div className="mt-16 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:mt-24">
          <div className="relative h-[793px] w-full rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
            <video
              src="https://pub-faf0922fa8834bc78dc4ad5d963b77c7.r2.dev/website-assets/design-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
