
import React from "react";

const products = [
  {
    image: "/static-assets/product1.jpg",
    title: "Jay's CineKit (DaVinci Powergrade)",
    price: "Rs. 2,700.00",
    oldPrice: "Rs. 3,500.00",
    isNew: true,
  },
  {
    image: "/static-assets/product2.jpg",
    title: "Jay V2 LUT Pack",
    price: "From Rs. 3,500.00",
    oldPrice: "",
    isNew: false,
  },
  {
    image: "/static-assets/product3.jpg",
    title: "Jay V1 LUT Pack",
    price: "From Rs. 2,700.00",
    oldPrice: "Rs. 3,500.00",
    isNew: false,
  },
];

const reviews = [
  {
    rating: 5,
    text: "Not only did the LUT's give my videos an upgrade. The additional videos helped me with getting my Ace Pro 2...",
    author: "Travis R.",
  },
];

const MobileHomepage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[340px] flex flex-col items-center justify-center bg-black">
        <img src="/static-assets/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-lg font-semibold tracking-widest mb-2">JAY JANKULOVSKI</h1>
          <p className="text-xs mb-4 tracking-widest">CREATE WITH JAY COMMUNITY</p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded shadow mb-4">LEARN MORE</button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-black px-4 py-8 flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-6">
          <div className="w-full flex justify-center mb-4">
            <img src="/static-assets/vision1.jpg" alt="Vision" className="w-2/3 rounded-lg shadow-lg" />
            <img src="/static-assets/vision2.jpg" alt="Vision2" className="w-1/3 rounded-lg shadow-lg ml-[-30px] mt-8" />
          </div>
          <h2 className="text-xs font-bold tracking-widest mb-2 text-center">YOUR VISION. YOUR STORY. YOUR STYLE.</h2>
          <p className="text-gray-300 text-sm text-center">
            Elevate your videos with professional LUTs, Transitions and SFX. Whether you're filming on the road or in the studio, bring your vision to life—<span className="font-semibold">effortlessly</span>.
          </p>
        </div>
      </section>

      {/* Latest Products */}
      <section className="bg-black px-4 py-8">
        <h2 className="text-center text-lg font-semibold tracking-widest mb-6">LATEST PRODUCTS</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {products.slice(0,2).map((product, idx) => (
            <div key={idx} className="bg-white/10 rounded-lg p-3 flex flex-col items-center relative">
              {product.isNew && <span className="absolute top-2 left-2 bg-blue-600 text-xs px-2 py-0.5 rounded text-white font-bold">NEW</span>}
              <img src={product.image} alt={product.title} className="w-24 h-32 object-cover rounded mb-2" />
              <div className="text-center">
                <h3 className="text-xs font-semibold mb-1 uppercase tracking-wide">{product.title}</h3>
                <div className="flex flex-col items-center">
                  <span className="text-red-400 text-sm font-bold">{product.price}</span>
                  {product.oldPrice && <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>}
                </div>
              </div>
              <button className="absolute bottom-2 right-2 bg-white text-black rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg shadow">+</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <button className="bg-black border border-white text-white px-6 py-2 rounded-full font-semibold tracking-wide">WHAT'S NEW?</button>
        </div>
      </section>

      {/* Most Popular Digital Products */}
      <section className="bg-black px-4 py-8">
        <h2 className="text-center text-lg font-semibold tracking-widest mb-6">MOST POPULAR DIGITAL PRODUCTS</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white/10 rounded-lg p-3 flex flex-col items-center relative">
              <img src={product.image} alt={product.title} className="w-24 h-32 object-cover rounded mb-2" />
              <div className="text-center">
                <h3 className="text-xs font-semibold mb-1 uppercase tracking-wide">{product.title}</h3>
                <div className="flex flex-col items-center">
                  <span className="text-red-400 text-sm font-bold">{product.price}</span>
                  {product.oldPrice && <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>}
                </div>
              </div>
              <button className="absolute bottom-2 right-2 bg-white text-black rounded-full w-7 h-7 flex items-center justify-center font-bold text-lg shadow">+</button>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-black px-4 py-8">
        <h2 className="text-center text-lg font-semibold tracking-widest mb-4">What are my customers saying</h2>
        <div className="flex flex-col items-center mb-4">
          <div className="flex gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <span className="text-xs text-gray-300 mb-2">from 71 reviews</span>
        </div>
        <div className="bg-white/10 rounded-lg p-4 text-white text-sm mb-4">
          <div className="flex gap-1 mb-1">
            {Array.from({ length: reviews[0].rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          <p className="mb-2">🔥🔥🔥<br />{reviews[0].text}</p>
          <span className="font-semibold">{reviews[0].author}</span>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white px-4 py-8 text-xs">
        <div className="mb-6">
          <h3 className="font-bold mb-2 tracking-widest">NEWSLETTER</h3>
          <p className="mb-2 text-gray-300">Stay up to date with new product releases, exclusive offers and more.</p>
          <input type="email" placeholder="E-mail" className="w-full p-2 rounded bg-black border border-gray-600 text-white mb-2" />
          <button className="w-full bg-white text-black py-2 rounded font-semibold">SUBSCRIBE</button>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-2 tracking-widest">PRODUCTS</h3>
          <ul className="space-y-1">
            <li>JAY v1 LUT PACK</li>
            <li>JAY v2 LUT PACK</li>
            <li>JAY'S CineKit (DaVinci Powergrade)</li>
            <li>OVERLAY TRANSITIONS + SFX PACK</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-2 tracking-widest">LEGAL</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-bold mb-2 tracking-widest">CONTACT US</h3>
          <ul className="space-y-1">
            <li>Ask Question</li>
          </ul>
        </div>
        <div className="text-center text-gray-400 mt-6">
          © 2025 – JAY JANKULOVSKI
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {/* Payment icons placeholder */}
          <span className="bg-white rounded p-1 w-8 h-5 inline-block" />
          <span className="bg-white rounded p-1 w-8 h-5 inline-block" />
          <span className="bg-white rounded p-1 w-8 h-5 inline-block" />
        </div>
      </footer>
    </div>
  );
};

export default MobileHomepage;
