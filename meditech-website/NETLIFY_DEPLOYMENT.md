# Netlify Deployment Guide for Meditech Website

## 🚀 **Deployment Steps**

### **Method 1: Drag & Drop (Easiest)**

1. **Build your project:**
   ```bash
   npm run build:prod
   ```

2. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Sign up/Login with GitHub, GitLab, or email

3. **Deploy:**
   - Drag the `build` folder to the Netlify dashboard
   - Your site will be live instantly!

### **Method 2: Git Integration (Recommended)**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "New site from Git"
   - Choose your repository
   - Set build settings:
     - **Build command:** `npm run build:prod`
     - **Publish directory:** `build`

### **Method 3: Netlify CLI**

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=build
   ```

## ⚙️ **Environment Variables Setup**

### **For EmailJS to work on Netlify:**

1. **Go to Site Settings:**
   - In your Netlify dashboard
   - Go to Site Settings → Environment Variables

2. **Add these variables:**
   ```
   REACT_APP_EMAILJS_SERVICE_ID = service_r6cyzwzl
   REACT_APP_EMAILJS_TEMPLATE_ID = template_mochdtd
   REACT_APP_EMAILJS_PUBLIC_KEY = efHy2r7QPPP_kLAqw
   REACT_APP_EMAILJS_TO_EMAIL = meditechsolution.in@gmail.com
   ```

3. **Redeploy** after adding environment variables

## 🔧 **Configuration Files**

### **netlify.toml** (Already created)
- Build settings
- Redirect rules
- Security headers
- Cache optimization

### **package.json** (Already configured)
- Build scripts
- Dependencies

## 📁 **File Structure for Deployment**

```
meditech-website/
├── build/                 # Production build (created by npm run build)
├── public/               # Static files
├── src/                  # Source code
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
└── .env                 # Environment variables (local only)
```

## 🎯 **Pre-Deployment Checklist**

- [ ] **Build successfully:** `npm run build:prod`
- [ ] **Test locally:** `npm start`
- [ ] **Check all images** are loading
- [ ] **Test contact form** (after adding env vars)
- [ ] **Verify responsive design**
- [ ] **Check all links** are working
- [ ] **Verify no console logs** in production build

## 🚀 **Post-Deployment**

1. **Custom Domain** (Optional):
   - Go to Domain Settings
   - Add your custom domain
   - Configure DNS

2. **SSL Certificate:**
   - Automatically provided by Netlify
   - HTTPS enabled by default

3. **Performance:**
   - CDN automatically enabled
   - Global edge locations
   - Automatic compression

## 🔍 **Troubleshooting**

### **Build Fails:**
- Check Node.js version (use 18)
- Ensure all dependencies are installed
- Check for TypeScript errors

### **Contact Form Not Working:**
- Verify environment variables are set
- Check EmailJS credentials
- Test in browser console

### **Images Not Loading:**
- Check image paths in public folder
- Ensure images are in build folder
- Verify file extensions

## 📊 **Performance Tips**

1. **Optimize Images:**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Code Splitting:**
   - Already configured in React
   - Lazy loading components

3. **Caching:**
   - Configured in netlify.toml
   - Static assets cached for 1 year

## 🎉 **Success!**

Your Meditech website will be live at:
- **Default URL:** `https://your-site-name.netlify.app`
- **Custom URL:** `https://yourdomain.com` (if configured)

---

**Need Help?**
- Netlify Docs: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/
