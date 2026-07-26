/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
  const socials = [
    { name: "WhatsApp", img: "whatsapp.png", url: "https://wa.me/27601089337" },
    { name: "Instagram", img: "instagram.png", url: "https://www.instagram.com/anotheronedown__" },
    { name: "TikTok", img: "tiktok.png", url: "https://www.tiktok.com/@geek.craft.labs" },
    { name: "Twitter", img: "twitter.png", url: "https://x.com/another_1_downn" },
    { name: "Email", img: "email.png", url: "mailto:info@furniturehaven.co.za" },
    { name: "Phone", img: "phone.png", url: "tel:+27682852438" },
  ];

  return (
    <footer className="bg-[#4a3520] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="font-serif font-bold text-2xl mb-3 text-[#d4b896]">
              Furniture Haven
            </h3>
            <p className="text-white/70 text-sm max-w-md mx-auto md:mx-0">
              Handcrafted furniture that feels like home. Custom designs,
              premium quality, and nationwide delivery – with a promise you can trust.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#d4b896] mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/portfolio" className="hover:text-[#d4b896] transition">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-[#d4b896] transition">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#d4b896] transition">Testimonials</Link></li>
              <li><Link href="/delivery" className="hover:text-[#d4b896] transition">Delivery Schedule</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4b896] transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#d4b896] mb-3">Connect</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#d4b896] hover:scale-110 transition"
                  aria-label={social.name}
                >
                  <img
                    src={`/images/${social.img}`}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/50 mt-3">
              <a href="tel:+27682852438" className="hover:text-[#d4b896] transition">
                +27 68 285 2438
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Furniture Haven. All rights reserved.</p>
          <p className="mt-1">Crafted with care in Johannesburg.</p>
        </div>
      </div>
    </footer>
  );
}