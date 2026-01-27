# SSL Certificate Setup Guide - tammyscurls.com

## 🔴 Current Status

- ✅ Domain registered: `tammyscurls.com` (Active on HostKing)
- ✅ Registration Date: 29/08/2025
- ✅ Next Due Date: 29/08/2026
- ❌ **SSL Status: No SSL Detected**

## 🎯 Why There's No SSL

SSL certificates are **not automatically generated** when you register a domain. You need to:

1. **Have the domain hosted** on a web server (not just registered)
2. **Request/generate an SSL certificate** (usually via Let's Encrypt)
3. **Install the certificate** on your hosting server
4. **Configure HTTPS redirect** to force secure connections

## 📋 Prerequisites Checklist

Before setting up SSL, verify:

- [ ] Domain DNS is pointing to your hosting server
- [ ] Website is accessible via HTTP (`http://tammyscurls.com`)
- [ ] You have access to your hosting control panel (cPanel, DirectAdmin, etc.)
- [ ] You know where your website files are hosted

## 🚀 Step-by-Step SSL Setup

### Step 1: Identify Your Hosting Provider

**Check where your website is actually hosted:**

1. **Test DNS Resolution:**
   - Open Command Prompt (Windows) or Terminal (Mac/Linux)
   - Run: `nslookup tammyscurls.com`
   - Note the IP address returned

2. **Test HTTP Access:**
   - Visit: `http://tammyscurls.com` (use HTTP, not HTTPS)
   - If the site loads, note which hosting control panel you see (if any)

3. **Common Hosting Control Panels:**
   - **cPanel** - Usually at `yourdomain.com/cpanel` or `cpanel.yourhosting.com`
   - **DirectAdmin** - Usually at `yourhosting.com:2222`
   - **Plesk** - Usually at `yourdomain.com:8443`
   - **HostKing** - May have hosting management in the same panel

### Step 2: Access SSL Certificate Management

**Option A: If HostKing Provides Hosting**

1. Log into `my.hostking.host`
2. Navigate to domain management for `tammyscurls.com`
3. Look for:
   - "SSL Certificates" section
   - "Security" or "HTTPS" options
   - "Let's Encrypt" or "Free SSL" options

**Option B: If Using cPanel**

1. Log into your cPanel
2. Find "SSL/TLS Status" or "Let's Encrypt SSL" section
3. Click "Run AutoSSL" or "Manage SSL Sites"

**Option C: If Using DirectAdmin**

1. Log into DirectAdmin (usually `yourhosting.com:2222`)
2. Navigate to: `SSL Certificates` → `Let's Encrypt`
3. Select `tammyscurls.com` from domain dropdown

**Option D: If Using Other Hosting**

Contact your hosting provider's support for SSL setup instructions.

### Step 3: Generate SSL Certificate

**For Let's Encrypt (Free SSL):**

1. **Select Domain:**
   - Make sure `tammyscurls.com` is selected

2. **Include Both Versions:**
   - ☑ `tammyscurls.com`
   - ☑ `www.tammyscurls.com`
   - This ensures both www and non-www work with HTTPS

3. **Generate Certificate:**
   - Click "Generate" or "Request Certificate"
   - Wait 1-2 minutes for processing
   - You should see a success message

4. **Verify Certificate:**
   - Certificate should appear in your SSL certificates list
   - Status should show "Active" or "Valid"

### Step 4: Enable HTTPS Redirect

**After certificate is generated:**

1. **Find HTTPS Redirect Option:**
   - Look for "Force HTTPS" or "HTTPS Redirect"
   - Usually in SSL settings or domain settings

2. **Enable Redirect:**
   - Check the box: ☑ **"Force HTTPS"** or **"Redirect HTTP to HTTPS"**
   - Click "Save" or "Apply"

3. **This will:**
   - Automatically redirect `http://` to `https://`
   - Force all traffic to use secure connection

### Step 5: Test SSL Certificate

**Verify everything works:**

1. **Test both URLs:**
   - `https://tammyscurls.com` ✅
   - `https://www.tammyscurls.com` ✅

2. **What you should see:**
   - ✅ Green padlock icon in address bar
   - ✅ "Connection is secure" message
   - ✅ No "Not secure" warning
   - ✅ Website loads correctly

3. **If still shows "Not secure":**
   - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
   - Try incognito/private browsing mode
   - Wait 2-5 minutes for certificate propagation
   - Check certificate details:
     - Click padlock icon → Certificate
     - Verify both domains listed in "Subject Alternative Name"

## 🔍 Troubleshooting

### Issue: Can't find SSL options in HostKing

**Possible reasons:**
1. HostKing might only be the domain registrar, not the hosting provider
2. Your website might be hosted elsewhere
3. SSL might be managed through your hosting provider, not HostKing

**Solution:**
- Check where your website files are actually hosted
- Contact HostKing support to ask about SSL certificate options
- If hosting elsewhere, set up SSL through your hosting provider

### Issue: Certificate generation fails

**Common causes:**
1. Domain not accessible via HTTP
2. DNS not pointing to hosting server
3. `.well-known/acme-challenge/` directory missing or inaccessible

**Solutions:**
1. Verify `http://tammyscurls.com` loads your website
2. Check DNS settings point to your hosting server
3. Ensure website files are uploaded to hosting
4. Wait 5-10 minutes and try again

### Issue: Certificate generated but site still shows "Not secure"

**Solutions:**
1. Clear browser cache (Ctrl+F5)
2. Try incognito mode
3. Wait 2-5 minutes for propagation
4. Verify certificate includes both domains
5. Check that HTTPS redirect is enabled

### Issue: Works for one domain but not the other

**If `https://tammyscurls.com` works but `https://www.tammyscurls.com` doesn't:**
- Certificate might only include one domain
- Regenerate certificate with BOTH domains selected
- Or set up redirect from www to non-www (or vice versa)

## 📞 Need Help?

**If you're stuck:**

1. **Contact HostKing Support:**
   - Ask: "How do I set up SSL certificate for tammyscurls.com?"
   - Provide your domain registration details

2. **Contact Your Hosting Provider:**
   - If hosting elsewhere, contact them for SSL setup
   - Ask about Let's Encrypt SSL certificate options

3. **Check Hosting Documentation:**
   - Look for SSL/HTTPS setup guides
   - Search for "Let's Encrypt" or "Free SSL" instructions

## ✅ Expected Result

After completing these steps:
- ✅ Green padlock icon in browser
- ✅ "Connection is secure" message
- ✅ No SSL errors
- ✅ Both www and non-www work with HTTPS
- ✅ Automatic redirect from HTTP to HTTPS

---

## 🎯 Quick Summary

**Why no SSL?** SSL certificates must be manually requested and installed. They're not automatically included with domain registration.

**What to do?** 
1. Find where your website is hosted
2. Access SSL certificate management in your hosting control panel
3. Generate a Let's Encrypt certificate (free)
4. Enable HTTPS redirect
5. Test both www and non-www versions

**Time required:** 5-15 minutes (depending on your hosting setup)
