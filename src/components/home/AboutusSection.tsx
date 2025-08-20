"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
const AboutusSection = () => {
    const router = useRouter();

    const handleAbout = () => {
        router.push("/about-us");
    };

    return (
        <section className="homepage-about-container">
            <div className="homepage-about-wrapper">
                {/* Left Section */}
                <div className="homepage-about-left-section">
                    <div className="homepage-about-left-section-text">
                        <h1 className="homepage-about-left-section-header">Who we are </h1>
                        <p className="homepage-about-left-section-desc">
                            We are a dedicated karate organization based in Shyamnagar, West Bengal, committed to promoting the true spirit of martial arts across India. Our primary goal is to support karate academies and instructors through official affiliations that provide recognition, structure, and growth opportunities. With a strong presence in West Bengal and expanding reach across the country, we ensure that every affiliated academy follows a disciplined training system, standardized examinations, and certified ranking procedures.
                            Beyond certifications, we create opportunities for academies and students to participate in state and national-level events, seminars, and workshops. Through our guidance and support, affiliated academies gain credibility, access to professional resources, and a platform to showcase their talent.
                        </p>
                    </div>
                    <div>
                        <button className="more-info-btn" onClick={handleAbout}>Learn more</button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="homepage-about-right-section">
                    <Image
                        src="/images/slide1.jpg"
                        alt="image-01"
                        width={800}
                        height={800}
                        className="homepage-about-image"
                        quality={90}
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutusSection;

