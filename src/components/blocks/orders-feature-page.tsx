import {
  Workflow,
  Globe,
  Truck,
  CreditCard,
  History,
  Smartphone,
} from "lucide-react";

import { FeatureCapabilities } from "./feature-capabilities";
import { FeatureCTABanner } from "./feature-cta-banner";
import { FeaturePageHero } from "./feature-page-hero";
import { FeatureScreenshots } from "./feature-screenshots";

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

const screenshots = [
  {
    id: "order-list",
    title: "Order List View",
    caption:
      "See all orders at a glance with status, due date, customer, and source. Filter by status, date, or fulfillment type.",
    image: "/app-screenshots/production-calendar.png",
  },
  {
    id: "order-detail",
    title: "Order Detail Page",
    caption:
      "Complete order information including items, customer details, shipping address, and the full activity timeline.",
    image: "/app-screenshots/order-slip.png",
  },
  {
    id: "order-items",
    title: "Order Items with Recipe",
    caption:
      "Each order item links to its recipe, showing ingredients and steps for production staff.",
    image: "/app-screenshots/ai-recipe-builder.png",
  },
  {
    id: "mobile-fulfillment",
    title: "Mobile Fulfillment",
    caption:
      "Mobile-optimized interface for fulfilling orders on the go. Capture photos and update status with a tap.",
    image: "/app-screenshots/mobile-view.png",
  },
];

export const OrdersFeaturePage = () => {
  return (
    <>
      <FeaturePageHero
        badge="Core Feature"
        headline="From order to delivery, completely under control"
        description="Whether orders come from Shopify, phone calls, walk-ins, or events—manage them all in one place. Track every status change, payment, and delivery with a complete audit trail."
        primaryVideo="https://pub-faf0922fa8834bc78dc4ad5d963b77c7.r2.dev/website-assets/design-demo.mp4"
      />

      <FeatureCapabilities
        title="Everything you need to manage orders"
        subtitle="Powerful features designed specifically for how florists work"
        capabilities={capabilities}
      />

      <FeatureScreenshots
        title="See it in action"
        subtitle="Explore the order management interface"
        screenshots={screenshots}
      />

      <FeatureCTABanner
        headline="Ready to take control of your orders?"
        subtext="Start your free trial and see how Bloomwise transforms order management."
      />
    </>
  );
};
