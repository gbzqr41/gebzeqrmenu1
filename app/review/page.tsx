"use client";

import { Star, X, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewPage() {
    const router = useRouter();
    const [serviceRating, setServiceRating] = useState(0);
    const [foodRating, setFoodRating] = useState(0);
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [hoverServiceRating, setHoverServiceRating] = useState(0);
    const [hoverFoodRating, setHoverFoodRating] = useState(0);
    const [hoverCleanlinessRating, setHoverCleanlinessRating] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ serviceRating, foodRating, cleanlinessRating, firstName, lastName, phone, comment });
        // Show success message or redirect
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="h-[60px] flex items-center justify-between px-[10px] bg-white border-b border-gray-200">
                <button
                    onClick={() => router.back()}
                    className="w-[42px] h-[42px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>
                <h1 className="text-gray-900 font-semibold text-lg">Değerlendirme</h1>
                <div className="w-[42px]" /> {/* Spacer for alignment */}
            </div>

            {/* Content */}
            <div className="px-[10px] py-6">
                {/* Review Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Hizmet Rating */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm">
                        <div className="text-center mb-4">
                            <label className="block text-gray-900 font-semibold text-base mb-1">
                                Hizmet
                            </label>
                            <p className="text-gray-500 text-xs">Personel güler yüzlülüğü ve ilgisi</p>
                        </div>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setServiceRating(star)}
                                    onMouseEnter={() => setHoverServiceRating(star)}
                                    onMouseLeave={() => setHoverServiceRating(0)}
                                >
                                    <Star
                                        className={`w-8 h-8 ${star <= (hoverServiceRating || serviceRating)
                                            ? "fill-black text-black"
                                            : "text-gray-300"
                                            }`}
                                        strokeWidth={1}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Yemek Rating */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm">
                        <div className="text-center mb-4">
                            <label className="block text-gray-900 font-semibold text-base mb-1">
                                Yemek
                            </label>
                            <p className="text-gray-500 text-xs">Lezzet, sunum ve çeşitlilik</p>
                        </div>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFoodRating(star)}
                                    onMouseEnter={() => setHoverFoodRating(star)}
                                    onMouseLeave={() => setHoverFoodRating(0)}
                                >
                                    <Star
                                        className={`w-8 h-8 ${star <= (hoverFoodRating || foodRating)
                                            ? "fill-black text-black"
                                            : "text-gray-300"
                                            }`}
                                        strokeWidth={1}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Temizlik Rating */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm">
                        <div className="text-center mb-4">
                            <label className="block text-gray-900 font-semibold text-base mb-1">
                                Temizlik
                            </label>
                            <p className="text-gray-500 text-xs">Genel hijyen ve düzen</p>
                        </div>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setCleanlinessRating(star)}
                                    onMouseEnter={() => setHoverCleanlinessRating(star)}
                                    onMouseLeave={() => setHoverCleanlinessRating(0)}
                                >
                                    <Star
                                        className={`w-8 h-8 ${star <= (hoverCleanlinessRating || cleanlinessRating)
                                            ? "fill-black text-black"
                                            : "text-gray-300"
                                            }`}
                                        strokeWidth={1}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Ad Soyad Telefon */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm space-y-3">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Ad"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Soyad"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Telefon"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Comment Input */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm">
                        <label className="block text-gray-900 font-semibold text-sm mb-3">
                            Yorumunuz
                        </label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Deneyiminizi bizimle paylaşın..."
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={serviceRating === 0 || foodRating === 0 || cleanlinessRating === 0 || comment.trim() === ""}
                        className="w-full bg-black text-white font-semibold py-4 rounded-[15px] flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Gönder
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
