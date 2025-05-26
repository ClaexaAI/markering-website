"use client"; // Required for event handlers like onClick if we add more interactivity later

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--header-height,8rem))] text-center px-4 bg-background text-foreground">
      {/* Adjust min-h if header/footer height is known, e.g., min-h-[calc(100vh-10rem)] */}
      {/* Using a generic var(--header-height) that you might define in globals.css or calculate dynamically */}
      <AlertTriangle size={64} className="text-destructive mb-6" />
      
      <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
        Page Not Found
      </h2>
      <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-md">
        Oops! The page you are looking for does not exist, might have been removed, or is temporarily unavailable.
      </p>
      
      <Button asChild size="lg">
        <Link href="/">
          <Home size={20} className="mr-2" />
          Go to Homepage
        </Link>
      </Button>
    </div>
  );
}
