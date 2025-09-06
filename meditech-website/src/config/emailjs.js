// EmailJS Configuration
// Uses environment variables for security

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  
  // Your EmailJS Template ID
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  
  // Your EmailJS Public Key
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
  
  // Your email address where contact form messages will be sent
  TO_EMAIL: process.env.REACT_APP_EMAILJS_TO_EMAIL || 'meditechsolution.in@gmail.com'
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/
// 2. Create an account or sign in
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create a new email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values above with your actual credentials
// 7. Update the template variables to match the form data:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone
//    - {{message}} - sender's message
//    - {{to_email}} - your email address
