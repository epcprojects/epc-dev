/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const PRELOADER_DURATION = 3200;
const FADE_DURATION = 500;

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const startExit = () => {
      setIsLeaving(true);

      exitTimer = window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow =
          previousOverflow;
      }, FADE_DURATION);
    };

    let exitTimer: number | undefined;

    const displayTimer = window.setTimeout(
      startExit,
      PRELOADER_DURATION,
    );

    return () => {
      window.clearTimeout(displayTimer);

      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }

      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Website loading"
      className={`
        fixed inset-0 z-9999
        flex items-center justify-center
        bg-mirage
        transition-all duration-500 ease-out
        ${
          isLeaving
            ? "pointer-events-none scale-105 opacity-0"
            : "scale-100 opacity-100"
        }
      `}
    >
      <img
        src="/images/PreLoaderEPC.svg"
        alt=""
        aria-hidden="true"
        className="h-40 w-auto sm:h-48 md:h-56"
      />

      <span className="sr-only">
        Loading website
      </span>
    </div>
  );
};

export default Preloader;