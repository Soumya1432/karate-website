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
    { label: "Member Academics", href: "#academics" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
         
          <span className="font-bold text-lg">logo-ipsum</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-red-600 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button className="text-2xl text-gray-800" onClick={toggleMenu}>
            <FiX />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6 px-6 text-gray-800 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="bg-red-600 text-white px-4 py-2 rounded-lg block text-center hover:bg-red-700 transition"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
