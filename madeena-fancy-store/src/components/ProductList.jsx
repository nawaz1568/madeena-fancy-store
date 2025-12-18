import React from 'react'
import ProductCard from './ProductCard'
import { useProducts } from '../hooks/useProducts'

const ProductList = ({ category }) => {
  const { products, loading } = useProducts()
  
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList