import React from 'react'
import testimonials from "../../data/testimonials.json"
import TestimonialCard from '../card/TestimonialsCard'
const TestimonialSection = () => {
  return (
    <div>
          <main className="testimonials-page-container">
                <div className="testimonials-grid">
                    {testimonials.slice(0,3).map((testimonial) => (
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
    </div>
  )
}

export default TestimonialSection
