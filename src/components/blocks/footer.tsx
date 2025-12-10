import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <section
      className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/design-images/cta-bg-3.svg')" }}
    >
      <div className="container max-w-3xl space-y-6 text-center relative z-10">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Join the waitlist
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Be the first to know when Bloomwise launches. Get early access and exclusive updates.
        </p>

        {/* Waitlist Form */}
        <form className="mx-auto max-w-2xl space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              id="footer-fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              required
              className="h-11"
            />
            <Input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="h-11"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              id="footer-company"
              name="company"
              type="text"
              placeholder="Company (optional)"
              className="h-11"
            />
            <Input
              id="footer-website"
              name="website"
              type="url"
              placeholder="Website (optional)"
              className="h-11"
            />
          </div>
          <div className="flex justify-center pt-2">
            <Button type="submit" size="lg" className="min-w-48">
              Join the waitlist
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
