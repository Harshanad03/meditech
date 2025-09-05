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
  }, [heroTexts.length]);

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Medical Icons without Circles */}
        {/* Top-left Syringe */}
        <div className="absolute top-20 left-20 text-9xl text-blue-600 drop-shadow-xl filter brightness-110 animate-float hover:scale-110 hover:-translate-y-2 transition-all duration-500 opacity-40">💉</div>
        
        {/* Top-right Stethoscope */}
        <div className="absolute top-32 right-20 text-7xl text-blue-600 drop-shadow-xl filter brightness-110 animate-float-delayed hover:scale-110 hover:-translate-y-2 transition-all duration-500 opacity-20">🩺</div>
        
      
      </div>

              {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Professional Main Heading with Advanced Animations */}
        <div className={`mb-8 transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h1 className="font-black leading-tight">
            {/* First Line - Medical Equipment (Increased Size) */}
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-flow hover:scale-105 transition-all duration-700 cursor-default">
                Medical Equipment
              </span>
            </span>
            
            {/* Second Line - For Sale, Service & Rental (Larger) */}
            <span className="block text-3xl sm:text-4xl lg:text-6xl mt-4 relative">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-700 to-teal-800 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-all duration-700 cursor-default font-bold">
                For Sale, Service & Rental
              </span>
              {/* Professional accent line */}
              <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-700 rounded-full animate-accent-glow"></div>
            </span>
          </h1>
        </div>

        {/* Dynamic Subtitle */}
        <div className={`h-16 mb-8 flex items-center justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl sm:text-2xl lg:text-2xl text-red-700 font-medium">
            <span className="inline-block min-w-[300px] sm:min-w-[400px] text-center">
              {heroTexts[currentText]}
            </span>
          </p>
        </div>

        {/* Stats Section */}
        <div className={`max-w-6xl mx-auto mb-10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {[
              { number: "50+", label: "Hospitals Served", icon: "🏥", color: "from-teal-500 to-cyan-600" },
              { number: "250+", label: "Happy Clients", icon: "😊", color: "from-teal-600 to-cyan-700" },
              { number: "15+", label: "Years Experience", icon: "⭐", color: "from-blue-500 to-blue-600" },
              { number: "100%", label: "Satisfaction Rate", icon: "💯", color: "from-red-500 to-red-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Stats Circle - Premium UI Design */}
                <div className="relative w-36 h-36 rounded-full animate-float group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-500">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 blur-sm group-hover:blur-md transition-all duration-500"></div>
                  
                  {/* Main Circle with Premium Glass Effect */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white/80 via-blue-50/70 to-cyan-100/60 rounded-full shadow-2xl group-hover:shadow-3xl flex flex-col items-center justify-center border-2 border-white/50 backdrop-blur-md overflow-hidden">
                    {/* Inner Shine Effect */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full"></div>
                    
                    {/* Subtle Pattern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-full"></div>
                    
                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      {/* Icon with Enhanced Styling */}
                      <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-500 drop-shadow-xl filter brightness-110">
                        {stat.icon}
                      </div>
                      
                      {/* Number with Premium Typography */}
                      <div className={`text-lg font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg tracking-tight`}>
                        {stat.number}
                      </div>
                      
                      {/* Label with Enhanced Styling */}
                      <div className="text-gray-700 text-[9px] font-bold group-hover:text-gray-800 transition-colors duration-500 uppercase tracking-widest text-center px-2 drop-shadow-sm leading-tight">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/0 via-cyan-400/0 to-blue-400/0 group-hover:from-teal-400/10 group-hover:via-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className={`text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{color: '#006666'}}>
          Your trusted partner for cutting-edge medical equipment solutions. We provide premium quality devices, 
          expert maintenance services, and flexible rental options to meet all your healthcare needs.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="#services" className="group relative inline-block px-10 py-5 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden no-underline">
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
          
          <a href="#contact" className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Get Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </div>

      {/* Floating Medical Icons with Premium Styling */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 text-8xl opacity-55 animate-float-delayed filter drop-shadow-2xl hover:opacity-30 transition-all duration-500 hover:scale-110 hover:brightness-125 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">👩‍⚕</div>
          </div>
        </div>
        <div className="absolute top-1/3 center-4 text-7xl opacity-55 animate-float-slow filter drop-shadow-2xl hover:opacity-30 transition-all duration-500 hover:scale-110 hover:brightness-125 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">🫁</div>
          </div>
        </div>
        <div className="absolute bottom-1/3 right-20 text-7xl opacity-75 animate-float filter drop-shadow-2xl hover:opacity-30 transition-all duration-500 hover:scale-110 hover:brightness-125 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">💉</div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-10 text-8xl opacity-35 animate-float-delayed filter drop-shadow-2xl hover:opacity-30 transition-all duration-500 hover:scale-110 hover:brightness-125 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">🫀</div>
          </div>
        </div>
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
