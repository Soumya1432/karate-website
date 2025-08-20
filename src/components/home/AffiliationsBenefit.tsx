import React from 'react'
import AffiliationCard from '../card/AfffiliationCard';
import { BsPercent, BsPuzzle } from 'react-icons/bs';
import { RiMvAiLine } from 'react-icons/ri';
import { BiAward } from 'react-icons/bi';

const AffiliationsBenefit = () => {
    return (
        <section
            className=" max-w-screen-full mx-auto py-6"
        >
            <div className='relative w-full flex items-center justify-center text-white py-32'
                style={{
                    backgroundImage: "url('/images/affiliationBg.jpg')", // replace with your bg image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-800/70 to-black/50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Affiliation Benefits
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-10">
                        Your path to official recognition and nationwide opportunities
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AffiliationCard
                            icon={<BsPuzzle />}
                            title="National Recognition"
                            description="Be officially recognized across India"
                        />
                        <AffiliationCard
                            icon={<RiMvAiLine />}
                            title="Official Recognition"
                            description="Gain credibility with certified affiliations"
                        />
                        <AffiliationCard
                            icon={<BiAward />}
                            title="Certifications Benefits"
                            description="Standardized & certified Instructor"
                        />
                        <AffiliationCard
                            icon={<BsPercent />}
                            title="Branding & Promotion"
                            description="Grow organization branding & events"
                        />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default AffiliationsBenefit;
