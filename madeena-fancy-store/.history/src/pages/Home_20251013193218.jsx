import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 mb-6">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-white">Madeena Fancy Store & Readymade</h2>
            <p className="mt-4 text-white text-lg">Your one-stop destination for fashion, beauty & tradition — dresses, bangles, attar, slippers and wedding accessories.</p>
            <p className="mt-4 inline-block bg-yellow-300 text-gray-900 px-4 py-2 rounded-full font-semibold">Online shopping coming soon — stay tuned for our launch & sales!</p>
            <div className="mt-6">
              <Link to='/products' className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Explore Products</Link>
            </div>
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
          <div className="bg-white p-4 rounded shadow text-center">
            <img src="/src/assets/shop1.png" alt="" className="h-28 mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium">Wedding Items</h4>
          </div>
        </div>
      </section>
    </div>
  )
}