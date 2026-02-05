import {
  Calendar,
  Package,
  Truck,
  Users,
  CalendarDays,
  FileText,
  Briefcase,
  BookOpen,
  Box,
  Sparkles,
  Warehouse,
  Receipt,
  ShoppingCart,
  Search,
  Bell,
  Plus,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
      active
        ? "bg-white/15 text-white font-medium"
        : "text-white/70 hover:bg-white/10 hover:text-white"
    }`}
  >
    <Icon className="w-4 h-4 shrink-0" />
    <span className="truncate">{label}</span>
    {badge && (
      <span className="ml-auto text-[10px] bg-[#9333ea] text-white px-1.5 py-0.5 rounded-full font-medium">
        {badge}
      </span>
    )}
  </div>
);

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-6">
    <div className="px-3 mb-2 text-[10px] font-semibold text-white/40 uppercase tracking-wider">
      {title}
    </div>
    <div className="space-y-0.5">{children}</div>
  </div>
);

const StatCard = ({
  label,
  amount,
  orders,
  events,
  trend,
  delay = 0,
}: {
  label: string;
  amount: string;
  orders: number;
  events: number;
  trend?: "up" | "down";
  delay?: number;
}) => (
  <div
    className="bg-white rounded-xl border border-gray-200 p-4 flex-1 min-w-[160px] animate-fade-in-up opacity-0"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-gray-500">{label}</span>
      <Calendar className="w-3.5 h-3.5 text-gray-400" />
    </div>
    <div className="text-2xl font-semibold text-gray-900">{amount}</div>
    <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
      <span>
        <span className={trend === "up" ? "text-green-600" : trend === "down" ? "text-red-500" : ""}>
          {orders}
        </span>{" "}
        orders
      </span>
      <span>
        <span className="text-purple-600">{events}</span> events
      </span>
    </div>
  </div>
);

const CalendarDay = ({
  day,
  orders = [],
  isToday = false,
  isOtherMonth = false,
}: {
  day: number;
  orders?: { name: string; color: string }[];
  isToday?: boolean;
  isOtherMonth?: boolean;
}) => (
  <div
    className={`min-h-[72px] p-1 border-b border-r border-gray-100 ${
      isOtherMonth ? "bg-gray-50/50" : "bg-white"
    }`}
  >
    <div
      className={`text-xs mb-1 ${
        isToday
          ? "bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-medium"
          : isOtherMonth
            ? "text-gray-300"
            : "text-gray-600"
      }`}
    >
      {day}
    </div>
    <div className="space-y-0.5">
      {orders.slice(0, 3).map((order, i) => (
        <div
          key={i}
          className={`text-[9px] px-1 py-0.5 rounded truncate ${order.color}`}
        >
          {order.name}
        </div>
      ))}
      {orders.length > 3 && (
        <div className="text-[9px] text-gray-400 px-1">
          +{orders.length - 3} more
        </div>
      )}
    </div>
  </div>
);

const StockAlert = ({
  name,
  qty,
  status,
}: {
  name: string;
  qty: string;
  status: "low" | "out";
}) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
    <div>
      <div className="text-sm text-gray-800">{name}</div>
      <div className="text-xs text-gray-400">{qty}</div>
    </div>
    <span
      className={`text-xs font-medium ${status === "out" ? "text-red-500" : "text-orange-500"}`}
    >
      {status === "out" ? "Out" : "Low"}
    </span>
  </div>
);

export const DashboardMockup = () => {
  const fadeInUpKeyframes = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.5s ease-out;
    }
  `;

  const calendarOrders = [
    { name: "@ Bethany Sal...", color: "bg-green-100 text-green-700" },
    { name: "@ Sarah Develo...", color: "bg-purple-100 text-purple-700" },
    { name: "@ Beth-Ann...", color: "bg-pink-100 text-pink-700" },
    { name: "@ Judy Werner", color: "bg-blue-100 text-blue-700" },
    { name: "@ Fernandez Fe...", color: "bg-orange-100 text-orange-700" },
    { name: "@ Stacy Hunter", color: "bg-green-100 text-green-700" },
    { name: "V Viola Floral V...", color: "bg-yellow-100 text-yellow-700" },
    { name: "@ Beatrice Rans...", color: "bg-pink-100 text-pink-700" },
    { name: "@ Mandy Front", color: "bg-purple-100 text-purple-700" },
    { name: "@ Private Resi...", color: "bg-gray-100 text-gray-700" },
  ];

  return (
    <div className="w-full bg-gray-100 rounded-2xl overflow-hidden flex pointer-events-none select-none" style={{ height: "820px", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}>
      <style>{fadeInUpKeyframes}</style>
      {/* Sidebar */}
      <div className="w-[220px] bg-[#413C4F] flex flex-col shrink-0">
        {/* Logo */}
        <div className="p-4 flex items-center gap-2">
          <img
            src="/bloomwise-line-logo.svg"
            alt="Bloomwise"
            className="h-7 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Search */}
        <div className="px-3 mb-2">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-white/50 text-sm">
            <Search className="w-4 h-4" />
            <span>Search...</span>
            <span className="ml-auto text-xs bg-white/10 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto px-2">
          <SidebarItem icon={Calendar} label="Dashboard" active />

          <SidebarSection title="Production">
            <SidebarItem icon={Package} label="Orders" badge="New" />
            <SidebarItem icon={Truck} label="Deliveries" />
            <SidebarItem icon={Users} label="Customers" />
          </SidebarSection>

          <SidebarSection title="Events & Workshops">
            <SidebarItem icon={CalendarDays} label="Events" badge="New" />
            <SidebarItem icon={FileText} label="Proposals" badge="New" />
            <SidebarItem icon={Briefcase} label="Workshops" />
          </SidebarSection>

          <SidebarSection title="Recipes & Products">
            <SidebarItem icon={BookOpen} label="Recipes" />
            <SidebarItem icon={Box} label="Products" />
            <SidebarItem icon={Sparkles} label="Bloom AI" badge="New" />
          </SidebarSection>

          <SidebarSection title="Inventory">
            <SidebarItem icon={Warehouse} label="Inventory" />
            <SidebarItem icon={Receipt} label="Vendor Invoices" />
            <SidebarItem icon={ShoppingCart} label="Shopping Lists" />
          </SidebarSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f8f7fa]">
        {/* Header */}
        <div className="h-14 bg-[#413C4F] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <RefreshCw className="w-4 h-4" />
              Sync Orders
            </button>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-lg font-medium">
              <Plus className="w-4 h-4" />
              New Order
            </button>
            <div className="w-8 h-8 bg-white/20 rounded-full ml-2"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Welcome */}
          <div className="mb-6">
            <p className="text-gray-600">
              Welcome back, Marko. Here's what's happening today.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <StatCard
              label="Last 7 Days"
              amount="$12,810"
              orders={111}
              events={27}
              trend="up"
              delay={100}
            />
            <StatCard
              label="Last 30 Days"
              amount="$55,960"
              orders={409}
              events={87}
              delay={200}
            />
            <StatCard
              label="Next 7 Days"
              amount="$3,811"
              orders={29}
              events={8}
              delay={300}
            />
            <StatCard
              label="Next 30 Days"
              amount="$6,079"
              orders={43}
              events={12}
              delay={400}
            />
          </div>

          {/* Calendar and Alerts */}
          <div className="flex gap-6">
            {/* Calendar */}
            <div
              className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden animate-fade-in-up opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="font-semibold text-gray-900">Orders Calendar</h2>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    112 items
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-gray-500">Delivery</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="text-gray-500">Pickup</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-gray-500">Events</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="text-gray-500">Workshops</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  </button>
                  <span className="text-sm font-medium text-gray-900">
                    February 2026
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div
                    key={day}
                    className="text-xs font-medium text-gray-500 p-2 text-center border-b border-r border-gray-100 bg-gray-50"
                  >
                    {day}
                  </div>
                ))}

                {/* Week 1 */}
                <CalendarDay day={1} isOtherMonth />
                <CalendarDay
                  day={2}
                  orders={[calendarOrders[0], calendarOrders[2]]}
                />
                <CalendarDay
                  day={3}
                  orders={[calendarOrders[1], calendarOrders[3]]}
                />
                <CalendarDay
                  day={4}
                  isToday
                  orders={[calendarOrders[4], calendarOrders[0]]}
                />
                <CalendarDay
                  day={5}
                  orders={[calendarOrders[5], calendarOrders[7]]}
                />
                <CalendarDay
                  day={6}
                  orders={[calendarOrders[6], calendarOrders[8]]}
                />
                <CalendarDay
                  day={7}
                  orders={[calendarOrders[9], calendarOrders[2]]}
                />

                {/* Week 2 */}
                <CalendarDay
                  day={8}
                  orders={[calendarOrders[3], calendarOrders[5]]}
                />
                <CalendarDay
                  day={9}
                  orders={[calendarOrders[0], calendarOrders[1]]}
                />
                <CalendarDay
                  day={10}
                  orders={[calendarOrders[4], calendarOrders[7]]}
                />
                <CalendarDay
                  day={11}
                  orders={[calendarOrders[8], calendarOrders[2]]}
                />
                <CalendarDay
                  day={12}
                  orders={[calendarOrders[6], calendarOrders[9]]}
                />
                <CalendarDay
                  day={13}
                  orders={[calendarOrders[1], calendarOrders[3]]}
                />
                <CalendarDay
                  day={14}
                  orders={[calendarOrders[5], calendarOrders[0]]}
                />

                {/* Week 3 */}
                <CalendarDay
                  day={15}
                  orders={[calendarOrders[7], calendarOrders[4]]}
                />
                <CalendarDay
                  day={16}
                  orders={[calendarOrders[2], calendarOrders[8]]}
                />
                <CalendarDay
                  day={17}
                  orders={[calendarOrders[9], calendarOrders[1]]}
                />
                <CalendarDay
                  day={18}
                  orders={[calendarOrders[3], calendarOrders[6]]}
                />
                <CalendarDay
                  day={19}
                  orders={[calendarOrders[0], calendarOrders[5]]}
                />
                <CalendarDay
                  day={20}
                  orders={[calendarOrders[4], calendarOrders[7]]}
                />
                <CalendarDay
                  day={21}
                  orders={[calendarOrders[8], calendarOrders[2]]}
                />

                {/* Week 4 */}
                <CalendarDay
                  day={22}
                  orders={[calendarOrders[1], calendarOrders[9]]}
                />
                <CalendarDay
                  day={23}
                  orders={[calendarOrders[6], calendarOrders[3]]}
                />
                <CalendarDay
                  day={24}
                  orders={[calendarOrders[5], calendarOrders[0]]}
                />
                <CalendarDay
                  day={25}
                  orders={[calendarOrders[7], calendarOrders[4]]}
                />
                <CalendarDay
                  day={26}
                  orders={[calendarOrders[2], calendarOrders[8]]}
                />
                <CalendarDay
                  day={27}
                  orders={[calendarOrders[9], calendarOrders[1]]}
                />
                <CalendarDay
                  day={28}
                  orders={[calendarOrders[3], calendarOrders[6]]}
                />
              </div>
            </div>

            {/* Stock Alerts */}
            <div
              className="w-[280px] bg-white rounded-xl border border-gray-200 shrink-0 animate-fade-in-up opacity-0"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">Stock Alerts</h2>
              </div>
              <div className="p-4 max-h-[420px] overflow-y-auto">
                <StockAlert
                  name="Snapdragon Light Pink Select"
                  qty="0/65 stems"
                  status="out"
                />
                <StockAlert
                  name="Dahlia Ball Orange"
                  qty="0/30 stems"
                  status="out"
                />
                <StockAlert
                  name="Rose Garden Miyuki Brown Tan/Light Pink"
                  qty="0/50 stems"
                  status="out"
                />
                <StockAlert
                  name="Oak Leaf Brown"
                  qty="0/25 stems"
                  status="out"
                />
                <StockAlert
                  name="Rose Garden Juliet Peach"
                  qty="0/60 stems"
                  status="out"
                />
                <StockAlert
                  name="Hydrangea Green"
                  qty="5/40 stems"
                  status="low"
                />
                <StockAlert
                  name="Eucalyptus Gunnii Green"
                  qty="8/50 stems"
                  status="low"
                />
                <StockAlert
                  name="Tulip Parrot Cabanna White/Pink"
                  qty="3/45 stems"
                  status="low"
                />
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full text-sm text-purple-600 hover:text-purple-700 font-medium">
                  View All Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
