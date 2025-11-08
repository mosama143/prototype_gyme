"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrendingUp, Calendar, ShoppingBag, Award, Activity, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-[#0A0A0A] to-black border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-black text-white mb-2">
                  Welcome back, <span className="text-[#84FF00]">John</span>
                </h1>
                <p className="text-gray-400">Let's crush your fitness goals today!</p>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-400">Current Streak</div>
                  <div className="text-3xl font-black text-[#84FF00]">12 days</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Activity, label: "Workouts This Month", value: "18", color: "text-[#84FF00]" },
                { icon: TrendingUp, label: "Weight Progress", value: "-8 lbs", color: "text-[#FF6B00]" },
                { icon: Target, label: "Goals Completed", value: "5/7", color: "text-[#00D9FF]" },
                { icon: Award, label: "Achievements", value: "12", color: "text-[#84FF00]" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Active Subscription */}
                <div className="bg-gradient-to-r from-[#84FF00]/10 to-[#00D9FF]/10 border border-[#84FF00]/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-black text-white">Active Membership</h2>
                    <span className="bg-[#84FF00] text-black px-3 py-1 rounded-full text-sm font-bold">STANDARD</span>
                  </div>
                  <p className="text-gray-400 mb-4">Your membership renews on April 15, 2024</p>
                  <div className="flex gap-4">
                    <Link href="/membership">
                      <Button
                        variant="outline"
                        className="border-[#84FF00] text-[#84FF00] hover:bg-[#84FF00] hover:text-black bg-transparent"
                      >
                        Upgrade Plan
                      </Button>
                    </Link>
                    <Button variant="ghost" className="text-gray-400 hover:text-white">
                      Manage Subscription
                    </Button>
                  </div>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-black text-white flex items-center gap-2">
                      <Calendar className="h-6 w-6 text-[#84FF00]" />
                      Upcoming Classes
                    </h2>
                    <Link href="/programs" className="text-[#84FF00] text-sm font-bold hover:underline">
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Morning HIIT",
                        trainer: "Marcus Johnson",
                        time: "Tomorrow, 6:00 AM",
                        spots: "3 spots left",
                      },
                      { name: "Yoga Flow", trainer: "Sarah Chen", time: "Tomorrow, 7:00 AM", spots: "5 spots left" },
                      {
                        name: "Strength Training",
                        trainer: "Alex Morgan",
                        time: "Mar 18, 12:00 PM",
                        spots: "8 spots left",
                      },
                    ].map((classItem, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <div className="font-bold text-white">{classItem.name}</div>
                          <div className="text-sm text-gray-400">with {classItem.trainer}</div>
                          <div className="text-sm text-[#84FF00] mt-1">{classItem.time}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-400 mb-2">{classItem.spots}</div>
                          <Button size="sm" className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                            Book
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Tracker */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-[#84FF00]" />
                    Progress Tracker
                  </h2>
                  <div className="space-y-6">
                    {[
                      { label: "Weight Goal", current: 172, target: 165, unit: "lbs", color: "bg-[#84FF00]" },
                      { label: "Weekly Workouts", current: 4, target: 5, unit: "sessions", color: "bg-[#FF6B00]" },
                      { label: "Protein Intake", current: 140, target: 150, unit: "g/day", color: "bg-[#00D9FF]" },
                    ].map((goal, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-bold">{goal.label}</span>
                          <span className="text-gray-400 text-sm">
                            {goal.current} / {goal.target} {goal.unit}
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${goal.color} transition-all duration-500`}
                            style={{ width: `${(goal.current / goal.target) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Purchase History */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-[#84FF00]" />
                    Recent Purchases
                  </h2>
                  <div className="space-y-3">
                    {[
                      { item: "Whey Protein", date: "Mar 10", price: "$49.99" },
                      { item: "Gym Shirt", date: "Mar 5", price: "$29.99" },
                      { item: "Resistance Bands", date: "Feb 28", price: "$24.99" },
                    ].map((purchase, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div>
                          <div className="text-white font-medium">{purchase.item}</div>
                          <div className="text-gray-400 text-xs">{purchase.date}</div>
                        </div>
                        <div className="text-[#84FF00] font-bold">{purchase.price}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/shop">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      View All Orders
                    </Button>
                  </Link>
                </div>

                {/* Achievements */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#84FF00]" />
                    Recent Achievements
                  </h2>
                  <div className="space-y-3">
                    {[
                      { title: "10 Day Streak", icon: "🔥", color: "bg-[#FF6B00]/20" },
                      { title: "First 5K", icon: "🏃", color: "bg-[#84FF00]/20" },
                      { title: "50 Workouts", icon: "💪", color: "bg-[#00D9FF]/20" },
                    ].map((achievement, index) => (
                      <div key={index} className={`flex items-center gap-3 p-3 ${achievement.color} rounded-lg`}>
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="text-white font-bold text-sm">{achievement.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h2 className="text-xl font-black text-white mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    <Link href="/programs">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
                      >
                        Book a Class
                      </Button>
                    </Link>
                    <Link href="/trainers">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
                      >
                        Schedule Training
                      </Button>
                    </Link>
                    <Link href="/shop">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
                      >
                        Shop Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
