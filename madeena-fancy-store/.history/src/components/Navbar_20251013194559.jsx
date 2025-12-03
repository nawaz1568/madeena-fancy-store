import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=80&q=80"
            alt="Brand Logo"
            className="w-12 h-12 rounded-full border-2 border-purple-500"
          />
          <h1 className="text-2xl font-bold text-purple-700">
            Madeena Fancy Store
          </h1>
        </div>

        {/* Right Menu */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
