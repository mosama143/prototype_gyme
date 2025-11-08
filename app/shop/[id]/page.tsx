import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, CheckCircle2, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "whey-protein",
    name: "Premium Whey Protein",
    category: "Supplements",
    price: 49.99,
    image: "/whey-protein-powder.jpg",
    rating: 4.8,
    reviews: 234,
    description: "25g protein per serving, chocolate flavor",
    fullDescription:
      "Our Premium Whey Protein is formulated with the highest quality whey protein isolate to support muscle growth and recovery. Each serving delivers 25g of pure protein with minimal carbs and fat. Perfect for post-workout recovery or as a protein-rich snack throughout the day.",
    features: [
      "25g protein per serving",
      "Low carb and low fat",
      "Fast-absorbing whey isolate",
      "Delicious chocolate flavor",
      "No artificial sweeteners",
      "Gluten-free formula",
    ],
    inStock: true,
    sizes: ["1lb", "2lb", "5lb"],
  },
  {
    id: "pre-workout",
    name: "Energy Pre-Workout",
    category: "Supplements",
    price: 39.99,
    image: "/pre-workout-supplement.jpg",
    rating: 4.6,
    reviews: 189,
    description: "Explosive energy and focus formula",
    fullDescription:
      "Get ready to crush your workouts with our Energy Pre-Workout formula. Packed with scientifically-backed ingredients to boost energy, enhance focus, and improve endurance. Feel the difference from your very first scoop.",
    features: [
      "200mg caffeine per serving",
      "Beta-alanine for endurance",
      "L-citrulline for pumps",
      "Enhanced mental focus",
      "Great tasting flavors",
      "No crash formula",
    ],
    inStock: true,
    sizes: ["20 servings", "40 servings"],
  },
  {
    id: "gym-shirt",
    name: "Performance Training Shirt",
    category: "Apparel",
    price: 29.99,
    image: "/gym-training-shirt.jpg",
    rating: 4.7,
    reviews: 156,
    description: "Moisture-wicking, breathable fabric",
    fullDescription:
      "Train in comfort with our Performance Training Shirt. Made from advanced moisture-wicking fabric that keeps you dry and comfortable during the most intense workouts. The athletic fit provides freedom of movement without being too loose.",
    features: [
      "Moisture-wicking technology",
      "Breathable mesh panels",
      "Athletic fit",
      "Anti-odor treatment",
      "Flatlock seams",
      "Machine washable",
    ],
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="bg-black min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#84FF00] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#84FF00]/20">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-[#84FF00] font-bold mb-2 uppercase tracking-wider">{product.category}</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-[#FF6B00] text-[#FF6B00]" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                <span className="text-white font-bold">{product.rating}</span>
              </div>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="text-5xl font-black text-[#84FF00] mb-6">${product.price}</div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.fullDescription}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="text-white font-bold mb-3 block">Select Size:</label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border-2 border-white/20 rounded-lg text-white hover:border-[#84FF00] hover:bg-[#84FF00]/10 transition-all"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Link href="/checkout">
                <Button size="lg" className="flex-1 bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold text-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-[#84FF00] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Truck className="h-6 w-6 text-[#84FF00] mx-auto mb-2" />
                <div className="text-xs text-gray-400">Free Shipping</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Shield className="h-6 w-6 text-[#84FF00] mx-auto mb-2" />
                <div className="text-xs text-gray-400">Secure Payment</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <RotateCcw className="h-6 w-6 text-[#84FF00] mx-auto mb-2" />
                <div className="text-xs text-gray-400">30-Day Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
