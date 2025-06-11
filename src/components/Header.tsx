import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleEventsClick = () => {
    navigate('/events');
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: 'hero', type: 'scroll' },
    { label: 'About', href: 'about', type: 'scroll' },
    { label: 'Services', href: 'services', type: 'scroll' },
    { label: 'Portfolio', href: 'portfolio', type: 'scroll' },
    { label: 'Events', href: '/events', type: 'navigate' },
    { label: 'Reviews', href: 'testimonials', type: 'scroll' },
    { label: 'Contact', href: 'contact', type: 'scroll' },
  ];

  const handleNavClick = (item: any) => {
    if (item.type === 'navigate') {
      handleEventsClick();
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center rounded-xl shadow-md">
              <Camera className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900">
                Prit Photo
              </h1>
              <p className="text-xs text-gray-500">Digital Studio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-4 py-2 rounded-lg hover:bg-primary/10"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden xl:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://instagram.com/prit_digital_photo', '_blank')}
              className="text-gray-700 hover:text-primary p-3 rounded-xl"
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="xl:hidden text-gray-700 p-3 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-md z-40">
            <nav className="flex flex-col py-8 px-6 space-y-4 h-full">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-gray-700 hover:text-primary transition-colors py-3 font-medium text-lg border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://instagram.com/prit_digital_photo', '_blank')}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-xl"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Us
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl"
                >
                  Book Session
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;