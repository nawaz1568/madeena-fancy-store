import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
// Removed ProductCard import - using custom design
import { useCart } from '../context/CartContext'

const items = [
  {
    id: 1, 
    title: 'Bangles Set', 
    desc: 'Colorful bangles for weddings and daily wear', 
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    price: '₹299'
  },
  {
    id: 2, 
    title: 'Designer Dress', 
    desc: 'Elegant readymade dresses', 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop',
    price: '₹1,299'
  },
  {
    id: 3, 
    title: 'Attar Pack', 
    desc: 'Fragrant attar bottles', 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
    price: '₹199'
  },
  {
    id: 4, 
    title: 'Fancy Slippers', 
    desc: 'Comfortable slip-ons', 
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=500&fit=crop',
    price: '₹399'
  },
  {
    id: 5, 
    title: 'Wedding Items', 
    desc: 'Decorative items for ceremonies', 
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop',
    price: '₹799'
  },
  {
    id: 6, 
    title: 'Bridal Jewelry Set', 
    desc: 'Complete jewelry set for brides', 
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
    price: '₹2,499'
  },
  {
    id: 7, 
    title: 'Ladies Handbag', 
    desc: 'Stylish handbags for all occasions', 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
    price: '₹599'
  },
  {
    id: 8, 
    title: 'Fancy Saree', 
    desc: 'Traditional sarees with modern designs', 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop',
    price: '₹1,799'
  },
  {
    id: 9, 
    title: 'Hair Accessories', 
    desc: 'Beautiful hair clips and bands', 
    image: 'https://images.unsplash.com/photo-1525003425571-c90f3e631d9f?w=500&h=500&fit=crop',
    price: '₹149'
  },
  {
    id: 10, 
    title: 'Cosmetics Set', 
    desc: 'Makeup and beauty products', 
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    price: '₹899'
  },
  {
    id: 11, 
    title: 'Traditional Dupatta', 
    desc: 'Elegant dupattas for ethnic wear', 
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop',
    price: '₹499'
  },
  {
    id: 12, 
    title: 'Fancy Footwear', 
    desc: 'Designer sandals and heels', 
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
    price: '₹699'
  },
  {
    id: 13, 
    title: 'Bindis & Kumkum', 
    desc: 'Decorative bindis and kumkum sets', 
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    price: '₹99'
  },
  {
    id: 14, 
    title: 'Fashion Jewelry', 
    desc: 'Trendy earrings and necklaces', 
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    price: '₹349'
  },
  {
    id: 15, 
    title: 'Fancy Suits', 
    desc: 'Ready-made suits for ladies', 
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=500&fit=crop',
    price: '₹1,499'
  },
]

