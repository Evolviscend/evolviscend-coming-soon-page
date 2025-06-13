
import React from 'react';

interface ProductCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  badge: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, alt, title, description, price, badge }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-animate">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-charcoal">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-terracotta font-semibold">{price}</span>
          <span className="text-xs text-gray-500 bg-sage/20 px-2 py-1 rounded-full">{badge}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
