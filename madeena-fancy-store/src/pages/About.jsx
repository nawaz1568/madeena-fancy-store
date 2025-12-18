import React from 'react';

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      {/* Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-20 text-center text-white -mx-[100vw] px-[100vw] -mt-10">
        <h1 className="text-5xl md:text-6xl font-bold">About Madeena Fancy Store & Readymade</h1>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="font-semibold text-green-600">Madeena Fancy Store & Readymade</span> — 
            a trusted brand since <span className="font-semibold text-black">1992</span>, located at 
            <span className="text-gray-800"> Old Pet, Krishnagiri, Tamil Nadu (635001)</span>.
            <br /><br />
            We bring you a wide range of <span className="font-medium text-green-600">traditional</span> and 
            <span className="font-medium text-emerald-600"> modern fashion items</span> for men, women, and kids — 
            including dresses, bangles, attar, slippers, and elegant wedding accessories.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-green-600 mb-4">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
            <p className="text-gray-700 text-base"><span className="text-green-600 font-medium">🏆 Over 30 years</span> of trusted service and customer satisfaction</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border-l-4 border-emerald-400">
            <p className="text-gray-700 text-base">Authentic, <span className="text-emerald-600 font-medium">premium-quality products</span> curated for every occasion</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-400">
            <p className="text-gray-700 text-base">Exclusive <span className="text-green-600 font-medium">💒 wedding and festive collections</span> for special occasions</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border-l-4 border-emerald-400">
            <p className="text-gray-700 text-base">🤝 Personalized service that reflects tradition with a modern touch</p>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-2xl p-8 text-center shadow-2xl">
        <p className="text-green-100 text-base italic">
          "Where tradition meets style — discover fashion with a touch of heritage."
        </p>
      </section>
    </div>
  );
}