import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Jozi Craft – Handcrafted Furniture in South Africa",
  description:
    "Premium custom furniture handcrafted in Johannesburg. Nationwide delivery, bespoke designs, and a promise you can trust.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%238b6914' rx='20'/><text x='50' y='72' font-size='60' text-anchor='middle' fill='white' font-weight='bold'>JC</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Jozi Craft – Handcrafted Furniture in South Africa",
    description:
      "Premium custom furniture handcrafted in Johannesburg. Nationwide delivery, bespoke designs, and a promise you can trust.",
    url: "https://jozicraft.co.za",
    siteName: "Jozi Craft",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "https://jozicraft.co.za/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jozi Craft – Premium Custom Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jozi Craft – Handcrafted Furniture in South Africa",
    description:
      "Premium custom furniture handcrafted in Johannesburg. Nationwide delivery, bespoke designs, and a promise you can trust.",
    images: ["https://jozicraft.co.za/images/og-image.png"],
  },
  other: {
    "trustpilot-one-time-domain-verification-id":
      "ca225c2f-b270-4c4a-a641-dcc0ba7790ec",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <body
        className="bg-[#faf6f0] text-[#2d1b0e] antialiased font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}