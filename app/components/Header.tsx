"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Images } from "../ui";
import { ArrowUpIcon } from "@/public/icons";
import ThemeButton from "./button/ThemeButton";
const Header = () => {
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
  return (
    <header
      className={`sticky top-0 z-50   
      ${
        isScrolled
          ? "bg-mirage border-b border-white/12 bg-[url('/images/HeroBgGradient.png')] bg-size-[100%_auto] bg-position-[center_top] bg-no-repeat py-7"
          : "border-b border-transparent pt-4  md:pt-10.5 "
      }
    
    `}
    >
      <div className="container max-w-7xl mx-auto  flex flex-col md:flex-row justify-between md:gap-0 gap-4 items-start md:items-center px-4 xl:px-8">
        <Image src={Images.landingImages.Logo} alt={"Endpoint clients logo"} />
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
