"use client";

import * as React from "react";
import { AnsiUp } from "ansi_up";
import { Icons } from "@aristobyte-ui/utils";
import { useTranslate } from "@/context";
import { CdnIcon } from "@/components";

import "./UICliGallery.scss";

export const UICliGallery = () => {
  const { t } = useTranslate();
  const ansiUp = React.useMemo(() => {
    const a = new AnsiUp();
    a.use_classes = false;
    return a;
  }, []);

  const [html, setHtml] = React.useState("");

  const normalizeAnsi = React.useCallback((input: string) => {
    return input
      .replaceAll("\\u001b", "\u001b")
      .replaceAll("\\x1b", "\u001b")
      .replaceAll("\\e", "\u001b");
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const res = await fetch("/cli.ansi", { cache: "no-store" });
      const text = await res.text();
      const normalized = normalizeAnsi(text);
      if (isMounted) {
        setHtml(ansiUp.ansi_to_html(normalized));
      }
    };

    load().catch((err) => {
      // eslint-disable-next-line no-console
      console.error("Failed to load ANSI file:", err);
      const esc = "\u001b";
      const fallback = `${esc}[31mERROR${esc}[0m ${esc}[90mfailed to load cli.ansi${esc}[0m\\n`;
      if (isMounted) {
        setHtml(ansiUp.ansi_to_html(fallback));
      }
    });

    return () => {
      isMounted = false;
    };
  }, [ansiUp, normalizeAnsi]);

  return (
    <section className="ui-cli">
      <div className="ui-cli__container">
        <div className="ui-cli__content">
          <span className="ui-cli__logo">
            <span className="ui-cli__logo-glyph">
              <Icons.AristoByteUICLI size={65} />
            </span>
          </span>
          <h2 className="ui-cli__title">{t("ui.cli.title")}</h2>
          <p className="ui-cli__description">{t("ui.cli.description")}</p>
        </div>
        <div className="ui-cli__actions">
          <a
            className="ui-cli__button"
            href="https://ui.aristobyte.com/get-started/aristobyte-ui-cli"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="mdi:book-open-variant" size={16} />
            <span>CLI Docs</span>
          </a>
          <a
            className="ui-cli__button"
            href="https://github.com/aristobyte-ui/aristobyte-ui/pkgs/npm/cli"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="mdi:package-variant" size={16} />
            <span>GH Package CLI</span>
          </a>
          <a
            className="ui-cli__button"
            href="https://github.com/aristobyte-ui/aristobyte-ui/tree/master/packages/cli"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="mdi:github" size={16} />
            <span>Source code</span>
          </a>
          <a
            className="ui-cli__button"
            href="https://www.npmjs.com/package/@aristobyte-ui/cli"
            target="_blank"
            rel="noreferrer"
          >
            <CdnIcon name="simple-icons:npm" size={16} />
            <span>NPM</span>
          </a>
        </div>
        <div className="ui-cli__terminal">
          <div className="ui-cli__terminal-header">
            <span className="ui-cli__terminal-dot ui-cli__terminal-dot--red" />
            <span className="ui-cli__terminal-dot ui-cli__terminal-dot--yellow" />
            <span className="ui-cli__terminal-dot ui-cli__terminal-dot--green" />
            <span className="ui-cli__terminal-title">bash</span>
            <span className="ui-cli__terminal-hint">Scroll to explore</span>
          </div>
          <pre
            className="ui-cli__terminal-body"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  );
};
