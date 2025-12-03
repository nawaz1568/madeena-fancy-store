import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const NavItem = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'}>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/src/assets/shop1.png" alt="logo" className="w-12 h-12 rounded-full object-cover border"/>
          <div>
            <h1 className="text-xl font-bold">Madeena Fancy Store & Readymade</h1>
            <p className="text-sm text-gray-500">Brand since 1992 · Old Pet, Krishnagiri</p>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <a href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9" target="_blank" rel="noreferrer" className="text-sm text-gray-600">Map</a>
          <a href="https://wa.me/917990561323" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded">
            <FaWhatsapp/> WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
