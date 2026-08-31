"use client";
import { PulsingBorder } from "@paper-design/shaders-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  AlertIcon,
  ArrowUpIcon,
  CheckmarkIcon,
  CommandLineIcon,
  CountriesServedIcon,
  DatabaseIcon,
  EpcLogoIcon,
  FlashIcon,
  HappyClientsIcon,
  OurClientsIcon,
  SecurityCheckIcon,
  TopRatedProjectsIcon,
  TraditionalIcon,
  UnilinkIcon,
  WebDesignIcon,
} from "@/public/icons";

import { motion, type Variants } from "motion/react";
import { Images } from "@/app/ui";
import ParticleImage from "../ParticleImage";
import { partnerLogos } from "@/app/constants/constants";
import ServicePill from "../ServicePill";
import PulsingLabel from "../PulsingLabel";
import HorizontalScrollSection from "../HorizontalScrollSection";
import ThemeButton from "../button/ThemeButton";
import ImageColumns from "../ImageColumns";
import StatsCard from "../cards/StatsCard";
import PlatformLogo from "../PlatformLogo";
import DevelopmentProcessSection from "../sections/DevelopmentProcessSection";
import TestimonialsSection, {
  Testimonial,
} from "../sections/TestimonialSection";
import { useEffect, useRef, useState } from "react";
import FeatureRow from "../cards/FeatureRow";
import ComparisonCard from "../cards/ComparisonCard";
import TechnologyPills from "../cards/TechnologyPills";
import {
  technologies,
  TechnologyFilter,
  technologyOptions,
} from "@/app/constants/technologyConstants";
import FAQAccordion, { FAQItem } from "../FaqAccordion";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import CountUpNumber from "../CountUpNumber";
const pillGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const leftPillVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -140,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const rightPillVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 140,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

