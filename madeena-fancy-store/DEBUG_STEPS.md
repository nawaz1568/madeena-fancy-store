# 🔍 Debug Steps for Signup Issue

## Step 1: Open Browser Console
1. Open your browser (Chrome/Firefox/Edge)
2. Press `F12` or right-click → "Inspect"
3. Go to "Console" tab
4. Clear any existing logs

## Step 2: Try Signup
1. Go to signup page
2. Fill in email and password
3. Click "Create Account"
4. Watch the console for logs

## Step 3: Check Console Output
Look for these logs:
- 🔧 Supabase Config
- 🔄 Starting signup process
- 📧 Email: your-email
- 🔐 Password length: X
- 🔄 AuthContext: Calling supabase.auth.signUp
- 📊 Signup response

## Step 4: Common Issues & Fixes

### Issue: "Failed to fetch"
**Cause**: Network/CORS issue
**Fix**: 
```bash
# Try running on different port
npm run dev -- --port 3000
```

### Issue: Environment variables not loading
**Check**: Console shows "Using mock client: true"
**Fix**: Create `.env` file:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Issue: Supabase connection error
**Check**: Console shows real Supabase URL
**Fix**: Verify Supabase credentials are correct

## Step 5: Quick Test
If you see "Mock: signUp called" in console, the signup should work.
If not, share the console error messages.

## Emergency Fix
If nothing works, temporarily disable auth:
1. Go to `src/components/Navbar.jsx`
2. Replace auth section with:
```jsx
<div className="text-white">Auth Disabled</div>
```