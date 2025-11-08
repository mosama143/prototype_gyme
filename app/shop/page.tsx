import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShopHero } from "@/components/shop/shop-hero"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShopCategories } from "@/components/shop/shop-categories"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <ShopHero />
        <ShopCategories />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
