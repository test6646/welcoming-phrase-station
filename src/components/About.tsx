import React from 'react';
import { Award, Camera, Users, Star } from 'lucide-react';

const About = () => {
  const owners = [
    {
      name: 'Alpesh Patel',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Bhavesh Patel',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const achievements = [
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Camera, number: '1000+', label: 'Events Captured' },
    { icon: Star, number: '5★', label: 'Rated Service' }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            About Our Studio
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Award Photo and Description (Left Column) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1515045281548-04e9c0d0e0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Award Winning Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                  Our Journey to Excellence
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Prit Photo has been capturing timeless moments for over 8 years. Our award-winning work reflects our passion for photography, blending creativity with tradition to create memories that last a lifetime.
                </p>
              </div>
            </div>
          </div>

          {/* Owners and Stats (Right Column) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Both Owners in Single Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-primary/10">
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-6 text-center">
                Founders
              </h3>
              <div className="flex flex-row gap-6 justify-between">
                {owners.map((owner, index) => (
                  <div key={index} className="flex flex-col items-center text-center flex-1">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/30 group-hover:ring-primary/40 transition-all duration-300">
                        <img
                          src={owner.image}
                          alt={owner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Camera className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">
                      {owner.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary/10"
                >
                  <div className="text-primary mb-1">
                    <achievement.icon className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600 text-sm">
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