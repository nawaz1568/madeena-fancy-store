import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { InventoryProvider } from './context/InventoryContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ProductDetailPage from './pages/ProductDetailPage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import MyOrders from './pages/MyOrders';

export default function App() {
  return (
    <AuthProvider>
      <InventoryProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<div className="container mx-auto px-4 py-8"><Home /></div>} />
                <Route path="/about" element={<div className="container mx-auto px-4 py-8"><About /></div>} />
                <Route path="/products" element={<div className="container mx-auto px-4 py-8"><Products /></div>} />
                <Route path="/product/:id" element={<div className="container mx-auto px-4 py-8"><ProductDetailPage /></div>} />
                <Route path="/gallery" element={<div className="container mx-auto px-4 py-8"><Gallery /></div>} />
                <Route path="/contact" element={<div className="container mx-auto px-4 py-8"><Contact /></div>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/my-orders" element={<div className="container mx-auto px-4 py-8"><MyOrders /></div>} />
              </Routes>
            </main>
            <Footer />
            <Cart />
          </div>
        </CartProvider>
      </InventoryProvider>
    </AuthProvider>
  );
}




