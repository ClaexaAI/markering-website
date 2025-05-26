"use client";

import Link from 'next/link';
import {motion} from 'motion/react';
import {Safari} from '@/components/magicui/safari';

const HeroSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24 lg:py-32 overflow-hidden w-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-8 md:gap-12">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Looking for Question Paper Generator?
            </h1>
            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-xl">
              Try our question paper generator. Make customized question papers for your students within minutes.
            </p>
            <ul className='space-y-2 text-base text-[var(--muted-foreground)]'>
              <li>✅ Easy to use (but highly powerful)</li>
              <li>✅ No credit cards required</li>
              <li>✅ High quality question paper within minutes.</li>
            </ul>
            <div
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://app.claexa.com/"
                className="px-8 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-lg"
              >
                Try Now For Free
              </Link>
            </div>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              Get free 50 credits on signup!
            </p>
          </div>

          {/* Right Column: Image/SafariMockup */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{opacity: 0, y: "15%"}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, ease: [0.25, 1, 0.5, 1]}}
            >
              <Safari
                imageSrc="/hero/product-sc.png"
                className="w-full h-auto shadow-2xl rounded-lg"
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
