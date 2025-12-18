import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui'
import { NAVIGATION_ITEMS, SITE_CONFIG } from '../../constants'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()
  const { user, signOut, loading } = useAuth()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{SITE_CONFIG.name.split(' ')[0]}</h1>
              <p className="text-xs text-gray-500 -mt-1">Fancy Store</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.email?.[0]?.toUpperCase()}
                  </div>
                  <span className="text-gray-700 font-medium">{user.email}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
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
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
            
            <Button variant="primary" size="sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center space-x-1">
                <span>📞</span>
                <span>Call</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Auth */}
              <div className="px-4 space-y-3">
                {loading ? (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-lg">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user.email?.[0]?.toUpperCase()}
                      </div>
                      <span className="text-gray-700 text-sm">{user.email}</span>
                    </div>
                    <button
                      onClick={async () => {
                        await signOut()
                        setIsMenuOpen(false)
                      }}
                      className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block w-full text-center px-4 py-2 text-green-600 border border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
                
                <Button variant="primary" className="w-full">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center space-x-1">
                    <span>📞</span>
                    <span>Call Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header