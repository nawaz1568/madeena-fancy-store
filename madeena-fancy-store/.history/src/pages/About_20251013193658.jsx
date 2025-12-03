import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8 mt-6">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-purple-700 mb-4 text-center">
        About Madeena Fancy Store & Readymade
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-lg text-center">
        <span className="font-semibold text-purple-600">Madeena Fancy Store & Readymade</span> — 
        a trusted brand since <span className="font-semibold">1992</span>, located at 
        <span className="text-gray-800"> Old Pet, Krishnagiri, Tamil Nadu (635001)</span>.
        <br />
        We bring you a wide range of <span className="font-medium text-purple-600">traditional</span> and 
        <span className="font-medium text-purple-600"> modern fashion items</span> for men, women, and kids — 
        including dresses, bangles, attar, slippers, and elegant wedding accessories.
      </p>

      {/* Key Points */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us</h3>
        <ul className="space-y-2 text-gray-700 text-base list-disc list-inside">
          <li><span className="text-purple-600 font-medium">Over 30 years</span> of trusted service and customer satisfaction</li>
          <li>Authentic, premium-quality products curated for every occasion</li>
          <li>Exclusive <span className="text-purple-600 font-medium">wedding and festive collections</span></li>
          <li>Personalized service that reflects tradition with a modern touch</li>
        </ul>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center text-gray-600 italic">
        “Where tradition meets style — discover fashion with a touch of heritage.”
      </div>
    </div>
  );
}
