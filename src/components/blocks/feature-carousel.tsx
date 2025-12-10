import { useState, useRef, useEffect, useCallback } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface FeatureCarouselProps {
  headline?: string;
  headlineAccent?: string;
  subheadline?: string;
  items: CarouselItem[];
}

const defaultItems: CarouselItem[] = [
  {
    id: "1",
    image: "/design-images/features-carousel/inventory.jpg",
    title: "Never run out",
    description: "Track every stem and supply in real-time. Set reorder points, get low-stock alerts, and see where inventory goes.",
  },
  {
    id: "2",
    image: "/design-images/features-carousel/events.jpg",
    title: "Event planning made easy",
    description: "From consultation to delivery day, keep every detail organized. Capture color palettes, manage contacts, and convert designs to orders.",
  },
  {
    id: "3",
    image: "/design-images/features-carousel/recipes.jpg",
    title: "Recipes that make money",
    description: "Document your designs with ingredients, steps, and costs. Track profitability and ensure consistent quality across your team.",
  },
  {
    id: "4",
    image: "/design-images/features-carousel/bloom-ai.jpg",
    title: "AI-powered design assistant",
    description: "Upload inspiration photos and let Bloom AI identify flowers, extract color palettes, and generate complete recipes in seconds.",
  },
  {
    id: "5",
    image: "/design-images/features-carousel/shopify.jpg",
    title: "True Shopify sync",
    description: "Two-way sync keeps products, orders, and customers aligned. Changes in either system stay in sync automatically.",
  },
];

export const FeatureCarousel = ({
  headline = "Every tool you need",
  headlineAccent = "to run your floral business",
  subheadline = "From order management to inventory tracking, Bloomwise brings everything together so nothing falls through the cracks.",
  items = defaultItems,
}: FeatureCarouselProps) => {
  // Create tripled items for infinite scroll effect
  const extendedItems = [...items, ...items, ...items];
  const itemCount = items.length;

  // Start in the middle set
  const [activeIndex, setActiveIndex] = useState(itemCount + Math.floor(itemCount / 2));
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // Custom smooth scroll with configurable duration
  const smoothScrollTo = useCallback((container: HTMLElement, targetLeft: number, duration: number) => {
    const startLeft = container.scrollLeft;
    const distance = targetLeft - startLeft;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      container.scrollLeft = startLeft + (distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToIndex = useCallback((index: number, smooth = true) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('[data-carousel-card]');
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        if (smooth) {
          smoothScrollTo(container, scrollLeft, 800); // 800ms slide duration
        } else {
          container.scrollLeft = scrollLeft;
        }
      }
    }
  }, [smoothScrollTo]);

  // Reset to middle set when reaching the edges
  useEffect(() => {
    if (isTransitioning.current) return;

    const timer = setTimeout(() => {
      if (activeIndex < itemCount) {
        // Jumped to first set, reset to middle set
        isTransitioning.current = true;
        const newIndex = activeIndex + itemCount;
        setActiveIndex(newIndex);
        scrollToIndex(newIndex, false);
        setTimeout(() => { isTransitioning.current = false; }, 100);
      } else if (activeIndex >= itemCount * 2) {
        // Jumped to last set, reset to middle set
        isTransitioning.current = true;
        const newIndex = activeIndex - itemCount;
        setActiveIndex(newIndex);
        scrollToIndex(newIndex, false);
        setTimeout(() => { isTransitioning.current = false; }, 100);
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [activeIndex, itemCount, scrollToIndex]);

  const handlePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  useEffect(() => {
    // Initial scroll to center the active card
    scrollToIndex(activeIndex, false);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-balance">
            <span className="font-serif italic">{headline}</span>
            <br />
            <span className="font-serif italic font-semibold">{headlineAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {subheadline}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Cards container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-[calc(50vw-140px)] md:px-[calc(50vw-160px)] py-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${item.id}-${index}`}
                data-carousel-card
                onClick={() => handleCardClick(index)}
                className={cn(
                  "flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer transition-all duration-300 ease-out",
                  isActive ? "scale-105 z-10" : "scale-95 opacity-70 hover:opacity-90"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl overflow-hidden transition-all duration-300 ease-out",
                    isActive
                      ? "shadow-xl ring-1 ring-border/50 bg-background"
                      : "shadow-md bg-muted/30"
                  )}
                >
                  {/* Image area */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-background">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors shadow-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
