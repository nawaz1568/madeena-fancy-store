import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 overflow-hidden shadow-2xl animate-slide-up -mx-8 md:-mx-16 rounded-2xl">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full -mr-32 -mt-32 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full -ml-24 -mb-24 animate-float-delayed"></div>
        </div>
        
        <div className="relative px-6 md:px-12 py-6 md:py-8">
          <div className="text-center z-10">
            <h2 className="text-3xl font-bold text-black mb-2">Our Products</h2>
            <p className="text-gray-700 text-lg">Click any item to view details and order via WhatsApp</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(it => (
          <div key={it.id} onClick={() => handleProductClick(it.id)} style={{cursor: 'pointer'}}>
            <ProductCard item={it} />
          </div>
        ))}
      </section>
    </div>
  )
}