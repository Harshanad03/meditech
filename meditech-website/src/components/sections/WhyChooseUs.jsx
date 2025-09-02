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
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transition-all duration-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-teal-800 to-cyan-800 bg-clip-text text-transparent animate-gradient-flow">
              Why Choose Meditech Solution?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're committed to providing the highest quality medical equipment with 
            <span className="text-teal-600 font-semibold"> exceptional service</span> and 
            <span className="text-cyan-600 font-semibold"> support</span> that healthcare professionals can rely on.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group text-center p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200/50 hover:border-teal-300/50 transition-all duration-200 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              
              {/* Icon with enhanced animation */}
              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-110 group-hover:rotate-6 animate-float">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-200 animate-float-delayed">
                    {feature.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                  {feature.description}
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1200 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
              15+
            </div>
            <div className="text-slate-600 font-semibold">Years Experience</div>
          </div>
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl font-black bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
              250+
            </div>
            <div className="text-slate-600 font-semibold">Happy Clients</div>
          </div>
          <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/50 hover:border-teal-300/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
              100%
            </div>
            <div className="text-slate-600 font-semibold">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
