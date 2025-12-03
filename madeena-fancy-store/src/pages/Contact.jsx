import React from 'react'

export default function Contact(){
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
            <h2 className="text-3xl font-bold text-black mb-2">Contact Us</h2>
            <p className="text-gray-700 text-lg">Get in touch with us for any inquiries</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
          <h3 className="font-bold text-xl text-green-600 mb-4">Shop Location</h3>
          <div className="space-y-3">
            <p className="text-gray-700">📍 Old Pet, Krishnagiri, Krishnagiri 635001</p>
            <p>📞 Phone: <a href="tel:+919790561323" className="text-green-600 font-semibold hover:text-emerald-600">9790561323</a></p>
            <p>💬 WhatsApp: <a href="https://wa.me/919790561323" target="_blank" rel="noreferrer" className="text-green-600 font-semibold hover:text-emerald-600">Chat on WhatsApp</a></p>
            <p><a href="https://maps.app.goo.gl/XSZ8vt4kAezXG1wF9" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200" target="_blank" rel="noreferrer">📍 Open on Google Maps</a></p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-400">
          <h3 className="font-bold text-xl text-emerald-600 mb-4">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}}>
            <input className="w-full border-2 border-gray-200 focus:border-green-400 rounded-lg px-4 py-3 transition-colors" placeholder="Your name" required />
            <input className="w-full border-2 border-gray-200 focus:border-green-400 rounded-lg px-4 py-3 transition-colors" placeholder="Email" type="email" required />
            <textarea className="w-full border-2 border-gray-200 focus:border-green-400 rounded-lg px-4 py-3 transition-colors" placeholder="Message" rows="4" required></textarea>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
