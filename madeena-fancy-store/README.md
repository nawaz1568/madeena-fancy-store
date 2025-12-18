# Madeena Fancy Store & Readymade

A professional React + Vite + Tailwind CSS + Supabase website for Madeena Fancy Store.

## Features

- 🛍️ Product catalog with categories
- 🔐 Admin authentication system
- 📱 WhatsApp integration for orders
- 🖼️ Image upload to Supabase storage
- 📊 Admin dashboard for product management
- 📱 Responsive design
- ⚡ Fast loading with Vite

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
npm install @supabase/supabase-js
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Copy `.env.example` to `.env` and add your Supabase credentials:
```
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL commands from `supabase-setup.sql`

This will create:
- `products` table with all required fields
- Storage bucket for product images
- Row Level Security policies

### 4. Run the Project

```bash
npm run dev
```

## Usage

### For Customers
- Browse products on the homepage
- View product details
- Click "Buy via WhatsApp" to contact seller

### For Admin
1. Go to `/signup` to create admin account
2. Check your email and click the verification link
3. Login at `/login` after email verification
4. Access admin dashboard at `/admin`
5. Add/manage products with image uploads

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Layout components
│   ├── ui/              # Reusable UI components
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx  # Authentication context
├── hooks/
│   └── useProducts.js   # Product data hooks
├── lib/
│   └── supabaseClient.js # Supabase configuration
├── pages/
│   ├── auth/           # Login, Signup, ForgotPassword
│   ├── admin/          # Admin dashboard, product management
│   └── [public pages]  # Home, Products, About, etc.
├── services/
├── styles/
│   └── globals.css     # Global styles and Tailwind
├── utils/
│   └── helpers.js      # Utility functions
└── constants/
    └── index.js        # App constants
```

## Environment Variables

Create a `.env` file with:
```
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Technologies Used

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Supabase (Database, Auth, Storage)
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: Tailwind CSS with custom components

## Admin Features

- ✅ Secure authentication with email verification
- ✅ Add products with image upload
- ✅ Edit/delete products
- ✅ Category management
- ✅ WhatsApp number configuration
- ✅ Image storage in Supabase

## Customer Features

- ✅ Browse products by category
- ✅ Search functionality
- ✅ Product details view
- ✅ WhatsApp integration for orders
- ✅ Responsive design
- ✅ Fast loading