"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type TestimonialCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  slug,
  title,
  description,
  image,
}) => {
  return (
    <Link href={`/testimonials/${slug}`} className="testimonial-card-container">
      <div className="testimonial-card-image">
        <Image src={image} alt={title}  width={800} height={800}/>
      </div>
      <div className="testimonial-card-content">
        <h3 className="testimonial-card-title">{title}</h3>
        <p className="testimonial-card-description">{description}</p>
      </div>
    </Link>
  );
};

export default TestimonialCard;
