import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import "./theme.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {PostHogProvider} from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://claexa.com'), // Added metadataBase
  title: "Claexa AI - Free AI Question Paper Generator",
  description: "Instantly generate question papers, assessments, and more with Claexa AI's powerful AI tools designed for students and teachers.",
  keywords: "Claexa AI, Claexa, question paper generator, exam maker, generate question paper, question paper AI, free question paper generator, AI tools for education, AI assessment tools, AI learning tools, AI for students, AI for educators",
  openGraph: {
    title: "Claexa AI - Free AI Question Paper Generator",
    description: "Instantly generate question papers, assessments, and more with Claexa AI's powerful AI tools designed for students and teachers.",
    url: "https://claexa.com",
    siteName: "Claexa AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo/loco-c.png", // Updated logo path
        width: 1200,
        height: 630,
        alt: "Claexa AI - Free AI Question Paper Generator",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Claexa AI - Free AI Question Paper Generator", // Standardized title
    description: "Instantly generate question papers, assessments, and more with Claexa AI's powerful AI tools designed for students and teachers.", // Standardized description
    images: ["/logo/loco-c.png"], // Updated logo path
    site: "@ClaexaAI"
  }
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
    >
    <PostHogProvider>
      <Header/>
      <main className="flex-grow">
        {children}
      </main>
      <Footer/>
    </PostHogProvider>
    </body>
    </html>
  );
}
