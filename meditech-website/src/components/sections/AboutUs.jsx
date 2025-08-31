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

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to revolutionize medical equipment supply' },
    { year: '2012', title: 'First 100 Clients', description: 'Reached milestone of serving 100 healthcare facilities' },
    { year: '2015', title: 'International Expansion', description: 'Began operations in multiple countries' },
    { year: '2018', title: 'Technology Integration', description: 'Launched digital platform for equipment management' },
    { year: '2021', title: 'Industry Recognition', description: 'Received multiple awards for excellence in service' },
    { year: '2024', title: 'Future Ready', description: 'Leading the way in next-generation medical technology' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      image: '👩‍⚕️',
      description: 'Leading our medical advisory board with 20+ years of clinical experience'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      image: '👨‍💻',
      description: 'Expert in medical device technology and innovation'
    },
    {
      name: 'Dr. Robert Williams',
      role: 'Quality Assurance Director',
      image: '👨‍🔬',
      description: 'Ensuring all equipment meets international safety standards'
    }
  ];

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
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-700">FDA and CE approved equipment standards</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-700">Global network of certified technicians</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Stats */}
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

        {/* Timeline */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-neutral-800 mb-12 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-neutral-800 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-neutral-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-neutral-800 mb-12 text-center">
            Meet Our Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl mb-4 animate-bounce-slow">
                  {member.image}
                </div>
                <h4 className="text-xl font-bold text-neutral-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
