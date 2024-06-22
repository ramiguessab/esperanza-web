"use client"

// src/components/Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-esperanza_very_dark_blue  py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
          <img src="/assets/icon_logo.svg" alt="Logo" className="h-8 w-auto" />
          <p className="ml-2 text-2xl font-bold text-gray-100">Esperanza <span className='text-esperanza_cyan_blue'>Club</span></p>
        
        </Link>
        <nav className="hidden md:flex space-x-4 font-bold">
          <Link href="/" className="text-gray-200  hover:text-esperanza_cyan_blue">Home</Link>
          <Link href="/events" className="text-gray-200 hover:text-esperanza_cyan_blue">Events</Link>
          <Link href="/contact" className="text-gray-200 hover:text-esperanza_cyan_blue">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <a href="/" className="block text-gray-600 hover:text-gray-800">Home</a>
          <a href="/about" className="block text-gray-600 hover:text-gray-800">About</a>
          <a href="/contact" className="block text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
