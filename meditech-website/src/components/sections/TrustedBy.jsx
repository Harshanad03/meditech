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
      </div>
    </section>
  );
};

export default TrustedBy;
