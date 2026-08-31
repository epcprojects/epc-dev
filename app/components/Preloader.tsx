/* eslint-disable prefer-const */
"use client";

import { useEffect, useState } from "react";

const MINIMUM_DURATION = 1000;
const MAXIMUM_DURATION = 15000;
const FADE_DURATION = 500;

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let exitTimer: number | undefined;
    let maximumTimer: number | undefined;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const minimumDelay = new Promise<void>(
      (resolve) => {
        window.setTimeout(resolve, MINIMUM_DURATION);
      },
    );

    const waitForWindowLoad = new Promise<void>(
      (resolve) => {
        if (document.readyState === "complete") {
          resolve();
          return;
        }

        window.addEventListener(
          "load",
          () => resolve(),
          { once: true },
        );
      },
    );

    const waitForImage = (
      image: HTMLImageElement,
    ): Promise<void> => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const finish = () => resolve();

        image.addEventListener("load", finish, {
          once: true,
        });

        // Failed image preloader ko block nahi karegi
        image.addEventListener("error", finish, {
          once: true,
        });
      });
    };

    const waitForVideo = (
      video: HTMLVideoElement,
    ): Promise<void> => {
      // HAVE_CURRENT_DATA
      if (video.readyState >= 2) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const finish = () => resolve();

        video.addEventListener(
          "loadeddata",
          finish,
          { once: true },
        );

        // Failed video preloader ko block nahi karegi
        video.addEventListener("error", finish, {
          once: true,
        });
      });
    };

    const waitForMountedMedia =
      new Promise<void>((resolve) => {
        // Underlying page ko mount hone ka time dein
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(async () => {
            const images = Array.from(
              document.querySelectorAll<HTMLImageElement>(
                "img",
              ),
            );

            const videos = Array.from(
              document.querySelectorAll<HTMLVideoElement>(
                "video",
              ),
            );

            await Promise.allSettled([
              ...images.map(waitForImage),
              ...videos.map(waitForVideo),
            ]);

            resolve();
          });
        });
      });

    const hidePreloader = () => {
      if (!isMounted) return;

      setIsLeaving(true);

      exitTimer = window.setTimeout(() => {
        if (!isMounted) return;

        setIsVisible(false);
        document.body.style.overflow =
          previousOverflow;
      }, FADE_DURATION);
    };

    Promise.all([
      minimumDelay,
      waitForWindowLoad,
      waitForMountedMedia,
    ]).then(hidePreloader);

    // Safety fallback
    maximumTimer = window.setTimeout(
      hidePreloader,
      MAXIMUM_DURATION,
    );

    return () => {
      isMounted = false;

      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }

      if (maximumTimer) {
        window.clearTimeout(maximumTimer);
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