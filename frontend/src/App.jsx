
import React, { useState } from 'react';
import phone from './img/phone.jpg';
import shirt from './img/shirt.jpeg';
import shoes from './img/shoes.jpeg';
import stool from './img/stool.jpeg';

export default function AcciomaiHome() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: "Shop Anything in East Africa",
      searchPlaceholder: "Search anything...",
      button: "Start Shopping",
      made: "Made in East Africa",
      categories: ["Baskets", "Textiles", "Furniture", "Crafts"]
    },
    so: {
      title: "Ka Dukaameyso Wax kasta Bariga Afrika",
      searchPlaceholder: "Raadi wax kasta...",
      button: "Bilow Dukaameysi",
      made: "Lagu Sameeyay Bariga Afrika",
      categories: ["Dambiilo", "Dharka dhaqanka", "Qalabka Guriga", "Farshaxan"]
    },
    sw: {
      title: "Nunua chochote Afrika Mashariki",
      searchPlaceholder: "Tafuta bidhaa yoyote...",
      button: "Anza Kununua",
      made: "Imetengenezwa Afrika Mashariki",
      categories: ["Vikapu", "Nguo", "Samani", "Sanaa"]
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-[#0e57a4]">ACCIOMAI</h1>
        <div className="space-x-2">
          <button onClick={() => setLang('so')} className={\`text-sm \${lang === 'so' ? 'text-[#0e57a4]' : 'text-gray-700'} hover:text-[#0e57a4]\`}>Soornaali</button>
          <button onClick={() => setLang('en')} className={\`text-sm \${lang === 'en' ? 'text-[#0e57a4]' : 'text-gray-700'} hover:text-[#0e57a4]\`}>English</button>
          <button onClick={() => setLang('sw')} className={\`text-sm \${lang === 'sw' ? 'text-[#0e57a4]' : 'text-gray-700'} hover:text-[#0e57a4]\`}>Kiswahili</button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{content[lang].title}</h2>
          <input className="w-full p-3 border border-gray-300 rounded mb-4" placeholder={content[lang].searchPlaceholder} />
          <button className="px-6 py-3 bg-[#0e57a4] text-white rounded hover:bg-blue-800">{content[lang].button}</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={phone} alt="Phone" className="rounded-xl w-24 h-24 object-cover" />
          <img src={shirt} alt="Shirt" className="rounded-xl w-24 h-24 object-cover" />
          <img src={shoes} alt="Shoes" className="rounded-xl w-24 h-24 object-cover" />
          <img src={stool} alt="Stool" className="rounded-xl w-24 h-24 object-cover" />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-bold mb-4">{content[lang].made}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {content[lang].categories.map((item, idx) => (
            <div key={idx} className="bg-gray-50 border p-4 rounded-lg text-center font-semibold shadow-sm hover:shadow-md transition">{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
