"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Splash.scss";

export type SplashPropsType = {
  setIsReady: (v: boolean) => void;
  isReady: boolean;
};

export const Splash = ({ setIsReady, isReady }: SplashPropsType) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem("ab_splash_seen");
    if (seen) {
      setCanPlay(false);
      setIsReady(true);
      return;
    }
    setCanPlay(true);
  }, [setIsReady]);

  React.useEffect(() => {
    const { current: video } = videoRef;
    if (!video || !canPlay) return;

    video.play().catch(() => setIsReady(true));

    const handleEnd = () => {
      window.sessionStorage.setItem("ab_splash_seen", "1");
      setIsReady(true);
    };
    const handleError = () => {
      window.sessionStorage.setItem("ab_splash_seen", "1");
      setIsReady(true);
    };
    video.addEventListener("ended", handleEnd);
    video.addEventListener("error", handleError);
    return () => {
      video.removeEventListener("ended", handleEnd);
      video.removeEventListener("error", handleError);
    };
  }, [setIsReady, canPlay]);

  React.useEffect(() => {
    document.body.style.overflow = isReady ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isReady]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.sessionStorage.setItem("ab_splash_seen", "1");
      setIsReady(true);
      return;
    }
    const timeoutId = window.setTimeout(() => {
      window.sessionStorage.setItem("ab_splash_seen", "1");
      setIsReady(true);
    }, 5000);
    return () => window.clearTimeout(timeoutId);
  }, [setIsReady]);

  if (canPlay === null) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isReady && canPlay && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <video
            ref={videoRef}
            className="splash__video"
            src="/videos/splash.mp4"
            muted
            playsInline
            preload="auto"
            autoPlay
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
