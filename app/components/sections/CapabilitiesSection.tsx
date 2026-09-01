import { div } from "motion/react-client";
import HorizontalScrollSection from "../HorizontalScrollSection";
import PulsingLabel from "../PulsingLabel";
import CalendlyThemeButton from "../button/CalendlyThemeButton";
import CapabilityPills from "../cards/CapabilityPills";

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
      {/* <div className="min-h-0 flex-1">
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
            data-page-preload
            preload="metadata"
            aria-label={capability.title}
          />
        </div> */}
      <div className="flex  items-center justify-center overflow-hidden">
        <video
          src={capability.video}
          className="
      h-auto w-full object-contain
      2xl:max-h-[52svh]
      xl:rounded-[42px]
    "
          autoPlay
          muted
          loop
          playsInline
          data-page-preload
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

        {/* <div className="flex flex-wrap gap-2 md:gap-2.5">
          {capability.pills.map((pill) => (
            <div key={pill} className="p-px rounded-full bg-linear-to-r from-white/0 via-[#A6C8D0] to-[#4434F0]">
              <div
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
            </div>
          ))}
        </div> */}
        <CapabilityPills pills={capability.pills} />
      </div>
    </div>
  </article>
));

const CapabilitiesSection = () => {
  return (
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

            <CalendlyThemeButton label="Discuss Your Product With Experts" />
          </div>
        </div>
      }
      items={capabilityCards}
    />
  );
};

export default CapabilitiesSection;
