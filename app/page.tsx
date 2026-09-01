import type { Metadata } from "next";
import HomeClient from "./components/ClientComponent/HomeClient";
import HeroSection from "./components/sections/HeroSection";
import PartnersSection from "./components/sections/PartnersSection";
import ProductExpertiseSection from "./components/sections/ProductExpertiseSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import FullCycleDevelopmentSection from "./components/sections/FullCycleDevelopmentSection";
import StatsSection from "./components/sections/StatsSection";
import IndustrySection from "./components/sections/IndustrySection";
import DevelopmentProcessHomeSection from "./components/sections/DevelopmentProcessHomeSection";
import ProductBentoSection from "./components/sections/ProductBentoSection";
import TestimonialsHomeSection from "./components/sections/TestimonialsHomeSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import TechnologyStackSection from "./components/sections/TechnologyStackSection";
import FAQSection from "./components/sections/FAQSection";
import ReadyProjectSection from "./components/sections/ReadyProjectSection";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://endpointclients.dev/";

const ogImagePath = "/images/OgImage.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Endpoint Clients | AI-Powered Product Development  Services",

  description:
    "Endpoint Clients is a product development company building scalable digital products through strategy, UX design, software development, AI, and modern technology.",

  alternates: {
    canonical: "https://endpointclients.dev/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Endpoint Clients",

    title: "Endpoint Clients | Global Product Development Agency",

    description:
      "We design and engineer custom web, mobile, SaaS and AI-powered products that help businesses grow.",

    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Endpoint Clients global product development agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Product Design & Development Agency | 15+ Years Experience | Endpoint Clients",

    description:
      "Build and scale digital products with Endpoint Clients. Get UI/UX design, custom software, web, mobile, SaaS, AI development, APIs and product engineering.",

    images: [ogImagePath],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ProductExpertiseSection />
      <CapabilitiesSection />
      <FullCycleDevelopmentSection />
      <StatsSection />
      <IndustrySection />
      <DevelopmentProcessHomeSection />
      <ProductBentoSection />
      <TestimonialsHomeSection />
      <WhyChooseUsSection />
      <TechnologyStackSection />
      <FAQSection />
      <ReadyProjectSection />
    </>
  );
}
