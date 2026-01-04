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
        <div className="flex-1 bg-white p-[5px] flex flex-col rounded-[15px]">
          {/* Top - Image */}
          <div className="w-full h-[100px] rounded-[10px] overflow-hidden">
            <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/unnamed.jpg" alt="The Big Boss" className="w-full h-full object-cover object-center" />
          </div>

          {/* Bottom - Content */}
          <div className="flex flex-col p-[15px] gap-1">
            <h3 className="text-gray-900 font-semibold">The Big Boss</h3>
            <p className="text-gray-600 text-sm">Özel harman dana köfte, cheddar peyniri, dana bacon</p>
            <p className="text-gray-900 font-semibold">440 TL</p>
          </div>
        </div>

        <div className="flex-1 bg-white p-[5px] flex flex-col rounded-[15px]">
          {/* Top - Image */}
          <div className="w-full h-[100px] rounded-[10px] overflow-hidden">
            <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/unnamed.jpg" alt="The Big Boss" className="w-full h-full object-cover object-center" />
          </div>

          {/* Bottom - Content */}
          <div className="flex flex-col p-[15px] gap-1">
            <h3 className="text-gray-900 font-semibold">The Big Boss</h3>
            <p className="text-gray-600 text-sm">Özel harman dana köfte, cheddar peyniri, dana bacon</p>
            <p className="text-gray-900 font-semibold">440 TL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
