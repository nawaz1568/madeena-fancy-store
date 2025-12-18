import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaWhatsapp, FaArrowLeft, FaPhone } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useInventory } from "../context/InventoryContext";

// Same items array - you can import this from a shared file
const items = [
  {
    id: 1, 
    title: 'Bangles Set', 
    desc: 'Colorful bangles for weddings and daily wear', 
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    price: '₹299',
    details: 'Beautiful set of colorful bangles perfect for weddings, festivals, and daily wear. Available in various sizes and colors.',
    category: 'Jewelry'
  },
  {
    id: 2, 
    title: 'Designer Dress', 
    desc: 'Elegant readymade dresses', 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop',
    price: '₹1,299',
    details: 'Elegant designer dress made with premium fabric. Perfect for parties and special occasions.',
    category: 'Clothing'
  },
  {
    id: 3, 
    title: 'Attar Pack', 
    desc: 'Fragrant attar bottles', 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
    price: '₹199',
    details: 'Premium quality attar with long-lasting fragrance. Available in multiple scents.',
    category: 'Perfumes'
  },
  {
    id: 4, 
    title: 'Fancy Slippers', 
    desc: 'Comfortable slip-ons', 
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&h=500&fit=crop',
    price: '₹399',
    details: 'Comfortable and stylish slippers for everyday wear. Available in all sizes.',
    category: 'Footwear'
  },
  {
    id: 5, 
    title: 'Wedding Items', 
    desc: 'Decorative items for ceremonies', 
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop',
    price: '₹799',
    details: 'Complete set of wedding decorative items including garlands, ornaments, and accessories.',
    category: 'Wedding'
  },
  {
    id: 6, 
    title: 'Bridal Jewelry Set', 
    desc: 'Complete jewelry set for brides', 
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
    price: '₹2,499',
    details: 'Exquisite bridal jewelry set including necklace, earrings, and matching accessories.',
    category: 'Jewelry'
  },
  {
    id: 7, 
    title: 'Ladies Handbag', 
    desc: 'Stylish handbags for all occasions', 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
    price: '₹599',
    details: 'Fashionable handbag with spacious compartments. Perfect for daily use and special occasions.',
    category: 'Accessories'
  },
  {
    id: 8, 
    title: 'Fancy Saree', 
    desc: 'Traditional sarees with modern designs', 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=500&fit=crop',
    price: '₹1,799',
    details: 'Beautiful traditional saree with contemporary design. Made with high-quality fabric.',
    category: 'Clothing'
  },
  {
    id: 9, 
    title: 'Hair Accessories', 
    desc: 'Beautiful hair clips and bands', 
    image: 'https://images.unsplash.com/photo-1525003425571-c90f3e631d9f?w=500&h=500&fit=crop',
    price: '₹149',
    details: 'Elegant hair accessories including clips, bands, and decorative pins.',
    category: 'Accessories'
  },
  {
    id: 10, 
    title: 'Cosmetics Set', 
    desc: 'Makeup and beauty products', 
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    price: '₹899',
    details: 'Complete cosmetics set with makeup essentials and beauty products.',
    category: 'Beauty'
  },
  {
    id: 11, 
    title: 'Traditional Dupatta', 
    desc: 'Elegant dupattas for ethnic wear', 
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop',
    price: '₹499',
    details: 'Stylish dupatta with traditional prints. Complements any ethnic outfit.',
    category: 'Clothing'
  },
  {
    id: 12, 
    title: 'Fancy Footwear', 
    desc: 'Designer sandals and heels', 
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop',
    price: '₹699',
    details: 'Trendy designer footwear for parties and special events.',
    category: 'Footwear'
  },
  {
    id: 13, 
    title: 'Bindis & Kumkum', 
    desc: 'Decorative bindis and kumkum sets', 
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    price: '₹99',
    details: 'Traditional bindis and kumkum in various designs and colors.',
    category: 'Accessories'
  },
  {
    id: 14, 
    title: 'Fashion Jewelry', 
    desc: 'Trendy earrings and necklaces', 
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    price: '₹349',
    details: 'Modern fashion jewelry with contemporary designs for daily wear.',
    category: 'Jewelry'
  },
  {
    id: 15, 
    title: 'Fancy Suits', 
    desc: 'Ready-made suits for ladies', 
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=500&fit=crop',
    price: '₹1,499',
    details: 'Elegant ready-made suits with intricate designs and comfortable fit.',
    category: 'Clothing'
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { getStock, isLowStock, isOutOfStock } = useInventory()
  
  const product = items.find(item => item.id === parseInt(id))
  const stock = getStock(parseInt(id))
  const lowStock = isLowStock(parseInt(id))
  const outOfStock = isOutOfStock(parseInt(id))

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">Product not found</h2>
        <Link to="/products" className="text-green-600 hover:underline mt-4 inline-block">
          Go back to products
        </Link>
      </div>
    )
  }

  const whatsappMessage = `Hi, I'm interested in ${product.title} (${product.price}). Is it available?`
  const whatsappLink = `https://wa.me/919790561323?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-green-600 hover:text-emerald-600 mb-6 font-medium"
      >
        <FaArrowLeft /> Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.desc}</p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <p className="text-3xl font-bold text-green-600">{product.price}</p>
              </div>
              
              {/* Stock Status */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Stock:</span>
                  {outOfStock ? (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </span>
                  ) : lowStock ? (
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Low Stock ({stock} left)
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock ({stock} available)
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Product Details</h3>
                <p className="text-gray-700 leading-relaxed">{product.details}</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Online shopping coming soon! For now, contact us via WhatsApp or visit our store.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => !outOfStock && addToCart(product)}
                disabled={outOfStock}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg shadow-md transition-all duration-200 w-full font-semibold ${
                  outOfStock 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                🛒 {outOfStock ? 'Out of Stock' : 'Add to Cart'}
              </button>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 w-full font-semibold"
              >
                <FaWhatsapp className="text-xl" /> Order via WhatsApp
              </a>
              
              <a
                href="tel:+919790561323"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200 w-full font-semibold"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Store Info */}
      <div className="mt-8 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-2xl p-6 text-white shadow-2xl">
        <h3 className="text-xl font-bold mb-2">Visit Our Store</h3>
        <p className="mb-1">Madeena Fancy Store & Readymade</p>
        <p className="mb-3">Old Pet, Krishnagiri</p>
        <a
          href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}