import React, { useState, useEffect } from 'react';
import LogoLoader from './components/LogoLoader';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import AboutUs from './components/sections/AboutUs';
import CustomerReviews from './components/sections/CustomerReviews';
import TrustedBy from './components/sections/TrustedBy';
import ContactUs from './components/sections/ContactUs';
import Footer from './components/ui/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced smooth scrolling for all anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  if (isLoading) {
    return <LogoLoader isLoading={isLoading} onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="App smooth-scroll scroll-optimized">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <CustomerReviews />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
