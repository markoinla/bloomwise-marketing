import { FeatureShowcaseSection } from "./feature-showcase-grid";

// Showcase section data for homepage
const orderLifecycleBlock = {
  id: "order-lifecycle",
  title: "See all orders at a glance",
  features: [
    "View all orders with status, due date, customer, and source in one dashboard.",
    "Filter by status, date range, or fulfillment type to find exactly what you need.",
    "Color-coded status indicators show what needs attention right now.",
  ],
  image: "/app-screenshots/production-calendar.png",
};

const multiSourceBlock = {
  id: "multi-source",
  title: "Complete order information",
  features: [
    "See order items, customer details, shipping address, and full activity timeline.",
    "Each order item links to its recipe, showing ingredients and steps for production.",
    "Add notes, attachments, and custom fields to capture every detail.",
  ],
  image: "/app-screenshots/order-slip.png",
};

const fulfillmentBlock = {
  id: "fulfillment",
  title: "Mobile-optimized fulfillment",
  features: [
    "Mobile-friendly interface for fulfilling orders on the go.",
    "Capture photos and update status with a tap from any device.",
    "Perfect for production staff working on the shop floor.",
  ],
  image: "/app-screenshots/mobile-view.png",
};

const auditTrailBlock = {
  id: "audit-trail",
  title: "Never miss a detail",
  features: [
    "Complete audit trail showing every status change with timestamps.",
    "User attribution for all modifications—know who did what and when.",
    "Searchable history for quick reference and dispute resolution.",
  ],
  image: "/app-screenshots/production-calendar.png",
};

export const HomepageShowcase = () => {
  return (
    <FeatureShowcaseSection
      singleBlock={orderLifecycleBlock}
      doubleBlocks={[multiSourceBlock, fulfillmentBlock]}
      reversedBlock={auditTrailBlock}
    />
  );
};
