
import React from 'react';
import HeroSection from '../components/HeroSection';
import HandcraftedCollections from '../components/HandcraftedCollections';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductInterestForm from '../components/ProductInterestForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-inter text-charcoal bg-warm-white">
      <HeroSection />
      <HandcraftedCollections />
      <FeaturedProducts />
      <ProductInterestForm />
      <Footer />
    </div>
  );
};

export default Index;
