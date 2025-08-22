import AffiliationProcessCard from '@/components/card/AffiliationProcessCard';
import EligibilityCard from '@/components/card/EligibilityCard';
import AffiliationProcess from '@/components/home/AffiliationProcess'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

const AffiliationsPage = () => {
    const steps = [
        {
            step: 1,
            title: "Apply Online",
            description: "Submit your academic details with required documents",
        },
        {
            step: 2,
            title: "Review & Verifications",
            description: "Our team evaluates your credentials & facilities",
        },
        {
            step: 3,
            title: "Approval & Certifications",
            description: "Receive Official recognition & affiliation certificate",
        },
        {
            step: 4,
            title: "Onboarding & Support",
            description: "Get access to training, resources, and events",
        },
    ];
    return (
        <section className=''>
            <div className="section-header-card">
                <h2 className="section-title">Befome an Affiliated Academy with us</h2>
                <p className='text-gray-300 max-w-3xl text-center pt-6'>Join our nationwide network of recognized karate academies, and give your students access
                    to certified training , tournaments & international opportunities.</p>

                <button className='px-20 py-3 bg-red-600 text-white  mt-8 rounded-lg'>Apply for Affiliations</button>
            </div>
            <div className='affiliation-page-benefits-container'>
                <h2 className='affiliation-page-title'>Benefits for your academy</h2>
                <div className='affiliation-page-benefits-wrapper'>
                    <div className='affiliation-page-benefits-left'>
                        <ul>
                            <li>Right to conduct belt grading under our authority</li>
                            <li> Recognition certificate & affiliation badge for
                                your academy.</li>
                            <li>Listing on our official website as an affiliated
                                academy</li>
                            <li>Access to seminars , camps & tournaments.</li>
                            <li>Continued support from certified coaches.</li>
                        </ul>
                    </div>
                    <div className='affiliation-page-benefits-right'>
                        <Image
                            src={"/images/gallery12.jpg"}
                            className='h-80 w-72 rounded-2xl'
                            alt='banner-image'
                            width={700}
                            height={700}
                            layout='100'
                        />
                        <Image
                            src={"/images/gallery10.jpg"}
                            className='h-80 w-96 rounded-2xl'
                            alt='banner-image'
                            width={700}
                            height={700}
                            layout='100'
                        />
                    </div>
                </div>


            </div>

            <div className=''>
                <h2 className='affiliation-page-title'>How to apply </h2>

                <div className='affiliation-process-list'>
                    <div className="affiliation-process-wrapper">
                        {/* Steps */}
                        <div className="affiliation-process-steps">
                            {steps.map((s, index) => (
                                <div key={s.step} className="affiliation-process-step-wrapper">
                                    <AffiliationProcessCard
                                        step={s.step}
                                        title={s.title}
                                        description={s.description}
                                    />
                                    {/* Arrow (hide on last card) */}
                                    {index < steps.length - 1 && (
                                        <div className="affiliation-process-arrow">
                                            <BsArrowRight size={28} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            <div className='affiliation-page-eligibility-section'>
                <h2 className='affiliation-page-title'>Eligibility & Requirements</h2>

                <div className='affiliation-page-eligibility-card-list'>
                    <EligibilityCard
                        icon={<FaHome size={32} />}
                        title="Active dojo"
                        description="Must have a physical or functional karate academy"
                    />
                </div>

            </div>

        </section>
    )
}

export default AffiliationsPage
