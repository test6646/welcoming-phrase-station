import React from 'react';
import { Camera, Instagram, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Prit Photo Info */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center border border-primary/20">
              <Camera className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-main">Prit Photo</h3>
          </div>
          <p className="text-secondary text-base leading-relaxed text-center max-w-md">
            Capturing life's precious moments with artistic excellence. Specializing in Indian wedding ceremonies and traditional events.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-secondary">
              © {currentYear} Prit Photo. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/prit_digital_photo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/80 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/80 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20"
                aria-label="Contact us on WhatsApp"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@pritdigitalstudio.com"
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/80 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20"
                aria-label="Send us an email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/80 flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20"
                aria-label="Back to top"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
            </div>

            {/* Tagline */}
            <div className="text-sm text-secondary">
              Designed with <span className="text-primary">♥</span> for capturing love stories
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;