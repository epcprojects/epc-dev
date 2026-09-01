import { Images } from "@/app/ui";
import DevelopmentProcessSection from "./DevelopmentProcessSection";

const processSteps = [
  {
    number: "/01",
    image:
      Images.landingImages
        .DiscoveryPlanningImage,
    imageAlt:
      "Product Development Discovery and planning",
    title:
      "Product Discovery & Strategy",
    description:
      "We understand your goals, users, and requirements to define the right product scope, features, and roadmap.",
  },
  {
    number: "/02",
    image:
      Images.landingImages.CalendarImage,
    imageAlt:
      "Product Development Discovery & Planning",
    title:
      "Product Design & Prototyping",
    description:
      "We turn product ideas into intuitive experiences through UX research, user flows, wireframes, UI design, prototypes, and scalable design systems.",
  },
  {
    number: "/03",
    image:
      Images.landingImages
        .DesignPrototypingImage,
    imageAlt:
      "Product Development Design & Prototyping",
    title:
      "Product Development & Engineering",
    description:
      "We build scalable digital products with modern frontend, backend, mobile, API, cloud, and AI technologies aligned with your product requirements and growth goals.",
  },
  {
    number: "/04",
    image:
      Images.landingImages.DevelopmentImage,
    imageAlt:
      "Product Development Testing",
    title:
      "Testing & Quality Assurance ",
    description:
      "We validate every product through functional, usability, performance, and compatibility testing to deliver reliable software ready for real-world users.",
  },
  {
    number: "/05",
    image:
      Images.landingImages.TestingImage,
    imageAlt:
      "Product Development Launch & Deployment",
    title:
      "Launch & Deployment ",
    description:
      "We prepare your digital product for launch with production deployment, cloud infrastructure, integrations, security checks, and performance optimization. ",
  },
  {
    number: "/06",
    image:
      Images.landingImages.LaunchImage,
    imageAlt:
      "Product Development Support & Growth",
    title:
      "Product Support & Growth",
    description:
      "We continuously improve your product through maintenance, monitoring, performance optimization, new features, and technical support as your business grows.",
  },
];

const DevelopmentProcessHomeSection = () => {
  return (
    <DevelopmentProcessSection
      processSteps={processSteps}
    />
  );
};

export default DevelopmentProcessHomeSection;