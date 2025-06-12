
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mobileImages = [
    '/images/hero/01.jpg',
    '/images/hero/02.jpg',
    '/images/hero/03.jpg',
  ];

  const desktopImages = [
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1529636790622-4949a188de1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mobileImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [mobileImages.length]);

  return (
    <section id="hero" className="relative w-full max-h-screen aspect-[9/16] sm:aspect-[16/9] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {mobileImages.map((image, index) => (
          <div
            key={`mobile-${index}`}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out sm:hidden ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Wedding Photography Mobile ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>
        ))}
        {desktopImages.map((image, index) => (
          <div
            key={`desktop-${index}`}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out hidden sm:block ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Wedding Photography Desktop ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Main Hashtag */}
      <div className="absolute bottom-28 sm:bottom-20 md:bottom-32 left-0 right-0 z-10 text-center text-white px-4 sm:px-6 w-full max-w-6xl mx-auto">
        <h1 className="text-[3.5vh] sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-primary font-bold leading-tight text-white break-words">
          #AJourneyOfLoveByPritPhoto
        </h1>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col space-y-2 sm:space-y-3 z-20">
        {mobileImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1 h-5 sm:h-6 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
