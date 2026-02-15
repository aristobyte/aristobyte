"use client";

import * as React from "react";

import "./Gradient.scss";

export type GradientPropsType = {
  id?: string;
  preventMotionAnimation?: boolean;
};

export const Gradient = ({
  id = "standard",
  preventMotionAnimation = false,
}: GradientPropsType) => {
  const classes = `gradient ${id
    .split(" ")
    .map((c) => `gradient--${c}`)
    .join(" ")} ${preventMotionAnimation ? "gradient--motion-disabled" : "gradient--motion-enabled"}`;

  return <div className={classes} />;
};
