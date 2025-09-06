import React, { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
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

  // Mouse move handler for floating effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
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
        
        {/* Mouse Follow Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3 animate-pulse"></span>
            Medical Equipment Solutions
            <div className="ml-3 w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-bounce"></div>
          </div>
          
          {/* Main Heading with Enhanced Animations */}
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent animate-gradient-x">
              State-of-the-Art
            </span>
            <span className="block bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 bg-clip-text text-transparent animate-gradient-x-delayed">
              Medical Equipment
            </span>
          </h2>
          
          {/* Animated Description */}
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Comprehensive range of cutting-edge medical equipment designed to meet the highest 
            standards of healthcare excellence and patient safety.
          </p>
        </div>

        {/* Services Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 border border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                hoveredService === service.id ? 'scale-102 z-10' : 'scale-100'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
                {/* Floating Icon */}
                <div className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                  {service.icon}
                </div>

               {/* Enhanced Image Container */}
               <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center">
                 <img 
                   src={service.image} 
                   alt={service.name}
                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                 />
                
                {/* Multiple Overlay Layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Category Badge */}
                <div className="absolute top-4 left-4 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-gray-800 backdrop-blur-sm shadow-lg">
                    <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 animate-pulse`}></span>
                    {service.category}
                  </span>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-float-slow"></div>
                  <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delayed"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8 relative">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:via-teal-700 group-hover:to-cyan-700 group-hover:bg-clip-text transition-all duration-300 relative z-10">
                  {service.name}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed text-sm relative z-10">
                  {service.description}
                </p>

                {/* Enhanced Features with Icons */}
                <div className="space-y-3 mb-6 relative z-10">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-neutral-700 group-hover:text-neutral-800 transition-colors duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0 animate-pulse`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <div className="pt-4 border-t border-gray-100/50 relative z-10">
                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 hover:from-teal-700 hover:via-teal-800 hover:to-cyan-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Get Quote</span>
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 rounded-3xl p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:20px_20px] animate-slide"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                We specialize in custom medical equipment solutions tailored to your specific requirements and facility needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="group/cta bg-white text-teal-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden">
                  <span className="relative z-10">Get Custom Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-100 to-transparent -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"></div>
                </a>
                 <button 
                   onClick={() => window.open('https://wa.me/9442132352?text=Hi%2C%20I%27m%20interested%20in%20scheduling%20a%20consultation%20for%20medical%20equipment%20services.%20Please%20let%20me%20know%20the%20available%20time%20slots.', '_blank')}
                   className="group/cta2 border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                 >
                   <span className="relative z-10">Schedule Consultation</span>
                   <div className="absolute inset-0 bg-white opacity-0 group-hover/cta2:opacity-100 transition-opacity duration-300"></div>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 text-6xl opacity-20 animate-float-delayed filter drop-shadow-lg">🫁</div>
        <div className="absolute top-1/3 left-20 text-5xl opacity-20 animate-float-slow filter drop-shadow-lg">💉</div>
        <div className="absolute bottom-1/3 right-20 text-4xl opacity-20 animate-float filter drop-shadow-lg">🩺</div>
        <div className="absolute bottom-1/4 left-10 text-5xl opacity-20 animate-float-delayed filter drop-shadow-lg">🏥</div>
      </div>
    </section>
  );
};

export default Services;
