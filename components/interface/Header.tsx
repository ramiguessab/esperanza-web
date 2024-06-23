"use client"

import { usePathname } from "next/navigation";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname=usePathname()
  const navLinks=[
    {href:"/",label:"Home"},
    {href:"/events",label:"Events"},
    {href:"/contact",label:"Contact"},
]

  return (
    <header className="bg-esperanza_very_dark_blue shadow-white py-4 sticky top-0 z-10 rounded-b-2xl">
      <div className="container mx-auto px-4 flex  items-center justify-between">
      <Link href="/" className="flex items-center">
          <img src="/assets/icon_logo.svg" alt="Logo" className="sm:h-8 h-6 w-auto" />
          <p className="ml-4 text-lg sm:text-2xl font-bold text-gray-100">Esperanza <span className='text-esperanza_cyan_blue'>Club</span></p>
        
        </Link>
        <nav className="hidden md:flex space-x-10 font-bold">
        {navLinks.map((link)=>{
            const isActive = pathname === link.href
            return (
                <Link href={link.href} key={link.href} className={isActive ? " text-esperanza_cyan_blue   " :" text-white hover:text-blue-300 " }>{link.label}</Link>
            )
                            
})}
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
        <nav className="px-2 pt-4 space-y-1 text-center font-semibold">
        {navLinks.map((link)=>{
            const isActive = pathname === link.href
            return (
                <Link href={link.href} key={link.href} className={isActive ? " text-esperanza_cyan_blue  block " :" text-white hover:text-blue-300 block " }>{link.label}</Link>
            )} )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
