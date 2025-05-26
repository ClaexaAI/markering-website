import type {Metadata} from 'next';
import Link from 'next/link';
import {Github, Linkedin, Mail, MapPin, Phone, Twitter} from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Claexa AI | Get in Touch - We\'re Here to Help',
  description: 'Contact Claexa AI for support, inquiries, or feedback. Reach us via email, phone, or connect on social media. Our team is ready to assist you.',
  keywords: 'Contact Claexa AI, Claexa AI support, get in touch, Claexa AI email, Claexa AI phone, AI education contact',
};

const ContactPage = () => {
  const contactDetails = [
    {
      icon: <Mail size={24} className="text-primary"/>,
      label: 'Email Us',
      value: 'claexa.ai.mail@gmail.com',
      href: 'mailto:claexa.ai.mail@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-primary"/>,
      label: 'Call Us',
      value: '+91 79800 24649',
      href: 'tel:+917980024649',
    },
    {
      icon: <MapPin size={24} className="text-primary"/>,
      label: 'Our Office',
      value: 'Nalikul, Hooghly, India 712407',
      // No href for address, or link to Google Maps if preferred
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter size={28} className="hover:text-primary transition-colors"/>,
      href: 'https://twitter.com/claexa_ai', // Replace with your Twitter link
      label: 'Twitter',
    },
    {
      icon: <Linkedin size={28} className="hover:text-primary transition-colors"/>,
      href: 'https://linkedin.com/company/claexa-ai', // Replace with your LinkedIn link
      label: 'LinkedIn',
    },
    {
      icon: <Github size={28} className="hover:text-primary transition-colors"/>,
      href: 'https://github.com/claexa', // Replace with your GitHub link
      label: 'GitHub',
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-var(--header-height,4rem))] bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-20 text-center bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>
      </section>

      {/* Contact Details & Socials Section - Full Width */}
      <section className="flex-grow py-12 md:py-16 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">Contact
                Information</h2>
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index}
                       className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border shadow-sm">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-card-foreground">{item.label}</h3>
                      {item.href ? (
                        <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links - Moved and more prominent */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Connect With Us</h2>
              <div className="flex justify-center space-x-6 md:space-x-8">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground p-3 rounded-full hover:bg-primary/10 transition-all duration-200 ease-in-out transform hover:scale-110"
                  >
                    {React.cloneElement(social.icon, {size: 32})}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
