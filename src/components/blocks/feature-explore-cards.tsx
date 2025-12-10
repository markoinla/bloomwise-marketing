import { type LucideIcon } from "lucide-react";

interface ExploreCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  illustration?: "charts" | "connections" | "sensor";
}

interface FeatureExploreCardsProps {
  id?: string;
  title?: string;
  subtitle?: string;
  cards: ExploreCard[];
}

const CardIllustration = ({ type }: { type?: ExploreCard["illustration"] }) => {
  const baseClass = "w-full h-32 flex items-center justify-center";

  switch (type) {
    case "charts":
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 200 100" className="w-40 h-20">
            {/* Chart bars */}
            <rect x="20" y="60" width="25" height="30" fill="#e8f5e9" rx="3" />
            <rect x="55" y="40" width="25" height="50" fill="#c8e6c9" rx="3" />
            <rect x="90" y="20" width="25" height="70" fill="#a5d6a7" rx="3" />
            <rect x="125" y="35" width="25" height="55" fill="#81c784" rx="3" />
            <rect x="160" y="50" width="25" height="40" fill="#66bb6a" rx="3" />
            {/* Decorative dots */}
            <circle cx="32" cy="50" r="3" fill="#ffd54f" />
            <circle cx="175" cy="40" r="2" fill="#81d4fa" />
          </svg>
        </div>
      );
    case "connections":
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 200 100" className="w-40 h-20">
            {/* Network nodes */}
            <circle cx="100" cy="50" r="15" fill="#a5d6a7" />
            <circle cx="40" cy="30" r="10" fill="#c8e6c9" />
            <circle cx="160" cy="30" r="10" fill="#c8e6c9" />
            <circle cx="50" cy="80" r="8" fill="#e8f5e9" />
            <circle cx="150" cy="75" r="8" fill="#e8f5e9" />
            {/* Connection lines */}
            <line x1="55" y1="35" x2="85" y2="45" stroke="#81c784" strokeWidth="2" />
            <line x1="115" y1="45" x2="150" y2="35" stroke="#81c784" strokeWidth="2" />
            <line x1="60" y1="75" x2="90" y2="60" stroke="#a5d6a7" strokeWidth="2" />
            <line x1="140" y1="70" x2="110" y2="58" stroke="#a5d6a7" strokeWidth="2" />
            {/* Decorative accents */}
            <circle cx="100" cy="50" r="4" fill="#1a5a3c" />
            <circle cx="30" cy="60" r="3" fill="#ffd54f" />
            <circle cx="175" cy="55" r="2" fill="#81d4fa" />
          </svg>
        </div>
      );
    case "sensor":
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 200 100" className="w-40 h-20">
            {/* Sensor/radar waves */}
            <path d="M100,80 Q60,50 100,20 Q140,50 100,80" fill="none" stroke="#c8e6c9" strokeWidth="2" />
            <path d="M100,70 Q70,50 100,30 Q130,50 100,70" fill="none" stroke="#a5d6a7" strokeWidth="2" />
            <path d="M100,60 Q80,50 100,40 Q120,50 100,60" fill="none" stroke="#81c784" strokeWidth="2" />
            {/* Center point */}
            <circle cx="100" cy="50" r="8" fill="#66bb6a" />
            <circle cx="100" cy="50" r="4" fill="#1a5a3c" />
            {/* Data points */}
            <circle cx="60" cy="45" r="4" fill="#e8f5e9" />
            <circle cx="140" cy="55" r="4" fill="#e8f5e9" />
            {/* Decorative */}
            <circle cx="45" cy="70" r="3" fill="#ffd54f" />
            <circle cx="160" cy="30" r="2" fill="#81d4fa" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={baseClass}>
          <div className="w-16 h-16 rounded-xl bg-[#e8f5e9] flex items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-[#81c784]" />
          </div>
        </div>
      );
  }
};

export const FeatureExploreCards = ({
  id,
  title = "Explore More",
  subtitle,
  cards,
}: FeatureExploreCardsProps) => {
  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground text-pretty">
              {subtitle}
            </p>
          )}
        </div>

        {/* Decorative arrow */}
        <div className="flex justify-end mb-4 pr-8">
          <svg viewBox="0 0 60 60" className="w-12 h-12 text-[#ffd54f]">
            <path d="M10,50 Q30,30 50,35" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <polygon points="45,28 55,35 48,42" fill="currentColor" />
          </svg>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            return (
              <a
                key={index}
                href={card.href}
                className="group relative rounded-xl border border-border/40 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border"
              >
                {/* Illustration area */}
                <div className="bg-[#f5f3ef] dark:bg-muted/30">
                  <CardIllustration type={card.illustration} />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
