import React from 'react';
import phone from './img/phone.jpg';
import shirt from './img/shirt.jpeg';
import shoes from './img/shoes.jpeg';
import stool from './img/stool.jpeg';

export default function App() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-red-600">ACCIOMAI</h1>
        <div className="space-x-2">
          <button className="text-sm text-gray-700 hover:text-red-600">Soornaali</button>
          <button className="text-sm text-gray-700 hover:text-red-600">English</button>
          <button className="text-sm text-gray-700 hover:text-red-600">Kiswahili</button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop Anything in East Africa</h2>
          <input className="w-full p-3 border border-gray-300 rounded mb-4" placeholder="Search anything..." />
          <button className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700">Start Shopping</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={phone} alt="Phone" className="rounded-lg w-32 h-32 object-cover" />
          <img src={shirt} alt="Shirt" className="rounded-lg w-32 h-32 object-cover" />
          <img src={shoes} alt="Shoes" className="rounded-lg w-32 h-32 object-cover" />
          <img src={stool} alt="Stool" className="rounded-lg w-32 h-32 object-cover" />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-bold mb-4">Made in East Africa</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Baskets", "Textiles", "Furniture", "Crafts"].map(item => (
            <div key={item} className="bg-gray-50 border p-4 rounded-lg text-center font-semibold shadow-sm hover:shadow-md transition">{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
