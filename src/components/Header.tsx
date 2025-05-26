"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  return (
    <nav className="w-full bg-[var(--background)] text-[var(--foreground)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <Image src="/logo/logo-c.png" alt="Claexa AI" width={30} height={30} />
          <Link href="/" className="text-xl font-semibold hover:text-opacity-80 transition-colors">
            Claexa AI
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Button asChild variant="ghost">
          <Link href="/pricing" className="hover:text-[var(--primary)] transition-colors">
            Pricing
          </Link>
          </Button>
          <Button asChild variant="ghost">
          <Link href="/about" className="hover:text-[var(--primary)] transition-colors">
            About
          </Link>
          </Button>
          <Button asChild variant="ghost">
          <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
            Contact
          </Link>
          </Button>
        </div>

        {/* Action Buttons/Links */}
        <div className="hidden md:flex items-center space-x-3">
          <Button asChild variant="default"> 
          <Link href="https://app.claexa.com" target="_blank">
              Launch App
              <ArrowUpRight/>
          </Link>
          </Button>
         
        </div>
        
        {/* Mobile Menu Button (placeholder) */}
        <div className="md:hidden flex items-center">
          <button className="p-2 rounded-md hover:bg-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]">
            {/* Icon for menu, e.g., hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
