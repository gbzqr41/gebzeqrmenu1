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
      <div className="px-[10px] mt-4">
        <div className="w-full h-[150px] bg-white p-[15px] flex items-center justify-between rounded-[15px]">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-gray-900 font-semibold">The Big Boss</h3>
            <p className="text-gray-600 text-sm">80 gr. özel harman dana köfte, çift kat cheddar peyniri, çıtır dana bacon, karamelize soğan</p>
            <p className="text-gray-900 font-semibold">440 TL</p>
          </div>

          {/* Right Side - Image */}
          <div className="w-[100px] h-full bg-gray-300 rounded-[15px] ml-4"></div>
        </div>
      </div>
    </div>
  );
}
