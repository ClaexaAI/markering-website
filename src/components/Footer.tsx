
import Link from 'next/link';
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourcompany' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/yourcompany' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/yourcompany' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/yourcompany' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-bold text-white hover:text-opacity-80 transition-colors">
              Claexa AI
            </Link>
            <p className="text-sm text-gray-400">
              Empowering educators and students with cutting-edge AI solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-[var(--primary)] transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Get in Touch</h5>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={18} className="text-[var(--primary)]" />
                <a href="mailto:claexa.ai.mail@gmail.com" className="hover:text-[var(--primary)] transition-colors">claexa.ai.mail@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={18} className="text-[var(--primary)]" />
                <a href="tel:+917980024649" className="hover:text-[var(--primary)] transition-colors">+91 79800 24649</a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin size={18} className="text-[var(--primary)]" />
                <span>Nalikul, Hooghly, India 712407</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[var(--primary)] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Claexa AI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://app.claexa.com/legal?tab=privacy" target={"_blank"} className="hover:text-[var(--primary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="https://app.claexa.com/legal?tab=terms" target={"_blank"} className="hover:text-[var(--primary)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
