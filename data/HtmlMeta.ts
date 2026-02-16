import type { Metadata } from "next";

const title = "AristoByte";
const description =
  "AristoByte is a forward-thinking software and technology company specializing in the design, development, and deployment of custom web and mobile applications. We empower startups, businesses, and enterprises with scalable digital solutions that streamline operations, enhance user experience, and drive growth. From concept to launch, AristoByte delivers innovation with precision, ensuring every product is tailored to meet unique client goals and industry demands.";
const url = "https://aristobyte.com";

export const HtmlMeta: Record<string, Metadata> = {
  root: {
    title: {
      default: title,
      template: `%s · ${title}`,
    },
    description,
    keywords: [
      "AristoByte",
      "AristoByte UI",
      "software development",
      "web applications",
      "mobile applications",
      "custom software",
      "SaaS development",
      "technology company",
      "startup tech solutions",
      "enterprise software",
      "product development",
      "scalable apps",
      "user experience design",
      "digital transformation",
    ],
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Aristobyte UI" }],
    creator: "Aristobyte UI",
    publisher: "Aristobyte UI",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    category: "Software company",
    metadataBase: new URL(url),
    applicationName: title,
    appleWebApp: {
      capable: true,
      title,
      statusBarStyle: "black-translucent",
    } as {
      capable: boolean;
      title: string;
      statusBarStyle?: "black-translucent" | "default" | "black";
    },
    openGraph: {
      title,
      description,
      url: "/",
      siteName: title,
      images: [
        {
          url: "/og-image-1200x630.png",
          width: 1200,
          height: 630,
          alt: "AristoByte - Smart, Scalable, Simple",
        },
      ],
      type: "website",
      countryName: "Poland",
      locale: "en_US",
      emails: ["info@aristobyte.com"],
      phoneNumbers: ["+48-451-652-749"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image-1200x600.png", "/twitter-image-800x418.png"],
      creator: "@aristobyte",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
        { url: "/icon.png", type: "image/png" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-touch-icon.png" }],
      shortcut: ["/favicon.ico"],
    },
    manifest: "/site.webmanifest",
    other: {
      "theme-color": "#0c101a",
      "msapplication-TileColor": "#0c101a",
      "msapplication-config": "/browserconfig.xml",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
  },
  "privacy-policy": {
    title: `${title} | Privacy and Policy`,
    description,
  },
  "terms-and-conditions": {
    title: `${title} | Terms & Conditions`,
    description,
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  name: title,
  url,
  logo: "/icon.png",
  image: "/og-image-1200x630.png",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cracow",
    addressCountry: "PL",
  },
  openGraph: {
    "@type": "Website",
    title,
    description,
    url,
    image: "/og-image-1200x630.png",
    locale: "en_GB",
    siteName: title,
  },
  twitter: {
    "@type": "WebPage",
    card: "summary_large_image",
    title,
    description,
    image: "/twitter-image-1200x600.png",
    creator: "@aristobyte",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#151f2b" },
  ],
  viewport: "width=device-width, initial-scale=1",
};
