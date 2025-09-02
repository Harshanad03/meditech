import React, { useEffect, useState } from 'react';

const WhyChooseUs = () => {
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

    const element = document.getElementById('why-choose-us');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: '🏆',
      title: 'Industry Leader',
      description: 'Over 15 years of experience in medical equipment supply and support',
      delay: 0
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Quality Assured',
      description: 'All equipment meets international safety and quality standards',
      delay: 200
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround times with express shipping options available',
      delay: 400
    },
    {
      id: 4,
      icon: '🛠️',
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services',
      delay: 600
    },
    {
      id: 5,
      icon: '💰',
      title: 'Best Pricing',
      description: 'Competitive rates with flexible payment options',
      delay: 800
    },
    {
      id: 6,
      icon: '🌍',
      title: 'Global Reach',
      description: 'Serving healthcare facilities worldwide with local support',
      delay: 1000
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Why Choose Meditech Solution?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're committed to providing the highest quality medical equipment with 
            exceptional service and support that healthcare professionals can rely on.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`text-center p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-primary-200 transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 animate-bounce-slow">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-neutral-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">250+</div>
            <div className="text-neutral-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-neutral-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
