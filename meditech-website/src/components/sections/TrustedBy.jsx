import React, { useEffect, useState } from 'react';

const TrustedBy = () => {
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

    const element = document.getElementById('trusted-by');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const companies = [
    {
      name: 'City General Hospital',
      logo: '🏥',
      type: 'Major Hospital',
      location: 'New York, USA'
    },
    {
      name: 'Metropolitan Medical Center',
      logo: '🏨',
      type: 'Medical Center',
      location: 'Los Angeles, USA'
    },
    {
      name: 'Regional Healthcare System',
      logo: '⚕️',
      type: 'Healthcare Network',
      location: 'Chicago, USA'
    },
    {
      name: 'University Teaching Hospital',
      logo: '🎓',
      type: 'Academic Hospital',
      location: 'Boston, USA'
    },
    {
      name: 'International Medical Group',
      logo: '🌍',
      type: 'Global Healthcare',
      location: 'London, UK'
    },
    {
      name: 'Advanced Care Institute',
      logo: '🔬',
      type: 'Research Institute',
      location: 'Toronto, Canada'
    },
    {
      name: 'Emergency Response Network',
      logo: '🚑',
      type: 'Emergency Services',
      location: 'Sydney, Australia'
    },
    {
      name: 'Pediatric Care Center',
      logo: '👶',
      type: 'Specialized Care',
      location: 'Berlin, Germany'
    }
  ];

  const certifications = [
    { name: 'ISO 13485', icon: '✅', description: 'Medical Devices Quality Management' },
    { name: 'FDA Approved', icon: '🇺🇸', description: 'US Food and Drug Administration' },
    { name: 'CE Marked', icon: '🇪🇺', description: 'European Conformity' },
    { name: 'WHO Listed', icon: '🌐', description: 'World Health Organization' }
  ];

  return (
    <section id="trusted-by" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Trusted by Leading Healthcare Institutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're proud to serve some of the most prestigious hospitals and medical centers 
            around the world, building lasting partnerships based on trust and excellence.
          </p>
        </div>

        {/* Companies Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 animate-bounce-slow">
                {company.logo}
              </div>
              <h3 className="font-bold text-neutral-800 mb-2 text-lg">
                {company.name}
              </h3>
              <p className="text-primary-600 text-sm mb-1">
                {company.type}
              </p>
              <p className="text-neutral-500 text-xs">
                {company.location}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-neutral-800 mb-12 text-center">
            Our Certifications & Approvals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl border border-primary-100 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 animate-pulse-slow">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-neutral-800 mb-2 text-lg">
                  {cert.name}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Stats */}
        <div className={`bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold mb-8">
            Global Partnership Network
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years of Partnership</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Partnership Retention</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white p-12 rounded-3xl shadow-lg border border-neutral-100 max-w-4xl mx-auto">
            <div className="text-6xl mb-6 animate-float">💼</div>
            <blockquote className="text-2xl italic text-neutral-700 mb-8 leading-relaxed">
              "Meditech Solution has been our trusted partner for over a decade. Their commitment 
              to quality and service excellence has made them an invaluable part of our healthcare 
              delivery system."
            </blockquote>
            <div className="text-center">
              <div className="font-bold text-lg text-neutral-800">Dr. Jennifer Martinez</div>
              <div className="text-primary-600">Chief Executive Officer</div>
              <div className="text-neutral-500 text-sm">Global Healthcare Consortium</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-neutral-800 mb-6">
            Become Our Next Success Story
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare institutions worldwide who trust Meditech Solution 
            for their medical equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Partnership
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
