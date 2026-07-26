"use client";
import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPlay } from "react-icons/fa";
import { deliveryReviews, ReviewItem } from "@/lib/review-data";

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://furniturehaven.co.za";
const baseUrl = rawBaseUrl.replace(/\/+$/, "");

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState<"delivery" | "trustpilot">("delivery");
  const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const openModal = (review: ReviewItem) => {
    setSelectedReview(review);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setSelectedReview(null);
    setIsPlaying(false);
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">
          What Our Customers Say
        </h1>
        <p className="text-[#6b4c3b] text-center max-w-2xl mx-auto mb-8">
          We take pride in offering high-quality furniture and excellent customer service.
          See real delivery photos and videos from our happy clients.
        </p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab("delivery")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "delivery"
                ? "bg-[#8b6914] text-white"
                : "bg-white text-[#4a3520] border border-[#d4b896]/30 hover:bg-[#f0e8e0]"
            }`}
          >
            📦 Delivery Reviews
          </button>
          <button
            onClick={() => setActiveTab("trustpilot")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "trustpilot"
                ? "bg-[#8b6914] text-white"
                : "bg-white text-[#4a3520] border border-[#d4b896]/30 hover:bg-[#f0e8e0]"
            }`}
          >
            ⭐ TrustPilot Reviews
          </button>
        </div>

        {activeTab === "delivery" && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {deliveryReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#d4b896]/20 cursor-pointer group hover:shadow-xl transition"
                  onClick={() => openModal(review)}
                >
                  <div className="relative aspect-square bg-[#f0e8e0]">
                    <Image
                      src={`/images/${review.image}`}
                      alt={review.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {review.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                        <div className="w-12 h-12 bg-[#8b6914] rounded-full flex items-center justify-center">
                          <FaPlay className="text-white text-sm ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#4a3520] text-sm truncate">{review.title}</h3>
                    <p className="text-xs text-[#6b4c3b] mt-1">{review.location}</p>
                    <p className="text-xs text-[#8b6914] mt-0.5">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href={`https://wa.me/27601089337?text=${encodeURIComponent(
                  "Hi Furniture Haven! 👋\n\nI saw your delivery reviews and I'm interested in ordering furniture.\n\nCan you tell me more about your products and delivery to my area?\n\nThank you! 🙏"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1ebe5c] transition shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}

        {activeTab === "trustpilot" && (
          <div className="text-center py-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-4">⭐</div>
              <h2 className="font-serif text-2xl font-bold text-[#4a3520] mb-4">
                TrustPilot Reviews Coming Soon
              </h2>
              <p className="text-[#6b4c3b] mb-6">
                We&apos;re building our TrustPilot presence! In the meantime, check out our
                real delivery reviews and join our growing community of happy customers.
              </p>
              <a
                href="https://www.trustpilot.com/review/furniturehaven.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00b67a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#009966] transition shadow-lg"
              >
                Visit Our TrustPilot Profile
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl p-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-3xl text-gray-600 hover:text-gray-900 transition z-10"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="relative w-full aspect-[4/3] bg-[#f0e8e0] rounded-lg overflow-hidden">
              {selectedReview.video && isPlaying ? (
                <video
                  key={selectedReview.video}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                  autoPlay
                >
                  <source src={`/images/${selectedReview.video}`} type="video/mp4" />
                  <p>Your browser doesn&apos;t support HTML5 video.</p>
                </video>
              ) : selectedReview.video && !isPlaying ? (
                <>
                  <Image
                    src={`/images/${selectedReview.image}`}
                    alt={selectedReview.title}
                    fill
                    className="object-contain"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                  >
                    <div className="w-16 h-16 bg-[#8b6914] rounded-full flex items-center justify-center shadow-lg">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <Image
                  src={`/images/${selectedReview.image}`}
                  alt={selectedReview.title}
                  fill
                  className="object-contain"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="font-serif text-xl font-bold text-[#4a3520]">{selectedReview.title}</h3>
              <p className="text-[#6b4c3b] mt-1">{selectedReview.caption}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#6b4c3b]">
                <span>📍 {selectedReview.location}</span>
                <span>📅 {selectedReview.date}</span>
                <span className="bg-[#f0e8e0] px-2 py-0.5 rounded-full text-[#8b6914]">
                  {selectedReview.category}
                </span>
              </div>

              {/* WhatsApp Enquiry – Updated Number */}
              {(() => {
                const reviewUrl = `${baseUrl}/review/${selectedReview.code}`;
                return (
                  <a
                    href={`https://wa.me/27601089337?text=${encodeURIComponent(
                      `View delivery: ${reviewUrl}\n\nHi Furniture Haven! 👋\n\nI saw your delivery review for the **${selectedReview.title}** (${selectedReview.location} - ${selectedReview.date}).\n\nI'm interested in ordering something similar. Can you tell me more?\n\nProduct: ${selectedReview.category}\nLocation: ${selectedReview.location}\n\nThank you! 🙏`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1ebe5c] transition shadow-lg"
                  >
                    <FaWhatsapp className="text-xl" />
                    Enquire About This Delivery
                  </a>
                );
              })()}

              <button
                onClick={closeModal}
                className="mt-3 w-full bg-gray-200 text-[#4a3520] py-3 px-4 rounded-xl font-semibold hover:bg-gray-300 transition shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}