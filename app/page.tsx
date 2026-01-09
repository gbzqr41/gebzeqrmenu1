"use client";

import { Info, Search, X, ArrowUp, ChevronLeft, ChevronRight, Clock, Flame, AlertTriangle, Wheat, Utensils, Pizza, Salad, Coffee, Cake, Ham } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof menuItems[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const baslangiclarRef = useRef<HTMLDivElement>(null);
  const anaYemeklerRef = useRef<HTMLDivElement>(null);

  const categories = ["Başlangıçlar", "Ana Yemekler", "Burgerler", "Pizzalar", "Salatalar", "İçecekler", "Tatlılar"];

  const scrollToCategory = (categoryName: string) => {
    let targetRef = null;

    if (categoryName === "Başlangıçlar") {
      targetRef = baslangiclarRef.current;
    } else if (categoryName === "Ana Yemekler") {
      targetRef = anaYemeklerRef.current;
    }

    if (targetRef) {
      const yOffset = -70; // Header/butonlar için offset
      const y = targetRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "The Big Boss",
      description: "80 gr. özel harman dana köfte, çift kat cheddar peyniri, çıtır dana bacon, karamelize soğan ile lezzetli bir hamburger deneyimi yaşayın",
      price: 350,
      oldPrice: 440,
      image: "https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg"
    },
    {
      id: 2,
      name: "Klasik Burger",
      description: "Özel harman dana köfte, cheddar peyniri, dana bacon",
      price: 440,
      oldPrice: null,
      image: "https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg"
    },
    {
      id: 3,
      name: "Chicken Deluxe",
      description: "Çıtır tavuk göğsü, marul, domates, özel sos ile hazırlanan lezzetli tavuklu burger",
      price: 380,
      oldPrice: null,
      image: "https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg"
    },
    {
      id: 4,
      name: "Double Cheese",
      description: "İki kat dana köfte, üç kat cheddar peyniri ile peynir severler için özel tarif",
      price: 420,
      oldPrice: 490,
      image: "https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg"
    }
  ];

  const filteredMenuItems = searchValue
    ? menuItems.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    )
    : menuItems;

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.log("Video autoplay failed:", err);
        });
      }
    };

    // Hemen dene
    playVideo();

    // User interaction olursa tekrar dene
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest('.search-container')) {
          setSearchOpen(false);
          setSearchValue("");
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [searchOpen, selectedProduct]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen pb-6">
      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-white z-50 animate-in">
          <div className="h-full flex flex-col overflow-y-auto">
            {/* Close Button - Fixed Top Left */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="fixed top-4 left-4 w-[42px] h-[42px] bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10 shadow-lg"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Product Image - Full Width */}
            <div className="w-full h-[300px]">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover object-center" />
            </div>

            {/* Content Card with Rounded Top */}
            <div className="bg-gray-50 rounded-t-[20px] -mt-[20px] relative px-[20px] pt-[24px] pb-[40px] flex-1">
              {/* Product Name */}
              <h1 className="text-gray-900 font-bold text-2xl">{selectedProduct.name}</h1>

              {/* Açıklama Section */}
              <div className="mt-4">
                <h3 className="text-gray-700 font-semibold text-sm mb-2">Açıklama</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Price */}
              <div className="mt-6">
                {selectedProduct.oldPrice ? (
                  <div className="flex items-center gap-3">
                    <p className="text-gray-900 font-bold text-2xl">{selectedProduct.price} TL</p>
                    <p className="text-red-500 text-xl line-through">{selectedProduct.oldPrice} TL</p>
                  </div>
                ) : (
                  <p className="text-gray-900 font-bold text-2xl">{selectedProduct.price} TL</p>
                )}
              </div>

              {/* Product Details - 3 Column Grid */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                {/* Hazırlama Süresi */}
                <div className="bg-white p-3 rounded-[20px]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Clock className="w-4 h-4 text-black" />
                    <p className="text-gray-500 text-xs">Hazırlama</p>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">15-20 dk</p>
                </div>

                {/* Kalori */}
                <div className="bg-white p-3 rounded-[20px]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Flame className="w-4 h-4 text-black" />
                    <p className="text-gray-500 text-xs">Kalori</p>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">650 kcal</p>
                </div>

                {/* Gluten */}
                <div className="bg-white p-3 rounded-[20px]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Wheat className="w-4 h-4 text-black" />
                    <p className="text-gray-500 text-xs">Gluten</p>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">Var</p>
                </div>
              </div>

              {/* Alerjen - Full Width with Yellow Gradient */}
              <div className="mt-4 bg-gradient-to-r from-yellow-100 to-amber-100 p-4 rounded-[20px] border border-yellow-200">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-black" />
                  <p className="text-gray-700 font-semibold text-sm">Alerjen</p>
                </div>
                <p className="text-gray-900 font-semibold text-sm">Süt, Gluten</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Popup */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white z-50 search-container animate-in">
          <div className="h-full flex flex-col">
            {/* Search Header */}
            <div className="h-[60px] flex items-center px-[10px] border-b" style={{ borderColor: 'rgb(239 239 239)' }}>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ara"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full h-[42px] px-[18px] bg-gray-50 text-black font-semibold border rounded-full outline-none"
                  style={{ borderColor: 'rgb(239 239 239)', paddingRight: searchValue ? '45px' : '18px', fontSize: '16px' }}
                  autoFocus
                />
                {searchValue && (
                  <button
                    onClick={() => setSearchValue("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchValue("");
                }}
                className="ml-3 text-gray-700 font-semibold"
              >
                İptal
              </button>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto">
              {searchValue && filteredMenuItems.length > 0 ? (
                <div className="px-[10px] mt-4 flex gap-2 flex-wrap">
                  {filteredMenuItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedProduct(item);
                        setSearchOpen(false);
                        setSearchValue("");
                      }}
                      className="w-[calc(50%-4px)] bg-white p-[5px] flex flex-col rounded-[10px] border cursor-pointer"
                      style={{ borderColor: 'rgb(245 245 245)' }}
                    >
                      <div className="w-full h-[100px] rounded-[5px] overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="flex flex-col p-[10px] gap-1">
                        <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                        <p className="text-gray-500 text-xs leading-tight line-clamp-3">{item.description}</p>
                        {item.oldPrice ? (
                          <div className="flex items-center gap-2">
                            <p className="text-gray-900 font-bold">{item.price} TL</p>
                            <p className="text-red-500 text-sm line-through">{item.oldPrice} TL</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 font-bold">{item.price} TL</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchValue ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Sonuç bulunamadı</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="h-[60px] flex items-center justify-between px-[10px]">
        {/* Left Side */}
        <div className="flex items-center gap-[10px]">
          <Info className="w-6 h-6 text-gray-700" />
          <span className="text-gray-900 font-semibold">Resital Lounge</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <div
            onClick={() => setSearchOpen(true)}
            className="w-[42px] h-[42px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="px-[10px]">
        <div className="relative">
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
              style={{
                objectFit: 'cover'
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-[20px]">
              <p className="text-white text-base font-bold">YILBAŞINA ÖZEL İNDİRİMLER</p>
              <p className="text-white text-sm mt-1">Lezzetin tadını çıkarın, özel kampanyalardan yararlanın</p>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm bg-white/30 flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-sm bg-white/30 flex items-center justify-center">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div
        className="overflow-x-auto px-[10px] mt-4 sticky top-0 bg-gray-50 z-10 py-2"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div className="flex gap-1.5 min-w-max pr-[10px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                if (category === "Başlangıçlar" || category === "Ana Yemekler") {
                  scrollToCategory(category);
                }
              }}
              className={`h-[42px] px-[18px] rounded-full whitespace-nowrap font-semibold flex items-center gap-2 border transition-colors select-none ${activeCategory === category
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700'
                }`}
              style={activeCategory === category ? { fontSize: '14px' } : { borderColor: 'rgb(239 239 239)', fontSize: '14px' }}
            >
              {category === "Başlangıçlar" && <Ham className="w-4 h-4" />}
              {category === "Ana Yemekler" && <Utensils className="w-4 h-4" />}
              {category === "Burgerler" && <Ham className="w-4 h-4" />}
              {category === "Pizzalar" && <Pizza className="w-4 h-4" />}
              {category === "Salatalar" && <Salad className="w-4 h-4" />}
              {category === "İçecekler" && <Coffee className="w-4 h-4" />}
              {category === "Tatlılar" && <Cake className="w-4 h-4" />}
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* İndirimli Ürünler */}
      <div className="mt-6">
        <div className="px-[10px]">
          <h2 className="text-gray-900 font-semibold text-lg">İndirimli Ürünler</h2>
        </div>

        <div
          className="overflow-x-auto px-[10px] mt-4"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <div className="flex gap-2 min-w-max pr-[10px]">
            {[
              { id: 'd1', name: 'The Big Boss', description: 'Özel soslu', price: 350, type: 'video', media: 'https://github.com/gbzqr41/gebzeqrmenu1/raw/refs/heads/main/PinDown.io_@camaleaoburgers_1767562826.mp4' },
              { id: 'd2', name: 'Double Cheese', description: 'Çift peynirli', price: 420, type: 'video', media: 'https://github.com/gbzqr41/gebzeqrmenu1/raw/refs/heads/main/PinDown.io_@meat_coin_1767562815.mp4' },
              { id: 'd3', name: 'Mega Burger', description: 'Dev burger', price: 380, type: 'video', media: 'https://github.com/gbzqr41/gebzeqrmenu1/raw/refs/heads/main/PinDown.io_@pinchofyum_1767562803.mp4' },
              { id: 'd4', name: 'Chicken Special', description: 'Tavuk göğsü', price: 340, type: 'image', media: 'https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg' },
              { id: 'd5', name: 'Deluxe Supreme', description: 'Premium', price: 460, type: 'image', media: 'https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg' },
              { id: 'd6', name: 'Classic BBQ', description: 'BBQ soslu', price: 390, type: 'image', media: 'https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg' }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct({
                  id: parseInt(item.id.replace('d', '')),
                  name: item.name,
                  description: item.description,
                  price: item.price,
                  oldPrice: null,
                  image: item.media
                })}
                className="w-[140px] bg-gray-50 p-[5px] rounded-[10px] flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="w-full h-[130px] rounded-[5px] overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.media}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-[10px] flex flex-col gap-1">
                  <h3 className="text-gray-900 font-semibold text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-xs line-clamp-1">{item.description}</p>
                  <p className="text-gray-900 font-bold text-sm">{item.price} TL</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Title */}
      {filteredMenuItems.length > 0 && (
        <>
          <div ref={baslangiclarRef} className="px-[10px] mt-6">
            {/* Category Image */}
            <div className="w-full h-[100px] rounded-[10px] overflow-hidden mb-3">
              <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg" alt="Başlangıçlar" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-gray-900 font-semibold text-lg">Başlangıçlar</h2>
            <p className="text-gray-500 text-sm mt-1">{filteredMenuItems.length} ürün</p>
          </div>

          {/* Menu Card */}
          <div className="px-[10px] mt-4 flex gap-2 flex-wrap">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className="w-[calc(50%-4px)] bg-white p-[5px] flex flex-col rounded-[10px] border cursor-pointer"
                style={{ borderColor: 'rgb(245 245 245)' }}
              >
                {/* Top - Image */}
                <div className="w-full h-[100px] rounded-[5px] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                </div>

                {/* Bottom - Content */}
                <div className="flex flex-col p-[10px] gap-1">
                  <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-xs leading-tight line-clamp-3">{item.description}</p>
                  {item.oldPrice ? (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-900 font-bold">{item.price} TL</p>
                      <p className="text-red-500 text-sm line-through">{item.oldPrice} TL</p>
                    </div>
                  ) : (
                    <p className="text-gray-900 font-bold">{item.price} TL</p>
                  )}
                  {/* Detail Icons */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Wheat className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 text-xs">Var</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 text-xs">650</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 text-xs">15-20 dk</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Category Title 2 */}
      {filteredMenuItems.length > 0 && (
        <>
          <div ref={anaYemeklerRef} className="px-[10px] mt-6">
            {/* Category Image */}
            <div className="w-full h-[100px] rounded-[10px] overflow-hidden mb-3">
              <img src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg" alt="Ana Yemekler" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-gray-900 font-semibold text-lg">Ana Yemekler</h2>
            <p className="text-gray-500 text-sm mt-1">{filteredMenuItems.length} ürün</p>
          </div>

          {/* Menu Card 2 */}
          <div className="px-[10px] mt-4 flex gap-2 flex-wrap">
            {filteredMenuItems.map((item) => (
              <div
                key={`new-${item.id}`}
                onClick={() => setSelectedProduct(item)}
                className="w-[calc(50%-4px)] bg-white p-[5px] flex flex-col rounded-[10px] border cursor-pointer"
                style={{ borderColor: 'rgb(245 245 245)' }}
              >
                {/* Top - Image */}
                <div className="w-full h-[100px] rounded-[5px] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                </div>

                {/* Bottom - Content */}
                <div className="flex flex-col p-[10px] gap-1">
                  <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-xs leading-tight line-clamp-3">{item.description}</p>
                  {item.oldPrice ? (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-900 font-bold">{item.price} TL</p>
                      <p className="text-red-500 text-sm line-through">{item.oldPrice} TL</p>
                    </div>
                  ) : (
                    <p className="text-gray-900 font-bold">{item.price} TL</p>
                  )}
                  {/* Detail Icons */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Wheat className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 text-xs">Var</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 text-xs">650</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 text-xs">15-20 dk</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[20px] right-[20px] w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center z-40 transition-opacity"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}
