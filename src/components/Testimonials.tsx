import { getTestimonials } from "../libs/wp";
import { TestimonialWP } from "../interface";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default async function Testimonials() {
  const testimonials: TestimonialWP[] = await getTestimonials();

  return <TestimonialsCarousel testimonials={testimonials} />;
}