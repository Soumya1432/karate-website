import TestimonialCard from '@/components/card/TestimonialsCard'
import React from 'react'
import testimonials from "../../data/testimonials.json"
import SectionHeader from '@/components/common/SectionHeaderProps'
const TestiMonialsPage = () => {
    return (
        <section>

            <SectionHeader
                title='Our Testimonials & Success Stories' />
            <main className="testimonials-page-container">
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
