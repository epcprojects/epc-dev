"use client";

import { useEffect, useRef } from "react";

type ParticleImageProps = {
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  brightness: number;
  hoverScale: number;
  hoverAmount: number;
};

export default function ParticleImage({
  className = "",
}: ParticleImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (!canvasElement) return;

    const canvas = canvasElement;

    const canvasContext = canvas.getContext("2d", {
      alpha: true,
    });

    if (!canvasContext) return;

    const context = canvasContext;
    const sourceImage = new window.Image();

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let particles: Particle[] = [];

    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
      radius: 85,
    };

    const config = {
      desktopParticles: 30000,
      mobileParticles: 38000,
      spring: 0.06,
      friction: 0.84,
      particleMin: 0.25,
      particleMax: 1.15,
    };

    function resizeCanvas() {
      const bounds = canvas.getBoundingClientRect();

      width = bounds.width;
      height = bounds.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (sourceImage.complete && sourceImage.naturalWidth) {
        buildParticles();
      }
    }
function buildParticles() {
  if (!width || !height) return;

  const offscreenCanvas =
    document.createElement("canvas");

  const offscreenContext =
    offscreenCanvas.getContext("2d", {
      willReadFrequently: true,
    });

  if (!offscreenContext) return;

  const mobile = width < 700;

  const targetCount = mobile
    ? config.mobileParticles
    : config.desktopParticles;

  const sourceRatio =
    width / sourceImage.naturalWidth;

  const drawWidth = Math.max(
    1,
    Math.floor(width),
  );

  const drawHeight = Math.max(
    1,
    Math.floor(
      sourceImage.naturalHeight * sourceRatio,
    ),
  );

  offscreenCanvas.width = drawWidth;
  offscreenCanvas.height = drawHeight;

  offscreenContext.clearRect(
    0,
    0,
    drawWidth,
    drawHeight,
  );

  offscreenContext.drawImage(
    sourceImage,
    0,
    0,
    drawWidth,
    drawHeight,
  );

  const pixels = offscreenContext.getImageData(
    0,
    0,
    drawWidth,
    drawHeight,
  ).data;

  const candidates: Array<{
    x: number;
    y: number;
    luminance: number;
  }> = [];

  let minX = drawWidth;
  let maxX = 0;
  let minY = drawHeight;
  let maxY = 0;

  for (let y = 0; y < drawHeight; y += 1) {
    for (let x = 0; x < drawWidth; x += 1) {
      const index =
        (y * drawWidth + x) * 4;

      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const alpha = pixels[index + 3];

      const luminance =
        (red + green + blue) / 3;

      const density = Math.min(
        1,
        Math.max(
          0,
          (luminance - 95) / 150,
        ),
      );

      if (
        alpha > 30 &&
        luminance > 115 &&
        Math.random() < density
      ) {
        candidates.push({
          x,
          y,
          luminance,
        });

        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (!candidates.length) {
    particles = [];
    return;
  }

  const contentWidth = Math.max(
    1,
    maxX - minX,
  );

  const contentHeight = Math.max(
    1,
    maxY - minY,
  );

  /*
   * Minimum 16px spacing on every side.
   */
  const canvasPadding = 2;

  const availableWidth = Math.max(
    1,
    width - canvasPadding * 2,
  );

  const availableHeight = Math.max(
    1,
    height - canvasPadding * 2,
  );

  const scaleX =
    availableWidth / contentWidth;

  const scaleY =
    availableHeight / contentHeight;

  /*
   * Contain behavior:
   * complete figure canvas ke andar rahegi.
   */
  const contentScale = Math.min(
    scaleX,
    scaleY,
  );

  const scaledContentWidth =
    contentWidth * contentScale;

  const scaledContentHeight =
    contentHeight * contentScale;

  const offsetX =
    canvasPadding +
    (availableWidth - scaledContentWidth) / 2;

  const offsetY =
    canvasPadding +
    (availableHeight - scaledContentHeight) / 2;

  const step = Math.max(
    1,
    Math.floor(
      candidates.length / targetCount,
    ),
  );

  const nextParticles: Particle[] = [];

  for (
    let index = 0;
    index < candidates.length;
    index += step
  ) {
    const candidate = candidates[index];

    const targetX =
      offsetX +
      (candidate.x - minX) * contentScale;

    const targetY =
      offsetY +
      (candidate.y - minY) * contentScale;

    nextParticles.push({
      // Start directly at final position.
      x: targetX,
      y: targetY,
      tx: targetX,
      ty: targetY,
      vx: 0,
      vy: 0,

      size:
        config.particleMin +
        Math.random() *
          (config.particleMax -
            config.particleMin),

      phase:
        Math.random() * Math.PI * 2,

      brightness:
        0.38 +
        (candidate.luminance / 255) *
          0.62,

      hoverScale: 1,
      hoverAmount: 0,
    });

    if (
      nextParticles.length >= targetCount
    ) {
      break;
    }
  }

  particles = nextParticles;
}

    function getPointerPosition(
      event: PointerEvent,
    ) {
      const bounds =
        canvas.getBoundingClientRect();

      return {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
    }

    function handlePointerMove(
      event: PointerEvent,
    ) {
      const position =
        getPointerPosition(event);

      pointer.x = position.x;
      pointer.y = position.y;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function handlePointerDown(
      event: PointerEvent,
    ) {
      const position =
        getPointerPosition(event);

      for (const particle of particles) {
        const dx =
          particle.x - position.x;

        const dy =
          particle.y - position.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy) || 1;

        if (distance < 220) {
          const force =
            (1 - distance / 220) * 5;

          particle.vx +=
            (dx / distance) * force;

          particle.vy +=
            (dy / distance) * force;
        }
      }
    }

    function animate(time: number) {
      context.clearRect(
        0,
        0,
        width,
        height,
      );

      context.globalCompositeOperation =
        "lighter";

      const currentTime = time * 0.001;

      for (const particle of particles) {
        const wobbleX =
          Math.sin(
            currentTime * 0.9 +
              particle.phase,
          ) * 0.8;

        const wobbleY =
          Math.cos(
            currentTime * 0.75 +
              particle.phase * 1.3,
          ) * 0.8;

        const targetX =
          particle.tx + wobbleX;

        const targetY =
          particle.ty + wobbleY;

        particle.vx +=
          (targetX - particle.x) *
          config.spring;

        particle.vy +=
          (targetY - particle.y) *
          config.spring;

        let hoverTarget = 0;
        let targetHoverScale = 1;

        if (pointer.active) {
          const dx =
            particle.x - pointer.x;

          const dy =
            particle.y - pointer.y;

          const distanceSquared =
            dx * dx + dy * dy;

          const radiusSquared =
            pointer.radius * pointer.radius;

          if (
            distanceSquared < radiusSquared &&
            distanceSquared > 0.1
          ) {
            const distance =
              Math.sqrt(distanceSquared);

            const influence =
              1 -
              distance / pointer.radius;

            const bubbleLift =
              Math.sin(
                influence * Math.PI,
              ) * 9;

            particle.vx +=
              (dx / distance) *
              bubbleLift *
              0.045;

            particle.vy +=
              (dy / distance) *
              bubbleLift *
              0.045;

            targetHoverScale =
              1 + influence * 1.8;

            hoverTarget = Math.min(
              1,
              influence * 1.45,
            );
          }
        }

        particle.hoverScale +=
          (targetHoverScale -
            particle.hoverScale) *
          0.28;

        particle.hoverAmount +=
          (hoverTarget -
            particle.hoverAmount) *
          (hoverTarget >
          particle.hoverAmount
            ? 0.42
            : 0.34);

        particle.vx *= config.friction;
        particle.vy *= config.friction;

        particle.x += particle.vx;
        particle.y += particle.vy;

        const shimmer =
          0.65 +
          Math.sin(
            currentTime * 3.2 +
              particle.phase,
          ) *
            0.25;

        const baseAlpha =
          particle.brightness * shimmer;

        const hoverCompensation = Math.pow(
          particle.hoverScale,
          0.85,
        );

        const alpha = Math.max(
          0.12,
          Math.min(
            0.78,
            baseAlpha /
              hoverCompensation,
          ),
        );

        const particleRadius =
          particle.size *
          (0.9 +
            Math.sin(
              currentTime * 2.1 +
                particle.phase,
            ) *
              0.18) *
          particle.hoverScale;

        const purpleMix = Math.max(
          0,
          Math.min(
            1,
            particle.hoverAmount,
          ),
        );

        const red = Math.round(
          255 +
            (160 - 255) * purpleMix,
        );

        const green = Math.round(
          255 +
            (78 - 255) * purpleMix,
        );

        const blue = 255;

        context.beginPath();

        context.fillStyle =
          `rgba(${red}, ${green}, ${blue}, ${alpha})`;

        context.arc(
          particle.x,
          particle.y,
          Math.max(
            0.35,
            particleRadius,
          ),
          0,
          Math.PI * 2,
        );

        context.fill();
      }

      context.globalCompositeOperation =
        "source-over";

      animationFrame =
        requestAnimationFrame(animate);
    }

    const resizeObserver =
      new ResizeObserver(resizeCanvas);

    sourceImage.onload = () => {
      resizeCanvas();

      cancelAnimationFrame(animationFrame);

      animationFrame =
        requestAnimationFrame(animate);
    };

    
   sourceImage.src = "/images/ParticleHeroImage.png";

    resizeObserver.observe(canvas);

    canvas.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    canvas.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    canvas.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();

      canvas.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      canvas.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );

      canvas.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      sourceImage.onload = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive particle image"
     className={`block max-w-60 md:min-w-50 2xl:min-w-105 w-full md:max-w-none aspect-1084/1451  bg-transparent ${className}`}
    />
  );
}