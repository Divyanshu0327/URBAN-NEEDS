import { useState } from "react";
import {
  Search,
  ShoppingCart,
  MapPin,
  ChevronDown,
  Menu,
  X,
  User,
  Zap,
} from "lucide-react";

interface HeaderProps {
  cartCount: number;
}

export function Header({ cartCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Grocery",
    "Vegetables",
    "Fruits",
    "Snacks",
    "Beverages",
    "Non-Veg",
    "Cleaning",
    "Others",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top delivery strip */}
      <div className="bg-[#22C55E] text-white text-center py-1.5 text-xs font-medium tracking-wide">
        <Zap className="inline w-3 h-3 mr-1" />
        30–45 Minute Delivery • Free delivery on orders above ₹299
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 bg-[#22C55E] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">UN</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[#22C55E] font-extrabold text-lg leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                URBAN NEEDS
              </div>
              <div className="text-gray-400 text-[10px] leading-none">by PAWANPUTRA AGENCY</div>
            </div>
          </div>

          {/* Location */}
          <button className="hidden md:flex items-center gap-1.5 text-gray-700 hover:text-[#22C55E] transition-colors shrink-0 ml-2">
            <MapPin className="w-4 h-4 text-[#F97316]" />
            <div className="text-left">
              <div className="text-[10px] text-gray-400 leading-none">Deliver to</div>
              <div className="text-sm font-semibold leading-none flex items-center gap-0.5">
                Bhubaneswar <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for groceries, fruits, vegetables..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
            />
          </div>

          {/* Categories dropdown - desktop */}
          <div className="hidden lg:block relative group">
            <button className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-[#22C55E] transition-all">
              Categories <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition-colors first:rounded-t-xl last:rounded-b-xl"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Login */}
          <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 border border-[#22C55E] text-[#22C55E] rounded-xl text-sm font-semibold hover:bg-[#22C55E] hover:text-white transition-all duration-200">
            <User className="w-4 h-4" />
            Login
          </button>

          {/* Cart */}
          <button className="relative flex items-center gap-2 px-4 py-2.5 bg-[#22C55E] text-white rounded-xl text-sm font-semibold hover:bg-[#16a34a] transition-all duration-200">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#F97316] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          <button className="flex items-center gap-2 w-full text-left py-2 text-gray-700">
            <MapPin className="w-4 h-4 text-[#F97316]" />
            <span className="text-sm font-medium">Deliver to Bhubaneswar</span>
          </button>
          <div className="border-t border-gray-100 pt-2">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Categories</p>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((cat) => (
                <button key={cat} className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-[#22C55E]/10 hover:text-[#22C55E] rounded-lg transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full py-2.5 border border-[#22C55E] text-[#22C55E] rounded-xl text-sm font-semibold hover:bg-[#22C55E] hover:text-white transition-all">
            Login / Signup
          </button>
        </div>
      )}
    </header>
  );
}
