"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Affiliations", href: "#affiliations" },
    { label: "Events & Tournaments", href: "#events" },
    { label: "Programs", href: "#academics" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact us", href: "#contact-us" },
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
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
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
              <a href={item.href} className="nav-link" onClick={toggleMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-auth">
            <Link
              href="#contact"
              className="mobile-btn-primary"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              href="#contact"
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
