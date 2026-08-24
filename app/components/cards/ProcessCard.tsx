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
      <div className="flex flex-row items-center gap-12">
        <p className="text-[64px] font-semibold text-white/18 xl:min-w-60.75">
          {number}
        </p>

        <div className="flex items-center justify-center xl:min-h-60 xl:min-w-77.5">
          <Image
            src={image}
            alt={imageAlt}
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-5xl font-semibold text-white">
            {title}
          </p>

          <p className="text-xl text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;