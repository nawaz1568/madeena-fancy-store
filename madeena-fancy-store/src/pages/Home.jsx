import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingBag, FaStar, FaTruck, FaHeadset } from 'react-icons/fa'

export default function Home(){
  const navigate = useNavigate()

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName.toLowerCase()}`)
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <>
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 overflow-hidden shadow-2xl animate-slide-up -mx-8 md:-mx-16 rounded-2xl">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full -mr-48 -mt-48 animate-float particle"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full -ml-36 -mb-36 animate-float-delayed particle"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full -ml-32 -mt-32 animate-pulse-glow opacity-60"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-lime-300 to-green-300 rounded-full animate-bounce-enhanced opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full animate-zoom opacity-30"></div>
        </div>
        
        <div className="relative px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 leading-tight mb-6 drop-shadow-lg animate-slide-right neon-glow">
                Madeena Fancy Store & Readymade
              </h2>
              <p className="text-2xl text-gray-700 mb-8 font-medium leading-relaxed animate-slide-right-delayed hover-lift">Your one-stop destination for fashion, beauty & tradition — dresses, bangles, attar, slippers and wedding accessories.</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-10 animate-slide-right-delayed">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl animate-bounce-enhanced hover-glow magnetic">
                  🚀 Online Shopping Coming Soon!
                </div>
              </div>

              <Link to='/products' className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
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
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 hover:border-green-400">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="font-bold text-xl text-green-700 mb-3">Premium Quality</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Authentic products curated for excellence and lasting beauty</p>
        </div>
        
        <div className="group bg-gradient-to-br from-emerald-50 to-teal-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200 hover:border-emerald-400">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-bold text-xl text-emerald-700 mb-3">Fast Delivery</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Quick and reliable shipping nationwide with care</p>
        </div>
        
        <div className="group bg-gradient-to-br from-teal-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200 hover:border-teal-400">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="font-bold text-xl text-teal-700 mb-3">Best Prices</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Affordable rates with great value for money</p>
        </div>
        
        <div className="group bg-gradient-to-br from-green-50 to-lime-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 hover:border-lime-400">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="font-bold text-xl text-green-700 mb-3">24/7 Support</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Always here to help you with any questions</p>
        </div>
      </section>

    </div>

    {/* Featured Categories Section - Full Screen */}
    <section className="w-full bg-gradient-to-br from-green-50 to-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
            Madeena Fancy Store & Readymade
          </h3>
          <p className="text-gray-700 text-xl">Explore our complete collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Bangles', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', icon: '💍' },
            { name: 'Dresses', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop', icon: '👗' },
            { name: 'Attar', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', icon: '🌸' },
            { name: 'Wedding Items', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', icon: '💐' },
          ].map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => handleCategoryClick(cat.name)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-green-200 cursor-pointer"
            >
              <div className="relative h-64">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 text-3xl">{cat.icon}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h4 className="font-bold text-2xl text-gray-800 mb-3">
                  {cat.name}
                </h4>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-6 space-y-16">

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
              { id: 1, name: 'Bangles Set', price: '₹299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop' },
              { id: 2, name: 'Designer Dress', price: '₹1,299', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop' },
              { id: 3, name: 'Attar Pack', price: '₹199', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop' },
              { id: 4, name: 'Fancy Slippers', price: '₹399', img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=300&fit=crop' },
              { id: 5, name: 'Wedding Items', price: '₹799', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop' },
              { id: 6, name: 'Bridal Jewelry', price: '₹2,499', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop' },
            ].concat([
              { id: 1, name: 'Bangles Set', price: '₹299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop' },
              { id: 2, name: 'Designer Dress', price: '₹1,299', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop' },
              { id: 3, name: 'Attar Pack', price: '₹199', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop' },
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
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProductClick(product.id)
                    }}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl p-12 text-center shadow-2xl">
        <div className="relative z-10">
          <h3 className="text-4xl font-bold text-white mb-4">🎉 Connect With Us</h3>
          <p className="text-purple-100 text-xl mb-8">Get exclusive deals and updates. Contact us directly on WhatsApp!</p>
          <a
            href="https://wa.me/919790561323"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-purple-50 transition-all duration-300 shadow-xl"
          >
            📱 Contact on WhatsApp
          </a>
        </div>
      </section>
    </div>
    </>
  )
}