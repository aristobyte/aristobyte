"use client";

import * as React from "react";
import "./Splash.scss";

export type SplashPropsType = {
  setIsReady: (v: boolean) => void;
  isReady: boolean;
  enabled: boolean;
};

export const Splash = ({ setIsReady, isReady, enabled }: SplashPropsType) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = React.useState<boolean | null>(null);
  const [isExiting, setIsExiting] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(true);

  React.useEffect(() => {
    if (!enabled) {
      setCanPlay(false);
      setIsReady(true);
      return;
    }

    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem("ab_splash_seen");
    if (seen) {
      setCanPlay(false);
      setIsReady(true);
      return;
    }
    setCanPlay(true);
  }, [enabled, setIsReady]);

  React.useEffect(() => {
    if (!enabled) return;
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
  }, [enabled, setIsReady, canPlay]);

  React.useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("splash-lock");
      return;
    }

    document.body.classList.toggle("splash-lock", !isReady);
    return () => {
      document.body.classList.remove("splash-lock");
    };
  }, [enabled, isReady]);

  React.useEffect(() => {
    if (!isReady) {
      setIsExiting(false);
      setIsMounted(true);
      return;
    }

    setIsExiting(true);
    const timeoutId = window.setTimeout(() => {
      setIsMounted(false);
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [isReady]);

  React.useEffect(() => {
    if (!enabled) return;
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
  }, [enabled, setIsReady]);

  if (canPlay === null) {
    return null;
  }

  if (!enabled || !canPlay || !isMounted) {
    return null;
  }

  return (
    <div className={`splash ${isExiting ? "splash--exit" : ""}`}>
      <video
        ref={videoRef}
        className="splash__video"
        src="/videos/splash.mp4"
        muted
        playsInline
        preload="auto"
        autoPlay
      />
    </div>
  );
};
