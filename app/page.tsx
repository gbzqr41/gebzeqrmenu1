"use client";

import { Info, Search, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const categories = ["Başlangıçlar", "Ana Yemekler", "Burgerler", "Pizzalar", "Salatalar", "İçecekler", "Tatlılar"];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="h-[60px] flex items-center justify-between px-[10px]">
        {/* Left Side */}
        <div className="flex items-center gap-[10px]">
          <Info className="w-6 h-6 text-gray-700" />
          <span className="text-gray-900 font-semibold">Resital Lounge</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <div className="w-[42px] h-[42px] bg-gray-200 rounded-full flex items-center justify-center">
            <Search className="w-5 h-5 text-gray-700" />
          </div>
          <div className="w-[42px] h-[42px] bg-gray-200 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="px-[10px]">
        <div className="h-[230px] rounded-[15px] overflow-hidden relative">
          <video
            ref={videoRef}
            src="https://github.com/gbzqr41/gebzeqrmenu1/raw/refs/heads/main/PinDown.io_@arafatjunayed6_1767550314.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-[20px]">
            <p className="text-white text-base font-bold">YILBAŞINA ÖZEL İNDİRİMLER</p>
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div
        className="overflow-x-auto px-[10px] mt-4"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm ${activeCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 border border-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Category Title */}
      <div className="px-[10px] mt-6">
        <h2 className="text-gray-900 font-semibold text-lg">Efsane Klasikler</h2>
      </div>

      {/* Menu Card */}
      <div className="px-[10px] mt-4 flex gap-2">
        <div className="flex-1 bg-white p-[5px] flex flex-col rounded-[10px] border" style={{ borderColor: 'rgb(245 245 245)' }}>
          {/* Top - Image */}
          <div className="w-full h-[100px] rounded-[5px] overflow-hidden">
            <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg" alt="The Big Boss" className="w-full h-full object-cover object-center" />
          </div>

          {/* Bottom - Content */}
          <div className="flex flex-col p-[15px] gap-1">
            <h3 className="text-gray-900 font-semibold">The Big Boss</h3>
            <p className="text-gray-500 text-xs leading-tight line-clamp-3">80 gr. özel harman dana köfte, çift kat cheddar peyniri, çıtır dana bacon, karamelize soğan ile lezzetli bir hamburger deneyimi yaşayın</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-900 font-bold">350 TL</p>
              <p className="text-gray-400 text-sm line-through">440 TL</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white p-[5px] flex flex-col rounded-[10px] border" style={{ borderColor: 'rgb(245 245 245)' }}>
          {/* Top - Image */}
          <div className="w-full h-[100px] rounded-[5px] overflow-hidden">
            <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg" alt="The Big Boss" className="w-full h-full object-cover object-center" />
          </div>

          {/* Bottom - Content */}
          <div className="flex flex-col p-[15px] gap-1">
            <h3 className="text-gray-900 font-semibold">The Big Boss</h3>
            <p className="text-gray-500 text-xs leading-tight line-clamp-3">Özel harman dana köfte, cheddar peyniri, dana bacon</p>
            <p className="text-gray-900 font-bold">440 TL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
