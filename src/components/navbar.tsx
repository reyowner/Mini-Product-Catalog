"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-brown-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
            </div>
            <span className="font-bold text-xl">TBH</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links (Responsive) */}
          <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-brown-800 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden md:flex"
          } md:flex-row md:items-center md:space-x-8 md:relative`}>
            <Link href="/category/beans" className="block md:inline-block px-4 py-3 md:py-0 hover:text-brown-200 transition duration-300">
              Coffee Beans
            </Link>
            <Link href="/category/equipment" className="block md:inline-block px-4 py-3 md:py-0 hover:text-brown-200 transition duration-300">
              Equipment
            </Link>
            <Link href="/category/accessories" className="block md:inline-block px-4 py-3 md:py-0 hover:text-brown-200 transition duration-300">
              Accessories
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
