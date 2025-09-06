import React, { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse move handler for floating effects - Desktop only
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current && window.innerWidth >= 1024) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section && window.innerWidth >= 1024) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Function to scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      id: 1,
      name: 'Gas Line',
      description: 'Medical gas delivery systems for hospital infrastructure',
      image: '/images/gasline.png',
      features: ['Central Supply', 'Safety Valves', 'Pressure Monitoring'],
      delay: 0,
      category: 'Infrastructure',
      icon: '🔧',
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 2,
      name: 'Ventilator',
      description: 'Advanced respiratory support systems for critical care units',
      image: '/images/ventilator.png',
      features: ['ICU Grade', 'Portable Options', '24/7 Monitoring'],
      delay: 100,
      category: 'Respiratory Care',
      icon: '🫁',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Patient Monitor',
      description: 'Real-time vital signs monitoring with advanced analytics',
      image: '/images/patient-monitor.png',
      features: ['Multi-parameter', 'Wireless', 'Cloud Integration'],
      delay: 200,
      category: 'Monitoring Systems',
      icon: '📊',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      name: 'ECG Machine',
      description: 'High-precision electrocardiogram equipment for cardiac care',
      image: '/images/ecg-machine.png',
      features: ['12-Lead System', 'Digital Output', 'Portable Design'],
      delay: 300,
      category: 'Cardiac Care',
      icon: '❤️',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 5,
      name: 'OT Light',
      description: 'Advanced surgical lighting solutions for optimal visibility',
      image: '/images/ot-light.png',
      features: ['LED Technology', 'Adjustable Intensity', 'Sterile Design'],
      delay: 400,
      category: 'Surgical Equipment',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      name: 'OT Table',
      description: 'Professional operating table systems for surgical procedures',
      image: '/images/ot-table.png',
      features: ['Adjustable Height', 'Multiple Positions', 'Patient Safety'],
      delay: 500,
      category: 'Surgical Equipment',
      icon: '🛏️',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 7,
      name: 'Diathermy',
      description: 'Electrosurgical units for precise medical procedures',
      image: '/images/diathermy.png',
      features: ['Bipolar/Monopolar', 'Safety Features', 'Multiple Modes'],
      delay: 600,
      category: 'Surgical Equipment',
      icon: '⚡',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 8,
      name: 'Boyles Apparatus',
      description: 'Anesthesia delivery systems for surgical procedures',
      image: '/images/boyles-apparatus.png',
      features: ['Gas Mixing', 'Safety Alarms', 'Modern Interface'],
      delay: 700,
      category: 'Anesthesia',
      icon: '🩺',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 9,
      name: 'ICU Cot',
      description: 'Specialized intensive care unit patient beds',
      image: '/images/icu-cot.png',
      features: ['Electric Controls', 'Pressure Relief', 'Monitoring Ready'],
      delay: 800,
      category: 'Patient Care',
      icon: '🛏️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 10,
      name: 'Defibrillator',
      description: 'Life-saving cardiac defibrillation equipment',
      image: '/images/defribalator.png',
      features: ['AED Ready', 'Manual Override', 'Battery Backup'],
      delay: 900,
      category: 'Emergency Care',
      icon: '⚡',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 11,
      name: 'BiPAP',
      description: 'Bilevel Positive Airway Pressure ventilation systems',
      image: '/images/bipap.png',
      features: ['Dual Pressure', 'Advanced Modes', 'Patient Comfort'],
      delay: 1000,
      category: 'Respiratory Care',
      icon: '💨',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 12,
      name: 'O2 Concentrator',
      description: 'Oxygen concentration and delivery systems',
      image: '/images/o2-concentrator.png',
      features: ['High Purity', 'Energy Efficient', 'Portable Models'],
      delay: 1100,
      category: 'Respiratory Care',
      icon: '🫧',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative section-padding bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Mouse Follow Effect - Desktop only */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl transition-all duration-300 ease-out hidden lg:block"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Optimized Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {/* Simple Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-md">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-2 sm:mr-3"></span>
            Medical Equipment Solutions
          </div>
          
          {/* Mobile Optimized Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-800 mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
              State-of-the-Art
            </span>
            <span className="block bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent">
              Medical Equipment
            </span>
          </h2>
          
          {/* Mobile Optimized Description */}
          <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed px-4">
            Comprehensive range of cutting-edge medical equipment designed to meet the highest 
            standards of healthcare excellence and patient safety.
          </p>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
                {/* Mobile Optimized Floating Icon */}
                <div className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform duration-300 z-20">
                  {service.icon}
                </div>

               {/* Mobile Optimized Image Container */}
               <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-white flex items-center justify-center">
                 <img 
                   src={service.image} 
                   alt={service.name}
                   className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                   loading="lazy"
                 />
                
                {/* Simple Category Badge - Mobile Optimized */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/95 text-gray-800 shadow-md">
                    <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2`}></span>
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Mobile Optimized Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Mobile Optimized Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs sm:text-sm text-neutral-700">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2 flex-shrink-0`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Mobile Optimized CTA Button */}
                <div className="pt-3 border-t border-gray-100/50">
                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Simple hover effect for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Mobile Optimized Bottom CTA Section */}
        <div className={`text-center transition-all duration-500 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="relative bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:20px_20px] animate-slide"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                We specialize in custom medical equipment solutions tailored to your specific requirements and facility needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="#contact" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Get Custom Quote
                </a>
                 <button 
                   onClick={() => window.open('https://wa.me/9442132352?text=Hi%2C%20I%27m%20interested%20in%20scheduling%20a%20consultation%20for%20medical%20equipment%20services.%20Please%20let%20me%20know%20the%20available%20time%20slots.', '_blank')}
                   className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                 >
                   Schedule Consultation
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Optimized Floating Icons - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 right-10 text-6xl opacity-20 animate-float-delayed filter drop-shadow-lg">🫁</div>
        <div className="absolute top-1/3 left-20 text-5xl opacity-20 animate-float-slow filter drop-shadow-lg">💉</div>
        <div className="absolute bottom-1/3 right-20 text-4xl opacity-20 animate-float filter drop-shadow-lg">🩺</div>
        <div className="absolute bottom-1/4 left-10 text-5xl opacity-20 animate-float-delayed filter drop-shadow-lg">🏥</div>
      </div>
    </section>
  );
};

export default Services;

