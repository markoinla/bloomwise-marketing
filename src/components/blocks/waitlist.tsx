import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DashedLine } from "../dashed-line";

export const Waitlist = () => {
  return (
    <section className="overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative mx-auto max-w-4xl">
          {/* Top dashed line */}
          <DashedLine orientation="horizontal" className="mb-12 md:mb-16" />

          {/* Content */}
          <div className="space-y-8 md:space-y-10">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Join the waitlist
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
                Be the first to know when Bloomwise launches. Get early access and exclusive updates.
              </p>
            </div>

            {/* Form */}
            <form className="mx-auto max-w-2xl space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Bloom & Co"
                    className="h-12"
                  />
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-base">
                    Website
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://example.com"
                    className="h-12"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg" className="min-w-48">
                  Join the waitlist
                </Button>
              </div>
            </form>
          </div>

          {/* Bottom dashed line */}
          <DashedLine orientation="horizontal" className="mt-12 md:mt-16" />
        </div>
      </div>
    </section>
  );
};
