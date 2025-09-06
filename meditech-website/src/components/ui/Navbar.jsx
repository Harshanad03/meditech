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

  const handleMobileNavClick = (href) => {
    setIsMobileMenuOpen(false);
    // Enhanced smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'shadow-2xl backdrop-blur-md' 
        : 'shadow-lg'
    }`} style={{
      background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 50%, #0891b2 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <a href="#home" className="relative block no-underline">
              <div className="relative">
                <img 
                  src="/logo.png?v=2" 
                  alt="Meditech Solution" 
                  className="h-16 w-auto transition-all duration-500 hover:scale-110 filter drop-shadow-2xl brightness-110 contrast-125"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback text logo */}
                <div className="hidden text-white font-bold text-xl">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Meditech Solution
                  </span>
                </div>
                {/* Enhanced glow effect - always visible */}
                <div className="absolute inset-0 bg-white/30 rounded-lg blur-lg opacity-100 transition-opacity duration-500 -z-10"></div>
                {/* Additional shadow for better visibility - always visible */}
                <div className="absolute inset-0 bg-black/20 rounded-lg blur-sm opacity-50 -z-20"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-semibold text-white hover:text-cyan-200 transition-all duration-300 px-4 py-2 rounded-lg group overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:via-cyan-500/20 group-hover:to-teal-500/10 transition-all duration-300 rounded-lg"></div>
                
                {/* Text */}
                <span className="relative z-10">{item.name}</span>
                
                {/* Bottom border */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
                
                {/* Top shine effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="group relative inline-block font-bold py-3 px-8 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 shadow-2xl hover:shadow-teal-500/50 no-underline"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80; // Account for fixed navbar
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Text */}
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Quote</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative w-6 h-6">
                <svg className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="relative">
                         {/* Main mobile menu content */}
             <div className="bg-transparent py-8 px-6 pb-16 space-y-4 min-h-[calc(100vh-80px)]">
              
              
              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-center py-4 px-2 transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(item.href);
                    }}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-white font-medium text-lg">{item.name}</span>
                  </a>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="group relative inline-block w-full bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-2xl hover:shadow-teal-500/50 no-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick('#contact');
                  }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10 flex items-center justify-center space-x-2 text-lg">
                    <span>Get Quote</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
