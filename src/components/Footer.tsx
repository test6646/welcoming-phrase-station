import React from 'react';
import { Camera, Instagram, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Prit Photo Info */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center border border-primary/20">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-primary font-bold text-foreground">Prit Photo</h3>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed text-center max-w-md font-body">
            Capturing life's precious moments with artistic excellence. Specializing in Indian wedding ceremonies and traditional events.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground font-body">
              © {currentYear} Prit Photo. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/prit_digital_photo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300 border border-border hover:border-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300 border border-border hover:border-primary"
                aria-label="Contact us on WhatsApp"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@pritdigitalstudio.com"
                className="w-12 h-12 bg-accent hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300 border border-border hover:border-primary"
                aria-label="Send us an email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-accent hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300 border border-border hover:border-primary"
                aria-label="Back to top"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
            </div>

            {/* Tagline */}
            <div className="text-sm text-muted-foreground font-secondary">
              Designed with <span className="text-primary">♥</span> for capturing love stories
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;