import { Tag, ShieldCheck, Zap, Lock } from "lucide-react";

const highlights = [
  {
    icon: Tag,
    title: "Lowest Prices",
    desc: "Best market prices guaranteed on all products every day.",
    color: "text-[#22C55E]",
    bg: "bg-[#22C55E]/10",
    border: "border-[#22C55E]/20",
  },
  {
    icon: ShieldCheck,
    title: "Best Quality",
    desc: "Handpicked, fresh and quality-checked products delivered to you.",
    color: "text-[#F97316]",
    bg: "bg-[#F97316]/10",
    border: "border-[#F97316]/20",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "30–45 minute doorstep delivery, 7 days a week.",
    color: "text-[#FACC15]",
    bg: "bg-[#FACC15]/10",
    border: "border-[#FACC15]/20",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    desc: "100% safe & encrypted payments via UPI, cards and wallets.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
];

export function TrustHighlights() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center p-5 rounded-2xl border ${item.border} ${item.bg} hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-3`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
