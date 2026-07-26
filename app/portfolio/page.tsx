"use client";
import { useState } from "react";
import Image from "next/image";
import {
  portfolioCategories,
  PortfolioItem,
  categoryPriceRanges,
} from "@/lib/portfolio-data";
import { FaWhatsapp } from "react-icons/fa";
import BackToTop from "@/components/BackToTop";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://furniturehaven.co.za";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  const openModal = (item: PortfolioItem, categoryName: string) => {
    setSelectedItem(item);
    setSelectedCategoryName(categoryName);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedCategoryName("");
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem) {
      const total = selectedItem.images.length + (selectedItem.videos?.length || 0);
      setCurrentImageIndex((prev) => (prev + 1) % total);
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      const total = selectedItem.images.length + (selectedItem.videos?.length || 0);
      setCurrentImageIndex((prev) => (prev - 1 + total) % total);
    }
  };

  const categories = selectedCategory
    ? portfolioCategories.filter((c) => c.slug === selectedCategory)
    : portfolioCategories;

  const formatPrice = (price: number) => {
    return price.toLocaleString("en-ZA");
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">
          Our Portfolio
        </h1>

        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-[#6b4c3b] text-sm">
            Browse our collection. <span className="font-semibold text-[#8b6914]">Click any image</span> to view details and
            <span className="font-semibold text-[#25D366]"> enquire on WhatsApp</span> about any piece you love.
          </p>
        </div>

        <p className="text-[#6b4c3b] text-center max-w-2xl mx-auto mb-8">
          Browse through our portfolio to see the wide variety of high-quality furniture we offer.
          Click any image to view more.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === null
                ? "bg-[#8b6914] text-white"
                : "bg-white text-[#4a3520] border border-[#d4b896]/30 hover:bg-[#f0e8e0]"
            }`}
          >
            All
          </button>
          {portfolioCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.slug
                  ? "bg-[#8b6914] text-white"
                  : "bg-white text-[#4a3520] border border-[#d4b896]/30 hover:bg-[#f0e8e0]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        {categories.map((category) => {
          const priceRange = categoryPriceRanges[category.slug];
          return (
            <div key={category.slug} id={category.slug} className="mb-12 scroll-mt-24">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#8b6914]">
                  {category.name}
                </h2>
                {priceRange && (
                  <span className="bg-[#f0e8e0] text-[#4a3520] text-sm font-semibold px-4 py-2 rounded-full">
                    Est. R{formatPrice(priceRange.min)} – R{formatPrice(priceRange.max)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md border border-[#d4b896]/20 overflow-hidden cursor-pointer group hover:shadow-lg transition"
                    onClick={() => openModal(item, category.name)}
                  >
                    <div className="relative w-full aspect-square bg-[#f0e8e0]">
                      <Image
                        src={`/images/${item.images[0]}`}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                        loading="eager"
                      />
                      {item.images.length > 1 && (
                        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                          +{item.images.length - 1}
                        </span>
                      )}
                      {item.videos && item.videos.length > 0 && (
                        <span className="absolute top-2 right-2 bg-[#c87a3a] text-white text-xs px-2 py-1 rounded-full">
                          ▶
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <BackToTop />
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-white rounded-2xl p-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-4 text-3xl text-gray-600 hover:text-gray-900 transition z-10"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="relative w-full aspect-4/3 bg-[#f0e8e0] rounded-lg overflow-hidden">
              {selectedItem.images[currentImageIndex] && (
                <Image
                  src={`/images/${selectedItem.images[currentImageIndex]}`}
                  alt="Portfolio item"
                  fill
                  className="object-contain"
                />
              )}
              {!selectedItem.images[currentImageIndex] && selectedItem.videos && (
                <video
                  controls
                  className="w-full h-full object-contain"
                  autoPlay
                >
                  <source src={`/images/${selectedItem.videos[currentImageIndex - selectedItem.images.length]}`} type="video/mp4" />
                </video>
              )}
            </div>

            {(selectedItem.images.length + (selectedItem.videos?.length || 0)) > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
                >
                  ›
                </button>
              </>
            )}

            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {selectedItem.images.map((img, idx) => (
                <button
                  key={`img-${idx}`}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === idx ? "border-[#8b6914]" : "border-transparent"
                  }`}
                >
                  <Image src={`/images/${img}`} alt="Thumbnail" fill className="object-cover" sizes="64px" />
                </button>
              ))}
              {selectedItem.videos?.map((video, idx) => (
                <button
                  key={`vid-${idx}`}
                  onClick={() => setCurrentImageIndex(selectedItem.images.length + idx)}
                  className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 bg-black/10 flex items-center justify-center ${
                    currentImageIndex === selectedItem.images.length + idx ? "border-[#8b6914]" : "border-transparent"
                  }`}
                >
                  <span className="text-2xl">▶</span>
                </button>
              ))}
            </div>

            {/* WhatsApp Enquiry Button - Modal only - Updated Number */}
            {(() => {
              const productUrl = `${baseUrl}/p/${selectedItem.productCode}`;
              return (
                <a
                  href={`https://wa.me/27601089337?text=${encodeURIComponent(
                    `View product: ${productUrl}\n\nHi Furniture Haven! 👋\n\nI'm interested in the **${selectedCategoryName}** you have.\n\nProduct code: ${selectedItem.productCode}\n\nCould you please give me:\n• A price estimate\n• Delivery options to my area\n\nThank you! 🙏`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1ebe5c] transition shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-xl" />
                  Enquire About This Product on WhatsApp
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
      )}
    </div>
  );
}