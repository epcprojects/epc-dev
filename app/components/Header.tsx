"use client";
import React from "react";
import Image from "next/image";
import { Images } from "../ui";
import { ArrowUpIcon } from "@/public/icons";
import ThemeButton from "./button/ThemeButton";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 pt-4  md:pt-10.5 container max-w-7xl mx-auto px-4 xl:px-8 flex flex-col md:flex-row justify-between md:gap-0 gap-4 items-start md:items-center">
      <Image src={Images.landingImages.Logo} alt={"Endpoint clients logo"} />
      <ThemeButton
        variant="gradient"
        icon={<ArrowUpIcon />}
        onClick={() => {
        }}
      >
        Get a Free Consultation
      </ThemeButton>
    </header>
  );
};

export default Header;
