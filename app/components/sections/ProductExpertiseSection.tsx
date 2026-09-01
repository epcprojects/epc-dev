import PulsingLabel from "../PulsingLabel";
import DesktopExpertisePills from "./DesktopExpertisePills";
import MobileExpertisePills from "./MobileExpertisePills";

const ProductExpertiseSection = () => {
  return (
    <section className="bg-mirage py-8 xl:py-24">
      <div className="container max-w-7xl mx-auto py-4 md:py-16 px-4 md:px-8 overflow-visible">
        <div className="grid grid-cols-1 gap-8 overflow-visible xl:grid-cols-14 xl:-translate-x-3 xl:gap-3 2xl:translate-x-0">
          <DesktopExpertisePills side="left" />

          <div
            className="
      order-1 flex flex-col items-center gap-4
      xl:order-2 xl:col-span-8
    "
          >
            <PulsingLabel text="Product Development Expertise" />

            <h3 className="text-center  text-2xl leading-[120%] text-white xl:text-5xl">
              We Design and Engineer{" "}
              <span className="font-playfair">
                Digital Products
              </span>{" "}
              across Web, Mobile, SaaS and AI from the User Experience to the
              Technology behind it.
            </h3>
          </div>

          <DesktopExpertisePills side="right" />

          <MobileExpertisePills />
        </div>
      </div>
    </section>
  );
};

export default ProductExpertiseSection;