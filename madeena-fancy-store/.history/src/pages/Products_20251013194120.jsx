import React from 'react'
import ProductCard from '../components/ProductCard'

const items = [
  {
    id: 1,
    title: 'Bangles Set',
    desc: 'Colorful bangles for weddings and daily wear',
    image: 'https://images.unsplash.com/photo-1601050690597-3a3fbc7c2b35?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Designer Dress',
    desc: 'Elegant readymade dresses for special occasions',
    image: 'https://images.unsplash.com/photo-1607344645866-009c9c6ad9f9?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Attar Pack',
    desc: 'Fragrant attar bottles in beautiful packaging',
    image: 'https://images.unsplash.com/photo-1606813902761-d6cbd24637b6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'Fancy Slippers',
    desc: 'Stylish and comfortable slippers for daily wear',
    image: 'https://images.unsplash.com/photo-1618354696667-4bde23c9ad15?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    title: 'Wedding Items',
    desc: 'Decorative items and gifts for wedding ceremonies',
    image: 'https://images.unsplash.com/photo-1589739906089-99b9e8fd7f93?auto=format&fit=crop&w=500&q=80',
  },
]

export default function Products() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2 text-purple-700">Products</h2>
      <p className="text-gray-600 mb-6">Click any item to view details (demo).</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(it => (
          <div
            key={it.id}
            className="flex items-center bg-white rounded-2xl shadow-md hover:shadow-lg p-4 transition-all duration-300"
          >
            {/* Left: Round image */}
            <img
              src={it.image}
              alt={it.title}
              className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-purple-500"
            />

            {/* Right: Title & description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{it.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
