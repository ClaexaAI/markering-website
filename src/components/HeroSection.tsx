"use client";

import Link from 'next/link';
import {motion} from 'motion/react';
import {Safari} from '@/components/magicui/safari';

const HeroSection = () => {
  return (
    <section className="bg-secondary h-[70vh] py-20 md:py-32  overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
        <div className="md:flex md:items-center md:space-x-12 w-full">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Looking for Question Paper Generator?
            </h1>
            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto md:mx-0">
              try out question paper generator. make customized question paper for your students within minutes.
            </p>
            <ul className='space-y-2 text-base text-[var(--muted-foreground)]'>
              <li>✅ Easy to use ( but highly powerful )</li>
              <li>✅ No credit cards required</li>
              <li>✅ High quality question paper within minutes.</li>
            </ul>
            <div
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/signup" // Placeholder link, update as needed
                className="px-8 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-lg"
              >
                Try Now For Free
              </Link>
            </div>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              Get free 50 credits on signup!
            </p>
          </div>

          {/* Right Column: Image/SafariMockup - Reverted to previous state */}
          <div className="absolute w-1/2 right-0 bottom-0" style={{minHeight: '300px'}}>
            <motion.div
              className="absolute top-0 bottom-0 right-0"
              initial={{opacity: 0, y: "25%"}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: [0.25, 1, 0.5, 1]}}
            >
              <Safari
                imageSrc="/hero/product-sc.png"
                className="w-full h-auto shadow-2xl z-50 flex-grow"
                url="https://app.claexa.com"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