export default function HomeClient() {
  const capabilities = [
    {
      id: 1,
      title: "UI/UX & Product Design",
      description:
        "Research, flows, information architecture, wireframes, prototypes, high-fidelity UI and scalable design systems.",
      video: "/videos/CapabilitiesVideo1.mp4",
      pills: ["User Experience", "Prototype", "Web Design"],
    },
    {
      id: 2,
      title: "Custom Software Development",
      description:
        "We design and build tailored software solutions that fit your unique business needs. Our developers ensure scalability, security, and seamless integration with your existing systems.",
      video: "/videos/CapabilitiesVideo2.mp4",
      pills: ["Enterprise Software", "Web Applications", "Custom Solutions"],
    },
    {
      id: 3,
      title: "Web & SaaS Development",
      description:
        "We build responsive web applications and SaaS platforms with intuitive interfaces, reliable architecture and room to evolve as your product grows.",
      video: "/videos/CapabilitiesVideo3.mp4",
      pills: ["SaaS Platforms", "Cloud Applications", " Dashboard Development"],
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "We create polished mobile products for iOS, Android and cross-platform environments, connecting thoughtful UX with dependable engineering that converts.",
      video: "/videos/CapabilitiesVideo4.mp4",
      pills: ["iOS Apps", "Android Apps", "Cross Platform", "Mobile UI"],
    },
    {
      id: 5,
      title: "AI & ML Development",
      description:
        "We integrate AI into products and workflows through intelligent features, automation, AI assistants and custom solutions built around practical use cases.",
      video: "/videos/CapabilitiesVideo5.mp4",
      pills: [
        "AI Automation",
        "Machine Learning",
        "AI Assistants",
        "Data Solutions",
      ],
    },
    {
      id: 6,
      title: "Cloud, APIs & Integrations",
      description:
        "We build the systems behind your product from APIs and databases to third-party integrations and backend architecture that keeps everything connected.",
      video: "/videos/CapabilitiesVideo6.mp4",
      pills: ["Cloud Architecture", "API Integration", "Backend Development"],
    },
  ];
  // const capabilityCards = capabilities.map((capability) => (
  //   <article
  //     key={capability.id}
  //     className="flex items-center justify-center h-full  2xl:border-r 2xl:border-white/12 px-4 xl:px-12 py-8"
  //   >
  //     <div className="xl:container xl:max-w-200 xl:mx-auto flex flex-col gap-6 xl:gap-6">
  //                 <video
  //       src={capability.video}
  //       className="h-auto  w-full rounded-[42px]"
  //       autoPlay
  //       muted
  //       loop
  //       playsInline
  //       preload="metadata"
  //       aria-label={capability.title}
  //     />

  //     <div className="flex flex-col gap-3">
  //       <p className="text-xl xl:text-[34px] font-bold text-desert-storm">
  //         {capability.title}
  //       </p>

  //       <p className="text-base xl:text-xl text-white leading-[150%]">
  //         {capability.description}
  //       </p>
  //     </div>
  //     </div>

  //   </article>
  // ));
  const capabilityCards = capabilities.map((capability) => (
    <article
      key={capability.id}
      className="
      flex h-full items-center justify-center
      px-4 py-6 md:py-12
      2xl:border-r 2xl:border-white/12
      xl:px-12
    "
    >
      <div
        className="
        flex h-full  w-full flex-col
        gap-4 md:gap-6 justify-center
        xl:container xl:mx-auto xl:max-w-225
      "
      >
        <div className="min-h-0 flex-1">
          <video
            src={capability.video}
            className="
            h-full w-full object-contain
            xl:rounded-[42px]
          "
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={capability.title}
          />
        </div>

        <div className="flex shrink-0 flex-col gap-1.5 md:gap-3 px-4 md:px-8">
          <h3 className="text-lg font-bold text-desert-storm xl:text-[34px]">
            {capability.title}
          </h3>

          <p className="text-sm leading-[150%] text-neutral-400 xl:text-xl">
            {capability.description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {capability.pills.map((pill) => (
              <div
                key={pill}
                className="
                rounded-full bg-[#303030]
                px-3 py-2
                text-xs text-gray-50
                shadow-[0_0_10px_0_#00000014]
                md:px-4 md:py-2 md:text-sm
              "
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  ));
  const processSteps = [
    {
      number: "/01",
      image: Images.landingImages.DiscoveryPlanningImage,
      imageAlt: "Product Development Discovery and planning",
      title: "Product Discovery & Strategy",
      description:
        "We understand your goals, users, and requirements to define the right product scope, features, and roadmap.",
    },
    {
      number: "/02",
      image: Images.landingImages.CalendarImage,
      imageAlt: "Product Development Discovery & Planning",
      title: "Product Design & Prototyping",
      description:
        "We turn product ideas into intuitive experiences through UX research, user flows, wireframes, UI design, prototypes, and scalable design systems.",
    },
    {
      number: "/03",
      image: Images.landingImages.DesignPrototypingImage,
      imageAlt: "Product Development Design & Prototyping",
      title: "Product Development & Engineering",
      description:
        "We build scalable digital products with modern frontend, backend, mobile, API, cloud, and AI technologies aligned with your product requirements and growth goals.",
    },
    {
      number: "/04",
      image: Images.landingImages.DevelopmentImage,
      imageAlt: "Product Development Testing",
      title: "Testing & Quality Assurance ",
      description:
        "We validate every product through functional, usability, performance, and compatibility testing to deliver reliable software ready for real-world users.",
    },
    {
      number: "/05",
      image: Images.landingImages.TestingImage,
      imageAlt: "Product Development Launch & Deployment",
      title: "Launch & Deployment ",
      description:
        "We prepare your digital product for launch with production deployment, cloud infrastructure, integrations, security checks, and performance optimization. ",
    },
    {
      number: "/06",
      image: Images.landingImages.LaunchImage,
      imageAlt: "Product Development Support & Growth",
      title: "Product Support & Growth",
      description:
        "We continuously improve your product through maintenance, monitoring, performance optimization, new features, and technical support as your business grows.",
    },
  ];
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Endpoint is one of the most helpful website and mobile app design teams I’ve worked with. Clear communication, thoughtful execution and strong product thinking.",
      authorName: "Sienna Hewitt",
      authorDescription: "United States",
      authorImage: Images.landingImages.TestimonialImage,
      authorImageAlt: "Sienna Hewitt",
    },
    {
      id: 2,
      text: "It was great to work with Endpoint Clients, I needed something urgently to kick-off app development and within 24 hours I had a first good version which iterated on.",
      authorName: "Max Stoeckl",
      authorDescription: "France",
      authorImage: Images.landingImages.MaxstoImage,
      authorImageAlt: "Max Stoeckl",
    },

    {
      id: 3,
      text: "It has been outstanding working with the team at EndPoint Clients. The exception eye to detail and greater understanding has made our products exceptionally great.",
      authorName: "Muhunthan",
      authorDescription: "Sri Lanka",
      authorImage: Images.landingImages.MuhunImage,
      authorImageAlt: "Muhunthan",
    },
    {
      id: 4,
      text: "EndPoint is one of the most helpful website/mobile app design companies I worked with. A great team with fresh ideas, fair pricing, amazing designs and innovative thinking. Most of all very responsive, when working with Endpoint it is like having a second team on your side.",
      authorName: "Darrell Fertakos",
      authorDescription: "United States",
      authorImage: Images.landingImages.DarellImage,
      authorImageAlt: "Darrell Fertakos",
    },
    {
      id: 5,
      text: "I highly recommend Endpoint Clients for their outstanding commitment and performance. They not only fulfilled the assigned tasks but also consistently went above and beyond, proactively suggesting improvements throughout the project. Communication was clear and assertive, ensuring all details were precisely...",
      authorName: "Marco Gama",
      authorDescription: "Andorra",
      authorImage: Images.landingImages.MarcoGamaImage,
      authorImageAlt: "Marco Gama",
    },
  ];
  const features = [
    "Product Direction",
    "Design + Engineering",
    "Project Ownership",
    "Technical Growth",
    "Communication",
    "After Launch",
  ];
  const traditionalAgencyFeatures = [
    {
      label: "Often execution-focused",
      icon: <AlertIcon />,
    },
    {
      label: "Multiple disconnected teams",
      icon: <AlertIcon />,
    },
    {
      label: "Can become process-heavy",
      icon: <AlertIcon />,
    },
    {
      label: "Resources shared across projects",
      icon: <AlertIcon />,
    },
    {
      label: "Often handled separately",
      icon: <AlertIcon />,
    },
    {
      label: "Support based on contracts",
      icon: <AlertIcon />,
    },
  ];
  const epcFeatures = [
    {
      label: "Strategy, UX & development aligned",
      icon: <CheckmarkIcon />,
    },
    {
      label: "Designers and engineers work together",
      icon: <CheckmarkIcon />,
    },
    {
      label: "One team accountable end to end",
      icon: <CheckmarkIcon />,
    },
    {
      label: "Built with future growth in mind",
      icon: <CheckmarkIcon />,
    },
    {
      label: "Direct, collaborative workflow",
      icon: <CheckmarkIcon />,
    },
    {
      label: "Continuous improvement when needed",
      icon: <CheckmarkIcon />,
    },
  ];
  const [selectedTechnology, setSelectedTechnology] =
    useState<TechnologyFilter>("all");

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = technologyOptions.findIndex(
    (option) => option.value === selectedTechnology,
  );

  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });

  useEffect(() => {
    const activeButton = buttonRefs.current[activeIndex];

    if (!activeButton) return;

    const updateIndicator = () => {
      setIndicatorStyle({
        width: activeButton.offsetWidth,
        transform: `translateX(${activeButton.offsetLeft}px)`,
        opacity: 1,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);

    resizeObserver.observe(activeButton);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex]);

  const filteredTechnologies =
    selectedTechnology === "all"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === selectedTechnology,
        );
  const faqItems: FAQItem[] = [
    {
      question: "Do Endpoint Clients handle both design and development?",
      answer:
        "Yes. Our multidisciplinary team covers product strategy, UI/UX, front-end, back-end, mobile and AI development.",
    },
    {
      question: "How much does custom software development cost?",
      answer:
        "Costs depend on your scope, features, complexity, integrations, and timeline. We provide tailored project estimates.",
    },
    {
      question: "How long does product development take?",
      answer:
        "Timelines vary by project scope and complexity. We define clear milestones and delivery timelines during discovery.",
    },
    {
      question: "Can you redesign an existing website or app?",
      answer:
        "Yes. We improve existing products through UX research, UI/UX design, redesign, and development.",
    },
    {
      question: "Do you build MVPs for startups?",
      answer:
        "Yes. We help startups turn validated ideas into functional MVPs by combining product strategy, UX/UI design and software development.",
    },
  ];
  const isMobile = useIsMobile();
  return (
    <>
      <section className="-mt-13 md:-mt-28 bg-mirage bg-[url('/images/HeroBgGradient.png')] bg-position-[center_top] bg-size-[100%_auto] bg-no-repeat pt-5  md:pt-28 ">
        <div className="pt-15 xl:pt-20 pb-10 xl:pb-26.5 container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-10 items-center gap-5">
          <div className="md:col-span-7 flex flex-col gap-4 md:gap-7.5">
            <div className="flex flex-col gap-2 md:gap-4.5">
              <div className="flex flex-col gap-3">
                {/* <div className="w-fit rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px">
                <div className="rounded-lg bg-mirage px-3.5 py-1.5">
                  <p className="w-fit bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_30%)] bg-clip-text text-lg text-transparent">
                    Global Product Development Agency
                  </p>
                </div>
              </div> */}
                <div className="relative isolate w-fit overflow-hidden rounded-lg bg-[linear-gradient(90deg,#8740FF_0%,#66666600_60%)] p-px ">
                  <div className="pointer-events-none absolute inset-0 z-10">
                    <PulsingBorder
                      width="100%"
                      height="100%"
                      colors={["#8742ff", "#191919"]}
                      colorBack="#191919"
                      roundness={0.38}
                      thickness={0.04}
                      softness={0.75}
                      intensity={0.2}
                      bloom={0.25}
                      spots={1}
                      spotSize={0.5}
                      pulse={0.25}
                      smoke={0.3}
                      smokeSize={0.6}
                      speed={1}
                      scale={1}
                    />
                  </div>

                  <div className="relative z-20 rounded-[7px] bg-mirage px-3.5 py-1.5">
                    <h1
                      className="
    w-fit
    bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_40%,#8740FF_100%)]
    bg-[length:200%_100%]
    bg-clip-text
    text-sm xl:text-lg
    text-transparent
    animate-text-gradient
  "
                    >
                      Global Product Development Company
                    </h1>
                  </div>
                </div>

                <h2 className="text-[32px] xl:text-66 font-semibold text-white leading-[120%] xl:leading-21.5 tracking-[-1px]">
                  Empower Your Business with Custom Software , Web & App
                  Solutions
                </h2>
              </div>
              <h3 className="text-base text-white xl:text-xl">
                {isMobile
                  ? "We are full-cycle product development company  that combines Product design, Engineering and AI to Build experiences that are ready to scale."
                  : "Endpoint Clients is a full-cycle product development company combining UI/UX design, custom software engineering and AI to build web platforms, mobile apps, SaaS products and digital experiences that are ready to scale."}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 md:gap-5">
              <div className="flex flex-row items-center gap-1.5 py-1">
                <p className="text-2xl xl:text-30 text-lavendar-indigo font-bold">
                  15+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Years of Experience)
                </p>
              </div>
              <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0 hidden md:block" />
              <div className="flex flex-row items-center gap-1.5 py-1">
                <p className="text-2xl xl:text-30 text-gray-50 font-bold">
                  1.2k+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Projects Shipped)
                </p>
              </div>
              <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0 hidden md:block" />
              <div className="flex flex-row items-center gap-1.5 py-1">
                <p className="text-2xl xl:text-30 text-lavendar-indigo font-bold">
                  350+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Brands Worldwide)
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 hidden md:flex items-center justify-center  w-full">
            <ParticleImage />
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden bg-[#222222] py-1.5 md:py-2.5 relative"
        aria-label="Our partners"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage to-mirage/0" />
        <Marquee autoFill speed={50} pauseOnHover>
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="mr-7 flex  shrink-0 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="md:w-fit md:h-fit w-25 h-auto"
              />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage/0 to-mirage" />
      </section>
      <section className="bg-mirage py-8 xl:py-24">
        <div className="container max-w-7xl mx-auto py-4 md:py-16 px-4 md:px-8 overflow-visible">
          <div className="grid grid-cols-1 gap-8 overflow-visible xl:grid-cols-14 xl:-translate-x-3 xl:gap-3 2xl:translate-x-0">
            {/* Desktop left pills */}
            <motion.div
              className="
      relative hidden flex-col items-center justify-between
      gap-12 overflow-visible
      xl:order-1 xl:col-span-3 xl:left-0 xl:flex xl:items-start
      2xl:-left-20
    "
              variants={pillGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              <motion.div className="w-fit" variants={leftPillVariants}>
                <ServicePill
                  title="AI Solutions"
                  icon={
                    <CommandLineIcon
                      width={isMobile ? "24" : "33"}
                      height={isMobile ? "24" : "33"}
                    />
                  }
                  borderColor="#E86127"
                  iconGradientFrom="#F16529"
                  iconGradientTo="#8B3A18"
                  rotation={9}
                />
              </motion.div>

              <motion.div className="w-fit" variants={leftPillVariants}>
                <ServicePill
                  title="Web Applications"
                  icon={
                    <FlashIcon
                      width={isMobile ? "24" : "33"}
                      height={isMobile ? "24" : "33"}
                    />
                  }
                  borderColor="#30C65F"
                  iconGradientFrom="#31CD62"
                  iconGradientTo="#196731"
                  rotation={-2.5}
                />
              </motion.div>

              <motion.div className="w-fit md:mt-7" variants={leftPillVariants}>
                <ServicePill
                  title="SaaS Dashboards"
                  icon={
                    <WebDesignIcon
                      width={isMobile ? "24" : "33"}
                      height={isMobile ? "24" : "33"}
                    />
                  }
                  borderColor="#7F26DE"
                  iconGradientFrom="#8A29F1"
                  iconGradientTo="#4F188B"
                  rotation={7}
                />
              </motion.div>
            </motion.div>

            {/* Text: mobile aur desktop dono par */}
            <div
              className="
      order-1 flex flex-col items-center gap-4
      xl:order-2 xl:col-span-8
    "
            >
              <PulsingLabel text="Product Development Expertise" />

              <h3 className="text-center  text-2xl leading-[120%] text-white xl:text-5xl">
                We Design and Engineer{" "}
                <span className="font-playfair">Digital Products</span> across
                Web, Mobile, SaaS and AI from the User Experience to the
                Technology behind it.
              </h3>
            </div>

            {/* Desktop right pills */}
            <motion.div
              className="
      relative hidden flex-col items-center justify-between
      gap-12 overflow-visible
      xl:order-3 xl:col-span-3 xl:-right-5 xl:flex xl:items-end
      2xl:-right-20
    "
              variants={pillGroupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
            >
              <motion.div className="w-fit" variants={rightPillVariants}>
                <ServicePill
                  title="Backend & APIs"
                  icon={
                    <UnilinkIcon
                      width={isMobile ? "24" : "33"}
                      height={isMobile ? "24" : "33"}
                    />
                  }
                  borderColor="#3C4CE4"
                  iconGradientFrom="#222E97"
                  iconGradientTo="#0B0F31"
                  rotation={-12}
                />
              </motion.div>

              <motion.div className="w-fit" variants={rightPillVariants}>
                <ServicePill
                  title="Frontend Engineering"
                  icon={
                    <DatabaseIcon
                      width={isMobile ? "24" : "33"}
                      height={isMobile ? "24" : "33"}
                    />
                  }
                  borderColor="#06B4FF"
                  iconGradientFrom="#29B5F1"
                  iconGradientTo="#18688B"
                  rotation={3}
                />
              </motion.div>

              <motion.div
                className="w-fit md:mt-7"
                variants={rightPillVariants}
              >
                <ServicePill
                  title="Mobile App Development"
                  icon={
                    <SecurityCheckIcon
                      width={isMobile ? "24" : "33"}
                      height={isMobile ? "24" : "33"}
                    />
                  }
                  borderColor="#12C0AC"
                  iconGradientFrom="#13CCB6"
                  iconGradientTo="#09665B"
                  rotation={-7}
                />
              </motion.div>
            </motion.div>

            {/* Mobile/tablet pills: static, no entrance animation */}
            <div className="order-2 flex w-full flex-row items-stretch justify-between gap-3 overflow-visible xl:hidden">
              {/* Mobile left column */}
              <div
                className="
      relative flex min-w-0 flex-1
      flex-col items-start justify-between
      gap-8 overflow-visible
    "
              >
                <div className="w-fit">
                  <ServicePill
                    title="AI Solutions"
                    icon={<CommandLineIcon width="20" height="20" />}
                    borderColor="#E86127"
                    iconGradientFrom="#F16529"
                    iconGradientTo="#8B3A18"
                    rotation={9}
                  />
                </div>

                <div className="w-fit">
                  <ServicePill
                    title={isMobile ? "Web App" : "Web Applications"}
                    icon={<FlashIcon width="20" height="20" />}
                    borderColor="#30C65F"
                    iconGradientFrom="#31CD62"
                    iconGradientTo="#196731"
                    rotation={-2.5}
                  />
                </div>

                <div className="w-fit">
                  <ServicePill
                    title="SaaS Engineering"
                    icon={<WebDesignIcon width="20" height="20" />}
                    borderColor="#7F26DE"
                    iconGradientFrom="#8A29F1"
                    iconGradientTo="#4F188B"
                    rotation={7}
                  />
                </div>
              </div>

              {/* Mobile right column */}
              <div
                className="
      relative flex min-w-0 flex-1
      flex-col items-end justify-between
      gap-8 overflow-visible
    "
              >
                <div className="w-fit">
                  <ServicePill
                    title="Backend & APIs"
                    icon={<UnilinkIcon width="20" height="20" />}
                    borderColor="#3C4CE4"
                    iconGradientFrom="#222E97"
                    iconGradientTo="#0B0F31"
                    rotation={-12}
                  />
                </div>

                <div className="w-fit">
                  <ServicePill
                    title="Frontend Engineering"
                    icon={<DatabaseIcon width="20" height="20" />}
                    borderColor="#06B4FF"
                    iconGradientFrom="#29B5F1"
                    iconGradientTo="#18688B"
                    rotation={3}
                  />
                </div>

                <div className="w-fit">
                  <ServicePill
                    title={
                      isMobile ? "Mobile App Dev" : "Mobile App Development"
                    }
                    icon={<SecurityCheckIcon width="20" height="20" />}
                    borderColor="#12C0AC"
                    iconGradientFrom="#13CCB6"
                    iconGradientTo="#09665B"
                    rotation={-7}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HorizontalScrollSection
        leftContent={
          <div className="container max-w-175 mx-auto flex items-center justify-center ">
            <div className="flex flex-col items-start gap-7">
              <div className="flex flex-col gap-4 md:gap-4.5">
                <PulsingLabel text="Our Product Development Services" />

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-5xl font-bold leading-[130%] md:leading-[100%] text-desert-storm">
                    Built to take your product from bold idea to real-world
                    software
                  </h3>
                  <p className="text-xl text-white">
                    End-to-end digital solutions designed to help businesses
                    build, launch, and scale modern software products with
                    confidence.
                  </p>
                </div>
              </div>

              <ThemeButton
                label="Discuss Your Product With Experts"
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
          </div>
        }
        items={capabilityCards}
      />
      <section className="bg-mirage px-4 py-4 xl:px-16 md:py-16">
        <div
          className="
      relative overflow-hidden
      rounded-[18px] bg-woodsmoke
      px-1.5 py-4
      md:rounded-[48px] md:px-24 md:py-24
    "
        >
          <div
            className="
        pointer-events-none absolute inset-0 z-0
        w-full
        xl:inset-y-0 xl:left-auto
        xl:-right-40 xl:w-[50%] brightness-[0.70]  xl:brightness-100
      "
          >
            <ImageColumns />
          </div>
          <div
            className="
        pointer-events-none absolute inset-0 z-10
        md:bg-black/25 bg-black/60
      "
          />
          <div className="absolute top-0 left-140 h-full w-149 bg-[linear-gradient(251deg,rgba(21,21,21,0)_30.42%,#151515_55.36%)] hidden 2xl:block" />
          <div
            className="
        relative z-20 flex max-w-200
        flex-col items-start
        gap-4 px-2 py-8
        md:gap-13 md:px-8 md:py-16
      "
          >
            <div className="flex flex-col items-start gap-3 md:gap-4">
              <PulsingLabel text="Full-cycle Product Development" />

              <h3
                className="
            text-xl font-semibold
            leading-[130%] text-gray-50
            md:text-5xl md:leading-normal
          "
              >
                Design, development and AI expertise under one roof.
              </h3>
            </div>

            <ThemeButton
              label="Explore Our Design Services"
              variant="white"
              icon={<ArrowUpIcon fill="#030712" />}
              onClick={() => {
                window.open(
                  "https://endpointclients.com/services",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            />
          </div>
        </div>
      </section>
      <section className="bg-mirage border-y border-y-white/18">
        <div className="container max-w-7xl mx-auto px-0 2xl:px-8 flex flex-col  2xl:flex-row">
          <StatsCard
            icon={
              <HappyClientsIcon
                width={isMobile ? "30" : "68"}
                height={isMobile ? "30" : "68"}
              />
            }
            title={<CountUpNumber end={1200} suffix="+" />}
            subtitle="Happy Clients"
          />
          <StatsCard
            icon={
              <OurClientsIcon
                width={isMobile ? "30" : "68"}
                height={isMobile ? "30" : "68"}
              />
            }
            title={<CountUpNumber end={500} suffix="M+" />}
            subtitle="Raised by our Clients"
            minwidthClass="xl:min-w-[330px]"
          />
          <StatsCard
            icon={
              <CountriesServedIcon
                width={isMobile ? "30" : "68"}
                height={isMobile ? "30" : "68"}
              />
            }
            title={<CountUpNumber end={50} suffix="+" />}
            subtitle="Countries Served"
          />
          <StatsCard
            icon={
              <TopRatedProjectsIcon
                width={isMobile ? "30" : "68"}
                height={isMobile ? "30" : "68"}
              />
            }
            title={<CountUpNumber end={500} suffix="+" />}
            subtitle="Top Rated Projects"
          />
          {/* <div className="px-8 2xl:px-4 2xl:py-9 py-4 flex flex-row gap-1 md:gap-2 items-center justify-start md:justify-center">
            <PlatformLogo
              src={Images.landingImages.UpworkLogoImage}
              alt="Upwork logo"
            />
            <PlatformLogo
              src={Images.landingImages.FiverrLogoImage}
              alt="Fiverr logo"
            />
            <PlatformLogo
              src={Images.landingImages.ClutchLogoImage}
              alt="Clutch logo"
            />
            <PlatformLogo
              src={Images.landingImages.TechBehemothsLogoImage}
              alt="TechBehemoths logo"
            />
          </div> */}
        </div>
      </section>
      <section className="bg-mirage  md:pt-24 xl:pb-16">
        <div className="container mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-16">
          <div className="flex flex-col items-center gap-10 md:gap-20">
            <div className="grid w-full grid-cols-1 items-center gap-3 md:grid-cols-12 md:gap-4">
              <div className=" md:col-start-6 md:col-end-10">
                <PulsingLabel text="Product Development By Industry" />
              </div>
              <div className="md:col-start-3 md:col-end-12">
                <h3 className="md:text-center text-2xl leading-[130%] font-semibold text-white md:text-5xl md:leading-[120%]">
                  Digital Products Built Around Your Industry Needs
                </h3>
              </div>
              <div className="md:col-start-2 md:col-end-12 md:ml-10">
                <p className="md:text-center text-base leading-relaxed text-neutral-400 md:text-xl">
                  We build scalable digital products around your industry’s
                  unique users, workflows, and business needs with strategy, UX
                  design, software engineering, and AI.
                </p>
              </div>
            </div>
            <video
              src="/videos/IndustriesNewThree.mp4"
              className="h-full rounded-[20px]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Industries we serve"
            />
          </div>
        </div>
      </section>
      <DevelopmentProcessSection processSteps={processSteps} />
      <section className="bg-mirage py-8 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 space-y-3 md:space-y-4.5">
          <div className="block xl:hidden">
            <video
              src="/videos/BentoCard3.mp4"
              className="h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Bento card animation"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-4.5 items-stretch">
            <div className="lg:col-span-8 h-full">
              <div className="rounded-4xl h-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center bg-rangoon-green pb-5 pt-4 px-4 md:pl-4 ring ring-inset ring-white-smoke/4 shadow-[inset_2px_4px_16px_0_rgba(248,248,248,0.06)]">
                <video
                  src="/videos/BentoCard1New.mp4"
                  className="h-full w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Bento card animation"
                />
                <div className="xl:px-4 flex flex-col gap-3.5 md:gap-6">
                  <div className="flex flex-col items-center gap-1.5">
                    <h2 className="w-fit bg-linear-to-r from-[#8353D5] to-white bg-clip-text text-xs text-transparent">
                      Digital Experiences for Growing Products
                    </h2>
                    <h3 className="text-xl md:text-[32px] leading-[140%] font-bold text-center text-snow-drift/95">
                      Everything Your Product Needs To Grow.
                    </h3>
                  </div>
                  <p className="text-sm text-snow-drift/70 text-center">
                    From intuitive interfaces to scalable technology, we bring
                    strategy, design, and development together to create digital
                    products that perform.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden xl:block lg:col-span-4">
              <video
                src="/videos/BentoCard2.mp4"
                className="h-auto w-full"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Bento card animation"
              />
            </div>
          </div>
          <div className="hidden xl:grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-4.5 items-stretch">
            <video
              src="/videos/BentoCard3.mp4"
              className="h-auto w-full "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Bento card animation"
            />
            <video
              src="/videos/BentoCard4.mp4"
              className="h-auto w-full "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Bento card animation"
            />
            <video
              src="/videos/BentoCard5.mp4"
              className="h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Bento card animation"
            />
          </div>
          <div className="block xl:hidden">
            <video
              src="/videos/BentoCard5.mp4"
              className="h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Bento card animation"
            />
          </div>
        </div>
      </section>
      <TestimonialsSection testimonials={testimonials} />
      <section className="bg-mirage pt-8 md:pt-24 pb-8">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-6 md:gap-15.5">
            <div className="flex flex-col gap-8 md:gap-8 items-start md:items-center">
              <div className=" w-full grid md:grid-cols-12 space-y-3">
                <div className="md:col-start-6 md:col-end-9">
                  <PulsingLabel text={"Why Choose Us"} />
                </div>
                <div className="md:col-start-3 md:col-end-11 ">
                  <h3 className="text-2xl md:text-5xl text-white font-semibold md:text-center leading-[130%] xl:leading-[120%]">
                    One product team. Fewer handoffs. Better execution.
                  </h3>
                </div>
                <div className="md:col-start-3 md:col-end-11 ">
                  <p className="text-base md:text-xl text-neutral-400 md:text-center leading-[150%]">
                    We connect product thinking, design and engineering from day
                    one so decisions stay aligned from the first idea through
                    development, launch and growth.
                  </p>
                </div>
              </div>
              <ThemeButton
                label={"Start a Project"}
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
            <div className="flex flex-col gap-7 md:gap-35">
              <div className="w-full overflow-x-auto overscroll-x-contain">
                <div
                  className="
        grid min-w-250.5 grid-cols-11 gap-4
        rounded-3xl border border-white/6
        bg-dark-jungle-green p-3
        shadow-[0_0_150px_0_rgba(131,83,213,0.08)]
        md:gap-5 md:rounded-[48px] md:p-4.5
        lg:min-w-0 
      "
                >
                  <div className="col-span-3 flex">
                    <div className="flex flex-col w-full h-full">
                      <div className="px-2 py-3 md:px-6 md:py-6">
                        <p className="text-xl font-semibold text-white md:text-2xl">
                          What Matters
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 px-2 py-4 md:px-6 md:py-6">
                        {features.map((feature, index) => {
                          const isLastItem = index === features.length - 1;

                          return (
                            <FeatureRow
                              key={feature}
                              label={feature}
                              showBorder={!isLastItem}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4 flex">
                    <ComparisonCard
                      title="Traditional Agencies"
                      titleIcon={
                        <TraditionalIcon
                          width={isMobile ? "24" : "28"}
                          height={isMobile ? "24" : "28"}
                        />
                      }
                      features={traditionalAgencyFeatures}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="col-span-4 flex">
                    <ComparisonCard
                      title="Endpointclients"
                      titleIcon={
                        <EpcLogoIcon
                          width={isMobile ? "24" : "31"}
                          height={isMobile ? "24" : "31"}
                        />
                      }
                      features={epcFeatures}
                      className="h-full w-full"
                      showGlow
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden">
                <video
                  src="/videos/DevMapVideo.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Development map animation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-mirage">
        <div className="container max-w-7xl mx-auto pt-8 md:pt-16  px-4 md:px-8 xl:pb-8">
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="flex flex-col gap-6 md:gap-7 items-start md:items-center">
              <div className="flex flex-col gap-3 items-center">
                <PulsingLabel text={"Technology Stack "} />
                <h3 className="text-2xl md:text-5xl font-semibold text-white leading-[130%] md:leading-[100%] text-center">
                  Modern Technology for End-to-End{" "}
                  <br className="md:block hidden" />
                  Product Development
                </h3>
              </div>
              <div className="relative flex w-full max-w-full flex-row overflow-x-auto rounded-full border border-white/8 bg-heavy-metal p-1  md:p-1.5 [scrollbar-width:none] xl:w-fit [&::-webkit-scrollbar]:hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1.5 bottom-1.5 left-0 rounded-full bg-linear-to-b from-[#8740FF] to-[#512699] transition-all duration-300 ease-out"
                  style={{
                    width: indicatorStyle.width,
                    transform: indicatorStyle.transform,
                    opacity: indicatorStyle.opacity,
                  }}
                />

                {technologyOptions.map((option, index) => {
                  const isActive = selectedTechnology === option.value;

                  return (
                    <button
                      key={option.value}
                      ref={(element) => {
                        buttonRefs.current[index] = element;
                      }}
                      type="button"
                      onClick={() => {
                        setSelectedTechnology(option.value);
                      }}
                      className={`
          relative z-10 shrink-0 cursor-pointer whitespace-nowrap
          rounded-full px-4 md:px-5 py-1.5 md:py-2
          text-base md:text-lg font-semibold
          transition-colors duration-300
          ${isActive ? "text-white" : "text-white-smoke"}
        `}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <TechnologyPills
              key={selectedTechnology}
              items={filteredTechnologies}
            />
          </div>
        </div>
      </section>
      <section className="bg-mirage py-8 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12">
          <div className="md:col-span-4 flex flex-col gap-2 md:gap-3 items-start">
            <PulsingLabel text={"FAQs"} />
            <h3 className="text-2xl md:text-5xl font-semibold text-white leading-[130%] md:leading-[110%]">
              Questions before we build?
            </h3>
          </div>
          <div className="md:col-span-6">
            <FAQAccordion faqs={faqItems} />
          </div>
        </div>
      </section>
      <section className="bg-mirage pb-8 md:pb-20">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-woodsmoke border border-white/12 py-8 md:py-16 px-4 md:px-25 rounded-2xl md:rounded-4xl bg-[url('/images/ReadyProjectBgImage.png')] bg-cover bg-center relative overflow-hidden">
            <div className="flex flex-col gap-5 md:gap-10.5 items-center">
              <div className="flex flex-col gap-3 md:gap-3.5 items-center">
                <h2 className="text-2xl md:text-[56px] text-center font-semibold text-white leading-[130%] md:leading-[120%]">
                  Ready to start your project?
                </h2>
                <h3 className="text-base md:text-2xl text-neutral-400 text-center">
                  Whether you’re launching something new or improving an
                  existing platform.let’s build something great together.
                </h3>
              </div>
              <ThemeButton
                label="Let's Build Your Project"
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
            <Image
              src={Images.landingImages.ReadyProjectBottomLineImage}
              alt={"bottom"}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
