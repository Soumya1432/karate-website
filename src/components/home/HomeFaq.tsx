"use cient"
import Image from "next/image";
import { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { TbPlus } from "react-icons/tb";

interface Faq {
  title: string;
  description: string;
}

// FAQ data
const faqs: Faq[] = [
  {
    title: 'What are requirements to get affiliation for my academy ?',
    description:
      'We specialize in understanding your unique challenges and providing tailored software solutions that streamline operations, enhance efficiency, and drive growth. Whether you need custom development, process automation, or system integration, our team is here to help.',
  },
  {
    title: 'How long does affiliation approval process takes ?',
    description:
      'We offer a wide range of IT solutions, including custom web development, e-commerce platforms, SaaS products, mobile app development, and comprehensive UI/UX design services. Whatever your business needs, we deliver innovative and user-friendly solutions to help you succeed.',
  },
  {
    title: 'What benefits will my academy received after affiliations ?',
    description:
      'Project timelines vary depending on the scope and complexity. After assessing your requirements, we provide a clear roadmap with milestones and an estimated timeline for delivery.',
  },
  {
    title: 'Is the affiliation valid across India or only in West Bengal ?',
    description:
      'Yes, we provide post-launch support and maintenance services to ensure your software stays up-to-date, secure, and running smoothly over time.',
  },
  {
    title: 'Is the affiliation valid across India or only in West Bengal ?',
    description:
      'Yes, we provide post-launch support and maintenance services to ensure your software stays up-to-date, secure, and running smoothly over time.',
  },

];

const HomeFaq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-inner">
        {/* Header section */}
        <div className="faq-header">
          <h1 className="faq-header-subtitle">Frequently Asked Questions</h1>
          {/* <p className="faq-header-title">Improve & Enhance Your</p>
          <p className="faq-header-title">Business with Us</p> */}
        </div>

        <div className="faq-content">
          {/* Left section */}
          <div className="faq-list">
            <ul>
              {faqs.map((faq, index) => (
                <li key={index} className="faq-item">
                  <div
                    onClick={() => handleToggle(index)}
                    className="faq-question"
                    role="button"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="faq-question-title">{faq.title}</h3>
                    <span className="faq-toggle-icon">
                      {activeIndex === index ? <LuMinus /> : <TbPlus />}
                    </span>
                  </div>
                  <div
                    className={`faq-answer ${activeIndex === index ? 'faq-answer--open' : ''}`}
                    id={`faq-answer-${index}`}
                  >
                    <p className="faq-answer-text">{faq.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section image */}
          <div className="faq-image">
            <Image
              src={'/images/faq.png'} // Ensure the path is correct
              alt="FAQ illustration"
              height={540}
              width={500}
              quality={90}
              className="faq-image-content"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;