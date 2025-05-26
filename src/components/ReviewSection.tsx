"use client";

import { Marquee } from "@/components/magicui/marquee"; 
import reviewsData from "../data/reviews.json";
import { cn } from "@/lib/utils"; 

interface Review {
  name: string;
  designation: string;
  institution: string;
  review: string;
}

const reviews: Review[] = reviewsData;

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-lg transition-shadow duration-200",
        // light styles
        "bg-white dark:bg-gray-800",
      )}
    >
      <div className="absolute top-4 left-4 text-5xl text-gray-200 dark:text-gray-600 opacity-50">
        “
      </div>
      <div className="relative z-10">
        <div className="flex flex-row items-center gap-3 mb-3">
          {/* Placeholder for an avatar if you add one later */}
          {/* <img className="rounded-full" width="40" height="40" alt="" src={img} /> */}
          <div className="flex flex-col">
            <figcaption className="text-md font-semibold text-gray-900 dark:text-white">
              {review.name}
            </figcaption>
            <p className="text-xs text-gray-500 dark:text-gray-400">{review.designation} @ {review.institution}</p>
          </div>
        </div>
        <blockquote className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {review.review}
        </blockquote>
      </div>
    </figure>
  );
};

const ReviewSection = () => {
  const firstHalf = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondHalf = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h3 className='text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white'>Trusted by <span className='text-primary'>teachers</span> & <span className='text-primary'>students</span>.</h3>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg space-y-4 md:space-y-6">
          <Marquee pauseOnHover className="[--duration:50s]">
            {firstHalf.map((review, idx) => (
              <ReviewCard key={`first-${idx}`} review={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:50s]">
            {secondHalf.map((review, idx) => (
              <ReviewCard key={`second-${idx}`} review={review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent"></div>
        </div>
    </section>
  );
};

export default ReviewSection;
