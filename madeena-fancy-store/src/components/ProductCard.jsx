import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({item}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -3 }} 
      className="group bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200 hover:border-green-400 overflow-hidden relative"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Horizontal Layout */}
      <div className="flex relative z-10">
        {/* Left Image */}
        <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 p-4">
          {/* Header with Price */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-green-700 transition-colors duration-300 leading-tight">
              {item.title}
            </h3>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-lg text-sm font-bold shadow-md ml-2">
              {item.price}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.desc}</p>
          
          {/* Product Details */}
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
              ✨ Premium
            </span>
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
              🚚 Fast Ship
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
              💯 Quality
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-2 px-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm">
              View Details
            </button>
            <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-2 px-3 rounded-lg font-semibold transition-all duration-300 text-sm">
              💬
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
