import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const HomePageBanner = () => {
  return (
   <section
      className="relative w-full h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/karateConnect.jpg')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/70 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
          Let&apos;s Connect Today
        </h2>

        {/* Right Side - Link */}
        <Link
          href="/contact"
          className="flex items-center gap-2 text-lg font-medium hover:text-gray-300 transition"
        >
          <span>Connect</span>
          <BsArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </section>
  )
}

export default HomePageBanner
