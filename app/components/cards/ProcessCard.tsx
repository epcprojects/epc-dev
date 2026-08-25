import Image, {
  type StaticImageData,
} from "next/image";

type ProcessCardProps = {
  number: string;
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
};

const ProcessCard = ({
  number,
  image,
  imageAlt,
  title,
  description,
  className = "",
}: ProcessCardProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-start gap-4 xl:flex-row xl:items-center xl:gap-12">
        <p className="text-3xl font-semibold text-white/18 md:text-4xl xl:min-w-60.75 xl:text-[64px]">
          {number}
        </p>

        <div className="flex w-full md:items-center md:justify-center xl:min-h-60 xl:w-auto xl:min-w-77.5">
          <Image
            src={image}
            alt={imageAlt}
            className="h-14 w-auto object-contain sm:h-36 xl:h-auto xl:w-auto"
          />
        </div>

        <div className="flex flex-col gap-2.5 xl:gap-4">
          <p className="text-2xl font-semibold text-white md:text-3xl xl:text-5xl">
            {title}
          </p>

          <p className="text-base leading-relaxed text-white md:text-lg xl:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;