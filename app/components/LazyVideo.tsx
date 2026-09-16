"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  className?: string;
  ariaLabel?: string;
};

export default function LazyVideo({
  src,
  className = "",
  ariaLabel,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Step 1: sirf visibility track karo (load + visible dono alag flags)
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldLoad(true); // pehli dafa true hone ke baad hamesha true rahega
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(videoElement);
    return () => observer.disconnect();
  }, []);

  // Step 2: jab bhi "visible" ya "loaded" state change ho, tab play/pause decide karo
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !shouldLoad) return;

    if (isVisible) {
      videoElement.play().catch(() => {
        // autoplay block ho jaye to silently ignore karo
      });
    } else {
      videoElement.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}