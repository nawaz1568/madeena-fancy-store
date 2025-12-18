import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function MyOrders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // Mock orders data - in real app, fetch from database
    if (user) {
      setOrders([
        {
          id: 1,
          date: '2024-01-15',
          items: [
            { name: 'Bangles Set', quantity: 2, price: '₹299' },
            { name: 'Designer Dress', quantity: 1, price: '₹1,299' }
          ],
          total: '₹1,897',
          status: 'Delivered'
        },
        {
          id: 2,
          date: '2024-01-10',
          items: [
            { name: 'Attar Pack', quantity: 3, price: '₹199' }
          ],
          total: '₹597',
          status: 'Processing'
        }
      ])
    }
  }, [user])

  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Please Login</h2>
        <p className="text-gray-600 mb-6">You need to login to view your orders</p>
        <Link 
          to="/login" 
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Login Now
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No orders found</p>
          <Link 
            to="/products" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md border p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                  <p className="text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  order.status === 'Delivered' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {order.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-lg font-bold">Total: {order.total}</span>
                <div className="space-x-3">
                  <button className="text-green-600 hover:text-green-700 font-semibold">
                    View Details
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}