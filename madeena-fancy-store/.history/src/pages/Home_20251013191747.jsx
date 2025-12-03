import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold">Madeena Fancy Store & Readymade</h2>
            <p className="mt-2 text-gray-700">Your one-stop destination for fashion, beauty & tradition — dresses, bangles, attar, slippers and wedding accessories.</p>
            <p className="mt-3 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded">Online shopping coming soon — stay tuned for our launch & sales!</p>
            <div className="mt-4">
              <Link to='/products' className="bg-indigo-600 text-white px-4 py-2 rounded">Explore Products</Link>
            </div>
          </div>
          <div className="w-64 h-64">
            <img src="/src/assets/shop1.png" alt="shop" className="w-full h-full object-cover rounded" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Featured Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            <img src="/src/assets/shop1.png" alt="" className="h-28 mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium">Bangles</h4>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <img src="/src/assets/shop1.png" alt="" className="h-28 mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium">Dresses</h4>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <img src="/src/assets/shop1.png" alt="" className="h-28 mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium">Attar</h4>
          </div>
          <div class_name="bg-white p-4 rounded shadow text-center">
            <img src="/src/assets/shop1.png" alt="" className="h-28 mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium">Wedding Items</h4>
          </div>
        </div>
      </section>
    </div>
  )
}
