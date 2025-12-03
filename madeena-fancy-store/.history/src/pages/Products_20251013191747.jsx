import React from 'react'
import ProductCard from '../components/ProductCard'

const items = [
  {id:1, title:'Bangles Set', desc:'Colorful bangles for weddings and daily wear', image:'/src/assets/shop1.png'},
  {id:2, title:'Designer Dress', desc:'Elegant readymade dresses', image:'/src/assets/shop1.png'},
  {id:3, title:'Attar Pack', desc:'Fragrant attar bottles', image:'/src/assets/shop1.png'},
  {id:4, title:'Fancy Slippers', desc:'Comfortable slip-ons', image:'/src/assets/shop1.png'},
  {id:5, title:'Wedding Items', desc:'Decorative items for ceremonies', image:'/src/assets/shop1.png'},
]

export default function Products(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <p className="text-gray-600 mb-4">Click any item to view details (demo).</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(it => <ProductCard key={it.id} item={it} />)}
      </div>
    </div>
  )
}
