import { useState } from "react";

import { cn } from "@/lib/utils";

interface Screenshot {
  id: string;
  title: string;
  caption: string;
  image: string;
}

interface FeatureScreenshotsProps {
  title?: string;
  subtitle?: string;
  screenshots: Screenshot[];
}

export const FeatureScreenshots = ({
  title = "See it in action",
  subtitle,
  screenshots,
}: FeatureScreenshotsProps) => {
  const [activeTab, setActiveTab] = useState(screenshots[0]?.id || "");

  const activeScreenshot = screenshots.find((s) => s.id === activeTab);

  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {subtitle}
            </p>
          )}
        </div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {screenshots.map((screenshot) => (
            <button
              key={screenshot.id}
              onClick={() => setActiveTab(screenshot.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === screenshot.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
              )}
            >
              {screenshot.title}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main screenshot container */}
          <div className="relative rounded-2xl border border-border/50 bg-background shadow-2xl overflow-hidden">
            {/* Browser mockup header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 bg-background rounded-md border border-border/30 max-w-md mx-auto flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">app.bloomwise.co</span>
                </div>
              </div>
            </div>

            {/* Screenshot content with crossfade */}
            <div className="relative aspect-[16/10] bg-muted/10">
              {screenshots.map((screenshot) => (
                <div
                  key={screenshot.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeTab === screenshot.id ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Caption */}
          {activeScreenshot && (
            <div className="mt-6 text-center animate-in fade-in duration-300">
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {activeScreenshot.caption}
              </p>
            </div>
          )}

          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-dashed border-primary/10 rounded-3xl -z-10 rotate-6" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-dashed border-primary/10 rounded-2xl -z-10 -rotate-12" />
        </div>
      </div>
    </section>
  );
};
