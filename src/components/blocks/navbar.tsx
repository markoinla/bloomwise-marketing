import { useState, useEffect } from "react";

import {
  ChevronRight,
  Workflow,
  Package,
  CalendarCheck,
  ShoppingBag,
  Printer,
  Calendar
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    label: "Features",
    href: "#features",
    megamenu: true,
  },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// Megamenu content
const MEGAMENU_FEATURES = [
  {
    title: "AI Recipe Builder",
    description: "Build your catalog of floral recipes in only a few clicks",
    icon: Workflow,
    href: "/#resource-allocation",
  },
  {
    title: "Inventory Management",
    description: "See stock levels and create shopping lists",
    icon: Package,
    href: "/#resource-allocation",
  },
  {
    title: "Event Planning",
    description: "Manage tasks, budgets, and timelines for floral events",
    icon: CalendarCheck,
    href: "/#resource-allocation",
  },
  {
    title: "Shopify Integration",
    description: "Keep your online store in sync with production workflow",
    icon: ShoppingBag,
    href: "/#resource-allocation",
  },
  {
    title: "Order & Delivery Tools",
    description: "Print slips with all info including optimized routes",
    icon: Printer,
    href: "/#resource-allocation",
  },
  {
    title: "Production Calendars",
    description: "Clear overview of your upcoming orders and events",
    icon: Calendar,
    href: "/#resource-allocation",
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/bloomwise-line-logo.svg"
            alt="Bloomwise"
            width={160}
            height={60}
          />
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
              link.megamenu ? (
                <NavigationMenuItem key={link.label} className="">
                  <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-1.5">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-4">
                      <div className="grid grid-cols-[1fr_1fr_300px] gap-8">
                        {/* First Column - Features 1-3 */}
                        <div>
                          <ul className="space-y-1">
                            {MEGAMENU_FEATURES.slice(0, 3).map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.title}>
                                  <a
                                    href={item.href}
                                    className="hover:bg-accent group flex items-start gap-3 rounded-lg p-3 transition-colors"
                                  >
                                    <div className="text-primary flex size-10 shrink-0 items-center justify-center">
                                      <Icon className="size-5" strokeWidth={2} />
                                    </div>
                                    <div className="space-y-1">
                                      <div className="text-sm font-medium leading-none">
                                        {item.title}
                                      </div>
                                      <p className="text-muted-foreground text-xs leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Second Column - Features 4-6 */}
                        <div>
                          <ul className="space-y-1">
                            {MEGAMENU_FEATURES.slice(3, 6).map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.title}>
                                  <a
                                    href={item.href}
                                    className="hover:bg-accent group flex items-start gap-3 rounded-lg p-3 transition-colors"
                                  >
                                    <div className="text-primary flex size-10 shrink-0 items-center justify-center">
                                      <Icon className="size-5" strokeWidth={2} />
                                    </div>
                                    <div className="space-y-1">
                                      <div className="text-sm font-medium leading-none">
                                        {item.title}
                                      </div>
                                      <p className="text-muted-foreground text-xs leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Third Column - Placeholder Image */}
                        <div className="bg-muted flex items-center justify-center rounded-lg">
                          <div className="text-muted-foreground text-center text-sm">
                            <div className="mb-2 text-4xl">🖼️</div>
                            <div>Placeholder Image</div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Banner at bottom */}
                      <div className="bg-muted mt-6 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold">
                              Ready to get started?
                            </h4>
                            <p className="text-muted-foreground text-xs">
                              Join the waitlist and be the first to know when we launch
                            </p>
                          </div>
                          <a href="/#waitlist">
                            <Button size="sm" className="shrink-0">
                              Join Waitlist
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label} className="">
                  <a
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                      pathname === link.href && "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle className="hidden" />
          <a href="/login" className="max-lg:hidden">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </a>
          <a href="/signup" className="max-lg:hidden">
            <Button size="sm">
              Sign Up
            </Button>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y pb-4">
          {ITEMS.map((link) =>
            link.megamenu ? (
              <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="text-foreground flex w-full items-center justify-between text-base font-medium"
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openDropdown === link.label
                      ? "mt-4 max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="bg-muted/50 space-y-2 rounded-lg p-4">
                    {MEGAMENU_FEATURES.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          className="hover:bg-accent group flex items-start gap-3 rounded-md p-2 transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <div className="text-primary flex size-8 shrink-0 items-center justify-center">
                            <Icon className="size-4" strokeWidth={2} />
                          </div>
                          <div>
                            <div className="text-primary text-sm font-medium">
                              {item.title}
                            </div>
                            <p className="text-muted-foreground mt-0.5 text-xs">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-foreground hover:text-foreground/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                  pathname === link.href && "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-3 pt-4 border-t border-border">
          <a href="/login" className="w-full">
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </a>
          <a href="/signup" className="w-full">
            <Button className="w-full">
              Sign Up
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
