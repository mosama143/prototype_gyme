"use client"

import { Users, DollarSign, TrendingUp, ShoppingBag } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Line, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler)

export function DashboardOverview() {
  const stats = [
    {
      name: "Total Users",
      value: "5,234",
      change: "+12.5%",
      icon: Users,
      color: "text-[#84FF00]",
      bgColor: "bg-[#84FF00]/10",
    },
    {
      name: "Total Orders",
      value: "1,847",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "text-[#FF6B00]",
      bgColor: "bg-[#FF6B00]/10",
    },
    {
      name: "Total Sales",
      value: "$94,532",
      change: "+23.1%",
      icon: DollarSign,
      color: "text-[#00D9FF]",
      bgColor: "bg-[#00D9FF]/10",
    },
    {
      name: "Active Subscriptions",
      value: "3,891",
      change: "+15.3%",
      icon: TrendingUp,
      color: "text-[#84FF00]",
      bgColor: "bg-[#84FF00]/10",
    },
  ]

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: "#84FF00",
        backgroundColor: "rgba(132, 255, 0, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const productsData = {
    labels: ["Supplements", "Apparel", "Equipment", "Accessories"],
    datasets: [
      {
        label: "Sales by Category",
        data: [45000, 28000, 35000, 18000],
        backgroundColor: ["#84FF00", "#FF6B00", "#00D9FF", "#FF0080"],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: "#9CA3AF",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your gym today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.name}
            className="bg-white/5 border-white/10 p-6 hover:border-[#84FF00]/50 transition-all duration-300 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[#84FF00] text-sm font-bold">{stat.change}</span>
            </div>
            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.name}</div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Sales Over Time</h3>
          <div className="h-64">
            <Line data={salesData} options={chartOptions} />
          </div>
        </Card>

        <Card className="bg-white/5 border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Sales by Category</h3>
          <div className="h-64">
            <Bar data={productsData} options={chartOptions} />
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white/5 border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Recent Orders</h3>
        <div className="space-y-4">
          {[
            {
              id: "#ORD-1234",
              customer: "John Doe",
              product: "Premium Whey Protein",
              amount: "$49.99",
              status: "Completed",
            },
            {
              id: "#ORD-1235",
              customer: "Jane Smith",
              product: "Gym Duffel Bag",
              amount: "$54.99",
              status: "Processing",
            },
            {
              id: "#ORD-1236",
              customer: "Mike Johnson",
              product: "Resistance Band Set",
              amount: "$24.99",
              status: "Completed",
            },
            {
              id: "#ORD-1237",
              customer: "Sarah Williams",
              product: "Premium Yoga Mat",
              amount: "$44.99",
              status: "Pending",
            },
          ].map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#84FF00]/10 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#84FF00]" />
                </div>
                <div>
                  <div className="font-bold text-white">{order.id}</div>
                  <div className="text-sm text-gray-400">
                    {order.customer} • {order.product}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-white">{order.amount}</div>
                <div
                  className={`text-sm ${
                    order.status === "Completed"
                      ? "text-[#84FF00]"
                      : order.status === "Processing"
                        ? "text-[#FF6B00]"
                        : "text-gray-400"
                  }`}
                >
                  {order.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
