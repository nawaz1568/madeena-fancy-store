import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? 'text-emerald-800 font-semibold bg-white px-4 py-2 rounded-lg shadow-md'
        : 'text-white hover:text-emerald-100 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-all duration-300'
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(false)

  return (
    <header className="bg-emerald-600 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Brand Section - Far Left */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/brandimage.png"
            alt="Madeena Fancy Store logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => setShowBanner(true)}
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Madeena Fancy Store & Readymade
            </h1>
            <p className="text-sm text-emerald-100 font-medium">
              Brand since 1992 · Old Pet, Krishnagiri
            </p>
          </div>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-3">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <a
              href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-emerald-100 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-all duration-300"
            >
              Map
            </a>
          </nav>
          
          {/* WhatsApp Button - Far Right */}
          <a
            href="https://wa.me/919790561323"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg shadow-md hover:shadow-lg font-semibold transition-all duration-300 ml-5"
          >
            <FaWhatsapp className="text-green-600" /> WhatsApp
          </a>
        </div>
      </div>

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