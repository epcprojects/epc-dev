"use client";
import { PulsingBorder } from "@paper-design/shaders-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import {
  AlertIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  CheckmarkIcon,
  CommandLineIcon,
  CountriesServedIcon,
  DatabaseIcon,
  EpcLogoIcon,
  FlashIcon,
  HappyClientsIcon,
  InvertedCommasIcon,
  OurClientsIcon,
  ReactIcon,
  SecurityCheckIcon,
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
import ProcessCard from "../cards/ProcessCard";
import DevelopmentProcessSection from "../sections/DevelopmentProcessSection";
import TestimonialsSection, {
  Testimonial,
} from "../sections/TestimonialSection";
import { MouseEvent, useEffect, useRef, useState } from "react";
import FeatureRow from "../cards/FeatureRow";
import ComparisonCard from "../cards/ComparisonCard";
import TechnologyPills from "../cards/TechnologyPills";
import {
  technologies,
  TechnologyFilter,
  technologyOptions,
} from "@/app/constants/technologyConstants";
import FAQAccordion, { FAQItem } from "../FaqAccordion";
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
    },
    {
      id: 2,
      title: "Custom Software Development",
      description:
        "We design and build tailored software solutions that fit your unique business needs. Our developers ensure scalability, security, and seamless integration with your existing systems.",
      video: "/videos/CapabilitiesVideo2.mp4",
    },
    {
      id: 3,
      title: "Web & SaaS Development",
      description:
        "We build responsive web applications and SaaS platforms with intuitive interfaces, reliable architecture and room to evolve as your product grows.",
      video: "/videos/CapabilitiesVideo3.mp4",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "We create polished mobile products for iOS, Android and cross-platform environments, connecting thoughtful UX with dependable engineering that converts.",
      video: "/videos/CapabilitiesVideo4.mp4",
    },
    {
      id: 5,
      title: "AI & ML Development",
      description:
        "We integrate AI into products and workflows through intelligent features, automation, AI assistants and custom solutions built around practical use cases.",
      video: "/videos/CapabilitiesVideo5.mp4",
    },
    {
      id: 6,
      title: "Cloud, APIs & Integrations",
      description:
        "We build the systems behind your product from APIs and databases to third-party integrations and backend architecture that keeps everything connected.",
      video: "/videos/CapabilitiesVideo6.mp4",
    },
  ];
  const capabilityCards = capabilities.map((capability) => (
    <article
      key={capability.id}
      className="flex h-screen flex-col justify-center gap-6 border-r border-white/12 px-12 py-8"
    >
      <video
        src={capability.video}
        className="h-auto w-full"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={capability.title}
      />

      <div className="flex flex-col gap-3.5">
        <p className="text-[34px] font-bold text-desert-storm">
          {capability.title}
        </p>

        <p className="text-xl text-white">{capability.description}</p>
      </div>
    </article>
  ));
  const processSteps = [
    {
      number: "/01",
      image: Images.landingImages.DiscoveryPlanningImage,
      imageAlt: "Discovery and planning",
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business and goals. In a collaborative session, we define requirements, outline project scope, and plan features.",
    },
    {
      number: "/02",
      image: Images.landingImages.CalendarImage,
      imageAlt: "Discovery & Planning",
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business and goals. In a collaborative session, we define requirements, outline project scope, and plan features",
    },
    {
      number: "/03",
      image: Images.landingImages.DesignPrototypingImage,
      imageAlt: "Design & Prototyping",
      title: "Design & Prototyping",
      description:
        "Next, we create wireframes or mockups to visualize the solution. You’ll see early designs and give feedback so the final product matches your vision",
    },
    {
      number: "/04",
      image: Images.landingImages.DevelopmentImage,
      imageAlt: "Development",
      title: "Development",
      description:
        "Our developers write the code and build the solution in short sprints. We continuously test the software for quality and performance, ensuring each part works before moving on.",
    },
    {
      number: "/05",
      image: Images.landingImages.TestingImage,
      imageAlt: "Testing",
      title: "Testing",
      description:
        "Cross-device testing, refinements and production handoff. We continuously test the software for quality and performance, ensuring each part works before moving on.",
    },
    {
      number: "/06",
      image: Images.landingImages.LaunchImage,
      imageAlt: "Launch & Support",
      title: "Launch & Support",
      description:
        "Once you’re happy with the product, we deploy it to your preferred platform. We provide documentation and training, and even after launch we offer ongoing maintenance to help your solution evolve as your business grows",
    },
  ];
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Endpoint is one of the most helpful website and mobile app design teams I’ve worked with. Clear communication, thoughtful execution and strong product thinking.",
      authorName: "Sienna Hewitt",
      authorDescription: "Sr. Manager Procurement",
      authorImage: Images.landingImages.TestimonialImage,
      authorImageAlt: "Sienna Hewitt",
    },
    {
      id: 2,
      text: "The team understood our product requirements quickly and transformed them into a polished experience that was easy for our customers to use.",
      authorName: "John Williams",
      authorDescription: "Product Director",
      authorImage: Images.landingImages.TestimonialImage,
      authorImageAlt: "John Williams",
    },
    {
      id: 3,
      text: "Their communication, design quality and technical understanding helped us move from an early idea to a reliable digital product.",
      authorName: "Emma Brown",
      authorDescription: "Chief Operating Officer",
      authorImage: Images.landingImages.TestimonialImage,
      authorImageAlt: "Emma Brown",
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
      question: "Can you work with our existing development team?",
      answer:
        "Yes. We can collaborate directly with your internal designers, developers and product stakeholders throughout the project.",
    },
    {
      question: "Do you only work with startups?",
      answer:
        "No. We work with startups, growing companies and established businesses across different industries.",
    },
    {
      question: "Can you redesign an existing product?",
      answer:
        "Yes. We can review your existing product, identify usability and technical issues and redesign the experience around your current goals.",
    },
    {
      question: "Do you build MVPs?",
      answer:
        "Yes. We help define, design and develop focused MVPs that validate the core product idea without unnecessary complexity.",
    },
  ];
  return (
    <>
      <section className="-mt-35 md:-mt-28 bg-[url('/images/HeroBgGradient.png')] bg-position-[center_top] bg-size-[100%_auto] bg-no-repeat pt-28 ">
        <div className="pt-15 md:pt-20 pb-10 md:pb-26.5 container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 xl:grid-cols-10 items-center gap-5">
          <div className="xl:col-span-7 flex flex-col gap-4 md:gap-7.5">
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
                      colors={["#8742ff", "#1a1a1a"]}
                      colorBack="#00000090"
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
                    <p
                      className="
    w-fit
    bg-[linear-gradient(90deg,#8740FF_0%,#FFFFFF_40%,#8740FF_100%)]
    bg-[length:200%_100%]
    bg-clip-text
    text-base md:text-lg
    text-transparent
    animate-text-gradient
  "
                    >
                      Global Product Development Agency
                    </p>
                  </div>
                </div>

                <h1 className="text-3xl md:text-66 font-semibold text-white leading-[120%] md:leading-21.5 tracking-[-1px]">
                  Empower Your Business with Custom Software & Web & App
                  Solutions
                </h1>
              </div>
              <p className="text-base md:text-xl text-white">
                We combine product design expertise with full-cycle software
                engineering to build web platforms, mobile apps, SaaS products
                and AI-powered solutions that are intuitive to use and ready to
                grow with your business.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-5">
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-xl md:text-30 text-lavendar-indigo font-bold">
                  15+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Years of Experience)
                </p>
              </div>
              <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0" />
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-xl md:text-30 text-gray-50 font-bold">
                  1.2k+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Projects Shipped)
                </p>
              </div>
              <div className="h-5 md:h-10 w-px shrink-0 bg-linear-to-b from-black/0 via-white to-black/0" />
              <div className="flex flex-row items-center gap-2 py-1">
                <p className="text-xl md:text-30 text-lavendar-indigo font-bold">
                  350+
                </p>
                <p className="text-xs md:text-sm text-gray-300">
                  (Brands Worldwide)
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3   w-full">
            <ParticleImage />
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden bg-dark-jungle-green py-2.5 relative"
        aria-label="Our partners"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage to-mirage/0" />
        <Marquee autoFill speed={70} pauseOnHover>
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="mr-7 flex  shrink-0 items-center">
              <Image src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-64 bg-linear-to-r from-mirage/0 to-mirage" />
      </section>
      <section className="py-8 md:py-24">
        <div className="container max-w-7xl mx-auto py-4 md:py-16 px-4 md:px-8 overflow-visible">
          <div className="grid grid-cols-1 xl:grid-cols-14 xl:gap-3 gap-8 xl:-translate-x-3 2xl:translate-x-0 overflow-visible">
            <motion.div
              className="relative xl:left-0 2xl:-left-20 xl:col-span-3 flex flex-col xl:items-start items-center justify-between gap-12 overflow-visible"
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
                  icon={<CommandLineIcon />}
                  borderColor="#E86127"
                  iconGradientFrom="#F16529"
                  iconGradientTo="#8B3A18"
                  rotation={9}
                />
              </motion.div>

              <motion.div className="w-fit" variants={leftPillVariants}>
                <ServicePill
                  title="Web Applications"
                  icon={<FlashIcon />}
                  borderColor="#30C65F"
                  iconGradientFrom="#31CD62"
                  iconGradientTo="#196731"
                  rotation={-2.5}
                />
              </motion.div>

              <motion.div className="w-fit md:mt-7" variants={leftPillVariants}>
                <ServicePill
                  title="SaaS Engineering"
                  icon={<WebDesignIcon />}
                  borderColor="#7F26DE"
                  iconGradientFrom="#8A29F1"
                  iconGradientTo="#4F188B"
                  rotation={7}
                />
              </motion.div>
            </motion.div>
            <div className="xl:col-span-8 flex flex-col gap-4 items-center ">
              <PulsingLabel text="What We Build" />
              <p className="text-2xl md:text-5xl font-playfair text-center text-white leading-[120%]">
                We design and engineer digital products across web, mobile, SaaS
                and AI from the user experience to the technology behind it.
              </p>
            </div>
            <motion.div
              className="relative xl:-right-5 2xl:-right-20 xl:col-span-3 flex flex-col items-center xl:items-end justify-between gap-12 overflow-visible"
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
                  icon={<UnilinkIcon />}
                  borderColor="#3C4CE4"
                  iconGradientFrom="#222E97"
                  iconGradientTo="#0B0F31"
                  rotation={-12}
                />
              </motion.div>

              <motion.div className="w-fit" variants={rightPillVariants}>
                <ServicePill
                  title="Frontend Engineering"
                  icon={<DatabaseIcon />}
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
                  icon={<SecurityCheckIcon />}
                  borderColor="#12C0AC"
                  iconGradientFrom="#13CCB6"
                  iconGradientTo="#09665B"
                  rotation={-7}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <HorizontalScrollSection
        leftContent={
          <div className="flex flex-col items-start gap-7">
            <div className="flex flex-col gap-4.5">
              <PulsingLabel text="Our Capabilities" />

              <p className="text-5xl font-bold leading-[100%] text-desert-storm">
                Built to take your product from bold idea to real-world software
              </p>
            </div>

            <ThemeButton
              label="Get a Free Consultation"
              variant="gradient"
              icon={<ArrowUpIcon />}
              onClick={() => {}}
            />
          </div>
        }
        items={capabilityCards}
      />
      <section className="bg-mirage px-4 py-8 md:px-16 md:py-16">
        <div
          className="
      relative overflow-hidden
      rounded-3xl bg-woodsmoke
      px-4 py-8
      md:rounded-[48px] md:px-24 md:py-24
    "
        >
          <div
            className="
        pointer-events-none absolute inset-0 z-0
        w-full
        md:inset-y-0 md:left-auto
        md:-right-40 md:w-[50%] brightness-[0.70]  md:brightness-100
      "
          >
            <ImageColumns />
          </div>
          <div
            className="
        pointer-events-none absolute inset-0 z-10
        bg-black/25
      "
          />
          <div
            className="
        relative z-20 flex max-w-200
        flex-col items-start
        gap-8 px-2 py-8
        md:gap-13 md:px-8 md:py-16
      "
          >
            <div className="flex flex-col items-start gap-3 md:gap-4">
              <PulsingLabel text="Full-cycle product team" />

              <p
                className="
            text-3xl font-semibold
            leading-[110%] text-gray-50
            md:text-5xl md:leading-normal
          "
              >
                Design, development and AI expertise under one roof.
              </p>
            </div>

            <ThemeButton
              label="Explore Our Services"
              variant="white"
              icon={<ArrowUpIcon fill="#030712" />}
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
      <section className="bg-mirage border-y border-y-white/18">
        <div className="container max-w-7xl mx-auto px-4 xl:px-8 flex flex-col md:flex-row">
          <StatsCard
            icon={<HappyClientsIcon />}
            title="1200+"
            subtitle="Happy Clients"
          />
          <StatsCard
            icon={<OurClientsIcon />}
            title="500M+"
            subtitle="Raised by our Clients"
          />
          <StatsCard
            icon={<CountriesServedIcon />}
            title="50+"
            subtitle="Countries Served"
          />
          <div className="p-9 flex flex-row gap-2 items-center justify-center">
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
          </div>
        </div>
      </section>
      <section className="bg-mirage pt-12 md:pt-24">
        <div className="container mx-auto max-w-7xl px-4 pt-8 md:px-8 md:pt-16">
          <div className="flex flex-col items-center gap-12 md:gap-30">
            <div className="grid w-full grid-cols-1 items-center gap-4 md:grid-cols-12 md:gap-3">
              <div className=" md:col-start-6 md:col-end-10">
                <PulsingLabel text="INDUSTRIES WE SERVE" />
              </div>
              <div className="md:col-start-3 md:col-end-12">
                <h2 className="md:text-center text-3xl leading-[105%] font-semibold text-white md:text-5xl md:leading-[100%]">
                  Digital products shaped around how your industry actually
                  works
                </h2>
              </div>
              <div className="md:col-span-full md:ml-6">
                <p className="md:text-center text-base leading-relaxed text-gray-100 md:text-xl">
                  Different industries bring different users, workflows,
                  regulations and operational challenges. We combine product
                  thinking, engineering and AI to build solutions around the
                  realities of your market.
                </p>
              </div>
            </div>

            <video
              src="/videos/IndustriesHighQuality.mp4"
              className="h-full"
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
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-8 space-y-4.5">
          <div className="grid grid-cols-12 gap-4.5 items-stretch">
            <div className="col-span-8 h-full">
              <div className="rounded-4xl h-full overflow-hidden grid grid-cols-2 items-center bg-rangoon-green py-4 pl-4 ring ring-inset ring-white-smoke/4 shadow-[inset_2px_4px_16px_0_rgba(248,248,248,0.06)]">
                <video
                  src="/videos/BentoCard1new.mp4"
                  className="h-auto w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Bento card animation"
                />
                <div className="px-4 flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-1.5">
                    <p className="w-fit bg-linear-to-r from-[#8353D5] to-white bg-clip-text text-xs text-transparent">
                      Better Digital Experiences
                    </p>
                    <p className="text-[32px] leading-[140%] font-bold text-center text-snow-drift/95">
                      Everything Your Product Needs To Grow.
                    </p>
                  </div>
                  <p className="text-sm text-snow-drift/70 text-center">
                    From intuitive interfaces to scalable technology, we bring
                    strategy, design, and development together to create digital
                    products that perform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
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
          <div className="grid grid-cols-3 gap-4.5 items-stretch">
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
            <video
              src="/videos/BentoCard4.mp4"
              className="h-auto w-full"
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
        </div>
      </section>
      <TestimonialsSection testimonials={testimonials} />
      <section className="bg-mirage pt-24 pb-8">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-13.5">
            <div className="flex flex-col gap-8 items-center">
              <div className=" w-full grid grid-cols-12 space-y-3">
                <div className="col-start-6 col-end-9">
                  <PulsingLabel text={"Why Endpoint Clients"} />
                </div>
                <div className="col-start-3 col-end-11 ">
                  <p className="text-5xl text-white font-semibold text-center">
                    One product team. Fewer handoffs. Better execution.
                  </p>
                </div>
                <div className="col-start-2 col-end-12 ">
                  <p className="text-xl text-gray-100 text-center">
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
                  "";
                }}
              />
            </div>
            <div className="flex flex-col gap-35">
              <div className="rounded-[48px] bg-dark-jungle-green border border-white/6 shadow-[0_0_150px_0_rgba(131,83,213,0.08)] p-4.5 grid grid-cols-11 gap-5">
                <div className="col-span-3">
                  <div className="flex flex-col">
                    <div className="p-6">
                      <p className="text-2xl font-semibold text-white">
                        What Matters
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
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
                <div className="col-span-4">
                  <ComparisonCard
                    title="Traditional Agencies"
                    titleIcon={<TraditionalIcon />}
                    features={traditionalAgencyFeatures}
                  />
                </div>
                <div className="col-span-4">
                  <ComparisonCard
                    title="Endpointclients"
                    titleIcon={<EpcLogoIcon />}
                    features={epcFeatures}
                    showGlow
                  />
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
        <div className="container max-w-7xl mx-auto pt-16  px-8">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-7 items-center">
              <div className="flex flex-col gap-3 items-center">
                <PulsingLabel text={"Technology Stack "} />
                <p className="text-5xl font-semibold text-white leading-[100%]">
                  The right technology for every layer of your product.
                </p>
              </div>
              <div className="relative flex flex-row rounded-full border border-white/8 bg-heavy-metal p-1.5">
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
            relative z-10 cursor-pointer whitespace-nowrap
            rounded-full px-5 py-2
            text-lg font-semibold
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
      <section className="bg-mirage py-24">
        <div className="container max-w-7xl mx-auto px-8 grid grid-cols-10 gap-12">
          <div className="col-span-4 flex flex-col gap-3 items-start">
            <PulsingLabel text={"FAQs"} />
            <h3 className="text-5xl font-semibold text-white leading-[130%]">
              Questions before we build?
            </h3>
          </div>
          <div className="col-span-6">
            <FAQAccordion faqs={faqItems} />
          </div>
        </div>
      </section>
      <section className="bg-mirage pb-20">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="bg-woodsmoke border border-white/12 py-16 px-25 rounded-4xl bg-[url('/images/ReadyProjectBgImage.png')] bg-cover bg-center relative overflow-hidden">
            <div className="flex flex-col gap-10.5 items-center">
              <div className="flex flex-col gap-3.5 items-center">
                <p className="text-[56px] font-semibold text-white leading-[120%]">
                  Ready to start your project?
                </p>
                <p className="text-2xl text-white text-center">
                  Whether you’re launching something new or improving an
                  existing platform.let’s build something great together.
                </p>
              </div>
              <ThemeButton
                label="Start Project"
                variant="gradient"
                icon={<ArrowUpIcon />}
                onClick={() => {}}
              />
            </div>
           <Image src={Images.landingImages.ReadyProjectBottomLineImage} alt={"bottom"} className="absolute bottom-0 left-1/2 -translate-x-1/2"/>
          </div>
        </div>
      </section>
    </>
  );
}
