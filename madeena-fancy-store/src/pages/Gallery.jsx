import React from 'react'

const images = ['/src/assets/shop1.png','/src/assets/shop1.png','/src/assets/shop1.png','/src/assets/shop1.png','/src/assets/shop1.png']

export default function Gallery(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((src,i)=>(
          <div key={i} className="bg-white rounded overflow-hidden shadow">
            <img src={src} alt={`img-${i}`} className="w-full h-40 object-cover"/>
          </div>
        ))}
      </div>
    </div>
  )
}
