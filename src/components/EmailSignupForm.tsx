
import React, { useState } from 'react';
import { submitEmail } from '../utils/firebase';

const EmailSignupForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    try {
      await submitEmail(email);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('There was an error signing you up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto scroll-animate">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="text-gold text-5xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2 text-gold">Thank You!</h3>
            <p className="text-sm opacity-90">You're now part of our founding community. We'll be in touch soon with exclusive updates.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto scroll-animate">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-semibold mb-3 text-gold">Be the First to Know</h3>
        <p className="text-sm mb-6 opacity-90">Join our founding community for 15% off your first order and exclusive early access.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Unlock My Early Access'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSignupForm;
