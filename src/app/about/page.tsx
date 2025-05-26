import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Sparkles } from 'lucide-react'; // Example icons
import React from 'react';

export const metadata: Metadata = {
  title: 'About Claexa AI | Our Story - Built by Students, Trusted by Teachers',
  description: 'Learn about Claexa AI, a platform built by college students Soumajit Ghosh and Saurodip Singha, now helping hundreds of teachers daily. Discover our mission and vision.',
  keywords: 'About Claexa AI, Soumajit Ghosh, Saurodip Singha, AI in education, edtech startup, student project, teacher tools',
};

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-10 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Built by Students,<br />Trusted by Teachers.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Claexa AI began as an ambitious college project by two students, <strong className="text-foreground">Soumajit Ghosh</strong> and <strong className="text-foreground">Saurodip Singha</strong>. What started as a passion for AI and education has blossomed into a platform that now proudly assists hundreds of teachers in their day-to-day tasks, streamlining workflows and enhancing the learning experience.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <Link href="/features">
                    Explore Features
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column: Placeholder for Image/Graphic (Optional) */}
            <div className="hidden md:flex items-center justify-center p-8 bg-primary/10 rounded-lg shadow-xl aspect-square">
              {/* You can replace this with an <Image /> component or a more complex graphic */}
              <Sparkles size={128} className="text-primary opacity-50" />
              {/* Or perhaps an illustration representing students/teachers/technology */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section (Example - can be expanded) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            To empower educators with intelligent, intuitive, and accessible AI tools that save time, enhance teaching quality, and foster a more engaging learning environment for students everywhere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <Users size={32} className="text-primary mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Teacher-Centric</h3>
              <p className="text-sm text-muted-foreground">Designed with educators' needs at the core.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <BookOpen size={32} className="text-primary mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Enhance Learning</h3>
              <p className="text-sm text-muted-foreground">Tools that support better educational outcomes.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <Sparkles size={32} className="text-primary mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">AI Innovation</h3>
              <p className="text-sm text-muted-foreground">Leveraging cutting-edge AI for practical solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* You can add more sections like 'Our Vision', 'Meet the Team' etc. */}
    </div>
  );
};

export default AboutPage;
