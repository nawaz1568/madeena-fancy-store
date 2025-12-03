import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 flex-shrink-0">
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white">Madeena Fancy Store & Readymade</h2>
            <p className="mt-4 text-white text-lg">Your one-stop destination for fashion, beauty & tradition — dresses, bangles, attar, slippers and wedding accessories.</p>
            <p className="mt-4 inline-block bg-yellow-300 text-gray-900 px-4 py-2 rounded-full font-semibold">Online shopping coming soon — stay tuned for our launch & sales!</p>
            <div className="mt-6">
              <Link to='/products' className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block">Explore Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-purple-600">Featured Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center hover:shadow-lg transition border-2 border-purple-200">
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop" alt="Bangles" className="h-28 w-full mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium text-purple-600">Bangles</h4>
          </div>
          <div className="bg-white p-4 rounded shadow text-center hover:shadow-lg transition border-2 border-purple-200">
            <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop" alt="Dresses" className="h-28 w-full mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium text-purple-600">Dresses</h4>
          </div>
          <div className="bg-white p-4 rounded shadow text-center hover:shadow-lg transition border-2 border-purple-200">
            <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop" alt="Attar" className="h-28 w-full mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium text-purple-600">Attar</h4>
          </div>
          <div className="bg-white p-4 rounded shadow text-center hover:shadow-lg transition border-2 border-purple-200">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop" alt="Wedding Items" className="h-28 w-full mx-auto object-cover rounded" />
            <h4 className="mt-2 font-medium text-purple-600">Wedding Items</h4>
          </div>
        </div>
      </section>
    </div>
  )
}