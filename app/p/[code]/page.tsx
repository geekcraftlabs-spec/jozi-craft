import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioCategories } from "@/lib/portfolio-data";
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    code: string;
  }>;
}

// Dynamically generate metadata for WhatsApp preview
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;

  let foundProduct = null;
  let foundCategory = null;

  for (const category of portfolioCategories) {
    const item = category.items.find((item) => item.productCode === code);
    if (item) {
      foundProduct = item;
      foundCategory = category;
      break;
    }
  }

  if (!foundProduct) {
    return {
      title: "Product Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://furniturehaven.co.za";
  const imageUrl = `${baseUrl}/images/${foundProduct.images[0]}`;

  return {
    title: `${foundCategory?.name} – Premium Custom Furniture`,
    description: `Handcrafted ${foundCategory?.name?.toLowerCase()} by Jozi Craft. Premium quality, custom made, and delivered nationwide in South Africa.`,
    openGraph: {
      title: `${foundCategory?.name} – Jozi Craft`,
      description: `Premium custom ${foundCategory?.name?.toLowerCase()} handcrafted in Johannesburg. Made to order with quality materials.`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: foundCategory?.name || "Jozi Craft product",
        },
      ],
      type: "website",
      siteName: "Jozi Craft",
    },
    twitter: {
      card: "summary_large_image",
      title: `${foundCategory?.name} – Jozi Craft`,
      description: `Premium custom ${foundCategory?.name?.toLowerCase()} handcrafted in Johannesburg.`,
      images: [imageUrl],
    },
  };
}

export default async function ProductPreviewPage({ params }: Props) {
  const { code } = await params;

  let foundProduct = null;
  let foundCategory = null;

  for (const category of portfolioCategories) {
    const item = category.items.find((item) => item.productCode === code);
    if (item) {
      foundProduct = item;
      foundCategory = category;
      break;
    }
  }

  if (!foundProduct) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 md:px-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#d4b896]/20">
        {/* Product Image */}
        <div className="relative w-full aspect-[4/3] bg-[#f0e8e0]">
          <Image
            src={`/images/${foundProduct.images[0]}`}
            alt={foundCategory?.name || "Product"}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-[#8b6914] font-medium">{foundCategory?.name}</p>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3520]">
                {foundCategory?.name} – {foundProduct.id}
              </h1>
            </div>
            <span className="bg-[#f0e8e0] text-[#4a3520] text-xs font-mono px-3 py-1 rounded-full">
              {foundProduct.productCode}
            </span>
          </div>

          {/* WhatsApp Button for Seller */}
          <a
            href={`https://wa.me/27684858415?text=${encodeURIComponent(
              `Hi! I'm following up on the product enquiry for ${foundProduct.productCode} (${foundCategory?.name} - ${foundProduct.id}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1ebe5c] transition shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-xl" />
            Reply to Customer on WhatsApp
          </a>

          <div className="mt-4 text-center">
            <Link
              href={`/portfolio#${foundCategory?.slug}`}
              className="text-sm text-[#6b4c3b] hover:text-[#8b6914] transition"
            >
              ← Back to {foundCategory?.name} Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}