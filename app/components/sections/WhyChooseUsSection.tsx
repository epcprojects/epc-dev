import {
  AlertIcon,
  CheckmarkIcon,
} from "@/public/icons";

import CalendlyThemeButton from "../button/CalendlyThemeButton";
import ComparisonCard from "../cards/ComparisonCard";
import FeatureRow from "../cards/FeatureRow";
import ResponsiveComparisonIcon from "../cards/ResponsiveComparisonIcon";
import PulsingLabel from "../PulsingLabel";

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

const WhyChooseUsSection = () => {
  return (
    <section className="bg-mirage pt-8 md:pt-24 pb-8 space-y-13.5" >
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

            <CalendlyThemeButton label="Start a Project" />
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
                      {features.map(
                        (feature, index) => {
                          const isLastItem =
                            index ===
                            features.length - 1;

                          return (
                            <FeatureRow
                              key={feature}
                              label={feature}
                              showBorder={!isLastItem}
                            />
                          );
                        },
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-span-4 flex">
                  <ComparisonCard
                    title="Traditional Agencies"
                    titleIcon={
                      <ResponsiveComparisonIcon icon="traditional" />
                    }
                    features={
                      traditionalAgencyFeatures
                    }
                    className="h-full w-full"
                  />
                </div>

                <div className="col-span-4 flex">
                  <ComparisonCard
                    title="Endpointclients"
                    titleIcon={
                      <ResponsiveComparisonIcon icon="endpoint" />
                    }
                    features={epcFeatures}
                    className="h-full w-full"
                    showGlow
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <div className="overflow-hidden ">
              <video
                src="/videos/DevMapVideoLatest.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Development map animation"
              />
            </div>
    </section>
  );
};

export default WhyChooseUsSection;