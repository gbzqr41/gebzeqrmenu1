import { Info, Search, Star } from "lucide-react";

export default function Home() {
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
        <div className="h-[230px] bg-gray-300 rounded-[15px]"></div>
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
