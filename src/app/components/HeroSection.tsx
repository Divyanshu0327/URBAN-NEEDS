import { ShoppingBag, ChevronRight, Star, Clock } from "lucide-react";

export function HeroSection() {
  return (
    // ✅ FIX 1: overflow-hidden hata diya — badge clip nahi hoga agle section mein
    <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#fff7ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] px-4 py-2 rounded-full text-sm font-semibold">
              <Clock className="w-4 h-4" />
              30–45 Minute Delivery
            </div>

            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.25rem] text-gray-900 leading-[1.15] mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                Everything You Need,{" "}
                <span className="text-[#22C55E]">Delivered</span> in{" "}
                <span className="text-[#F97316]">30–45 Minutes</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Fresh Groceries, Vegetables, Fruits, Snacks, Beverages and Daily Essentials Delivered to Your Doorstep.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-7 py-3.5 bg-[#22C55E] text-white rounded-2xl font-bold hover:bg-[#16a34a] transition-all duration-200 shadow-lg shadow-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/40 hover:-translate-y-0.5">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-gray-200 text-gray-800 rounded-2xl font-bold hover:border-[#22C55E] hover:text-[#22C55E] transition-all duration-200">
                Explore Categories
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: "10,000+", label: "Happy Customers" },
                { value: "500+", label: "Products" },
                { value: "4.8★", label: "App Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex justify-center lg:justify-end">
            {/* ✅ FIX 2: pb-16 add kiya — floating badge ke liye space, wo clip nahi hoga */}
            <div className="relative w-full max-w-sm lg:max-w-md pb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/20 to-[#F97316]/10 rounded-full blur-3xl scale-110" />

              <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop&auto=format",
                    label: "Fresh Vegetables",
                    badge: "Fresh",
                    badgeColor: "bg-[#22C55E]",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop&auto=format",
                    label: "Juicy Fruits",
                    badge: "Organic",
                    badgeColor: "bg-[#F97316]",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop&auto=format",
                    label: "Daily Essentials",
                    badge: "Best Price",
                    badgeColor: "bg-[#FACC15] text-gray-900",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop&auto=format",
                    label: "Snacks & Drinks",
                    badge: "50% OFF",
                    badgeColor: "bg-[#F97316]",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-1"
                  >
                    <div className="relative h-28 bg-gray-50">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-2 left-2 ${item.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="p-2 text-center">
                      <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ FIX 3: -bottom-2 → bottom-0, z-20 add kiya, whitespace-nowrap taaki text wrap na ho */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100 whitespace-nowrap">
                <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">🛵</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Your order is on the way!</p>
                  <p className="text-sm font-bold text-gray-900">Arrives in 32 mins</p>
                </div>
                <div className="flex shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}