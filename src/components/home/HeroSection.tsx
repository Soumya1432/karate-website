"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    img: "/images/slide1.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle: "Lorem ipsum dolor sit amit",
  },
  {
    img: "/images/slide1.jpg",
    title: "Another amazing moment in sports history.",
    subtitle: "Dolor sit amet",
  },
  {
    img: "/images/slide1.jpg",
    title: "Athletes performing at their best.",
    subtitle: "Consectetur adipiscing elit",
  },
];

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-[90vh] relative snap-center"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-12 text-white max-w-xl">
              <h2 className="text-xl md:text-2xl font-medium">{slide.title}</h2>
              <p className="mt-6 font-light">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded p-2"
      >
        <FiChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded p-2"
      >
        <FiChevronRight size={28} />
      </button>
    </div>
  );
}
