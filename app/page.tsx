"use client";

import { Utensils, Star, Languages, X, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Image Background */}
      <img
        src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between pt-[100px] pb-[120px]">
        {/* Top Section - Logo and Description */}
        <div className="flex flex-col items-center px-[20px]">
          {/* Circular Logo */}
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative mb-6 border-4 border-black">
            <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg" alt="Resital Logo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <p className="text-white font-bold text-lg">RESITAL</p>
            </div>
          </div>

          {/* Professional Description */}
          <h1 className="text-white font-bold text-2xl text-center mb-3">Resital Lounge</h1>
          <p className="text-white/90 text-center text-sm leading-relaxed max-w-[280px]">Kaliteli lezzetler ve sıcak atmosferiyle size özel anlar yaşatmak için burayız.</p>
        </div>

        {/* Bottom Section - Action Cards */}
        <div className="flex gap-3 px-[20px]">
          {/* Menüye Git Card */}
          <button
            onClick={() => router.push('/menu')}
            className="w-[110px] h-[100px] bg-white/15 backdrop-blur-2xl rounded-[20px] flex flex-col items-center justify-center gap-2 hover:bg-white/25 transition-all shadow-2xl"
            style={{ backdropFilter: 'blur(40px)' }}
          >
            <Utensils className="w-6 h-6 text-white" />
            <p className="text-white font-semibold text-sm">Menüye Git</p>
          </button>

          {/* Değerlendir Card */}
          <button
            onClick={() => router.push('/review')}
            className="w-[110px] h-[100px] bg-white/15 backdrop-blur-2xl rounded-[20px] flex flex-col items-center justify-center gap-2 hover:bg-white/25 transition-all shadow-2xl"
            style={{ backdropFilter: 'blur(40px)' }}
          >
            <Star className="w-6 h-6 text-white" />
            <p className="text-white font-semibold text-sm">Değerlendir</p>
          </button>

          {/* Dil Card */}
          <button
            onClick={() => setLanguageOpen(true)}
            className="w-[110px] h-[100px] bg-white/15 backdrop-blur-2xl rounded-[20px] flex flex-col items-center justify-center gap-2 hover:bg-white/25 transition-all shadow-2xl"
            style={{ backdropFilter: 'blur(40px)' }}
          >
            <Languages className="w-6 h-6 text-white" />
            <p className="text-white font-semibold text-sm">Dil</p>
          </button>
        </div>
      </div>

      {/* Language Popup */}
      {languageOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center px-[20px]">
          <div className="bg-white rounded-[20px] p-6 w-full max-w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 font-bold text-lg">Dil Seçin</h3>
              <button
                onClick={() => setLanguageOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Language Options */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setSelectedLanguage("tr");
                  setLanguageOpen(false);
                }}
                className="w-full flex items-center justify-between p-4 rounded-[15px] bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇹🇷</span>
                  <span className="text-gray-900 font-semibold">Türkçe</span>
                </div>
                {selectedLanguage === "tr" && <Check className="w-5 h-5 text-green-600" />}
              </button>

              <button
                onClick={() => {
                  setSelectedLanguage("en");
                  setLanguageOpen(false);
                }}
                className="w-full flex items-center justify-between p-4 rounded-[15px] bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-gray-900 font-semibold">English</span>
                </div>
                {selectedLanguage === "en" && <Check className="w-5 h-5 text-green-600" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
