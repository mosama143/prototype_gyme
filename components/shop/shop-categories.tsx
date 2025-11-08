"use client"

import { useState } from "react"

export function ShopCategories() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Supplements", "Apparel", "Equipment", "Accessories"]

  return (
    <section className="py-8 bg-black border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                selectedCategory === category
                  ? "bg-[#84FF00] text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
