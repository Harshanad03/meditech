# EmailJS Template for Meditech Website

## Email Template Code

Use this template in your EmailJS dashboard under "Email Templates":

### Subject Line:
```
New Contact Form Submission - {{from_name}} | Meditech Solutions
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #334155;
            background-color: #f8fafc;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .form-details {
            background: #f1f5f9;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .field {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .field-label {
            font-weight: 600;
            color: #0d9488;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #334155;
            font-size: 16px;
        }
        .message-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .footer {
            background: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .contact-info {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 10px;
        }
        .website-link {
            color: #0d9488;
            text-decoration: none;
            font-weight: 600;
        }
        .timestamp {
            font-size: 12px;
            color: #94a3b8;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">🏥 Meditech Solutions</div>
            <div class="subtitle">Medical Equipment & Healthcare Solutions</div>
        </div>

        <!-- Content -->
        <div class="content">
            <h2 style="color: #0d9488; margin-top: 0;">New Contact Form Submission</h2>
            <p>You have received a new inquiry from your Meditech website contact form.</p>

            <!-- Form Details -->
            <div class="form-details">
                <div class="field">
                    <div class="field-label">Name</div>
                    <div class="field-value">{{from_name}}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Phone</div>
                    <div class="field-value">
                        <a href="tel:{{phone}}" style="color: #0d9488; text-decoration: none;">{{phone}}</a>
                    </div>
                </div>
            </div>

            <!-- Message -->
            <div class="message-box">
                <div class="field-label">Message</div>
                <div class="field-value" style="white-space: pre-wrap;">{{message}}</div>
            </div>

            <!-- Action Required -->
            <div style="background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <strong style="color: #1e40af;">📧 Action Required:</strong>
                <p style="margin: 10px 0 0 0; color: #1e40af;">Please respond to this inquiry within 24 hours to maintain excellent customer service.</p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="contact-info">
                <strong>Meditech Solutions</strong><br>
                📍 161/3, PON NAGAR, MUTHUR MAIN ROAD<br>
                CHINNIYAM PALAYAM, Erode, Tamil Nadu 638104<br>
                📞 94421 32352 | ✉️ meditechsolution.in@gmail.com
            </div>
            <div class="timestamp">
                Received on {{current_date}} at {{current_time}}
            </div>
        </div>
    </div>
</body>
</html>
```

## Template Variables

Make sure these variables are set up in your EmailJS template:

- `{{from_name}}` - Sender's name
- `{{phone}}` - Sender's phone number
- `{{message}}` - Sender's message
- `{{current_date}}` - Current date (auto-generated)
- `{{current_time}}` - Current time (auto-generated)

## Template Features

✅ **Professional Design** - Matches your website's teal/cyan theme
✅ **Responsive Layout** - Works on all devices
✅ **Branded Header** - Meditech Solutions logo and colors
✅ **Clear Information** - Easy to read form details
✅ **Action Required** - Reminds you to respond
✅ **Contact Information** - Your business details in footer
✅ **Timestamp** - Shows when the message was received

## Setup Instructions

1. Go to your EmailJS dashboard
2. Navigate to "Email Templates"
3. Create a new template
4. Copy the HTML code above
5. Set the subject line as shown
6. Save the template
7. Note down your Template ID

## Alternative Simple Template

If you prefer a simpler text-based template:

```
Subject: New Contact Form Submission - {{from_name}} | Meditech Solutions

🏥 MEDITECH SOLUTIONS
Medical Equipment & Healthcare Solutions

NEW CONTACT FORM SUBMISSION
============================

Name: {{from_name}}
Phone: {{phone}}

Message:
{{message}}

============================
Please respond within 24 hours.

Contact Information:
📍 161/3, PON NAGAR, MUTHUR MAIN ROAD
   CHINNIYAM PALAYAM, Erode, Tamil Nadu 638104
📞 94421 32352
✉️ meditechsolution.in@gmail.com

Received: {{current_date}} at {{current_time}}
```

Choose the template that best fits your needs!
