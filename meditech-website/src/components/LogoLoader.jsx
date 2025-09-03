import React, { useEffect, useState } from 'react';

const LogoLoader = ({ isLoading = true, onComplete }) => {
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    if (isLoading) {
      // Start logo animation
      setTimeout(() => setAnimationState('text'), 300);
      
      // Complete animation
      setTimeout(() => {
        setAnimationState('complete');
        onComplete?.();
      }, 1500);
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
          

        </div>
        
        {/* Loading Dots */}
        {animationState !== 'complete' && (
          <div className="flex justify-center mt-8 space-x-2">
            <div className={`w-3 h-3 bg-teal-600 rounded-full animate-pulse ${
              animationState === 'initial' ? 'opacity-100' : 'opacity-50'
            }`}></div>
            <div className={`w-3 h-3 bg-cyan-500 rounded-full animate-pulse ${
              animationState === 'text' ? 'opacity-100' : 'opacity-50'
            }`}></div>
            <div className={`w-3 h-3 bg-blue-500 rounded-full animate-pulse ${
              animationState === 'text' ? 'opacity-100' : 'opacity-50'
            }`}></div>
          </div>
        )}
        
        {/* Success Checkmark */}
        {animationState === 'complete' && (
          <div className="flex justify-center mt-8">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center animate-bounce">
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
