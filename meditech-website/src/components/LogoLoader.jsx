import React, { useEffect, useState } from 'react';

const LogoLoader = ({ isLoading = true, onComplete }) => {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    if (isLoading) {
      // Start text animation
      setTimeout(() => setAnimationState('text'), 300);
      
      // Start line animation
      setTimeout(() => setAnimationState('line'), 800);
      
      // Start heartbeat animation
      setTimeout(() => setAnimationState('heartbeat'), 1200);
      
      // Complete animation
      setTimeout(() => {
        setAnimationState('complete');
        onComplete?.();
      }, 2000);
    }
  }, [isLoading, onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative">
        {/* Logo Container */}
        <div className="relative">
          {/* Logo Image */}
          <div className={`transition-all duration-700 ${
            animationState === 'initial' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}>
            <img 
              src="/logo.png" 
              alt="Meditech Solution" 
              className="h-24 w-auto mx-auto"
            />
          </div>
          
          {/* Heartbeat Waveform Animation */}
          <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${
            animationState === 'heartbeat' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <svg width="120" height="40" viewBox="0 0 120 40" className="ml-2">
              {/* Heartbeat line extending from logo */}
              <path
                d="M0 20 L10 20 L15 5 L25 35 L35 20 L45 20 L55 20 L65 20 L75 20 L85 20 L95 20 L105 20 L115 20 L120 20"
                stroke="#EF4444"
                strokeWidth="3"
                fill="none"
                className={`transition-all duration-1000 ${
                  animationState === 'heartbeat' ? 'stroke-dasharray-200 stroke-dashoffset-0' : 'stroke-dasharray-200 stroke-dashoffset-200'
                }`}
              />
            </svg>
          </div>
        </div>
        
        {/* Loading Dots */}
        {animationState !== 'complete' && (
          <div className="flex justify-center mt-8 space-x-2">
            <div className={`w-3 h-3 bg-primary-600 rounded-full animate-pulse ${
              animationState === 'initial' ? 'opacity-100' : 'opacity-50'
            }`}></div>
            <div className={`w-3 h-3 bg-secondary-500 rounded-full animate-pulse ${
              animationState === 'text' ? 'opacity-100' : 'opacity-50'
            }`}></div>
            <div className={`w-3 h-3 bg-accent-500 rounded-full animate-pulse ${
              animationState === 'line' ? 'opacity-100' : 'opacity-50'
            }`}></div>
          </div>
        )}
        
        {/* Success Checkmark */}
        {animationState === 'complete' && (
          <div className="flex justify-center mt-8">
            <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoLoader;
