"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import Image from "next/image";

import { Images } from "../ui";
import { ArrowUpIcon } from "@/public/icons";
import ThemeButton from "./button/ThemeButton";
import { useRouter } from "next/navigation";
import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const updateHeaderHeight = () => {
      const headerHeight = header.getBoundingClientRect().height;

      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`,
      );
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);

    resizeObserver.observe(header);

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", updateHeaderHeight);

      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);
  const isMobile = useIsMobile();
  return (
    <header
      ref={headerRef}
      className={`
        sticky top-0 z-50
      
        ${
          isScrolled
            ? "border-b border-white/12 bg-mirage bg-[url('/images/HeroBgGradient.png')] bg-size-[100%_auto] bg-position-[center_top] bg-no-repeat py-4 md:py-7"
            : "border-b border-transparent py-4 md:py-7"
        }
      `}
    >
      <div className="container mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-4 px-4 md:flex-row md:items-center md:gap-0 xl:px-8">
        <Link
          href="/"
          onClick={(event) => {
            if (window.location.pathname === "/") {
              event.preventDefault();

              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <Image
            src={Images.landingImages.Logo}
            alt="Endpoint clients logo"
            className="h-auto w-30 xl:h-auto xl:w-auto"
          />
        </Link>

        <ThemeButton
          label="Book a Call"
          variant="gradient"
          icon={<ArrowUpIcon />}
          onClick={() => {
            window.open(
              "https://calendly.com/endpointclients/30min",
              "_blank",
              "noopener,noreferrer",
            );
          }}
        />
      </div>
    </header>
  );
};

export default Header;
