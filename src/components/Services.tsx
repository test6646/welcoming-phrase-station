import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Heart,
  IndianRupee,
  Baby,
  Gem,
  UserRound,
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState('wedding');

  const services = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      icon: Camera,
      heroImage: 'https://images.unsplash.com/photo-1519741497674-411a9c4091c8?auto=format&fit=crop&w=800&h=400&q=80',
      heroImageSmall: 'https://images.unsplash.com/photo-1519741497674-411a9c4091c8?auto=format&fit=crop&w=500&h=250&q=80',
      images: [
        'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=400&h=600&q=60',
        'https://images.unsplash.com/photo-1511285605577-4d62fb50d2b7?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1505233528-7f43913a47a6?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 'prewedding',
      title: 'Pre-Wedding Shoots',
      icon: Heart,
      heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=800&h=400&q=80',
      heroImageSmall: 'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=500&h=250&q=80',
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=400&h=600&q=60',
        'https://images.unsplash.com/photo-1519741497674-411a9c4091c8?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 'traditional',
      title: 'Traditional Ceremonies',
      icon: IndianRupee,
      heroImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
      heroImageSmall: 'https://images.unsplash.com/photo-1571055135623-f1ab99f76c2b?auto=format&fit=crop&w=500&h=250&q=80',
      images: [
        'https://images.unsplash.com/photo-1571055135623-f1ab99f76c2b?auto=format&fit=crop&w=400&h=600&q=60',
        'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 'kids',
      title: 'Kids Photography',
      icon: Baby,
      heroImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
      heroImageSmall: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&h=250&q=80',
      images: [
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&h=600&q=60',
        'https://images.unsplash.com/photo-1519741497674-411a9c4091c8?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 'ring',
      title: 'Ring Ceremony',
      icon: Gem,
      heroImage: 'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=800&h=400&q=80',
      heroImageSmall: 'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=500&h=250&q=80',
      images: [
        'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=400&h=600&q=60',
        'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1519741497674-411a9c4091c8?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 'portrait',
      title: 'Portrait Photography',
      icon: UserRound,
      heroImage: 'https://images.unsplash.com/photo-1506794778202-36a4277b4a2a?auto=format&fit=crop&w=800&h=400&q=80',
      heroImageSmall: 'https://images.unsplash.com/photo-1506794778202-36a4277b4a2a?auto=format&fit=crop&w=500&h=250&q=80',
      images: [
        'https://images.unsplash.com/photo-1506794778202-36a4277b4a2a?auto=format&fit=crop&w=400&h=600&q=60',
        'https://images.unsplash.com/photo-1511285560929-80b456feabc1?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1519227357-2b34e0b7026b?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
  ];

  const activeServiceData = services.find((service) => service.id === activeService);

  useEffect(() => {
    // Force re-render on service change
  }, [activeService]);

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-20 bg-accent-light dark:bg-accent-light">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/20 text-primary font-sans font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-main dark:text-text-primary mb-6">
            Explore Our Photography Services
          </h2>
        </motion.div>

        <div className="bg-card dark:bg-card glass-effect rounded-2xl shadow-lg overflow-hidden border border-border">
          {/* Mobile Dropdown */}
          <div className="block sm:hidden p-6">
            <select
              value={activeService}
              onChange={(e) => setActiveService(e.target.value)}
              className="w-full p-4 rounded-lg bg-card dark:bg-card text-main dark:text-text-primary border border-border focus:outline-none focus:ring-2 focus:ring-primary text-lg shadow-sm appearance-none cursor-pointer hover:bg-primary/5 transition-colors duration-200"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.5rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              {services.map((service) => (
                <option 
                  key={service.id} 
                  value={service.id}
                  className="bg-card dark:bg-card text-main dark:text-text-primary py-3"
                >
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Sidebar and Content */}
          <div className="hidden sm:flex sm:flex-col lg:flex-row">
            <div className="sm:w-full lg:w-2/5 bg-card dark:bg-card p-8 border-r border-border">
              <nav className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left p-4 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                        activeService === service.id
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-main dark:text-text-primary hover:bg-primary/10'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`p-2 rounded-md ${
                        activeService === service.id ? 'bg-primary-foreground/20' : 'bg-primary/10'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-medium text-base">{service.title}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>

            <div className="sm:w-full lg:w-3/5 p-8">
              {activeServiceData && (
                <div className="flex flex-col">
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={activeService}
                  >
                    <img
                      src={activeServiceData.heroImage}
                      srcSet={`${activeServiceData.heroImageSmall} 500w, ${activeServiceData.heroImage} 800w`}
                      sizes="(max-width: 640px) 500px, 800px"
                      alt={`${activeServiceData.title} Hero`}
                      className="w-full h-auto object-cover rounded-lg shadow-md hover-lift max-h-[280px]"
                    />
                  </motion.div>

                  <div className="grid grid-cols-3 gap-4">
                    {activeServiceData.images.map((image, index) => (
                      <motion.div
                        key={`${activeService}-${index}`}
                        className="relative w-full aspect-[4/3]"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: index * 0.1 }}
                      >
                        <img
                          src={image}
                          alt={`${activeServiceData.title} ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md hover-lift"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Content - Bento Grid Layout */}
          <div className="block sm:hidden p-6">
            {activeServiceData && (
              <div className="flex flex-col space-y-4">
                {/* Large Image - 9:16 ratio */}
                <motion.div
                  className="w-full aspect-[9/16]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={`${activeService}-main`}
                >
                  <img
                    src={activeServiceData.images[0]}
                    alt={`${activeServiceData.title} Main`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </motion.div>

                {/* Two smaller images below - 50% size each */}
                <div className="grid grid-cols-2 gap-3">
                  {activeServiceData.images.slice(1, 3).map((image, index) => (
                    <motion.div
                      key={`${activeService}-small-${index}`}
                      className="relative w-full aspect-square"
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: (index + 1) * 0.1 }}
                    >
                      <img
                        src={image}
                        alt={`${activeServiceData.title} ${index + 2}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
