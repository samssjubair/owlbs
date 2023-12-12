"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from '../../assets/brand_logo_white.png'
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black px-8 p-4 flex items-center justify-between fixed w-full z-50">
      {/* Left side - Logo */}
      <div className="text-white">
        <Image src={logo} alt="OwlBS Logo" height={50} width={100}/>
      </div>

      {/* Right side - Menu and CALL NOW button */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="#" className="text-white hover:text-primary">
          Home
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Services
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Our Work
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Testimonial
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          About Us
        </Link>
        <button className="bg-primary text-black px-4 py-2 rounded-md">
          CALL NOW
        </button>
      </div>

      {/* Mobile menu - Burger icon */}
      <div className="md:hidden">
        <svg
          onClick={toggleMobileMenu}
          className="w-6 h-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-black text-white w-full">
          <Link href="#" className="block p-3 hover:bg-gray-800">
            Home
          </Link>
          <Link href="#" className="block p-3 hover:bg-gray-800">
            Services
          </Link>
          <Link href="#" className="block p-3 hover:bg-gray-800">
            Work
          </Link>
          <Link href="#" className="block p-3 hover:bg-gray-800">
            Testimonial
          </Link>
          <Link href="#" className="block p-3 hover:bg-gray-800">
            About Us
          </Link>
          <button className="bg-primary text-black px-4 py-2 rounded-md m-3">
            CALL NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
