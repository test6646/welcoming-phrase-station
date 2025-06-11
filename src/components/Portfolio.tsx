import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

const Carousel3D = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const totalSlides = slides.length;
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalSlides / 2) {
      normalizedDiff = diff > 0 ? diff - totalSlides : diff + totalSlides;
    }
    return normalizedDiff;
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <style>
        {`
          .fade-mask-right {
            mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
          }
          .fade-mask-left {
            mask-image: linear-gradient(to left, transparent, black 30%, black 70%, transparent);
          }
        `}
      </style>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <div className="relative h-[640px] lg:h-[720px] xl:h-[800px] overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {slides.map((slide, index) => {
              const position = getSlidePosition(index);
              const isActive = index === currentIndex;

              if (Math.abs(position) > 1) return null;

              let transform = '';
              let zIndex = 1;
              let scale = 0.9;
              let maskClass = '';

              if (position === 0) {
                transform = 'translateX(0%) translateZ(100px) rotateY(0deg)';
                zIndex = 10;
                scale = 1;
              } else if (position === 1) {
                transform = `translateX(50%) translateZ(-50px) rotateY(-20deg)`;
                zIndex = 5;
                scale = 0.75;
                maskClass = 'fade-mask-right';
              } else if (position === -1) {
                transform = `translateX(-50%) translateZ(-50px) rotateY(20deg)`;
                zIndex = 5;
                scale = 0.75;
                maskClass = 'fade-mask-left';
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-600 ease-in-out cursor-pointer w-[45vw] max-w-[780px] min-w-[450px] ${maskClass}`}
                  style={{
                    transform: `${transform} scale(${scale})`,
                    zIndex,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                  }}
                  onClick={() => !isActive && goToSlide(index)}
                >
                  <div className="bg-white border border-primary/10 rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/9]">
                      <picture>
                        <source media="(max-width: 640px)" srcSet={slide.mobileSrc} />
                        <img
                          src={slide.desktopSrc}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                          loading={isActive ? 'eager' : 'lazy'}
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    {isActive && (
                      <div className="p-8 space-y-4">
                        <h3 className="font-serif font-bold text-gray-800 text-3xl">
                          {slide.title}
                        </h3>
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-lg py-6"
                        >
                          {slide.button}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <div className="relative h-[480px] overflow-visible px-4">
          <div className="flex items-center justify-center gap-2 h-full perspective-800">
            {slides.map((slide, index) => {
              const position = getSlidePosition(index);
              const isActive = index === currentIndex;

              if (Math.abs(position) > 1) return null;

              let scale = 0.55;
              let zIndex = 1;
              let maskClass = '';

              if (position === 0) {
                scale = 0.9;
                zIndex = 10;
              } else if (position === 1) {
                scale = 0.75;
                zIndex = 5;
                maskClass = 'fade-mask-right';
              } else if (position === -1) {
                scale = 0.75;
                zIndex = 5;
                maskClass = 'fade-mask-left';
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out cursor-pointer w-[80vw] max-w-[320px] ${maskClass}`}
                  style={{
                    transform: `translateX(${position * 40}%) scale(${scale})`,
                    zIndex,
                    willChange: 'transform, opacity',
                  }}
                  onClick={() => !isActive && goToSlide(index)}
                >
                  <div className="bg-white border border-primary/10 rounded-xl overflow-hidden shadow-xl">
                    <div className="relative aspect-[4/5]">
                      <img
                        src={slide.mobileSrc}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading={isActive ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    {isActive && (
                      <div className="p-6 space-y-4">
                        <h3 className="font-serif font-bold text-gray-800 text-2xl">
                          {slide.title}
                        </h3>
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-base py-5"
                        >
                          {slide.button}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-12' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioSlides = [
    {
      title: 'Traditional Wedding',
      button: 'View Gallery',
      desktopSrc: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Pre-Wedding Romance',
      button: 'View Gallery',
      desktopSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Mehendi Ceremony',
      button: 'View Gallery',
      desktopSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Kids Portrait',
      button: 'View Gallery',
      desktopSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Portrait Session',
      button: 'View Gallery',
      desktopSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    },
    {
      title: 'Wedding Couple',
      button: 'View Gallery',
      desktopSrc: 'https://images.unsplash.com/photo-158333900-3579-d0e730-3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      mobileSrc: 'https://images.unsplash.com/photo-158333900-3579-d0e730-3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1200&q=80',
    }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-white/30 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Moments by <span className="text-white/80">Prit Photo</span>
          </h2>
        </div>
        <Carousel3D slides={portfolioSlides} />
      </div>
    </section>
  );
};

export default Portfolio;
