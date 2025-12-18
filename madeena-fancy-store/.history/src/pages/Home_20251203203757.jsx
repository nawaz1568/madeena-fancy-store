import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaStar, FaTruck, FaHeadset } from 'react-icons/fa'

export default function Home(){
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 overflow-hidden shadow-2xl animate-slide-up -mx-8 md:-mx-16 rounded-2xl">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full -mr-48 -mt-48 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full -ml-36 -mb-36 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full -ml-32 -mt-32 animate-float opacity-60"></div>
        </div>
        
        <div className="relative px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6 drop-shadow-lg animate-slide-right">
                Madeena Fancy Store & Readymade
              </h2>
              <p className="text-2xl text-gray-700 mb-8 font-medium leading-relaxed animate-slide-right-delayed">Your one-stop destination for fashion, beauty & tradition — dresses, bangles, attar, slippers and wedding accessories.</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-10 animate-slide-right-delayed">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl animate-bounce">
                  🚀 Online Shopping Coming Soon!
                </div>
              </div>

              <Link to='/products' className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 animate-slide-right-delayed">
                🛍️ Explore Products
              </Link>
            </div>

            <div className="flex-1 hidden md:flex justify-center">
              <div className="relative animate-slide-left">
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-300 opacity-25 rounded-3xl blur-3xl animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop" 
                  alt="Featured products" 
                  className="relative w-96 h-96 rounded-3xl object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up">
        <div className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200 hover:border-green-400 hover:scale-105 hover-glow animate-card-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="text-5xl mb-4 animate-wiggle group-hover:animate-bounce relative z-10">⭐</div>
          <h3 className="font-bold text-xl text-green-700 mb-3 group-hover:text-emerald-700 transition-colors">Premium Quality</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Authentic products curated for excellence and lasting beauty</p>
        </div>
        
        <div className="group bg-gradient-to-br from-emerald-50 to-teal-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-200 hover:border-emerald-400 hover:scale-105 hover-glow animate-card-2 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-300/20 to-teal-300/20 rounded-full -ml-8 -mb-8 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="text-5xl mb-4 animate-wiggle group-hover:animate-pulse relative z-10">🚚</div>
          <h3 className="font-bold text-xl text-emerald-700 mb-3 group-hover:text-teal-700 transition-colors">Fast Delivery</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Quick and reliable shipping nationwide with care</p>
        </div>
        
        <div className="group bg-gradient-to-br from-teal-50 to-green-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-teal-200 hover:border-teal-400 hover:scale-105 hover-glow animate-card-3 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-bl from-teal-300/20 to-green-300/20 rounded-full -mr-6 -mt-6 group-hover:scale-200 transition-transform duration-500"></div>
          <div className="text-5xl mb-4 animate-wiggle group-hover:animate-bounce relative z-10">💰</div>
          <h3 className="font-bold text-xl text-teal-700 mb-3 group-hover:text-green-700 transition-colors">Best Prices</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Affordable rates with great value for money</p>
        </div>
        
        <div className="group bg-gradient-to-br from-green-50 to-lime-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200 hover:border-lime-400 hover:scale-105 hover-glow animate-card-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-14 h-14 bg-gradient-to-br from-lime-300/20 to-green-300/20 rounded-full -ml-7 -mt-7 group-hover:scale-175 transition-transform duration-500"></div>
          <div className="text-5xl mb-4 animate-wiggle group-hover:animate-pulse relative z-10">💬</div>
          <h3 className="font-bold text-xl text-green-700 mb-3 group-hover:text-lime-700 transition-colors">24/7 Support</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Always here to help you with any questions</p>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section>
        <div className="text-center mb-10 animate-fade-in-up">
          <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 animate-gradient">
            ✨ Featured Categories
          </h3>
          <p className="text-gray-600 text-lg">Explore our most popular collections</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Bangles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop', icon: '💍', delay: '0.1s' },
            { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop', icon: '👗', delay: '0.2s' },
            { name: 'Attar', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop', icon: '🌸', delay: '0.3s' },
            { name: 'Wedding Items', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop', icon: '💐', delay: '0.4s' },
          ].map((cat, idx) => (
            <div 
              key={idx}
              className="group bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-green-200 hover:border-green-400 transform hover:scale-110 hover-rotate animate-fade-in-up relative"
              style={{ animationDelay: cat.delay }}
            >
              {/* Floating Icon */}
              <div className="absolute -top-2 -right-2 text-4xl animate-float z-20">{cat.icon}</div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 to-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden h-44">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-green-900/40 transition-all duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-400/50 rounded-2xl transition-all duration-500"></div>
              </div>
              
              <div className="p-5 text-center relative z-10">
                <h4 className="font-bold text-xl text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-2">
                  {cat.name}
                </h4>
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="animate-fade-in-up">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 animate-gradient">
            🛍️ Featured Products
          </h3>
          <p className="text-gray-600 text-lg">Discover our handpicked collection</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-slide-infinite">
            {[
              { name: 'Bangles Set', price: '₹299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop' },
              { name: 'Designer Dress', price: '₹1,299', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop' },
              { name: 'Attar Pack', price: '₹199', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop' },
              { name: 'Fancy Slippers', price: '₹399', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=300&fit=crop' },
              { name: 'Wedding Items', price: '₹799', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop' },
              { name: 'Bridal Jewelry', price: '₹2,499', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop' },
            ].concat([
              { name: 'Bangles Set', price: '₹299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop' },
              { name: 'Designer Dress', price: '₹1,299', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop' },
              { name: 'Attar Pack', price: '₹199', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop' },
            ]).map((product, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-64 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200 hover:border-green-400 group overflow-hidden"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {product.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-gray-800 group-hover:text-green-700 transition-colors mb-2">
                    {product.name}
                  </h4>
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-2xl p-12 text-center shadow-2xl animate-fade-in-up overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
        
        <div className="relative z-10">
          <h3 className="text-4xl font-bold text-white mb-4 animate-wiggle">🎉 Join Our Community</h3>
          <p className="text-green-100 text-xl mb-8 animate-fade-in-up">Get exclusive deals and updates when we launch. Follow us on WhatsApp!</p>
          <a
            href="https://wa.me/919790561323"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 animate-glow hover-lift"
          >
            📱 Contact on WhatsApp
          </a>
        </div>
c      </section>
    </div>
  )
}