"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import CategoryShowcase from "@/components/CategoryShowcase";
import DeliveryTracker from "@/components/DeliveryTracker";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const trustBadges = [
    { icon: "🪚", label: "Custom Made", desc: "Designed for your space" },
    { icon: "🌳", label: "Premium Wood", desc: "Quality materials only" },
    { icon: "🤝", label: "Pay on Delivery", desc: "Inspect before you pay" },
    { icon: "🏡", label: "Locally Crafted", desc: "Proudly South African" },
    { icon: "📦", label: "Free Delivery", desc: "Within Gauteng" },
  ];

  const features = [
    {
      title: "Bespoke Craftsmanship",
      desc: "Every piece is custom-made to your specifications. Choose your wood, finish, and dimensions.",
      icon: "🪵",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver across South Africa. Check our schedule to see when we'll be in your province.",
      icon: "🚚",
    },
    {
      title: "Pay on Delivery",
      desc: "You only pay when we deliver and you're completely satisfied. Nationwide delivery with inspection before payment.",
      icon: "🤝",
    },
  ];

  // Show nothing on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-[#4a3520] text-center">
          <div className="text-4xl mb-4">🪑</div>
          <p className="text-sm text-[#6b4c3b]">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a3520] via-[#8b6914] to-[#c87a3a]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4b896]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#faf6f0]/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="absolute top-20 left-10 w-4 h-4 bg-[#d4b896]/30 rounded-full blur-sm animate-bounce-slow" />
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-[#d4b896]/20 rounded-full blur-sm animate-bounce-slow delay-700" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full blur-sm animate-bounce-slow delay-500" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="inline-block bg-[#d4b896]/20 backdrop-blur-sm text-[#d4b896] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            >
              🪵 Handcrafted in Johannesburg
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
            >
              Furniture That
              <br />
              <span className="text-[#d4b896]">Feels Like Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="text-white/80 text-lg max-w-lg mb-8"
            >
              At Furniture Haven, we create custom furniture that transforms houses
              into homes. Quality craftsmanship, timeless design, and a promise
              you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/portfolio"
                className="bg-white text-[#4a3520] px-8 py-3 rounded-full font-semibold hover:bg-[#faf6f0] transition shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Explore Our Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                Get a Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6 mt-6 text-sm text-white/60"
            >
              <span>✅ Custom Designs</span>
              <span>🔨 Premium Materials</span>
              <span>🤝 Pay on Delivery</span>
            </motion.div>
          </motion.div>

          {/* Right: Category Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 md:p-6 border border-white/20 shadow-2xl">
              <CategoryShowcase />
              <p className="text-white/60 text-xs text-center mt-3">
                Click any category to explore more
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#8b6914] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl animate-float">
              🖼️ View Gallery
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a3520]">
            Why Choose <span className="text-[#8b6914]">Furniture Haven</span>
          </h2>
          <p className="text-[#6b4c3b] mt-2">Quality you can see, feel, and trust</p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin snap-x">
          {trustBadges.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="snap-start shrink-0"
            >
              <TiltCard glowColor="#8b6914">
                <div className="min-w-[160px] md:min-w-[180px] bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/30">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-[#4a3520] text-sm">{item.label}</h3>
                  <p className="text-xs text-[#6b4c3b] mt-1">{item.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DELIVERY TRACKER */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a3520]">
            Nationwide <span className="text-[#8b6914]">Delivery Schedule</span>
          </h2>
          <p className="text-[#6b4c3b] mt-2">
            We travel across South Africa. Here&apos;s when we&apos;ll be near you.
          </p>
        </motion.div>

        <DeliveryTracker />
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a3520]">
            Crafted With <span className="text-[#8b6914]">Excellence</span>
          </h2>
          <p className="text-[#6b4c3b] mt-2">Every detail matters. Every piece tells a story.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <TiltCard glowColor="#d4b896">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 shadow-xl h-full">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-[#4a3520] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#6b4c3b] text-sm">{feature.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PAYMENT POLICY SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a3520]">
            Our <span className="text-[#8b6914]">Payment Promise</span>
          </h2>
          <p className="text-[#6b4c3b] mt-2">Fair, transparent, and built on trust</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TiltCard glowColor="#d4b896">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl h-full">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-serif text-2xl font-bold text-[#4a3520] mb-3">
                  Pay on Delivery
                </h3>
                <p className="text-[#6b4c3b] mb-4">
                  For most of our furniture, <span className="font-semibold">you only pay when we deliver</span>.
                  We bring it to your door anywhere in South Africa, you inspect it,
                  and only then do you hand over payment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    ✅ Nationwide Delivery
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    ✅ Inspect First
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    ✅ 100% Satisfaction
                  </span>
                </div>
                <p className="text-xs text-[#6b4c3b]/70 mt-4 italic">
                  You see it. You love it. You pay. Simple.
                </p>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TiltCard glowColor="#c87a3a">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl h-full">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="font-serif text-2xl font-bold text-[#c87a3a] mb-3">
                  Deposits for Large Projects
                </h3>
                <p className="text-[#6b4c3b] mb-4">
                  For large-scale custom pieces, we require a <span className="font-semibold">deposit</span> to secure
                  materials and cover production costs. Balance is due on delivery.
                  These exceptions apply to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3 text-[#6b4c3b]">
                    <span className="text-[#c87a3a] text-lg">🖼️</span>
                    <div>
                      <span className="font-semibold text-[#4a3520]">TV Backdrops</span>
                      <p className="text-xs text-[#8b6914]">
                        Custom sizes, intricate designs, premium materials
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#6b4c3b]">
                    <span className="text-[#c87a3a] text-lg">🏠</span>
                    <div>
                      <span className="font-semibold text-[#4a3520]">Full Kitchen Units</span>
                      <p className="text-xs text-[#8b6914]">
                        High material costs, extensive labor, custom layouts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[#6b4c3b]">
                    <span className="text-[#c87a3a] text-lg">🍽️</span>
                    <div>
                      <span className="font-semibold text-[#4a3520]">Dining Room Tables</span>
                      <p className="text-xs text-[#8b6914]">
                        Solid wood, large dimensions, custom finishes
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-4 bg-[#faf6f0] p-3 rounded-lg border border-[#d4b896]/30">
                  <p className="text-xs text-[#6b4c3b]">
                    💡 <span className="font-semibold">Why the deposit?</span> These projects require
                    significant upfront investment in quality materials. A deposit ensures
                    your vision becomes reality without compromise.
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* WORKSHOP SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a3520]">
            Visit Our <span className="text-[#8b6914]">Workshop</span>
          </h2>
          <p className="text-[#6b4c3b] mt-2">
            See the craftsmanship in person and discuss your vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TiltCard glowColor="#d4b896">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">🔨</div>
                  <h3 className="font-serif text-2xl font-bold text-[#4a3520] mb-3">
                    Welcome to Our Workshop
                  </h3>
                  <p className="text-[#6b4c3b] mb-4">
                    We proudly welcome walk-ins! Whether you&apos;re planning a big project
                    or just want to see our work up close, our team is ready to help.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#8b6914] text-xl">📍</span>
                      <div>
                        <p className="font-semibold text-[#4a3520]">Address</p>
                        <p className="text-sm text-[#6b4c3b]">
                          4 Salisbury St, Salisbury Claims, Johannesburg, 2001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#8b6914] text-xl">🕐</span>
                      <div>
                        <p className="font-semibold text-[#4a3520]">Workshop Hours</p>
                        <p className="text-sm text-[#6b4c3b]">
                          Mon – Fri: 8:00 AM – 5:00 PM<br />
                          Saturday: 9:00 AM – 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#8b6914] text-xl">📞</span>
                      <div>
                        <p className="font-semibold text-[#4a3520]">Call Ahead</p>
                        <p className="text-sm text-[#6b4c3b]">
                          <a href="tel:+27682852438" className="hover:text-[#8b6914] transition">
                            +27 68 285 2438
                          </a>
                          <span className="text-xs text-[#6b4c3b]/60 ml-2">
                            (Recommended for big projects)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#4a3520]/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5913079615193!2d28.044739999999997!3d-26.209969899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e979cda5d93%3A0xf48674dd6b28b6cf!2s4%20Salisbury%20St%2C%20Salisbury%20Claims%2C%20Johannesburg%2C%202001!5e0!3m2!1sen!2sza!4v1756831820669"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #4a3520 0%, #8b6914 50%, #c87a3a 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4b896]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4b896]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Have a Vision? <br className="md:hidden" />
              Let&apos;s Bring It to Life.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              className="text-white/80 max-w-2xl mx-auto mb-6"
            >
              From concept to creation – we&apos;ll craft furniture that&apos;s uniquely
              yours. Get in touch and let&apos;s start designing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="bg-white text-[#8b6914] px-8 py-3 rounded-full font-semibold inline-block hover:bg-[#faf6f0] transition shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}