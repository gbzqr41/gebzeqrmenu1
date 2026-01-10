"use client";

import { Star, X, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewPage() {
    const router = useRouter();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ rating, name, comment });
        // Show success message or redirect
    };

    return (
        <div className="min-h-screen bg-gray-50">
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
                {/* Restaurant Info Card */}
                <div className="bg-white rounded-[20px] p-6 mb-6 shadow-sm">
                    <div className="flex flex-col items-center">
                        <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4 border-4 border-black">
                            <img
                                src="https://raw.githubusercontent.com/gbzqr41/gebzeqrmenu1/refs/heads/main/23423423.jpg"
                                alt="Resital Logo"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <p className="text-white font-bold text-base">RESITAL</p>
                            </div>
                        </div>
                        <h2 className="text-gray-900 font-bold text-xl">Resital Lounge</h2>
                        <p className="text-gray-500 text-sm mt-1">Deneyiminizi bizimle paylaşın</p>
                    </div>
                </div>

                {/* Review Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Rating Section */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm">
                        <label className="block text-gray-900 font-semibold text-sm mb-4">
                            Puanınız
                        </label>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    className="transition-transform hover:scale-110"
                                >
                                    <Star
                                        className={`w-12 h-12 ${star <= (hoverRating || rating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                        {rating > 0 && (
                            <p className="text-center text-gray-600 text-sm mt-3">
                                {rating === 5 && "Mükemmel! 🎉"}
                                {rating === 4 && "Çok İyi! 👍"}
                                {rating === 3 && "İyi 😊"}
                                {rating === 2 && "Fena Değil 😐"}
                                {rating === 1 && "Kötü 😞"}
                            </p>
                        )}
                    </div>

                    {/* Name Input */}
                    <div className="bg-white rounded-[20px] p-6 shadow-sm">
                        <label className="block text-gray-900 font-semibold text-sm mb-3">
                            İsim (Opsiyonel)
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Adınız"
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
                        disabled={rating === 0 || comment.trim() === ""}
                        className="w-full bg-black text-white font-semibold py-4 rounded-[15px] flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-5 h-5" />
                        Gönder
                    </button>
                </form>
            </div>
        </div>
    );
}
