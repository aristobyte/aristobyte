"use client";

import * as React from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(children, document.body);
};
