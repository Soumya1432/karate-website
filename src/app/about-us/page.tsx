import DesignationCard from '@/components/card/DesignationCard'
import FeatureCard from '@/components/card/FeatureCard'
import SectionHeader from '@/components/common/SectionHeaderProps'
import React from 'react'

const AboutusPage = () => {
    return (
        <section>
            <SectionHeader
                title="About us "
            />

            <div className='about-us-page-container'>
                <div className='about-us-page-section-one'>
                    <p className='about-us-page-section-one-paragraph'>
                        We are a dedicated karate organization based in Shyamnagar, West Bengal, committed to promoting the true spirit of martial arts across India. Our primary goal is to support karate academies and instructors through official affiliations that provide recognition, structure, and growth opportunities. With a strong presence in West Bengal and expanding reach across the country, we ensure that every affiliated academy follows a disciplined training system, standardized examinations, and certified ranking procedures.
                        Beyond certifications, we create opportunities for academies and students to participate in state and national-level events, seminars, and workshops. Through our guidance and support, affiliated academies gain credibility, access to professional resources, and a platform to showcase their talent.
                    </p>
                </div>

                <div className='about-us-page-section-two'>
                    <h2 className='about-us-page-section-two-header'>Organization OverView</h2>
                    <div className='about-us-page-section-two-wrapper'>
                        <p className='about-us-page-section-two-paragraph'>
                            The All India Shotokan Karate Academy is dedicated to spreading authentic Shotokan Karate across India, nurturing discipline, respect, and physical fitness through traditional and modern teaching methods.
                        </p>

                        <p className='about-us-page-section-two-paragraph'>
                            The All India Shotokan Karate Academy is dedicated to spreading authentic Shotokan Karate across India, nurturing discipline, respect, and physical fitness through traditional and modern teaching methods.
                        </p>
                    </div>
                </div>


                <div className='about-us-page-banner-container'>
                    <div className="about-us-banner-wrapper">
                        {/* Overlay */}
                        <div className="about-us-banner-overlay"></div>

                        {/* Content */}
                        <div className="about-us-banner-content">
                            {/* Left Side - Title */}
                            <h2 className="about-us-banner-title">
                                Our core values
                            </h2>

                        </div>
                    </div>

                    <div className='about-us-core-value-card-one'>
                        <div className='core-value-text'>
                            <h2>2+</h2>
                            <p>Years of
                                <br />
                                Experience</p>
                        </div>
                        <div className='core-value-text'>
                            <h2>100</h2>
                            <p>Total <br /> Members</p>
                        </div>
                        <div className='core-value-text'>
                            <h2>10</h2>
                            <p>Professional <br /> Trainer</p>
                        </div>
                        <div className='core-value-text'>
                            <h2>50+</h2>
                            <p>Success  <br /> Stories</p>
                        </div>
                    </div>

                </div>

                {/* designation card */}
                <div className='about-us-page-designation-card-container'>
                    <h2 className='about-us-leadership'>Our Core Leadership</h2>
                    <div className='about-us-page-designation-card-list'>
                        <DesignationCard
                            image="/images/director.png"
                            title="Chief Director"
                            details={[
                                "12+ Experience in this field",
                                "Former International Karate Champion"
                            ]}
                        />
                        <DesignationCard
                            image="/images/director.png"
                            title="Chief Director"
                            details={[
                                "12+ Experience in this field",
                                "Former International Karate Champion"
                            ]}
                        />
                        <DesignationCard
                            image="/images/director.png"
                            title="Chief Director"
                            details={[
                                "12+ Experience in this field",
                                "Former International Karate Champion"
                            ]}
                        />
                        <DesignationCard
                            image="/images/director.png"
                            title="Chief Director"
                            details={[
                                "12+ Experience in this field",
                                "Former International Karate Champion"
                            ]}
                        />

                    </div>
                </div>


                {/* makes different */}
                <div className='about-us-feature-section'>
                    <h2 className='about-us-feature-section-title'>What makes us different</h2>
                    <p className='about-us-feature-section-description'>Why students, parents, and academies trust us</p>

                    <div className='about-us-feature-card-list'>
                        <FeatureCard
                            icon="/images/certifiedInstructor.png"
                            title="Certified Excellence"
                            description="Recognized with top industry certifications for outstanding training quality."
                        />

                        <FeatureCard
                            icon="/images/nationwideAffiliate.png"
                            title="Proven Successful "
                            description="Over 1000+ students trained and awarded at national & international levels."
                        />

                        <FeatureCard
                            icon="/images/explore.png"
                            title="Expert Mentorship"
                            description="Guidance from experienced trainers with 15+ years in martial arts."
                        />
                    </div>

                </div>


            </div>
        </section>
    )
}

export default AboutusPage
