
import React from 'react';

const HandcraftedCollections = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Handcrafted Collections</h2>
          <div className="w-16 h-1 bg-terracotta mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Heirloom Sarees */}
          <div className="text-center scroll-animate">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-charcoal">Heirloom Sarees</h3>
            <p className="text-gray-600 leading-relaxed">Wear a piece of history with handwoven textiles from the master weavers of India.</p>
          </div>
          
          {/* Traditional Wooden Toys */}
          <div className="text-center scroll-animate">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-charcoal">Traditional Wooden Toys</h3>
            <p className="text-gray-600 leading-relaxed">Safe, non-toxic, and beautifully crafted wooden toys that spark imagination and preserve cultural heritage.</p>
          </div>
          
          {/* Ethical Partnership */}
          <div className="text-center scroll-animate">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-charcoal">Direct Trade Partnership</h3>
            <p className="text-gray-600 leading-relaxed">Every purchase directly supports the artisan families and communities who create these timeless goods.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandcraftedCollections;
