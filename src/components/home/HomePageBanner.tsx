import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HomePageBanner = () => {
  return (
    <section className="homepage-banner-container">
      {/* Overlay */}
      <div className="homepage-banner-overlay"></div>

      {/* Content */}
      <div className="homepage-banner-content">
        {/* Left Side - Title */}
        <h2 className="homepage-banner-title">
          Let&apos;s Connect Today
        </h2>

        {/* Right Side - Link */}
        <Link href="/contact" className="homepage-banner-link">
          <span>Connect</span>
          <BsArrowRight className="homepage-banner-icon" />
        </Link>
      </div>
    </section>
  );
};

export default HomePageBanner;
