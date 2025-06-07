import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-600">ACCIOMAI</h1>
        <div className="flex gap-2">
          <button>Soornaali</button>
          <button>English</button>
          <button>Kiswahili</button>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shop Anything in East Africa</h2>
          <input placeholder="Search anything..." className="p-4 border border-gray-300 rounded w-full" />
          <button className="bg-red-600 text-white px-4 py-2 rounded">Start Shopping</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="/img/phone.jpg" alt="Phone" className="rounded-xl" />
          <img src="/img/shirt.jpg" alt="Shirt" className="rounded-xl" />
          <img src="/img/shoes.jpg" alt="Shoes" className="rounded-xl" />
          <img src="/img/stool.jpg" alt="Stool" className="rounded-xl" />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-bold mb-4">Made in East Africa</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Baskets", "Textiles", "Furniture", "Crafts"].map(item => (
            <div key={item} className="rounded-xl shadow-md bg-white p-4">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
