import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, User, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Contact us for a quote, help, or to join our team.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-gray-800 font-medium text-sm">Your Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="pl-10 h-10 sm:h-11 border-gray-200 focus:border-primary rounded-lg text-sm focus:ring-1 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="service" className="text-gray-800 font-medium text-sm">Service</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full h-10 sm:h-11 px-3 border border-gray-200 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none bg-white text-gray-800 text-sm"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="pre-wedding">Pre-Wedding Shoot</option>
                  <option value="traditional">Traditional Ceremonies</option>
                  <option value="kids">Kids Photography</option>
                  <option value="portraits">Portrait Photography</option>
                  <option value="events">Other Events</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-gray-800 font-medium text-sm">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="pl-10 h-10 sm:h-11 border-gray-200 focus:border-primary rounded-lg text-sm focus:ring-1 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-gray-800 font-medium text-sm">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="pl-10 h-10 sm:h-11 border-gray-200 focus:border-primary rounded-lg text-sm focus:ring-1 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>
            </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-gray-800 font-medium text-sm">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event, special requirements, or any questions..."
                    className="h-24 sm:h-28 border-gray-200 focus:border-primary rounded-lg resize-none text-sm focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 sm:px-8 sm:py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
    </section>
  );
};

export default Contact;