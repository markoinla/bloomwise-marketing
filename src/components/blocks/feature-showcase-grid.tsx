import { Check } from "lucide-react";

interface FeatureBlock {
  id?: string;
  title: string;
  features: string[];
  image: string;
  imageAlt?: string;
}

interface FeatureShowcaseGridProps {
  blocks: FeatureBlock[];
  layout?: "single" | "double" | "reversed";
}

// Single block layout: content left, large image right (bleeds right)
const SingleLayout = ({ block }: { block: FeatureBlock }) => {
  return (
    <div id={block.id} className="rounded-2xl bg-[#f0f7f4] dark:bg-[#1a2f28] pt-6 md:pt-8 pl-6 md:pl-8 pb-0 pr-0 overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">
        {/* Content */}
        <div className="pb-6 md:pb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {block.title}
          </h3>
          <ul className="space-y-3">
            {block.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1a5a3c] dark:bg-primary">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image - bleeding out to the right and bottom */}
        <div className="-mr-12 -mb-8">
          <img
            src={block.image}
            alt={block.imageAlt || block.title}
            className="w-full h-auto object-cover rounded-tl-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

// Double block layout: two equal columns side by side with bleeding images
const DoubleLayout = ({ blocks }: { blocks: FeatureBlock[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blocks.map((block, index) => (
        <div key={index} id={block.id} className="rounded-2xl bg-[#f0f7f4] dark:bg-[#1a2f28] pt-6 px-6 pb-0 flex flex-col overflow-hidden">
          {/* Content */}
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {block.title}
            </h3>
            <ul className="space-y-2">
              {block.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#1a5a3c] dark:bg-primary">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image - bleeding out on outer sides (left image bleeds left, right image bleeds right) */}
          <div className={`mt-auto relative ${index === 0 ? '-ml-12 -mr-6' : '-mr-12 -ml-6'}`}>
            <img
              src={block.image}
              alt={block.imageAlt || block.title}
              className="w-full h-auto object-cover rounded-t-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Reversed layout: image left (bleeds left), content right
const ReversedLayout = ({ block }: { block: FeatureBlock }) => {
  return (
    <div id={block.id} className="rounded-2xl bg-[#f0f7f4] dark:bg-[#1a2f28] pt-6 md:pt-8 pr-6 md:pr-8 pb-0 pl-0 overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
        {/* Image - bleeding out to the left and bottom */}
        <div className="-ml-12 -mb-8">
          <img
            src={block.image}
            alt={block.imageAlt || block.title}
            className="w-full h-auto object-cover rounded-tr-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="pb-6 md:pb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {block.title}
          </h3>
          <ul className="space-y-3">
            {block.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1a5a3c] dark:bg-primary">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const FeatureShowcaseGrid = ({ blocks, layout = "single" }: FeatureShowcaseGridProps) => {
  if (layout === "double" && blocks.length >= 2) {
    return (
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <DoubleLayout blocks={blocks.slice(0, 2)} />
        </div>
      </section>
    );
  }

  if (layout === "reversed" && blocks.length >= 1) {
    return (
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <ReversedLayout block={blocks[0]} />
        </div>
      </section>
    );
  }

  // Default: single layout
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-6xl">
        <SingleLayout block={blocks[0]} />
      </div>
    </section>
  );
};

// Combined component that renders all sections in sequence
interface FeatureShowcaseSectionProps {
  id?: string;
  singleBlock: FeatureBlock;
  doubleBlocks: [FeatureBlock, FeatureBlock];
  reversedBlock: FeatureBlock;
}

export const FeatureShowcaseSection = ({
  id,
  singleBlock,
  doubleBlocks,
  reversedBlock,
}: FeatureShowcaseSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24 space-y-12 md:space-y-16">
      <div className="container max-w-6xl">
        {/* Row 1: Single layout */}
        <div className="mb-12 md:mb-16">
          <SingleLayout block={singleBlock} />
        </div>

        {/* Row 2: Double layout */}
        <div className="mb-12 md:mb-16">
          <DoubleLayout blocks={doubleBlocks} />
        </div>

        {/* Row 3: Reversed layout */}
        <div>
          <ReversedLayout block={reversedBlock} />
        </div>
      </div>
    </section>
  );
};
