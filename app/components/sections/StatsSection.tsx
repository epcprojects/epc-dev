import CountUpNumber from "../CountUpNumber";
import ResponsiveStatsIcon from "../cards/ResponsiveStatsIcon";
import StatsCard from "../cards/StatsCard";

const StatsSection = () => {
  return (
    <section className="bg-mirage border-y border-y-white/18">
      <div className="container max-w-7xl mx-auto px-0 2xl:px-8 flex flex-col  2xl:flex-row">
        <StatsCard
          icon={
            <ResponsiveStatsIcon icon="happy-clients" />
          }
          title={
            <CountUpNumber
              end={1200}
              suffix="+"
            />
          }
          subtitle="Happy Clients"
        />

        <StatsCard
          icon={
            <ResponsiveStatsIcon icon="our-clients" />
          }
          title={
            <CountUpNumber
              end={500}
              suffix="M+"
            />
          }
          subtitle="Raised by our Clients"
          minwidthClass="xl:min-w-[330px]"
        />

        <StatsCard
          icon={
            <ResponsiveStatsIcon icon="countries-served" />
          }
          title={
            <CountUpNumber
              end={50}
              suffix="+"
            />
          }
          subtitle="Countries Served"
        />

        <StatsCard
          icon={
            <ResponsiveStatsIcon icon="top-rated-projects" />
          }
          title={
            <CountUpNumber
              end={500}
              suffix="+"
            />
          }
          subtitle="Top Rated Projects"
        />
      </div>
    </section>
  );
};

export default StatsSection;