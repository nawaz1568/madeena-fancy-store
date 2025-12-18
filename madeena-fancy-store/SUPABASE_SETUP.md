# Supabase Authentication Setup

## 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project
4. Wait for setup to complete

## 2. Get Your Credentials
1. Go to Settings > API
2. Copy your Project URL
3. Copy your anon/public key

## 3. Environment Setup
1. Copy `.env.example` to `.env`
2. Add your credentials:
```
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Authentication Setup
Supabase automatically creates an `auth.users` table. No additional setup needed for basic authentication.

## 5. Test Authentication
1. Run `npm run dev`
2. Click "Sign Up" in the navbar
3. Create an account with your email
4. Check your email for verification link
5. After verification, you can login

## Features Included
✅ User registration with email verification
✅ Login/logout functionality  
✅ Protected routes capability
✅ User session management
✅ Responsive auth UI
✅ Error handling

## Next Steps
- Add user profiles table
- Implement admin roles
- Add password reset functionality
- Create protected admin routes