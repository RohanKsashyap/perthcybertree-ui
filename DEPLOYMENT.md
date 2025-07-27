# Deployment Guide

## SPA Routing Configuration

This React application uses client-side routing. To ensure all routes work correctly in production, the server must be configured to serve `index.html` for all routes that don't correspond to actual files.

## Configuration Files Included

### Apache (.htaccess)
- File: `public/.htaccess`
- For Apache servers (most shared hosting)

### Netlify (_redirects)
- File: `public/_redirects`
- For Netlify deployments

### Vercel (vercel.json)
- File: `public/vercel.json`
- For Vercel deployments

### IIS (web.config)
- File: `public/web.config`
- For Windows IIS servers

## Troubleshooting 404 Errors

If you're getting 404 errors for routes like `/admin` or `/login`:

1. **Check server configuration**: Ensure your hosting provider supports SPA routing
2. **Verify file upload**: Make sure the appropriate config file was uploaded to your server
3. **Contact hosting support**: Some providers require manual configuration for SPA routing

## Environment Variables

Make sure to set the following environment variable in your deployment:

```
VITE_API_BASE_URL=https://perthcybertree-backend.onrender.com
```

## Build Command

```bash
npm run build
```

## Routes

- `/` - Home page
- `/login` - Login page  
- `/admin` - Admin dashboard (protected route)

All routes should work with direct URL access after proper server configuration.