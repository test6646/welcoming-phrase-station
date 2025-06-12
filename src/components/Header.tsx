
import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Instagram, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
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

  const handleNavClick = (item) => {
    if (item.type === 'navigate') {
      handleEventsClick();
    } else {
      scrollToSection(item.href);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-lg' : 'bg-card'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo Group */}
          <div className="flex items-center space-x-4">
            <div
              className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md"
              style={{ borderRadius: 0 }}
            >
              <Camera className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-primary font-bold text-main">
                Prit Photo
              </h1>
              <p className="text-xs text-secondary font-secondary">Digital Studio</p>
            </div>
          </div>

          {/* Desktop Navigation Group */}
          <div className="hidden xl:flex items-center justify-center flex-grow">
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-main hover:text-primary transition-colors duration-300 font-secondary font-medium text-sm px-4 py-2 hover:bg-accent rounded-none"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Buttons Group */}
          <div className="hidden xl:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://instagram.com/prit_digital_photo', '_blank')}
              className="text-main hover:text-primary p-3 hover:bg-accent"
              style={{ borderRadius: 0 }}
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-main hover:text-primary p-3 hover:bg-accent"
              style={{ borderRadius: 0 }}
              aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-secondary font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{ borderRadius: 0 }}
            >
              Book Session
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center space-x-2 xl:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://instagram.com/prit_digital_photo', '_blank')}
              className="text-main hover:text-primary p-3 hover:bg-accent"
              style={{ borderRadius: 0 }}
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-main hover:text-primary p-3 hover:bg-accent"
              style={{ borderRadius: 0 }}
              aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-main p-3 z-[60]"
              style={{ borderRadius: 0 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-20 bg-card z-40">
          <nav className="flex flex-col items-center justify-center py-8 px-6 space-y-4 h-full">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-center text-main hover:text-primary transition-colors py-0.5 font-secondary font-medium text-lg border-b border-border rounded-none w-full"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-4 mt-8 w-full">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 font-secondary font-semibold"
                style={{ borderRadius: 0 }}
              >
                Book Session
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
