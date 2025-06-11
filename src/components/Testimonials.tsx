import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya & Arjun',
      location: 'Bhavnagar',
      rating: 5,
      text: 'Prit Digital Studio made our wedding day absolutely magical! Their attention to detail and ability to capture candid moments is incredible. Every photo tells our love story beautifully.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b898?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      event: 'Wedding Photography',
    },
    {
      name: 'Kavya & Rohit',
      location: 'Botad',
      rating: 5,
      text: 'From our pre-wedding shoot to the reception, Prit captured every emotion perfectly. The team is professional, creative, and made us feel comfortable throughout. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      event: 'Pre-Wedding & Wedding',
    },
    {
      name: 'Sneha Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Amazing work on our traditional ceremonies! They understood the cultural significance of each ritual and captured them beautifully. The mehendi photos are absolutely stunning.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      event: 'Traditional Ceremonies',
    },
    {
      name: 'Ravi & Meera',
      location: 'Rajkot',
      rating: 5,
      text: 'Prit Digital Studio exceeded our expectations! Their creativity in capturing our sangeet ceremony was outstanding. Every photo is a masterpiece that we will treasure forever.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      event: 'Sangeet Photography',
    },
    {
      name: 'Anjali Shah',
      location: 'Surat',
      rating: 5,
      text: 'The kids photography session was fantastic! They were so patient with our little ones and captured their personalities perfectly. The family portraits are our new favorites.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      event: 'Kids & Family Photography',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Animation variants
  const slideVariants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-accent-light dark:bg-accent-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/20 text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 sm:mb-6">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-main dark:text-text-primary mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-secondary dark:text-text-secondary text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the experiences of our satisfied clients who trusted Prit Digital Studio to capture their most cherished moments.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl sm:max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentTestimonial}
                className="w-full flex-shrink-0 px-2 sm:px-4"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.div
                  className="bg-card dark:bg-card glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg text-center relative border border-border"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-primary/20 dark:text-primary/20 hidden sm:block">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary mx-0.5" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-sm sm:text-base lg:text-lg text-main dark:text-text-primary mb-6 sm:mb-8 leading-relaxed font-sans max-w-2xl sm:max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-primary/30 dark:border-primary/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="text-center sm:text-left">
                      <div className="font-semibold text-main dark:text-text-primary text-sm sm:text-base">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-xs sm:text-sm text-secondary dark:text-text-secondary">
                        {testimonials[currentTestimonial].location}
                      </div>
                      <div className="text-xs sm:text-sm text-primary dark:text-primary font-medium mt-1">
                        {testimonials[currentTestimonial].event}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary scale-110 sm:scale-125' : 'bg-primary/30 hover:bg-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;