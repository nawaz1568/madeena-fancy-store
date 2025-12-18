import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp, FaTimes, FaBars } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const NavItem = ({ to, children, mobile = false, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      isActive
        ? mobile
          ? 'text-emerald-800 font-semibold bg-white px-4 py-3 rounded-lg shadow-md block'
          : 'text-emerald-800 font-semibold bg-white px-3 py-2 rounded-lg shadow-md'
        : mobile
          ? 'text-white hover:text-emerald-100 hover:bg-emerald-700 px-4 py-3 rounded-lg transition-all duration-300 block'
          : 'text-white hover:text-emerald-100 hover:bg-emerald-700 px-3 py-2 rounded-lg transition-all duration-300'
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { user, signOut, loading } = useAuth()
  const { getCartCount } = useCart()

  return (
    <header className="bg-emerald-600 shadow-lg sticky top-0 z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4">
        {/* Brand Section */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/brandimage.png"
            alt="Madeena Fancy Store logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => setShowBanner(true)}
          />
          <div>
            <h1 className="text-2xl font-bold text-white">
              Madeena Fancy Store & Readymade
            </h1>
            <p className="text-sm text-emerald-100 font-medium">
              Brand since 1992 · Old Pet, Krishnagiri
            </p>
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <a
              href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-emerald-100 hover:bg-emerald-700 px-3 py-2 rounded-lg transition-all duration-300"
            >
              Map
            </a>
          </nav>
          
          {/* Cart Button */}
          <div className="relative">
            <button 
              onClick={() => document.querySelector('.cart-component')?.click()}
              className="text-white hover:text-emerald-100 hover:bg-emerald-700 px-3 py-2 rounded-lg transition-all duration-300 relative"
            >
              🛒
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
          
          {/* Auth Section */}
          {loading ? (
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
              >
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  {(user.user_metadata?.full_name || user.email)?.[0]?.toUpperCase()}
                </div>
                <span>{user.user_metadata?.full_name || user.email}</span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <Link
                    to="/my-orders"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={async () => {
                      await signOut()
                      setShowUserMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signup"
              className="bg-white text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign Up
            </Link>
          )}
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919790561323"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-4 py-2 rounded-lg shadow-md hover:shadow-lg font-semibold transition-all duration-300"
          >
            <FaWhatsapp className="text-green-600" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        {/* Mobile Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/brandimage.png"
            alt="Madeena Fancy Store logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg cursor-pointer"
            onClick={() => setShowBanner(true)}
          />
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">
              Madeena Fancy Store
            </h1>
            <p className="text-xs text-emerald-100">
              Since 1992
            </p>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2">
          {/* Cart Button */}
          <div className="relative">
            <button 
              onClick={() => document.querySelector('.cart-component')?.click()}
              className="text-white hover:text-emerald-100 p-2 rounded-lg transition-all duration-300 relative"
            >
              🛒
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          {/* User Menu */}
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-8 h-8 bg-white text-emerald-700 rounded-full flex items-center justify-center font-bold"
              >
                {(user.user_metadata?.full_name || user.email)?.[0]?.toUpperCase()}
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <Link
                    to="/my-orders"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={async () => {
                      await signOut()
                      setShowUserMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signup"
              className="bg-white text-emerald-700 px-3 py-1 rounded-lg font-bold text-sm"
            >
              Sign Up
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden bg-emerald-700 border-t border-emerald-500">
          <nav className="px-4 py-3 space-y-2">
            <NavItem to="/" mobile onClick={() => setShowMobileMenu(false)}>Home</NavItem>
            <NavItem to="/about" mobile onClick={() => setShowMobileMenu(false)}>About</NavItem>
            <NavItem to="/products" mobile onClick={() => setShowMobileMenu(false)}>Products</NavItem>
            <NavItem to="/contact" mobile onClick={() => setShowMobileMenu(false)}>Contact</NavItem>
            <a
              href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMobileMenu(false)}
              className="text-white hover:text-emerald-100 hover:bg-emerald-600 px-4 py-3 rounded-lg transition-all duration-300 block"
            >
              Map
            </a>
            <a
              href="https://wa.me/919790561323"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMobileMenu(false)}
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 w-full justify-center"
            >
              <FaWhatsapp className="text-green-600" /> WhatsApp
            </a>
          </nav>
        </div>
      )}

      {/* Banner Modal */}
      {showBanner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]" onClick={() => setShowBanner(false)}>
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={() => setShowBanner(false)}
              className="absolute -top-2 -right-2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <FaTimes size={20} />
            </button>
            <img
              src="/src/assets/brandimage.png"
              alt="Madeena Fancy Store Banner"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </header>
  )
}