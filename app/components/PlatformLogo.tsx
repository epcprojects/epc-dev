import Image, {
  type StaticImageData,
} from "next/image";

type PlatformLogoProps = {
  src: StaticImageData | string;
  alt: string;
  className?: string;
};

const PlatformLogo = ({
  src,
  alt,
  className = "",
}: PlatformLogoProps) => {
  return (
    <div
      className={`platform-logo-float group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/2 md:h-16 md:w-16 ${className}`}
    >
      <div className="platform-logo-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/4 transition-transform duration-300 group-hover:scale-105 md:h-13.5 md:w-13.5">
        <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black md:h-11.5 md:w-11.5">
          <div className="platform-logo-glow pointer-events-none absolute -top-1.5 h-3 w-3 rounded-full bg-[#8353D5] blur-[6px]" />

          <Image
            src={src}
            alt={alt}
            className="platform-logo-image relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110 md:h-auto md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformLogo;