# EmailJS Setup Guide for Meditech Website

## Overview
This guide will help you set up EmailJS to handle contact form submissions on your Meditech website.

## Prerequisites
- EmailJS account (free at https://www.emailjs.com/)
- Gmail, Outlook, or other email service account

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

Hello,

You have received a new contact form submission from your Meditech website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Please respond to: {{from_email}}

Best regards,
Meditech Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

### 5. Update Environment Variables
1. Open `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
# EmailJS Configuration
# Replace these values with your actual EmailJS credentials

REACT_APP_EMAILJS_SERVICE_ID=service_r6cyzwz
REACT_APP_EMAILJS_TEMPLATE_ID=template_mochdtd
REACT_APP_EMAILJS_PUBLIC_KEY=efHy2r7QPPP_kLAqw
REACT_APP_EMAILJS_TO_EMAIL=meditechsolution.in@gmail.com
```

**Note:** The `.env` file is already added to `.gitignore` for security.

### 6. Test the Integration
1. Start your development server: `npm start`
2. Go to the contact form on your website
3. Fill out and submit the form
4. Check your email for the message
5. Check browser console for any errors

## Form Fields
The contact form includes these fields:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Message** (required)

## Troubleshooting

### Common Issues:
1. **"Invalid service ID"** - Check your Service ID is correct
2. **"Invalid template ID"** - Check your Template ID is correct
3. **"Invalid public key"** - Check your Public Key is correct
4. **Emails not received** - Check spam folder, verify email service setup

### Debug Mode:
- Open browser console (F12) to see detailed error messages
- Check the console for "Email sent successfully" message

## Security Notes
- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Next Steps:**
1. Complete the EmailJS setup above
2. Test the contact form
3. Deploy your website
4. Monitor contact form submissions
