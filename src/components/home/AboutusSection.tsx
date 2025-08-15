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
                        <h1 className="homepage-about-left-section-header">About our organization</h1>
                        <p className="homepage-about-left-section-desc">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi mollitia saepe expedita, optio repellendus non odio ut porro accusantium voluptate eos iste aliquid animi perspiciatis, reiciendis provident recusandae molestiae inventore!
                            <b className='font-bold'>Lorem ipsumm organization</b>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum temporibus laudantium fugit molestiae sapiente consectetur. Sit ipsam voluptatum repellendus tenetur provident. Quos ut eos ipsum doloremque culpa. Accusantium, veritatis possimus.
                        </p>
                    </div>
                    <div>
                        <button className="more-info-btn" onClick={handleAbout}>More Info</button>
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