export default function Products(){
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [filteredItems, setFilteredItems] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const { addToCart } = useCart()

  const categories = {
    'bangles': ['Bangles Set', 'Bridal Jewelry Set', 'Fashion Jewelry'],
    'dresses': ['Designer Dress', 'Fancy Saree', 'Fancy Suits', 'Traditional Dupatta'],
    'attar': ['Attar Pack', 'Cosmetics Set'],
    'footwear': ['Fancy Slippers', 'Fancy Footwear'],
    'accessories': ['Ladies Handbag', 'Hair Accessories'],
    'wedding items': ['Wedding Items', 'Bindis & Kumkum']
  }

  useEffect(() => {
    let filtered = items
    
    // Category filter
    const category = searchParams.get('category')
    if (category && categories[category]) {
      filtered = filtered.filter(item => categories[category].includes(item.title))
      setSelectedCategory(category)
    } else {
      setSelectedCategory('all')
    }
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Price filter
    if (priceRange !== 'all') {
      filtered = filtered.filter(item => {
        const price = parseInt(item.price.replace('₹', '').replace(',', ''))
        switch(priceRange) {
          case 'under-500': return price < 500
          case '500-1000': return price >= 500 && price <= 1000
          case '1000-2000': return price > 1000 && price <= 2000
          case 'over-2000': return price > 2000
          default: return true
        }
      })
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'price-low': return parseInt(a.price.replace('₹', '').replace(',', '')) - parseInt(b.price.replace('₹', '').replace(',', ''))
        case 'price-high': return parseInt(b.price.replace('₹', '').replace(',', '')) - parseInt(a.price.replace('₹', '').replace(',', ''))
        case 'name': return a.title.localeCompare(b.title)
        default: return 0
      }
    })
    
    setFilteredItems(filtered)
  }, [searchParams, searchTerm, priceRange, sortBy])

  const handleProductClick = (productId) => {
    window.scrollTo(0, 0)
    navigate(`/product/${productId}`)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setFilteredItems(items)
      navigate('/products')
    } else {
      const filtered = items.filter(item => categories[category].includes(item.title))
      setFilteredItems(filtered)
      navigate(`/products?category=${category}`)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 overflow-hidden shadow-2xl -mx-8 md:-mx-16 rounded-2xl">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full -mr-32 -mt-32 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full -ml-24 -mb-24 animate-float-delayed"></div>
        </div>
        
        <div className="relative px-6 md:px-12 py-6 md:py-8">
          <div className="text-center z-10">
            <h2 className="text-3xl font-bold text-black mb-2">
              {selectedCategory === 'all' ? 'Our Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection`}
            </h2>
            <p className="text-gray-700 text-lg">Click any item to view details and order via WhatsApp</p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="mb-8 space-y-6">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for bangles, dresses, attar, wedding items and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 border-2 border-teal-200 rounded-2xl focus:ring-4 focus:ring-teal-300 focus:border-teal-400 text-lg font-medium placeholder-gray-500 shadow-lg transition-all duration-300 hover:shadow-xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          {/* Category Filter */}
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Categories
            </h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryFilter('all')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-teal-100 hover:to-cyan-100 border-2 border-teal-200 hover:border-teal-300'
                }`}
              >
                ✨ All Products
              </button>
              {Object.keys(categories).map(category => {
                const icons = {
                  'bangles': '💍',
                  'dresses': '👗', 
                  'attar': '🌸',
                  'footwear': '👠',
                  'accessories': '👜',
                  'wedding items': '💐'
                }
                const colors = {
                  'bangles': 'from-teal-500 to-cyan-500',
                  'dresses': 'from-cyan-500 to-blue-500',
                  'attar': 'from-teal-500 to-emerald-500',
                  'footwear': 'from-cyan-500 to-teal-500',
                  'accessories': 'from-blue-500 to-cyan-500',
                  'wedding items': 'from-emerald-500 to-teal-500'
                }
                const hoverColors = {
                  'bangles': 'hover:from-teal-100 hover:to-cyan-100 hover:border-teal-300',
                  'dresses': 'hover:from-cyan-100 hover:to-blue-100 hover:border-cyan-300',
                  'attar': 'hover:from-teal-100 hover:to-emerald-100 hover:border-teal-300',
                  'footwear': 'hover:from-cyan-100 hover:to-teal-100 hover:border-cyan-300',
                  'accessories': 'hover:from-blue-100 hover:to-cyan-100 hover:border-blue-300',
                  'wedding items': 'hover:from-emerald-100 hover:to-teal-100 hover:border-emerald-300'
                }
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all capitalize shadow-lg ${
                      selectedCategory === category
                        ? `bg-gradient-to-r ${colors[category]} text-white transform scale-105`
                        : `bg-white text-gray-700 hover:bg-gradient-to-r ${hoverColors[category]} border-2 border-gray-200`
                    }`}
                  >
                    {icons[category]} {category.replace('_', ' ')}
                  </button>
                )
              })}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
          
            {/* Price Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-700">💰 Price:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border-2 border-emerald-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 bg-white font-medium"
              >
                <option value="all">All Prices</option>
                <option value="under-500">Under ₹500</option>
                <option value="500-1000">₹500 - ₹1,000</option>
                <option value="1000-2000">₹1,000 - ₹2,000</option>
                <option value="over-2000">Over ₹2,000</option>
              </select>
            </div>
            
            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-700">📊 Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border-2 border-emerald-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 bg-white font-medium"
              >
                <option value="name">By Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="text-center text-gray-600">
          {filteredItems.length} product{filteredItems.length !== 1 ? 's' : ''} found
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map(it => (
            <div key={it.id} className="group bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-100 hover:border-green-300">
              <div className="relative overflow-hidden">
                <img 
                  src={it.image} 
                  alt={it.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                  onClick={() => handleProductClick(it.id)}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white px-3 py-2 rounded-full font-bold shadow-lg text-sm transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {it.price}
                </div>
                
                {/* Quality Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
                  ⭐ Premium
                </div>
                
                {/* Heart Icon */}
                <button className="absolute bottom-3 left-3 bg-white/90 text-red-500 p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  ❤️
                </button>
                
                {/* Quick View */}
                <button
                  onClick={() => handleProductClick(it.id)}
                  className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                >
                  👁️ Quick View
                </button>
              </div>
              
              <div className="p-4 relative">
                {/* Decorative Element */}
                <div className="absolute top-0 left-1/2 w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300 cursor-pointer line-clamp-1" onClick={() => handleProductClick(it.id)}>
                  {it.title}
                </h3>
                
                <p className="text-gray-600 mb-3 text-sm line-clamp-2 group-hover:text-gray-700 transition-colors">{it.desc}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">✨ Quality</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">🚚 Fast Ship</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">💯 Authentic</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{it.price}</span>
                    <span className="text-xs text-gray-500 line-through">₹{Math.floor(parseInt(it.price.replace('₹', '').replace(',', '')) * 1.3)}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(it)
                      }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      🛒
                    </button>
                    
                    <button 
                      onClick={() => handleProductClick(it.id)}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setPriceRange('all')
                setSelectedCategory('all')
                navigate('/products')
              }}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  )
}