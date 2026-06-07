import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Bhubaneswar",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    text: "Urban Needs is my go-to app for daily groceries! The vegetables are always fresh and delivery is super fast. Got my order in just 28 minutes! Highly recommended.",
    tag: "Vegetables & Fruits",
    date: "3 days ago",
  },
  {
    name: "Rahul Pattnaik",
    location: "Cuttack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    text: "Best prices in town! I compared with local markets and Urban Needs is equally affordable with the convenience of home delivery. The combo packs are great value.",
    tag: "Grocery Combo",
    date: "1 week ago",
  },
  {
    name: "Arpita Das",
    location: "Bhubaneswar",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
    rating: 5,
    text: "Absolutely love the service! The app is so easy to use and the customer support team is very helpful. Had an issue once and they resolved it within 30 minutes!",
    tag: "Customer Support",
    date: "2 weeks ago",
  },
  {
    name: "Sanjay Mishra",
    location: "Puri",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format",
    rating: 4,
    text: "Very impressed with the quality of products. Ordered chicken and it was super fresh. Delivery was on time and packaging was excellent. Will definitely order again.",
    tag: "Non-Veg",
    date: "3 weeks ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#FACC15] text-[#FACC15]" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-12 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl text-gray-900 mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            What Our <span className="text-[#22C55E]">Customers</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.8</span>
            <span className="text-gray-500 text-sm">from 2,400+ reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:border-[#22C55E]/20 transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#22C55E]/10" />

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#22C55E]/20"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-3">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-[#22C55E]/10 text-[#22C55E] font-semibold px-2.5 py-1 rounded-full">
                  {review.tag}
                </span>
                <span className="text-[10px] text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
