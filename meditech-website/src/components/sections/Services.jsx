import React, { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const services = [
    {
      id: 1,
      name: 'Ventilator',
      description: 'Advanced respiratory support systems for critical care units',
      icon: '🫁',
      features: ['ICU Grade', 'Portable Options', '24/7 Monitoring'],
      delay: 0
    },
    {
      id: 2,
      name: 'Patient Monitor',
      description: 'Real-time vital signs monitoring with advanced analytics',
      icon: '📊',
      features: ['Multi-parameter', 'Wireless', 'Cloud Integration'],
      delay: 100
    },
    {
      id: 3,
      name: 'ECG Machine',
      description: 'High-precision electrocardiogram equipment for cardiac care',
      icon: '❤️',
      features: ['12-Lead System', 'Digital Output', 'Portable Design'],
      delay: 200
    },
    {
      id: 4,
      name: 'OT Light & Table',
      description: 'Surgical lighting and operating table solutions',
      icon: '💡',
      features: ['LED Technology', 'Adjustable Height', 'Sterile Design'],
      delay: 300
    },
    {
      id: 5,
      name: 'Diathermy',
      description: 'Electrosurgical units for precise medical procedures',
      icon: '⚡',
      features: ['Bipolar/Monopolar', 'Safety Features', 'Multiple Modes'],
      delay: 400
    },
    {
      id: 6,
      name: 'Boyles Apparatus',
      description: 'Anesthesia delivery systems for surgical procedures',
      icon: '🩺',
      features: ['Gas Mixing', 'Safety Alarms', 'Modern Interface'],
      delay: 500
    },
    {
      id: 7,
      name: 'ICU Cot',
      description: 'Specialized intensive care unit patient beds',
      icon: '🛏️',
      features: ['Electric Controls', 'Pressure Relief', 'Monitoring Ready'],
      delay: 600
    },
    {
      id: 8,
      name: 'CPAP/BiPAP',
      description: 'Non-invasive ventilation support systems',
      icon: '🌬️',
      features: ['Auto-adjusting', 'Quiet Operation', 'Home Use Ready'],
      delay: 700
    },
    {
      id: 9,
      name: 'O2 Concentrator',
      description: 'Oxygen concentration and delivery systems',
      icon: '🫧',
      features: ['High Purity', 'Energy Efficient', 'Portable Models'],
      delay: 800
    }
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Our Medical Equipment
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive range of cutting-edge medical equipment designed to meet the highest 
            standards of healthcare excellence and patient safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center animate-bounce-slow">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 text-center">
                {service.name}
              </h3>
              
              <p className="text-neutral-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-secondary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-6 text-center">
                <button className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-neutral-600 mb-6">
            Need a custom solution or have specific requirements?
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
