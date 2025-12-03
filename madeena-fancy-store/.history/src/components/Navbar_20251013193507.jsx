import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? 'text-purple-700 font-semibold border-b-2 border-purple-500 pb-1'
        : 'text-gray-700 hover:text-purple-600 transition-colors duration-200'
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="bg-purple-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Section */}
        <Link to="/" className="flex items-center gap-3">
          {/* 👇 Replace this with your brand image */}
          <img
            src="/src/assets/bran" // <-- replace with your actual image name
            alt="Madeena Fancy Store logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-purple-400 shadow-md"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Madeena Fancy Store & Readymade
            </h1>
            <p className="text-sm text-yellow-600 font-medium">
              Brand since 1992 · Old Pet, Krishnagiri
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-5 md:gap-8">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>

          <a
            href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-purple-700 hover:text-purple-500 transition-colors duration-200"
          >
            Map
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917990561323"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg shadow-sm transition-all duration-200"
          >
            <FaWhatsapp className="text-white" /> WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
