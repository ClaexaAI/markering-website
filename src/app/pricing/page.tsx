import type {Metadata} from 'next';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {ArrowRight, Coins, ShieldCheck, Sparkles} from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Flexible Pricing - Claexa AI | Affordable AI Credits',
  description: 'Explore Claexa AI\'s transparent pricing. Pay only ₹0.4 INR per credit for powerful AI tools. Secure payments, flexible options, no hidden fees.',
  keywords: 'Claexa AI pricing, AI credits, affordable AI, pay-as-you-go AI, question generation pricing',
};

const PricingPage = () => {
  const features = [
    {
      icon: <ShieldCheck size={56} className="text-green-500 mb-4"/>,
      title: 'Secure & Reliable Transactions',
      description: 'Your payments are processed securely with industry-leading encryption and trusted payment gateways.',
    },
    {
      icon: <Coins size={56} className="text-yellow-500 mb-4"/>,
      title: 'Ultimate Flexibility',
      description: 'Purchase credits as you need them. No monthly commitments, giving you complete control over your spending.',
    },
    {
      icon: <Sparkles size={56} className="text-purple-500 mb-4"/>,
      title: 'Clearly Affordable',
      description: 'Access powerful AI tools at a straightforward price. Transparent, budget-friendly, and packed with value.',
    },
  ];

  return (
    <div className="bg-secondary from-background to-secondary/50 text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Simple, <span className="text-primary">Flexible Pricing</span> That Scales With You
          </h1>
          <p className="text-6xl md:text-8xl font-extrabold text-primary my-8 md:my-12">
            ₹0.4 <span className="text-2xl md:text-4xl font-semibold text-muted-foreground">per Credit</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            No subscriptions. No hidden fees. Only pay for the AI power you actually use with our transparent
            credit-based system.
          </p>
          <Button size="lg" asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Link href="https://app.claexa.com/purchase-credits"> {/* Update this link to your credit purchase page */}
              Get Started with Credits <ArrowRight className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Our Credit System?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              We believe in straightforward pricing that puts you in control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: How it works or FAQ section can be added here */}
      <section className="py-16 md:py-24 text-center bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Supercharge Your Workflow?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of educators and students leveraging Claexa AI for smarter, faster results.
          </p>
          <Button size="lg" asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transform hover:scale-105 transition-transform duration-200 py-4 px-8 text-lg">
            <Link href="https://app.claexa.com/login"> {/* Update this link to your registration page */}
              Sign Up & Get Free Trial Credits
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
