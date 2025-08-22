"use client"
import ProgramCard from '@/components/card/ProgramCard'
import SectionHeader from '@/components/common/SectionHeaderProps'
import Link from 'next/link'
import React from 'react'

const OurProgramsPage = () => {
    return (
        <section>
            <SectionHeader
                title='Our Programs & Inititatives'
            />

            <div className='program-page-container'>
                <ProgramCard
                    icon="/images/programicon01.png"
                    title="Affiliation Program"
                    descriptions={[
                        "Partner with us and get recognized as an official shotokan academy.",
                        "Partner with us and get recognized as an official shotokan academy.",
                    ]}
                    benefits="Benefits: Certifications, recognition, training, standards, national etc."
                    buttonText="Apply for Affiliation"
                    onClicks={() => alert("Applied!")}
                />
                <ProgramCard
                    icon="/images/programicon02.png"
                    title="Championship (State & National)"
                    descriptions={[
                        "Partner with us and get recognized as an official shotokan academy.",
                        "Partner with us and get recognized as an official shotokan academy.",
                    ]}
                    benefits="Benefits: Certifications, recognition, training, standards, national etc."
                    buttonText="View Championship"
                    onClicks={() => alert("Applied!")}
                />
                <ProgramCard
                    icon="/images/programicon03.png"
                    title="Dedicated Hiring"
                    descriptions={[
                        "Partner with us and get recognized as an official shotokan academy.",
                        "Partner with us and get recognized as an official shotokan academy.",
                    ]}
                    benefits="Benefits: Certifications, recognition, training, standards, national etc."
                    buttonText="Apply as instructor"
                    onClicks={() => alert("Applied!")}
                />
                <ProgramCard
                    icon="/images/programicon04.png"
                    title="Examination Process"
                    descriptions={[
                        "Partner with us and get recognized as an official shotokan academy.",
                        "Partner with us and get recognized as an official shotokan academy.",
                    ]}
                    benefits="Benefits: Certifications, recognition, training, standards, national etc."
                    buttonText="Apply for Examination"
                    onClicks={() => alert("Applied!")}
                />

                <ProgramCard
                    icon="/images/programicon05.png"
                    title="Events & Seminars"
                    descriptions={[
                        "Partner with us and get recognized as an official shotokan academy.",
                        "Partner with us and get recognized as an official shotokan academy.",
                    ]}
                    benefits="Benefits: Certifications, recognition, training, standards, national etc."
                    buttonText="View Upcoming Events"
                    onClicks={() => alert("Applied!")}
                />

                <ProgramCard
                    icon="/images/programicon06.png"
                    title="Internation opportunities"
                    descriptions={[
                        "Partner with us and get recognized as an official shotokan academy.",
                        "Partner with us and get recognized as an official shotokan academy.",
                    ]}
                    benefits="Benefits: Certifications, recognition, training, standards, national etc."
                    buttonText="View Opprtunities"
                    onClicks={() => alert("Applied!")}
                />

            </div>

            <div className='program-page-banner'></div>
                <div className="programpage-banner-container">
                    {/* Overlay */}
                    <div className="homepage-banner-overlay"></div>

                    {/* Content */}
                    <div className="homepage-banner-content">
                        {/* Left Side - Title */}
                        <h2 className="homepage-banner-title">
                          Be part of our network
                        </h2>

                        {/* Right Side - Link */}
                        <button className='program-page-banner-btn'>
                            Contact us today
                        </button>
                    </div>
                </div>
          

        </section>
    )
}

export default OurProgramsPage
