# Bloomwise Marketing Website Plan

> **Purpose**: Complete sitemap, page structures, and content specifications for building out the Bloomwise marketing website. Each page section is structured as an AI agent prompt for implementation.

---

## Table of Contents

1. [Sitemap Overview](#sitemap-overview)
2. [Navigation Structure](#navigation-structure)
3. [Feature Pages](#feature-pages)
4. [Solutions Pages](#solutions-pages)
5. [Core Pages](#core-pages)
6. [Global Components](#global-components)

---

## Sitemap Overview

```
bloomwise.co/
│
├── / (Homepage) ✓ Exists - video hero
│
├── /features ─────────────────────────────────────────────
│   ├── /features/orders          → Order Management
│   ├── /features/events          → Event Planning & Management
│   ├── /features/bloom-ai        → Bloom AI (Recipe Intelligence)
│   ├── /features/recipes         → Recipe Management
│   ├── /features/products        → Product Catalog
│   ├── /features/inventory       → Inventory Management
│   ├── /features/customers       → Customer Management
│   ├── /features/deliveries      → Delivery & Routing
│   ├── /features/proposals       → Proposals & Quotes
│   ├── /features/workshops       → Workshop Management
│   ├── /features/reports         → Reports & Analytics
│   └── /features/shopify         → Shopify Integration
│
├── /solutions ────────────────────────────────────────────
│   ├── /solutions/retail-florists
│   ├── /solutions/wedding-florists
│   ├── /solutions/corporate-florists
│   ├── /solutions/subscription-florists
│   └── /solutions/multi-location
│
├── /pricing ──────────────────────────────────────────────
├── /customers ────────────────────────────────────────────
├── /about ────────────────────────────────────────────────
├── /contact ──────────────────────────────────────────────
└── /login → app.bloomwise.co
```

**Total Pages: 22**

---

## Navigation Structure

### Primary Navigation

```
┌─────────────────────────────────────────────────────────────────────┐
│  Logo    Features ▼    Solutions ▼    Pricing    Customers    Login │
└─────────────────────────────────────────────────────────────────────┘
```

### Mega Menu #1: Features

```
┌─────────────────────────────────────────────────────────────────────┐
│  FEATURES                                                           │
├─────────────────────┬─────────────────────┬─────────────────────────┤
│  CORE OPERATIONS    │  PLANNING & DESIGN  │  INTELLIGENCE & GROWTH  │
│  ─────────────────  │  ─────────────────  │  ─────────────────────  │
│  📦 Orders          │  🎪 Events          │  🤖 Bloom AI ⭐          │
│  🚚 Deliveries      │  📋 Proposals       │  📊 Reports             │
│  📦 Inventory       │  🎓 Workshops       │  🛒 Shopify Sync        │
│  👥 Customers       │  🧪 Recipes         │                         │
│                     │  🏷️ Products        │                         │
└─────────────────────┴─────────────────────┴─────────────────────────┘
```

### Mega Menu #2: Solutions

```
┌─────────────────────────────────────────────────────────────────────┐
│  SOLUTIONS                                                          │
├─────────────────────────────────────────────────────────────────────┤
│  BY BUSINESS TYPE                                                   │
│  ─────────────────                                                  │
│  🏪 Retail & Walk-in Shops      "Streamline daily orders"           │
│  💒 Wedding & Event Florists    "From consultation to delivery"     │
│  🏢 Corporate & Contract        "Manage accounts at scale"          │
│  🔄 Subscription Florists       "Automate recurring fulfillment"    │
│  📍 Multi-Location Operations   "Unified view across stores"        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Feature Pages

All feature pages follow this consistent structure:

```
┌─────────────────────────────────────────────────────────────────────┐
│  SECTION 1: Hero Overview                                           │
│  • Benefit-focused headline                                         │
│  • 2-3 sentence description                                         │
│  • Primary screenshot/product image                                 │
│  • CTA buttons: "Start Free Trial" + "Book Demo"                    │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 2: Key Capabilities (3-6 cards)                            │
│  • Icon + Title + Description for each capability                   │
│  • Optional mini-screenshot per card                                │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 3: Product Screenshots                                     │
│  • Tabbed or scrolling gallery                                      │
│  • 3-5 annotated screenshots with captions                          │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 4: CTA Banner                                              │
│  • "Ready to [benefit]?" headline                                   │
│  • Two buttons: Start Trial | Book Demo                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Page: `/features/orders`

**AI Agent Prompt:**

```
Build the Order Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/orders
- Title: "Order Management | Bloomwise"
- Meta Description: "Manage every order from intake to delivery. Track status, payments, and fulfillment across all channels—Shopify, phone, walk-in, and events."

SECTION 1: HERO OVERVIEW
Headline: "From order to delivery, completely under control"

Description:
"Whether orders come from Shopify, phone calls, walk-ins, or events—manage them all in one place. Track every status change, payment, and delivery with a complete audit trail."

Primary Image: Screenshot of the orders dashboard showing multiple orders with status indicators, source badges, and action buttons.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (6 cards)

Card 1 - Order Lifecycle
Icon: Workflow/timeline icon
Title: "Complete Order Lifecycle"
Description: "Track orders through every stage: Draft → Pending → Confirmed → In Progress → Ready → Out for Delivery → Delivered → Completed. Never lose track of where an order stands."

Card 2 - Multi-Source Orders
Icon: Channels/sources icon
Title: "Orders From Everywhere"
Description: "Shopify, phone, walk-in, email, events—all your orders in one unified view. Each source is clearly labeled so you know where business is coming from."

Card 3 - Fulfillment Types
Icon: Delivery truck icon
Title: "Flexible Fulfillment"
Description: "Pickup, delivery, shipping, or event setup—handle any fulfillment type. Set delivery addresses, assign drivers, and track completion."

Card 4 - Payment Tracking
Icon: Credit card/money icon
Title: "Payment & Deposit Tracking"
Description: "Track payment status from pending to paid. Handle partial payments, deposits, and refunds. See outstanding balances at a glance."

Card 5 - Activity Log
Icon: History/audit icon
Title: "Complete Audit Trail"
Description: "Every status change, note, and modification is logged with timestamps and user attribution. Know exactly what happened and when."

Card 6 - Mobile Fulfillment
Icon: Mobile phone icon
Title: "Mobile Order Fulfillment"
Description: "Fulfill orders from your phone. View recipe steps, capture photos, update status—perfect for production staff on the shop floor."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Order List View"
Caption: "See all orders at a glance with status, due date, customer, and source. Filter by status, date, or fulfillment type."

Screenshot 2: "Order Detail Page"
Caption: "Complete order information including items, customer details, shipping address, and the full activity timeline."

Screenshot 3: "Order Items with Recipe"
Caption: "Each order item links to its recipe, showing ingredients and steps for production staff."

Screenshot 4: "Mobile Fulfillment"
Caption: "Mobile-optimized interface for fulfilling orders on the go. Capture photos and update status with a tap."

SECTION 4: CTA BANNER
Headline: "Ready to take control of your orders?"
Subtext: "Start your free trial and see how Bloomwise transforms order management."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Use the existing website theme and component library
- Hero section should have the headline left-aligned with screenshot on the right (or stacked on mobile)
- Capability cards in a 3-column grid (2 columns on tablet, 1 on mobile)
- Screenshots in a tabbed interface or horizontal scroll carousel
- CTA banner should be full-width with contrasting background
```

---

### Page: `/features/events`

**AI Agent Prompt:**

```
Build the Event Planning & Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/events
- Title: "Event Planning & Management | Bloomwise"
- Meta Description: "Plan weddings, corporate events, and special occasions with ease. Manage clients, venues, color palettes, and convert event designs directly into production orders."

SECTION 1: HERO OVERVIEW
Headline: "Plan stunning events, stress-free"

Description:
"From the first consultation to delivery day, keep every detail organized. Capture color palettes, manage multiple contacts, assign your team, and convert event designs into production orders with one click."

Primary Image: Screenshot of an event detail page showing color palette, event items/arrangements, and timeline.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (6 cards)

Card 1 - Event Lifecycle
Icon: Calendar/stages icon
Title: "Full Event Lifecycle"
Description: "Track events from Inquiry → Booked → Planning → Completed. Know exactly where each event stands and what needs attention."

Card 2 - Client & Venue
Icon: People/building icon
Title: "Client & Venue Management"
Description: "Store all contact details, venue information, setup requirements, and access instructions. Everyone on your team has what they need."

Card 3 - Design Planning
Icon: Palette/brush icon
Title: "Color Palettes & Themes"
Description: "Capture the client's vision with color palettes, design themes, and inspiration URLs. Save palettes to reuse across events."

Card 4 - Event Items
Icon: Flower arrangement icon
Title: "Event Items & Arrangements"
Description: "Add multiple arrangements to each event. Link to recipes, specify quantities, add images, and track custom modifications."

Card 5 - One-Click Orders
Icon: Magic wand/convert icon
Title: "Event-to-Order Conversion"
Description: "Convert event designs directly into production orders. All the details carry over—no re-entering information."

Card 6 - Team & Tasks
Icon: Team/checklist icon
Title: "Team & Task Assignment"
Description: "Assign lead designers and team members. Create tasks for design, ordering, production, delivery, and setup."

SECTION 3: SCREENSHOTS (5 screenshots)

Screenshot 1: "Event Dashboard"
Caption: "See all upcoming events with status, date, and client. Filter by event type, status, or date range."

Screenshot 2: "Event Detail - Design"
Caption: "Capture the client's vision with color palettes, themes, and design notes all in one place."

Screenshot 3: "Event Items"
Caption: "Add arrangements linked to recipes. Specify quantities, sizes, and any custom modifications."

Screenshot 4: "Event-to-Order"
Caption: "One click converts your event designs into production orders, complete with all details."

Screenshot 5: "Event Print Layout"
Caption: "Print beautiful event summaries with all arrangements, inspiration images, and production notes."

SECTION 4: CTA BANNER
Headline: "Ready to plan events with confidence?"
Subtext: "See how Bloomwise keeps every event detail organized from consultation to delivery."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Emphasize the visual nature of event planning with color palette imagery
- Show the "conversion" concept visually—event design flowing into production order
- Consider a before/after or side-by-side showing event item → generated order
```

---

### Page: `/features/bloom-ai`

**AI Agent Prompt:**

```
Build the Bloom AI feature page for Bloomwise marketing website. This is a KEY DIFFERENTIATOR and should feel modern/innovative.

PAGE METADATA:
- URL: /features/bloom-ai
- Title: "Bloom AI - AI-Powered Design Assistant | Bloomwise"
- Meta Description: "Upload inspiration photos and let AI analyze arrangements, extract color palettes, and generate recipes. Your intelligent design assistant for floral creativity."

SECTION 1: HERO OVERVIEW
Headline: "Your AI-powered design assistant"

Description:
"Upload an inspiration photo and watch Bloom AI identify flowers, extract color palettes, and generate complete recipes. Turn client inspiration into actionable production plans in seconds."

Primary Image: Split-screen showing: Left = inspiration photo upload, Right = AI-generated analysis with color palette and identified flowers.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "See It In Action" (links to demo video or interactive demo)

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Photo Analysis
Icon: Camera/scan icon
Title: "Intelligent Photo Analysis"
Description: "Upload any floral arrangement photo. Bloom AI identifies flower types, greenery, and design elements automatically."

Card 2 - Color Extraction
Icon: Palette/dropper icon
Title: "Color Palette Extraction"
Description: "Extract exact color palettes from inspiration images. Save palettes to your library and apply them to events."

Card 3 - Recipe Generation
Icon: Document/magic icon
Title: "Recipe Generation"
Description: "Turn inspiration into action. Bloom AI generates complete recipes with suggested ingredients, quantities, and assembly steps."

Card 4 - Complexity Assessment
Icon: Gauge/meter icon
Title: "Complexity Assessment"
Description: "Get estimated difficulty level, time to create, and skill requirements. Quote accurately and plan production realistically."

Card 5 - Continuous Learning
Icon: Brain/learning icon
Title: "Learns Your Style"
Description: "The more you use Bloom AI, the better it understands your inventory, preferences, and design style. Suggestions become more relevant over time."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Upload & Analyze"
Caption: "Drag and drop any inspiration photo. Bloom AI processes it in seconds."

Screenshot 2: "Flower Identification"
Caption: "See identified flowers and greenery with confidence scores. Confirm or adjust the analysis."

Screenshot 3: "Color Palette Results"
Caption: "Extracted color palette ready to save to your library or apply directly to an event."

Screenshot 4: "Generated Recipe"
Caption: "Complete recipe with ingredients, steps, and estimated costs—ready to customize and save."

SECTION 4: CTA BANNER
Headline: "Ready to design smarter?"
Subtext: "Let Bloom AI turn inspiration into production-ready recipes."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- This page should feel more modern/cutting-edge than other feature pages
- Use gradient backgrounds or subtle animations to convey "AI/innovation"
- Show the transformation: photo → analysis → recipe visually
- Consider adding a mini interactive demo or animated walkthrough
- Highlight that this is a UNIQUE feature competitors don't have
```

---

### Page: `/features/recipes`

**AI Agent Prompt:**

```
Build the Recipe Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/recipes
- Title: "Recipe Management | Bloomwise"
- Meta Description: "Document your floral designs with ingredients, steps, and costs. Track profitability, manage variants, and ensure consistent quality across your team."

SECTION 1: HERO OVERVIEW
Headline: "Your designs, documented and profitable"

Description:
"Recipes are your production templates—how your team makes each arrangement. Document ingredients with substitutions, step-by-step instructions, and track costs to ensure every design is profitable."

Primary Image: Screenshot of a recipe detail page showing ingredients list with costs, assembly steps, and profitability summary.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (6 cards)

Card 1 - Ingredients
Icon: List/components icon
Title: "Ingredients & Substitutions"
Description: "List every stem, greenery, and supply. Add substitution options with notes so your team can adapt when items are unavailable."

Card 2 - Step Instructions
Icon: Steps/numbered list icon
Title: "Step-by-Step Instructions"
Description: "Document assembly with photos and videos per step. Include tips, warnings, and time estimates for training and consistency."

Card 3 - Recipe Variants
Icon: Sizes/variations icon
Title: "Size & Style Variants"
Description: "Create Small, Medium, Large, and Deluxe versions. Each variant has its own pricing and ingredient quantities."

Card 4 - Cost Tracking
Icon: Calculator/money icon
Title: "Cost & Profitability"
Description: "See material costs, labor costs, and profit margins at a glance. Set target margins and ensure every recipe is profitable."

Card 5 - Tagging
Icon: Tags/labels icon
Title: "Seasonal & Occasion Tags"
Description: "Tag recipes by season (Spring, Summer, Fall, Winter) and occasion (Birthday, Sympathy, Wedding). Find the right recipe fast."

Card 6 - Shopify Linking
Icon: Link/sync icon
Title: "Link to Shopify Products"
Description: "Connect recipes to your Shopify products. When an order comes in, your team knows exactly how to make it."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Recipe Library"
Caption: "Browse all recipes with filters for category, season, and occasion. Grid or list view."

Screenshot 2: "Recipe Builder"
Caption: "Add ingredients from your inventory with quantities, costs, and substitution options."

Screenshot 3: "Assembly Steps"
Caption: "Step-by-step instructions with photos. Perfect for training new team members."

Screenshot 4: "Profitability View"
Caption: "See material cost, labor cost, and profit margin. Adjust pricing to hit your targets."

SECTION 4: CTA BANNER
Headline: "Ready to make every design profitable?"
Subtext: "Document your recipes and track costs with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Emphasize the "profitability" angle—florists often don't know if designs are profitable
- Show the ingredients → cost → margin flow clearly
- Consider a mini cost breakdown visual in the hero
```

---

### Page: `/features/products`

**AI Agent Prompt:**

```
Build the Product Catalog feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/products
- Title: "Product Catalog | Bloomwise"
- Meta Description: "Manage your customer-facing product catalog. Sync with Shopify, track inventory, and link products to production recipes."

SECTION 1: HERO OVERVIEW
Headline: "What you sell, beautifully organized"

Description:
"Products are what your customers see and buy. Manage your catalog with variants, pricing, inventory tracking, and seamless Shopify sync. Link products to recipes so your team knows how to make each one."

Primary Image: Screenshot of product catalog grid showing products with images, prices, and inventory status.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Product Types
Icon: Categories/types icon
Title: "Multiple Product Types"
Description: "Recipe-based arrangements, standalone products (vases, cards), subscription offerings, bundles, and custom quotes—all in one catalog."

Card 2 - Variants
Icon: Options/variants icon
Title: "Variants & Pricing"
Description: "Create size and style variants with individual pricing. Small, Medium, Large—each with its own price point."

Card 3 - Inventory
Icon: Stock/inventory icon
Title: "Inventory Tracking"
Description: "Track stock levels per product. Set low-stock alerts and allow or disallow backorders."

Card 4 - Shopify Sync
Icon: Sync/Shopify icon
Title: "Shopify Sync"
Description: "Two-way sync with Shopify. Products created in either system stay in sync automatically."

Card 5 - Recipe Linking
Icon: Link/recipe icon
Title: "Recipe Linking"
Description: "Link products to production recipes. When an order comes in, your team sees exactly how to make it."

SECTION 3: SCREENSHOTS (3 screenshots)

Screenshot 1: "Product Catalog"
Caption: "Browse your catalog with filters for type, category, and status. See inventory at a glance."

Screenshot 2: "Product Details"
Caption: "Full product information including variants, pricing, inventory, and linked recipe."

Screenshot 3: "Shopify Sync Status"
Caption: "See sync status for each product. Know what's connected and what needs attention."

SECTION 4: CTA BANNER
Headline: "Ready to organize your catalog?"
Subtext: "Manage products, sync with Shopify, and link to recipes."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Emphasize the distinction: Products = what customers buy, Recipes = how to make it
- Show the Shopify connection prominently
- Consider a visual showing Product → Recipe linking
```

---

### Page: `/features/inventory`

**AI Agent Prompt:**

```
Build the Inventory Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/inventory
- Title: "Inventory Management | Bloomwise"
- Meta Description: "Track flowers, greenery, and supplies. Set reorder points, monitor stock levels, and see where every stem goes with complete audit trails."

SECTION 1: HERO OVERVIEW
Headline: "Know what you have, order what you need"

Description:
"Track every stem, bunch, and supply in real-time. Set reorder points, get low-stock alerts, and see a complete audit trail of every stock movement. Never run out of what you need."

Primary Image: Screenshot of inventory dashboard showing items with quantities, par levels, and low-stock warnings.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Item Tracking
Icon: Items/list icon
Title: "Complete Item Tracking"
Description: "Track items with SKUs, categories, and vendors. Set unit types (stems, bunches, boxes) that match how you buy and use."

Card 2 - Par Levels
Icon: Target/threshold icon
Title: "Reorder Points & Par Levels"
Description: "Set minimum quantities and target par levels. Get alerts when items need reordering."

Card 3 - Stock Movements
Icon: Movement/history icon
Title: "Stock Movement History"
Description: "Every purchase, usage, adjustment, and return is logged. See exactly where inventory went and when."

Card 4 - Low Stock Alerts
Icon: Warning/alert icon
Title: "Low Stock Alerts"
Description: "Visual warnings for items below reorder point. Never be surprised by running out of popular stems."

Card 5 - Vendor Management
Icon: Vendor/supplier icon
Title: "Vendor Management"
Description: "Track suppliers with contact info, payment terms, and delivery schedules. Know who to call when you need to reorder."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Inventory Dashboard"
Caption: "See all items with current quantities, par levels, and status indicators."

Screenshot 2: "Item Detail"
Caption: "Full item information including vendor, pricing, storage location, and movement history."

Screenshot 3: "Stock Movement Log"
Caption: "Complete audit trail showing every stock change with timestamps and user attribution."

Screenshot 4: "Low Stock View"
Caption: "Filter to see only items needing attention. Prioritize your ordering."

SECTION 4: CTA BANNER
Headline: "Ready to take control of your inventory?"
Subtext: "Track stock, set alerts, and never run out again."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Show the "alert" concept visually—items with warning indicators
- Emphasize the audit trail for accountability
- Consider showing a reorder workflow
```

---

### Page: `/features/customers`

**AI Agent Prompt:**

```
Build the Customer Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/customers
- Title: "Customer Management | Bloomwise"
- Meta Description: "Know your customers and remember their preferences. Track order history, allergies, design preferences, and lifetime value."

SECTION 1: HERO OVERVIEW
Headline: "Know your customers, remember what matters"

Description:
"Build lasting relationships with complete customer profiles. Track allergies, design preferences, and order history. See lifetime value and identify your VIP customers."

Primary Image: Screenshot of customer detail page showing profile info, preferences, and order history.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Customer Profiles
Icon: Person/profile icon
Title: "Complete Customer Profiles"
Description: "Store contact details, addresses, and communication preferences. Everything your team needs in one place."

Card 2 - Preferences & Allergies
Icon: Heart/preferences icon
Title: "Preferences & Allergies"
Description: "Record design preferences, allergies, and special requests. Never forget what makes each customer unique."

Card 3 - Order History
Icon: History/orders icon
Title: "Order History"
Description: "See every order a customer has placed. Quick access to reorder favorites or reference past designs."

Card 4 - Lifetime Value
Icon: Chart/value icon
Title: "Lifetime Value Tracking"
Description: "See total spend, order count, and average order value. Identify your most valuable customers."

Card 5 - Shopify Sync
Icon: Sync/Shopify icon
Title: "Shopify Customer Sync"
Description: "Customers sync automatically from Shopify. No duplicate data entry—everything stays in sync."

SECTION 3: SCREENSHOTS (3 screenshots)

Screenshot 1: "Customer List"
Caption: "Browse customers with search and filters. See order count and lifetime value at a glance."

Screenshot 2: "Customer Profile"
Caption: "Complete profile with contact info, preferences, allergies, and notes."

Screenshot 3: "Order History"
Caption: "See all orders for a customer with quick links to order details."

SECTION 4: CTA BANNER
Headline: "Ready to know your customers better?"
Subtext: "Build profiles, track preferences, and grow relationships."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/features/deliveries`

**AI Agent Prompt:**

```
Build the Delivery Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/deliveries
- Title: "Delivery Management | Bloomwise"
- Meta Description: "Organize delivery runs, assign drivers, and capture proof of delivery. Track every stop from dispatch to doorstep."

SECTION 1: HERO OVERVIEW
Headline: "Every delivery, on time and documented"

Description:
"Create delivery runs, assign drivers, and track every stop. Capture photo proof of delivery and handle failures gracefully. Your drivers have everything they need on their phones."

Primary Image: Screenshot of delivery run view showing stops, driver assignment, and status.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Delivery Runs
Icon: Route/truck icon
Title: "Delivery Run Management"
Description: "Create runs for specific dates and times. Group orders by area or priority. Assign drivers with one click."

Card 2 - Stop Tracking
Icon: Stops/waypoints icon
Title: "Stop-by-Stop Tracking"
Description: "Track each stop: Pending → In Transit → Delivered. See real-time progress through the route."

Card 3 - Proof of Delivery
Icon: Camera/proof icon
Title: "Photo Proof of Delivery"
Description: "Drivers capture photos at each stop. Document successful deliveries and protect against disputes."

Card 4 - Failure Handling
Icon: Warning/retry icon
Title: "Failure Handling"
Description: "Record why deliveries fail: Not home, wrong address, refused. Schedule retries and keep customers informed."

Card 5 - Mobile Driver App
Icon: Phone/driver icon
Title: "Mobile Driver Interface"
Description: "Drivers access their routes without logging in. See stops, navigate, capture photos—all from their phone."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Delivery Dashboard"
Caption: "See all delivery runs with status, driver, and completion progress."

Screenshot 2: "Delivery Run Detail"
Caption: "Stop-by-stop view with addresses, time windows, and status indicators."

Screenshot 3: "Driver Mobile View"
Caption: "What drivers see: next stop, address, instructions, and action buttons."

Screenshot 4: "Proof of Delivery"
Caption: "Photo proof with timestamp and location. Documentation for every delivery."

SECTION 4: CTA BANNER
Headline: "Ready to deliver with confidence?"
Subtext: "Track runs, prove deliveries, and keep customers happy."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/features/proposals`

**AI Agent Prompt:**

```
Build the Proposals & Quotes feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/proposals
- Title: "Proposals & Quotes | Bloomwise"
- Meta Description: "Create beautiful proposals that close deals. Visual editor, client portal, approval workflow, and version tracking."

SECTION 1: HERO OVERVIEW
Headline: "Beautiful proposals that close deals"

Description:
"Create stunning proposals with our visual editor. Share a client portal link for review and approval. Track views, manage versions, and collaborate with comments."

Primary Image: Screenshot of proposal editor showing visual blocks, pricing, and preview.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Visual Editor
Icon: Edit/design icon
Title: "Visual Proposal Editor"
Description: "Drag-and-drop editor to build beautiful proposals. Add images, text, pricing tables, and your branding."

Card 2 - Client Portal
Icon: Portal/share icon
Title: "Client Portal"
Description: "Share a link for clients to view proposals. They can approve, request changes, or add comments—no login required."

Card 3 - Approval Workflow
Icon: Checkmark/approve icon
Title: "Approval Workflow"
Description: "Clients approve with one click. You're notified instantly. Rejected? See their feedback and revise."

Card 4 - Version Control
Icon: Versions/history icon
Title: "Version Control"
Description: "Track every revision. See what changed between versions. Never lose previous work."

Card 5 - View Tracking
Icon: Eye/analytics icon
Title: "View Tracking"
Description: "Know when clients view your proposal and how long they spend. Follow up at the right moment."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Proposal Editor"
Caption: "Build proposals visually with blocks for text, images, items, and pricing."

Screenshot 2: "Client View"
Caption: "What clients see: a beautiful, branded proposal with clear pricing and approval buttons."

Screenshot 3: "Approval Notification"
Caption: "Instant notification when a client approves. Ready to convert to production."

Screenshot 4: "Version History"
Caption: "See all versions with changes highlighted. Restore previous versions if needed."

SECTION 4: CTA BANNER
Headline: "Ready to win more events?"
Subtext: "Create proposals that impress and convert."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/features/workshops`

**AI Agent Prompt:**

```
Build the Workshop Management feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/workshops
- Title: "Workshop Management | Bloomwise"
- Meta Description: "Fill your floral design classes. Manage sessions, registrations, check-ins, and Shopify ticketing integration."

SECTION 1: HERO OVERVIEW
Headline: "Fill your classes, delight your students"

Description:
"Manage floral design workshops from scheduling to check-in. Create sessions, track registrations, integrate with Shopify for ticketing, and manage attendance on class day."

Primary Image: Screenshot of workshop detail page showing sessions, registrations, and capacity.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Workshop Scheduling
Icon: Calendar/schedule icon
Title: "Multi-Session Scheduling"
Description: "Create workshops with multiple session dates and times. Set capacity limits and pricing per session."

Card 2 - Registrations
Icon: People/signup icon
Title: "Registration Tracking"
Description: "See who's signed up for each session. Track payment status and special requests."

Card 3 - Shopify Integration
Icon: Shopify/ticket icon
Title: "Shopify Ticketing"
Description: "Sell workshop tickets through your Shopify store. Registrations sync automatically."

Card 4 - Recipe Linking
Icon: Recipe/flower icon
Title: "Recipe Per Workshop"
Description: "Link a recipe to each workshop. Students know what they're making, you know what supplies to prep."

Card 5 - Check-In
Icon: Checkmark/attendance icon
Title: "Check-In Management"
Description: "Check in attendees on class day. Track attendance and no-shows for follow-up."

SECTION 3: SCREENSHOTS (3 screenshots)

Screenshot 1: "Workshop List"
Caption: "See all workshops with upcoming sessions, registration counts, and capacity status."

Screenshot 2: "Session Detail"
Caption: "View registrations for a session with attendee details and payment status."

Screenshot 3: "Check-In Interface"
Caption: "Quick check-in on class day. Mark attendees present with a tap."

SECTION 4: CTA BANNER
Headline: "Ready to grow your workshop business?"
Subtext: "Manage classes, sell tickets, and track attendance."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/features/reports`

**AI Agent Prompt:**

```
Build the Reports & Analytics feature page for Bloomwise marketing website.

PAGE METADATA:
- URL: /features/reports
- Title: "Reports & Analytics | Bloomwise"
- Meta Description: "Data-driven decisions for your florist business. Revenue analysis, recipe profitability, inventory metrics, and more."

SECTION 1: HERO OVERVIEW
Headline: "Data-driven decisions for your shop"

Description:
"See what's working and what's not. Track revenue trends, identify your most profitable recipes, monitor inventory turnover, and make smarter business decisions."

Primary Image: Screenshot of reports dashboard showing revenue chart, top recipes, and key metrics.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (4 cards)

Card 1 - Revenue Analysis
Icon: Chart/trending icon
Title: "Revenue Analysis"
Description: "Track daily, weekly, monthly, and yearly revenue. See trends, compare periods, and identify your best days."

Card 2 - Recipe Profitability
Icon: Profit/recipe icon
Title: "Recipe Profitability"
Description: "See which recipes make you money. Rank by revenue, profit margin, and times sold. Cut the losers, promote the winners."

Card 3 - Inventory Metrics
Icon: Inventory/turnover icon
Title: "Inventory Metrics"
Description: "Track inventory turnover, identify fast and slow movers, and optimize your ordering."

Card 4 - Export
Icon: Download/export icon
Title: "Export & Share"
Description: "Export reports to CSV for further analysis. Share insights with your team or accountant."

SECTION 3: SCREENSHOTS (3 screenshots)

Screenshot 1: "Revenue Dashboard"
Caption: "Daily revenue trend with comparison to previous period. See growth at a glance."

Screenshot 2: "Recipe Profitability"
Caption: "Top recipes ranked by profit margin. Know which designs to promote."

Screenshot 3: "Inventory Turnover"
Caption: "See which items move fast and which sit. Optimize your ordering."

SECTION 4: CTA BANNER
Headline: "Ready to make smarter decisions?"
Subtext: "See your business clearly with Bloomwise analytics."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/features/shopify`

**AI Agent Prompt:**

```
Build the Shopify Integration feature page for Bloomwise marketing website. This is a KEY DIFFERENTIATOR - emphasize TWO-WAY sync.

PAGE METADATA:
- URL: /features/shopify
- Title: "Shopify Integration | Bloomwise"
- Meta Description: "True two-way Shopify sync. Products, orders, and customers stay in sync automatically. Not just an import—a real integration."

SECTION 1: HERO OVERVIEW
Headline: "True two-way Shopify sync"

Description:
"Not just an import—a real integration. Products, orders, and customers sync both directions automatically. Make changes in either system and stay in sync. Real-time webhooks mean you're always up to date."

Primary Image: Visual showing bidirectional sync between Shopify and Bloomwise with arrows going both ways.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: KEY CAPABILITIES (5 cards)

Card 1 - Product Sync
Icon: Products/sync icon
Title: "Product Sync"
Description: "Products sync both ways. Create in Shopify or Bloomwise—they stay connected. Variants, pricing, inventory—all in sync."

Card 2 - Order Import
Icon: Orders/import icon
Title: "Automatic Order Import"
Description: "Shopify orders appear in Bloomwise instantly. Customer info, items, addresses—everything you need to fulfill."

Card 3 - Customer Sync
Icon: Customers/sync icon
Title: "Customer Sync"
Description: "Customer data syncs automatically. Order history, contact info, and preferences—available in both systems."

Card 4 - Real-Time Webhooks
Icon: Webhook/realtime icon
Title: "Real-Time Updates"
Description: "Webhooks keep you in sync instantly. No waiting for batch updates. Changes appear in seconds."

Card 5 - Recipe Mapping
Icon: Recipe/link icon
Title: "Product → Recipe Mapping"
Description: "Link Shopify products to production recipes. When orders come in, your team knows exactly how to make them."

SECTION 3: SCREENSHOTS (4 screenshots)

Screenshot 1: "Shopify Connection"
Caption: "One-click connection to your Shopify store. Secure OAuth—no passwords shared."

Screenshot 2: "Sync Dashboard"
Caption: "See sync status at a glance. Products, orders, customers—all tracked."

Screenshot 3: "Product Mapping"
Caption: "Link Shopify products to Bloomwise recipes. Map variants for accurate production."

Screenshot 4: "Sync History"
Caption: "Complete log of all sync activity. Know exactly what synced and when."

SECTION 4: CTA BANNER
Headline: "Ready for seamless Shopify integration?"
Subtext: "Connect once, stay in sync forever."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Emphasize "two-way" with bidirectional arrows/visuals
- Show the contrast with competitors who only do one-way import
- Consider a comparison: "Other tools: Import only" vs "Bloomwise: True two-way sync"
```

---

## Solutions Pages

All solutions pages follow this consistent structure:

```
┌─────────────────────────────────────────────────────────────────────┐
│  SECTION 1: Segment Hero                                            │
│  • Pain-point headline speaking to their challenges                 │
│  • "Built for [segment] florists" subheadline                       │
│  • Hero image showing their context                                 │
│  • CTA buttons: "Start Free Trial" + "Book Demo"                    │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 2: Day in the Life                                         │
│  • Timeline showing typical workflow                                │
│  • Morning → Midday → Afternoon → Evening                           │
│  • Each time block: Task + How Bloomwise helps                      │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 3: Key Features For You                                    │
│  • 3-4 most relevant features for this segment                      │
│  • Cards linking to /features/* pages                               │
│  • Framing/copy tailored to this segment's needs                    │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 4: Testimonial                                             │
│  • Quote from similar florist (placeholder for now)                 │
│  • Photo, name, business name, location                             │
│  • Link to case study when available                                │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 5: CTA Banner                                              │
│  • Segment-specific call to action                                  │
│  • Two buttons: Start Trial | Book Demo                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Page: `/solutions/retail-florists`

**AI Agent Prompt:**

```
Build the Retail Florists solutions page for Bloomwise marketing website.

PAGE METADATA:
- URL: /solutions/retail-florists
- Title: "For Retail Florists | Bloomwise"
- Meta Description: "Streamline daily operations for your retail flower shop. Manage walk-ins, phone orders, and Shopify sales in one place."

SECTION 1: SEGMENT HERO
Pain Headline: "Juggling walk-ins, phone orders, and online sales is chaos"
Subheadline: "Built for retail florists who need to move fast"

Description:
"Your day is a constant stream of walk-in customers, phone orders, and Shopify notifications. Bloomwise brings it all together so nothing falls through the cracks."

Hero Image: Photo of a busy retail florist shop with staff helping customers, or screenshot of orders dashboard with multiple sources visible.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: DAY IN THE LIFE

Morning Block:
Time: "8:00 AM - Opening"
Challenge: "Process overnight Shopify orders before the day starts"
Solution: "Orders sync automatically. Open Bloomwise and see everything ready to fulfill."
Feature Link: Orders + Shopify Sync

Midday Block:
Time: "12:00 PM - Lunch Rush"
Challenge: "Customer walks in needing an arrangement now"
Solution: "Quick order entry gets it into the system in seconds. Link to a recipe so your designer knows what to make."
Feature Link: Orders + Recipes

Afternoon Block:
Time: "3:00 PM - Inventory Check"
Challenge: "Running low on roses but didn't notice until too late"
Solution: "Low stock alerts warned you this morning. Reorder is already placed."
Feature Link: Inventory

Evening Block:
Time: "6:00 PM - End of Day"
Challenge: "How did we do today? Is the business healthy?"
Solution: "Quick glance at the dashboard shows today's revenue, orders completed, and tomorrow's schedule."
Feature Link: Reports

SECTION 3: KEY FEATURES FOR YOU

Feature 1: Orders
Title: "Every Order, Every Source"
Description: "Walk-ins, phone calls, Shopify—all in one view. No more switching between systems."
Link: /features/orders

Feature 2: Inventory
Title: "Never Run Out"
Description: "Know what you have, get alerts when you're low, reorder before it's too late."
Link: /features/inventory

Feature 3: Shopify Sync
Title: "Seamless Online Sales"
Description: "Your Shopify store stays in sync. Orders flow in, inventory stays accurate."
Link: /features/shopify

Feature 4: Customers
Title: "Remember Every Customer"
Description: "Track preferences, allergies, and favorites. Provide personal service that builds loyalty."
Link: /features/customers

SECTION 4: TESTIMONIAL (Placeholder)
Quote: "Before Bloomwise, we had sticky notes everywhere. Now everything's in one place and nothing gets missed."
Name: "Sarah M."
Business: "Petal & Stem Florist"
Location: "Austin, TX"
Photo: Placeholder headshot

SECTION 5: CTA BANNER
Headline: "Ready to streamline your shop?"
Subtext: "Join retail florists who've simplified their operations with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/solutions/wedding-florists`

**AI Agent Prompt:**

```
Build the Wedding Florists solutions page for Bloomwise marketing website.

PAGE METADATA:
- URL: /solutions/wedding-florists
- Title: "For Wedding Florists | Bloomwise"
- Meta Description: "From consultation to delivery day, manage every wedding detail. Events, proposals, color palettes, and seamless production."

SECTION 1: SEGMENT HERO
Pain Headline: "Consultations, proposals, production, delivery—so many moving pieces"
Subheadline: "Built for wedding and event florists"

Description:
"Wedding florals have a hundred details. Bloomwise keeps them organized from the first consultation to the last delivery. Capture the vision, create the proposal, and convert to production orders with a click."

Hero Image: Beautiful wedding floral setup, or screenshot of event detail page with color palette and arrangements.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: DAY IN THE LIFE

Consultation Block:
Time: "Tuesday - Consultation"
Challenge: "Capture the bride's vision: colors, style, inspiration photos"
Solution: "Create an event, add color palettes, save inspiration URLs. Everything in one place for your team."
Feature Link: Events

Proposal Block:
Time: "Wednesday - Proposal"
Challenge: "Create a beautiful proposal that wins the booking"
Solution: "Visual proposal editor creates stunning documents. Client portal for easy review and approval."
Feature Link: Proposals

Production Block:
Time: "Week Before - Production"
Challenge: "Convert the event design into production orders"
Solution: "One click generates orders for every arrangement. Recipes link automatically so your team knows what to make."
Feature Link: Events + Orders

Delivery Day Block:
Time: "Wedding Day - Delivery & Setup"
Challenge: "Multiple deliveries, photo documentation, team coordination"
Solution: "Delivery runs with photo proof. Everyone knows their stops and timing."
Feature Link: Deliveries

SECTION 3: KEY FEATURES FOR YOU

Feature 1: Events
Title: "Your Command Center"
Description: "Every detail in one place: contacts, venue, color palette, arrangements, tasks, and timeline."
Link: /features/events

Feature 2: Proposals
Title: "Win the Booking"
Description: "Beautiful proposals with visual editor. Client portal for review and one-click approval."
Link: /features/proposals

Feature 3: Recipes
Title: "Consistent Quality"
Description: "Document your signature designs. Your team makes them perfectly every time."
Link: /features/recipes

Feature 4: Deliveries
Title: "Flawless Delivery Day"
Description: "Coordinate multiple drops. Photo proof at every stop. No surprises."
Link: /features/deliveries

SECTION 4: TESTIMONIAL (Placeholder)
Quote: "I used to have a notebook for each wedding. Now I have one system that handles everything from consultation to delivery."
Name: "Jennifer L."
Business: "Wildflower Weddings"
Location: "Charleston, SC"
Photo: Placeholder headshot

SECTION 5: CTA BANNER
Headline: "Ready to nail every wedding?"
Subtext: "Join wedding florists who've organized their chaos with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/solutions/corporate-florists`

**AI Agent Prompt:**

```
Build the Corporate Florists solutions page for Bloomwise marketing website.

PAGE METADATA:
- URL: /solutions/corporate-florists
- Title: "For Corporate Florists | Bloomwise"
- Meta Description: "Manage corporate accounts, standing orders, and recurring clients at scale. Track relationships and deliver consistently."

SECTION 1: SEGMENT HERO
Pain Headline: "Recurring accounts, standing orders, keeping corporate clients happy"
Subheadline: "Built for corporate and contract florists"

Description:
"Corporate accounts need consistency and reliability. Bloomwise helps you manage standing orders, track client relationships, and deliver the same quality every time."

Hero Image: Corporate lobby with elegant floral arrangement, or screenshot of customer management with corporate accounts.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: DAY IN THE LIFE

Weekly Block:
Time: "Monday - Standing Orders"
Challenge: "Process this week's recurring orders for all accounts"
Solution: "Standing orders are ready to fulfill. Same recipes, same quality, every week."
Feature Link: Orders

Monthly Block:
Time: "First of Month - Account Review"
Challenge: "Review spending and satisfaction for key accounts"
Solution: "Customer profiles show lifetime value, order history, and any notes from last delivery."
Feature Link: Customers

Quarterly Block:
Time: "Quarterly - Refresh Designs"
Challenge: "Time to update lobby arrangements for the season"
Solution: "Recipes with seasonal variants. Update once, apply everywhere."
Feature Link: Recipes

Ongoing Block:
Time: "Ongoing - Delivery Tracking"
Challenge: "Prove we delivered on time, every time"
Solution: "Photo proof of every delivery. Documentation for client review."
Feature Link: Deliveries

SECTION 3: KEY FEATURES FOR YOU

Feature 1: Orders
Title: "Standing Orders Made Easy"
Description: "Recurring orders ready to fulfill. Consistent quality for consistent clients."
Link: /features/orders

Feature 2: Customers
Title: "Know Your Accounts"
Description: "Track spending, preferences, and contact details for every corporate client."
Link: /features/customers

Feature 3: Deliveries
Title: "Prove Every Delivery"
Description: "Photo documentation and timestamps. Show clients you deliver reliably."
Link: /features/deliveries

Feature 4: Reports
Title: "Account Analytics"
Description: "See which accounts are most valuable. Track trends and identify opportunities."
Link: /features/reports

SECTION 4: TESTIMONIAL (Placeholder)
Quote: "Our corporate clients love the consistency. And I love that I can show them delivery photos anytime they ask."
Name: "Michael R."
Business: "Executive Florals"
Location: "Chicago, IL"
Photo: Placeholder headshot

SECTION 5: CTA BANNER
Headline: "Ready to scale your corporate business?"
Subtext: "Join corporate florists who deliver consistently with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/solutions/subscription-florists`

**AI Agent Prompt:**

```
Build the Subscription Florists solutions page for Bloomwise marketing website.

PAGE METADATA:
- URL: /solutions/subscription-florists
- Title: "For Subscription Florists | Bloomwise"
- Meta Description: "Automate recurring fulfillment for your subscription flower business. Integrate with Seal, sync with Shopify, and scale your recurring revenue."

SECTION 1: SEGMENT HERO
Pain Headline: "Managing recurring orders manually doesn't scale"
Subheadline: "Built for subscription-based florists"

Description:
"Subscriptions should be your most predictable revenue. Bloomwise automates fulfillment, integrates with Seal Subscriptions, and gives you the tools to scale."

Hero Image: Subscription flower box being prepared, or screenshot of subscription orders in the system.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: DAY IN THE LIFE

Daily Block:
Time: "Daily - Fulfillment"
Challenge: "See today's subscription deliveries"
Solution: "Orders from Seal sync automatically. Today's fulfillments are ready in your queue."
Feature Link: Orders

Weekly Block:
Time: "Weekly - Planning"
Challenge: "Plan designs for the week's deliveries"
Solution: "Recipes with seasonal rotation. Update the week's design once, apply to all orders."
Feature Link: Recipes

Monthly Block:
Time: "Monthly - Growth Review"
Challenge: "Track subscriber growth and churn"
Solution: "Reports show subscription trends, retention, and lifetime value."
Feature Link: Reports

Ongoing Block:
Time: "Ongoing - Shopify Sync"
Challenge: "Keep inventory and products in sync with your store"
Solution: "Two-way Shopify sync keeps everything aligned. Sell subscriptions, track in Bloomwise."
Feature Link: Shopify

SECTION 3: KEY FEATURES FOR YOU

Feature 1: Orders
Title: "Subscription Fulfillment"
Description: "Seal orders sync automatically. See today's deliveries, fulfill consistently."
Link: /features/orders

Feature 2: Recipes
Title: "Rotating Designs"
Description: "Plan seasonal rotations. Update the recipe, and all future orders follow."
Link: /features/recipes

Feature 3: Shopify Sync
Title: "Sell & Fulfill"
Description: "Subscriptions sold on Shopify flow into Bloomwise for fulfillment."
Link: /features/shopify

Feature 4: Reports
Title: "Subscription Metrics"
Description: "Track growth, churn, and lifetime value. Know your recurring revenue health."
Link: /features/reports

SECTION 4: TESTIMONIAL (Placeholder)
Quote: "We went from 50 to 500 subscribers without adding staff. Bloomwise made scaling possible."
Name: "Amanda K."
Business: "Bloom Box Co."
Location: "Denver, CO"
Photo: Placeholder headshot

SECTION 5: CTA BANNER
Headline: "Ready to scale your subscription business?"
Subtext: "Join subscription florists who've automated with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"
```

---

### Page: `/solutions/multi-location`

**AI Agent Prompt:**

```
Build the Multi-Location solutions page for Bloomwise marketing website.

PAGE METADATA:
- URL: /solutions/multi-location
- Title: "For Multi-Location Florists | Bloomwise"
- Meta Description: "Unified operations across all your locations. See inventory, orders, and performance in one place."

SECTION 1: SEGMENT HERO
Pain Headline: "Every location does things differently—no unified view"
Subheadline: "Built for multi-location florist operations"

Description:
"When you have multiple shops, consistency is everything. Bloomwise gives you one system for all locations—unified ordering, shared recipes, and cross-location visibility."

Hero Image: Map with multiple location pins, or dashboard showing multiple location performance.

CTAs:
- Primary: "Start Free Trial"
- Secondary: "Book Demo"

SECTION 2: DAY IN THE LIFE

Morning Block:
Time: "Morning - Cross-Location View"
Challenge: "See orders across all locations at once"
Solution: "One dashboard shows every order from every location. Filter by shop or see the full picture."
Feature Link: Orders

Midday Block:
Time: "Midday - Inventory Check"
Challenge: "One location is out, another has surplus"
Solution: "See inventory at each shop. Know where to transfer or reorder."
Feature Link: Inventory

Afternoon Block:
Time: "Afternoon - Route Optimization"
Challenge: "Which shop should fulfill this delivery?"
Solution: "Route from the optimal location. Reduce drive time and delivery costs."
Feature Link: Deliveries

Evening Block:
Time: "Evening - Performance Comparison"
Challenge: "Which location is performing best?"
Solution: "Compare revenue, orders, and margins by location. Identify opportunities."
Feature Link: Reports

SECTION 3: KEY FEATURES FOR YOU

Feature 1: Orders
Title: "Unified Order View"
Description: "See every order from every location. Manage centrally or by shop."
Link: /features/orders

Feature 2: Inventory
Title: "Cross-Location Inventory"
Description: "Track stock at each location. Know where items are and where they're needed."
Link: /features/inventory

Feature 3: Deliveries
Title: "Optimized Routing"
Description: "Fulfill from the best location. Reduce costs and delivery time."
Link: /features/deliveries

Feature 4: Reports
Title: "Location Performance"
Description: "Compare shops side-by-side. Identify your strongest and where to improve."
Link: /features/reports

SECTION 4: TESTIMONIAL (Placeholder)
Quote: "Before Bloomwise, each shop was an island. Now we operate as one team with full visibility."
Name: "David T."
Business: "City Blooms (3 locations)"
Location: "Seattle, WA"
Photo: Placeholder headshot

SECTION 5: CTA BANNER
Headline: "Ready to unify your locations?"
Subtext: "Join multi-location florists who've centralized with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"
```

---

## Core Pages

### Page: `/pricing`

**AI Agent Prompt:**

```
Build the Pricing page for Bloomwise marketing website.

PAGE METADATA:
- URL: /pricing
- Title: "Pricing | Bloomwise"
- Meta Description: "Simple, transparent pricing for florists of all sizes. Start free, upgrade when you're ready."

PAGE STRUCTURE:

SECTION 1: PRICING HERO
Headline: "Simple pricing for florists of all sizes"
Subheadline: "Start free. Upgrade when you grow."

SECTION 2: PRICING TIERS

Display 3 pricing tiers in a comparison table/card layout:

Tier 1: Starter (Free)
Price: "$0/month"
Description: "For solo florists getting started"
Features:
- Up to 50 orders/month
- Basic order management
- Customer database
- Recipe management (up to 25)
- Email support
CTA: "Get Started Free"

Tier 2: Pro (Highlighted/Recommended)
Price: "$XX/month" (insert actual price)
Description: "For growing florist businesses"
Features:
- Unlimited orders
- Full order management
- Event planning & management
- Unlimited recipes
- Inventory management
- Shopify integration
- Delivery management
- Proposals & quotes
- Basic reporting
- Priority email support
CTA: "Start Free Trial"

Tier 3: Business
Price: "$XX/month" (insert actual price)
Description: "For established florists who need it all"
Features:
- Everything in Pro
- Bloom AI (AI-powered features)
- Advanced analytics & reporting
- Workshop management
- Multi-location support (coming soon)
- API access
- Dedicated support
- Custom onboarding
CTA: "Contact Sales"

SECTION 3: FEATURE COMPARISON TABLE

Full comparison table showing all features across tiers:
- Core Features
- Order Management
- Event Planning
- Inventory
- Integrations
- AI Features
- Support

SECTION 4: FAQ

Common pricing questions:
Q: "Can I switch plans anytime?"
A: "Yes, upgrade or downgrade at any time. Changes take effect on your next billing cycle."

Q: "Is there a free trial?"
A: "Yes, Pro and Business plans include a 14-day free trial with full access."

Q: "What payment methods do you accept?"
A: "We accept all major credit cards. Annual plans receive a discount."

Q: "Do you offer discounts for annual billing?"
A: "Yes, save 20% with annual billing on any paid plan."

Q: "What happens if I exceed my order limit on Starter?"
A: "We'll let you know when you're approaching the limit and help you upgrade seamlessly."

SECTION 5: CTA BANNER
Headline: "Not sure which plan is right?"
Subtext: "Book a demo and we'll help you find the perfect fit."
CTAs: "Book Demo" | "Start Free Trial"

DESIGN NOTES:
- Highlight the "Pro" tier as the recommended choice
- Use checkmarks for included features, dashes or X for not included
- Make the feature comparison table scrollable on mobile
- Consider a toggle for monthly/annual pricing
```

---

### Page: `/customers`

**AI Agent Prompt:**

```
Build the Customers/Case Studies page for Bloomwise marketing website.

PAGE METADATA:
- URL: /customers
- Title: "Customer Stories | Bloomwise"
- Meta Description: "See how florists like you are growing their business with Bloomwise. Real stories from real florists."

PAGE STRUCTURE:

SECTION 1: HERO
Headline: "Florists who've transformed their business"
Subheadline: "Real stories from real flower shops"

SECTION 2: FEATURED TESTIMONIALS

Display 3-4 prominent testimonial cards:

Testimonial 1 (Placeholder):
Quote: "Before Bloomwise, we had sticky notes everywhere. Now everything's in one place and nothing gets missed."
Name: "Sarah M."
Business: "Petal & Stem Florist"
Location: "Austin, TX"
Type Badge: "Retail Florist"
Photo: Placeholder headshot
Key Stat: "3x faster order processing"

Testimonial 2 (Placeholder):
Quote: "I used to have a notebook for each wedding. Now I have one system that handles everything from consultation to delivery."
Name: "Jennifer L."
Business: "Wildflower Weddings"
Location: "Charleston, SC"
Type Badge: "Wedding Florist"
Photo: Placeholder headshot
Key Stat: "50% fewer missed details"

Testimonial 3 (Placeholder):
Quote: "Our corporate clients love the consistency. And I love that I can show them delivery photos anytime they ask."
Name: "Michael R."
Business: "Executive Florals"
Location: "Chicago, IL"
Type Badge: "Corporate Florist"
Photo: Placeholder headshot
Key Stat: "100% delivery documentation"

Testimonial 4 (Placeholder):
Quote: "We went from 50 to 500 subscribers without adding staff. Bloomwise made scaling possible."
Name: "Amanda K."
Business: "Bloom Box Co."
Location: "Denver, CO"
Type Badge: "Subscription Florist"
Photo: Placeholder headshot
Key Stat: "10x subscriber growth"

SECTION 3: LOGO CLOUD (When Available)
"Trusted by florists across the country"
[Placeholder for customer logos when available]

SECTION 4: CASE STUDIES (Placeholder Section)
Title: "Deep Dives"
Description: "Coming soon: detailed case studies showing how florists transformed their operations."

Placeholder Card 1:
Title: "How [Business] reduced order errors by 80%"
Coming Soon badge

Placeholder Card 2:
Title: "How [Business] scaled their wedding business 3x"
Coming Soon badge

Placeholder Card 3:
Title: "How [Business] launched a subscription service"
Coming Soon badge

SECTION 5: CTA BANNER
Headline: "Ready to write your success story?"
Subtext: "Join florists who've grown their business with Bloomwise."
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Use real photos when available, professional placeholder headshots for now
- Include business type badges to help visitors find relevant stories
- Key stats make testimonials more credible and specific
- Design case study cards to be expandable when content is ready
```

---

### Page: `/about`

**AI Agent Prompt:**

```
Build the About page for Bloomwise marketing website.

PAGE METADATA:
- URL: /about
- Title: "About Bloomwise"
- Meta Description: "We're building the operating system for florists. Learn about our mission and the team behind Bloomwise."

PAGE STRUCTURE:

SECTION 1: HERO
Headline: "Built by people who understand flowers"
Subheadline: "We're on a mission to help florists thrive"

SECTION 2: OUR STORY
Title: "Why We Built Bloomwise"

Content:
"Florists are artists and business owners, but most software treats them like generic retailers. We saw florists juggling spreadsheets, sticky notes, and disconnected tools—losing time they could spend creating.

Bloomwise was born from a simple idea: florists deserve software built for the way they actually work. From managing the chaos of wedding season to tracking every stem in inventory, we've built features that make sense for flower businesses.

Today, we're proud to serve florists of all sizes—from solo designers to multi-location operations—helping them spend less time on admin and more time doing what they love."

SECTION 3: OUR VALUES (3-4 values)

Value 1: Built for Florists
"Every feature exists because a florist needed it. We don't build generic tools—we build for the flower industry."

Value 2: Simplicity First
"Powerful doesn't mean complicated. We obsess over making complex workflows feel simple."

Value 3: Your Partner, Not Just Your Software
"We succeed when you succeed. Our support team knows floristry and is here to help you grow."

Value 4: Always Improving
"We ship updates constantly based on florist feedback. Your input shapes our roadmap."

SECTION 4: TEAM (Optional - include if you want to show faces)
Title: "The Team"
[Team member cards with photos, names, and roles - if desired]

SECTION 5: CTA BANNER
Headline: "Ready to join the Bloomwise family?"
CTAs: "Start Free Trial" | "Book Demo"

DESIGN NOTES:
- Keep it warm and personal—florists connect with people, not corporations
- Consider including a photo of the team or founders
- The story should feel authentic, not corporate
```

---

### Page: `/contact`

**AI Agent Prompt:**

```
Build the Contact page for Bloomwise marketing website.

PAGE METADATA:
- URL: /contact
- Title: "Contact Us | Bloomwise"
- Meta Description: "Get in touch with the Bloomwise team. Book a demo, ask a question, or get support."

PAGE STRUCTURE:

SECTION 1: HERO
Headline: "Let's talk flowers"
Subheadline: "Book a demo, ask a question, or just say hi"

SECTION 2: CONTACT OPTIONS (3 cards)

Card 1: Book a Demo
Icon: Calendar/video icon
Title: "Book a Demo"
Description: "See Bloomwise in action with a personalized walkthrough"
CTA: "Schedule Demo" (links to Calendly or booking tool)

Card 2: Sales Questions
Icon: Chat/question icon
Title: "Sales Questions"
Description: "Have questions about pricing, features, or getting started?"
CTA: "Email Sales" (sales@bloomwise.co)

Card 3: Support
Icon: Help/support icon
Title: "Existing Customer?"
Description: "Get help with your account or technical questions"
CTA: "Contact Support" (support@bloomwise.co or help desk link)

SECTION 3: CONTACT FORM

Form Fields:
- Name (required)
- Email (required)
- Company/Business Name
- Phone (optional)
- What can we help with? (dropdown: Demo Request, Sales Question, Partnership, Other)
- Message (textarea)
- Submit button: "Send Message"

SECTION 4: FAQ QUICK LINKS
"Looking for answers?"
- Link to Pricing: "See our pricing plans"
- Link to Features: "Explore all features"
- Link to Help Docs: "Browse help documentation" (when available)

DESIGN NOTES:
- Keep the form simple—don't ask for too much
- Make demo booking prominent—it's likely the highest-intent action
- Include response time expectation: "We typically respond within 24 hours"
```

---

## Global Components

### Header Navigation

```
Build the global header navigation for Bloomwise marketing website.

STRUCTURE:
- Logo (links to /)
- Features (mega menu trigger)
- Solutions (mega menu trigger)
- Pricing (link)
- Customers (link)
- Login (link to app.bloomwise.co)
- CTA Button: "Start Free Trial" or "Book Demo"

MEGA MENUS: See Navigation Structure section above

MOBILE:
- Hamburger menu
- Collapsible sections for Features and Solutions
- Prominent CTA buttons

DESIGN NOTES:
- Sticky header on scroll
- Transparent on homepage hero, solid on scroll
- Solid background on all other pages
```

### Footer

```
Build the global footer for Bloomwise marketing website.

STRUCTURE:

Column 1: Brand
- Logo
- Tagline: "The operating system for florists"
- Social links (if applicable)

Column 2: Product
- Features Overview
- Pricing
- Customers
- Changelog (if applicable)

Column 3: Solutions
- Retail Florists
- Wedding Florists
- Corporate Florists
- Subscription Florists
- Multi-Location

Column 4: Company
- About
- Contact
- Blog (when available)
- Careers (when available)

Column 5: Legal
- Privacy Policy
- Terms of Service
- Cookie Policy

Bottom Bar:
- Copyright: "© 2024 Bloomwise. All rights reserved."
- Any additional legal links

DESIGN NOTES:
- Clean, organized layout
- Mobile: Stack columns vertically
- Include email signup if you want newsletter capture
```

### CTA Components

```
Build reusable CTA components for Bloomwise marketing website.

PRIMARY CTA BUTTON:
- Text: "Start Free Trial"
- Style: Solid fill, primary brand color
- Hover: Slightly darker or elevated shadow

SECONDARY CTA BUTTON:
- Text: "Book Demo"
- Style: Outline or ghost button
- Hover: Fill with primary color

CTA BANNER COMPONENT:
Props:
- headline (string)
- subtext (string, optional)
- primaryCTA (text + link)
- secondaryCTA (text + link, optional)
- variant: "default" | "dark" | "gradient"

Usage: Full-width section, typically at bottom of pages before footer

INLINE CTA COMPONENT:
Smaller CTA for use within content sections
Props:
- text (string)
- link (string)
- variant: "primary" | "secondary" | "text"
```

---

## Implementation Notes

### Priority Order

Build pages in this order for maximum impact:

**Phase 1: Core Structure**
1. Header with mega menus
2. Footer
3. Pricing page
4. Contact page

**Phase 2: Key Differentiator Pages**
5. /features/orders
6. /features/events
7. /features/bloom-ai
8. /features/shopify

**Phase 3: Remaining Feature Pages**
9. /features/recipes
10. /features/deliveries
11. /features/proposals
12. /features/inventory
13. /features/products
14. /features/customers
15. /features/workshops
16. /features/reports

**Phase 4: Solutions Pages**
17. /solutions/wedding-florists (highest value segment)
18. /solutions/retail-florists
19. /solutions/corporate-florists
20. /solutions/subscription-florists
21. /solutions/multi-location

**Phase 5: Supporting Pages**
22. /customers
23. /about

### Screenshot Requirements

Each feature page needs screenshots. Prepare:
- High-resolution screenshots from the actual app
- Consistent browser/device frame treatment
- Annotations or callouts for key features
- Light/dark mode variants if applicable

### Image Assets Needed

- Hero images for each solutions page
- Team photos for about page (optional)
- Customer photos for testimonials (or quality placeholders)
- Icons for feature capability cards
- Product screenshots (see above)

### SEO Considerations

- Each page has unique title and meta description (provided above)
- Use semantic HTML (h1, h2, h3 hierarchy)
- Add alt text to all images
- Internal linking between related pages
- Structured data for FAQ sections

---

## Appendix: Copy Guidelines

### Voice & Tone
- **Confident but not arrogant**: We know our product is good, but we're not condescending
- **Practical over fluffy**: Benefits over buzzwords
- **Florist-first language**: Use industry terms they use (stems, arrangements, fulfillment)
- **Active voice**: "Manage orders" not "Orders can be managed"

### Headlines
- Lead with the benefit, not the feature
- Keep under 10 words when possible
- Use "you/your" to speak directly to the reader

### Body Copy
- Short paragraphs (2-3 sentences max)
- Bulleted lists for features
- Avoid jargon unless it's florist jargon they know

### CTAs
- Primary: "Start Free Trial" (low commitment)
- Secondary: "Book Demo" (for those wanting personal touch)
- Avoid: "Learn More" (too vague), "Get Started" (ambiguous)
