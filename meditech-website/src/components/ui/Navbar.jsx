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
        ? 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 shadow-xl' 
        : 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700'
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
                className="font-medium text-white hover:text-purple-200 transition-colors duration-300 relative group px-3 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-purple-200"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="font-semibold py-2.5 px-6 rounded-full bg-white text-purple-700 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-200 transition-colors duration-300 p-2"
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
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-purple-300/30">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-purple-200 font-medium transition-colors duration-300 py-2 px-4 hover:bg-purple-600/20 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md w-full">
              
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
