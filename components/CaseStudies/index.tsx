import Image from "next/image";
import NextLink from "next/link";

import { CdnIcon } from "@/components";

import "./CaseStudies.scss";

const snapshots = [
  {
    id: "1",
    title: "Design System Unification",
    tag: "UI Architecture",
    metric: "Delivery time -28%",
    icon: "mdi:shape-outline",
    image: "/images/what-we-create/ux-ui-designs.png",
    problem: "Inconsistent cross-page UI patterns slowed delivery.",
    approach: "Unified shared components and route structure.",
    outcome: "Faster iteration and lower implementation overhead.",
  },
  {
    id: "2",
    title: "CLI Onboarding Flow",
    tag: "Developer Experience",
    metric: "Setup friction -41%",
    icon: "mdi:console",
    image: "/images/what-we-create/ai-automation.png",
    problem: "CLI onboarding lacked clarity for first-time users.",
    approach: "Reworked docs and terminal-first demo experience.",
    outcome: "Reduced setup friction and improved adoption confidence.",
  },
  {
    id: "3",
    title: "Product Surface Alignment",
    tag: "Product Strategy",
    metric: "Navigation clarity +32%",
    icon: "mdi:view-grid-outline",
    image: "/images/what-we-create/product-strategy.png",
    problem: "Multiple product surfaces felt disconnected.",
    approach: "Aligned visual language and information hierarchy.",
    outcome: "Clearer user journey and stronger product narrative.",
  },
];

const authors = [
  {
    id: "1",
    name: "AristoByte Team",
    role: "Engineering",
    focus: "DX & architecture",
    icon: "mdi:code-tags",
    accentIcon: "mdi:source-branch",
  },
  {
    id: "2",
    name: "AristoByte Team",
    role: "Design",
    focus: "UI systems & usability",
    icon: "mdi:palette-outline",
    accentIcon: "mdi:vector-square",
  },
  {
    id: "3",
    name: "AristoByte Team",
    role: "Product",
    focus: "Roadmap & delivery",
    icon: "mdi:compass-outline",
    accentIcon: "mdi:target",
  },
];

export const CaseStudies = () => {
  return (
    <section className="case-studies">
      <div className="case-studies__container">
        <h2 className="case-studies__title">Case Study Snapshots</h2>
        <div className="case-studies__grid">
          {snapshots.map((item) => (
            <article key={item.id} className="case-studies__card">
              <header className="case-studies__card-head">
                <div className="case-studies__card-image-wrap" aria-hidden="true">
                  <Image
                    className="case-studies__card-image"
                    src={item.image}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="case-studies__card-meta">
                  <span className="case-studies__tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="case-studies__metric">{item.metric}</span>
              </header>

              <div className="case-studies__flow">
                <p>
                  <strong>
                    <span className="case-studies__flow-icon">
                      <CdnIcon name="mdi:alert-circle-outline" size={14} color="#f18f34" />
                    </span>
                    Problem
                  </strong>
                  {item.problem}
                </p>
                <p>
                  <strong>
                    <span className="case-studies__flow-icon">
                      <CdnIcon name="mdi:lightbulb-on-outline" size={14} color="#f18f34" />
                    </span>
                    Approach
                  </strong>
                  {item.approach}
                </p>
                <p>
                  <strong>
                    <span className="case-studies__flow-icon">
                      <CdnIcon name="mdi:check-decagram-outline" size={14} color="#f18f34" />
                    </span>
                    Outcome
                  </strong>
                  {item.outcome}
                </p>
              </div>

              <div className="case-studies__card-foot">
                <span>
                  <span className="case-studies__foot-icon">
                    <CdnIcon name={item.icon} size={14} color="#f18f34" />
                  </span>
                  Snapshot {item.id}
                </span>
                <span>AristoByte Internal</span>
              </div>
            </article>
          ))}
        </div>

        <section className="case-studies__separator case-studies__separator--notes">
          <span className="case-studies__separator-kicker">Insights Track</span>
          <h3>Engineering Notes</h3>
          <p>Architecture decisions, migrations, and release-level implementation updates.</p>
          <span className="case-studies__separator-line" aria-hidden="true" />
          <NextLink className="case-studies__separator-cta" href="/insights/engineering-notes">
            Open Engineering Notes
            <CdnIcon name="mdi:arrow-right" size={14} color="#f18f34" />
          </NextLink>
        </section>

        <h3 className="case-studies__subtitle">Authors</h3>
        <div className="case-studies__authors">
          {authors.map((author) => (
            <article key={author.id} className="case-studies__author">
              <div className="case-studies__author-head">
                <div className="case-studies__author-icon-wrap" aria-hidden="true">
                  <span className="case-studies__author-icon case-studies__author-icon--primary">
                    <CdnIcon name={author.icon} size={16} color="#f18f34" />
                  </span>
                  <span className="case-studies__author-icon case-studies__author-icon--accent">
                    <CdnIcon name={author.accentIcon} size={14} color="#ffd3bf" />
                  </span>
                </div>
                <div>
                  <h4>{author.name}</h4>
                  <p>{author.role}</p>
                </div>
              </div>
              <span>{author.focus}</span>
              <i>
                <span className="case-studies__flow-icon">
                  <CdnIcon name={author.icon} size={14} color="#f18f34" />
                </span>
                Active on this stream
              </i>
            </article>
          ))}
        </div>

        <section className="case-studies__separator case-studies__separator--apps">
          <div className="case-studies__separator-main">
            <span className="case-studies__separator-kicker">Product Surface</span>
            <h3>Explore AristoByte Apps</h3>
            <p>Review all products and how each stream connects with the case studies above.</p>
          </div>
          <div className="case-studies__separator-actions">
            <NextLink className="case-studies__separator-cta" href="/apps">
              Open Product Overview
              <CdnIcon name="mdi:arrow-right" size={14} color="#f18f34" />
            </NextLink>
            <NextLink className="case-studies__separator-cta case-studies__separator-cta--subtle" href="/insights/open-source-radar">
              Open Source Radar
              <CdnIcon name="mdi:arrow-right" size={14} color="#f18f34" />
            </NextLink>
          </div>
        </section>
      </div>
    </section>
  );
};
