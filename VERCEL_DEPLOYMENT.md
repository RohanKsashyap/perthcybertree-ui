# Vercel Deployment Guide for PerthCyberTree

## Files Required for Vercel Deployment

### 1. vercel.json (✅ Created)
Located in the frontend root directory, this file enables SPA routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Environment Variables
In your Vercel dashboard, add this environment variable:
- **Key**: `VITE_API_BASE_URL`
- **Value**: `https://perthcybertree-backend.onrender.com`

## Deployment Steps

### Step 1: Set Environment Variable
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://perthcybertree-backend.onrender.com`
   - **Environment**: Production (and Preview if needed)

### Step 2: Deploy Updated Code
1. Commit and push your changes to your repository
2. Vercel will automatically redeploy
3. Or manually trigger a redeploy from the Vercel dashboard

### Step 3: Test Routes
After deployment, test these URLs:
- ✅ `https://www.perthcybertree.com.au/` (home page)
- ✅ `https://www.perthcybertree.com.au/admin` (should work after fix)
- ✅ `https://www.perthcybertree.com.au/login` (should work after fix)

## Troubleshooting

### If /admin still shows 404:
1. Verify `vercel.json` is in the frontend root directory (not in public/)
2. Check that environment variable is set in Vercel dashboard
3. Trigger a fresh deployment
4. Clear browser cache and try again

### If API calls fail:
1. Check browser console for actual API URLs being called
2. Verify environment variable is set correctly
3. Test API endpoints directly: `https://perthcybertree-backend.onrender.com/api/services`

## Expected Behavior After Fix
- Direct navigation to `/admin` will work
- All API calls will use the production backend
- No console logs or debug output
- Clean, professional user experience