# 🚀 cPanel Deployment Guide for Aline Global Website

This guide will help you deploy your Next.js website to any cPanel hosting.

---

## 📋 Prerequisites

- ✅ cPanel hosting account with File Manager access
- ✅ Your hosting domain/subdomain configured
- ✅ FTP client (optional, but recommended - FileZilla)

---

## 🎯 Deployment Methods

### **Method 1: Any cPanel Hosting (Static Export)** ✅ RECOMMENDED

This works on **ANY** cPanel hosting, even without Node.js support!

#### **Step 1: Build the Static Files**

On your local computer, run these commands:

```bash
cd node-meta
npm run build
```

This will create an `out` folder with all your static files.

#### **Step 2: Locate Your Build Files**

After building, you'll find a folder called `out` in your project:
```
node-meta/
  └── out/           ← This folder contains all your website files
      ├── index.html
      ├── about.html
      ├── business.html
      ├── contact.html
      ├── _next/
      └── ...
```

#### **Step 3: Upload to cPanel**

**Option A: Using cPanel File Manager**

1. Login to your cPanel
2. Click **"File Manager"**
3. Navigate to **`public_html`** (or your domain's root folder)
4. Click **"Upload"** button
5. Select ALL files from the `out` folder (not the folder itself!)
6. Upload and wait for completion

**Option B: Using FTP (Faster for large sites)**

1. Download FileZilla (free FTP client)
2. Connect to your hosting:
   - Host: `ftp.yourdomain.com`
   - Username: Your cPanel username
   - Password: Your cPanel password
3. Navigate to `public_html` on the right side
4. Drag all files from the `out` folder to `public_html`

#### **Step 4: Configure .htaccess (Important!)**

Create a `.htaccess` file in your `public_html` folder with this content:

```apache
# Enable HTTPS (if you have SSL)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes
DirectorySlash On

# Custom error pages (optional)
ErrorDocument 404 /404.html

# Compression for faster loading
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### **Step 5: Test Your Website**

Visit your domain: `http://yourdomain.com`

Test these pages:
- ✅ Home page: `yourdomain.com`
- ✅ About: `yourdomain.com/about/`
- ✅ Business: `yourdomain.com/business/`
- ✅ Contact: `yourdomain.com/contact/`

---

### **Method 2: cPanel with Node.js Support** (If Available)

**⚠️ Only if your cPanel has "Node.js Selector" or "Setup Node.js App"**

#### **Step 1: Check Node.js Version**

1. Login to cPanel
2. Find **"Node.js Selector"** or **"Setup Node.js App"**
3. Check if Node.js 18+ is available

#### **Step 2: Upload Project via Git or FTP**

**Option A: Using Git (Recommended)**

```bash
# In cPanel Terminal or SSH
cd ~
git clone https://github.com/raselai/Aline-Global.git
cd Aline-Global
```

**Option B: Upload via FTP**
- Upload the entire project folder (not just the out folder)

#### **Step 3: Install Dependencies**

```bash
cd ~/Aline-Global
npm install
```

#### **Step 4: Build the Project**

```bash
npm run build
```

#### **Step 5: Configure Node.js App in cPanel**

1. Go to **"Node.js Selector"**
2. Click **"Create Application"**
3. Settings:
   - Node.js version: **18 or higher**
   - Application mode: **Production**
   - Application root: `Aline-Global`
   - Application URL: Your domain
   - Application startup file: `node_modules/next/dist/bin/next`
   - Arguments: `start`
4. Click **"Create"**

#### **Step 6: Set Environment Variables**

In the Node.js app settings, add:
```
NODE_ENV=production
PORT=3000
```

#### **Step 7: Start the Application**

Click **"Start"** or **"Restart"** button

---

## 🔧 Troubleshooting

### **Issue: Pages return 404 errors**

**Solution:** Make sure you have the `.htaccess` file configured correctly (see Step 4 above)

### **Issue: Styles not loading**

**Solution:**
1. Check if all files from the `out` folder were uploaded
2. Clear your browser cache (Ctrl + Shift + R)
3. Check file permissions in cPanel (should be 644 for files, 755 for folders)

### **Issue: Images not showing**

**Solution:**
1. Make sure the `public` folder contents were uploaded
2. Check image file paths are correct
3. Verify file names match exactly (case-sensitive)

### **Issue: Contact form not working**

**Note:** The contact form is client-side only in static export. To make it work:
1. Use a service like Formspree, EmailJS, or Web3Forms
2. Or set up a backend API to handle form submissions

---

## 📊 File Structure After Upload

Your `public_html` should look like this:

```
public_html/
  ├── .htaccess          ← Created by you
  ├── index.html         ← From out folder
  ├── about.html         ← From out folder
  ├── business.html      ← From out folder
  ├── contact.html       ← From out folder
  ├── 404.html           ← From out folder
  ├── _next/             ← From out folder
  │   ├── static/
  │   └── ...
  └── favicon.ico        ← From out folder
```

---

## 🎯 Quick Checklist

Before deploying:
- ✅ Built the project with `npm run build`
- ✅ Located the `out` folder
- ✅ Prepared .htaccess file
- ✅ Have cPanel login credentials
- ✅ Know your domain name

During deployment:
- ✅ Upload all files from `out` folder
- ✅ Create .htaccess file
- ✅ Set correct file permissions
- ✅ Clear old files if updating

After deployment:
- ✅ Test all pages (Home, About, Business, Contact)
- ✅ Check navigation links work
- ✅ Verify images load correctly
- ✅ Test on mobile devices
- ✅ Check loading speed

---

## 🔄 Updating Your Website

When you make changes:

1. **Pull latest from GitHub:**
   ```bash
   cd node-meta
   git pull origin main
   ```

2. **Rebuild:**
   ```bash
   npm run build
   ```

3. **Re-upload** the `out` folder to cPanel

---

## 💡 Pro Tips

1. **Enable Gzip Compression** in cPanel for faster loading
2. **Use CloudFlare** (free) for better performance and security
3. **Enable SSL Certificate** in cPanel for HTTPS
4. **Backup regularly** - use cPanel's backup feature
5. **Monitor uptime** - use a service like UptimeRobot (free)

---

## 📞 Need Help?

If you encounter issues:
1. Check cPanel error logs (File Manager → error_log)
2. Verify file permissions
3. Clear browser cache
4. Contact your hosting support

---

## ✅ Success Checklist

Your deployment is successful when:
- ✅ All pages load without errors
- ✅ Navigation works correctly
- ✅ Images and styles appear properly
- ✅ Mobile version works well
- ✅ SSL certificate is active (https://)
- ✅ Loading speed is good

---

**Last Updated:** November 2025
**Website:** Aline Global Ltd
**Repository:** https://github.com/raselai/Aline-Global
