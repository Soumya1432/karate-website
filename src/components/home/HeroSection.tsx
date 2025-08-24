// "use client";
// import { useRef } from "react";

// const slides = [
//   {
//     img: "/images/slide2.jpg",
//     title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     subtitle: "Lorem ipsum dolor sit amit",
//   },
//   {
//     img: "/images/slide1.jpg",
//     title: "Another amazing moment in sports history.",
//     subtitle: "Dolor sit amet",
//   },
//   {
//     img: "/images/slide1.jpg",
//     title: "Athletes performing at their best.",
//     subtitle: "Consectetur adipiscing elit",
//   },
// ];

// export default function HeroSection() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Scrollable Container */}
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
//         style={{ scrollSnapType: "x mandatory" }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-screen h-[90vh] relative snap-center"
//             style={{
//               backgroundImage: `url(${slide.img})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40 ">
//             <div className="flex flex-col justify-center px-12 text-white max-w-screen-xl mx-auto ">
//               <h2 className="text-xl md:text-2xl font-medium">{slide.title}</h2>
//               <p className="mt-6 font-light">{slide.subtitle}</p>
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>

  
//     </div>
//   );
// }


import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    
    return (
        <>
            {/* Hero Section */}
            <section className="hero-container">
                <Image
                    src={'/images/slide2.jpg'}
                    alt="Hero Image"
                    height={800}
                    width={800}
                    layout='100'
                />
                <div className="hero-content">
                    <h1>Official Karate Affiliation & Recognition Across India</h1>
                    <p>Be part of a certified network, gain credibility, and unlock nationwide opportunities for your dojo.</p>
                    {/* <Link href={"/products"} className='hero-container-shop-now-btn'>View Gallery</Link>
                     */}
                </div>
            </section>
        </>

    )
}

export default HeroSection
