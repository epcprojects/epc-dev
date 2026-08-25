"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";

import { Images } from "../ui";
import { ArrowUpIcon } from "@/public/icons";
import ThemeButton from "./button/ThemeButton";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const updateHeaderHeight = () => {
      const headerHeight =
        header.getBoundingClientRect().height;

      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`,
      );
    };

    updateHeaderHeight();

    const resizeObserver =
      new ResizeObserver(updateHeaderHeight);

    resizeObserver.observe(header);

    window.addEventListener(
      "resize",
      updateHeaderHeight,
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        updateHeaderHeight,
      );

      document.documentElement.style.removeProperty(
        "--header-height",
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`
        sticky top-0 z-50
      
        ${
          isScrolled
            ? "border-b border-white/12 bg-mirage bg-[url('/images/HeroBgGradient.png')] bg-size-[100%_auto] bg-position-[center_top] bg-no-repeat py-7"
            : "border-b border-transparent pt-4 md:pt-7"
        }
      `}
    >
      <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:gap-0 xl:px-8">
        <Image
          src={Images.landingImages.Logo}
          alt="Endpoint clients logo"
        />

        <ThemeButton
          label="Get a Free Consultation"
          variant="gradient"
          icon={<ArrowUpIcon />}
          onClick={() => {}}
        />
      </div>
    </header>
  );
};

export default Header;