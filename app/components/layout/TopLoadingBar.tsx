"use client";

import { useEffect, useState } from "react";

const MAXIMUM_WAIT = 5000;
const HIDE_DELAY = 350;

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let finished = false;
    let completedAssets = 0;
    let hideTimer: number | undefined;

    const cleanupFunctions: Array<() => void> = [];

    const finish = () => {
      if (finished) return;

      finished = true;
      setProgress(100);

      hideTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, HIDE_DELAY);
    };

    // Fake progress: maximum 80% tak
   const progressTimer = window.setInterval(() => {
  setProgress((currentProgress) => {
    if (currentProgress >= 80) {
      return currentProgress;
    }

    const increment =
      currentProgress < 35
        ? 2
        : currentProgress < 60
          ? 1
          : 0.25;

    return Math.min(
      currentProgress + increment,
      80,
    );
  });
}, 300);

    const maximumTimer = window.setTimeout(
      finish,
      MAXIMUM_WAIT,
    );

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const assets = Array.from(
          document.querySelectorAll<
            HTMLImageElement | HTMLVideoElement
          >("[data-page-preload]"),
        );

        if (assets.length === 0) {
          if (document.readyState === "complete") {
            finish();
          } else {
            window.addEventListener(
              "load",
              finish,
              { once: true },
            );

            cleanupFunctions.push(() => {
              window.removeEventListener(
                "load",
                finish,
              );
            });
          }

          return;
        }

        const markComplete = () => {
          completedAssets += 1;

          const assetProgress =
            10 +
            (completedAssets / assets.length) *
              85;

          setProgress((currentProgress) =>
            Math.max(
              currentProgress,
              Math.min(assetProgress, 95),
            ),
          );

          if (
            completedAssets >= assets.length
          ) {
            finish();
          }
        };

        assets.forEach((asset) => {
          if (asset instanceof HTMLImageElement) {
            if (
              asset.complete &&
              asset.naturalWidth > 0
            ) {
              markComplete();
              return;
            }

            const handleImageComplete = () => {
              markComplete();
            };

            asset.addEventListener(
              "load",
              handleImageComplete,
              { once: true },
            );

            asset.addEventListener(
              "error",
              handleImageComplete,
              { once: true },
            );

            cleanupFunctions.push(() => {
              asset.removeEventListener(
                "load",
                handleImageComplete,
              );

              asset.removeEventListener(
                "error",
                handleImageComplete,
              );
            });

            return;
          }

          // Video check
          if (asset.readyState >= 2) {
            markComplete();
            return;
          }

          const handleVideoComplete = () => {
            markComplete();
          };

          asset.addEventListener(
            "loadeddata",
            handleVideoComplete,
            { once: true },
          );

          asset.addEventListener(
            "error",
            handleVideoComplete,
            { once: true },
          );

          cleanupFunctions.push(() => {
            asset.removeEventListener(
              "loadeddata",
              handleVideoComplete,
            );

            asset.removeEventListener(
              "error",
              handleVideoComplete,
            );
          });
        });
      });
    });

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(maximumTimer);

      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }

      cleanupFunctions.forEach((cleanup) => {
        cleanup();
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="progressbar"
      aria-label="Page loading"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
     className="
  pointer-events-none fixed
  top-0 right-0 left-0 z-9999
  hidden h-1 overflow-hidden
  bg-white/5 md:block
"
    >
      <div
        className="
          relative h-full
          bg-linear-to-r
          from-[#7F41E9]
          via-[#A062F5]
          to-[#C9A4FB]
          shadow-[0_0_12px_2px_#8353D5]
          transition-[width]
          duration-700 ease-out
        "
        style={{
          width: `${progress}%`,
        }}
      >
        <div
          className="
            absolute top-1/2 right-0
            h-3 w-10
            -translate-y-1/2
            rounded-full bg-white/70
            blur-[8px]
          "
        />
      </div>
    </div>
  );
};

export default TopLoadingBar;