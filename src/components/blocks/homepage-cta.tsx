import { FeatureCTABanner } from "./feature-cta-banner";

export const HomepageCTA = () => {
  return (
    <FeatureCTABanner
      headline="See Bloomwise in action"
      subtext="Get a personalized walkthrough of how Bloomwise can transform your floral studio's workflow."
      primaryCTA={{
        text: "Schedule a Demo",
        href: "#waitlist",
      }}
    />
  );
};
