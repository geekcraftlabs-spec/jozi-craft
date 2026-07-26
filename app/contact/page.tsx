import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const socials = [
    { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/27601089337", color: "#25D366" },
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/furniture_havn/", color: "#E4405F" },
    { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@furniturehave01?is_from_webapp=1&sender_device=pc", color: "#000000" },
    { name: "Email", icon: FaEnvelope, url: "mailto:info@furniturehaven.co.za", color: "#D44638" },
    { name: "Phone", icon: FaPhone, url: "tel:+27682852438", color: "#34B7F1" },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">
          Get in Touch
        </h1>
        <p className="text-[#6b4c3b] text-center max-w-2xl mx-auto mb-12">
          We&apos;d love to hear from you. Whether you have a question, a project idea, or just want to say hello – reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info & Social */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#d4b896]/20">
              <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#8b6914] text-xl mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#4a3520]">Address</p>
                    <p className="text-[#6b4c3b] text-sm">4 Salisbury St, Salisbury Claims, Johannesburg, 2001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-[#8b6914] text-xl mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#4a3520]">Phone (Call)</p>
                    <p className="text-[#6b4c3b] text-sm"><a href="tel:+27682852438" className="hover:text-[#8b6914] transition">+27 68 285 2438</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaWhatsapp className="text-[#25D366] text-xl mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#4a3520]">WhatsApp</p>
                    <p className="text-[#6b4c3b] text-sm"><a href="https://wa.me/27601089337" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">+27 60 108 9337</a></p>
                    <p className="text-xs text-[#6b4c3b]/60 mt-0.5">Secondary: <a href="https://wa.me/27634954249" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">+27 63 495 4249</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-[#8b6914] text-xl mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#4a3520]">Email</p>
                    <p className="text-[#6b4c3b] text-sm"><a href="mailto:info@furniturehaven.co.za" className="hover:text-[#8b6914] transition">info@furniturehaven.co.za</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaClock className="text-[#8b6914] text-xl mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#4a3520]">Workshop Hours</p>
                    <p className="text-[#6b4c3b] text-sm">
                      Mon – Fri: 8:00 AM – 5:00 PM<br />
                      Saturday: 9:00 AM – 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#d4b896]/20">
              <h3 className="font-serif text-xl font-bold text-[#4a3520] mb-4">Connect with Us</h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition shadow-md"
                    style={{ backgroundColor: social.color }}
                    aria-label={social.name}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#8b6914] text-white p-6 rounded-2xl shadow-md">
              <p className="text-sm font-semibold text-center">
                💰 <span className="font-bold">Pay on Delivery</span> – You inspect first, you pay only when you&apos;re satisfied.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#d4b896]/20">
              <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-4">Send Us a Message</h2>
              <form
                action="https://formspree.io/f/xannappo"
                method="POST"
                target="_blank"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-[#4a3520] mb-1">Your Name</label>
                  <input type="text" name="name" required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4a3520] mb-1">Email Address</label>
                  <input type="email" name="email" required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4a3520] mb-1">Phone Number</label>
                  <input type="tel" name="phone" required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4a3520] mb-1">Message</label>
                  <textarea name="message" rows={5} required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#8b6914] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b4c1e] transition shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-md border border-[#d4b896]/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5913079615193!2d28.044739999999997!3d-26.209969899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e979cda5d93%3A0xf48674dd6b28b6cf!2s4%20Salisbury%20St%2C%20Salisbury%20Claims%2C%20Johannesburg%2C%202001!5e0!3m2!1sen!2sza!4v1756831820669"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}