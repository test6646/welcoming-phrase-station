import React from 'react';
import { Camera, ArrowLeft, Heart, Sparkles, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';

const EventGallery = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const eventData = {
    'jay-ritika-wedding': {
      title: 'Jay & Ritika',
      type: 'Wedding Ceremony',
      icon: Heart,
      date: 'December 15, 2023',
      location: 'Udaipur, Rajasthan',
      description: 'A beautiful traditional wedding ceremony filled with love, laughter, and unforgettable moments.',
      videos: [
        'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-dancing-4429-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-together-4430-large.mp4',
      ],
      images: [
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1543525004-1dc1e3141042?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1543525004-1dc1e3141042?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
      ],
    },
    // Add more events data as needed
  };

  const event = eventData[eventId || ''];

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-serif font-bold text-foreground mb-4">Event Not Found</h1>
          <Button
            onClick={() => navigate('/events')}
            className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-none"
          >
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = event.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent text-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/events')}
            className="text-foreground hover:bg-background/20 mb-6 px-4 py-2 rounded-none"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-none">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl lg:text-3xl font-serif font-bold">{event.title}</h1>
            </div>
            <p className="text-base text-muted-foreground mb-2">{event.type}</p>
            <p className="text-xs text-muted-foreground">{event.date} • {event.location}</p>
          </div>
        </div>
      </div>

      {/* Event Description */}
      <div className="py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <p className="text-base text-muted-foreground leading-relaxed">{event.description}</p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center text-foreground mb-8">Featured Videos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {event.videos.map((video, index) => (
              <div key={index} className="aspect-video bg-card overflow-hidden shadow-md rounded-none border border-border">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-none"
                >
                  <source src={video} type="video/mp4" />
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Video {index + 1}
                  </div>
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Masonry Gallery */}
      <div className="py-12 lg:py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-center text-foreground mb-8">Photo Gallery</h2>
          {/* Desktop: Multi-column masonry layout */}
          <div className="hidden md:block">
            <div className="columns-3 lg:columns-4 gap-3 space-y-3">
              {event.images.map((image, index) => (
                <div key={index} className="break-inside-avoid mb-3">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-none border border-border">
                      <img
                        src={image}
                        alt={`${event.title} - ${index + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-none"
                        style={{ display: 'block' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: Pinterest-style masonry */}
          <div className="block md:hidden">
            <div className="columns-2 gap-2 space-y-2">
              {event.images.map((image, index) => (
                <div key={index} className="break-inside-avoid mb-2">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-none border border-border">
                      <img
                        src={image}
                        alt={`${event.title} - ${index + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 rounded-none"
                        style={{ display: 'block' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-accent text-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">Love What You See?</h2>
          <Button
            onClick={() => navigate('/')}
            className="bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base font-medium rounded-none"
          >
            Book Your Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;