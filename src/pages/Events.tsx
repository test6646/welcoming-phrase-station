import React from 'react';
import { Camera, ArrowLeft, Heart, Sparkles, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();

  const eventsList = [
    {
      id: 'jay-ritika-wedding',
      title: 'Jay & Ritika',
      type: 'Wedding',
      icon: Heart,
      coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'December 2023',
    },
    {
      id: 'arjun-priya-wedding',
      title: 'Arjun & Priya',
      type: 'Wedding',
      icon: Heart,
      coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'November 2023',
    },
    {
      id: 'rahul-sara-prewedding',
      title: 'Rahul & Sara',
      type: 'Pre-Wedding',
      icon: Sparkles,
      coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'October 2023',
    },
    {
      id: 'dev-kavya-prewedding',
      title: 'Dev & Kavya',
      type: 'Pre-Wedding',
      icon: Sparkles,
      coverImage: 'https://images.unsplash.com/photo-1543525004-1dc1e3141042?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'September 2023',
    },
    {
      id: 'aarav-kids',
      title: 'Little Aarav',
      type: 'Kids Photography',
      icon: Baby,
      coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'August 2023',
    },
    {
      id: 'rohit-meera-ring',
      title: 'Rohit & Meera',
      type: 'Ring Ceremony',
      icon: Sparkles,
      coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'July 2023',
    },
  ];

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-primary-foreground hover:bg-primary-foreground/20 mb-6 px-4 py-2 rounded-none"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Event Collections
            </h1>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventsList.map((event) => {
              const IconComponent = event.icon;
              return (
                <div
                  key={event.id}
                  onClick={() => handleEventClick(event.id)}
                  className="group cursor-pointer bg-card shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Event Cover Image */}
                  <div className="aspect-[3/2] overflow-hidden relative">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  {/* Event Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-none">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-main group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-secondary text-xs">{event.type}</p>
                      </div>
                    </div>
                    <p className="text-secondary text-xs font-medium">{event.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary text-primary-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Book Your Event?</h2>
          <Button
            onClick={() => navigate('/')}
            className="bg-card text-primary hover:bg-card/90 px-6 py-3 text-base font-medium rounded-none"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;