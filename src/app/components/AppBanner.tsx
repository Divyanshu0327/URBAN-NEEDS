import { Smartphone, Star, Download } from "lucide-react";

export function AppBanner() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#22C55E] via-[#16a34a] to-[#15803d] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-24 -translate-y-24" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-16 translate-y-16" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#FACC15]/10 rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm font-medium mb-5">
              <Smartphone className="w-4 h-4" />
              Mobile App Available
            </div>
            <h2
              className="text-3xl sm:text-4xl text-white mb-4 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Shop Anytime,
              <br />
              Anywhere
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Download the URBAN NEEDS app and get exclusive app-only deals, track your orders in real-time, and enjoy an even faster checkout experience.
            </p>

            {/* App Rating */}
            <div className="flex items-center gap-4 mb-7">
              <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
                <span className="text-white text-xs font-medium">4.8 App Store</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-xl px-4 py-2">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
                <span className="text-white text-xs font-medium">4.7 Play Store</span>
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-3 bg-white text-gray-900 rounded-xl px-5 py-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <Download className="w-5 h-5 text-[#22C55E]" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-gray-900 rounded-xl px-5 py-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <Download className="w-5 h-5 text-[#F97316]" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 leading-none">Get it on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-56 h-[440px] bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden relative">
                {/* Screen */}
                <div className="absolute inset-1 bg-white rounded-[2rem] overflow-hidden">
                  {/* App header */}
                  <div className="bg-[#22C55E] p-4 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-[#22C55E] font-black text-[10px]">UN</span>
                      </div>
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>URBAN NEEDS</span>
                    </div>
                    <div className="bg-white/20 rounded-lg px-3 py-2 text-white/80 text-xs">
                      🔍 Search groceries...
                    </div>
                  </div>
                  {/* App content preview */}
                  <div className="p-3 space-y-2">
                    <div className="bg-[#22C55E]/10 rounded-xl p-3">
                      <p className="text-[10px] font-bold text-[#22C55E]">🛵 Delivering in 32 mins</p>
                      <p className="text-[9px] text-gray-500">Track your order live</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["🥦 Veggies", "🍎 Fruits", "🛒 Grocery", "🧃 Drinks"].map((item) => (
                        <div key={item} className="bg-gray-50 rounded-xl p-2 text-center">
                          <p className="text-[11px] font-medium text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {["Tomatoes 1kg — ₹39", "Bananas 6pcs — ₹29", "Milk 500ml — ₹32"].map((item) => (
                        <div key={item} className="flex items-center justify-between bg-gray-50 rounded-lg px-2.5 py-2">
                          <span className="text-[10px] text-gray-600">{item.split("—")[0]}</span>
                          <span className="text-[10px] font-bold text-[#22C55E]">{item.split("—")[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-2xl z-10" />
              </div>

              {/* Floating notification */}
              <div className="absolute -right-4 top-16 bg-white rounded-xl shadow-xl p-3 w-40 border border-gray-100">
                <p className="text-[10px] font-bold text-gray-900">Order Confirmed! 🎉</p>
                <p className="text-[9px] text-gray-500">Arriving in 35 mins</p>
              </div>

              {/* Floating offer badge */}
              <div className="absolute -left-4 bottom-20 bg-[#F97316] text-white rounded-xl shadow-xl p-3 w-36">
                <p className="text-[10px] font-bold">App Exclusive</p>
                <p className="text-xs font-black">Extra 10% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
