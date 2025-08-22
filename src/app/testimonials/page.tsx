import TestimonialCard from '@/components/card/TestimonialsCard'
import React from 'react'
import testimonials from "../../data/testimonials.json"
const TestiMonialsPage = () => {
  return (
<section>

  <main className="testimonials-page-container">
      <h1 className="testimonials-page-title">Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            slug={testimonial.slug}
            title={testimonial.title}
            description={testimonial.description}
            image={testimonial.image}
          />
        ))}
      </div>
    </main>
    </section>
  )
}

export default TestiMonialsPage
