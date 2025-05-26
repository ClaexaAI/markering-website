"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowUpRight, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <nav className="w-full bg-[var(--background)] text-[var(--foreground)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left side: Mobile Menu (visible on mobile) + Logo/Brand (always visible) */}
        <div className="flex items-center">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden mr-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-6">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center text-xl">
                    <Image src="/logo/logo-c.png" alt="Claexa AI" width={28} height={28} className="mr-2" />
                    Claexa AI
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                  <SheetClose asChild>
                    <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                      Pricing
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                      Contact
                    </Link>
                  </SheetClose>
                  <hr className="my-3" />
                  <SheetClose asChild>
                    <Button asChild variant="default" className="w-full justify-center text-base py-2.5">
                      <Link href="https://app.claexa.com" target="_blank" className="flex items-center justify-center">
                        Launch App
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <Image src="/logo/logo-c.png" alt="Claexa AI" width={30} height={30} />
            <Link href="/" className="text-xl font-semibold hover:text-opacity-80 transition-colors">
              Claexa AI
            </Link>
          </div>
        </div>

        {/* Right side: Desktop Nav Links and Action Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Nav Links */}
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
          {/* Action Buttons/Links */}
          <Button asChild variant="default">
          <Link href="https://app.claexa.com" target="_blank" className="flex items-center">
              Launch App
              <ArrowUpRight className="ml-1.5 h-4 w-4"/>
          </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
