import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ReviewSection from '@/components/ReviewSection';
import FeaturesSection from '@/components/FeaturesSection';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export const metadata: Metadata = {
  title: "Claexa AI - Free AI Question Paper Generator | Homepage",
  description: "Welcome to Claexa AI! Discover our free AI question paper generator and create assessments, quizzes, and exams effortlessly. Perfect for teachers and students.",
  keywords: "Claexa AI, Claexa, homepage, free AI question paper generator, exam maker, generate question paper, question paper AI, AI tools for education, AI assessment tools, AI learning tools, AI for students, AI for educators",
  openGraph: {
    title: "Claexa AI - Free AI Question Paper Generator",
    description: "Welcome to Claexa AI! Discover our free AI question paper generator and create assessments, quizzes, and exams effortlessly. Perfect for teachers and students.",
    url: "https://claexa.com",
    siteName: "Claexa AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo/loco-c.png",
        width: 1200,
        height: 630,
        alt: "Claexa AI - Free AI Question Paper Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claexa AI - Free AI Question Paper Generator | Homepage",
    description: "Welcome to Claexa AI! Discover our free AI question paper generator for teachers and students.",
    images: ["/logo/loco-c.png"],
    site: "@ClaexaAI"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Claexa AI",
  "url": "https://claexa.com",
  "logo": "/logo/loco-c.png",
  "sameAs": [
    "https://twitter.com/ClaexaAI" // From your Twitter metadata. Add other social profiles if available.
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Claexa AI",
  "url": "https://claexa.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://claexa.com/search?q={search_term_string}" // Placeholder: Update if you have site search.
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Claexa AI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://claexa.com/og-image.jpg" // Placeholder
    }
  }
};

export default function HomePage() {
  return (
    <ScrollArea>
      <div className={"w-full overflow-x-hidden"}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <HeroSection/>
        <ReviewSection/>
        <FeaturesSection/>
      </div>
    </ScrollArea>
  );
}
