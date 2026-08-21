import Image, { type StaticImageData } from "next/image";

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
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/2 ${className}`}
    >
      <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-white/4">
        <div className="relative flex h-11.5 w-11.5 items-center justify-center overflow-hidden rounded-full bg-black">
          <div className="pointer-events-none absolute -top-1.5 h-3 w-3 rounded-full bg-[#8353D5] blur-[6px]" />

          <Image
            src={src}
            alt={alt}
            
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformLogo;