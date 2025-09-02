import React, { useEffect, useState } from 'react';

const AboutUs = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            About Meditech Solution
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We are a leading provider of advanced medical equipment, dedicated to improving 
            healthcare outcomes through innovative technology and exceptional service.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-neutral-800 mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              At Meditech Solution, our mission is to provide healthcare professionals with 
              the most advanced, reliable, and cost-effective medical equipment available. 
              We believe that quality healthcare should be accessible to everyone.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our vision is to become the most trusted partner in medical technology, 
              driving innovation and improving patient care worldwide through cutting-edge 
              equipment and exceptional support services.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-700">ISO 13485 certified quality management system</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-700">24/7 technical support and maintenance services</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-12 text-center">
              <div className="text-8xl mb-6 animate-float">🏥</div>
              <h4 className="text-2xl font-bold text-neutral-800 mb-4">
                Trusted by Healthcare Professionals
              </h4>
              <p className="text-neutral-600 mb-6">
                Join thousands of medical facilities worldwide who choose Meditech Solution
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-neutral-600">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-500">100%</div>
                  <div className="text-sm text-neutral-600">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
