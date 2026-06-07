import { Zap, Leaf, IndianRupee, RotateCcw, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "30–45 Min Delivery",
    desc: "Blazing fast delivery to your doorstep, every order, every time.",
    color: "text-[#22C55E]",
    bg: "bg-[#22C55E]/10",
    number: "01",
  },
  {
    icon: Leaf,
    title: "Fresh Products Daily",
    desc: "We source directly from farms and replenish stock every morning.",
    color: "text-[#F97316]",
    bg: "bg-[#F97316]/10",
    number: "02",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Everyday low prices with no hidden charges — what you see is what you pay.",
    color: "text-[#FACC15]",
    bg: "bg-[#FACC15]/10",
    number: "03",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "Not happy? Easy 24-hour return and refund policy, no questions asked.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    number: "04",
  },
  {
    icon: ShieldCheck,
    title: "Secure Ordering",
    desc: "Your data and payments are protected with 256-bit encryption.",
    color: "text-purple-500",
    bg: "bg-purple-50",
    number: "05",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl text-gray-900 mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Why Choose <span className="text-[#22C55E]">Urban Needs</span>?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            We're committed to making grocery shopping the most convenient part of your day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="relative p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-transparent transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute top-3 right-4 text-5xl font-black text-gray-100 select-none group-hover:text-[#22C55E]/10 transition-colors">
                {reason.number}
              </div>

              <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-4`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3
                className="font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
