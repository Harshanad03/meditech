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
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transition-all duration-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-teal-800 to-cyan-800 bg-clip-text text-transparent animate-gradient-flow">
              About Meditech Solution
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We are a leading provider of 
            <span className="text-teal-600 font-semibold"> advanced medical equipment</span>, dedicated to improving 
            healthcare outcomes through 
            <span className="text-cyan-600 font-semibold"> innovative technology</span> and exceptional service.
          </p>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Enhanced Left Content */}
          <div className={`transition-all duration-1200 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-200/50 backdrop-blur-sm relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-3xl font-black text-slate-800 mb-6 relative z-10">
                <span className="bg-gradient-to-r from-slate-800 via-teal-800 to-cyan-800 bg-clip-text text-transparent">
                  Our Mission & Vision
                </span>
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed relative z-10">
                At Meditech Solution, our mission is to provide healthcare professionals with 
                the most <span className="text-teal-600 font-semibold">advanced, reliable, and cost-effective</span> medical equipment available. 
                We believe that quality healthcare should be accessible to everyone.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                Our vision is to become the most <span className="text-cyan-600 font-semibold">trusted partner</span> in medical technology, 
                driving innovation and improving patient care worldwide through cutting-edge 
                equipment and exceptional support services.
              </p>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>

          {/* Enhanced Right Content */}
          <div className={`transition-all duration-1200 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-teal-200 rounded-3xl p-12 text-center shadow-2xl border border-teal-200/50 backdrop-blur-sm relative overflow-hidden group">
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-1"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-2"></div>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-8xl mb-6 animate-float group-hover:animate-icon-bounce">🏥</div>
                <h4 className="text-2xl font-black text-slate-800 mb-4">
                  <span className="bg-gradient-to-r from-slate-800 via-teal-800 to-cyan-800 bg-clip-text text-transparent">
                    Trusted by Healthcare Professionals
                  </span>
                </h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Join hundreds of medical facilities worldwide who choose 
                  <span className="text-teal-600 font-semibold"> Meditech Solution</span>
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="group/stat">
                    <div className="text-4xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <div className="text-sm text-slate-600 font-semibold">Support</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="text-sm text-slate-600 font-semibold">Quality</div>
                  </div>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
