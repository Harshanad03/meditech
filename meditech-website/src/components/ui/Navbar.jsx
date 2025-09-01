import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 shadow-xl' 
        : 'bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700'
    }`} style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 85% 100%, 70% 85%, 50% 100%, 30% 85%, 15% 100%, 0 85%)'
    }}>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-white transition-colors duration-300">
              Meditech
            </div>
            <div className="text-2xl font-bold text-white transition-colors duration-300">
              Solution
            </div>
            <div className="w-8 h-0.5 bg-red-400 transform rotate-90"></div>
            <div className="w-6 h-0.5 bg-red-400"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-white hover:text-teal-200 transition-colors duration-300 relative group px-3 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-teal-200"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="font-semibold py-2.5 px-6 rounded-full bg-white text-teal-700 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-teal-200 transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-8 space-y-6 border-t border-teal-300/30 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 relative pb-12">
            {/* Curved bottom edge for mobile menu */}
            <div className="absolute bottom-0 left-0 w-full h-6">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 24"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0 L1200 0 Q1200 12 600 24 Q0 12 0 0 Z"
                  fill="currentColor"
                  className="text-white"
                />
              </svg>
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-teal-200 font-medium transition-colors duration-300 py-4 px-6 hover:bg-teal-600/20 rounded-lg relative z-10 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 relative z-10">
              <button className="bg-white text-teal-700 hover:bg-teal-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 shadow-lg shadow-teal-500/20 border border-teal-100 w-full text-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
