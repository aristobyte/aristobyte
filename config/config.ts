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
      { id: "apps", href: "/apps", labelKey: "header.nav.apps" },
      { id: "community", href: "/community", labelKey: "header.nav.community" },
      { id: "insights", href: "/insights", labelKey: "header.nav.insights" },
      { id: "contact", href: "/contact", labelKey: "header.nav.contact" },
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
        {
          id: "get-started",
          href: "features",
          type: LinkType.SCROLL_LINK,
          labelKey: "home.hero.links.get-started",
        },
      ],
    },
    services: {
      cards: [
        {
          id: "product-strategy",
          titleKey: "home.services.cards.product-strategy.title",
          descriptionKey: "home.services.cards.product-strategy.description",
          previewDescriptionKey:
            "home.services.cards.product-strategy.previewDescription",
          image: "/images/what-we-create/product-strategy.png",
          iconName: "mdi:compass-outline",
        },
        {
          id: "ui-ux",
          titleKey: "home.services.cards.ui-ux.title",
          descriptionKey: "home.services.cards.ui-ux.description",
          previewDescriptionKey: "home.services.cards.ui-ux.previewDescription",
          image: "/images/what-we-create/ux-ui-designs.png",
          iconName: "mdi:palette-outline",
        },
        {
          id: "web-platforms",
          titleKey: "home.services.cards.web-platforms.title",
          descriptionKey: "home.services.cards.web-platforms.description",
          previewDescriptionKey:
            "home.services.cards.web-platforms.previewDescription",
          image: "/images/what-we-create/web-platforms.png",
          iconName: "mdi:web",
        },
        {
          id: "mobile-experiences",
          titleKey: "home.services.cards.mobile-experiences.title",
          descriptionKey: "home.services.cards.mobile-experiences.description",
          previewDescriptionKey:
            "home.services.cards.mobile-experiences.previewDescription",
          image: "/images/what-we-create/mobile-experience.png",
          iconName: "mdi:cellphone",
        },
        {
          id: "ai-automation",
          titleKey: "home.services.cards.ai-automation.title",
          descriptionKey: "home.services.cards.ai-automation.description",
          previewDescriptionKey:
            "home.services.cards.ai-automation.previewDescription",
          image: "/images/what-we-create/ai-automation.png",
          iconName: "mdi:robot-outline",
        },
        {
          id: "devops-growth",
          titleKey: "home.services.cards.devops-growth.title",
          descriptionKey: "home.services.cards.devops-growth.description",
          previewDescriptionKey:
            "home.services.cards.devops-growth.previewDescription",
          image: "/images/what-we-create/devops-growth.png",
          iconName: "mdi:infinity",
        },
      ],
    },
    process: {
      steps: [
        {
          id: "discovery",
          titleKey: "home.process.steps.discovery.title",
          descriptionKey: "home.process.steps.discovery.description",
        },
        {
          id: "design",
          titleKey: "home.process.steps.design.title",
          descriptionKey: "home.process.steps.design.description",
        },
        {
          id: "build",
          titleKey: "home.process.steps.build.title",
          descriptionKey: "home.process.steps.build.description",
        },
        {
          id: "launch",
          titleKey: "home.process.steps.launch.title",
          descriptionKey: "home.process.steps.launch.description",
        },
      ],
    },
    stack: {
      groups: [
        {
          id: "frontend-product",
          titleKey: "home.stack.groups.frontend-product.title",
          descriptionKey: "home.stack.groups.frontend-product.description",
          items: [
            { id: "next-js", labelKey: "home.stack.items.next-js" },
            { id: "react", labelKey: "home.stack.items.react" },
            { id: "typescript", labelKey: "home.stack.items.typescript" },
            { id: "javascript", labelKey: "home.stack.items.javascript" },
            { id: "redux", labelKey: "home.stack.items.redux" },
            { id: "html5", labelKey: "home.stack.items.html5" },
            { id: "css3", labelKey: "home.stack.items.css3" },
            { id: "sass", labelKey: "home.stack.items.sass" },
            { id: "less", labelKey: "home.stack.items.less" },
            { id: "bootstrap", labelKey: "home.stack.items.bootstrap" },
            { id: "graphql", labelKey: "home.stack.items.graphql" },
            { id: "rest-api", labelKey: "home.stack.items.rest-api" },
            { id: "webpack", labelKey: "home.stack.items.webpack" },
            { id: "babel", labelKey: "home.stack.items.babel" },
            { id: "vite", labelKey: "home.stack.items.vite" },
          ],
        },
        {
          id: "backend-data",
          titleKey: "home.stack.groups.backend-data.title",
          descriptionKey: "home.stack.groups.backend-data.description",
          items: [
            { id: "node-js", labelKey: "home.stack.items.node-js" },
            { id: "express-js", labelKey: "home.stack.items.express-js" },
            { id: "socket-io", labelKey: "home.stack.items.socket-io" },
            { id: "python", labelKey: "home.stack.items.python" },
            { id: "django", labelKey: "home.stack.items.django" },
            { id: "go", labelKey: "home.stack.items.go" },
            { id: "java", labelKey: "home.stack.items.java" },
            { id: "c-plus-plus", labelKey: "home.stack.items.c-plus-plus" },
            { id: "c-sharp", labelKey: "home.stack.items.c-sharp" },
            { id: "dotnet", labelKey: "home.stack.items.dotnet" },
            { id: "postgresql", labelKey: "home.stack.items.postgresql" },
            { id: "mongodb", labelKey: "home.stack.items.mongodb" },
            { id: "mariadb", labelKey: "home.stack.items.mariadb" },
            { id: "redis", labelKey: "home.stack.items.redis" },
            { id: "numpy", labelKey: "home.stack.items.numpy" },
            { id: "pandas", labelKey: "home.stack.items.pandas" },
            { id: "matlab", labelKey: "home.stack.items.matlab" },
            { id: "latex", labelKey: "home.stack.items.latex" },
          ],
        },
        {
          id: "mobile-cross-platform",
          titleKey: "home.stack.groups.mobile-cross-platform.title",
          descriptionKey: "home.stack.groups.mobile-cross-platform.description",
          items: [
            { id: "react-native", labelKey: "home.stack.items.react-native" },
            { id: "swift", labelKey: "home.stack.items.swift" },
            { id: "kotlin", labelKey: "home.stack.items.kotlin" },
          ],
        },
        {
          id: "devops-cloud-observability",
          titleKey: "home.stack.groups.devops-cloud-observability.title",
          descriptionKey: "home.stack.groups.devops-cloud-observability.description",
          items: [
            { id: "docker", labelKey: "home.stack.items.docker" },
            { id: "aws", labelKey: "home.stack.items.aws" },
            { id: "terraform", labelKey: "home.stack.items.terraform" },
            { id: "ansible", labelKey: "home.stack.items.ansible" },
            { id: "jenkins", labelKey: "home.stack.items.jenkins" },
            { id: "splunk", labelKey: "home.stack.items.splunk" },
            { id: "vercel", labelKey: "home.stack.items.vercel" },
            { id: "heroku", labelKey: "home.stack.items.heroku" },
            { id: "git", labelKey: "home.stack.items.git" },
            { id: "github", labelKey: "home.stack.items.github" },
            { id: "gitlab", labelKey: "home.stack.items.gitlab" },
            { id: "bash", labelKey: "home.stack.items.bash" },
          ],
        },
        {
          id: "delivery-testing-tooling",
          titleKey: "home.stack.groups.delivery-testing-tooling.title",
          descriptionKey: "home.stack.groups.delivery-testing-tooling.description",
          items: [
            { id: "npm", labelKey: "home.stack.items.npm" },
            { id: "pnpm", labelKey: "home.stack.items.pnpm" },
            { id: "turborepo", labelKey: "home.stack.items.turborepo" },
            { id: "jest", labelKey: "home.stack.items.jest" },
            { id: "playwright", labelKey: "home.stack.items.playwright" },
            { id: "cypress", labelKey: "home.stack.items.cypress" },
            { id: "vitest", labelKey: "home.stack.items.vitest" },
            { id: "postman", labelKey: "home.stack.items.postman" },
            { id: "jupyter", labelKey: "home.stack.items.jupyter" },
          ],
        },
        {
          id: "design-creative",
          titleKey: "home.stack.groups.design-creative.title",
          descriptionKey: "home.stack.groups.design-creative.description",
          items: [
            { id: "figma", labelKey: "home.stack.items.figma" },
            { id: "sketch", labelKey: "home.stack.items.sketch" },
            { id: "photoshop", labelKey: "home.stack.items.photoshop" },
            { id: "lightroom-classic", labelKey: "home.stack.items.lightroom-classic" },
            { id: "illustrator", labelKey: "home.stack.items.illustrator" },
            { id: "premiere-pro", labelKey: "home.stack.items.premiere-pro" },
            { id: "davinci-resolve", labelKey: "home.stack.items.davinci-resolve" },
            { id: "blender", labelKey: "home.stack.items.blender" },
            { id: "gimp", labelKey: "home.stack.items.gimp" },
          ],
        },
        {
          id: "ai-llm-stack",
          titleKey: "home.stack.groups.ai-llm-stack.title",
          descriptionKey: "home.stack.groups.ai-llm-stack.description",
          items: [
            { id: "openai-api", labelKey: "home.stack.items.openai-api" },
            { id: "chatgpt", labelKey: "home.stack.items.chatgpt" },
            { id: "github-copilot", labelKey: "home.stack.items.github-copilot" },
            { id: "cursor", labelKey: "home.stack.items.cursor" },
            { id: "claude", labelKey: "home.stack.items.claude" },
            { id: "gemini", labelKey: "home.stack.items.gemini" },
            { id: "perplexity", labelKey: "home.stack.items.perplexity" },
            { id: "hugging-face", labelKey: "home.stack.items.hugging-face" },
            { id: "langchain", labelKey: "home.stack.items.langchain" },
            { id: "ollama", labelKey: "home.stack.items.ollama" },
            { id: "vercel-ai-sdk", labelKey: "home.stack.items.vercel-ai-sdk" },
          ],
        },
      ],
    },
    features: {
      cards: [
        {
          id: "modular-by-design",
          icon: Icons.Puzzle,
          titleKey: "home.features.cards.modular-by-design.title",
          descriptionKey: "home.features.cards.modular-by-design.description",
        },
        {
          id: "plug-and-play-integration",
          icon: Icons.Plug,
          titleKey: "home.features.cards.plug-and-play-integration.title",
          descriptionKey: "home.features.cards.plug-and-play-integration.description",
        },
        {
          id: "lightning-performance",
          icon: Icons.Zap,
          titleKey: "home.features.cards.lightning-performance.title",
          descriptionKey: "home.features.cards.lightning-performance.description",
        },
        {
          id: "future-proof-stack",
          icon: Icons.Dna,
          titleKey: "home.features.cards.future-proof-stack.title",
          descriptionKey: "home.features.cards.future-proof-stack.description",
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
        {
          id: "github",
          href: UsefulLinks.github,
          labelKey: "home.community.links.github",
          iconName: "mdi:github",
        },
        {
          id: "open-collective",
          href: UsefulLinks["open-collective"],
          labelKey: "home.community.links.open-collective",
          iconName: "simple-icons:opencollective",
        },
        {
          id: "patreon",
          href: UsefulLinks.patreon,
          labelKey: "home.community.links.patreon",
          iconName: "simple-icons:patreon",
        },
        {
          id: "stackoverflow",
          href: UsefulLinks.stackoverflow,
          labelKey: "home.community.links.stackoverflow",
          iconName: "mdi:stack-overflow",
        },
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
          labelKey: "ui.hero.links.docoumentation",
        },
      ],
    },
    links: [
      {
        id: "documentation",
        href: UsefulLinks["aristobyte-ui-documentation-website"],
        labelKey: "ui.suite.links.documentation",
        iconName: "mdi:book-open-variant",
      },
      {
        id: "github-org",
        href: UsefulLinks["aristobyte-ui-github-organisation"],
        labelKey: "ui.suite.links.github-org",
        iconName: "mdi:github",
      },
      {
        id: "github-project",
        href: UsefulLinks["aristobyte-ui-github-project"],
        labelKey: "ui.suite.links.github-project",
        iconName: "mdi:source-repository",
      },
      {
        id: "npm-packages",
        href: UsefulLinks["aristobyte-ui-npm-registry-packages"],
        labelKey: "ui.suite.links.npm-packages",
        iconName: "simple-icons:npm",
      },
      {
        id: "releases",
        href: UsefulLinks["aristobyte-ui-github-repo-releases"],
        labelKey: "ui.suite.links.releases",
        iconName: "mdi:tag-outline",
      },
      {
        id: "gh-packages",
        href: UsefulLinks["aristobyte-ui-github-pages-registry-packages"],
        labelKey: "ui.suite.links.gh-packages",
        iconName: "mdi:package-variant",
      },
      {
        id: "open-collective",
        href: UsefulLinks["aristobyte-ui-open-collective"],
        labelKey: "ui.suite.links.open-collective",
        iconName: "simple-icons:opencollective",
      },
      {
        id: "discussions",
        href: "https://github.com/orgs/aristobyte-ui/discussions",
        labelKey: "ui.suite.links.discussions",
        iconName: "mdi:message-text-outline",
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
        statusKey: "apps.products.status.live",
        titleKey: "apps.products.items.aristobyte-ui.title",
        descriptionKey: "apps.products.items.aristobyte-ui.description",
      },
      {
        id: "aristobyte-ui-cli",
        href: "/apps/aristobyte-ui-cli",
        status: "live",
        statusKey: "apps.products.status.live",
        titleKey: "apps.products.items.aristobyte-ui-cli.title",
        descriptionKey: "apps.products.items.aristobyte-ui-cli.description",
      },
      {
        id: "aristo-badges",
        href: "/apps/aristo-badges",
        status: "beta",
        statusKey: "apps.products.status.beta",
        titleKey: "apps.products.items.aristo-badges.title",
        descriptionKey: "apps.products.items.aristo-badges.description",
      },
      {
        id: "aristo-repo",
        href: "/apps/aristo-repo",
        status: "building",
        statusKey: "apps.products.status.building",
        titleKey: "apps.products.items.aristo-repo.title",
        descriptionKey: "apps.products.items.aristo-repo.description",
      },
    ],
    roadmap: {
      items: [
        {
          id: "productivity",
          titleKey: "apps.roadmap.items.productivity.title",
          descriptionKey: "apps.roadmap.items.productivity.description",
        },
        {
          id: "creative",
          titleKey: "apps.roadmap.items.creative.title",
          descriptionKey: "apps.roadmap.items.creative.description",
        },
        {
          id: "automation",
          titleKey: "apps.roadmap.items.automation.title",
          descriptionKey: "apps.roadmap.items.automation.description",
        },
        {
          id: "community-tools",
          titleKey: "apps.roadmap.items.community-tools.title",
          descriptionKey: "apps.roadmap.items.community-tools.description",
        },
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
          labelKey: "community.hero.links.github-discussions",
        },
        {
          id: "aristobyte-board",
          href: "https://github.com/orgs/aristobyte-ui/projects/2/views/1?filterQuery=",
          type: LinkType.NEXT_LINK,
          labelKey: "community.hero.links.aristobyte-board",
        },
        {
          id: "open-collective",
          href: "https://opencollective.com/aristobyte-ui",
          type: LinkType.NEXT_LINK,
          labelKey: "community.hero.links.open-collective",
        },
      ],
    },
    links: [
      {
        id: "github",
        href: UsefulLinks.github,
        labelKey: "community.resources.links.github",
        iconName: "mdi:github",
      },
      {
        id: "aristobyte-ui-org",
        href: UsefulLinks["aristobyte-ui-github-organisation"],
        labelKey: "community.resources.links.aristobyte-ui-org",
        iconName: "mdi:source-repository",
      },
      {
        id: "aristobyte-ui-packages",
        href: UsefulLinks["aristobyte-ui-npm-registry-packages"],
        labelKey: "community.resources.links.aristobyte-ui-packages",
        iconName: "mdi:package-variant",
      },
      {
        id: "open-collective",
        href: UsefulLinks["open-collective"],
        labelKey: "community.resources.links.open-collective",
        iconName: "simple-icons:opencollective",
      },
    ],
    overview: [
      {
        id: "contribute",
        href: "/community/contribute",
        titleKey: "community.overview.items.contribute.title",
        descriptionKey: "community.overview.items.contribute.description",
        actionKey: "community.overview.items.contribute.action",
      },
      {
        id: "discussions",
        href: "/community/discussions",
        titleKey: "community.overview.items.discussions.title",
        descriptionKey: "community.overview.items.discussions.description",
        actionKey: "community.overview.items.discussions.action",
      },
      {
        id: "showcase",
        href: "/community/showcase",
        titleKey: "community.overview.items.showcase.title",
        descriptionKey: "community.overview.items.showcase.description",
        actionKey: "community.overview.items.showcase.action",
      },
      {
        id: "resources",
        href: "/community/resources",
        titleKey: "community.overview.items.resources.title",
        descriptionKey: "community.overview.items.resources.description",
        actionKey: "community.overview.items.resources.action",
      },
    ],
    contribute: [
      {
        id: "issues",
        href: "https://github.com/aristobyte/aristobyte.com/issues",
        titleKey: "community.contribute.items.issues.title",
        descriptionKey: "community.contribute.items.issues.description",
        actionKey: "community.contribute.items.issues.action",
      },
      {
        id: "docs",
        href: "/apps/aristobyte-ui",
        titleKey: "community.contribute.items.docs.title",
        descriptionKey: "community.contribute.items.docs.description",
        actionKey: "community.contribute.items.docs.action",
      },
      {
        id: "sponsor",
        href: UsefulLinks["open-collective"],
        titleKey: "community.contribute.items.sponsor.title",
        descriptionKey: "community.contribute.items.sponsor.description",
        actionKey: "community.contribute.items.sponsor.action",
      },
      {
        id: "contact",
        href: "/contact",
        titleKey: "community.contribute.items.contact.title",
        descriptionKey: "community.contribute.items.contact.description",
        actionKey: "community.contribute.items.contact.action",
      },
    ],
    discussions: [
      {
        id: "github",
        href: "https://github.com/orgs/aristobyte/discussions",
        titleKey: "community.discussions.items.github.title",
        descriptionKey: "community.discussions.items.github.description",
        actionKey: "community.discussions.items.github.action",
      },
      {
        id: "stackoverflow",
        href: UsefulLinks.stackoverflow,
        titleKey: "community.discussions.items.stackoverflow.title",
        descriptionKey: "community.discussions.items.stackoverflow.description",
        actionKey: "community.discussions.items.stackoverflow.action",
      },
      {
        id: "linkedin",
        href: UsefulLinks["linked-in-page"],
        titleKey: "community.discussions.items.linkedin.title",
        descriptionKey: "community.discussions.items.linkedin.description",
        actionKey: "community.discussions.items.linkedin.action",
      },
      {
        id: "instagram",
        href: UsefulLinks["instagram-page"],
        titleKey: "community.discussions.items.instagram.title",
        descriptionKey: "community.discussions.items.instagram.description",
        actionKey: "community.discussions.items.instagram.action",
      },
    ],
    showcase: [
      {
        id: "ui",
        href: "/apps/aristobyte-ui",
        titleKey: "community.showcase.items.ui.title",
        descriptionKey: "community.showcase.items.ui.description",
        actionKey: "community.showcase.items.ui.action",
      },
      {
        id: "badges",
        href: "/apps/aristo-badges",
        titleKey: "community.showcase.items.badges.title",
        descriptionKey: "community.showcase.items.badges.description",
        actionKey: "community.showcase.items.badges.action",
      },
      {
        id: "repo",
        href: "/apps/aristo-repo",
        titleKey: "community.showcase.items.repo.title",
        descriptionKey: "community.showcase.items.repo.description",
        actionKey: "community.showcase.items.repo.action",
      },
      {
        id: "case-studies",
        href: "/insights/case-studies",
        titleKey: "community.showcase.items.case-studies.title",
        descriptionKey: "community.showcase.items.case-studies.description",
        actionKey: "community.showcase.items.case-studies.action",
      },
    ],
    resourcesHub: [
      {
        id: "docs",
        href: UsefulLinks["aristobyte-ui-documentation-website"],
        titleKey: "community.resources-hub.items.docs.title",
        descriptionKey: "community.resources-hub.items.docs.description",
        actionKey: "community.resources-hub.items.docs.action",
      },
      {
        id: "github",
        href: UsefulLinks.github,
        titleKey: "community.resources-hub.items.github.title",
        descriptionKey: "community.resources-hub.items.github.description",
        actionKey: "community.resources-hub.items.github.action",
      },
      {
        id: "npm",
        href: UsefulLinks["aristobyte-ui-npm-registry-packages"],
        titleKey: "community.resources-hub.items.npm.title",
        descriptionKey: "community.resources-hub.items.npm.description",
        actionKey: "community.resources-hub.items.npm.action",
      },
      {
        id: "youtube",
        href: "https://www.youtube.com/@aristobyte",
        titleKey: "community.resources-hub.items.youtube.title",
        descriptionKey: "community.resources-hub.items.youtube.description",
        actionKey: "community.resources-hub.items.youtube.action",
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
          labelKey: "insights.hero.links.instagram",
        },
        {
          id: "linked-in",
          href: "https://www.linkedin.com/in/aristobyte",
          type: LinkType.NEXT_LINK,
          labelKey: "insights.hero.links.linked-in",
        },
        {
          id: "facebook",
          href: "https://www.facebook.com/aristobyte",
          type: LinkType.NEXT_LINK,
          labelKey: "insights.hero.links.facebook",
        },
      ],
    },
    socials: [
      {
        id: "instagram",
        href: UsefulLinks["instagram-page"],
        labelKey: "insights.social.links.instagram",
        iconName: "mdi:instagram",
      },
      {
        id: "facebook",
        href: UsefulLinks["facebook-page"],
        labelKey: "insights.social.links.facebook",
        iconName: "mdi:facebook",
      },
      {
        id: "linked-in",
        href: UsefulLinks["linked-in-page"],
        labelKey: "insights.social.links.linked-in",
        iconName: "mdi:linkedin",
      },
      {
        id: "twitter",
        href: UsefulLinks["twitter-page"],
        labelKey: "insights.social.links.twitter",
        iconName: "mdi:twitter",
      },
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
    featuredItems: [
      {
        id: "1",
        topicKey: "insights.featured.items.1.topic",
        titleKey: "insights.featured.items.1.title",
        metaKey: "insights.featured.items.1.meta",
      },
      {
        id: "2",
        topicKey: "insights.featured.items.2.topic",
        titleKey: "insights.featured.items.2.title",
        metaKey: "insights.featured.items.2.meta",
      },
      {
        id: "3",
        topicKey: "insights.featured.items.3.topic",
        titleKey: "insights.featured.items.3.title",
        metaKey: "insights.featured.items.3.meta",
      },
    ],
    caseStudies: {
      snapshots: [
        {
          id: "1",
          titleKey: "insights.case-studies.snapshots.1.title",
          tagKey: "insights.case-studies.snapshots.1.tag",
          metricKey: "insights.case-studies.snapshots.1.metric",
          problemKey: "insights.case-studies.snapshots.1.problem",
          approachKey: "insights.case-studies.snapshots.1.approach",
          outcomeKey: "insights.case-studies.snapshots.1.outcome",
          iconName: "mdi:shape-outline",
          image: "/images/what-we-create/ux-ui-designs.png",
        },
        {
          id: "2",
          titleKey: "insights.case-studies.snapshots.2.title",
          tagKey: "insights.case-studies.snapshots.2.tag",
          metricKey: "insights.case-studies.snapshots.2.metric",
          problemKey: "insights.case-studies.snapshots.2.problem",
          approachKey: "insights.case-studies.snapshots.2.approach",
          outcomeKey: "insights.case-studies.snapshots.2.outcome",
          iconName: "mdi:console",
          image: "/images/what-we-create/ai-automation.png",
        },
        {
          id: "3",
          titleKey: "insights.case-studies.snapshots.3.title",
          tagKey: "insights.case-studies.snapshots.3.tag",
          metricKey: "insights.case-studies.snapshots.3.metric",
          problemKey: "insights.case-studies.snapshots.3.problem",
          approachKey: "insights.case-studies.snapshots.3.approach",
          outcomeKey: "insights.case-studies.snapshots.3.outcome",
          iconName: "mdi:view-grid-outline",
          image: "/images/what-we-create/product-strategy.png",
        },
      ],
      authors: [
        {
          id: "1",
          nameKey: "insights.case-studies.authors.items.1.name",
          roleKey: "insights.case-studies.authors.items.1.role",
          focusKey: "insights.case-studies.authors.items.1.focus",
          iconName: "mdi:code-tags",
          accentIconName: "mdi:source-branch",
        },
        {
          id: "2",
          nameKey: "insights.case-studies.authors.items.2.name",
          roleKey: "insights.case-studies.authors.items.2.role",
          focusKey: "insights.case-studies.authors.items.2.focus",
          iconName: "mdi:palette-outline",
          accentIconName: "mdi:vector-square",
        },
        {
          id: "3",
          nameKey: "insights.case-studies.authors.items.3.name",
          roleKey: "insights.case-studies.authors.items.3.role",
          focusKey: "insights.case-studies.authors.items.3.focus",
          iconName: "mdi:compass-outline",
          accentIconName: "mdi:target",
        },
      ],
    },
    engineeringNotes: {
      filters: [
        { id: "all", labelKey: "insights.engineering-notes.filters.all" },
        { id: "release", labelKey: "insights.engineering-notes.filters.release" },
        { id: "decision", labelKey: "insights.engineering-notes.filters.decision" },
        { id: "migration", labelKey: "insights.engineering-notes.filters.migration" },
      ],
      namespaces: [
        {
          id: "aristobyte-ui",
          titleKey: "insights.engineering-notes.namespaces.aristobyte-ui.title",
          descriptionKey: "insights.engineering-notes.namespaces.aristobyte-ui.description",
          href: "https://www.npmjs.com/org/aristobyte-ui",
          links: [
            {
              labelKey: "insights.engineering-notes.namespaces.aristobyte-ui.links.npm-org",
              href: "https://www.npmjs.com/org/aristobyte-ui",
            },
            {
              labelKey: "insights.engineering-notes.namespaces.aristobyte-ui.links.cli-package",
              href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
            },
            {
              labelKey:
                "insights.engineering-notes.namespaces.aristobyte-ui.links.github-packages",
              href: "https://github.com/aristobyte-ui/aristobyte-ui/pkgs/npm/cli",
            },
          ],
        },
        {
          id: "aristobyte",
          titleKey: "insights.engineering-notes.namespaces.aristobyte.title",
          descriptionKey: "insights.engineering-notes.namespaces.aristobyte.description",
          href: "https://www.npmjs.com/search?q=%40aristobyte",
          links: [
            {
              labelKey:
                "insights.engineering-notes.namespaces.aristobyte.links.namespace-search",
              href: "https://www.npmjs.com/search?q=%40aristobyte",
            },
            {
              labelKey: "insights.engineering-notes.namespaces.aristobyte.links.team-profile",
              href: "https://www.npmjs.com/~aristobyte_team",
            },
          ],
        },
      ],
      notes: [
        {
          id: "note-1",
          date: "2026-02-10",
          type: "release",
          typeLabelKey: "insights.engineering-notes.filters.release",
          namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte-ui",
          titleKey: "insights.engineering-notes.notes.note-1.title",
          descriptionKey: "insights.engineering-notes.notes.note-1.description",
          href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
        },
        {
          id: "note-2",
          date: "2026-02-06",
          type: "decision",
          typeLabelKey: "insights.engineering-notes.filters.decision",
          namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte-ui",
          titleKey: "insights.engineering-notes.notes.note-2.title",
          descriptionKey: "insights.engineering-notes.notes.note-2.description",
        },
        {
          id: "note-3",
          date: "2026-01-31",
          type: "migration",
          typeLabelKey: "insights.engineering-notes.filters.migration",
          namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte-ui",
          titleKey: "insights.engineering-notes.notes.note-3.title",
          descriptionKey: "insights.engineering-notes.notes.note-3.description",
        },
        {
          id: "note-4",
          date: "2026-01-24",
          type: "release",
          typeLabelKey: "insights.engineering-notes.filters.release",
          namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte",
          titleKey: "insights.engineering-notes.notes.note-4.title",
          descriptionKey: "insights.engineering-notes.notes.note-4.description",
          href: "https://www.npmjs.com/search?q=%40aristobyte",
        },
      ],
      noteTypeIcon: {
        release: "mdi:rocket-launch-outline",
        decision: "mdi:source-branch",
        migration: "mdi:swap-horizontal",
      },
      deepDives: [
        {
          id: "d1",
          titleKey: "insights.engineering-notes.deep-dives.items.d1.title",
          descriptionKey: "insights.engineering-notes.deep-dives.items.d1.description",
        },
        {
          id: "d2",
          titleKey: "insights.engineering-notes.deep-dives.items.d2.title",
          descriptionKey: "insights.engineering-notes.deep-dives.items.d2.description",
        },
        {
          id: "d3",
          titleKey: "insights.engineering-notes.deep-dives.items.d3.title",
          descriptionKey: "insights.engineering-notes.deep-dives.items.d3.description",
        },
      ],
    },
    openSourceRadar: {
      sections: [
        {
          id: "releases",
          titleKey: "insights.open-source-radar.sections.releases.title",
          items: [
            {
              id: "ui-cli-release",
              titleKey: "insights.open-source-radar.sections.releases.items.ui-cli-release.title",
              descriptionKey:
                "insights.open-source-radar.sections.releases.items.ui-cli-release.description",
              ctaKey: "insights.open-source-radar.sections.releases.items.ui-cli-release.cta",
              href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
            },
            {
              id: "ui-releases",
              titleKey: "insights.open-source-radar.sections.releases.items.ui-releases.title",
              descriptionKey:
                "insights.open-source-radar.sections.releases.items.ui-releases.description",
              ctaKey: "insights.open-source-radar.sections.releases.items.ui-releases.cta",
              href: "https://github.com/aristobyte-ui/aristobyte-ui/releases",
            },
          ],
        },
        {
          id: "milestones",
          titleKey: "insights.open-source-radar.sections.milestones.title",
          items: [
            {
              id: "project-board",
              titleKey:
                "insights.open-source-radar.sections.milestones.items.project-board.title",
              descriptionKey:
                "insights.open-source-radar.sections.milestones.items.project-board.description",
              ctaKey: "insights.open-source-radar.sections.milestones.items.project-board.cta",
              href: "https://github.com/orgs/aristobyte-ui/projects/2/views/1?filterQuery=",
            },
            {
              id: "apps-overview",
              titleKey:
                "insights.open-source-radar.sections.milestones.items.apps-overview.title",
              descriptionKey:
                "insights.open-source-radar.sections.milestones.items.apps-overview.description",
              ctaKey: "insights.open-source-radar.sections.milestones.items.apps-overview.cta",
              href: "/apps",
            },
          ],
        },
        {
          id: "discussions",
          titleKey: "insights.open-source-radar.sections.discussions.title",
          items: [
            {
              id: "org-discussions",
              titleKey:
                "insights.open-source-radar.sections.discussions.items.org-discussions.title",
              descriptionKey:
                "insights.open-source-radar.sections.discussions.items.org-discussions.description",
              ctaKey:
                "insights.open-source-radar.sections.discussions.items.org-discussions.cta",
              href: "https://github.com/orgs/aristobyte-ui/discussions",
            },
            {
              id: "community-route",
              titleKey:
                "insights.open-source-radar.sections.discussions.items.community-route.title",
              descriptionKey:
                "insights.open-source-radar.sections.discussions.items.community-route.description",
              ctaKey:
                "insights.open-source-radar.sections.discussions.items.community-route.cta",
              href: "/community",
            },
          ],
        },
      ],
    },
  },
  contact: {
    hero: {
      icon: Icons.AristoByte,
      links: [
        {
          id: "email",
          href: "mailto:info@aristobyte.com",
          type: LinkType.NEXT_LINK,
          labelKey: "contact.hero.links.email",
        },
        {
          id: "whatsapp",
          href: "https://wa.me/48451652749",
          type: LinkType.NEXT_LINK,
          labelKey: "contact.hero.links.whatsapp",
        },
      ],
    },
    cards: [
      {
        id: "email",
        href: "mailto:info@aristobyte.com",
        titleKey: "contact.cards.email.title",
        valueKey: "contact.cards.email.value",
        descriptionKey: "contact.cards.email.description",
        actionKey: "contact.cards.email.action",
      },
      {
        id: "whatsapp",
        href: "https://wa.me/48451652749",
        titleKey: "contact.cards.whatsapp.title",
        valueKey: "contact.cards.whatsapp.value",
        descriptionKey: "contact.cards.whatsapp.description",
        actionKey: "contact.cards.whatsapp.action",
      },
    ],
  },
  footer: {
    socials: [
      {
        id: "github",
        labelKey: "footer.social.github",
        href: "https://github.com/aristobyte",
        iconName: "mdi:github",
      },
      {
        id: "stackoverflow",
        labelKey: "footer.social.stackoverflow",
        href: "https://stackoverflow.com/users/30507294/aristobyte",
        iconName: "mdi:stack-overflow",
      },
      {
        id: "npm",
        labelKey: "footer.social.npm",
        href: "https://www.npmjs.com/~aristobyte_team",
        iconName: "mdi:npm",
      },
      {
        id: "email",
        labelKey: "footer.social.email",
        href: "mailto:info.aristobyte@gmail.com",
        iconName: "mdi:email-outline",
      },
      {
        id: "linkedin",
        labelKey: "footer.social.linkedin",
        href: "http://linkedin.com/company/aristobyte/",
        iconName: "mdi:linkedin",
      },
      {
        id: "instagram",
        labelKey: "footer.social.instagram",
        href: "https://www.instagram.com/aristo_byte/",
        iconName: "mdi:instagram",
      },
      {
        id: "youtube",
        labelKey: "footer.social.youtube",
        href: "https://www.youtube.com/@aristobyte",
        iconName: "mdi:youtube",
      },
      {
        id: "open-collective",
        labelKey: "footer.social.open-collective",
        href: "https://opencollective.com/aristobyte",
        iconName: "simple-icons:opencollective",
      },
      {
        id: "patreon",
        labelKey: "footer.social.patreon",
        href: "https://www.patreon.com/c/aristobyte",
        iconName: "mdi:patreon",
      },
    ],
  },
  compliance: {
    main: {
      list: [
        {
          id: "terms-and-conditions",
          href: "/compliance/terms-and-conditions",
          labelKey: "compliance.main.list.terms-and-conditions",
        },
        {
          id: "cookie-policy",
          href: "/compliance/cookie-policy",
          labelKey: "compliance.main.list.cookie-policy",
        },
        {
          id: "privacy-policy",
          href: "/compliance/privacy-policy",
          labelKey: "compliance.main.list.privacy-policy",
        },
        {
          id: "return-policy",
          href: "/compliance/return-policy",
          labelKey: "compliance.main.list.return-policy",
        },
        {
          id: "acceptable-use-policy",
          href: "/compliance/acceptable-use-policy",
          labelKey: "compliance.main.list.acceptable-use-policy",
        },
        {
          id: "disclaimer",
          href: "/compliance/disclaimer",
          labelKey: "compliance.main.list.disclaimer",
        },
        {
          id: "eula",
          href: "/compliance/eula",
          labelKey: "compliance.main.list.eula",
        },
        {
          id: "dsar",
          href: "/compliance/dsar",
          labelKey: "compliance.main.list.dsar",
        },
      ],
    },
  },
};
