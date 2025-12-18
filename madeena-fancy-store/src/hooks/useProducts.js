import { useState, useEffect } from 'react'

const mockProducts = [
  {
    id: 1,
    name: 'Elegant Saree',
    price: 2500,
    image: '/api/placeholder/300/400',
    category: 'sarees'
  },
  {
    id: 2,
    name: 'Designer Kurti',
    price: 1200,
    image: '/api/placeholder/300/400',
    category: 'kurtis'
  },
  {
    id: 3,
    name: 'Fancy Dupatta',
    price: 800,
    image: '/api/placeholder/300/400',
    category: 'dupattas'
  }
]

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 500)
  }, [])

  return { products, loading }
}