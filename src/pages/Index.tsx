
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative w-full">
        <Hero />
      </section>

      {/* Main Content Container */}
      <main className="relative w-full">
        {/* About Section */}
        <section id="about" className="relative w-full">
          <About />
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full bg-accent-light/50">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative w-full">
          <Portfolio />
        </section>

        {/* Reviews Section (Testimonials) */}
        <section id="reviews" className="relative w-full bg-accent-light/30">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
