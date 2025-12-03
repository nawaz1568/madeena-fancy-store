import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaStar, FaTruck, FaHeadset } from 'react-icons/fa'

export default function Home(){
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -ml-36 -mb-36"></div>
        </div>
        
        <div className="relative px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left z-10">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                Madeena Fancy Store & Readymade
              </h2>
              <p className="text-xl text-gray-100 mb-6 font-medium">Your one-stop destination for fashion, beauty & tradition — dresses, bangles, attar, slippers and wedding accessories.</p>
              
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mb-8">
                <div className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
                  🚀 Online Shopping Coming Soon!
                </div>
              </div>

              <Link to='/products' className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                🛍️ Explore Products
              </Link>
            </div>

            <div className="flex-1 hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop" 
                  alt="Featured products" 
                  className="relative w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-purple-200">
          <div className="text-4xl mb-3">⭐</div>
          <h3 className="font-bold text-lg text-purple-700 mb-2">Premium Quality</h3>
          <p className="text-gray-600 text-sm">Authentic products curated for excellence</p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-pink-200">
          <div className="text-4xl mb-3">🚚</div>
          <h3 className="font-bold text-lg text-pink-700 mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">Quick and reliable shipping nationwide</p>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-red-200">
          <div className="text-4xl mb-3">💰</div>
          <h3 className="font-bold text-lg text-red-700 mb-2">Best Prices</h3>
          <p className="text-gray-600 text-sm">Affordable rates with great value</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-orange-200">
          <div className="text-4xl mb-3">💬</div>
          <h3 className="font-bold text-lg text-orange-700 mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">Always here to help you out</p>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section>
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            ✨ Featured Categories
          </h3>
          <p className="text-gray-600 text-lg">Explore our most popular collections</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Bangles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop', icon: '💍' },
            { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop', icon: '👗' },
            { name: 'Attar', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop', icon: '🌸' },
            { name: 'Wedding Items', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop', icon: '💐' },
          ].map((cat, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple-100 hover:border-purple-400 transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-40">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-4 text-center">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h4 className="font-bold text-lg text-purple-600 group-hover:text-pink-600 transition-colors">
                  {cat.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center shadow-xl">
        <h3 className="text-3xl font-bold text-white mb-4">🎉 Join Our Community</h3>
        <p className="text-gray-100 text-lg mb-6">Get exclusive deals and updates when we launch. Follow us on WhatsApp!</p>
        <a
          href="https://wa.me/919790561323"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          📱 Contact on WhatsApp
        </a>
      </section>
    </div>
  )
}