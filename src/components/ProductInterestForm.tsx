
import React, { useState } from 'react';
import { submitProductInterest } from '../utils/firebase';

const ProductInterestForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    productCategory: '',
    priceRange: '',
    specialRequests: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitProductInterest(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting product interest:', error);
      alert('There was an error submitting your interest. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-gold text-5xl mb-4">✨</div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gold">Thank You!</h2>
            <p className="text-white/80 text-lg">We've received your interest and will notify you when your selected products become available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-gold">Express Your Interest</h2>
          <p className="text-white/80 mb-12 text-lg">Tell us which handcrafted treasures captivate you most, and we'll notify you when they become available.</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customerName" className="block text-left text-sm font-medium text-white/90 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="customerName" 
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="customerEmail" className="block text-left text-sm font-medium text-white/90 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="customerEmail" 
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="productCategory" className="block text-left text-sm font-medium text-white/90 mb-2">Product Category of Interest</label>
                <select 
                  id="productCategory" 
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent appearance-none"
                >
                  <option value="" className="text-charcoal">Select a category</option>
                  <option value="nesting-dolls" className="text-charcoal">Cultural Nesting Dolls</option>
                  <option value="musician-figurines" className="text-charcoal">Traditional Musician Figurines</option>
                  <option value="dancing-figurines" className="text-charcoal">Classical Dancing Figurines</option>
                  <option value="heirloom-sarees" className="text-charcoal">Heirloom Sarees</option>
                  <option value="wooden-toys" className="text-charcoal">Traditional Wooden Toys</option>
                  <option value="all-products" className="text-charcoal">All Handcrafted Products</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="priceRange" className="block text-left text-sm font-medium text-white/90 mb-2">Budget Range</label>
                <select 
                  id="priceRange" 
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent appearance-none"
                >
                  <option value="" className="text-charcoal">Select your budget range</option>
                  <option value="under-50" className="text-charcoal">Under $50</option>
                  <option value="50-100" className="text-charcoal">$50 - $100</option>
                  <option value="100-200" className="text-charcoal">$100 - $200</option>
                  <option value="200-500" className="text-charcoal">$200 - $500</option>
                  <option value="over-500" className="text-charcoal">Over $500</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="specialRequests" className="block text-left text-sm font-medium text-white/90 mb-2">Special Requests or Custom Orders</label>
                <textarea 
                  id="specialRequests" 
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none"
                  placeholder="Tell us about any specific customizations or special requests..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? 'Submitting...' : 'Submit Interest & Get Priority Access'}
              </button>
              
              <p className="text-white/60 text-xs">
                By submitting this form, you'll receive priority notifications when your selected products become available. We respect your privacy and won't share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInterestForm;
