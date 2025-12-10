import {
  Sparkles,
  ClipboardList,
  CalendarHeart,
  GraduationCap,
  Truck,
  HelpCircle,
} from "lucide-react";
import { FeatureAnchorNav } from "./feature-anchor-nav";

const navItems = [
  { id: "capabilities", label: "Capabilities", icon: Sparkles },
  { id: "features", label: "Production Workflow", icon: ClipboardList },
  { id: "events", label: "Event Management", icon: CalendarHeart },
  { id: "showcase", label: "Workshops", icon: GraduationCap },
  { id: "deliveries", label: "Delivery Management", icon: Truck },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export const HomepageAnchorNav = () => {
  return <FeatureAnchorNav items={navItems} />;
};
