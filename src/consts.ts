// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Bloomwise - Professional Florist Software";
export const SITE_DESCRIPTION =
  "Bloomwise is a comprehensive florist software solution designed to streamline your floral business operations, from inventory management to customer relations.";

export const GITHUB_URL =
  "https://github.com/shadcnblocks/mainline-astro-template";

export const SITE_METADATA = {
  title: {
    default: "Bloomwise - Professional Florist Software",
    template: "%s | Mainline",
  },
  description:
    "Bloomwise is a comprehensive florist software solution designed to streamline your floral business operations, from inventory management to customer relations.",
  keywords: [
    "Astro",
    "astro template",
    "astro theme",
    "astro starter",
    "shadcn template",
    "shadcn theme",
    "shadcn starter",
    "tailwind template",
    "tailwind theme",
    "tailwind starter",
    "mdx template",
    "mdx theme",
    "mdx starter",
  ],
  authors: [{ name: "Bloomwise.co" }],
  creator: "Bloomwise.co",
  publisher: "Bloomwise.co",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Bloomwise - Professional Florist Software",
    description:
      "Bloomwise is a comprehensive florist software solution designed to streamline your floral business operations, from inventory management to customer relations.",
    siteName: "Mainline",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mainline - Modern Astro Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomwise - Professional Florist Software",
    description:
      "Bloomwise is a comprehensive florist software solution designed to streamline your floral business operations, from inventory management to customer relations.",
    images: ["/og-image.jpg"],
    creator: "Bloomwise.co",
  },
};
