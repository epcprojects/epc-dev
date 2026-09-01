import PulsingLabel from "../PulsingLabel";

const IndustrySection = () => {
  return (
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
            className=" rounded-[20px]"
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
  );
};

export default IndustrySection;