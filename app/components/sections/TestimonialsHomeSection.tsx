import { Images } from "@/app/ui";

import TestimonialsSection, {
  type Testimonial,
} from "./TestimonialSection";

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Endpoint is one of the most helpful website and mobile app design teams I’ve worked with. Clear communication, thoughtful execution and strong product thinking.",
    authorName: "Sienna Hewitt",
    authorDescription: "United States",
    authorImage:
      Images.landingImages.TestimonialImage,
    authorImageAlt: "Sienna Hewitt",
  },
  {
    id: 2,
    text: "It was great to work with Endpoint Clients, I needed something urgently to kick-off app development and within 24 hours I had a first good version which iterated on.",
    authorName: "Max Stoeckl",
    authorDescription: "France",
    authorImage:
      Images.landingImages.MaxstoImage,
    authorImageAlt: "Max Stoeckl",
  },
  {
    id: 3,
    text: "It has been outstanding working with the team at EndPoint Clients. The exception eye to detail and greater understanding has made our products exceptionally great.",
    authorName: "Muhunthan",
    authorDescription: "Sri Lanka",
    authorImage:
      Images.landingImages.MuhunImage,
    authorImageAlt: "Muhunthan",
  },
  {
    id: 4,
    text: "EndPoint is one of the most helpful website/mobile app design companies I worked with. A great team with fresh ideas, fair pricing, amazing designs and innovative thinking. Most of all very responsive, when working with Endpoint it is like having a second team on your side.",
    authorName: "Darrell Fertakos",
    authorDescription: "United States",
    authorImage:
      Images.landingImages.DarellImage,
    authorImageAlt: "Darrell Fertakos",
  },
  {
    id: 5,
    text: "I highly recommend Endpoint Clients for their outstanding commitment and performance. They not only fulfilled the assigned tasks but also consistently went above and beyond, proactively suggesting improvements throughout the project. Communication was clear and assertive, ensuring all details were precisely...",
    authorName: "Marco Gama",
    authorDescription: "Andorra",
    authorImage:
      Images.landingImages.MarcoGamaImage,
    authorImageAlt: "Marco Gama",
  },
];

const TestimonialsHomeSection = () => {
  return (
    <TestimonialsSection
      testimonials={testimonials}
    />
  );
};

export default TestimonialsHomeSection;