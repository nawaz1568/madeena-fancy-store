import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useInventory } from '../context/InventoryContext'
import { sendOrderConfirmation } from '../utils/emailService'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()
  const { updateStock } = useInventory()
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppOrder = async () => {
    const orderDetails = items.map(item => 
      `${item.name} x${item.quantity} - ${item.price}`
    ).join('\n')
    
    const total = getCartTotal()
    const message = `Hi! I'd like to order:\n\n${orderDetails}\n\nTotal: ₹${total.toLocaleString()}`
    
    // Update inventory
    items.forEach(item => {
      updateStock(item.id, item.quantity, item)
    })
    
    // Send email confirmation
    await sendOrderConfirmation({
      customerEmail: 'customer@example.com',
      customerName: 'Customer',
      items,
      total: total.toLocaleString()
    })
    
    window.open(`https://wa.me/919790561323?text=${encodeURIComponent(message)}`, '_blank')
    clearCart()
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="cart-component fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
      >
        🛒 
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center font-bold">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] md:h-[85vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="p-4 md:p-6 border-b flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 flex-shrink-0">
          <h3 className="text-2xl font-bold text-gray-800">🛒 Shopping Cart</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">✕</button>
        </div>
        
        <div className="p-4 md:p-6 flex-1 overflow-y-auto" style={{maxHeight: 'calc(90vh - 200px)'}}>
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-500 text-xl mb-4">Your cart is empty</p>
              <p className="text-gray-400">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => {
                const itemTotal = parseInt(item.price.replace('₹', '').replace(',', '')) * item.quantity
                return (
                  <div key={item.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img src={item.img || item.image} alt={item.name || item.title} className="w-24 h-24 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-800 mb-1">{item.name || item.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-600 font-bold text-lg">{item.price}</p>
                            <p className="text-sm text-gray-500">Each item</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-800">₹{itemTotal.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">Total for {item.quantity} item{item.quantity > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 bg-white border border-gray-300 rounded-full text-lg hover:bg-gray-100 transition-colors font-bold shadow-sm"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-lg font-semibold bg-white px-3 py-1 rounded-lg border">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 bg-white border border-gray-300 rounded-full text-lg hover:bg-gray-100 transition-colors font-bold shadow-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-4 md:p-6 border-t bg-gray-50 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-800">Total: ₹{getCartTotal().toLocaleString()}</span>
              <button onClick={clearCart} className="text-red-500 hover:text-red-700 font-semibold">Clear All</button>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
            >
              📱 Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  )
}