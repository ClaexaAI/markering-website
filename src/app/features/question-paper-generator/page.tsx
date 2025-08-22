import type { Metadata } from 'next';
import Link from 'next/link';
import { Settings, ListChecks, ShoppingCart, FileText } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Question Paper Generator Feature - Claexa AI',
  description: 'Discover the powerful features of Claexa AI\'s Question Paper Generator. Easily configure courses, manage questions, select topics, and create comprehensive exam papers in minutes.',
  keywords: 'Claexa AI, question paper generator, AI exam builder, course configuration, topic selection, automated question papers',
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-card p-6 rounded-lg shadow-md border border-border flex flex-col items-start">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-semibold text-card-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const QuestionPaperGeneratorPage = () => {
  const features = [
    {
      icon: <Settings size={32} />,
      title: 'Advanced Course Configuration',
      description: 'Tailor question papers to your exact needs. Define the course name (e.g., \"Introduction to Python\"), select the language (e.g., \"English\"), specify the academic level or type (e.g., \"Bachelors\"), and set the overall difficulty (e.g., 8/10) to ensure questions match your curriculum perfectly.',
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Intuitive Question Cart',
      description: 'Easily manage the questions for your paper. Specify the number of questions needed for a particular type or section (e.g., 5 text-based questions), assign marks per question (e.g., \"2 marks each\"), and define the cognitive or difficulty level for those specific questions (e.g., \"Level: 6\"). The system automatically calculates total marks (e.g., \"5 x 2 = 10 marks\") for clarity.',
    },
    {
      icon: <ListChecks size={32} />,
      title: 'Precise Topic Selection',
      description: 'Ensure your question paper covers the right material by selecting specific topics from your course syllabus. Whether you need questions from \"all\" topics or a targeted subset, our generator gives you the control to focus on relevant areas.',
    },
    {
      icon: <FileText size={32} />,
      title: 'Multiple Question Types',
      description: 'Support for various question formats, allowing you to create diverse and comprehensive assessments. (Implied from \"Text\" in Question Cart, can be expanded).',
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Effortless Question Paper Generation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Create customized, high-quality question papers in minutes with Claexa AI. Focus on teaching, not tedious paper creation.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Link href="https://app.claexa.com/register"> {/* Update this link */}
              Try the Generator Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Features at a Glance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Everything you need to build the perfect exam paper, seamlessly integrated.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary/10 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Revolutionize Your Exam Preparation?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Spend less time on administrative tasks and more time inspiring your students. Claexa AI is here to help.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Link href="https://app.claexa.com/login"> {/* Update this link */}
              Get Started for Free
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default QuestionPaperGeneratorPage;
