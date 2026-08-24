import {
  BahrainFlagIcon,
  FacebookFooterIcon,
  InstagramFooterIcon,
  LinkedinFooterIcon,
  LondonFlagIcon,
  PakFlagIcon,
  XFooterIcon,
  YoutubeFooterIcon,
} from "@/public/icons";
import { Images } from "../ui";


export const footerBadgeLinks = [
  {
    href: "https://www.upwork.com/agencies/1735503164466835456/",
    alt: "Upwork",
    image: Images.footerimages.FooterUpwork,
    tooltip: "Top Rated Plus",
    className: "w-10! h-10!",
  },
  {
    href: "https://pro.fiverr.com/freelancers/templateplanet",
    alt: "Fiverr",
    image: Images.footerimages.FiverrFooterLogo,
    tooltip: "Pro Seller Agency",
    className: "w-10! h-10!",
  },
  {
    href: "https://clutch.co/profile/endpoint-clients",
    alt: "clutch",
    image: Images.footerimages.FooterClutch,
    tooltip: "Leading Design Agency",
    className: "w-10! h-10! rounded-full",
  },
  {
    href: "https://techbehemoths.com/company/endpoint-clients-ui-ux-design-agency",
    alt: "techbehemoths",
    image: Images.footerimages.FooterTechLogo,
    tooltip: "Leading Design Agency",
    className: "w-10! h-10! rounded-full",
  },
];

export const footerSocialLinks = [
  {
    href: "https://www.facebook.com/endpointclients",
    icon: FacebookFooterIcon,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/endpointclients/",
    icon: InstagramFooterIcon,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@EndPointClients.",
    icon: YoutubeFooterIcon,
    label: "Youtube",
  },
  {
    href: "https://x.com/Endpointclients",
    icon: XFooterIcon,
    label: "X",
  },
  {
    href: "https://www.linkedin.com/company/endpoint-clients/",
    icon: LinkedinFooterIcon,
    label: "Linkedin",
  },
];

type FooterMenuLink = {
  label: string;
  href: string;
  target?: "_blank";
};

type FooterMenuColumn = {
  title: string;
  links: FooterMenuLink[];
};

export const footerMenuColumns: FooterMenuColumn[] = [
  {
    title: "Quick Link",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Services",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
      {
        label: "About Us",
        href: "https://endpointclients.com/about-us",
        target: "_blank",
      },
       {
        label: "Testimonials",
        href: "https://endpointclients.com/testimonials",
        target: "_blank",
      },
      {
        label: "Contact Us",
        href: "https://endpointclients.com/contact",
        target: "_blank",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "UI/UX Design",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
      {
        label: "Web & Mobile App",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
      {
        label: "Dashboard",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
      {
        label: "Ai & ML Development",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
       {
        label: "Dashboard Design",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
       {
        label: "MVP Development",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
      {
        label: "Branding",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
      {
        label: "SEO & Social Media Marketing",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },{
        label: "Motion Design & Video Editing",
        href: "https://endpointclients.com/services",
        target: "_blank",
      },
    ],
  },
  {
    title: "Review",
    links: [
      {
        label: "Clutch",
        href: "https://clutch.co/profile/endpoint-clients",
        target: "_blank",
      },
      {
        label: "Techbehmoths",
        href: "https://techbehemoths.com/company/endpoint-clients-ui-ux-design-agency",
        target: "_blank",
      },
      {
        label: "Techreviewer",
        href: "https://techreviewer.co/companies/endpoint-clients-ltd",
        target: "_blank",
      },
      {
        label: "Designrush",
        href: " https://www.designrush.com/agency/profile/endpoint-clients",
        target: "_blank",
      },
      {
        label: "Goodfirms",
        href: "https://www.goodfirms.co/company/endpoint-clients-ltd",
        target: "_blank",
      },
      {
        label: "Trustpilot",
        href: "https://www.trustpilot.com/review/endpointclients.com",
        target: "_blank",
      },
    ],
  },
];


export const footerLocations = [
  {
    country: "Pakistan",
    flag: PakFlagIcon,
    address: "New City Phase 2, Block F, Street 6B, Wah Cantt, Pakistan",
    phone: "+92 333 5586757",
    phoneHref: "https://wa.me/923335586757",
  },
  {
    country: "Bahrain",
    flag: BahrainFlagIcon,
    address:
      "Flat No. 11, Building 1694, Road 968, Block 909, East Riffa, Southern Governorate, Bahrain",
    phone: "+973 3557 9427",
    phoneHref: "tel:+97335579427",
  },
  {
    country: "United Kingdom",
    flag: LondonFlagIcon,
    address:
      "71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom",
    phone: "+44 7598 981921",
    phoneHref: "https://wa.me/447598981921",
  },
];

