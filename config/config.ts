import { Icons as LocalIcons } from "./icons";
import { LinkType } from "./constants";
import { Icons } from "@aristobyte-ui/utils";
import UsefulLinks from "@/useful_links.json";

export const Config = {
  header: {
    logo: Icons.AristoByte,
    nav: [
      { id: "ui", href: "/ui" },
      { id: "apps", href: "/apps" },
      { id: "community", href: "/community" },
      { id: "insights", href: "/insights" },
      { id: "contact", href: "/contact" },
    ],
  },
  home: {
    hero: {
      icon: Icons.AristoByte,
      links: [
        { id: "get-started", href: "features", type: LinkType.SCROLL_LINK },
      ],
    },
    services: {
      cards: [
        { id: "product-strategy" },
        { id: "ui-ux" },
        { id: "web-platforms" },
        { id: "mobile-experiences" },
        { id: "ai-automation" },
        { id: "devops-growth" },
      ],
    },
    process: {
      steps: [
        { id: "discovery" },
        { id: "design" },
        { id: "build" },
        { id: "launch" },
      ],
    },
    stack: {
      groups: [
        {
          id: "product-core",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "React Native",
            "Swift",
            "Kotlin",
          ],
        },
        {
          id: "platform-data",
          items: [
            "Node.js",
            "PostgreSQL",
            "Redis",
            "GraphQL",
            "Docker",
            "Vercel",
          ],
        },
      ],
    },
    features: {
      cards: [
        {
          id: "modular-by-design",
          icon: LocalIcons.Puzzle,
        },
        {
          id: "plug-and-play-integration",
          icon: LocalIcons.Plug,
        },
        {
          id: "lightning-performance",
          icon: LocalIcons.Zap,
        },
        {
          id: "future-proof-stack",
          icon: LocalIcons.Dna,
        },
      ],
    },
    showcase: {
      images: [
        "/images/shapes-and-background/neon-wave-bg.png",
        "/images/aristobot/aristobot-greeting.png",
        "/images/aristobot/aristobot-holding-bulb.png",
        "/images/aristobot/aristobot-holding-tablet.png",
        "/images/shapes-and-background/time-capsule.jpeg",
        "/images/aristobot/aristobot-with-levitating-bulb.png",
      ],
    },
    toolkit: {
      images: [
        "/images/cli/aristobyte-ui-cli-1.png",
        "/images/cli/aristobyte-ui-cli-4.png",
        "/images/cli/aristobyte-ui-cli-7.png",
      ],
      links: [
        {
          id: "docs",
          href: UsefulLinks["aristobyte-ui-documentation-website"],
        },
        {
          id: "releases",
          href: UsefulLinks["aristobyte-ui-github-repo-releases"],
        },
      ],
    },
    community: {
      links: [
        { id: "github", href: UsefulLinks.github },
        { id: "open-collective", href: UsefulLinks["open-collective"] },
        { id: "patreon", href: UsefulLinks.patreon },
        { id: "stackoverflow", href: UsefulLinks.stackoverflow },
      ],
    },
  },
  ui: {
    hero: {
      icon: Icons.AristoByteUI,
      links: [
        {
          id: "docoumentation",
          href: "https://ui.aristobyte.com",
          type: LinkType.NEXT_LINK,
        },
      ],
    },
    links: [
      {
        id: "documentation",
        href: UsefulLinks["aristobyte-ui-documentation-website"],
      },
      {
        id: "github-org",
        href: UsefulLinks["aristobyte-ui-github-organisation"],
      },
      {
        id: "github-project",
        href: UsefulLinks["aristobyte-ui-github-project"],
      },
      {
        id: "npm-packages",
        href: UsefulLinks["aristobyte-ui-npm-registry-packages"],
      },
      {
        id: "releases",
        href: UsefulLinks["aristobyte-ui-github-repo-releases"],
      },
      {
        id: "gh-packages",
        href: UsefulLinks["aristobyte-ui-github-pages-registry-packages"],
      },
      {
        id: "open-collective",
        href: UsefulLinks["aristobyte-ui-open-collective"],
      },
      {
        id: "discussions",
        href: "https://github.com/orgs/aristobyte-ui/discussions",
      },
    ],
    cli: {
      images: [
        "/images/cli/aristobyte-ui-cli-2.png",
        "/images/cli/aristobyte-ui-cli-5.png",
        "/images/cli/aristobyte-ui-cli-8.png",
      ],
    },
  },
  apps: {
    hero: {
      icon: Icons.AristoByte,
      links: [
        {
          id: "instagram",
          href: "https://instagram.com/aristo_byte",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "facebook",
          href: "https://facebook.com/aristobyte",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "twitter",
          href: "https://x.com/aristo_byte",
          type: LinkType.NEXT_LINK,
        },
      ],
    },
    roadmap: {
      items: [
        { id: "productivity" },
        { id: "creative" },
        { id: "automation" },
        { id: "community-tools" },
      ],
    },
  },
  community: {
    hero: {
      icon: Icons.AristoByte,
      links: [
        {
          id: "github-discussions",
          href: "https://github.com/orgs/aristobyte-team/discussions",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "aristobyte-board",
          href: "https://github.com/orgs/aristobyte-ui/projects/2/views/1?filterQuery=",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "open-collective",
          href: "https://opencollective.com/aristobyte-ui",
          type: LinkType.NEXT_LINK,
        },
      ],
    },
    links: [
      { id: "github", href: UsefulLinks.github },
      {
        id: "aristobyte-ui-org",
        href: UsefulLinks["aristobyte-ui-github-organisation"],
      },
      {
        id: "aristobyte-ui-packages",
        href: UsefulLinks["aristobyte-ui-npm-registry-packages"],
      },
      {
        id: "open-collective",
        href: UsefulLinks["open-collective"],
      },
    ],
  },
  insights: {
    hero: {
      icon: Icons.AristoByteUI,
      links: [
        {
          id: "instagram",
          href: "https://www.instagram.com/aristo_byte",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "linked-in",
          href: "https://www.linkedin.com/in/aristobyte",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "facebook",
          href: "https://www.facebook.com/aristobyte",
          type: LinkType.NEXT_LINK,
        },
      ],
    },
    socials: [
      { id: "instagram", href: UsefulLinks["instagram-page"] },
      { id: "facebook", href: UsefulLinks["facebook-page"] },
      { id: "linked-in", href: UsefulLinks["linked-in-page"] },
      { id: "twitter", href: UsefulLinks["twitter-page"] },
    ],
  },
  contact: {
    hero: {
      icon: Icons.AristoByte,
      links: [
        {
          id: "email",
          href: "mailto:info@aristobyte.com",
          type: LinkType.NEXT_LINK,
        },
        {
          id: "whatsapp",
          href: "https://wa.me/48451652749",
          type: LinkType.NEXT_LINK,
        },
      ],
    },
    cards: [
      {
        id: "email",
        href: "mailto:info@aristobyte.com",
      },
      {
        id: "whatsapp",
        href: "https://wa.me/48451652749",
      },
    ],
  },
  compliance: {
    main: {
      list: [
        {
          id: "terms-and-conditions",
          href: "/compliance/terms-and-conditions",
        },
        {
          id: "cookie-policy",
          href: "/compliance/cookie-policy",
        },
        {
          id: "privacy-policy",
          href: "/compliance/privacy-policy",
        },
        {
          id: "return-policy",
          href: "/compliance/return-policy",
        },
        {
          id: "acceptable-use-policy",
          href: "/compliance/acceptable-use-policy",
        },
        {
          id: "disclaimer",
          href: "/compliance/disclaimer",
        },
        {
          id: "eula",
          href: "/compliance/eula",
        },
        {
          id: "dsar",
          href: "/compliance/dsar",
        },
      ],
    },
  },
};
