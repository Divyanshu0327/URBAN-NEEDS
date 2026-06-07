import { useState } from "react";
import { ShoppingCart, Star, Plus, Check, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Farm Fresh Tomatoes",
    unit: "1 kg",
    price: 39,
    mrp: 55,
    discount: 29,
    rating: 4.5,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1546094096-0df4bcabd564?w=300&h=300&fit=crop&auto=format",
    badge: "Bestseller",
    badgeColor: "bg-[#22C55E]",
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Organic Bananas",
    unit: "500 g",
    price: 29,
    mrp: 40,
    discount: 27,
    rating: 4.7,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop&auto=format",
    badge: "Organic",
    badgeColor: "bg-[#F97316]",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Tata Salt",
    unit: "1 kg",
    price: 24,
    mrp: 28,
    discount: 14,
    rating: 4.9,
    reviews: 342,
    img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300&h=300&fit=crop&auto=format",
    badge: null,
    badgeColor: "",
    category: "Grocery",
  },
  {
    id: 4,
    name: "Fresh Whole Milk",
    unit: "500 ml",
    price: 32,
    mrp: 36,
    discount: 11,
    rating: 4.6,
    reviews: 201,
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop&auto=format",
    badge: "Fresh Daily",
    badgeColor: "bg-blue-500",
    category: "Dairy",
  },
  {
    id: 5,
    name: "Lays Classic Chips",
    unit: "26 g",
    price: 20,
    mrp: 20,
    discount: 0,
    rating: 4.4,
    reviews: 455,
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop&auto=format",
    badge: null,
    badgeColor: "",
    category: "Snacks",
  },
  {
    id: 6,
    name: "Red Apples",
    unit: "6 pieces",
    price: 99,
    mrp: 140,
    discount: 29,
    rating: 4.8,
    reviews: 176,
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop&auto=format",
    badge: "Premium",
    badgeColor: "bg-[#ef4444]",
    category: "Fruits",
  },
  {
    id: 7,
    name: "Coca-Cola",
    unit: "750 ml",
    price: 45,
    mrp: 50,
    discount: 10,
    rating: 4.3,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop&auto=format",
    badge: null,
    badgeColor: "",
    category: "Beverages",
  },
  {
    id: 8,
    name: "Basmati Rice",
    unit: "5 kg",
    price: 349,
    mrp: 450,
    discount: 22,
    rating: 4.7,
    reviews: 293,
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&auto=format",
    badge: "Value Pack",
    badgeColor: "bg-[#FACC15] text-gray-900",
    category: "Grocery",
  },
];

export function ProductsSection() {
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const handleAdd = (id: number) => {
    setAddedItems((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 1500);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              className="text-2xl sm:text-3xl text-gray-900 mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Best <span className="text-[#F97316]">Selling</span> Products
            </h2>
            <p className="text-gray-500 text-sm">Top picks loved by thousands of customers</p>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-[#22C55E] text-sm font-semibold hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => {
            const isAdded = addedItems.has(product.id);
            return (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#22C55E]/30 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-44 bg-gray-50 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  {product.badge && (
                    <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                      {product.badge}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-[#22C55E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-0.5 line-clamp-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{product.unit}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center gap-0.5 bg-[#22C55E]/10 px-1.5 py-0.5 rounded-md">
                      <Star className="w-3 h-3 fill-[#22C55E] text-[#22C55E]" />
                      <span className="text-[11px] font-bold text-[#22C55E]">{product.rating}</span>
                    </div>
                    <span className="text-[10px] text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Price & Cart */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-gray-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        ₹{product.price}
                      </span>
                      {product.discount > 0 && (
                        <span className="text-xs text-gray-400 line-through ml-1">₹{product.mrp}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAdd(product.id)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                        isAdded
                          ? "bg-[#22C55E] text-white"
                          : "bg-[#22C55E]/10 text-[#22C55E] hover:bg-[#22C55E] hover:text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile view all */}
        <div className="flex justify-center mt-6 sm:hidden">
          <button className="flex items-center gap-1 text-[#22C55E] text-sm font-semibold">
            View All Products <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
