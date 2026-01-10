"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Tracking", href: "/tracking" },
  { name: "About Us", href: "/about" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-outfit ${
          isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#282562] z-50"
          >
            FLYMEL
          </Link>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-[#282562]/80 hover:text-[#E12128] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions (Right) */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden md:block px-6 py-3 text-base font-semibold text-white bg-[#E12128] rounded-lg hover:bg-[#c41b22] transition-colors shadow-lg shadow-red-900/20"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#282562] hover:text-[#E12128] transition-colors z-50 focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay (CSS Transition only) */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-28 px-6 font-outfit transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-[#282562] border-b border-gray-100 pb-4 hover:text-[#E12128] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-6">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 text-center text-xl font-bold text-white bg-[#E12128] rounded-xl hover:bg-[#c41b22] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
