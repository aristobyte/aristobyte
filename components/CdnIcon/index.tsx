import * as React from "react";

export type CdnIconProps = {
  name: string;
  size?: number;
  className?: string;
  title?: string;
};

const BASE_URL = "https://api.iconify.design";

export const CdnIcon = ({
  name,
  size = 20,
  className,
  title,
}: CdnIconProps) => (
  <img
    className={className}
    src={`${BASE_URL}/${name}.svg`}
    width={size}
    height={size}
    alt={title ?? name}
    loading="lazy"
    decoding="async"
  />
);
