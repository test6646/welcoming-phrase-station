
import React from 'react';
import { Award, Camera, Users, Star } from 'lucide-react';

const About = () => {
  const owners = [
    {
      name: 'Alpesh Patel',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Bhavesh Patel',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  const achievements = [
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Camera, number: '1000+', label: 'Events Captured' },
    { icon: Star, number: '5★', label: 'Rated Service' },
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block bg-primary/20 text-primary font-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 mb-4 rounded-none">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-primary font-bold text-main mb-4 sm:mb-6 text-center">
            Our Studio Story
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-card p-8 shadow-xl h-full flex flex-col border border-primary/10" style={{ borderRadius: 0 }}>
              <div className="w-full h-56 sm:h-64 lg:h-80 overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1515045281548-04e9c0d0e0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Award Winning Photo"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-primary font-bold text-main mb-3">
                  Our Journey to Excellence
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  Prit Photo has been capturing timeless moments for over 8 years. Our award-winning work reflects our passion for photography, blending creativity with tradition to create memories that last a lifetime.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-primary/10" style={{ borderRadius: 0 }}>
              <h3 className="text-xl font-primary font-bold text-main mb-6 text-center">
                Founders
              </h3>
              <div className="flex flex-row gap-6 justify-between">
                {owners.map((owner, index) => (
                  <div key={index} className="flex flex-col items-center text-center flex-1">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 overflow-hidden">
                        <img
                          src={owner.image}
                          alt={owner.name}
                          className="w-full h-full object-cover"
                          style={{ borderRadius: 0 }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2" style={{ borderRadius: 0 }}>
                        <Camera className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-secondary font-bold text-main">
                      {owner.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card p-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary/10"
                  style={{ borderRadius: 0 }}
                >
                  <div className="text-primary mb-2">
                    <achievement.icon className="w-7 h-7 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-main mb-2 font-primary">
                    {achievement.number}
                  </div>
                  <p className="text-secondary text-sm font-body">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
