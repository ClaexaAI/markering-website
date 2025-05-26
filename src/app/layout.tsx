import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import "./theme.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claexa AI - Question Paper Generator and AI Tools for Education",
  description: "powerful AI tools for students and educators, including a question paper generator, AI assessment tools, and more. Enhance learning with our innovative solutions.",
  keywords: "Claexa AI, Claexa, question paper generator, exam maker, generate question paper, question paper AI, free question paper generator, AI tools for education, AI assessment tools, AI learning tools, AI for students, AI for educators",
  openGraph: {
    title: "Claexa AI - Question Paper Generator and AI Tools for Education",
    description: "instantly generate question papers, assessments, and more with Claexa AI's powerful AI tools designed for students and educators.",
    url: "https://claexa.com",
    siteName: "Claexa AI",
    images: [
      {
        url: "https://claexa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Claexa AI - Question Paper Generator and AI Tools for Education",
      },
    ],
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
    <Header/>
    <main className="flex-grow">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
