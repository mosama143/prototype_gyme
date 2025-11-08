"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function ProductsManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: 1,
      name: "Premium Whey Protein",
      category: "Supplements",
      price: 49.99,
      stock: 156,
      image: "/whey-protein-powder.jpg",
    },
    {
      id: 2,
      name: "Energy Pre-Workout",
      category: "Supplements",
      price: 39.99,
      stock: 89,
      image: "/pre-workout-supplement.jpg",
    },
    {
      id: 3,
      name: "Performance Training Shirt",
      category: "Apparel",
      price: 29.99,
      stock: 234,
      image: "/gym-training-shirt.jpg",
    },
    { id: 4, name: "Athletic Shorts", category: "Apparel", price: 34.99, stock: 178, image: "/athletic-shorts.jpg" },
    {
      id: 5,
      name: "Resistance Band Set",
      category: "Equipment",
      price: 24.99,
      stock: 312,
      image: "/resistance-bands.jpg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Products Management</h1>
          <p className="text-gray-400">Manage your shop inventory and product listings</p>
        </div>
        <Button className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
          <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white">
            <option>All Categories</option>
            <option>Supplements</option>
            <option>Apparel</option>
            <option>Equipment</option>
            <option>Accessories</option>
          </select>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-white/5 border-white/10 overflow-hidden group">
            <div className="aspect-square overflow-hidden bg-white/5">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-[#84FF00] font-bold mb-1 uppercase">{product.category}</div>
              <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-white">${product.price}</span>
                <span className="text-sm text-gray-400">Stock: {product.stock}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-400/20 text-red-400 hover:bg-red-400/10 bg-transparent"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
