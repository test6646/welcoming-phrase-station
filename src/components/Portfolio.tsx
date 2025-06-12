import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel3D = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 650);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 650);
  }, [slides.length, isTransitioning]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isTransitioning) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isTransitioning]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || isTransitioning) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slideVariants = {
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      },
    },
    left: {
      x: '-55%',
      opacity: 0.5,
      scale: 0.85,
      zIndex: 5,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      },
    },
    right: {
      x: '55%',
      opacity: 0.5,
      scale: 0.85,
      zIndex: 5,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      },
    },
    hidden: {
      x: '100%',
      opacity: 0,
      scale: 0.85,
      zIndex: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.4 }
      },
    },
  };

  const getSlidePosition = (index) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex - 1 + slides.length) % slides.length) return 'left';
    if (index === (currentIndex + 1) % slides.length) return 'right';
    return 'hidden';
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <div className="relative h-[520px] lg:h-[580px] xl:h-[640px] overflow-hidden perspective-1000">
          <AnimatePresence initial={false} mode="sync">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                variants={slideVariants}
                initial="hidden"
                animate={getSlidePosition(index)}
                style={{ willChange: 'transform' }}
              >
                <div className="w-[50vw] max-w-[800px] min-w-[480px]">
                  <div className="bg-card border border-primary/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none">
                    <div className="relative aspect-[16/9]">
                      <picture>
                        <source media="(max-width: 640px)" srcSet={slide.mobileSrc} />
                        <img
                          src={slide.desktopSrc}
                          alt={slide.title}
                          className="w-full h-full object-cover rounded-none"
                          loading="eager"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    {getSlidePosition(index) === 'center' && (
                      <motion.div 
                        className="p-6 flex items-center justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="font-serif font-bold text-main text-xl sm:text-2xl">
                          {slide.title}
                        </h3>
                        <button
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm px-6 py-2 rounded-none border"
                        >
                          {slide.button}
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <div className="relative h-[420px] overflow-hidden px-4 perspective-1000">
          <AnimatePresence initial={false} mode="sync">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                variants={slideVariants}
                initial="hidden"
                animate={getSlidePosition(index)}
                style={{ willChange: 'transform' }}
              >
                <div className="w-[80vw] max-w-[340px]">
                  <div className="bg-card border border-primary/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-none">
                    <div className="relative aspect-[4/4]">
                      <img
                        src={slide.mobileSrc}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-none"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    {getSlidePosition(index) === 'center' && (
                      <motion.div 
                        className="p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="font-serif font-bold text-main text-lg mb-3">
                          {slide.title}
                        </h3>
                        <button
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm px-6 py-2 rounded-none border"
                        >
                          {slide.button}
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioSlides = [
    {
      title: 'Traditional Wedding',
      button: 'View Gallery',
      desktopSrc:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Pre-Wedding Romance',
      button: 'View Gallery',
      desktopSrc:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Mehndi Ceremony',
      button: 'View Gallery',
      desktopSrc:
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc:
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Kids Portrait',
      button: 'View Gallery',
      desktopSrc:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Portrait Session',
      button: 'View Gallery',
      desktopSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Wedding Couple',
      button: 'View Gallery',
      desktopSrc:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-accent/20 text-primary-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 mb-4 rounded-none">
            Our Portfolio
          </span>
          <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-main mb-4 sm:mb-6">
            Moments By Prit Photo
          </h2>
        </motion.div>
        </div>
        <Carousel3D slides={portfolioSlides} />
      </div>
    </section>
  );
};

export default Portfolio;