
type FooterLocationCardProps = {
  country: string;
  address: string;
  phone: string;
  phoneHref: string;
  FlagIcon: React.ComponentType;
};

export function FooterLocationCard({
  country,
  address,
  phone,
  phoneHref,
  FlagIcon,
}: FooterLocationCardProps) {
  return (
    <div className="  flex flex-col gap-4 lg:gap-8">
      <div className="flex flex-col gap-4 lg:gap-6 items-start">
        <div className="shrink-0">
          <FlagIcon />
        </div>

        <p className="text-[24px]! font-manrope font-semibold! text-white!">
          {country}
        </p>
      </div>

     
        <div className="">
          <p className="text-base! font-manrope font-normal! text-gray-200!">{address}</p>
        </div>
      
    </div>
  );
}
