import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Brand info */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#22C55E] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">UN</span>
                </div>
                <div>
                  <h3
                    className="text-white font-black text-xl leading-none"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    URBAN NEEDS
                  </h3>
                  <p className="text-gray-400 text-xs">by PAWANPUTRA AGENCY</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Your trusted partner for fast and fresh grocery delivery. We bring the best products from local markets straight to your doorstep.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Bhubaneswar, Odisha, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold">GST</span>
                  </div>
                  <span className="text-sm font-mono">21FSVPS1815P2ZX</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-sm">We reply within 1 hour</span>
                </div>
              </div>
            </div>

            {/* Right: Support channels */}
            <div className="p-8 lg:p-12">
              <h3
                className="text-white font-black text-xl mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Contact & Support
              </h3>
              <p className="text-gray-400 text-sm mb-7">
                Need help? Reach us instantly through any channel below.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+91 98765 43210",
                    desc: "Mon–Sun, 8 AM – 10 PM",
                    color: "bg-[#22C55E]",
                    href: "tel:+919876543210",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp Support",
                    value: "Chat with us",
                    desc: "Instant response guaranteed",
                    color: "bg-[#25D366]",
                    href: "https://wa.me/919876543210",
                  },
                  {
                    icon: Mail,
                    label: "Email Support",
                    value: "support@urbanneeds.in",
                    desc: "Reply within 1 hour",
                    color: "bg-[#F97316]",
                    href: "mailto:support@urbanneeds.in",
                  },
                ].map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-200 group cursor-pointer"
                  >
                    <div className={`w-11 h-11 ${channel.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <channel.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 leading-none mb-0.5">{channel.label}</p>
                      <p className="text-white font-semibold text-sm leading-tight">{channel.value}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{channel.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
