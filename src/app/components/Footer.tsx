import { Instagram, Facebook, Twitter, Youtube, Zap } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  "Customer Support": [
    { label: "Contact Us", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Returns & Refunds", href: "#" },
  ],
  Policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Delivery Information", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", color: "hover:text-pink-500", href: "#" },
  { icon: Facebook, label: "Facebook", color: "hover:text-blue-500", href: "#" },
  { icon: Twitter, label: "Twitter", color: "hover:text-sky-400", href: "#" },
  { icon: Youtube, label: "YouTube", color: "hover:text-red-500", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#22C55E] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">UN</span>
              </div>
              <div>
                <div className="text-white font-extrabold text-base leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  URBAN NEEDS
                </div>
                <div className="text-gray-500 text-[10px] leading-none">by PAWANPUTRA AGENCY</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-4 text-gray-500">
              "Everything You Need, Delivered Fast" — Fresh groceries, vegetables, fruits and daily essentials in 30–45 minutes.
            </p>

            <div className="flex items-center gap-1.5 text-[#22C55E] text-sm font-semibold mb-5">
              <Zap className="w-4 h-4" />
              30–45 Min Delivery
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#22C55E] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 text-center">
            © 2026 Urban Needs by Pawanputra Agency. All rights reserved. GSTIN: 21FSVPS1815P2ZX
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Made in India 🇮🇳</span>
            <span>·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
