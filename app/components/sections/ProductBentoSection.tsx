const ProductBentoSection = () => {
  return (
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
  );
};

export default ProductBentoSection;