import type { Metadata } from "next";
import HomeClient from "./components/ClientComponent/HomeClient";


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://epc-dev.vercel.app/";

const ogImagePath =
  "/images/OgImage.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Empower Your Business",

  description:
    "We combine product design expertise with full-cycle software engineering to build web platforms, mobile apps, SaaS products and AI-powered solutions that are intuitive to use  and ready to grow with your business.",

  alternates: {
    canonical: "/",
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

    title:
      "Endpoint Clients | Global Product Development Agency",

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
      "Empower Your Business",

    description:
      "We combine product design expertise with full-cycle software engineering to build web platforms, mobile apps, SaaS products and AI-powered solutions that are intuitive to use  and ready to grow with your business.",

    images: [ogImagePath],
  },
};

export default function HomePage() {
  return <HomeClient />;
}