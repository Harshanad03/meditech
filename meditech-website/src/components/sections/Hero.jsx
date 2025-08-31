import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroTexts = [
    "Premium Medical Equipment",
    "Expert Service & Support",
    "Flexible Rental Solutions",
    "24/7 Technical Assistance"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(textInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple Animated Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/30 rounded-full animate-float shadow-lg"></div>
        
        {/* All Medical Icons in Translucent Circles */}
        {/* Top-left Syringe Circle */}
        <div className="absolute top-20 left-20 w-28 h-28 bg-blue-200/40 rounded-full animate-float flex items-center justify-center shadow-lg">
          <div className="text-3xl text-blue-600">💉</div>
        </div>
        
        {/* Top-right Stethoscope Circle */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-200/40 rounded-full animate-float-delayed flex items-center justify-center shadow-lg">
          <div className="text-4xl text-blue-600">🩺</div>
        </div>
        
        {/* Bottom-left Hospital Building Circle */}
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-200/35 rounded-full animate-float-slow flex items-center justify-center shadow-lg">
          <div className="text-3xl text-blue-600">🏥</div>
        </div>
        
        {/* Bottom-right Medical Icons Circle */}
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-blue-200/35 rounded-full animate-float-delayed-2 flex items-center justify-center shadow-lg">
          <div className="flex items-center space-x-3">
            {/* Medical Chart with Red Cross */}
            <div className="text-3xl text-gray-600">📋</div>
            {/* Pill Blister Pack */}
            <div className="text-2xl text-purple-500">💊</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
            Medical Equipment
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 bg-clip-text text-transparent animate-gradient-x-delayed">
            For Sale, Service & Rental
          </span>
        </h1>

        {/* Dynamic Subtitle */}
        <div className={`h-16 mb-8 flex items-center justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl sm:text-2xl lg:text-2xl text-gray-700 font-medium">
            <span className="inline-block min-w-[400px] text-left">
              {heroTexts[currentText]}
            </span>
          </p>
        </div>

        {/* Stats Section */}
        <div className={`max-w-6xl mx-auto mb-10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Hospitals Served", icon: "🏥", color: "from-teal-500 to-cyan-600" },
              { number: "250+", label: "Happy Clients", icon: "😊", color: "from-teal-600 to-cyan-700" },
              { number: "15+", label: "Years Experience", icon: "⭐", color: "from-blue-500 to-blue-600" },
              { number: "99%", label: "Satisfaction Rate", icon: "💯", color: "from-red-500 to-red-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Stats Circle - Same Style as Background Circle */}
                <div className="w-36 h-36 bg-blue-200/30 rounded-full animate-float shadow-lg flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className={`text-base font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-700 text-xs font-semibold group-hover:text-gray-800 transition-colors duration-300 uppercase tracking-wide text-center px-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className={`text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Your trusted partner for cutting-edge medical equipment solutions. We provide premium quality devices, 
          expert maintenance services, and flexible rental options to meet all your healthcare needs.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          <button className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Get Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 text-6xl opacity-30 animate-float-delayed filter drop-shadow-lg">🫁</div>
        <div className="absolute top-1/3 left-20 text-5xl opacity-30 animate-float-slow filter drop-shadow-lg">💉</div>
        <div className="absolute bottom-1/3 right-20 text-4xl opacity-30 animate-float filter drop-shadow-lg">🩺</div>
        <div className="absolute bottom-1/4 left-10 text-5xl opacity-30 animate-float-delayed filter drop-shadow-lg">🏥</div>
        <div className="absolute top-1/2 left-1/3 text-4xl opacity-25 animate-float-slow filter drop-shadow-lg">⚡</div>
        <div className="absolute bottom-1/3 left-1/2 text-5xl opacity-25 animate-float filter drop-shadow-lg">🔬</div>
      </div>

      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
    </section>
  );
};

export default Hero;
