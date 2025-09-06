import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Debug: Check if configuration is loaded (without exposing credentials)
      console.log('EmailJS Config Status:', {
        SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID ? 'Set' : 'Not set',
        TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID ? 'Set' : 'Not set',
        PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? 'Set' : 'Not set',
        TO_EMAIL: EMAILJS_CONFIG.TO_EMAIL ? 'Set' : 'Not set'
      });
      
      // Check if EmailJS is properly configured
      if (!EMAILJS_CONFIG.PUBLIC_KEY || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key_here' ||
          EMAILJS_CONFIG.PUBLIC_KEY === 'undefined' ||
          !EMAILJS_CONFIG.SERVICE_ID ||
          EMAILJS_CONFIG.SERVICE_ID === 'your_service_id_here' ||
          !EMAILJS_CONFIG.TEMPLATE_ID ||
          EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id_here') {
        throw new Error('EmailJS not configured. Please check your .env file and restart the development server.');
      }
      
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Send email
      const result = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        from_name: formData.name,
        phone: formData.phone,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      });
      
      console.log('Email sent successfully:', result);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['161/3, PON NAGAR, MUTHUR MAIN ROAD', 'CHINNIYAM PALAYAM, Erode', 'Tamil Nadu (TN - 33), PIN Code 638104', 'India']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['94421 32352', '24/7 Support Available']
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['meditechsolution.in@gmail.com']
    },
    {
      icon: '🏢',
      title: 'GSTIN',
      details: ['33AONPK4309K1ZT']
    }
  ];



  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-12 transition-all duration-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-teal-800 to-cyan-800 bg-clip-text text-transparent animate-gradient-flow">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your medical equipment needs? Our team of experts is here to help 
            you find the <span className="text-teal-600 font-semibold">perfect solution</span> for your healthcare facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-1200 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-200/50 backdrop-blur-sm relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-black text-slate-800 mb-6 relative z-10">
                <span className="bg-gradient-to-r from-slate-800 via-teal-800 to-cyan-800 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 text-white font-bold rounded-xl text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className={`transition-all duration-1200 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm relative overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                        {info.icon}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h4 className="text-lg font-black text-slate-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm mb-1 group-hover:text-slate-700 transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Thank you for your inquiry! We will contact you soon.</p>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 hover:from-teal-700 hover:via-teal-800 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
