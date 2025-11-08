"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ShoppingCartDrawer } from "./shopping-cart-drawer"

export function ProductGrid() {
  const { toast } = useToast()
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [isCartOpen, setIsCartOpen] = useState(false)

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
    },
    {
      id: "gym-shorts",
      name: "Athletic Shorts",
      category: "Apparel",
      price: 34.99,
      image: "/athletic-shorts.jpg",
      rating: 4.5,
      reviews: 142,
      description: "Lightweight with secure pockets",
    },
    {
      id: "resistance-bands",
      name: "Resistance Band Set",
      category: "Equipment",
      price: 24.99,
      image: "/resistance-bands.jpg",
      rating: 4.9,
      reviews: 312,
      description: "5 bands with varying resistance levels",
    },
    {
      id: "yoga-mat",
      name: "Premium Yoga Mat",
      category: "Equipment",
      price: 44.99,
      image: "/yoga-mat.jpg",
      rating: 4.8,
      reviews: 267,
      description: "Non-slip, extra thick cushioning",
    },
    {
      id: "shaker-bottle",
      name: "Blender Bottle",
      category: "Accessories",
      price: 14.99,
      image: "/shaker-bottle.jpg",
      rating: 4.6,
      reviews: 198,
      description: "Leak-proof with mixing ball",
    },
    {
      id: "gym-bag",
      name: "Gym Duffel Bag",
      category: "Accessories",
      price: 54.99,
      image: "/gym-bag.jpg",
      rating: 4.7,
      reviews: 223,
      description: "Spacious with shoe compartment",
    },
    {
      id: "lifting-gloves",
      name: "Weightlifting Gloves",
      category: "Accessories",
      price: 19.99,
      image: "/lifting-gloves.jpg",
      rating: 4.5,
      reviews: 134,
      description: "Padded palm, wrist support",
    },
    {
      id: "bcaa",
      name: "BCAA Recovery",
      category: "Supplements",
      price: 34.99,
      image: "/bcaa-supplement.jpg",
      rating: 4.7,
      reviews: 176,
      description: "Essential amino acids for recovery",
    },
    {
      id: "compression-shirt",
      name: "Compression Top",
      category: "Apparel",
      price: 39.99,
      image: "/compression-shirt.jpg",
      rating: 4.6,
      reviews: 145,
      description: "Muscle support and recovery",
    },
    {
      id: "foam-roller",
      name: "Foam Roller",
      category: "Equipment",
      price: 29.99,
      image: "/foam-roller.jpg",
      rating: 4.8,
      reviews: 289,
      description: "Deep tissue massage and recovery",
    },
  ]

  const addToCart = (productId: string, productName: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(productId)
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }))
    }
  }

  const removeItem = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      delete newCart[productId]
      return newCart
    })
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    })
  }

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#84FF00]/50 hover:shadow-[0_0_30px_rgba(132,255,0,0.2)] transition-all duration-300 group animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
            >
              {/* Product Image */}
              <Link href={`/shop/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-white/5 cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#84FF00]/10 to-transparent" />
                  {cart[product.id] && (
                    <div className="absolute top-2 right-2 bg-[#84FF00] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm animate-pulse">
                      {cart[product.id]}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                    <Button
                      size="sm"
                      className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold backdrop-blur-sm shadow-lg hover:shadow-[0_0_20px_rgba(132,255,0,0.6)] transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-[#84FF00] font-bold mb-1 uppercase tracking-wider">{product.category}</div>
                <Link href={`/shop/${product.id}`}>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#84FF00] transition-colors duration-300 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
                    <span className="text-sm font-bold text-white">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-white group-hover:text-[#84FF00] transition-colors duration-300">
                    ${product.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => addToCart(product.id, product.name)}
                    className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 hover:scale-110 font-bold transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1 group-hover:animate-bounce" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalItems > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 bg-[#84FF00] text-black rounded-full p-4 shadow-2xl hover:scale-110 transition-transform z-40 group animate-[pulse-glow_2s_ease-in-out_infinite]"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-[#FF6B00] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm animate-bounce">
              {totalItems}
            </span>
          </button>
        )}
      </div>

      <ShoppingCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        products={products}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </section>
  )
}
