"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "about-us" },
    { label: "Affiliations", href: "/affiliations" },
    { label: "Events & Championship", href: "events-championships" },
    { label: "Programs", href: "/programs" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact us", href: "/contact-us" },
  ];

  return (
    <header className="header-container">
      <div className="header-wrapper">
        {/* Logo */}
        <div className="header-logo">
          <span>logo-ipsum</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Buttons */}
        <div className="auth-buttons">
          <Link href="#contact" className="btn-outline">
            Register
          </Link>
          <Link href="#contact" className="btn-primary">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          <FiMenu />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="close-btn">
          <button onClick={toggleMenu}>
            <FiX />
          </button>
        </div>

       <ul className="mobile-links">
  {navItems.map((item) => (
    <li key={item.href}>
      <Link href={item.href} className="nav-link" onClick={toggleMenu}>
        {item.label}
      </Link>
    </li>
  ))}
  <li className="mobile-auth">
    <Link
      href="/login"
      className="mobile-btn-primary"
      onClick={toggleMenu}
    >
      Login
    </Link>
    <Link
      href="/register"
      className="mobile-btn-secendary"
      onClick={toggleMenu}
    >
      Register
    </Link>
  </li>
</ul>

      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </header>
  );
}
