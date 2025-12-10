import {
  Workflow,
  Globe,
  Truck,
  CreditCard,
  History,
  Smartphone,
  Calendar,
  Package,
  Users,
} from "lucide-react";

import { FeatureAnchorNav } from "./feature-anchor-nav";
import { FeatureCapabilities } from "./feature-capabilities";
import { FeatureCTABanner } from "./feature-cta-banner";
import { FeatureExploreCards } from "./feature-explore-cards";
import { FeatureFAQ } from "./feature-faq";
import { FeaturePageHero } from "./feature-page-hero";
import { FeatureShowcaseSection } from "./feature-showcase-grid";

const anchorNavItems = [
  { id: "capabilities", label: "Capabilities" },
  { id: "order-lifecycle", label: "Order Lifecycle" },
  { id: "multi-source", label: "Multi-Source" },
  { id: "fulfillment", label: "Fulfillment" },
  { id: "explore", label: "Explore More" },
  { id: "faq", label: "FAQ" },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Complete Order Lifecycle",
    description:
      "Track orders through every stage: Draft → Pending → Confirmed → In Progress → Ready → Out for Delivery → Delivered → Completed. Never lose track of where an order stands.",
  },
  {
    icon: Globe,
    title: "Orders From Everywhere",
    description:
      "Shopify, phone, walk-in, email, events—all your orders in one unified view. Each source is clearly labeled so you know where business is coming from.",
  },
  {
    icon: Truck,
    title: "Flexible Fulfillment",
    description:
      "Pickup, delivery, shipping, or event setup—handle any fulfillment type. Set delivery addresses, assign drivers, and track completion.",
  },
  {
    icon: CreditCard,
    title: "Payment & Deposit Tracking",
    description:
      "Track payment status from pending to paid. Handle partial payments, deposits, and refunds. See outstanding balances at a glance.",
  },
  {
    icon: History,
    title: "Complete Audit Trail",
    description:
      "Every status change, note, and modification is logged with timestamps and user attribution. Know exactly what happened and when.",
  },
  {
    icon: Smartphone,
    title: "Mobile Order Fulfillment",
    description:
      "Fulfill orders from your phone. View recipe steps, capture photos, update status—perfect for production staff on the shop floor.",
  },
];

// Showcase section data
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

const exploreCards = [
  {
    icon: Calendar,
    title: "Event Planning",
    description:
      "Plan weddings, corporate events, and special occasions. Manage clients, venues, and convert event designs directly into production orders.",
    href: "/features/events",
    illustration: "charts" as const,
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track flowers, greenery, and supplies. Set reorder points, monitor stock levels, and see where every stem goes.",
    href: "/features/inventory",
    illustration: "connections" as const,
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Know your customers and remember their preferences. Track order history, allergies, design preferences, and lifetime value.",
    href: "/features/customers",
    illustration: "sensor" as const,
  },
];

const faqs = [
  {
    question: "How does Bloomwise handle orders from multiple channels?",
    answer:
      "Bloomwise automatically syncs orders from Shopify in real-time via webhooks. Phone orders, walk-ins, and email orders can be quickly entered manually. Every order shows its source clearly, so you always know where business is coming from.",
  },
  {
    question: "Can I track partial payments and deposits?",
    answer:
      "Yes! Bloomwise supports flexible payment tracking including deposits, partial payments, and payment plans. You can see outstanding balances at a glance and track payment history for each order.",
  },
  {
    question: "How do orders connect to recipes and production?",
    answer:
      "Each order item can be linked to a recipe. When your production team views an order, they see exactly how to make each arrangement—ingredients, steps, and any custom modifications the customer requested.",
  },
  {
    question: "Can my team update orders from their phones?",
    answer:
      "Absolutely. Bloomwise has a mobile-optimized interface that lets production staff view orders, check recipes, update status, and capture completion photos from any device. Perfect for the shop floor.",
  },
  {
    question: "What order statuses are available?",
    answer:
      "Orders flow through customizable stages: Draft, Pending, Confirmed, In Progress, Ready, Out for Delivery, Delivered, and Completed. You can see exactly where every order stands and what needs attention.",
  },
];

export const OrdersFeaturePageV2 = () => {
  return (
    <>
      <FeaturePageHero
        headline="Order Management"
        description="Whether orders come from Shopify, phone calls, walk-ins, or events—manage them all in one place. Track every status change, payment, and delivery with a complete audit trail."
        primaryVideo="https://pub-faf0922fa8834bc78dc4ad5d963b77c7.r2.dev/website-assets/design-demo.mp4"
        primaryCTA={{ text: "Start Free Trial", href: "#" }}
        secondaryCTA={{ text: "Book Demo", href: "#" }}
      />

      <FeatureAnchorNav items={anchorNavItems} />

      <div id="capabilities">
        <FeatureCapabilities capabilities={capabilities} />
      </div>

      <FeatureShowcaseSection
        singleBlock={orderLifecycleBlock}
        doubleBlocks={[multiSourceBlock, fulfillmentBlock]}
        reversedBlock={auditTrailBlock}
      />

      <FeatureCTABanner
        headline="Ready to take control of your orders?"
        features={[
          "Track orders from intake to delivery in one unified dashboard",
          "Sync automatically with Shopify—orders appear in seconds",
          "Mobile fulfillment for your production team",
        ]}
        primaryCTA={{ text: "Start Free Trial", href: "#" }}
      />

      <FeatureExploreCards
        id="explore"
        title="Explore More Features"
        cards={exploreCards}
      />

      <FeatureFAQ
        id="faq"
        title="Order Management FAQs"
        subtitle="Everything you need to know about managing orders in Bloomwise"
        faqs={faqs}
      />
    </>
  );
};
