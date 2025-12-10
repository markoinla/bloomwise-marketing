import {
  Workflow,
  Globe,
  Truck,
  CreditCard,
  History,
  Smartphone,
} from "lucide-react";

import { FeatureAnchorNav } from "./feature-anchor-nav";
import { FeatureCapabilities } from "./feature-capabilities";

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

export const HomepageCapabilities = () => {
  return (
    <>
      <FeatureAnchorNav items={anchorNavItems} />
      <div id="capabilities">
        <FeatureCapabilities capabilities={capabilities} />
      </div>
    </>
  );
};
