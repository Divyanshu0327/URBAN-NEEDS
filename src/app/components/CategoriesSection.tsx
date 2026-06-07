import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Grocery",
    emoji: "🛒",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop&auto=format",
    color: "from-amber-50 to-amber-100",
    accent: "#F97316",
  },
  {
    name: "Vegetables",
    emoji: "🥦",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=200&h=200&fit=crop&auto=format",
    color: "from-green-50 to-green-100",
    accent: "#22C55E",
  },
  {
    name: "Fruits",
    emoji: "🍎",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop&auto=format",
    color: "from-red-50 to-rose-100",
    accent: "#ef4444",
  },
  {
    name: "Snacks",
    emoji: "🍿",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop&auto=format",
    color: "from-yellow-50 to-yellow-100",
    accent: "#FACC15",
  },
  {
    name: "Beverages",
    emoji: "🧃",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop&auto=format",
    color: "from-sky-50 to-sky-100",
    accent: "#0ea5e9",
  },
  {
    name: "Non-Veg",
    emoji: "🍗",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop&auto=format",
    color: "from-orange-50 to-red-100",
    accent: "#F97316",
  },
  {
    name: "Cleaning",
    emoji: "🧹",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop&auto=format",
    color: "from-blue-50 to-indigo-100",
    accent: "#6366f1",
  },
  {
    name: "Agarbatti",
    emoji: "🪔",
    img: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=200&h=200&fit=crop&auto=format",
    color: "from-purple-50 to-violet-100",
    accent: "#a855f7",
  },
  {
    name: "Services",
    emoji: "⚙️",
    img: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=200&h=200&fit=crop&auto=format",
    color: "from-teal-50 to-cyan-100",
    accent: "#14b8a6",
  },
  {
    name: "Others",
    emoji: "📦",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=200&fit=crop&auto=format",
    color: "from-gray-50 to-slate-100",
    accent: "#64748b",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              className="text-2xl sm:text-3xl text-gray-900 mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Shop by <span className="text-[#22C55E]">Categories</span>
            </h2>
            <p className="text-gray-500 text-sm">Find everything you need in one place</p>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-[#22C55E] text-sm font-semibold hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-[#22C55E] transition-colors text-center leading-tight">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="flex justify-center mt-6 sm:hidden">
          <button className="flex items-center gap-1 text-[#22C55E] text-sm font-semibold">
            View All Categories <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
