import { ArrowRight, Clock } from "lucide-react";

const offers = [
  {
    title: "Up to 50% OFF",
    subtitle: "On Fresh Vegetables",
    desc: "Limited time offer on all seasonal vegetables. Fresh from farms.",
    cta: "Shop Vegetables",
    gradient: "from-[#22C55E] to-[#16a34a]",
    badge: "Ends Today",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "Fresh Fruits Sale",
    subtitle: "30% OFF Seasonal Fruits",
    desc: "Mangoes, Apples, Grapes and more at unbeatable prices.",
    cta: "Shop Fruits",
    gradient: "from-[#F97316] to-[#ea580c]",
    badge: "New Arrivals",
    emoji: "🍎",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "Grocery Combos",
    subtitle: "Save ₹100 on Combo Packs",
    desc: "Rice, Dal, Oil and more in smart combo packs — maximum savings.",
    cta: "Shop Combos",
    gradient: "from-[#FACC15] to-[#f59e0b]",
    badge: "Best Value",
    emoji: "🛒",
    textDark: true,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&auto=format",
  },
  {
    title: "Daily Essentials",
    subtitle: "Flat 20% OFF",
    desc: "Oils, spices, cleaning products and all daily use items.",
    cta: "Shop Now",
    gradient: "from-[#6366f1] to-[#4f46e5]",
    badge: "Every Day",
    emoji: "🏠",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format",
  },
];

export function OffersSection() {
  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl sm:text-3xl text-gray-900 mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Today's <span className="text-[#F97316]">Special</span> Offers
          </h2>
          <p className="text-gray-500 text-sm">Grab these deals before they expire!</p>
        </div>

        {/* Offers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${offer.gradient} opacity-80`} />
              </div>

              {/* Content */}
              <div className={`relative z-10 p-5 h-48 flex flex-col justify-between ${offer.textDark ? "text-gray-900" : "text-white"}`}>
                <div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold mb-3 ${offer.textDark ? "bg-white/30 text-gray-900" : "bg-white/20 text-white"}`}>
                    <Clock className="w-3 h-3" />
                    {offer.badge}
                  </span>
                  <h3 className="text-xl font-extrabold leading-tight mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {offer.emoji} {offer.title}
                  </h3>
                  <p className={`text-sm font-semibold ${offer.textDark ? "text-gray-800" : "text-white/90"}`}>
                    {offer.subtitle}
                  </p>
                </div>

                <button className={`flex items-center gap-1.5 text-sm font-bold w-fit px-4 py-2 rounded-xl transition-all ${offer.textDark ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white/20 hover:bg-white/30"}`}>
                  {offer.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
