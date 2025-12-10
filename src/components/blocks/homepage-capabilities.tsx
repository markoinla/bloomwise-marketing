import {
  Database,
  BookOpen,
  Sparkles,
  RefreshCw,
  CalendarCheck,
  FileText,
  Truck,
  Smartphone,
  Users,
  Calculator,
  History,
  Package,
  Zap,
  MessageSquare,
  Globe,
} from "lucide-react";

import { FeatureCapabilities } from "./feature-capabilities";

const capabilities = [
  // First 6 (visible by default)
  {
    icon: Database,
    title: "Unified Platform",
    description:
      "Single database for orders, inventory, recipes, events, customers, deliveries. Everything connects—order items link to recipes, recipes link to inventory.",
  },
  {
    icon: BookOpen,
    title: "Recipe-Centric Production",
    description:
      "Recipes as production templates with ingredient-level documentation, substitution options, step-by-step instructions, and automatic cost calculation.",
  },
  {
    icon: Sparkles,
    title: "Bloom AI",
    description:
      "Upload inspiration photos to identify flowers automatically, extract color palettes, generate recipes, and estimate complexity.",
  },
  {
    icon: RefreshCw,
    title: "True Two-Way Shopify Sync",
    description:
      "Bidirectional sync for products, orders, and customers. Real-time webhooks—changes appear in seconds. Recipe-to-product mapping for production.",
  },
  {
    icon: CalendarCheck,
    title: "Event-to-Order Workflow",
    description:
      "Full event lifecycle from inquiry to completion. Color palettes, multiple arrangements, and one-click conversion from event design to production orders.",
  },
  {
    icon: FileText,
    title: "Visual Event Proposal",
    description:
      "Drag-and-drop proposal editor with client portal. Track when clients view your proposal and capture one-click approvals. Version control built in.",
  },
  // Second 6 (hidden behind "View More")
  {
    icon: Truck,
    title: "Delivery Management",
    description:
      "Photo proof at every delivery with timestamps and GPS. Organize driver routes, handle failures gracefully, and eliminate disputes with documentation.",
  },
  {
    icon: Smartphone,
    title: "Mobile Production View",
    description:
      "Fulfill orders from your phone. View recipe steps, capture completion photos, update status—perfect for production staff on the shop floor.",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Assign tasks to team members, track who's working on what, and see production progress at a glance. Role-based permissions keep everyone focused.",
  },
  {
    icon: Calculator,
    title: "Budget & Cost Calculation",
    description:
      "Real-time cost tracking for every recipe and event. See exact margins before you quote. When ingredient prices change, costs update automatically.",
  },
  {
    icon: History,
    title: "Complete Audit Trail",
    description:
      "Every status change, note, and modification is logged with timestamps and user attribution. Know exactly what happened and when.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track stems, supplies, and containers. Set reorder points, get low-stock alerts, and see exactly where inventory goes with full movement history.",
  },
  // Technical capabilities
  {
    icon: Zap,
    title: "Real-Time Webhooks",
    description:
      "Instant data sync across all integrations. Shopify orders appear in seconds, not hours. No batch processing delays or manual refreshes.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description:
      "Contact clients directly through Bloomwise. Track every conversation, send updates, and keep your entire communication history tied to the order or event.",
  },
  {
    icon: Globe,
    title: "API-First Design",
    description:
      "RESTful API for custom integrations. Connect your POS, accounting software, or build custom workflows. Extensible by design.",
  },
];

export const HomepageCapabilities = () => {
  return <FeatureCapabilities capabilities={capabilities} initialVisible={6} />;
};
