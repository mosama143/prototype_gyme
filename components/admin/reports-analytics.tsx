"use client"
import { Card } from "@/components/ui/card"
import { Line, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler)

export function ReportsAnalytics() {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [45000, 52000, 48000, 61000, 58000, 70000],
        borderColor: "#84FF00",
        backgroundColor: "rgba(132, 255, 0, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const subscriptionsData = {
    labels: ["Basic", "Premium", "Elite"],
    datasets: [
      {
        data: [1200, 2400, 1291],
        backgroundColor: ["#84FF00", "#FF6B00", "#00D9FF"],
      },
    ],
  }

  const topProducts = [
    { name: "Premium Whey Protein", sales: 456, revenue: 22794.44 },
    { name: "Gym Duffel Bag", sales: 312, revenue: 17155.88 },
    { name: "Resistance Band Set", sales: 289, revenue: 7221.11 },
    { name: "Premium Yoga Mat", sales: 267, revenue: 12011.33 },
    { name: "Energy Pre-Workout", sales: 234, revenue: 9357.66 },
  ]

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
        <h1 className="text-3xl font-black text-white mb-2">Reports & Analytics</h1>
        <p className="text-gray-400">Track your business performance and growth</p>
      </div>

      {/* Revenue Chart */}
      <Card className="bg-white/5 border-white/10 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Revenue Over Time</h3>
        <div className="h-80">
          <Line data={revenueData} options={chartOptions} />
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscriptions Distribution */}
        <Card className="bg-white/5 border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Subscriptions Distribution</h3>
          <div className="h-64">
            <Doughnut
              data={subscriptionsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      color: "#9CA3AF",
                      padding: 20,
                    },
                  },
                },
              }}
            />
          </div>
        </Card>

        {/* Top Selling Products */}
        <Card className="bg-white/5 border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Top Selling Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#84FF00]/10 rounded-lg flex items-center justify-center font-bold text-[#84FF00]">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{product.name}</div>
                    <div className="text-xs text-gray-400">{product.sales} sales</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">${product.revenue.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
