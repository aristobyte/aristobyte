import Image from "next/image";
import NextLink from "next/link";

import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { useTranslate } from "@/context";

import "./CaseStudies.scss";

const snapshots = [
  {
    id: "1",
    icon: "mdi:shape-outline",
    image: "/images/what-we-create/ux-ui-designs.png",
  },
  {
    id: "2",
    icon: "mdi:console",
    image: "/images/what-we-create/ai-automation.png",
  },
  {
    id: "3",
    icon: "mdi:view-grid-outline",
    image: "/images/what-we-create/product-strategy.png",
  },
];

const authors = [
  {
    id: "1",
    icon: "mdi:code-tags",
    accentIcon: "mdi:source-branch",
  },
  {
    id: "2",
    icon: "mdi:palette-outline",
    accentIcon: "mdi:vector-square",
  },
  {
    id: "3",
    icon: "mdi:compass-outline",
    accentIcon: "mdi:target",
  },
];

export const CaseStudies = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.CaseStudies}
      title={{
        text: "insights.case-studies.section.title",
        align: Align.LEFT,
      }}
    >
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
                <span className="case-studies__tag">{t(`insights.case-studies.snapshots.${item.id}.tag`)}</span>
                <h3>{t(`insights.case-studies.snapshots.${item.id}.title`)}</h3>
              </div>
              <span className="case-studies__metric">{t(`insights.case-studies.snapshots.${item.id}.metric`)}</span>
            </header>

            <div className="case-studies__flow">
              <p>
                <strong>
                  <span className="case-studies__flow-icon">
                    <CdnIcon name="mdi:alert-circle-outline" size={14} color="#f18f34" />
                  </span>
                  {t("insights.case-studies.labels.problem")}
                </strong>
                {t(`insights.case-studies.snapshots.${item.id}.problem`)}
              </p>
              <p>
                <strong>
                  <span className="case-studies__flow-icon">
                    <CdnIcon name="mdi:lightbulb-on-outline" size={14} color="#f18f34" />
                  </span>
                  {t("insights.case-studies.labels.approach")}
                </strong>
                {t(`insights.case-studies.snapshots.${item.id}.approach`)}
              </p>
              <p>
                <strong>
                  <span className="case-studies__flow-icon">
                    <CdnIcon name="mdi:check-decagram-outline" size={14} color="#f18f34" />
                  </span>
                  {t("insights.case-studies.labels.outcome")}
                </strong>
                {t(`insights.case-studies.snapshots.${item.id}.outcome`)}
              </p>
            </div>

            <div className="case-studies__card-foot">
              <span>
                <span className="case-studies__foot-icon">
                  <CdnIcon name={item.icon} size={14} color="#f18f34" />
                </span>
                {t("insights.case-studies.labels.snapshot")} {item.id}
              </span>
              <span>{t("insights.case-studies.labels.internal")}</span>
            </div>
          </article>
        ))}
      </div>

        <section className="case-studies__separator case-studies__separator--notes">
          <span className="case-studies__separator-kicker">{t("insights.case-studies.separators.notes.kicker")}</span>
          <h3>{t("insights.case-studies.separators.notes.title")}</h3>
          <p>{t("insights.case-studies.separators.notes.description")}</p>
          <span className="case-studies__separator-line" aria-hidden="true" />
          <NextLink className="case-studies__separator-cta" href="/insights/engineering-notes">
            {t("insights.case-studies.separators.notes.cta")}
            <CdnIcon name="mdi:arrow-right" size={14} color="#f18f34" />
          </NextLink>
        </section>

      <h3 className="case-studies__subtitle">{t("insights.case-studies.authors.title")}</h3>
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
                <h4>{t(`insights.case-studies.authors.items.${author.id}.name`)}</h4>
                <p>{t(`insights.case-studies.authors.items.${author.id}.role`)}</p>
              </div>
            </div>
            <span>{t(`insights.case-studies.authors.items.${author.id}.focus`)}</span>
            <i>
              <span className="case-studies__flow-icon">
                <CdnIcon name={author.icon} size={14} color="#f18f34" />
              </span>
              {t("insights.case-studies.authors.active-stream")}
            </i>
          </article>
        ))}
      </div>

        <section className="case-studies__separator case-studies__separator--apps">
          <div className="case-studies__separator-main">
            <span className="case-studies__separator-kicker">{t("insights.case-studies.separators.apps.kicker")}</span>
            <h3>{t("insights.case-studies.separators.apps.title")}</h3>
            <p>{t("insights.case-studies.separators.apps.description")}</p>
          </div>
          <div className="case-studies__separator-actions">
            <NextLink className="case-studies__separator-cta" href="/apps">
              {t("insights.case-studies.separators.apps.primary-cta")}
              <CdnIcon name="mdi:arrow-right" size={14} color="#f18f34" />
            </NextLink>
            <NextLink className="case-studies__separator-cta case-studies__separator-cta--subtle" href="/insights/open-source-radar">
              {t("insights.case-studies.separators.apps.secondary-cta")}
              <CdnIcon name="mdi:arrow-right" size={14} color="#f18f34" />
            </NextLink>
          </div>
        </section>
    </Section>
  );
};
