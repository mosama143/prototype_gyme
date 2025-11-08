"use client"

import { useState } from "react"
import { Search, Eye, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function OrdersManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const orders = [
    {
      id: "#ORD-1234",
      customer: "John Doe",
      items: "Premium Whey Protein, Shaker Bottle",
      total: 64.98,
      status: "Completed",
      date: "2024-03-15",
    },
    {
      id: "#ORD-1235",
      customer: "Jane Smith",
      items: "Gym Duffel Bag",
      total: 54.99,
      status: "Processing",
      date: "2024-03-15",
    },
    {
      id: "#ORD-1236",
      customer: "Mike Johnson",
      items: "Resistance Band Set, Yoga Mat",
      total: 69.98,
      status: "Completed",
      date: "2024-03-14",
    },
    {
      id: "#ORD-1237",
      customer: "Sarah Williams",
      items: "Premium Yoga Mat",
      total: 44.99,
      status: "Pending",
      date: "2024-03-14",
    },
    {
      id: "#ORD-1238",
      customer: "Tom Brown",
      items: "Energy Pre-Workout, BCAA Recovery",
      total: 74.98,
      status: "Cancelled",
      date: "2024-03-13",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white mb-2">Orders Management</h1>
        <p className="text-gray-400">Track and manage all customer orders</p>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
          <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white">
            <option>All Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
      </Card>

      {/* Orders Table */}
      <Card className="bg-white/5 border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Items</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Total</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#84FF00]" />
                      <span className="font-bold text-white">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-300 max-w-xs truncate">{order.items}</td>
                  <td className="px-6 py-4 font-bold text-white">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <select
                      defaultValue={order.status}
                      className={`px-3 py-1 rounded-full text-xs font-bold border-0 ${
                        order.status === "Completed"
                          ? "bg-[#84FF00]/10 text-[#84FF00]"
                          : order.status === "Processing"
                            ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                            : order.status === "Pending"
                              ? "bg-[#00D9FF]/10 text-[#00D9FF]"
                              : "bg-red-400/10 text-red-400"
                      }`}
                    >
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{order.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
