import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustHighlights } from "./components/TrustHighlights";
import { CategoriesSection } from "./components/CategoriesSection";
import { ProductsSection } from "./components/ProductsSection";
import { OffersSection } from "./components/OffersSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ReviewsSection } from "./components/ReviewsSection";
import { AppBanner } from "./components/AppBanner";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [cartCount] = useState(3);

  return (
    <div
      className="min-h-screen bg-[#f8fafc]"
      style={{ fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif" }}
    >
      <Header cartCount={cartCount} />
      <main>
        <HeroSection />
        <TrustHighlights />
        <CategoriesSection />
        <ProductsSection />
        <OffersSection />
        <WhyChooseUs />
        <ReviewsSection />
        <AppBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
