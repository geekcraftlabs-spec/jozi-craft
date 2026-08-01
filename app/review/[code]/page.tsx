import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { deliveryReviews } from "@/lib/review-data";
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    code: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;

  const foundReview = deliveryReviews.find((review) => review.code === code);

  if (!foundReview) {
    return {
      title: "Review Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://furniturehaven.co.za";
  const imageUrl = `${baseUrl}/images/${foundReview.image}`;

  return {
    title: `${foundReview.title} – Jozi Craft Delivery Review`,
    description: foundReview.caption,
    openGraph: {
      title: `${foundReview.title} – Jozi Craft`,
      description: foundReview.caption,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: foundReview.title,
        },
      ],
      type: "website",
      siteName: "Jozi Craft",
    },
    twitter: {
      card: "summary_large_image",
      title: foundReview.title,
      description: foundReview.caption,
      images: [imageUrl],
    },
  };
}

export default async function ReviewPreviewPage({ params }: Props) {
  const { code } = await params;

  const foundReview = deliveryReviews.find((review) => review.code === code);

  if (!foundReview) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 md:px-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#d4b896]/20">
        <div className="relative w-full aspect-[4/3] bg-[#f0e8e0]">
          <Image
            src={`/images/${foundReview.image}`}
            alt={foundReview.title}
            fill
            className="object-contain"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-[#8b6914] font-medium">{foundReview.category}</p>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3520]">
                {foundReview.title}
              </h1>
            </div>
            <span className="bg-[#f0e8e0] text-[#4a3520] text-xs font-mono px-3 py-1 rounded-full">
              {foundReview.code}
            </span>
          </div>

          <p className="text-[#6b4c3b] mb-4">{foundReview.caption}</p>
          <div className="flex flex-wrap gap-4 text-sm text-[#6b4c3b] mb-6">
            <span>📍 {foundReview.location}</span>
            <span>📅 {foundReview.date}</span>
          </div>

          <a
            href={`https://wa.me/27684858415?text=${encodeURIComponent(
              `Hi! I'm following up on the delivery review enquiry for ${foundReview.code} (${foundReview.title}).`
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
              href="/testimonials"
              className="text-sm text-[#6b4c3b] hover:text-[#8b6914] transition"
            >
              ← Back to All Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}