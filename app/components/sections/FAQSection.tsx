import FAQAccordion, {
  type FAQItem,
} from "../FaqAccordion";

import PulsingLabel from "../PulsingLabel";

const faqItems: FAQItem[] = [
  {
    question:
      "Do Endpoint Clients handle both design and development?",
    answer:
      "Yes. Our multidisciplinary team covers product strategy, UI/UX, front-end, back-end, mobile and AI development.",
  },
  {
    question:
      "How much does custom software development cost?",
    answer:
      "Costs depend on your scope, features, complexity, integrations, and timeline. We provide tailored project estimates.",
  },
  {
    question:
      "How long does product development take?",
    answer:
      "Timelines vary by project scope and complexity. We define clear milestones and delivery timelines during discovery.",
  },
  {
    question:
      "Can you redesign an existing website or app?",
    answer:
      "Yes. We improve existing products through UX research, UI/UX design, redesign, and development.",
  },
  {
    question:
      "Do you build MVPs for startups?",
    answer:
      "Yes. We help startups turn validated ideas into functional MVPs by combining product strategy, UX/UI design and software development.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-mirage py-8 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12">
        <div className="md:col-span-4 flex flex-col gap-2 md:gap-3 items-start">
          <PulsingLabel text={"FAQs"} />

          <h3 className="text-2xl md:text-5xl font-semibold text-white leading-[130%] md:leading-[110%]">
            Questions before we build?
          </h3>
        </div>

        <div className="md:col-span-6">
          <FAQAccordion faqs={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;