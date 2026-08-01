import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a3520] via-[#8b6914] to-[#c87a3a]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4b896]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#faf6f0]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-[#d4b896]">Jozi Craft</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Handcrafted furniture that transforms houses into homes. Quality craftsmanship,
            timeless design, and a promise you can trust.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3520]">
              Our Mission &amp; Vision
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#d4b896]/20">
            <p className="text-[#6b4c3b] leading-relaxed">
              At Jozi Craft, our mission is to transform houses into homes with
              premium furniture that combines functionality, elegance, and
              durability. We aim to make every piece a reflection of your unique
              style and a testament to superior craftsmanship.
            </p>
            <p className="text-[#6b4c3b] leading-relaxed mt-4">
              Our vision is to become a global leader in bespoke furniture, setting the standard
              for quality and innovation while ensuring every client&apos;s needs are
              met with unparalleled precision and care.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📖</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3520]">
              Our Story
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#d4b896]/20">
            <p className="text-[#6b4c3b] leading-relaxed">
              Jozi Craft began with a simple belief: everyone deserves a space
              that feels truly their own. What started as a small workshop in
              Johannesburg has grown into a trusted name in the furniture industry,
              where innovation meets tradition.
            </p>
            <p className="text-[#6b4c3b] leading-relaxed mt-4">
              From humble beginnings, we&apos;ve crafted furniture that not only complements
              spaces but also tells a story. Today, we stand as a brand synonymous
              with customization, quality, and a passion for excellence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💎</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3520]">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🪚", title: "Craftsmanship", desc: "Every piece is built with precision, care, and attention to detail." },
              { icon: "❤️", title: "Customer Satisfaction", desc: "Your happiness is our priority. We deliver quality you can trust." },
              { icon: "💡", title: "Innovation", desc: "We push boundaries with fresh designs and modern techniques." },
              { icon: "🌱", title: "Sustainability", desc: "Responsible sourcing and eco-friendly practices for a better future." },
              { icon: "🤝", title: "Integrity", desc: "Honest pricing, transparent policies, and a promise we keep." },
              { icon: "🏡", title: "Community", desc: "Proudly South African, supporting local craftsmanship and talent." },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#d4b896]/20 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[#4a3520] mb-1">{value.title}</h3>
                <p className="text-sm text-[#6b4c3b]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⭐</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4a3520]">
              What Sets Us Apart
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#d4b896]/20">
            <p className="text-[#6b4c3b] leading-relaxed">
              Jozi Craft isn&apos;t just another furniture brand; it&apos;s a partner in
              making your dream space a reality. We specialize in custom designs,
              tailoring every piece to your needs and style preferences.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3 text-[#6b4c3b]">
                <span className="text-[#8b6914] text-lg">✓</span>
                <span><span className="font-semibold text-[#4a3520]">Custom Designs</span> – Every piece is made to your exact specifications</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b4c3b]">
                <span className="text-[#8b6914] text-lg">✓</span>
                <span><span className="font-semibold text-[#4a3520]">Quality Assurance</span> – Rigorous checks to ensure it exceeds expectations</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b4c3b]">
                <span className="text-[#8b6914] text-lg">✓</span>
                <span><span className="font-semibold text-[#4a3520]">End-to-End Service</span> – From concept to creation, we make it effortless</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b4c3b]">
                <span className="text-[#8b6914] text-lg">✓</span>
                <span><span className="font-semibold text-[#4a3520]">Nationwide Delivery</span> – We bring your furniture right to your door</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#8b6914] rounded-2xl p-8 md:p-10 text-center text-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Let&apos;s Bring Your Vision to Life
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Ready to elevate your living space? Let Jozi Craft bring your vision
            to life. Explore our collection, schedule a consultation, or share
            your ideas with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="bg-white text-[#8b6914] px-8 py-3 rounded-full font-semibold hover:bg-[#faf6f0] transition shadow-lg"
            >
              View Our Portfolio
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}