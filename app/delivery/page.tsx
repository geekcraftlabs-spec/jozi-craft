"use client";
import { motion } from "framer-motion";
import { deliveryRoutes, DeliveryRoute } from "@/lib/delivery-data";
import { FaWhatsapp } from "react-icons/fa";

export default function DeliveryPage() {
  const getStatusBadge = (status: DeliveryRoute["status"]) => {
    switch (status) {
      case "available":
        return (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            Available Now
          </span>
        );
      case "scheduled":
        return (
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
            Scheduled
          </span>
        );
      case "pending":
        return (
          <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
            Pending
          </span>
        );
    }
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] mb-4">
            Nationwide <span className="text-[#8b6914]">Delivery Schedule</span>
          </h1>
          <p className="text-[#6b4c3b] max-w-2xl mx-auto">
            We deliver custom furniture across South Africa. Check below to see
            when we&apos;ll be delivering in your province.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="flex items-center gap-1.5 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available Now
            </span>
            <span className="flex items-center gap-1.5 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Scheduled
            </span>
            <span className="flex items-center gap-1.5 text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              Pending
            </span>
          </div>
        </motion.div>

        {/* Delivery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {deliveryRoutes.map((route: DeliveryRoute) => (
            <div
              key={route.id}
              className={`p-6 rounded-2xl border ${
                route.status === "available"
                  ? "bg-green-50/80 backdrop-blur-sm border-green-200 shadow-md"
                  : route.status === "scheduled"
                  ? "bg-blue-50/80 backdrop-blur-sm border-blue-200 shadow-md"
                  : "bg-gray-50/80 backdrop-blur-sm border-gray-200 shadow-md"
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-xl font-bold text-[#4a3520]">
                  {route.province}
                </h3>
                {getStatusBadge(route.status)}
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-xs text-[#6b4c3b] font-medium">Cities</p>
                  <p className="text-sm text-[#4a3520]">{route.cities.join(", ")}</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b4c3b] font-medium">Delivery Dates</p>
                  <p className="text-sm font-semibold text-[#8b6914]">
                    {route.dates}
                  </p>
                </div>

                {route.nextDelivery && (
                  <div>
                    <p className="text-xs text-[#6b4c3b] font-medium">Next Delivery</p>
                    <p className="text-sm text-[#4a3520]">{route.nextDelivery}</p>
                  </div>
                )}

                {route.status === "available" && (
                  <div className="mt-3 bg-green-100/50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 font-medium">
                      🚚 We&apos;re delivering in {route.province} today!
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Contact us now to place your order
                    </p>
                  </div>
                )}

                {route.status === "scheduled" && (
                  <div className="mt-3 bg-blue-100/50 p-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                      📅 Scheduled for {route.dates}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Place your order before the delivery date
                    </p>
                  </div>
                )}

                {route.status === "pending" && (
                  <div className="mt-3 bg-gray-100/50 p-3 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">
                      ⏳ Dates pending
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Check back soon or contact us for updates
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section – Updated WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-[#8b6914] rounded-2xl p-8 text-white">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Ready to Order?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Contact us on WhatsApp to place your order or ask about delivery
              to your area.
            </p>
            <a
              href="https://wa.me/27601089337?text=Hi%20Furniture%20Haven!%20I'm%20interested%20in%20ordering%20furniture.%20Please%20tell%20me%20about%20delivery%20to%20my%20area."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#8b6914] px-8 py-3 rounded-full font-semibold hover:bg-[#faf6f0] transition shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              Contact Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}