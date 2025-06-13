
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: "/lovable-uploads/c377f8e4-2e45-4296-9c6a-a4c5e8ad6376.png",
      alt: "Hand-painted Dallas Cowboy Nesting Doll",
      title: "Cultural Nesting Dolls",
      description: "Hand-painted wooden nesting dolls celebrating local culture and traditions",
      price: "From $45",
      badge: "Handcrafted"
    },
    {
      id: 2,
      image: "/lovable-uploads/6e552828-4ced-4b82-a1b3-bcd90ec02e06.png",
      alt: "Traditional wooden musician figurines",
      title: "Musician Figurines",
      description: "Intricately carved wooden musicians showcasing traditional Indian instruments",
      price: "From $65",
      badge: "Limited Edition"
    },
    {
      id: 3,
      image: "/lovable-uploads/a8f33bd4-7dd3-483c-ac52-f26c84b35dbb.png",
      alt: "Traditional wooden dancing figurines",
      title: "Classical Dancers",
      description: "Elegant wooden figurines depicting traditional Indian classical dance forms",
      price: "From $55",
      badge: "Artisan Made"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Products</h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our carefully curated selection of authentic handcrafted items from master artisans</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          
          {/* Coming Soon Product */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 hover:shadow-xl transition-shadow duration-300 scroll-animate">
            <div className="aspect-square flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <h4 className="text-gray-600 font-medium">More Collections</h4>
                <p className="text-gray-500 text-sm mt-2">Coming Soon</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-600">New Arrivals</h3>
              <p className="text-gray-500 text-sm mb-3">Be the first to discover our latest handcrafted treasures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
