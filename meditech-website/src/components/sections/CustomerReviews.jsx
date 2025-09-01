import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('reviews');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      id: 1,
      name: 'Dr. Emily Rodriguez',
      role: 'Chief of Cardiology',
      hospital: 'City General Hospital',
      rating: 5,
      comment: 'The ventilators we purchased from Meditech Solution have been exceptional. The quality and reliability have significantly improved our ICU operations. Their support team is always available when we need assistance.',
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. James Thompson',
      role: 'Emergency Department Director',
      hospital: 'Metropolitan Medical Center',
      rating: 5,
      comment: 'We\'ve been working with Meditech for over 5 years now. Their patient monitors are top-notch and the installation service was professional. Highly recommend their equipment and support.',
      image: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      role: 'Hospital Administrator',
      hospital: 'Regional Healthcare System',
      rating: 5,
      comment: 'The ECG machines and operating room equipment we received exceeded our expectations. The training provided to our staff was comprehensive and the ongoing support is excellent.',
      image: '👩‍💼'
    },
    {
      id: 4,
      name: 'Dr. Michael O\'Connor',
      role: 'ICU Medical Director',
      hospital: 'University Teaching Hospital',
      rating: 5,
      comment: 'Meditech Solution delivered our CPAP machines on time and the quality is outstanding. Their technical support team is knowledgeable and responsive. Great partnership!',
      image: '👨‍⚕️'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what healthcare professionals 
            around the world have to say about Meditech Solution.
          </p>
        </div>

        {/* Overall Rating */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="text-6xl mb-6 animate-float">⭐</div>
            <h3 className="text-3xl font-bold text-neutral-800 mb-4">
              Overall Customer Satisfaction
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {renderStars(5)}
              <span className="text-2xl font-bold text-neutral-800 ml-3">5.0</span>
            </div>
            <p className="text-lg text-neutral-600">
              Based on {reviews.length * 25}+ verified reviews from healthcare professionals
            </p>
          </div>
        </div>

        {/* Featured Review */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center max-w-4xl mx-auto">
            <div className="text-8xl mb-6 animate-heartbeat">💬</div>
            <div className="flex justify-center mb-6">
              {renderStars(reviews[currentReview].rating)}
            </div>
            <blockquote className="text-xl italic mb-8 leading-relaxed">
              "{reviews[currentReview].comment}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">{reviews[currentReview].image}</div>
              <div className="text-left">
                <div className="font-bold text-lg">{reviews[currentReview].name}</div>
                <div className="text-primary-100">{reviews[currentReview].role}</div>
                <div className="text-primary-200 text-sm">{reviews[currentReview].hospital}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Navigation Dots */}
        <div className={`flex justify-center space-x-3 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? 'bg-primary-600 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
