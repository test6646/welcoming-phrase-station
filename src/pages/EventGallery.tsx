
import React from 'react';
import { Camera, ArrowLeft, Heart, Sparkles, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';

const EventGallery = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  // Sample event data - in real app this would come from API/database
  const eventData: { [key: string]: any } = {
    'jay-ritika-wedding': {
      title: 'Jay & Ritika',
      type: 'Wedding Ceremony',
      icon: Heart,
      date: 'December 15, 2023',
      location: 'Udaipur, Rajasthan',
      description: 'A beautiful traditional wedding ceremony filled with love, laughter, and unforgettable moments.',
      videos: [
        'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-dancing-4429-large.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-together-4430-large.mp4'
      ],
      images: [
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1543525004-1dc1e3141042?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&q=80',
        'https://images.unsplash.com/photo-1543525004-1dc1e3141042?ixlib=rb-4.0.3&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=650&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=550&q=80',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80'
      ]
    },
    // Add more events data here...
  };

  const event = eventData[eventId || ''];

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-main mb-4">Event Not Found</h1>
          <Button onClick={() => navigate('/events')}>
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
      <div className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/events')}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold">{event.title}</h1>
            </div>
            <p className="text-lg text-white/90 mb-2">{event.type}</p>
            <p className="text-sm text-white/80">{event.date} • {event.location}</p>
          </div>
        </div>
      </div>

      {/* Event Description */}
      <div className="py-8 bg-accent-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <p className="text-base lg:text-lg text-secondary leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-main mb-12">Featured Videos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {event.videos.map((video: string, index: number) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                  <div className="flex items-center justify-center h-full text-gray-600">
                    Video {index + 1}
                  </div>
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Masonry Gallery */}
      <div className="py-16 lg:py-20 bg-accent-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-main mb-12">Photo Gallery</h2>
          
          {/* Desktop: Multi-column masonry layout */}
          <div className="hidden md:block">
            <div className="columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {event.images.map((image: string, index: number) => (
                <div key={index} className="break-inside-avoid mb-4">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img
                        src={image}
                        alt={`${event.title} - ${index + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ display: 'block' }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Improved Pinterest-style masonry */}
          <div className="block md:hidden">
            <div className="columns-2 gap-3 space-y-3">
              {event.images.map((image: string, index: number) => (
                <div key={index} className="break-inside-avoid mb-3">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                      <img
                        src={image}
                        alt={`${event.title} - ${index + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ display: 'block' }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Love What You See?</h2>
          <Button
            onClick={() => navigate('/')}
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-medium rounded-lg"
          >
            Book Your Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
