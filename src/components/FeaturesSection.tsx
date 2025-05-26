"use client";

import React from 'react';
import { motion } from 'motion/react'; 
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge'; 
import { ArrowRight } from 'lucide-react'; 

interface Feature {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'coming soon';
  href?: string;
}

const featuresData: Feature[] = [
  {
    id: 'qpg',
    title: 'Question Paper Generation',
    description: 'Create professional assessment materials in seconds.',
    status: 'available',
    href: '/features/question-paper-generator', 
  },
  {
    id: 'ac',
    title: 'Assignment Checker',
    description: 'Automatically evaluate and grade student submissions.',
    status: 'coming soon',
  },
  {
    id: 'smm',
    title: 'Study Material Maker',
    description: 'Generate comprehensive learning resources effortlessly.',
    status: 'coming soon',
  },
  {
    id: 'qs',
    title: 'Question Solver',
    description: 'Get instant solutions and explanations for complex problems.',
    status: 'coming soon',
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const isComingSoon = feature.status === 'coming soon';

  const cardContent = (
    <motion.div 
      className={cn(
        'group relative flex flex-col justify-between rounded-xl p-8 h-full min-h-[220px] md:min-h-[250px]', 
        'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300',
        isComingSoon ? 'opacity-70 cursor-default' : 'cursor-pointer'
      )}
      whileHover={!isComingSoon ? { scale: 1.03, y: -5 } : {}} 
      transition={{ type: 'spring', stiffness: 300, damping: 20 }} 
    >
      <div>
        {isComingSoon && (
          <Badge 
            variant="outline"
            className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-700 dark:text-yellow-100 dark:border-yellow-500"
          >
            Coming Soon
          </Badge>
        )}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
          {feature.description}
        </p>
      </div>
      {!isComingSoon && feature.href && (
        <div className="mt-auto">
          <span className="text-sm md:text-base font-medium text-primary group-hover:underline flex items-center">
            Learn More <ArrowRight className="ml-1 h-4 w-4 md:h-5 md:w-5" />
          </span>
        </div>
      )}
    </motion.div>
  );

  if (!isComingSoon && feature.href) {
    return (
      <a href={feature.href} className="block h-full no-underline">
        {cardContent} 
      </a>
    );
  }

  return cardContent;
};

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Explore Our Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Claexa provides a suite of AI-driven tools designed to streamline your educational workflow and enhance learning outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
