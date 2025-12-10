import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

interface AnchorItem {
  id: string;
  label: string;
}

interface FeatureAnchorNavProps {
  items: AnchorItem[];
}

export const FeatureAnchorNav = ({ items }: FeatureAnchorNavProps) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#f5f3ef] dark:bg-muted/50 border-y border-border/30">
      <div className="container">
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border",
                activeId === item.id
                  ? "bg-white dark:bg-background border-border/60 text-foreground shadow-sm"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/60 dark:hover:bg-background/60"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
