"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import { ArrowLeftIcon, ArrowUpIcon } from "@/public/icons";
import * as Accordion from "@radix-ui/react-accordion";
import { div } from "motion/react-client";
import { StaticImageData } from "next/image";
import Image from "next/image";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const isMobile = useIsMobile();

  return (
    <section>
      <Accordion.Root
        type="single"
        collapsible
        defaultValue="item-0"
        className="flex flex-col gap-3 lg:gap-5.5"
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="
  group/item relative overflow-hidden
  rounded-2xl
  bg-dark-gray
  p-px
 "
          >
            <div className="bg-mirage rounded-2xl relative overflow-hidden">
              <div
                aria-hidden="true"
                className="
  pointer-events-none absolute
  -top-25 right-5
  h-72 w-40
  origin-center -rotate-90
  rounded-full
  bg-[#C5C8CA1F]
  opacity-0 blur-[30px]
  transition-opacity duration-300
  group-data-[state=open]/item:opacity-100
 "
              />

              <Accordion.Header>
                <Accordion.Trigger
                  className="group flex w-full transition-[padding,border-radius]
duration-300
ease-[cubic-bezier(0.22,1,0.36,1)]  cursor-pointer items-center gap-1 justify-between text-start rounded-2xl data-[state=open]:rounded-b-none  pt-4   pb-4 data-[state=open]:pb-2 px-4  md:px-4.75  outline-none text-neutral-200"
                >
                  <span className="text-base md:text-[22px] font-medium">
                    {faq.question}
                  </span>

                  <span
                    className="
  inline-flex h-8 md:h-10.5 w-8 md:w-10.5
  shrink-0 items-center justify-center
  rounded-full border border-white/10
  text-white
  transition-all duration-300
   rotate-90
  group-data-[state=open]:rotate-0
  group-data-[state=open]:bg-radial
  group-data-[state=open]:from-white/30
  group-data-[state=open]:to-white/0
 "
                  >
                    <ArrowUpIcon
                      width={isMobile ? "20" : "24"}
                      height={isMobile ? "20" : "24"}
                    />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className=" overflow-hidden accordion-content  px-4 md:px-4.75">
                <p className="text-sm md:text-lg  text-neutral-400  pb-4">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </div>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
