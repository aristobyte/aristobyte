"use client";

import * as React from "react";
import { Icons } from "@aristobyte-ui/utils";

import "./Slider.scss";

type SliderResponsiveType = {
  minWidth: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  gap?: number;
  peek?: number;
};

type SliderResolvedConfigType = {
  slidesToShow: number;
  slidesToScroll: number;
  gap: number;
  peek: number;
};

type SliderPropsType = {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  gap?: number;
  peek?: number;
  allowPartial?: boolean;
  responsive?: SliderResponsiveType[];
  infinite?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  dotMode?: "slide" | "page";
  draggable?: boolean;
  keyboard?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  transitionMs?: number;
  itemLabel?: string;
  labels?: {
    previous?: string;
    next?: string;
    goTo?: string;
  };
};

type SlidePropsType = {
  children: React.ReactNode;
  className?: string;
};

const DEFAULT_SLIDES_TO_SHOW = 1;
const DEFAULT_SLIDES_TO_SCROLL = 1;
const DEFAULT_GAP = 14;
const DEFAULT_TRANSITION_MS = 420;

export const Slide = ({ children, className }: SlidePropsType) => (
  <div className={`slider__slide-inner ${className ?? ""}`.trim()}>
    {children}
  </div>
);

export const Slider = ({
  children,
  className,
  title,
  slidesToShow = DEFAULT_SLIDES_TO_SHOW,
  slidesToScroll = DEFAULT_SLIDES_TO_SCROLL,
  gap = DEFAULT_GAP,
  peek = 0,
  allowPartial = false,
  responsive,
  infinite = true,
  showArrows = true,
  showDots = true,
  dotMode = "slide",
  draggable = true,
  keyboard = true,
  autoplay = false,
  autoplayInterval = 5200,
  pauseOnHover = true,
  transitionMs = DEFAULT_TRANSITION_MS,
  itemLabel = "",
  labels,
}: SliderPropsType) => {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState(0);

  const dragStartXRef = React.useRef(0);
  const dragStartTranslateRef = React.useRef(0);

  const slideNodes = React.useMemo(
    () => React.Children.toArray(children),
    [children],
  );
  const slideCount = slideNodes.length;

  const config = React.useMemo<SliderResolvedConfigType>(() => {
    const ordered = [...(responsive ?? [])].sort(
      (a, b) => a.minWidth - b.minWidth,
    );
    const currentWidth =
      windowWidth > 0
        ? windowWidth
        : typeof window !== "undefined"
          ? window.innerWidth
          : 0;

    let resolved: SliderResolvedConfigType = {
      slidesToShow,
      slidesToScroll,
      gap,
      peek,
    };

    if (currentWidth > 0) {
      ordered.forEach((item) => {
        if (currentWidth >= item.minWidth) {
          resolved = {
            slidesToShow: item.slidesToShow ?? resolved.slidesToShow,
            slidesToScroll: item.slidesToScroll ?? resolved.slidesToScroll,
            gap: item.gap ?? resolved.gap,
            peek: item.peek ?? resolved.peek,
          };
        }
      });
    }

    return {
      slidesToShow: Math.max(1, resolved.slidesToShow),
      slidesToScroll: Math.max(1, resolved.slidesToScroll),
      gap: Math.max(0, resolved.gap),
      peek: allowPartial ? Math.max(0, resolved.peek) : 0,
    };
  }, [
    allowPartial,
    responsive,
    slidesToShow,
    slidesToScroll,
    gap,
    peek,
    windowWidth,
  ]);

  const maxIndex = Math.max(0, slideCount - config.slidesToShow);
  const visibleWidth =
    viewportWidth > 0
      ? Math.max(0, viewportWidth - config.peek)
      : viewportWidth;
  const slideWidth =
    visibleWidth > 0
      ? (visibleWidth - config.gap * Math.max(0, config.slidesToShow - 1)) /
        config.slidesToShow
      : 0;
  const step = slideWidth + config.gap;

  const pagePositions = React.useMemo(() => {
    if (dotMode === "slide") {
      return Array.from({ length: slideCount }, (_, index) => index);
    }

    const positions: number[] = [0];
    let current = 0;
    while (current < maxIndex) {
      current = Math.min(current + config.slidesToScroll, maxIndex);
      if (positions[positions.length - 1] !== current) {
        positions.push(current);
      }
    }

    return positions;
  }, [config.slidesToScroll, dotMode, maxIndex, slideCount]);

  const pageCount = pagePositions.length;

  const activePageIndex = React.useMemo(() => {
    if (dotMode === "slide") return activeIndex;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    pagePositions.forEach((position, index) => {
      const distance = Math.abs(position - activeIndex);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });
    return nearest;
  }, [activeIndex, dotMode, pagePositions]);

  const goTo = React.useCallback(
    (nextIndex: number) => {
      if (slideCount === 0) return;

      if (infinite) {
        if (nextIndex < 0) {
          setActiveIndex(maxIndex);
          return;
        }
        if (nextIndex > maxIndex) {
          setActiveIndex(0);
          return;
        }
      }

      setActiveIndex(Math.max(0, Math.min(nextIndex, maxIndex)));
    },
    [slideCount, infinite, maxIndex],
  );

  const next = React.useCallback(() => {
    const hasNextPage = activePageIndex < pagePositions.length - 1;
    if (hasNextPage) {
      goTo(pagePositions[activePageIndex + 1] ?? maxIndex);
      return;
    }

    if (infinite) {
      goTo(0);
      return;
    }

    goTo(maxIndex);
  }, [activePageIndex, goTo, infinite, maxIndex, pagePositions]);

  const previous = React.useCallback(() => {
    const hasPreviousPage = activePageIndex > 0;
    if (hasPreviousPage) {
      goTo(pagePositions[activePageIndex - 1] ?? 0);
      return;
    }

    if (infinite) {
      goTo(maxIndex);
      return;
    }

    goTo(0);
  }, [activePageIndex, goTo, infinite, maxIndex, pagePositions]);

  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => {
      setViewportWidth(viewport.clientWidth);
      setWindowWidth(window.innerWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(viewport);
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  React.useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  React.useEffect(() => {
    if (!autoplay || slideCount <= config.slidesToShow) return;
    if (pauseOnHover && isHovering) return;
    if (isDragging) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        let currentPage = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        pagePositions.forEach((position, index) => {
          const distance = Math.abs(position - current);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            currentPage = index;
          }
        });

        const hasNextPage = currentPage < pagePositions.length - 1;
        if (hasNextPage) {
          return pagePositions[currentPage + 1] ?? maxIndex;
        }

        return infinite ? 0 : maxIndex;
      });
    }, autoplayInterval);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    autoplay,
    autoplayInterval,
    config.slidesToShow,
    infinite,
    isDragging,
    isHovering,
    maxIndex,
    pagePositions,
    pauseOnHover,
    slideCount,
  ]);

  const currentTranslate = -(activeIndex * step) + dragOffset;

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!draggable || slideCount <= 1) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragStartTranslateRef.current = currentTranslate;
    (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging) return;
    const delta = event.clientX - dragStartXRef.current;
    setDragOffset(delta);
  };

  const finishDrag = () => {
    if (!isDragging) return;
    const threshold = Math.max(40, slideWidth * 0.15);
    const moved = dragOffset;

    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(moved) < threshold) return;
    if (moved < 0) {
      next();
      return;
    }
    previous();
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging) return;
    (event.currentTarget as HTMLDivElement).releasePointerCapture(
      event.pointerId,
    );
    finishDrag();
  };

  const onPointerCancel: React.PointerEventHandler<HTMLDivElement> = () => {
    finishDrag();
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!keyboard) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
  };

  const onDotClick = (index: number) => {
    goTo(pagePositions[index] ?? 0);
  };

  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex >= maxIndex;
  const hideControls = slideCount <= config.slidesToShow;

  return (
    <section
      className={`slider ${className ?? ""}`.trim()}
      style={
        {
          "--slider-gap": `${config.gap}px`,
          "--slider-peek": `${config.peek}px`,
          "--slider-transition": `${transitionMs}ms`,
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {title && <div className="slider__title">{title}</div>}

      <div
        className="slider__viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onKeyDown={onKeyDown}
        tabIndex={keyboard ? 0 : -1}
      >
        <div
          className="slider__track"
          style={{
            transform: `translate3d(${currentTranslate}px, 0, 0)`,
            transitionDuration: isDragging ? "0ms" : `${transitionMs}ms`,
          }}
        >
          {slideNodes.map((slide, index) => (
            <div
              key={`${index}-slide`}
              className="slider__slide"
              style={{ width: slideWidth > 0 ? `${slideWidth}px` : undefined }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showDots && pageCount > 1 && (
        <div className="slider__dots" role="tablist">
          {Array.from({ length: pageCount }, (_, index) => {
            const dotActive = index === activePageIndex;

            return (
              <button
                key={`${index}-dot`}
                type="button"
                role="tab"
                className="slider__dot"
                data-active={dotActive}
                aria-label={`${labels?.goTo ?? ""} ${itemLabel} ${index + 1}`.trim()}
                onClick={() => onDotClick(index)}
              />
            );
          })}
        </div>
      )}

      {showArrows && (
        <div className="slider__top">
          <button
            className="slider__control"
            type="button"
            onClick={previous}
            disabled={hideControls || (!infinite && isAtStart)}
            aria-label={`${labels?.previous ?? ""} ${itemLabel}`.trim()}
          >
            <Icons.ArrowLeft size={18} />
          </button>
          <span className="slider__counter">
            {Math.min(activePageIndex + 1, pageCount)} / {pageCount}
          </span>
          <button
            className="slider__control"
            type="button"
            onClick={next}
            disabled={hideControls || (!infinite && isAtEnd)}
            aria-label={`${labels?.next ?? ""} ${itemLabel}`.trim()}
          >
            <Icons.ArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
};
