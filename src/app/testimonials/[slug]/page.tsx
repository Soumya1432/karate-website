import { notFound } from "next/navigation";
import testimonials from "@/data/testimonials.json";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return testimonials.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const testimonial = testimonials.find((t) => t.slug === params.slug);
  if (!testimonial) return { title: "Testimonial Not Found" };
  return {
    title: testimonial.title,
    description: testimonial.description,
  };
}

export default function TestimonialDetails({ params }: Props) {
  const testimonial = testimonials.find((t) => t.slug === params.slug);

  if (!testimonial) return notFound();

  return (
    <main className="testimonial-details-container">
      <div className="testimonial-details-image">
        <img src={testimonial.image} alt={testimonial.title} />
      </div>
      <div className="testimonial-details-content">
        <h1>{testimonial.title}</h1>
        <p>{testimonial.details}</p>
      </div>
    </main>
  );
}
