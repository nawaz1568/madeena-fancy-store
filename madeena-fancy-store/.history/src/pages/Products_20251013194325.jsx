import React from 'react'
import ProductCard from '../components/ProductCard'

const items = [
  {
    id: 1, 
    title: 'Bangles Set', 
    desc: 'Colorful bangles for weddings and daily wear', 
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop'
  },
  {
    id: 2, 
    title: 'Designer Dress', 
    desc: 'Elegant readymade dresses', 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop'
  },
  {
    id: 3, 
    title: 'Attar Pack', 
    desc: 'Fragrant attar bottles', 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop'
  },
  {
    id: 4, 
    title: 'Fancy Slippers', 
    desc: 'Comfortable slip-ons', 
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=500&fit=crop'
  },
  {
    id: 5, 
    title: 'Wedding Items', 
    desc: 'Decorative items for ceremonies', 
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop'
  },
]

export default function Products(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Products</h2>
      <p className="text-gray-600 mb-4">Click any item to view details (demo).</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(it => <ProductCard key={it.id} item={it} />)}
      </div>
    </div>
  )
}