
import React from 'react';
import EmailSignupForm from './EmailSignupForm';

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-8 scroll-animate">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-gold mb-2">Evolviscend</h1>
          <div className="w-24 h-1 bg-terracotta mx-auto"></div>
        </div>
        
        {/* Main Headlines */}
        <div className="mb-12 scroll-animate">
          <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
            Stories Woven in Thread and Timber.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We're traveling the world to bring authentic, handcrafted treasures directly from the artisan's workshop to your doorstep. Launching Soon.
          </p>
        </div>
        
        <EmailSignupForm />
      </div>
    </section>
  );
};

export default HeroSection;
