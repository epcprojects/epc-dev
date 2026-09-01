"use client";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../ui";
import {
  footerBadgeLinks,
  footerLocations,
  footerMenuColumns,
  footerSocialLinks,
} from "../constants/footerConstants";
import { FooterLocationCard } from "./cards/FooterLocationCard";
import GradientBorderButton from "./button/GradientBorderButton";
import PlatformLogo from "./PlatformLogo";
import ThemeButton from "./button/ThemeButton";
import { MouseEvent } from "react";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden  pt-8! md:pt-16! pb-6! md:pb-8! bg-[#191919]">
        <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
  >
    <div className="footer-aurora footer-aurora-purple" />
    <div className="footer-aurora footer-aurora-blue" />
    <div className="footer-aurora footer-aurora-pink" />

    <div className="absolute inset-0 bg-[#191919]/25" />
  </div>
      {/* <Image
        alt="logo epc"
        src={images.footerimages.FooterBg}
        fill
        className="object-cover object-center -z-10 "
      /> */}
      <div className="container max-w-330 mx-auto px-4! lg:px-8! flex flex-col gap-6 lg:gap-8 relative z-10">
        <div className="flex flex-col sm:gap-10 gap-6">
          {/* footer  top content */}
          <div className="grid lg:grid-cols-2 sm:gap-10 gap-8">
            <div className="flex flex-col  items-start sm:w-148 w-88 gap-10!">
              <div className="flex flex-col items-start! gap-6 max-w-173.25!">
                <div className="flex flex-col gap-2">
                  <span className=" text-2xl sm:text-3xl md:text-[34px]! text-start! font-manrope font-medium! text-gray-50!">
                    Have a project in mind?
                  </span>
                  <p className="font-manrope font-normal text-base text-gray-50!">
                    Let’s talk about your goals and create something great
                    together.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {/* {footerBadgeLinks.map((badge) => (
                  <div key={badge.alt} className="relative group">
                    <Link href={badge.href} target="_blank" rel="noreferrer">
                      <Image
                        alt={badge.alt}
                        src={badge.image}
                        width={40}
                        height={40}
                        className={`${badge.className} transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 border-[5px] border-white/11 rounded-full`}
                      />
                    </Link>

                    <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 hidden -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100! md:block">
                      <div className="relative rounded-md bg-black px-3 py-2 text-xs! text-white shadow-lg whitespace-nowrap">
                        {badge.tooltip}
                        <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                ))} */}
                  <PlatformLogo
                    src={Images.landingImages.UpworkLogoImage}
                    alt="Upwork logo"
                    href="https://www.upwork.com/agencies/1735503164466835456/"
                  />

                  <PlatformLogo
                    src={Images.landingImages.FiverrLogoImage}
                    alt="Fiverr logo"
                    href="https://pro.fiverr.com/freelancers/templateplanet"
                  />

                  <PlatformLogo
                    src={Images.landingImages.ClutchLogoImage}
                    alt="Clutch logo"
                    href="https://clutch.co/profile/endpoint-clients"
                  />

                  <PlatformLogo
                    src={Images.landingImages.TechBehemothsLogoImage}
                    alt="TechBehemoths logo"
                    href="https://techbehemoths.com/company/endpoint-clients-ui-ux-design-agency"
                  />
                </div>
              </div>
              {/* button */}
              {/* <div className=" lg:w-auto! ">
             
              <Link href="/contact">  <button className="bg-[#191919] py-2.5! md:py-[12px]! md:py-[16px]! px-[16px]! md:px-[24px]! rounded-[12px]! border border-amber-300">Contact Us</button></Link>
            
            </div> */}
              <ThemeButton
                label="Contact Us"
                onClick={() => {
                  window.open(
                    "https://calendly.com/endpointclients/30min",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              />
              {/* <GradientBorderButton /> */}
            </div>

            {/* links */}
            <div className="flex flex-wrap gap-10 xl:gap-30 xl:justify-between">
              {footerMenuColumns.map((column) => (
                <div
                  key={column.title}
                  className="flex flex-col sm:gap-6 gap-5 "
                >
                  <h4 className="text-[17px]! font-semibold! uppercase text-white">
                    {column.title}
                  </h4>

                  <div className="flex flex-col gap-3">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={link.target}
                        // className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
                        className="relative w-fit text-[14px]! font-manrope! font-normal! text-gray-300! transition-colors duration-400 hover:text-white! after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10" />

          {/* footer mid content */}
          <div className="flex lg:flex-row flex-col gap-10 lg:gap-20">
            {/* contact  */}
            <div className="flex flex-col sm:gap-11 gap-6  ">
              <div className="flex flex-col sm:gap-3 gap-2">
                <p className="font-manrope font-normal text-sm sm:text-base text-gray-50">
                  Email us
                </p>
                <p>
                  <a
                    href="mailto:info@endpointclients.com"
                    className="font-manrope font-normal text-2xl sm:text-[28px] text-gray-50 hover:text-gray-300 transition-colors relative
                  duration-400  after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                  >
                    info@endpointclients.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:gap-3 gap-2">
                <p className="font-manrope font-normal text-sm sm:text-base text-gray-50">
                  Send a Message
                </p>
                <a
                  href="https://wa.me/447598981921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center gap-3"
                >
                  <Image
                    src={Images.footerimages.WatsappIcon}
                    alt="whatsapp icon"
                    className="w-7 h-7"
                  />
                  <span
                    className="font-manrope font-normal text-2xl sm:text-[28px] text-gray-50 hover:text-gray-300 transition-colors relative
                  duration-400  after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                  >
                    +44 7598 981921
                  </span>
                  
                </a>
              </div>
            </div>
            {/* address */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-10 ">
              {footerLocations.map((location) => (
                <FooterLocationCard
                  key={location.country}
                  country={location.country}
                  address={location.address}
                  phone={location.phone}
                  phoneHref={location.phoneHref}
                  FlagIcon={location.flag}
                />
              ))}
            </div>
          </div>

          <div className="border border-white/10" />
        </div>

        {/* footer bottom content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-0 gap-4! px-0!">
          <p className="text-[16px]! text-center md:text-start font-normal! text-white!">
            © {new Date().getFullYear()} Endpoint Clients | All Rights Reserved.
          </p>
          <div className="flex flex-row md:justify-start justify-center gap-4.25!">
            {footerSocialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="w-8! h-8! flex items-center justify-center"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:-mb-18 md:-mb-10 -mb-12">
          <div  className="">
            <Image
              alt="logo epc"
              src={Images.footerimages.FooterLogo}
              className="md:h-84! h-30! w-auto"
            />
          </div>
        </div>
      </div>

      {/* <div
        className="
    absolute
    -bottom-40
      -right-32
    w-[799.93px]
    h-[520.28px]
    rotate-[-14.59deg]
    bg-[#6927DA80]
    blur-[150px]
    pointer-events-none
  "
      /> */}
    </footer>
  );
}
