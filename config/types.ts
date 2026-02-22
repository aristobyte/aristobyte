import { Align, Title } from "./constants";

export type SectionHeadingTextType = {
  text: string;
  align?: Align;
};

export type SectionTitleType = SectionHeadingTextType & {
  as?: Title;
};

export type CommonLinkType = {
  label: string;
  href: string;
};

export type IdHrefType = {
  id: string;
  href: string;
};
