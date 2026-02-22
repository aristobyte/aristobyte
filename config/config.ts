import { Icons } from "@aristobyte-ui/utils";
import { LinkType } from "./constants";
import UsefulLinks from "@/useful_links.json";

export enum MenuList {
  ROOT = "root",
  APPS = "apps",
  COMMUNITY = "community",
  INSIGHTS = "insights",
}

export type HeaderMenuItemType = "internal-link" | "external-link" | "button";

export type HeaderMenuItem = {
  id: string;
  labelKey: string;
  type: HeaderMenuItemType;
  href?: string;
  nextList?: MenuList;
};

export type MenuListType = {
  goBack: MenuList | null;
  menu: HeaderMenuItem[];
};

export const Config = {
  header: {
    logo: Icons.AristoByte,
    nav: [
      { id: "apps", href: "/apps" },
      { id: "community", href: "/community" },
      { id: "insights", href: "/insights" },
      { id: "contact", href: "/contact" },
    ],
    menuLists: {
      [MenuList.ROOT]: {
        goBack: null,
        menu: [
          {
            id: "apps",
            labelKey: "header.nav.apps",
            type: "button",
            nextList: MenuList.APPS,
          },
          {
            id: "community",
            labelKey: "header.nav.community",
            type: "button",
            nextList: MenuList.COMMUNITY,
          },
          {
            id: "insights",
            labelKey: "header.nav.insights",
            type: "button",
            nextList: MenuList.INSIGHTS,
          },
          {
            id: "contact",
            labelKey: "header.nav.contact",
            href: "/contact",
            type: "internal-link",
          },
        ],
      },
      [MenuList.APPS]: {
        goBack: MenuList.ROOT,
        menu: [
          {
            id: "apps-overview",
            labelKey: "header.nav.apps-overview",
            href: "/apps",
            type: "internal-link",
          },
          {
            id: "aristobyte-ui",
            labelKey: "header.nav.aristobyte-ui",
            href: "/apps/aristobyte-ui",
            type: "internal-link",
          },
          {
            id: "aristobyte-ui-cli",
            labelKey: "header.nav.aristobyte-ui-cli",
            href: "/apps/aristobyte-ui-cli",
            type: "internal-link",
          },
          {
            id: "aristo-badges",
            labelKey: "header.nav.aristo-badges",
            href: "/apps/aristo-badges",
            type: "internal-link",
          },
          {
            id: "aristo-repo",
            labelKey: "header.nav.aristo-repo",
            href: "/apps/aristo-repo",
            type: "internal-link",
          },
        ],
      },
      [MenuList.COMMUNITY]: {
        goBack: MenuList.ROOT,
        menu: [
          {
            id: "community-overview",
            labelKey: "header.nav.community-overview",
            href: "/community",
            type: "internal-link",
          },
          {
            id: "community-contribute",
            labelKey: "header.nav.community-contribute",
            href: "/community/contribute",
            type: "internal-link",
          },
          {
            id: "community-discussions",
            labelKey: "header.nav.community-discussions",
            href: "/community/discussions",
            type: "internal-link",
          },
          {
            id: "community-showcase",
            labelKey: "header.nav.community-showcase",
            href: "/community/showcase",
            type: "internal-link",
          },
          {
            id: "community-resources",
            labelKey: "header.nav.community-resources",
            href: "/community/resources",
            type: "internal-link",
          },
        ],
      },
      [MenuList.INSIGHTS]: {
        goBack: MenuList.ROOT,
        menu: [
          {
            id: "insights-overview",
            labelKey: "header.nav.insights-overview",
            href: "/insights",
            type: "internal-link",
          },
          {
            id: "insights-engineering-notes",
            labelKey: "header.nav.insights-engineering-notes",
            href: "/insights/engineering-notes",
            type: "internal-link",
          },
          {
            id: "insights-case-studies",
            labelKey: "header.nav.insights-case-studies",
            href: "/insights/case-studies",
            type: "internal-link",
          },
          {
            id: "insights-open-source-radar",
            labelKey: "header.nav.insights-open-source-radar",
            href: "/insights/open-source-radar",
            type: "internal-link",
          },
        ],
      },
    } as Record<MenuList, MenuListType>,
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
          id: "frontend-product",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "Redux",
            "HTML5",
            "CSS3",
            "Sass",
            "Less",
            "Bootstrap",
            "GraphQL",
            "REST API",
            "Webpack",
            "Babel",
            "Vite",
          ],
        },
        {
          id: "backend-data",
          items: [
            "Node.js",
            "Express.js",
            "Socket.IO",
            "Python",
            "Django",
            "Go",
            "Java",
            "C++",
            "C#",
            ".NET",
            "PostgreSQL",
            "MongoDB",
            "MariaDB",
            "Redis",
            "NumPy",
            "Pandas",
            "MATLAB",
            "LaTeX",
          ],
        },
        {
          id: "mobile-cross-platform",
          items: ["React Native", "Swift", "Kotlin"],
        },
        {
          id: "devops-cloud-observability",
          items: [
            "Docker",
            "AWS",
            "Terraform",
            "Ansible",
            "Jenkins",
            "Splunk",
            "Vercel",
            "Heroku",
            "Git",
            "GitHub",
            "GitLab",
            "Bash",
          ],
        },
        {
          id: "delivery-testing-tooling",
          items: [
            "NPM",
            "PNPM",
            "Turborepo",
            "Jest",
            "Playwright",
            "Cypress",
            "Vitest",
            "Postman",
            "Jupyter",
          ],
        },
        {
          id: "design-creative",
          items: [
            "Figma",
            "Sketch",
            "Photoshop",
            "Lightroom Classic",
            "Illustrator",
            "Premiere Pro",
            "DaVinci Resolve",
            "Blender",
            "GIMP",
          ],
        },
        {
          id: "ai-llm-stack",
          items: [
            "OpenAI API",
            "ChatGPT",
            "GitHub Copilot",
            "Cursor",
            "Claude",
            "Gemini",
            "Perplexity",
            "Hugging Face",
            "LangChain",
            "Ollama",
            "Vercel AI SDK",
          ],
        },
      ],
    },
    features: {
      cards: [
        {
          id: "modular-by-design",
          icon: Icons.Puzzle,
        },
        {
          id: "plug-and-play-integration",
          icon: Icons.Plug,
        },
        {
          id: "lightning-performance",
          icon: Icons.Zap,
        },
        {
          id: "future-proof-stack",
          icon: Icons.Dna,
        },
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
      links: [],
    },
    products: [
      {
        id: "aristobyte-ui",
        href: "/apps/aristobyte-ui",
        status: "live",
      },
      {
        id: "aristobyte-ui-cli",
        href: "/apps/aristobyte-ui-cli",
        status: "live",
      },
      {
        id: "aristo-badges",
        href: "/apps/aristo-badges",
        status: "beta",
      },
      {
        id: "aristo-repo",
        href: "/apps/aristo-repo",
        status: "building",
      },
    ],
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
    overview: [
      { id: "contribute", href: "/community/contribute" },
      { id: "discussions", href: "/community/discussions" },
      { id: "showcase", href: "/community/showcase" },
      { id: "resources", href: "/community/resources" },
    ],
    contribute: [
      { id: "issues", href: "https://github.com/aristobyte/aristobyte.com/issues" },
      { id: "docs", href: "/apps/aristobyte-ui" },
      { id: "sponsor", href: UsefulLinks["open-collective"] },
      { id: "contact", href: "/contact" },
    ],
    discussions: [
      { id: "github", href: "https://github.com/orgs/aristobyte/discussions" },
      { id: "stackoverflow", href: UsefulLinks.stackoverflow },
      { id: "linkedin", href: UsefulLinks["linked-in-page"] },
      { id: "instagram", href: UsefulLinks["instagram-page"] },
    ],
    showcase: [
      { id: "ui", href: "/apps/aristobyte-ui" },
      { id: "badges", href: "/apps/aristo-badges" },
      { id: "repo", href: "/apps/aristo-repo" },
      { id: "case-studies", href: "/insights/case-studies" },
    ],
    resourcesHub: [
      { id: "docs", href: UsefulLinks["aristobyte-ui-documentation-website"] },
      { id: "github", href: UsefulLinks.github },
      { id: "npm", href: UsefulLinks["aristobyte-ui-npm-registry-packages"] },
      { id: "youtube", href: "https://www.youtube.com/@aristobyte" },
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
    instagramPosts: [
      {
        id: "DN-02IuCCTX",
        url: "https://www.instagram.com/p/DN-02IuCCTX/",
      },
      {
        id: "DN7kkx3jSCc",
        url: "https://www.instagram.com/p/DN7kkx3jSCc/",
      },
      {
        id: "DNvwMnx0Fhq",
        url: "https://www.instagram.com/p/DNvwMnx0Fhq/",
      },
      {
        id: "DQehf8BiO_H",
        url: "https://www.instagram.com/p/DQehf8BiO_H/",
      },
      {
        id: "DN3JuM1UNRH",
        url: "https://www.instagram.com/p/DN3JuM1UNRH/",
      },
      {
        id: "DNx2xFpUJRH",
        url: "https://www.instagram.com/p/DNx2xFpUJRH/",
      },
      {
        id: "DN5dBqdCJvy",
        url: "https://www.instagram.com/p/DN5dBqdCJvy/",
      },
      {
        id: "DORaiTAjQ9p",
        url: "https://www.instagram.com/p/DORaiTAjQ9p/",
      },
      {
        id: "DOO5bg5DTXo",
        url: "https://www.instagram.com/p/DOO5bg5DTXo/",
      },
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
